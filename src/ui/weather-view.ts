import { i18n } from './i18n';
import { RETREATS, Retreat } from '../data/retreats';
import { WeatherAdvisorEngine, DesertPackingItem } from '../engine/weather-advisor';

export function renderWeatherView(activeRetreatId: string = 'alula-ashar'): string {
  const isAr = i18n.isAr();
  const retreat = RETREATS.find(r => r.id === activeRetreatId) || RETREATS[0];
  const windChill = WeatherAdvisorEngine.calculateWindChill(retreat.temperature.nightC, retreat.temperature.windSpeedKmh);
  const packingItems = WeatherAdvisorEngine.getPackingList(retreat.terrain);

  const deltaTemp = retreat.temperature.dayC - retreat.temperature.nightC;

  return `
    <section class="section-container" id="weather">
      <div class="container">
        <div class="section-header text-center">
          <span class="badge badge-gold">
            ❄️ ${isAr ? 'حاسبة الطقس والمناخ الصحراوي' : 'Microclimate & Night Chill Advisor'}
          </span>
          <h2 class="section-title gradient-text-gold">${i18n.t('weatherTitle')}</h2>
          <p class="section-subtitle">${i18n.t('weatherSubtitle')}</p>
        </div>

        <!-- Retreat Selector for Weather -->
        <div class="weather-retreat-tabs" id="weather-retreat-tabs">
          ${RETREATS.map(r => `
            <button class="weather-tab-btn ${r.id === activeRetreatId ? 'active' : ''}" data-retreat-id="${r.id}">
              <span>${isAr ? r.nameAr.split('-')[0] : r.nameEn.split('-')[0]}</span>
              <small>${r.elevation}</small>
            </button>
          `).join('')}
        </div>

        <div class="weather-content-grid">
          
          <!-- Temperature Delta & Wind Chill Panel -->
          <div class="weather-temp-card glass-panel">
            <div class="card-header">
              <div class="header-loc">
                <h3>${isAr ? retreat.nameAr : retreat.nameEn}</h3>
                <span class="gps-badge">📍 ${retreat.gps}</span>
              </div>
              <div class="chill-alert-pill">
                <span>⚠️ ${isAr ? `فارق حراري يبلغ ${deltaTemp} درجة مئوية!` : `Severe ${deltaTemp}°C Diurnal Drop!`}</span>
              </div>
            </div>

            <!-- Visual Temperature Bars -->
            <div class="temp-bars-comparison">
              <!-- Day Temp -->
              <div class="temp-col day-col">
                <div class="temp-icon">☀️</div>
                <div class="temp-val">${retreat.temperature.dayC}°C</div>
                <div class="temp-name">${i18n.t('dayTemp')}</div>
                <div class="temp-bar-outer">
                  <div class="temp-bar-fill day-fill" style="height: ${(retreat.temperature.dayC / 45) * 100}%"></div>
                </div>
              </div>

              <!-- Night Temp -->
              <div class="temp-col night-col">
                <div class="temp-icon">🌙</div>
                <div class="temp-val">${retreat.temperature.nightC}°C</div>
                <div class="temp-name">${i18n.t('nightTemp')}</div>
                <div class="temp-bar-outer">
                  <div class="temp-bar-fill night-fill" style="height: ${(retreat.temperature.nightC / 45) * 100}%"></div>
                </div>
              </div>

              <!-- Wind Chill Felt -->
              <div class="temp-col chill-col">
                <div class="temp-icon">💨</div>
                <div class="temp-val">${windChill}°C</div>
                <div class="temp-name">${i18n.t('windChill')}</div>
                <div class="temp-bar-outer">
                  <div class="temp-bar-fill chill-fill" style="height: ${(windChill / 45) * 100}%"></div>
                </div>
              </div>
            </div>

            <div class="microclimate-specs-grid">
              <div class="spec-tile">
                <span class="spec-label">${isAr ? 'سرعة الرياح الليلية' : 'Night Wind Speed'}</span>
                <strong class="spec-data">${retreat.temperature.windSpeedKmh} km/h</strong>
              </div>
              <div class="spec-tile">
                <span class="spec-label">${isAr ? 'الرطوبة النسبية' : 'Humidity'}</span>
                <strong class="spec-data">${retreat.temperature.humidityPct}%</strong>
              </div>
              <div class="spec-tile">
                <span class="spec-label">${isAr ? 'الارتفاع الجغرافي' : 'Altitude'}</span>
                <strong class="spec-data">${retreat.elevation}</strong>
              </div>
              <div class="spec-tile">
                <span class="spec-label">${isAr ? 'تأثير الغطاء السحابي' : 'Cloud Cover Impact'}</span>
                <strong class="spec-data">${retreat.terrain === 'mountain' ? (isAr ? 'ضباب ساحر عالي' : 'High Cloud Inversion') : (isAr ? 'سماء صافية 0%' : 'Clear Skies 0%')}</strong>
              </div>
            </div>
          </div>

          <!-- Dynamic Packing Checklist -->
          <div class="packing-advisor-card glass-panel">
            <div class="packing-header">
              <span class="backpack-icon">🎒</span>
              <div>
                <h4>${i18n.t('packingListTitle')}</h4>
                <p class="packing-sub">${isAr ? 'قائمة تفاعلية مخصصة لتضاريس ودرجة حرارة هذه الوجهة' : 'Tailored interactive checklist for this microclimate'}</p>
              </div>
            </div>

            <div class="packing-checklist" id="packing-checklist">
              ${packingItems.map(item => `
                <label class="packing-item-row">
                  <input type="checkbox" class="pack-checkbox">
                  <span class="pack-custom-box"></span>
                  <div class="pack-info">
                    <div class="pack-title-row">
                      <strong class="pack-title">${isAr ? item.titleAr : item.titleEn}</strong>
                      <span class="pack-badge ${item.essential ? 'badge-essential' : 'badge-optional'}">
                        ${item.essential ? i18n.t('packEssential') : i18n.t('packRecommended')}
                      </span>
                    </div>
                    <p class="pack-desc">${isAr ? item.descAr : item.descEn}</p>
                  </div>
                </label>
              `).join('')}
            </div>

            <div class="packing-footer-tip">
              <span>💡 ${isAr ? 'يتم توفير بطانيات صوف دافئة ومدافئ خارجية في جميع ملاذاتنا مجاناً.' : 'Complimentary luxury merino wool blankets and heaters provided at all sanctuaries.'}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
