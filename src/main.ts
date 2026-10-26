import './style.css';
import { i18n } from './ui/i18n';
import { RETREATS, Retreat } from './data/retreats';
import { CONSTELLATIONS, Constellation, StarNode } from './data/constellations';
import { StargazingCanvasEngine } from './engine/stargazing-canvas';
import { desertAudio } from './engine/audio';
import { ConfiguratorSelection, BookingCalculator, AMENITIES_LIST } from './engine/booking-calculator';
import { renderHero } from './ui/hero-view';
import { renderStargazingView } from './ui/stargazing-view';
import { renderRetreatsView, renderRetreatCard } from './ui/retreats-view';
import { renderConfiguratorView, renderPriceBreakdownHTML } from './ui/configurator-view';
import { renderWeatherView } from './ui/weather-view';
import { renderBookingModal, GuestDetails } from './ui/booking-modal';
import { renderBoardingPassModal } from './ui/boarding-pass';
import { motionFX } from './engine/motion-fx';

class RawasiApp {
  private canvasEngine: StargazingCanvasEngine | null = null;
  private currentTerrainFilter: string = 'all';
  private currentLightingMode: 'day' | 'night' = 'night';
  private activeWeatherRetreatId: string = 'alula-ashar';
  
  // Configurator active state
  private configSelection: ConfiguratorSelection = {
    retreatId: 'alula-ashar',
    unitType: 'dome',
    selectedAmenities: ['telescope', 'firepit'],
    checkIn: this.getDefaultCheckInDate(),
    checkOut: this.getDefaultCheckOutDate(),
    guestsCount: 2
  };

  private currentGuestDetails: GuestDetails = {
    fullName: 'أ. طارق ابوعشي',
    phone: '+966 50 123 4567',
    email: 'tareq.aboushi@gmail.com',
    notes: ''
  };

  constructor() {
    this.initApp();
  }

  private getDefaultCheckInDate(): string {
    const d = new Date();
    d.setDate(d.getDate() + 3); // 3 days from today
    return d.toISOString().split('T')[0];
  }

  private getDefaultCheckOutDate(): string {
    const d = new Date();
    d.setDate(d.getDate() + 6); // 3 nights stay
    return d.toISOString().split('T')[0];
  }

  public initApp() {
    this.applyThemeFromStorage();
    this.renderAllViews();
    this.setupGlobalControls();
    this.setupCelestialObservatory();
    this.setupRetreatsEvents();
    this.setupConfiguratorEvents();
    this.setupWeatherEvents();
    motionFX.init();

    // Re-render when language flips
    i18n.onLanguageChange(() => {
      this.renderAllViews();
      this.updateNavbarLabels();
      this.setupCelestialObservatory();
      this.setupRetreatsEvents();
      this.setupConfiguratorEvents();
      this.setupWeatherEvents();
      motionFX.init();
    });
  }

  private renderAllViews() {
    const appEl = document.getElementById('app');
    if (!appEl) return;

    appEl.innerHTML = `
      ${renderHero()}
      ${renderStargazingView()}
      ${renderRetreatsView()}
      ${renderConfiguratorView(this.configSelection)}
      ${renderWeatherView(this.activeWeatherRetreatId)}
    `;

    this.updateNavbarLabels();
  }

  private updateNavbarLabels() {
    const isAr = i18n.isAr();
    const setTxt = (id: string, text: string) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };

    setTxt('nav-brand-name', i18n.t('brandName'));
    setTxt('nav-brand-tagline', i18n.t('brandTagline'));
    setTxt('nav-link-home', i18n.t('navHome'));
    setTxt('nav-link-observatory', i18n.t('navObservatory'));
    setTxt('nav-link-retreats', i18n.t('navRetreats'));
    setTxt('nav-link-configurator', i18n.t('navConfigurator'));
    setTxt('nav-link-weather', i18n.t('navWeather'));
    setTxt('nav-btn-book', i18n.t('navBookNow'));
    setTxt('lang-text', isAr ? 'English' : 'العربية');

