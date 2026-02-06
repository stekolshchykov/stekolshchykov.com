import * as THREE from 'three/webgpu';

export type DustConfig = {
  enabled: boolean;
  count: number;
  innerRadius: number;
  outerRadius: number;
  thickness: number;
  spawnJitter: number;
  drag: number;
  planeStiffness: number;
  radialDamping: number;
  minSpeed: number;
  maxSpeed: number;
  gravityMultiplier: number;
  respawnInner: number;
  respawnOuter: number;
  sizeMin: number;
  sizeMax: number;
  density: number;
  brightFactor: number;
  swirl: number;
  orbitBlend: number;
  lensStrength: number;
  redshiftScale: number;
  streakScale: number;
};

type Scratch = {
  r: THREE.Vector3;
  radial: THREE.Vector3;
  tangent: THREE.Vector3;
  perpV: THREE.Vector3;
  tmp: THREE.Vector3;
  tmp2: THREE.Vector3;
  xAxis: THREE.Vector3;
  yAxis: THREE.Vector3;
  zAxis: THREE.Vector3;
  m4: THREE.Matrix4;
};

type Particle = {
  pos: THREE.Vector3;
  vel: THREE.Vector3;
  mass: number;
  size: number;
  color: THREE.Color;
  baseSize: number;
};

export class DustSystem {
  private readonly scene: THREE.Scene;
  private readonly bhPosition: THREE.Vector3;
  private diskNormal: THREE.Vector3;
  private rotationSign: number;
  private horizonRadius: number;
  private diskOuterRadius: number;
  private readonly cameraDir: THREE.Vector3;
  private config: DustConfig;
  private boundsRadius = 0;

  private particles: Particle[] = [];
  private mesh: THREE.InstancedMesh | null = null;
  private readonly scratch: Scratch;
  private readonly dummy: THREE.Object3D;

  constructor(
    scene: THREE.Scene,
    bhPosition: THREE.Vector3,
    diskNormal: THREE.Vector3,
    config: DustConfig,
    horizonRadius: number,
    diskOuterRadius: number,
    rotationSign: number
  ) {
    this.scene = scene;
    this.bhPosition = bhPosition.clone();
    this.diskNormal = diskNormal.clone().normalize();
    this.config = config;
    this.horizonRadius = horizonRadius;
    this.diskOuterRadius = diskOuterRadius;
    this.rotationSign = rotationSign;
    this.cameraDir = new THREE.Vector3(0, 0, 1);

    this.scratch = {
      r: new THREE.Vector3(),
      radial: new THREE.Vector3(),
      tangent: new THREE.Vector3(),
      perpV: new THREE.Vector3(),
      tmp: new THREE.Vector3(),
      tmp2: new THREE.Vector3(),
      xAxis: new THREE.Vector3(),
      yAxis: new THREE.Vector3(),
      zAxis: new THREE.Vector3(),
      m4: new THREE.Matrix4(),
    };
    this.dummy = new THREE.Object3D();
  }

  updateConfig(config: Partial<DustConfig>) {
    const prevCount = this.config.count;
    this.config = { ...this.config, ...config };
    this.boundsRadius = this.config.respawnOuter;
    if (config.count !== undefined && this.config.count !== prevCount) {
      this.dispose();
      this.init();
    }
  }

  updatePhysical(horizonRadius: number, diskOuterRadius: number, rotationSign: number, cameraDir: THREE.Vector3) {
    this.horizonRadius = horizonRadius;
    this.diskOuterRadius = diskOuterRadius;
    this.rotationSign = rotationSign;
    this.cameraDir.copy(cameraDir);
  }

