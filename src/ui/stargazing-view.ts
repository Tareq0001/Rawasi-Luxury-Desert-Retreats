import { i18n } from './i18n';
import { CONSTELLATIONS, Constellation } from '../data/constellations';
import { WeatherAdvisorEngine } from '../engine/weather-advisor';

export function renderStargazingView(): string {
  const isAr = i18n.isAr();
  const moonInfo = WeatherAdvisorEngine.getMoonPhase(new Date());
  const planets = WeatherAdvisorEngine.getVisiblePlanets();

  return `
    <section class="section-container" id="observatory">
      <div class="container">
        <div class="section-header text-center">
          <span class="badge badge-cyan">
            🔭 ${isAr ? 'المرصد الفلكي التفاعلي' : 'Interactive Celestial Observatory'}
          </span>
          <h2 class="section-title gradient-text-gold">${i18n.t('celestialTitle')}</h2>
          <p class="section-subtitle">${i18n.t('celestialSubtitle')}</p>
        </div>

        <!-- Observatory Top Bar: Constellations Tabs & Bortle Scale -->
        <div class="observatory-controls glass-panel">
          <div class="constellation-tabs" id="constellation-tabs">
            ${CONSTELLATIONS.map((c, idx) => `
              <button class="tab-btn ${idx === 0 ? 'active' : ''}" data-constellation-id="${c.id}">
                <span class="tab-star">✦</span>
                <span>${isAr ? c.nameAr : c.nameEn}</span>
              </button>
            `).join('')}
          </div>

          <div class="bortle-control-wrapper">
            <div class="bortle-label-row">
              <span class="bortle-title">${i18n.t('bortleScaleLabel')}</span>
              <span class="bortle-value-badge" id="bortle-display-text">${i18n.t('bortle1')}</span>
            </div>
            <div class="slider-row">
              <input type="range" id="bortle-slider" min="1" max="4" step="1" value="1" class="custom-slider">
              <div class="bortle-ticks">
                <span>1 (${isAr ? 'حالك' : 'Pristine'})</span>
                <span>2</span>
                <span>3</span>
                <span>4 (${isAr ? 'مضيء' : 'Suburban'})</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Canvas Visualizer Frame -->
        <div class="stargazing-viewport-frame glass-panel">
          <canvas id="celestial-canvas" class="celestial-canvas"></canvas>
          
          <div class="canvas-overlay-hints">
            <span class="hint-pulse"></span>
            <span>${i18n.t('interactivityTip')}</span>
          </div>

          <!-- Constellation Information Overlay Card -->
          <div class="constellation-info-card glass-panel" id="constellation-info-card">
            <div class="card-header">
              <div class="card-titles">
                <span class="constellation-subtitle" id="constellation-season"></span>
                <h3 class="constellation-title gradient-text-gold" id="constellation-name"></h3>
              </div>
              <span class="star-badge" id="constellation-badge">★</span>
            </div>

            <div class="card-body">
              <div class="lore-block">
                <div class="lore-tag">${isAr ? 'التراث الفلكي العربي:' : 'Arabian Star Lore:'}</div>
                <p id="constellation-tradition" class="lore-text"></p>
              </div>
              <p id="constellation-description" class="desc-text"></p>
            </div>

            <div class="card-footer">
              <span class="tip-label">🌟 ${isAr ? 'انقر على أي نجم في الخريطة لرؤية اسمه وتفاصيله' : 'Click any star node in the map for astrophysical data'}</span>
            </div>
          </div>
        </div>

        <!-- Secondary Astronomical Widgets: Moon Phase & Planet Radar -->
        <div class="celestial-widgets-grid">
          <!-- Live Moon Phase Card -->
          <div class="astro-widget-card glass-panel">
            <div class="widget-header">
              <span class="widget-icon">🌙</span>
              <h4>${i18n.t('moonWidgetTitle')}</h4>
            </div>
            <div class="moon-phase-content">
              <div class="moon-render-icon">${moonInfo.iconSvg}</div>
              <div class="moon-details">
                <div class="moon-name">${isAr ? moonInfo.phaseNameAr : moonInfo.phaseNameEn}</div>
                <div class="moon-stat-row">
                  <span>${i18n.t('illumination')}</span>
                  <strong>${moonInfo.illuminationPct}%</strong>
                </div>
                <div class="moon-astro-score">
                  <span class="score-tag">${i18n.t('astroRating')}</span>
                  <div class="score-badge ${moonInfo.astrophotographyScore >= 8 ? 'badge-good' : 'badge-mid'}">
                    ${isAr ? moonInfo.astrophotographyRatingAr : moonInfo.astrophotographyRatingEn}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Planet Radar Card -->
          <div class="astro-widget-card glass-panel">
            <div class="widget-header">
              <span class="widget-icon">🪐</span>
              <h4>${i18n.t('planetsRadarTitle')}</h4>
            </div>
            <div class="planets-list">
              ${planets.map(p => `
                <div class="planet-item">
                  <div class="planet-symbol-col">
                    <span class="planet-glyph">${p.symbol}</span>
                  </div>
                  <div class="planet-info-col">
                    <div class="planet-name-row">
                      <strong>${isAr ? p.nameAr : p.nameEn}</strong>
                      <span class="planet-mag">Mag ${p.magnitude > 0 ? '+' : ''}${p.magnitude}</span>
                    </div>
                    <div class="planet-timing">⏱️ ${isAr ? p.bestTimeAr : p.bestTimeEn}</div>
                    <div class="planet-telescope">🔭 ${isAr ? p.visibleTelescope : p.visibleTelescopeEn}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}
