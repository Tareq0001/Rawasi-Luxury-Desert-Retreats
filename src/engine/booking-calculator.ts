export interface AmenityOption {
  id: string;
  nameAr: string;
  nameEn: string;
  descAr: string;
  descEn: string;
  priceSAR: number;
  perNight: boolean;
  icon: string;
}

export const AMENITIES_LIST: AmenityOption[] = [
  {
    id: 'telescope',
    nameAr: 'تلسكوب سيلسترون المحوسب الاحترافي (8")',
    nameEn: 'Celestron 8" Computerized Telescope',
    descAr: 'تتبع آلي للأجرام السماوية مع عدسات تكبير رقمية للتصوير بالهاتف.',
    descEn: 'Motorized celestial tracking with digital smartphone imaging adapters.',
    priceSAR: 450,
    perNight: true,
    icon: '🔭'
  },
  {
    id: 'firepit',
    nameAr: 'جلسة سمر مع حطب الغضا والأرطى الملكي',
    nameEn: 'Private Sand Firepit & Ghada Wood',
    descAr: 'إشعال النار الصحراوية العطرية مع دلّة القهوة الخولانية والتمور الفاخرة.',
    descEn: 'Aromatic desert firewood ritual with piping hot Saudi coffee and dates.',
    priceSAR: 350,
    perNight: true,
    icon: '🔥'
  },
  {
    id: 'jacuzzi',
    nameAr: 'جاكوزي دافئ خاص تحت النجوم',
    nameEn: 'Heated Cliffside Starlight Jacuzzi',
    descAr: 'استرخاء في مياه دافئة مع إطلالة مفتوحة على أذرع مجرة درب التبانة.',
    descEn: 'Hydrotherapy warm waters under the crystal-clear Milky Way expanse.',
    priceSAR: 550,
    perNight: true,
    icon: '✨'
  },
  {
    id: 'astronomer',
    nameAr: 'مرشد فلكي وباحث تراثي خاص',
    nameEn: 'Private Stargazing Astronomer Guide',
    descAr: 'جلسة رصد خاصة مدتها ساعتان للتعرف على منازل القمر وأسماء النجوم عند العرب.',
    descEn: '2-hour private deep sky exploration decoding ancient Arabian star lore.',
    priceSAR: 800,
    perNight: false,
    icon: '🧭'
  },
  {
    id: 'feast',
    nameAr: 'مائدة عشاء سعودية أصيلة وفطور صحراوي',
    nameEn: 'Authentic Saudi Royal Feast & Breakfast',
    descAr: 'حنيذ ومندي مدفون على الجمر، كليجا حائل، فواكه طازجة، وفطور شروق الشمس.',
    descEn: 'Underground coal-cooked Haneeth feast, Hail kleicha, & sunrise breakfast.',
    priceSAR: 650,
    perNight: true,
    icon: '🍽️'
  }
];

export interface ConfiguratorSelection {
  retreatId: string;
  unitType: 'dome' | 'sadu' | 'airstream';
  selectedAmenities: string[]; // amenity IDs
  checkIn: string; // YYYY-MM-DD
  checkOut: string; // YYYY-MM-DD
  guestsCount: number;
}

export interface BookingPriceBreakdown {
  nights: number;
  basePricePerNight: number;
  unitMultiplier: number;
  unitTypeTitleAr: string;
  unitTypeTitleEn: string;
  subtotalNights: number;
  amenitiesTotal: number;
  amenitiesDetails: {
    id: string;
    titleAr: string;
    titleEn: string;
    cost: number;
  }[];
  subtotalBeforeTax: number;
  vat15: number;
  totalSAR: number;
  bookingRef: string;
}

export class BookingCalculator {
  public static calculateNights(checkIn: string, checkOut: string): number {
    try {
      const d1 = new Date(checkIn);
      const d2 = new Date(checkOut);
      const diffTime = d2.getTime() - d1.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return Math.max(1, isNaN(diffDays) ? 1 : diffDays);
    } catch {
      return 1;
    }
  }

  public static generateBookingReference(retreatId: string): string {
    const code = retreatId.split('-')[0].toUpperCase();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return `RAWASI-${code}-${randomNum}`;
  }

  public static computePrice(
    baseNightRate: number,
    selection: ConfiguratorSelection
  ): BookingPriceBreakdown {
    const nights = this.calculateNights(selection.checkIn, selection.checkOut);

    // Unit Multiplier
    let multiplier = 1.0;
    let unitTypeTitleAr = 'قبة فلكية جيوديسية زجاجية';
    let unitTypeTitleEn = 'Panoramic Geodesic Glass Dome';

    if (selection.unitType === 'sadu') {
      multiplier = 1.18;
      unitTypeTitleAr = 'خيمة السدو الملكية الفاخرة';
      unitTypeTitleEn = 'Royal Handwoven Sadu Pavilion';
    } else if (selection.unitType === 'airstream') {
      multiplier = 0.92;
      unitTypeTitleAr = 'جناح إيرستريم الفضي الكلاسيكي';
      unitTypeTitleEn = 'Luxury Silver Airstream Suite';
    }

    const effectiveNightRate = Math.round(baseNightRate * multiplier);
    const subtotalNights = effectiveNightRate * nights;

    // Calculate Amenities
    let amenitiesTotal = 0;
    const amenitiesDetails: { id: string; titleAr: string; titleEn: string; cost: number }[] = [];

    for (const amId of selection.selectedAmenities) {
      const am = AMENITIES_LIST.find(a => a.id === amId);
      if (am) {
        const itemCost = am.perNight ? am.priceSAR * nights : am.priceSAR;
        amenitiesTotal += itemCost;
        amenitiesDetails.push({
          id: am.id,
          titleAr: am.nameAr,
          titleEn: am.nameEn,
          cost: itemCost
        });
      }
    }

    const subtotalBeforeTax = subtotalNights + amenitiesTotal;
    const vat15 = Math.round(subtotalBeforeTax * 0.15);
    const totalSAR = subtotalBeforeTax + vat15;
    const bookingRef = this.generateBookingReference(selection.retreatId);

    return {
      nights,
      basePricePerNight: effectiveNightRate,
      unitMultiplier: multiplier,
      unitTypeTitleAr,
      unitTypeTitleEn,
      subtotalNights,
      amenitiesTotal,
      amenitiesDetails,
      subtotalBeforeTax,
      vat15,
      totalSAR,
      bookingRef
    };
  }
}