  init(): void {
    const geometry = new THREE.IcosahedronGeometry(1, 0);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    });

    this.mesh = new THREE.InstancedMesh(geometry, material, this.config.count);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 2;

    this.scene.add(this.mesh);

    this.particles = new Array(this.config.count);
    for (let i = 0; i < this.config.count; i++) {
      this.particles[i] = this.spawnParticle();
    }

    this.flushInstanceMatrices();
  }

  dispose(): void {
    if (this.mesh) {
      this.scene.remove(this.mesh);
      this.mesh.geometry.dispose();
      (this.mesh.material as THREE.Material).dispose();
      this.mesh = null;
    }
    this.particles = [];
  }

  setDiskNormal(normal: THREE.Vector3) {
    this.diskNormal.copy(normal).normalize();
  }

  onResize() {
    // placeholder in case we later size dust to viewport; currently no-op.
  }

  update(dt: number): void {
    if (!this.config.enabled || !this.mesh) return;

    const substeps = Math.max(1, Math.min(4, Math.ceil(dt / 0.01)));
    const h = dt / substeps;

    for (let s = 0; s < substeps; s++) {
      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];
        this.integrateParticle(p, h);
      }
    }

    this.flushInstanceMatrices();
  }

  private integrateParticle(p: Particle, dt: number): void {
    const cfg = this.config;
    const { r, radial, tangent, perpV, tmp } = this.scratch;

    r.subVectors(this.bhPosition, p.pos);
    const distSq = Math.max(1e-4, r.lengthSq());
    const dist = Math.sqrt(distSq);

    // Gravitation with softening
    const G = 1.0 * cfg.gravityMultiplier;
    const aGrav = G / (distSq * Math.sqrt(distSq)); // 1/r^3 factor
    r.multiplyScalar(aGrav * dt);
    p.vel.add(r);

    // Keep in disk plane
    perpV.copy(p.vel).projectOnVector(this.diskNormal);
    p.vel.sub(perpV.multiplyScalar(cfg.planeStiffness * dt));

    // Target orbital speed
    radial.subVectors(p.pos, this.bhPosition);
    // Project radial into disk plane for bounds/orbit calculations.
    tmp.copy(radial).addScaledVector(this.diskNormal, -tmp.dot(this.diskNormal));
    const radialPlaneLen = tmp.length();

    const effectiveInner = Math.max(cfg.innerRadius, this.horizonRadius * 1.3);
    const effectiveOuter = Math.min(cfg.outerRadius, this.diskOuterRadius + 1.0);

    if (radialPlaneLen > 1e-4) {
      tangent.crossVectors(this.diskNormal, tmp).normalize().multiplyScalar(this.rotationSign >= 0 ? 1 : -1);
      const vTarget = THREE.MathUtils.clamp(Math.sqrt(G * effectiveInner / radialPlaneLen), cfg.minSpeed, cfg.maxSpeed);
      const desiredVel = tmp.copy(tangent).multiplyScalar(vTarget);

      // Drag toward target tangential velocity
      perpV.copy(desiredVel).sub(p.vel);
      const area = p.size * p.size;
      const aDrag = (cfg.drag * area / Math.max(p.mass, 1e-4));
      p.vel.addScaledVector(perpV, aDrag * dt);

      // Blend velocity towards ideal orbit (helps keep ring coherence)
      const blend = THREE.MathUtils.clamp(cfg.orbitBlend * dt, 0, 0.25);
      p.vel.lerp(desiredVel, blend);

      // Lens-like swirl: subtle precession to accentuate curvature
      const swirl = cfg.swirl * dt;
      p.vel.addScaledVector(tangent, swirl);

      // Radial damping to avoid chaotic escape
      // Use plane radial direction.
      const radialDir = this.scratch.tmp2.copy(radial).addScaledVector(this.diskNormal, -this.scratch.tmp2.dot(this.diskNormal));
      if (radialDir.lengthSq() > 1e-6) radialDir.normalize();
      const radialVel = p.vel.dot(radialDir);
      p.vel.addScaledVector(radialDir, -radialVel * cfg.radialDamping * dt);
    }

    // Clamp overall speed to keep particles bound
    const speed = p.vel.length();
    if (speed > cfg.maxSpeed) {
      p.vel.multiplyScalar(cfg.maxSpeed / speed);
    }

    // Integrate position
    p.pos.addScaledVector(p.vel, dt);

    // Keep within disk thickness
    const height = p.pos.dot(this.diskNormal);
    const maxH = cfg.thickness * 0.5;
    if (Math.abs(height) > maxH) {
      const correction = -Math.sign(height) * (Math.abs(height) - maxH);
      p.pos.addScaledVector(this.diskNormal, correction);
      p.vel.addScaledVector(this.diskNormal, -height * cfg.planeStiffness * dt);
    }

    // Immediate policing: never allow dust in/near the horizon or outside annulus.
    const planeRadialAfter = this.scratch.tmp2.copy(p.pos).sub(this.bhPosition).addScaledVector(this.diskNormal, -this.scratch.tmp2.dot(this.diskNormal));
    const planeLenAfter = planeRadialAfter.length();
    if (dist < this.horizonRadius * 1.05 || planeLenAfter < effectiveInner || planeLenAfter > effectiveOuter) {
      const fresh = this.spawnParticle();
      p.pos.copy(fresh.pos);
      p.vel.copy(fresh.vel);
      p.mass = fresh.mass;
      p.size = fresh.size;
      p.baseSize = fresh.baseSize;
      p.color.copy(fresh.color);
    }
  }

  private spawnParticle(): Particle {
    const cfg = this.config;
    const normal = this.diskNormal;

    // Random radial distance with stronger bias to inner edge
    const minR = Math.max(cfg.innerRadius, this.horizonRadius * 1.3);
    const maxR = Math.min(cfg.outerRadius, this.diskOuterRadius + 1.0);
    const rRange = Math.max(0.1, maxR - minR);
    const t = Math.pow(Math.random(), 0.3); // bias to outer edge
    const r = minR + rRange * t;
    const theta = Math.random() * Math.PI * 2;

    // Build an orthonormal basis for the disk plane
    const u = new THREE.Vector3();
    if (Math.abs(normal.y) < 0.99) {
      u.set(0, 1, 0).cross(normal).normalize();
    } else {
      u.set(1, 0, 0).cross(normal).normalize();
    }
    const v = new THREE.Vector3().crossVectors(normal, u);

    const radial = new THREE.Vector3()
      .copy(u).multiplyScalar(Math.cos(theta))
      .addScaledVector(v, Math.sin(theta))
      .multiplyScalar(r);

    const thickness = THREE.MathUtils.clamp((Math.random() * 2 - 1) * cfg.thickness * 0.25, -cfg.thickness * 0.5, cfg.thickness * 0.5);
    const pos = new THREE.Vector3().copy(this.bhPosition).add(radial).addScaledVector(normal, thickness);

    // Velocity: near-circular plus jitter
    const tangent = new THREE.Vector3().crossVectors(normal, radial).normalize().multiplyScalar(this.rotationSign >= 0 ? 1 : -1);
    const effectiveInner = Math.max(cfg.innerRadius, this.horizonRadius * 1.3);
    const vMag = THREE.MathUtils.clamp(Math.sqrt(cfg.gravityMultiplier * effectiveInner / r) * (0.9 + Math.random() * 0.15), cfg.minSpeed, cfg.maxSpeed);
    const vel = new THREE.Vector3().copy(tangent).multiplyScalar(vMag);
    vel.addScaledVector(normal, (Math.random() - 0.5) * cfg.spawnJitter * 0.1);
    vel.addScaledVector(radial.normalize(), (Math.random() - 0.5) * cfg.spawnJitter * 0.05);

    const size = THREE.MathUtils.lerp(cfg.sizeMin, cfg.sizeMax, Math.pow(Math.random(), 2.0));
    const mass = cfg.density * size * size * size;
    const hue = 0.05 + Math.random() * 0.1; // warm oranges
    const color = new THREE.Color().setHSL(hue, 0.65, 0.55 + Math.random() * 0.25).multiplyScalar(cfg.brightFactor);

    return { pos, vel, mass, size, baseSize: size, color };
  }

  private flushInstanceMatrices() {
    if (!this.mesh) return;
    const dummy = this.dummy;
    const colorAttr = this.mesh.instanceColor ?? new THREE.InstancedBufferAttribute(new Float32Array(this.config.count * 3), 3);
    const colorArray = colorAttr.array as Float32Array;

    const { xAxis, yAxis, zAxis, m4 } = this.scratch;

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      const dist = p.pos.distanceTo(this.bhPosition);
      const gravScale = THREE.MathUtils.clamp(1 + (this.config.respawnInner / Math.max(dist, 0.01)) * 0.25, 1, 2.2);
      const lensScale = 1 + this.config.lensStrength * Math.pow(this.config.respawnInner / Math.max(dist, 0.01), 2.0);
      const flicker = 0.92 + Math.random() * 0.16;
      const scaleBase = p.baseSize * gravScale * lensScale * flicker;
      const brightness = THREE.MathUtils.clamp(
        this.config.brightFactor * gravScale * lensScale * flicker * (1 + this.config.redshiftScale * this.config.respawnInner / Math.max(dist, 0.01)),
        0,
        5
      );

      dummy.position.copy(p.pos);

      // Build a camera-facing basis, with x along velocity.
      xAxis.copy(p.vel);
      const speed = xAxis.length();
      if (speed < 1e-4) {
        xAxis.copy(this.diskNormal);
      } else {
        xAxis.divideScalar(speed);
      }

      // z points out of the ribbon plane (perpendicular to velocity + view dir).
      zAxis.crossVectors(xAxis, this.cameraDir);
      if (zAxis.lengthSq() < 1e-6) {
        zAxis.crossVectors(xAxis, this.diskNormal);
      }
      zAxis.normalize();

      // y completes right-handed basis.
      yAxis.crossVectors(zAxis, xAxis).normalize();

      m4.makeBasis(xAxis, yAxis, zAxis);
      dummy.quaternion.setFromRotationMatrix(m4);

      const stretch = 1 + this.config.streakScale * (this.config.respawnInner / Math.max(dist, 0.01));
      dummy.scale.set(scaleBase * stretch, scaleBase * 0.25, scaleBase * 0.6);
      dummy.updateMatrix();
      this.mesh.setMatrixAt(i, dummy.matrix);
      colorArray[i * 3 + 0] = p.color.r * brightness;
      colorArray[i * 3 + 1] = p.color.g * brightness;
      colorArray[i * 3 + 2] = p.color.b * brightness;
    }

    if (!this.mesh.instanceColor) {
      this.mesh.instanceColor = colorAttr;
    } else {
      this.mesh.instanceColor.needsUpdate = true;
    }

    this.mesh.instanceMatrix.needsUpdate = true;
  }
}
