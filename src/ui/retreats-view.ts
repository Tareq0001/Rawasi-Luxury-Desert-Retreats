import { i18n } from './i18n';
import { RETREATS, Retreat } from '../data/retreats';

export function renderRetreatsView(): string {
  const isAr = i18n.isAr();

  return `
    <section class="section-container" id="retreats">
      <div class="container">
        <div class="section-header text-center">
          <span class="badge badge-gold">
            ⛺ ${isAr ? 'أطلس الوجهات والملاذات الفاخرة' : 'Iconic Desert Sanctuaries Atlas'}
          </span>
          <h2 class="section-title gradient-text-gold">${i18n.t('retreatsTitle')}</h2>
          <p class="section-subtitle">${i18n.t('retreatsSubtitle')}</p>
        </div>

        <!-- Filters & Lighting Controls -->
        <div class="retreats-toolbar glass-panel">
          <div class="terrain-filters" id="terrain-filters">
            <button class="filter-btn active" data-terrain="all">${i18n.t('filterAll')}</button>
            <button class="filter-btn" data-terrain="canyon">${i18n.t('filterCanyon')}</button>
            <button class="filter-btn" data-terrain="mountain">${i18n.t('filterMountain')}</button>
            <button class="filter-btn" data-terrain="crimson">${i18n.t('filterCrimson')}</button>
            <button class="filter-btn" data-terrain="coastal">${i18n.t('filterCoastal')}</button>
          </div>

          <div class="lighting-mode-toggle">
            <span class="toggle-caption">${i18n.t('toggleDayNight')}:</span>
            <div class="lighting-btn-group">
              <button class="light-mode-btn" id="btn-mode-day" title="${i18n.t('viewDay')}">
                ☀️ <span>${isAr ? 'نهار' : 'Day'}</span>
              </button>
              <button class="light-mode-btn active" id="btn-mode-night" title="${i18n.t('viewNight')}">
                ✨ <span>${isAr ? 'ليل ونجوم' : 'Night'}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Retreats Grid -->
        <div class="retreats-grid" id="retreats-grid">
          ${RETREATS.map(retreat => renderRetreatCard(retreat, isAr, 'night')).join('')}
        </div>
      </div>
    </section>
  `;
}

export function renderRetreatCard(r: Retreat, isAr: boolean, lightingMode: 'day' | 'night' = 'night'): string {
  const imgSrc = lightingMode === 'day' ? r.imageDay : r.imageNight;
  const terrainLabel = isAr ? r.terrainAr : r.terrainEn;
  const name = isAr ? r.nameAr : r.nameEn;
  const region = isAr ? r.regionAr : r.regionEn;
  const desc = isAr ? r.descriptionAr : r.descriptionEn;
  const elevation = isAr ? r.elevation : r.elevationEn;
  const bortleText = isAr ? r.bortleDescAr : r.bortleDescEn;
  const features = isAr ? r.featuresAr : r.featuresEn;

  return `
    <article class="retreat-card glass-panel" data-terrain="${r.terrain}" data-retreat-id="${r.id}">
      <div class="card-media-wrapper">
        <img src="${imgSrc}" alt="${name}" class="retreat-image" loading="lazy" />
        <div class="media-overlay-gradient"></div>
        
        <div class="media-badges-top">
          <span class="terrain-pill">
            <span class="pill-dot"></span>
            ${terrainLabel}
          </span>
          <span class="bortle-pill">
            ★ Bortle ${r.bortleScale}
          </span>
        </div>

        <div class="price-overlay-tag">
          <span class="price-val">${r.pricePerNight.toLocaleString()}</span>
          <span class="price-curr">${isAr ? 'ر.س' : 'SAR'}</span>
          <span class="price-period">/ ${isAr ? 'ليلة' : 'night'}</span>
        </div>
      </div>

      <div class="card-content">
        <div class="location-row">
          <span class="pin-icon">📍</span>
          <span class="location-name">${region}</span>
          <span class="gps-coords">${r.gps}</span>
        </div>

        <h3 class="retreat-card-title">${name}</h3>
        <p class="retreat-card-desc">${desc}</p>

        <div class="spec-metrics-row">
          <div class="metric-item">
            <span class="m-icon">⛰️</span>
            <div class="m-info">
              <span class="m-label">${isAr ? 'الارتفاع' : 'Elevation'}</span>
              <span class="m-val">${elevation}</span>
            </div>
          </div>
          <div class="metric-item">
            <span class="m-icon">🌌</span>
            <div class="m-info">
              <span class="m-label">${isAr ? 'السماء' : 'Dark Sky'}</span>
              <span class="m-val">${bortleText.split('(')[0]}</span>
            </div>
          </div>
          <div class="metric-item">
            <span class="m-icon">🌡️</span>
            <div class="m-info">
              <span class="m-label">${isAr ? 'الليل' : 'Night'}</span>
              <span class="m-val">${r.temperature.nightC}°C</span>
            </div>
          </div>
        </div>

        <div class="card-features-list">
          <div class="features-title">${i18n.t('amenitiesIncluded')}</div>
          <ul>
            ${features.slice(0, 3).map(f => `
              <li><span class="feature-bullet">✦</span> <span>${f}</span></li>
            `).join('')}
          </ul>
        </div>

        <div class="card-actions">
          <button class="btn btn-primary btn-book-retreat" data-retreat-id="${r.id}">
            <span>${i18n.t('reserveNowBtn')}</span>
          </button>
          <button class="btn btn-outline btn-configure-retreat" data-retreat-id="${r.id}">
            <span>${i18n.t('customizeThisRetreat')}</span>
          </button>
        </div>
      </div>
    </article>
  `;
}
