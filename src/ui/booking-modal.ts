import { i18n } from './i18n';
import { RETREATS } from '../data/retreats';
import { ConfiguratorSelection, BookingPriceBreakdown } from '../engine/booking-calculator';

export interface GuestDetails {
  fullName: string;
  phone: string;
  email: string;
  notes: string;
}

export function renderBookingModal(
  selection: ConfiguratorSelection,
  breakdown: BookingPriceBreakdown
): string {
  const isAr = i18n.isAr();
  const retreat = RETREATS.find(r => r.id === selection.retreatId) || RETREATS[0];
  const curr = isAr ? 'ر.س' : 'SAR';

  return `
    <div class="modal-backdrop" id="booking-modal-backdrop">
      <div class="modal-dialog glass-panel" id="booking-modal-dialog">
        <div class="modal-header">
          <div class="modal-title-box">
            <span class="modal-badge">✨ 6-Star Glamping Booking</span>
            <h3 class="modal-title gradient-text-gold">${i18n.t('modalTitle')}</h3>
          </div>
          <button class="modal-close-btn" id="btn-close-booking-modal" aria-label="Close">&times;</button>
        </div>

        <div class="modal-body">
          <div class="modal-summary-strip">
            <div class="summary-pill">
              <span class="sp-label">${isAr ? 'الملاذ المختارة:' : 'Sanctuary:'}</span>
              <strong class="sp-val">${isAr ? retreat.nameAr.split('-')[0] : retreat.nameEn.split('-')[0]}</strong>
            </div>
            <div class="summary-pill">
              <span class="sp-label">${isAr ? 'الفترة:' : 'Dates:'}</span>
              <strong class="sp-val">${selection.checkIn} ➔ ${selection.checkOut} (${breakdown.nights} ${isAr ? 'ليالٍ' : 'nights'})</strong>
            </div>
            <div class="summary-pill">
              <span class="sp-label">${isAr ? 'المجموع النهائي:' : 'Total Amount:'}</span>
              <strong class="sp-val text-gold">${breakdown.totalSAR.toLocaleString()} ${curr}</strong>
            </div>
          </div>

          <form id="booking-form" class="booking-form">
            <div class="form-section-title">${i18n.t('guestDetailsTitle')}</div>

            <div class="form-row-2">
              <div class="form-group">
                <label for="guest-name">${i18n.t('fullName')} *</label>
                <input type="text" id="guest-name" required placeholder="${isAr ? 'أ. طارق ابوعشي' : 'Tareq Aboushi'}" class="form-input" value="${isAr ? 'أ. طارق ابوعشي' : 'Tareq Aboushi'}">
              </div>
              <div class="form-group">
                <label for="guest-phone">${i18n.t('phone')} *</label>
                <input type="tel" id="guest-phone" required placeholder="+966 50 000 0000" class="form-input" value="+966 50 123 4567">
              </div>
            </div>

            <div class="form-group">
              <label for="guest-email">${i18n.t('email')} *</label>
              <input type="email" id="guest-email" required placeholder="tareq@example.com" class="form-input" value="tareq.aboushi@gmail.com">
            </div>

            <div class="form-group">
              <label for="guest-notes">${i18n.t('specialNotes')}</label>
              <textarea id="guest-notes" rows="2" class="form-textarea" placeholder="${isAr ? 'تفضيلات إعداد القهوة السعودية، تجهيزات تلسكوب محددة، أو أوقات وصول خاصة...' : 'Any preferences for Saudi coffee preparation, telescope eyepieces, or arrival time...'}"></textarea>
            </div>

            <div class="vat-disclaimer">
              <span class="vat-icon">ℹ️</span>
              <span>${isAr ? 'السعر المعروض شامل ضريبة القيمة المضافة 15% ورسوم الخدمة والضيافة الكاملة.' : 'Total price includes 15% Saudi VAT, luxury amenity preparation, and full concierge service.'}</span>
            </div>

            <div class="modal-footer-actions">
              <button type="button" class="btn btn-outline" id="btn-cancel-modal">${i18n.t('closeModal')}</button>
              <button type="submit" class="btn btn-primary btn-glow btn-lg" id="btn-submit-booking">
                <span>${i18n.t('confirmAndGeneratePass')}</span>
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
}
