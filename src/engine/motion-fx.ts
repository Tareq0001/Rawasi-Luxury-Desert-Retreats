import { gsap } from 'gsap';
import confetti from 'canvas-confetti';

export class MotionFXEngine {
  private static instance: MotionFXEngine;
  private observer: IntersectionObserver | null = null;

  public static getInstance(): MotionFXEngine {
    if (!MotionFXEngine.instance) {
      MotionFXEngine.instance = new MotionFXEngine();
    }
    return MotionFXEngine.instance;
  }

  public init() {
    this.init3DTilt();
    this.initScrollReveal();
    this.initAnimatedCounters();
    this.initMagneticButtons();
    this.initHeroEntrance();
  }

  /**
   * Hero entrance animation with GSAP stagger
   */
  public initHeroEntrance() {
    const heroBadge = document.querySelector('.hero-badge');
    const heroTitle = document.querySelector('.hero-title');
    const heroLead = document.querySelector('.hero-lead');
    const heroActions = document.querySelector('.hero-actions');
    const heroStats = document.querySelector('.hero-stats');

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (heroBadge) {
      tl.fromTo(heroBadge, { y: -20, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 0.6 });
    }
    if (heroTitle) {
      tl.fromTo(heroTitle, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.3');
    }
    if (heroLead) {
      tl.fromTo(heroLead, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4');
    }
    if (heroActions) {
      tl.fromTo(heroActions, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3');
    }
    if (heroStats) {
      tl.fromTo(heroStats, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1 }, '-=0.3');
    }
  }

  /**
   * 3D Perspective Card Tilt on Mouse Move
   */
  public init3DTilt() {
    const cards = document.querySelectorAll<HTMLElement>(
      '.retreat-card, .config-preview-card, .stargazing-hud, .weather-card, .bortle-card, .pricing-summary-card, .spec-card'
    );

    cards.forEach((card) => {
      card.classList.add('tilt-card');

      card.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        const tiltX = -deltaY * 7; // max 7 deg tilt
        const tiltY = deltaX * 7;

        card.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateY(-6px) scale3d(1.02, 1.02, 1.02)`;
        card.style.setProperty('--spot-x', `${x}px`);
        card.style.setProperty('--spot-y', `${y}px`);
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale3d(1, 1, 1)';
        card.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
      });

      card.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
      });
    });
  }

  /**
   * Scroll-Driven Reveal with Intersection Observer & GSAP
   */
  public initScrollReveal() {
    const revealTargets = document.querySelectorAll<HTMLElement>(
      '.section-header, .retreats-grid, .configurator-grid, .weather-grid, .constellation-picker, .stargazing-hud'
    );

    if (this.observer) {
      this.observer.disconnect();
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add('is-revealed');

            gsap.fromTo(
              el,
              { y: 40, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                overwrite: 'auto'
              }
            );

            // Stagger children if grid
            const children = el.querySelectorAll<HTMLElement>('.retreat-card, .weather-card, .constellation-chip, .bortle-card');
            if (children.length > 0) {
              gsap.fromTo(
                children,
                { y: 30, opacity: 0, scale: 0.96 },
                {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  duration: 0.6,
                  stagger: 0.08,
                  ease: 'power2.out',
                  delay: 0.1
                }
              );
            }

            this.observer?.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealTargets.forEach((target) => {
      target.style.opacity = '0';
      target.style.transform = 'translateY(30px)';
      this.observer?.observe(target);
    });
  }

  /**
   * Animated Count-Up Numbers
   */
  public initAnimatedCounters() {
    const counterElements = document.querySelectorAll<HTMLElement>('[data-counter]');

    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const targetVal = parseFloat(el.getAttribute('data-counter') || '0');
            const suffix = el.getAttribute('data-suffix') || '';
            const isDecimal = targetVal % 1 !== 0;

            const counterObj = { val: 0 };
            gsap.to(counterObj, {
              val: targetVal,
              duration: 1.8,
              ease: 'power2.out',
              onUpdate: () => {
                el.textContent = isDecimal
                  ? `${counterObj.val.toFixed(1)}${suffix}`
                  : `${Math.round(counterObj.val)}${suffix}`;
              }
            });

            countObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    counterElements.forEach((el) => countObserver.observe(el));
  }

  /**
   * Magnetic Buttons
   */
  public initMagneticButtons() {
    const buttons = document.querySelectorAll<HTMLElement>('.btn-gold-luxury, .btn-cyan-starlight, .theme-toggle-btn, .lang-toggle-btn');

    buttons.forEach((btn) => {
      btn.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px) scale(1.04)`;
        btn.style.transition = 'transform 0.1s ease-out';
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px) scale(1)';
        btn.style.transition = 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
      });
    });
  }

  /**
   * Stardust Golden & Cyan Confetti Burst
   */
  public triggerGoldenConfetti() {
    // Left cannon
    confetti({
      particleCount: 70,
      angle: 60,
      spread: 65,
      origin: { x: 0.1, y: 0.7 },
      colors: ['#f59e0b', '#d97706', '#38bdf8', '#fef08a', '#ffffff']
    });

    // Right cannon
    confetti({
      particleCount: 70,
      angle: 120,
      spread: 65,
      origin: { x: 0.9, y: 0.7 },
      colors: ['#f59e0b', '#d97706', '#38bdf8', '#fef08a', '#ffffff']
    });

    // Center stardust shower
    setTimeout(() => {
      confetti({
        particleCount: 90,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#ffd700', '#38bdf8', '#ffffff', '#ea580c']
      });
    }, 250);
  }
}

export const motionFX = MotionFXEngine.getInstance();
