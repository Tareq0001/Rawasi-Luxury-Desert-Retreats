import { i18n } from './i18n';
import { RETREATS } from '../data/retreats';
import { ConfiguratorSelection, BookingPriceBreakdown } from '../engine/booking-calculator';
import { GuestDetails } from './booking-modal';

export function renderBoardingPassModal(
  guest: GuestDetails,
  selection: ConfiguratorSelection,
  breakdown: BookingPriceBreakdown
): string {
  const isAr = i18n.isAr();
  const retreat = RETREATS.find(r => r.id === selection.retreatId) || RETREATS[0];
  const curr = isAr ? 'ر.س' : 'SAR';
  const qrSvg = generateBoardingPassQRSvg(breakdown.bookingRef, retreat.gps);

  return `
    <div class="modal-backdrop pass-modal-backdrop" id="boarding-pass-backdrop">
      <div class="pass-dialog-container">
        
        <!-- Action Toolbar for Print & Close -->
        <div class="pass-toolbar no-print">
          <button class="btn btn-primary btn-glow" id="btn-print-pass">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
              <path d="M6 14h12v8H6z"/>
            </svg>
            <span>${i18n.t('printBoardingPass')}</span>
          </button>
          <button class="btn btn-outline" id="btn-close-pass-modal">
            <span>${i18n.t('closeModal')}</span> &times;
          </button>
        </div>

        <!-- The Printable Luxury Pass Card -->
        <div class="boarding-pass-card" id="printable-boarding-pass">
          
          <!-- Outer Gold Foil Border Accent -->
          <div class="pass-gold-border"></div>

          <!-- Main Pass Section -->
          <div class="pass-main-section">
            
            <!-- Header with Luxury Crest & Brand -->
            <div class="pass-header-row">
              <div class="pass-brand-box">
                <div class="brand-crest">✦ RAWASI ✦</div>
                <div class="brand-title">${i18n.t('boardingPassTitle')}</div>
                <div class="brand-sub">${i18n.t('boardingPassSub')}</div>
              </div>

              <div class="pass-pnr-box">
                <span class="pnr-title">${i18n.t('bookingRefLabel')}</span>
                <span class="pnr-code">${breakdown.bookingRef}</span>
              </div>
            </div>

            <!-- Guest & Destination Details Grid -->
            <div class="pass-details-grid">
              
              <div class="pass-field-cell">
                <span class="field-label">${i18n.t('passengerName')}</span>
                <strong class="field-val">${guest.fullName}</strong>
              </div>

              <div class="pass-field-cell">
                <span class="field-label">${i18n.t('destinationLabel')}</span>
                <strong class="field-val text-gold">${isAr ? retreat.nameAr : retreat.nameEn}</strong>
              </div>

              <div class="pass-field-cell">
                <span class="field-label">${i18n.t('unitTypeLabel')}</span>
                <strong class="field-val">${isAr ? breakdown.unitTypeTitleAr : breakdown.unitTypeTitleEn}</strong>
              </div>

              <div class="pass-field-cell">
                <span class="field-label">${i18n.t('bortleRatingLabel')}</span>
                <strong class="field-val">★ Bortle Class ${retreat.bortleScale} (${isAr ? retreat.bortleDescAr.split('(')[0] : retreat.bortleDescEn.split('(')[0]})</strong>
              </div>

              <div class="pass-field-cell">
                <span class="field-label">${i18n.t('checkInLabel')}</span>
                <strong class="field-val">${selection.checkIn} (15:00)</strong>
              </div>

              <div class="pass-field-cell">
                <span class="field-label">${i18n.t('checkOutLabel')}</span>
                <strong class="field-val">${selection.checkOut} (12:00)</strong>
              </div>

              <div class="pass-field-cell">
                <span class="field-label">${i18n.t('gpsLabel')}</span>
                <strong class="field-val font-mono">${retreat.gps}</strong>
              </div>

              <div class="pass-field-cell">
                <span class="field-label">${i18n.t('totalPaidLabel')}</span>
                <strong class="field-val text-gold">${breakdown.totalSAR.toLocaleString()} ${curr} [PAID]</strong>
              </div>

            </div>

            <!-- Signature & Curated Amenities Strip -->
            <div class="pass-amenities-strip">
              <span class="amenities-strip-label">${isAr ? 'الباقة والخدمات المشمولة في التصريح:' : 'Included Privileges & Astronomy Access:'}</span>
              <div class="amenities-tags-row">
                <span class="tag-pill">🔭 ${isAr ? 'مرصد فلكي وتلسكوب خاص' : 'Private Telescope'}</span>
                <span class="tag-pill">🔥 ${isAr ? 'سمر وحطب صحراوي' : 'Sand Dune Firepit'}</span>
                <span class="tag-pill">☕ ${isAr ? 'قهوة خولانية ملكية' : 'Royal Khawlani Coffee'}</span>
                <span class="tag-pill">🚙 ${isAr ? 'مرافقة سيارات الدفع الرباعي' : '4x4 Desert Concierge'}</span>
              </div>
            </div>

            <div class="pass-legal-watermark">
              <span>ROYAL SAUDI LUXURY GLAMPING & DARK SKY SANCTUARY • EXCLUSIVE ASTRO-PERMIT</span>
            </div>
          </div>

          <!-- Perforated Tear-off Stub Section -->
          <div class="pass-stub-section">
            <div class="stub-notch notch-top"></div>
            <div class="stub-notch notch-bottom"></div>
            <div class="stub-perforation-line"></div>

            <div class="stub-content">
              <div class="stub-header">
                <span class="stub-brand">رَواسي RAWASI</span>
                <span class="stub-flight-type">ASTRO-PASS</span>
              </div>

              <div class="stub-qr-wrapper">
                ${qrSvg}
              </div>

              <div class="stub-qr-note">
                ${i18n.t('qrCodeSubtitle')}
              </div>

              <div class="stub-barcode-block">
                <div class="barcode-lines"></div>
                <div class="barcode-number">${breakdown.bookingRef}</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  `;
}

