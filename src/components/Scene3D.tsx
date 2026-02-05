import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { createRoot } from 'react-dom/client';
import { AboutFace } from './faces/AboutFace';
import { SkillsFace } from './faces/SkillsFace';
import { ProjectsFace } from './faces/ProjectsFace';
import { ExperienceFace } from './faces/ExperienceFace';
import { ContactFace } from './faces/ContactFace';
import { EducationFace } from './faces/EducationFace';

interface Scene3DProps {
  targetRotation: { x: number; y: number };
}

export function Scene3D({ targetRotation }: Scene3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const webglContainerRef = useRef<HTMLDivElement>(null);
  const currentRotationRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current || !webglContainerRef.current) return;

    // CSS3D Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      5000
    );
    camera.position.z = 1500;

    const renderer = new CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // WebGL Scene (optimized)
    const webglScene = new THREE.Scene();
    const webglRenderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: 'high-performance' });
    webglRenderer.setSize(window.innerWidth, window.innerHeight);
    webglRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    webglContainerRef.current.appendChild(webglRenderer.domElement);

    // Optimized Black Hole
    const blackHoleGeometry = new THREE.SphereGeometry(150, 32, 32);
    const blackHoleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec2 vUv;
        
        void main() {
          vec2 center = vec2(0.5);
          float dist = distance(vUv, center);
          float ring = sin(dist * 15.0 - time) * 0.5 + 0.5;
          vec3 color = mix(vec3(0.5, 0.0, 1.0), vec3(0.0, 0.5, 1.0), ring);
          float alpha = (1.0 - dist * 2.0) * ring * 0.7;
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending
    });
    const blackHole = new THREE.Mesh(blackHoleGeometry, blackHoleMaterial);
    blackHole.position.set(-800, -600, -2000);
    webglScene.add(blackHole);

    // Optimized stars - reduced count
    const starsGeometry = new THREE.BufferGeometry();
    const starVertices = [];
    for (let i = 0; i < 2000; i++) {
      const x = (Math.random() - 0.5) * 4000;
      const y = (Math.random() - 0.5) * 4000;
      const z = (Math.random() - 0.5) * 4000;
      starVertices.push(x, y, z);
    }
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const starsMaterial = new THREE.PointsMaterial({ 
      color: 0xffffff, 
      size: 2,
      transparent: true,
      opacity: 0.6
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    webglScene.add(stars);

    // Cube wireframe
    const cubeGeometry = new THREE.BoxGeometry(1000, 1000, 1000);
    const edges = new THREE.EdgesGeometry(cubeGeometry);
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x8b5cf6, 
      transparent: true, 
      opacity: 0.3
    });
    const wireframe = new THREE.LineSegments(edges, lineMaterial);
    webglScene.add(wireframe);

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    webglScene.add(ambientLight);

    // Point lights - optimized
    const lights: THREE.PointLight[] = [];
    const lightColors = [0x8b5cf6, 0x3b82f6, 0x10b981, 0xef4444, 0xf97316, 0x06b6d4];
    for (let i = 0; i < 6; i++) {
      const light = new THREE.PointLight(lightColors[i], 0.3, 600);
      webglScene.add(light);
      lights.push(light);
    }

    // Create cube group
    const cubeGroup = new THREE.Group();

    const faces = [
      { component: AboutFace, color: '#8b5cf6', position: [0, 0, 500], rotation: [0, 0, 0] },
      { component: SkillsFace, color: '#3b82f6', position: [0, 0, -500], rotation: [0, Math.PI, 0] },
      { component: ProjectsFace, color: '#10b981', position: [500, 0, 0], rotation: [0, Math.PI / 2, 0] },
      { component: ExperienceFace, color: '#ef4444', position: [-500, 0, 0], rotation: [0, -Math.PI / 2, 0] },
      { component: ContactFace, color: '#f97316', position: [0, 500, 0], rotation: [-Math.PI / 2, 0, 0] },
      { component: EducationFace, color: '#06b6d4', position: [0, -500, 0], rotation: [Math.PI / 2, 0, 0] },
    ];

    faces.forEach((face, index) => {
      const element = document.createElement('div');
      element.style.width = '960px';
      element.style.height = '960px';
      element.style.padding = '60px';
      element.style.background = `linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 27, 75, 0.95) 100%)`;
      element.style.border = `3px solid ${face.color}`;
      element.style.borderRadius = '24px';
      element.style.boxShadow = `0 0 60px ${face.color}40, inset 0 0 40px ${face.color}08`;
      element.style.overflow = 'auto';
      element.style.backdropFilter = 'blur(20px)';
      
      const FaceComponent = face.component;
      const root = createRoot(element);
      root.render(<FaceComponent />);

      const object = new CSS3DObject(element);
      object.position.set(face.position[0], face.position[1], face.position[2]);
      object.rotation.set(face.rotation[0], face.rotation[1], face.rotation[2]);
      
      cubeGroup.add(object);
      lights[index].position.set(face.position[0], face.position[1], face.position[2]);
    });

    scene.add(cubeGroup);

    // Mouse controls
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
      velocityRef.current = { x: 0, y: 0 };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;
        
        velocityRef.current.y = deltaX * 0.005;
        velocityRef.current.x = deltaY * 0.005;
        
        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      camera.position.z += e.deltaY * 0.5;
      camera.position.z = Math.max(800, Math.min(2500, camera.position.z));
    };

    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('wheel', onWheel, { passive: false });

    // Optimized animation loop
    let animationId: number;
    let lastTime = 0;
    const targetFPS = 60;
    const frameDelay = 1000 / targetFPS;
    
    const animate = (currentTime: number) => {
      animationId = requestAnimationFrame(animate);
      
      const deltaTime = currentTime - lastTime;
      if (deltaTime < frameDelay) return;
      lastTime = currentTime - (deltaTime % frameDelay);

      // Update shader
      if (blackHoleMaterial.uniforms.time) {
        blackHoleMaterial.uniforms.time.value = currentTime * 0.001;
      }

      blackHole.rotation.y += 0.001;

      // Inertia
      if (!isDragging) {
        currentRotationRef.current.x += velocityRef.current.x;
        currentRotationRef.current.y += velocityRef.current.y;
        
        const dx = targetRotation.x - currentRotationRef.current.x;
        const dy = targetRotation.y - currentRotationRef.current.y;
        
        currentRotationRef.current.x += dx * 0.1;
        currentRotationRef.current.y += dy * 0.1;
        
        velocityRef.current.x *= 0.95;
        velocityRef.current.y *= 0.95;
      }

      currentRotationRef.current.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, currentRotationRef.current.x));

      cubeGroup.rotation.x = currentRotationRef.current.x;
      cubeGroup.rotation.y = currentRotationRef.current.y;
      wireframe.rotation.x = currentRotationRef.current.x;
      wireframe.rotation.y = currentRotationRef.current.y;

      const floatY = Math.sin(currentTime * 0.0005) * 20;
      cubeGroup.position.y = floatY;
      wireframe.position.y = floatY;

      stars.rotation.y += 0.0001;

      renderer.render(scene, camera);
      webglRenderer.render(webglScene, camera);
    };
    animate(0);

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      webglRenderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('wheel', onWheel);
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      if (webglContainerRef.current && webglRenderer.domElement.parentNode === webglContainerRef.current) {
        webglContainerRef.current.removeChild(webglRenderer.domElement);
      }
      webglRenderer.dispose();
      blackHoleGeometry.dispose();
      blackHoleMaterial.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
    };
  }, [targetRotation]);

  return (
    <>
      <div ref={webglContainerRef} className="absolute inset-0" style={{ zIndex: 1 }} />
      <div ref={containerRef} className="absolute inset-0" style={{ zIndex: 2 }} />
    </>
  );
}
