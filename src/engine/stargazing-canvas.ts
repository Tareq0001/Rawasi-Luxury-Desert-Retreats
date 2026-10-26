import { CONSTELLATIONS, Constellation, StarNode } from '../data/constellations';

interface CanvasStar {
  x: number;
  y: number;
  z: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  phase: number;
  color: string;
}

interface Meteor {
  x: number;
  y: number;
  dx: number;
  dy: number;
  len: number;
  speed: number;
  alpha: number;
  life: number;
}

export class StargazingCanvasEngine {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private stars: CanvasStar[] = [];
  private meteors: Meteor[] = [];
  private animFrameId: number | null = null;
  private activeConstellationId: string = 'orion';
  private hoveredStar: StarNode | null = null;
  private bortleScale: number = 1; // 1 to 4
  private mouseX: number = 0;
  private mouseY: number = 0;
  private targetParallaxX: number = 0;
  private targetParallaxY: number = 0;
  private currentParallaxX: number = 0;
  private currentParallaxY: number = 0;
  private onStarSelectCallback: ((star: StarNode, constellation: Constellation) => void) | null = null;
  private isArabic: boolean = true;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('2D context not available');
    this.ctx = context;

    this.handleResize = this.handleResize.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.render = this.render.bind(this);

    this.init();
  }

  private init() {
    this.handleResize();
    this.initStars(450);

    window.addEventListener('resize', this.handleResize);
    this.canvas.addEventListener('mousemove', this.handleMouseMove);
    this.canvas.addEventListener('click', this.handleClick);

    this.start();
  }

  public setLanguage(isAr: boolean) {
    this.isArabic = isAr;
  }

  public setBortleScale(scale: number) {
    this.bortleScale = Math.max(1, Math.min(4, scale));
  }

  public setActiveConstellation(id: string) {
    this.activeConstellationId = id;
  }

  public onStarSelect(callback: (star: StarNode, constellation: Constellation) => void) {
    this.onStarSelectCallback = callback;
  }

  private initStars(count: number) {
    this.stars = [];
    const colors = [
      '#ffffff', '#f8fafc', '#bae6fd', '#7dd3fc', '#fef08a', '#fed7aa', '#fbcfe8'
    ];

    for (let i = 0; i < count; i++) {
      this.stars.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        z: Math.random() * 2 + 0.5,
        radius: Math.random() < 0.85 ? Math.random() * 1.3 + 0.4 : Math.random() * 2.2 + 1.2,
        baseAlpha: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 0.04 + 0.015,
        phase: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  }

  private handleResize() {
    const rect = this.canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.ctx.scale(dpr, dpr);
  }

  private handleMouseMove(e: MouseEvent) {
    const rect = this.canvas.getBoundingClientRect();
    this.mouseX = e.clientX - rect.left;
    this.mouseY = e.clientY - rect.top;

    // Center normalized parallax (-1 to 1)
    const normX = (this.mouseX / rect.width - 0.5) * 2;
    const normY = (this.mouseY / rect.height - 0.5) * 2;
    this.targetParallaxX = normX * 18;
    this.targetParallaxY = normY * 18;

    // Check hit test against active constellation stars
    const activeConst = CONSTELLATIONS.find(c => c.id === this.activeConstellationId);
    let hit: StarNode | null = null;
    if (activeConst) {
      for (const star of activeConst.stars) {
        const starPos = this.getConstellationStarCoords(star, rect.width, rect.height);
        const dist = Math.hypot(this.mouseX - starPos.x, this.mouseY - starPos.y);
        if (dist < 18) {
          hit = star;
          break;
        }
      }
    }
    this.hoveredStar = hit;
    this.canvas.style.cursor = hit ? 'pointer' : 'default';
  }

  private handleClick() {
    if (this.hoveredStar && this.onStarSelectCallback) {
      const activeConst = CONSTELLATIONS.find(c => c.id === this.activeConstellationId);
      if (activeConst) {
        this.onStarSelectCallback(this.hoveredStar, activeConst);
      }
    }
  }

  private spawnMeteor() {
    if (Math.random() > (this.bortleScale === 1 ? 0.035 : 0.015)) return;
    if (this.meteors.length > 3) return;

    const rect = this.canvas.getBoundingClientRect();
    const startX = Math.random() * rect.width;
    const startY = Math.random() * (rect.height * 0.4);
    const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.4;
    const speed = Math.random() * 8 + 12;

    this.meteors.push({
      x: startX,
      y: startY,
      dx: Math.cos(angle) * speed,
      dy: Math.sin(angle) * speed,
      len: Math.random() * 70 + 60,
      speed,
      alpha: 1,
      life: 1
    });
  }

  private getConstellationStarCoords(star: StarNode, width: number, height: number): { x: number; y: number } {
    // Keep constellation nicely framed in center viewport
    const padX = width * 0.15;
    const padY = height * 0.15;
    const frameW = width - padX * 2;
    const frameH = height - padY * 2;

    const baseStarX = padX + (star.x / 100) * frameW;
    const baseStarY = padY + (star.y / 100) * frameH;

    return {
      x: baseStarX + this.currentParallaxX * 0.5,
      y: baseStarY + this.currentParallaxY * 0.5
    };
  }

  private render() {
    const rect = this.canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    // Smooth parallax interpolation
    this.currentParallaxX += (this.targetParallaxX - this.currentParallaxX) * 0.05;
    this.currentParallaxY += (this.targetParallaxY - this.currentParallaxY) * 0.05;

    this.ctx.clearRect(0, 0, w, h);

    // 1. Draw Deep Sky Nebula & Milky Way glow (Bortle 1 highlights the galaxy)
    this.drawDeepSkyGlow(w, h);

    // 2. Draw Background Stars
    this.drawBackgroundStars(w, h);

    // 3. Draw Active Constellation (Lines, Glowing Nodes, Names)
    this.drawActiveConstellation(w, h);

    // 4. Update & Draw Meteors / Shooting Stars
    this.spawnMeteor();
    this.drawMeteors();

    // 5. Draw Light Pollution Fog for suburban Bortle (if Bortle > 1)
    if (this.bortleScale > 1) {
      this.drawBortleLightPollution(w, h);
    }

    this.animFrameId = requestAnimationFrame(this.render);
  }

  private drawDeepSkyGlow(w: number, h: number) {
    if (this.bortleScale > 2) return; // Disappears under light pollution

    const mwGrad = this.ctx.createLinearGradient(0, h * 0.8, w, 0);
    const alpha = this.bortleScale === 1 ? 0.12 : 0.05;
    mwGrad.addColorStop(0, 'rgba(56, 189, 248, 0)');
    mwGrad.addColorStop(0.3, `rgba(56, 189, 248, ${alpha * 0.8})`);
    mwGrad.addColorStop(0.5, `rgba(244, 114, 182, ${alpha * 0.5})`);
    mwGrad.addColorStop(0.7, `rgba(147, 197, 253, ${alpha})`);
    mwGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');

    this.ctx.fillStyle = mwGrad;
    this.ctx.fillRect(0, 0, w, h);
  }

  private drawBackgroundStars(w: number, h: number) {
    const time = performance.now() * 0.001;
    // Under Bortle 4, faint stars vanish
    const maxVisibleZ = this.bortleScale === 1 ? 3 : this.bortleScale === 2 ? 2.2 : 1.4;

    for (const star of this.stars) {
      if (star.z > maxVisibleZ) continue;

      const twinkle = Math.sin(time * star.twinkleSpeed * 10 + star.phase);
      const alpha = Math.max(0.1, star.baseAlpha + twinkle * 0.25);

      const px = star.x + this.currentParallaxX * star.z * 0.3;
      const py = star.y + this.currentParallaxY * star.z * 0.3;

      this.ctx.beginPath();
      this.ctx.arc(px, py, star.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = star.color;
      this.ctx.globalAlpha = alpha;
      this.ctx.fill();
    }
    this.ctx.globalAlpha = 1;
  }

  private drawActiveConstellation(w: number, h: number) {
    const constel = CONSTELLATIONS.find(c => c.id === this.activeConstellationId);
    if (!constel) return;

    const coords = constel.stars.map(s => this.getConstellationStarCoords(s, w, h));

    // Draw connecting edges
    this.ctx.save();
    this.ctx.lineWidth = 1.6;
    this.ctx.strokeStyle = 'rgba(56, 189, 248, 0.45)';
    this.ctx.setLineDash([4, 4]);

    for (const [startIdx, endIdx] of constel.edges) {
      const p1 = coords[startIdx];
      const p2 = coords[endIdx];
      if (!p1 || !p2) continue;

      this.ctx.beginPath();
      this.ctx.moveTo(p1.x, p1.y);
      this.ctx.lineTo(p2.x, p2.y);
      this.ctx.stroke();
    }
    this.ctx.restore();

    // Draw Star Nodes
    for (let i = 0; i < constel.stars.length; i++) {
      const star = constel.stars[i];
      const p = coords[i];
      const isHovered = this.hoveredStar?.id === star.id;

      // Glow halo
      const haloGrad = this.ctx.createRadialGradient(p.x, p.y, 2, p.x, p.y, isHovered ? 26 : 14);
      haloGrad.addColorStop(0, star.color || '#38bdf8');
      haloGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');

      this.ctx.fillStyle = haloGrad;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, isHovered ? 26 : 14, 0, Math.PI * 2);
      this.ctx.fill();

      // Core star
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, isHovered ? 5.5 : 3.5, 0, Math.PI * 2);
      this.ctx.fillStyle = '#ffffff';
      this.ctx.fill();

      // Star label
      this.ctx.font = isHovered ? 'bold 13px Tajawal, Cairo, sans-serif' : '11px Tajawal, Cairo, sans-serif';
      this.ctx.fillStyle = isHovered ? '#fef08a' : '#cbd5e1';
      this.ctx.textAlign = 'center';
      const label = this.isArabic ? star.nameAr : star.nameEn;
      this.ctx.fillText(label, p.x, p.y + (isHovered ? 20 : 16));
    }
  }

  private drawMeteors() {
    for (let i = this.meteors.length - 1; i >= 0; i--) {
      const m = this.meteors[i];
      m.x += m.dx;
      m.y += m.dy;
      m.life -= 0.025;

      if (m.life <= 0) {
        this.meteors.splice(i, 1);
        continue;
      }

      const grad = this.ctx.createLinearGradient(
        m.x, m.y,
        m.x - (m.dx / m.speed) * m.len,
        m.y - (m.dy / m.speed) * m.len
      );
      grad.addColorStop(0, `rgba(255, 255, 255, ${m.life})`);
      grad.addColorStop(0.3, `rgba(56, 189, 248, ${m.life * 0.8})`);
      grad.addColorStop(1, 'rgba(56, 189, 248, 0)');

      this.ctx.save();
      this.ctx.lineWidth = 2.2;
      this.ctx.strokeStyle = grad;
      this.ctx.beginPath();
      this.ctx.moveTo(m.x, m.y);
      this.ctx.lineTo(
        m.x - (m.dx / m.speed) * m.len,
        m.y - (m.dy / m.speed) * m.len
      );
      this.ctx.stroke();
      this.ctx.restore();
    }
  }

  private drawBortleLightPollution(w: number, h: number) {
    const fogGrad = this.ctx.createLinearGradient(0, h * 0.6, 0, h);
    const intensity = (this.bortleScale - 1) * 0.12;
    fogGrad.addColorStop(0, 'rgba(251, 191, 36, 0)');
    fogGrad.addColorStop(1, `rgba(251, 146, 60, ${intensity})`);

    this.ctx.fillStyle = fogGrad;
    this.ctx.fillRect(0, 0, w, h);
  }

  public start() {
    if (!this.animFrameId) {
      this.render();
    }
  }

  public stop() {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
  }

  public destroy() {
    this.stop();
    window.removeEventListener('resize', this.handleResize);
    this.canvas.removeEventListener('mousemove', this.handleMouseMove);
    this.canvas.removeEventListener('click', this.handleClick);
  }
}