/**
 * Procedural SVG QR code simulation with recognizable corner finder markers
 */
function generateBoardingPassQRSvg(ref: string, gps: string): string {
  return `
    <svg viewBox="0 0 100 100" class="qr-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- Background -->
      <rect width="100" height="100" fill="#ffffff" rx="4"/>
      
      <!-- Top Left Finder Marker -->
      <rect x="8" y="8" width="24" height="24" fill="#030712" rx="2"/>
      <rect x="12" y="12" width="16" height="16" fill="#ffffff"/>
      <rect x="16" y="16" width="8" height="8" fill="#030712"/>

      <!-- Top Right Finder Marker -->
      <rect x="68" y="8" width="24" height="24" fill="#030712" rx="2"/>
      <rect x="72" y="12" width="16" height="16" fill="#ffffff"/>
      <rect x="76" y="16" width="8" height="8" fill="#030712"/>

      <!-- Bottom Left Finder Marker -->
      <rect x="8" y="68" width="24" height="24" fill="#030712" rx="2"/>
      <rect x="12" y="72" width="16" height="16" fill="#ffffff"/>
      <rect x="16" y="76" width="8" height="8" fill="#030712"/>

      <!-- Data Dots Matrix Pattern -->
      <rect x="36" y="12" width="4" height="4" fill="#030712"/>
      <rect x="44" y="12" width="4" height="4" fill="#030712"/>
      <rect x="52" y="12" width="4" height="4" fill="#030712"/>
      <rect x="36" y="20" width="8" height="4" fill="#030712"/>
      <rect x="52" y="24" width="4" height="8" fill="#030712"/>

      <rect x="12" y="36" width="4" height="8" fill="#030712"/>
      <rect x="20" y="44" width="8" height="4" fill="#030712"/>
      <rect x="32" y="36" width="4" height="4" fill="#030712"/>
      <rect x="40" y="40" width="8" height="8" fill="#030712"/>
      <rect x="56" y="36" width="4" height="4" fill="#030712"/>
      <rect x="64" y="40" width="8" height="4" fill="#030712"/>
      <rect x="76" y="36" width="4" height="8" fill="#030712"/>
      <rect x="84" y="44" width="8" height="4" fill="#030712"/>

      <rect x="36" y="52" width="4" height="4" fill="#030712"/>
      <rect x="48" y="56" width="8" height="4" fill="#030712"/>
      <rect x="60" y="52" width="4" height="8" fill="#030712"/>
      <rect x="72" y="56" width="8" height="4" fill="#030712"/>

      <rect x="36" y="68" width="8" height="4" fill="#030712"/>
      <rect x="52" y="72" width="4" height="8" fill="#030712"/>
      <rect x="68" y="68" width="4" height="4" fill="#030712"/>
      <rect x="76" y="72" width="8" height="4" fill="#030712"/>
      <rect x="68" y="80" width="8" height="8" fill="#030712"/>
      <rect x="84" y="84" width="8" height="4" fill="#030712"/>
      <rect x="40" y="84" width="12" height="4" fill="#030712"/>
    </svg>
  `;
}
