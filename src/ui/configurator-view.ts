import { i18n } from './i18n';
import { RETREATS } from '../data/retreats';
import { AMENITIES_LIST, BookingCalculator, ConfiguratorSelection } from '../engine/booking-calculator';

export function renderConfiguratorView(selection: ConfiguratorSelection): string {
  const isAr = i18n.isAr();
  const activeRetreat = RETREATS.find(r => r.id === selection.retreatId) || RETREATS[0];
  const breakdown = BookingCalculator.computePrice(activeRetreat.pricePerNight, selection);

  return `
    <section class="section-container" id="configurator">
      <div class="container">
        <div class="section-header text-center">
          <span class="badge badge-cyan">
            🛠️ ${isAr ? 'استوديو التصميم والتخصيص الذكي' : 'Smart Glamping Design Studio'}
          </span>
          <h2 class="section-title gradient-text-gold">${i18n.t('configuratorTitle')}</h2>
          <p class="section-subtitle">${i18n.t('configuratorSubtitle')}</p>
        </div>

        <div class="configurator-layout-grid">
          <!-- Left Column: Interactive Options & Amenities -->
          <div class="configurator-controls-col">
            
            <!-- Step 1: Destination Selector -->
            <div class="step-card glass-panel">
              <h3 class="step-title">${i18n.t('chooseRetreat')}</h3>
              <div class="retreat-pill-selector" id="retreat-pill-selector">
                ${RETREATS.map(r => `
                  <button class="retreat-select-btn ${r.id === selection.retreatId ? 'active' : ''}" data-retreat-id="${r.id}">
                    <span class="btn-location-icon">📍</span>
                    <span class="btn-name">${isAr ? r.nameAr.split('-')[0] : r.nameEn.split('-')[0]}</span>
                    <span class="btn-region">${isAr ? r.regionAr.split('،')[0] : r.regionEn.split(',')[0]}</span>
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Step 2: Unit Architecture Style -->
            <div class="step-card glass-panel">
              <h3 class="step-title">${i18n.t('chooseUnitType')}</h3>
              <div class="unit-types-grid" id="unit-types-grid">
                
                <!-- Dome -->
                <div class="unit-type-option ${selection.unitType === 'dome' ? 'selected' : ''}" data-unit="dome">
                  <div class="unit-icon-glow">🔮</div>
                  <div class="unit-header-info">
                    <h4>${i18n.t('unitDome')}</h4>
                    <span class="unit-badge">${isAr ? 'الخيار الأكثر طلباً' : 'Signature Experience'}</span>
                  </div>
                  <p class="unit-desc">${i18n.t('unitDomeDesc')}</p>
                  <div class="unit-rate-tag">100% ${isAr ? 'السعر القياسي' : 'Standard Rate'}</div>
                </div>

                <!-- Sadu -->
                <div class="unit-type-option ${selection.unitType === 'sadu' ? 'selected' : ''}" data-unit="sadu">
                  <div class="unit-icon-glow">⛺</div>
                  <div class="unit-header-info">
                    <h4>${i18n.t('unitSadu')}</h4>
                    <span class="unit-badge badge-gold">${isAr ? 'تراث ملكي' : 'Royal Heritage'}</span>
                  </div>
                  <p class="unit-desc">${i18n.t('unitSaduDesc')}</p>
                  <div class="unit-rate-tag">+18% ${isAr ? 'فخامة ملكية' : 'Heritage Luxury'}</div>
                </div>

                <!-- Airstream -->
                <div class="unit-type-option ${selection.unitType === 'airstream' ? 'selected' : ''}" data-unit="airstream">
                  <div class="unit-icon-glow">🚐</div>
                  <div class="unit-header-info">
                    <h4>${i18n.t('unitAirstream')}</h4>
                    <span class="unit-badge badge-silver">${isAr ? 'عصري كلاسيكي' : 'Retro Luxury'}</span>
                  </div>
                  <p class="unit-desc">${i18n.t('unitAirstreamDesc')}</p>
                  <div class="unit-rate-tag">-8% ${isAr ? 'مرونة ورحابة' : 'Compact Luxury'}</div>
                </div>

              </div>
            </div>

            <!-- Step 3: Amenities Add-ons -->
            <div class="step-card glass-panel">
              <h3 class="step-title">${i18n.t('chooseAmenities')}</h3>
              <div class="amenities-checklist" id="amenities-checklist">
                ${AMENITIES_LIST.map(amenity => {
                  const isChecked = selection.selectedAmenities.includes(amenity.id);
                  return `
                    <label class="amenity-checkbox-card ${isChecked ? 'active' : ''}">
                      <input type="checkbox" value="${amenity.id}" ${isChecked ? 'checked' : ''} class="amenity-input">
                      <span class="amenity-custom-check"></span>
                      <div class="amenity-icon">${amenity.icon}</div>
                      <div class="amenity-text-content">
                        <div class="amenity-title-row">
                          <strong class="amenity-name">${isAr ? amenity.nameAr : amenity.nameEn}</strong>
                          <span class="amenity-price-tag">+${amenity.priceSAR} ${isAr ? 'ر.س' : 'SAR'} ${amenity.perNight ? (isAr ? '/ ليلة' : '/ night') : (isAr ? '/ مرة' : '/ stay')}</span>
                        </div>
                        <p class="amenity-desc">${isAr ? amenity.descAr : amenity.descEn}</p>
                      </div>
                    </label>
                  `;
                }).join('')}
              </div>
            </div>

          </div>

          <!-- Right Column: Interactive 3D Visualizer & Live Price Calculator -->
          <div class="configurator-summary-col">
            
            <!-- Architectural 3D Simulation Frame -->
            <div class="preview-3d-frame glass-panel">
              <div class="preview-backdrop" id="preview-backdrop" style="background-image: url('${activeRetreat.imageNight}')">
                <div class="preview-sky-stars"></div>
                <div class="preview-aurora-glow"></div>
                
                <div class="preview-badge-layer">
                  <span class="live-tag">
                    <span class="live-dot"></span>
                    ${isAr ? 'محاكاة ليلية حية' : 'Live Night Sim'}
                  </span>
                  <span class="preview-elevation">${activeRetreat.elevation}</span>
                </div>

                <div class="preview-center-unit">
                  <div class="unit-3d-model" id="unit-3d-model">
                    ${getUnitVisualRepresentation(selection.unitType)}
                  </div>
                </div>

                <div class="preview-amenities-overlay" id="preview-amenities-overlay">
                  ${selection.selectedAmenities.map(id => {
                    const am = AMENITIES_LIST.find(a => a.id === id);
                    return am ? `<span class="amenity-bubble" title="${isAr ? am.nameAr : am.nameEn}">${am.icon}</span>` : '';
                  }).join('')}
                </div>
              </div>
            </div>

            <!-- Live Price Calculator Panel -->
            <div class="price-calculator-panel glass-panel" id="price-calculator-panel">
              <h3 class="calc-panel-title gradient-text-gold">${i18n.t('bookingSummaryTitle')}</h3>
              
              <!-- Date Pickers & Guests Counter -->
              <div class="dates-counter-grid">
                <div class="form-field">
                  <label for="input-check-in">${i18n.t('checkInDate')}</label>
                  <input type="date" id="input-check-in" value="${selection.checkIn}" class="custom-date-input">
                </div>
                <div class="form-field">
                  <label for="input-check-out">${i18n.t('checkOutDate')}</label>
                  <input type="date" id="input-check-out" value="${selection.checkOut}" class="custom-date-input">
                </div>
                <div class="form-field">
                  <label for="input-guests">${i18n.t('guestsCount')}</label>
                  <select id="input-guests" class="custom-select">
                    <option value="1" ${selection.guestsCount === 1 ? 'selected' : ''}>1 ${isAr ? 'ضيف' : 'Guest'}</option>
                    <option value="2" ${selection.guestsCount === 2 ? 'selected' : ''}>2 ${isAr ? 'ضيوف (موصى به)' : 'Guests (Recommended)'}</option>
                    <option value="3" ${selection.guestsCount === 3 ? 'selected' : ''}>3 ${isAr ? 'ضيوف' : 'Guests'}</option>
                    <option value="4" ${selection.guestsCount === 4 ? 'selected' : ''}>4 ${isAr ? 'ضيوف' : 'Guests'}</option>
                  </select>
                </div>
              </div>

              <!-- Price Breakdown List -->
              <div class="price-breakdown-list" id="price-breakdown-container">
                ${renderPriceBreakdownHTML(breakdown, isAr)}
              </div>

              <button class="btn btn-primary btn-block btn-lg btn-glow" id="btn-proceed-booking">
                <span>${i18n.t('proceedBookingBtn')}</span>
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  `;
}

export function renderPriceBreakdownHTML(b: ReturnType<typeof BookingCalculator.computePrice>, isAr: boolean): string {
  const curr = isAr ? 'ر.س' : 'SAR';
  return `
    <div class="breakdown-row">
      <span class="row-label">${isAr ? b.unitTypeTitleAr : b.unitTypeTitleEn} (${b.nights} ${isAr ? 'ليالٍ' : 'nights'} × ${b.basePricePerNight.toLocaleString()} ${curr}):</span>
      <span class="row-val">${b.subtotalNights.toLocaleString()} ${curr}</span>
    </div>

    ${b.amenitiesDetails.map(a => `
      <div class="breakdown-row sub-amenity-row">
        <span class="row-label">+ ${isAr ? a.titleAr : a.titleEn}:</span>
        <span class="row-val">+${a.cost.toLocaleString()} ${curr}</span>
      </div>
    `).join('')}

    <div class="breakdown-divider"></div>

    <div class="breakdown-row">
      <span class="row-label">${i18n.t('staySubtotal')}:</span>
      <span class="row-val">${b.subtotalBeforeTax.toLocaleString()} ${curr}</span>
    </div>

    <div class="breakdown-row">
      <span class="row-label">${i18n.t('vatLabel')}:</span>
      <span class="row-val">${b.vat15.toLocaleString()} ${curr}</span>
    </div>

    <div class="breakdown-total-row">
      <span class="total-label gradient-text-gold">${i18n.t('totalSARLabel')}</span>
      <div class="total-val-box">
        <span class="total-amount">${b.totalSAR.toLocaleString()}</span>
        <span class="total-currency">${curr}</span>
      </div>
    </div>
  `;
}

function getUnitVisualRepresentation(unitType: string): string {
  if (unitType === 'sadu') {
    return `
      <div class="sadu-tent-graphic">
        <div class="sadu-roof"></div>
        <div class="sadu-walls">
          <div class="sadu-pattern-stripe"></div>
        </div>
        <div class="sadu-entrance"></div>
      </div>
    `;
  } else if (unitType === 'airstream') {
    return `
      <div class="airstream-graphic">
        <div class="airstream-body">
          <div class="airstream-window w1"></div>
          <div class="airstream-window w2"></div>
        </div>
        <div class="airstream-wheel"></div>
      </div>
    `;
  } else {
    // Geodesic Dome
    return `
      <div class="geodesic-dome-graphic">
        <div class="dome-shell">
          <div class="dome-grid-overlay"></div>
          <div class="dome-glow-interior"></div>
        </div>
        <div class="dome-deck"></div>
      </div>
    `;
  }
}
