type Star = {
  x: number;
  y: number;
  r: number;
  a: number;
};

export class Preloader2D {
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;
  private rafId = 0;

  private active = false;
  private hidden = false;

  private cw = 0;
  private ch = 0;
  private dpr = 1;

  private lastNow = Date.now();
  private deltaTime = 1 / 60;
  private elapsed = 0;

  private stars: Star[] = [];

  // Triangle mosaic state (inspired by the reference preloader, implemented independently).
  private angle = 0;
  private trianglePhase = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Preloader2D: 2D context not available');
    this.ctx = ctx;
  }

  start() {
    if (this.active) return;
    this.active = true;

    this.canvas.style.opacity = '1';
    this.canvas.style.transition = 'opacity 600ms ease';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.display = 'block';

    this.resize();
    window.addEventListener('resize', this.onResize, { passive: true });

    this.lastNow = Date.now();
    this.rafId = requestAnimationFrame(this.animate);
  }

  hide() {
    if (this.hidden) return;
    this.hidden = true;
    this.canvas.style.opacity = '0';

    window.setTimeout(() => {
      this.active = false;
      this.canvas.style.display = 'none';
    }, 650);
  }

  dispose() {
    this.active = false;
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.rafId = 0;
    window.removeEventListener('resize', this.onResize);
  }

  private onResize = () => this.resize();

  private resize() {
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.cw = Math.max(1, Math.floor(window.innerWidth));
    this.ch = Math.max(1, Math.floor(window.innerHeight));

    this.canvas.width = Math.floor(this.cw * this.dpr);
    this.canvas.height = Math.floor(this.ch * this.dpr);
    this.canvas.style.width = `${this.cw}px`;
    this.canvas.style.height = `${this.ch}px`;

    // Draw in CSS pixels.
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);

    this.initStars();
  }

  private initStars() {
    // Match the feel of the reference: lots of small stars, varying alpha.
    const count = Math.round(Math.min(140, (this.cw * this.ch) / 18000));
    this.stars = new Array(count);
    for (let i = 0; i < count; i++) {
      const r = Math.floor(Math.random() * 2) + 1;
      const a = ((Math.floor(Math.random() * 10) + 1) / 10) / 2;
      this.stars[i] = {
        x: Math.random() * this.cw,
        y: Math.random() * this.ch,
        r,
        a,
      };
    }
  }

  private animate = () => {
    if (!this.active) return;

    const now = Date.now();
    const dt = (now - this.lastNow) * 0.001;
    this.lastNow = now;

    // Reference clamps dt to keep animation stable.
    this.deltaTime = Math.min(Math.max(dt, 0.0), 0.016);
    this.elapsed += this.deltaTime;

    this.draw();

    this.rafId = requestAnimationFrame(this.animate);
  };

  private draw() {
    const ctx = this.ctx;

    ctx.clearRect(0, 0, this.cw, this.ch);

    // The reference uses an XOR + source-over black pass which creates a subtle “flash” feel.
    ctx.fillStyle = '#000';
    ctx.globalCompositeOperation = 'xor';
    ctx.fillRect(0, 0, this.cw, this.ch);

    ctx.fillStyle = '#000';
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillRect(0, 0, this.cw, this.ch);

    this.drawStars();
    this.drawTriangleMosaic();

    // Phase increments similar to the reference.
    this.trianglePhase += 3.0 * this.deltaTime;
    if (this.trianglePhase > 4.0) this.trianglePhase = 0.0;
    this.angle += 0.55 * this.deltaTime;
  }

  private drawStars() {
    const ctx = this.ctx;

    for (const s of this.stars) {
      s.y -= this.deltaTime * 15;
      if (s.y <= -10) s.y = this.ch + 10;

      ctx.fillStyle = `rgba(255,255,255,${s.a})`;
      ctx.shadowBlur = s.r * 2;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }

    ctx.shadowBlur = 0;
  }

  private drawTriangleMosaic() {
    const ctx = this.ctx;
    ctx.save();

    const sideLength = this.ch / 3;
    const height = (sideLength * Math.sqrt(3)) / 2 + 1;

    ctx.translate(this.cw / 2, this.ch / 2);
    ctx.rotate(this.angle);

    // Subdivide triangle into a grid of small triangles.
    const steps = 9;
    const smallSide = sideLength / steps;
    const smallH = (smallSide * Math.sqrt(3)) / 2;

    // Local origin is centroid-ish.
    ctx.translate(0, height / 6);

    const t = this.trianglePhase / 1.7;

    for (let row = 0; row < steps; row++) {
      const cols = steps - row;
      for (let col = 0; col < cols; col++) {
        const x = (col - cols / 2) * smallSide + (row * smallSide) / 2;
        const y = (row - steps / 2) * smallH * 0.96;
        const flip = (row + col) % 2 === 0;

        // Pulse based on distance and time.
        const d = Math.sqrt(x * x + y * y);
        const pulse = 0.5 + 0.5 * Math.sin(this.elapsed * 2.0 + d * 0.02);
        const alpha = 0.03 + 0.14 * (pulse * (1.0 - Math.min(1.0, t)) + 0.25 * t);

        this.drawSmallTriangle(x, y, smallSide * (0.92 + 0.06 * pulse), flip, alpha);
      }
    }

    ctx.restore();
  }

  private drawSmallTriangle(x: number, y: number, side: number, flipped: boolean, alpha: number) {
    const ctx = this.ctx;
    const hh = (side * Math.sqrt(3)) / 2;

    ctx.beginPath();
    if (!flipped) {
      ctx.moveTo(x, y + hh / 2);
      ctx.lineTo(x + side / 2, y - hh / 2);
      ctx.lineTo(x - side / 2, y - hh / 2);
    } else {
      ctx.moveTo(x, y - hh / 2);
      ctx.lineTo(x + side / 2, y + hh / 2);
      ctx.lineTo(x - side / 2, y + hh / 2);
    }
    ctx.closePath();

    ctx.globalAlpha = alpha;
    ctx.fillStyle = '#fff';
    ctx.fill();

    ctx.globalAlpha = Math.min(0.18, alpha + 0.06);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.globalAlpha = 1;
  }
}

