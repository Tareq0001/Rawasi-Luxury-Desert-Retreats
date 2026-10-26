import { i18n } from './i18n';

export function renderHero(): string {
  const isAr = i18n.isAr();

  return `
    <header class="hero-section" id="hero">
      <div class="hero-glow-aurora"></div>
      
      <div class="container hero-container">
        <div class="hero-badge">
          <span class="pulsing-dot"></span>
          <span>${i18n.t('heroBadge')}</span>
        </div>

        <h1 class="hero-title">
          <span class="gradient-text-gold">${i18n.t('heroTitlePart1')}</span>
          <br>
          <span class="hero-title-light">${i18n.t('heroTitlePart2')}</span>
        </h1>

        <p class="hero-subtitle">
          ${i18n.t('heroSubtitle')}
        </p>

        <div class="hero-cta-group">
          <a href="#observatory" class="btn btn-primary btn-glow">
            <span>${i18n.t('heroCtaExplore')}</span>
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
          </a>
          <a href="#configurator" class="btn btn-glass">
            <span>${i18n.t('heroCtaCustom')}</span>
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        <div class="hero-stats-grid">
          <div class="stat-card glass-panel tilt-card">
            <div class="stat-icon">🌌</div>
            <div class="stat-value gradient-text-gold" data-counter="1.0" data-suffix=" Bortle">${i18n.t('heroStatBortle')}</div>
            <div class="stat-desc">${i18n.t('heroStatBortleDesc')}</div>
          </div>
          <div class="stat-card glass-panel tilt-card">
            <div class="stat-icon">⛰️</div>
            <div class="stat-value gradient-text-gold" data-counter="3015" data-suffix="m">${i18n.t('heroStatAlt')}</div>
            <div class="stat-desc">${i18n.t('heroStatAltDesc')}</div>
          </div>
          <div class="stat-card glass-panel tilt-card">
            <div class="stat-icon">📜</div>
            <div class="stat-value gradient-text-gold" data-counter="100" data-suffix="%">${i18n.t('heroStatHeritage')}</div>
            <div class="stat-desc">${i18n.t('heroStatHeritageDesc')}</div>
          </div>
        </div>
      </div>
    </header>
  `;
}