    // Footer labels
    setTxt('footer-dest-title', isAr ? 'الملاذات الصحراوية' : 'Desert Sanctuaries');
    setTxt('footer-astro-title', isAr ? 'مرصد النجوم والفلك' : 'Astro Observatory');
    setTxt('footer-desc', i18n.t('footerBrandDesc'));
    setTxt('footer-copy', i18n.t('copyright') + ' • ' + i18n.t('vision2030'));
  }

  private setupGlobalControls() {
    // Audio Campfire Toggle
    const btnAudio = document.getElementById('btn-audio-toggle');
    const audioIcon = document.getElementById('audio-icon');

    btnAudio?.addEventListener('click', async () => {
      const isPlaying = await desertAudio.toggle();
      if (btnAudio) btnAudio.classList.toggle('active', isPlaying);
      if (audioIcon) audioIcon.textContent = isPlaying ? '🔊' : '🔥';
    });

    // Theme Toggle
    const btnTheme = document.getElementById('btn-theme-toggle');
    btnTheme?.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('rawasi_theme', nextTheme);
      this.updateThemeIcon(nextTheme);
    });

    // Language Toggle
    const btnLang = document.getElementById('btn-lang-toggle');
    btnLang?.addEventListener('click', () => {
      i18n.toggleLang();
    });
  }

  private applyThemeFromStorage() {
    const saved = localStorage.getItem('rawasi_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    this.updateThemeIcon(saved);
  }

  private updateThemeIcon(theme: string) {
    const icon = document.getElementById('theme-icon');
    if (icon) {
      icon.textContent = theme === 'dark' ? '🌙' : '☀️';
    }
  }

  /* ========================================================================
     Celestial Observatory Canvas & Controls
     ======================================================================== */
  private setupCelestialObservatory() {
    const canvas = document.getElementById('celestial-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    if (this.canvasEngine) {
      this.canvasEngine.destroy();
    }

    this.canvasEngine = new StargazingCanvasEngine(canvas);
    this.canvasEngine.setLanguage(i18n.isAr());

    // Update active constellation details card
    this.updateConstellationInfo('orion');

    // Constellation Tabs
    const tabsContainer = document.getElementById('constellation-tabs');
    tabsContainer?.addEventListener('click', (e) => {
      const btn = (e.target as HTMLElement).closest('.tab-btn') as HTMLElement;
      if (!btn) return;

      const constId = btn.getAttribute('data-constellation-id');
      if (constId) {
        tabsContainer.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.canvasEngine?.setActiveConstellation(constId);
        this.updateConstellationInfo(constId);
      }
    });

    // Bortle Slider
    const slider = document.getElementById('bortle-slider') as HTMLInputElement;
    const bortleText = document.getElementById('bortle-display-text');

    slider?.addEventListener('input', () => {
      const val = parseInt(slider.value, 10);
      this.canvasEngine?.setBortleScale(val);

      if (bortleText) {
        if (val === 1) bortleText.textContent = i18n.t('bortle1');
        else if (val === 2) bortleText.textContent = i18n.t('bortle2');
        else if (val === 3) bortleText.textContent = i18n.t('bortle3');
        else bortleText.textContent = i18n.t('bortle4');
      }
    });

    // Star Selection callback
    this.canvasEngine.onStarSelect((star: StarNode, constel: Constellation) => {
      const isAr = i18n.isAr();
      const seasonEl = document.getElementById('constellation-season');
      const nameEl = document.getElementById('constellation-name');
      const descEl = document.getElementById('constellation-description');

      if (seasonEl) seasonEl.textContent = `✦ ${isAr ? 'نجم مرصود في' : 'Star observed in'} ${isAr ? constel.nameAr : constel.nameEn}`;
      if (nameEl) nameEl.textContent = `${isAr ? star.nameAr : star.nameEn} (Mag ${star.magnitude})`;
      if (descEl) {
        descEl.textContent = isAr
          ? `النجم: ${star.nameAr} • القدر الظاهري: ${star.magnitude} • يقع في قلب ${constel.nameAr}. يُعد من ألمع العلامات الإرشادية لرحالة الصحراء.`
          : `Star: ${star.nameEn} • Apparent Magnitude: ${star.magnitude} • Anchors ${constel.nameEn}. Used for desert orientation.`;
      }
    });
  }

  private updateConstellationInfo(constId: string) {
    const isAr = i18n.isAr();
    const c = CONSTELLATIONS.find(item => item.id === constId);
    if (!c) return;

    const seasonEl = document.getElementById('constellation-season');
    const nameEl = document.getElementById('constellation-name');
    const tradEl = document.getElementById('constellation-tradition');
    const descEl = document.getElementById('constellation-description');

    if (seasonEl) seasonEl.textContent = isAr ? c.seasonAr : c.seasonEn;
    if (nameEl) nameEl.textContent = isAr ? c.nameAr : c.nameEn;
    if (tradEl) tradEl.textContent = isAr ? c.arabicTraditionAr : c.arabicTraditionEn;
    if (descEl) descEl.textContent = isAr ? c.loreAr : c.loreEn;
  }

  /* ========================================================================
     Retreats Showcase Events (Filtering, Lighting Toggle, Quick Book)
     ======================================================================== */
  private setupRetreatsEvents() {
    // Terrain Filters
    const filtersContainer = document.getElementById('terrain-filters');
    filtersContainer?.addEventListener('click', (e) => {
      const btn = (e.target as HTMLElement).closest('.filter-btn') as HTMLElement;
      if (!btn) return;

      const terrain = btn.getAttribute('data-terrain');
      if (terrain) {
        this.currentTerrainFilter = terrain;
        filtersContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.filterRetreatsDisplay();
      }
    });

    // Lighting Day / Night Toggle
    const btnDay = document.getElementById('btn-mode-day');
    const btnNight = document.getElementById('btn-mode-night');

    btnDay?.addEventListener('click', () => {
      this.currentLightingMode = 'day';
      btnDay.classList.add('active');
      btnNight?.classList.remove('active');
      this.filterRetreatsDisplay();
    });

    btnNight?.addEventListener('click', () => {
      this.currentLightingMode = 'night';
      btnNight.classList.add('active');
      btnDay?.classList.remove('active');
      this.filterRetreatsDisplay();
    });

    // Quick Book & Customize Retreat buttons
    const retreatsGrid = document.getElementById('retreats-grid');
    retreatsGrid?.addEventListener('click', (e) => {
      const bookBtn = (e.target as HTMLElement).closest('.btn-book-retreat') as HTMLElement;
      if (bookBtn) {
        const retId = bookBtn.getAttribute('data-retreat-id');
        if (retId) {
          this.configSelection.retreatId = retId;
          this.openBookingModal();
        }
        return;
      }

      const confBtn = (e.target as HTMLElement).closest('.btn-configure-retreat') as HTMLElement;
      if (confBtn) {
        const retId = confBtn.getAttribute('data-retreat-id');
        if (retId) {
          this.configSelection.retreatId = retId;
          this.syncConfiguratorUI();
          document.getElementById('configurator')?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  private filterRetreatsDisplay() {
    const retreatsGrid = document.getElementById('retreats-grid');
    if (!retreatsGrid) return;

    const filtered = this.currentTerrainFilter === 'all'
      ? RETREATS
      : RETREATS.filter(r => r.terrain === this.currentTerrainFilter);

    retreatsGrid.innerHTML = filtered.map(r =>
      renderRetreatCard(r, i18n.isAr(), this.currentLightingMode)
    ).join('');
  }

  /* ========================================================================
     Smart Dome Configurator Studio Events
     ======================================================================== */
  private setupConfiguratorEvents() {
    // Destination Pill Selector
    const pillContainer = document.getElementById('retreat-pill-selector');
    pillContainer?.addEventListener('click', (e) => {
      const btn = (e.target as HTMLElement).closest('.retreat-select-btn') as HTMLElement;
      if (!btn) return;
      const retId = btn.getAttribute('data-retreat-id');
      if (retId) {
        this.configSelection.retreatId = retId;
        pillContainer.querySelectorAll('.retreat-select-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.syncConfiguratorUI();
      }
    });

    // Architectural Unit Selection
    const unitsContainer = document.getElementById('unit-types-grid');
    unitsContainer?.addEventListener('click', (e) => {
      const opt = (e.target as HTMLElement).closest('.unit-type-option') as HTMLElement;
      if (!opt) return;
      const unit = opt.getAttribute('data-unit') as 'dome' | 'sadu' | 'airstream';
      if (unit) {
        this.configSelection.unitType = unit;
        unitsContainer.querySelectorAll('.unit-type-option').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        this.syncConfiguratorUI();
      }
    });

    // Amenities Checkboxes
    const amenitiesContainer = document.getElementById('amenities-checklist');
    amenitiesContainer?.addEventListener('change', (e) => {
      const target = e.target as HTMLInputElement;
      if (target && target.classList.contains('amenity-input')) {
        const id = target.value;
        if (target.checked) {
          if (!this.configSelection.selectedAmenities.includes(id)) {
            this.configSelection.selectedAmenities.push(id);
          }
        } else {
          this.configSelection.selectedAmenities = this.configSelection.selectedAmenities.filter(item => item !== id);
        }
        target.closest('.amenity-checkbox-card')?.classList.toggle('active', target.checked);
        this.syncConfiguratorUI();
      }
    });

    // Check-in & Check-out Date Inputs
    const checkInInput = document.getElementById('input-check-in') as HTMLInputElement;
    const checkOutInput = document.getElementById('input-check-out') as HTMLInputElement;

    checkInInput?.addEventListener('change', () => {
      this.configSelection.checkIn = checkInInput.value;
      this.syncConfiguratorUI();
    });

    checkOutInput?.addEventListener('change', () => {
      this.configSelection.checkOut = checkOutInput.value;
      this.syncConfiguratorUI();
    });

    // Guests selector
    const guestsInput = document.getElementById('input-guests') as HTMLSelectElement;
    guestsInput?.addEventListener('change', () => {
      this.configSelection.guestsCount = parseInt(guestsInput.value, 10) || 2;
      this.syncConfiguratorUI();
    });

    // Proceed to Booking Modal button
    const btnProceed = document.getElementById('btn-proceed-booking');
    btnProceed?.addEventListener('click', () => {
      this.openBookingModal();
    });
  }

  private syncConfiguratorUI() {
    const isAr = i18n.isAr();
    const retreat = RETREATS.find(r => r.id === this.configSelection.retreatId) || RETREATS[0];
    const breakdown = BookingCalculator.computePrice(retreat.pricePerNight, this.configSelection);

    // Update Price Breakdown HTML
    const container = document.getElementById('price-breakdown-container');
    if (container) {
      container.innerHTML = renderPriceBreakdownHTML(breakdown, isAr);
    }

    // Update 3D Visualizer Backdrop & Unit Graphics
    const backdrop = document.getElementById('preview-backdrop');
    if (backdrop) {
      backdrop.style.backgroundImage = `url('${retreat.imageNight}')`;
    }

    const unitModel = document.getElementById('unit-3d-model');
    if (unitModel) {
      if (this.configSelection.unitType === 'sadu') {
        unitModel.innerHTML = `
          <div class="sadu-tent-graphic">
            <div class="sadu-roof"></div>
            <div class="sadu-walls"><div class="sadu-pattern-stripe"></div></div>
          </div>
        `;
      } else if (this.configSelection.unitType === 'airstream') {
        unitModel.innerHTML = `
          <div class="airstream-graphic">
            <div class="airstream-body">
              <div class="airstream-window w1"></div>
              <div class="airstream-window w2"></div>
            </div>
          </div>
        `;
      } else {
        unitModel.innerHTML = `
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

    // Update amenities bubbles overlay
    const amOverlay = document.getElementById('preview-amenities-overlay');
    if (amOverlay) {
      amOverlay.innerHTML = this.configSelection.selectedAmenities.map(id => {
        const am = AMENITIES_LIST.find(a => a.id === id);
        return am ? `<span class="amenity-bubble" title="${isAr ? am.nameAr : am.nameEn}">${am.icon}</span>` : '';
      }).join('');
    }
  }

  /* ========================================================================
     Weather Advisor Events
     ======================================================================== */
  private setupWeatherEvents() {
    const weatherTabs = document.getElementById('weather-retreat-tabs');
    weatherTabs?.addEventListener('click', (e) => {
      const btn = (e.target as HTMLElement).closest('.weather-tab-btn') as HTMLElement;
      if (!btn) return;
      const retId = btn.getAttribute('data-retreat-id');
      if (retId) {
        this.activeWeatherRetreatId = retId;
        const weatherSection = document.getElementById('weather');
        if (weatherSection) {
          const tempContainer = document.createElement('div');
          tempContainer.innerHTML = renderWeatherView(this.activeWeatherRetreatId);
          const newSection = tempContainer.querySelector('#weather');
          if (newSection) {
            weatherSection.replaceWith(newSection);
            this.setupWeatherEvents(); // rebind
          }
        }
      }
    });

    // Packing checklist interactive check/uncheck
    const packingList = document.getElementById('packing-checklist');
    packingList?.addEventListener('change', (e) => {
      const target = e.target as HTMLInputElement;
      if (target) {
        const row = target.closest('.packing-item-row');
        if (row) {
          row.classList.toggle('checked', target.checked);
        }
      }
    });
  }

  /* ========================================================================
     Modals: Booking Flow & Luxury Boarding Pass
     ======================================================================== */
  private openBookingModal() {
    const modalsRoot = document.getElementById('modals-root');
    if (!modalsRoot) return;

    const retreat = RETREATS.find(r => r.id === this.configSelection.retreatId) || RETREATS[0];
    const breakdown = BookingCalculator.computePrice(retreat.pricePerNight, this.configSelection);

    modalsRoot.innerHTML = renderBookingModal(this.configSelection, breakdown);

    // Wire Modal Close
    const closeBtn = document.getElementById('btn-close-booking-modal');
    const cancelBtn = document.getElementById('btn-cancel-modal');
    const backdrop = document.getElementById('booking-modal-backdrop');

    const closeModal = () => {
      modalsRoot.innerHTML = '';
    };

    closeBtn?.addEventListener('click', closeModal);
    cancelBtn?.addEventListener('click', closeModal);
    backdrop?.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });

    // Wire Form Submit -> Boarding Pass Generation
    const form = document.getElementById('booking-form') as HTMLFormElement;
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('guest-name') as HTMLInputElement;
      const phoneInput = document.getElementById('guest-phone') as HTMLInputElement;
      const emailInput = document.getElementById('guest-email') as HTMLInputElement;
      const notesInput = document.getElementById('guest-notes') as HTMLTextAreaElement;

      this.currentGuestDetails = {
        fullName: nameInput?.value || 'Tareq Aboushi',
        phone: phoneInput?.value || '+966 50 123 4567',
        email: emailInput?.value || 'tareq.aboushi@gmail.com',
        notes: notesInput?.value || ''
      };

      this.openBoardingPassModal(breakdown);
    });
  }

  private openBoardingPassModal(breakdown: ReturnType<typeof BookingCalculator.computePrice>) {
    const modalsRoot = document.getElementById('modals-root');
    if (!modalsRoot) return;

    modalsRoot.innerHTML = renderBoardingPassModal(
      this.currentGuestDetails,
      this.configSelection,
      breakdown
    );

    // Trigger Celebration Stardust Confetti!
    motionFX.triggerGoldenConfetti();

    // Print Pass
    const printBtn = document.getElementById('btn-print-pass');
    printBtn?.addEventListener('click', () => {
      window.print();
    });

    // Close Pass
    const closePassBtn = document.getElementById('btn-close-pass-modal');
    const passBackdrop = document.getElementById('boarding-pass-backdrop');

    const closePass = () => {
      modalsRoot.innerHTML = '';
    };

    closePassBtn?.addEventListener('click', closePass);
    passBackdrop?.addEventListener('click', (e) => {
      if (e.target === passBackdrop) closePass();
    });
  }
}

// Instantiate on DOM load
window.addEventListener('DOMContentLoaded', () => {
  new RawasiApp();
});
