import * as THREE from 'three/webgpu';

type AxisBubble = {
  axis: string;
  dir: THREE.Vector3;
  size: number;
  label?: string;
  lineWidth?: number;
  colors: [string, string]; // [front, back]
  screen: THREE.Vector3;
};

export type GizmoHelperOptions = {
  size: number;
  padding: number;
  primarySize: number;
  secondarySize: number;
  showSecondary: boolean;
  lineWidth: number;
  fontFamily: string;
  fontSize: number;
  fontWeight: string;
  fontColor: string;
  colors: {
    x: [string, string];
    y: [string, string];
    z: [string, string];
  };
};

const DEFAULT_OPTIONS: GizmoHelperOptions = {
  size: 100,
  padding: 8,
  primarySize: 9,
  secondarySize: 7,
  showSecondary: true,
  lineWidth: 2,
  fontFamily: 'arial',
  fontSize: 11,
  fontWeight: 'bold',
  fontColor: '#151515',
  colors: {
    x: ['#f73c3c', '#942424'],
    y: ['#6ccb26', '#417a17'],
    z: ['#178cf0', '#0e5490'],
  },
};

export class GizmoHelper extends HTMLElement {
  public onAxisSelected: ((axis: { axis: string; direction: THREE.Vector3 }) => void) | null = null;

  private readonly camera: THREE.Camera;
  private readonly options: GizmoHelperOptions;

  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private mouse: THREE.Vector2 | null = null;
  private selected: AxisBubble | null = null;

  private readonly center = new THREE.Vector2();
  private readonly invCamQuat = new THREE.Quaternion();

  private readonly bubbles: AxisBubble[] = [];

  constructor(camera: THREE.Camera, options?: Partial<GizmoHelperOptions>) {
    super();
    this.camera = camera;
    this.options = { ...DEFAULT_OPTIONS, ...(options ?? {}) };

    this.style.position = 'fixed';
    this.style.left = '0';
    this.style.bottom = '0';
    this.style.zIndex = '100000';
    this.style.padding = `${this.options.padding}px`;

    this.buildBubbles();
    this.innerHTML = `<canvas width="${this.options.size}" height="${this.options.size}"></canvas>`;

    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onMouseClick = this.onMouseClick.bind(this);
  }

  connectedCallback() {
    const c = this.querySelector('canvas');
    if (!c) throw new Error('GizmoHelper: missing canvas');
    this.canvas = c;
    const ctx = this.canvas.getContext('2d');
    if (!ctx) throw new Error('GizmoHelper: 2D context not available');
    this.ctx = ctx;

    this.center.set(this.canvas.width / 2, this.canvas.height / 2);

    this.canvas.addEventListener('mousemove', this.onMouseMove, false);
    this.canvas.addEventListener('mouseout', this.onMouseOut, false);
    this.canvas.addEventListener('click', this.onMouseClick, false);
  }

  disconnectedCallback() {
    this.canvas?.removeEventListener('mousemove', this.onMouseMove, false);
    this.canvas?.removeEventListener('mouseout', this.onMouseOut, false);
    this.canvas?.removeEventListener('click', this.onMouseClick, false);
  }

  update() {
    if (!this.ctx) return;
    this.clear();

    // Project axes into camera space (invert camera rotation).
    this.invCamQuat.copy(this.camera.quaternion).invert();

    for (const b of this.bubbles) {
      b.screen.copy(b.dir).applyQuaternion(this.invCamQuat);
      const r = this.center.x - this.options.padding - this.options.primarySize;
      b.screen.set(
        this.center.x + b.screen.x * r,
        this.center.y - b.screen.y * r,
        b.screen.z
      );
    }

    const layers = this.bubbles
      .filter((b) => this.options.showSecondary || !b.axis.startsWith('-'))
      .slice()
      .sort((a, b) => a.screen.z - b.screen.z);

    this.selected = this.pick(layers);
    this.draw(layers);
  }

  private buildBubbles() {
    const o = this.options;

    const mk = (axis: string, dir: THREE.Vector3, size: number, colors: [string, string], label?: string, lineWidth?: number): AxisBubble => ({
      axis,
      dir,
      size,
      colors,
      label,
      lineWidth,
      screen: new THREE.Vector3(),
    });

    this.bubbles.push(
      mk('x', new THREE.Vector3(1, 0, 0), o.primarySize, o.colors.x, 'X', o.lineWidth),
      mk('y', new THREE.Vector3(0, 1, 0), o.primarySize, o.colors.y, 'Y', o.lineWidth),
      mk('z', new THREE.Vector3(0, 0, 1), o.primarySize, o.colors.z, 'Z', o.lineWidth),
      mk('-x', new THREE.Vector3(-1, 0, 0), o.secondarySize, o.colors.x),
      mk('-y', new THREE.Vector3(0, -1, 0), o.secondarySize, o.colors.y),
      mk('-z', new THREE.Vector3(0, 0, -1), o.secondarySize, o.colors.z)
    );
  }

  private clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  private pick(layers: AxisBubble[]): AxisBubble | null {
    if (!this.mouse) return null;
    let best: AxisBubble | null = null;
    let bestDist = Infinity;

    for (const b of layers) {
      const dx = this.mouse.x - b.screen.x;
      const dy = this.mouse.y - b.screen.y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < bestDist || d < b.size) {
        bestDist = d;
        best = b;
      }
    }
    return best;
  }

  private draw(layers: AxisBubble[]) {
    const ctx = this.ctx;

    for (const b of layers) {
      const isSelected = this.selected === b;
      const isFront = b.screen.z >= -0.01;

      const color = isSelected ? '#ffffff' : isFront ? b.colors[0] : b.colors[1];
      const x = b.screen.x;
      const y = b.screen.y;

      if (b.lineWidth) {
        ctx.beginPath();
        ctx.moveTo(this.center.x, this.center.y);
        ctx.lineTo(x, y);
        ctx.lineWidth = b.lineWidth;
        ctx.strokeStyle = color;
        ctx.stroke();
        ctx.closePath();
      }

      ctx.beginPath();
      ctx.arc(x, y, b.size, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.closePath();

      if (b.label) {
        ctx.font = `${this.options.fontWeight} ${this.options.fontSize}px ${this.options.fontFamily}`;
        ctx.fillStyle = this.options.fontColor;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(b.label, x, y);
      }
    }
  }

  private onMouseMove(evt: MouseEvent) {
    const rect = this.canvas.getBoundingClientRect();
    if (!this.mouse) this.mouse = new THREE.Vector2();
    this.mouse.set(evt.clientX - rect.left, evt.clientY - rect.top);
  }

  private onMouseOut() {
    this.mouse = null;
  }

  private onMouseClick() {
    const s = this.selected;
    if (!s) return;
    if (this.onAxisSelected) {
      this.onAxisSelected({ axis: s.axis, direction: s.dir.clone() });
    }
  }
}

if (!customElements.get('gizmo-helper')) {
  customElements.define('gizmo-helper', GizmoHelper);
}

