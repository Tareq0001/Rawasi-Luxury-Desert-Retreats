export interface MoonInfo {
  phaseNameAr: string;
  phaseNameEn: string;
  illuminationPct: number;
  isWaxing: boolean;
  astrophotographyScore: number; // 1 to 10
  astrophotographyRatingAr: string;
  astrophotographyRatingEn: string;
  iconSvg: string;
}

export interface PlanetVisibility {
  nameAr: string;
  nameEn: string;
  symbol: string;
  magnitude: number;
  bestTimeAr: string;
  bestTimeEn: string;
  visibleTelescope: string;
  visibleTelescopeEn: string;
  status: 'optimal' | 'moderate' | 'low';
}

export interface DesertPackingItem {
  id: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  essential: boolean;
  category: 'clothing' | 'astronomy' | 'comfort';
}

export class WeatherAdvisorEngine {
  /**
   * Calculates realistic astronomical Moon Phase for any date
   */
  public static getMoonPhase(targetDate: Date = new Date()): MoonInfo {
    // Known reference new moon: Jan 11, 2024, 11:57 UTC
    const refNewMoon = new Date('2024-01-11T11:57:00Z').getTime();
    const synodicMonth = 29.53058867 * 24 * 60 * 60 * 1000; // ms
    const diff = targetDate.getTime() - refNewMoon;
    const phaseFraction = ((diff % synodicMonth) + synodicMonth) % synodicMonth / synodicMonth;

    // Illumination fraction (0 at new moon, 1.0 at full moon)
    const illumination = Math.round((1 - Math.cos(phaseFraction * 2 * Math.PI)) / 2 * 100);

    let phaseNameAr = '';
    let phaseNameEn = '';
    let iconSvg = '';
    let astroScore = 10;
    let astroRatingAr = '';
    let astroRatingEn = '';

    if (phaseFraction < 0.03 || phaseFraction > 0.97) {
      phaseNameAr = 'مُحَاق (ولادة الهلال الجديد)';
      phaseNameEn = 'New Moon';
      astroScore = 10;
      astroRatingAr = 'استثنائي 10/10 (سماء حالكة تماماً لرصد المجرات السحيقة)';
      astroRatingEn = 'Exceptional 10/10 (Pitch black skies for deep sky astrophotography)';
      iconSvg = '🌑';
    } else if (phaseFraction < 0.22) {
      phaseNameAr = 'هلال متزايد (هلال أول)';
      phaseNameEn = 'Waxing Crescent';
      astroScore = 9;
      astroRatingAr = 'ممتاز جداً 9/10 (إضاءة قمرية ضعيفة لا تحجب النجوم)';
      astroRatingEn = 'Superb 9/10 (Minimal moonlight, superb milky way contrast)';
      iconSvg = '🌒';
    } else if (phaseFraction < 0.28) {
      phaseNameAr = 'تربيع أول';
      phaseNameEn = 'First Quarter';
      astroScore = 7;
      astroRatingAr = 'جيد 7/10 (تغرب إضاءة القمر بعد منتصف الليل)';
      astroRatingEn = 'Good 7/10 (Moon sets after midnight for dark early hours)';
      iconSvg = '🌓';
    } else if (phaseFraction < 0.47) {
      phaseNameAr = 'أحدب متزايد';
      phaseNameEn = 'Waxing Gibbous';
      astroScore = 5;
      astroRatingAr = 'متوسط 5/10 (فرصة ممتازة لتصوير تضاريس القمر نفسه)';
      astroRatingEn = 'Moderate 5/10 (Great for lunar crater photography)';
      iconSvg = '🌔';
    } else if (phaseFraction < 0.53) {
      phaseNameAr = 'بدر مكتمل';
      phaseNameEn = 'Full Moon';
      astroScore = 4;
      astroRatingAr = 'ليلة البدر 4/10 (إضاءة قمرية ساحرة للكثبان وتصوير تضاريس القمر)';
      astroRatingEn = 'Full Moon 4/10 (Mesmerizing dune landscape illumination)';
      iconSvg = '🌕';
    } else if (phaseFraction < 0.72) {
      phaseNameAr = 'أحدب متناقص';
      phaseNameEn = 'Waning Gibbous';
      astroScore = 6;
      astroRatingAr = 'متوسط 6/10 (السماء داكنة قبل شروق القمر متأخراً)';
      astroRatingEn = 'Moderate 6/10 (Dark skies in early night hours)';
      iconSvg = '🌖';
    } else if (phaseFraction < 0.78) {
      phaseNameAr = 'تربيع أخير';
      phaseNameEn = 'Last Quarter';
      astroScore = 7;
      astroRatingAr = 'جيد 7/10 (سماء النصف الأول من الليل حالكة)';
      astroRatingEn = 'Good 7/10 (First half of the night is pitch black)';
      iconSvg = '🌗';
    } else {
      phaseNameAr = 'هلال متناقص (هلال أخير)';
      phaseNameEn = 'Waning Crescent';
      astroScore = 9;
      astroRatingAr = 'ممتاز جداً 9/10 (مثالي لرصد الشهب والفجر الصادق)';
      astroRatingEn = 'Superb 9/10 (Ideal for meteor tracking before dawn)';
      iconSvg = '🌘';
    }

    return {
      phaseNameAr,
      phaseNameEn,
      illuminationPct: illumination,
      isWaxing: phaseFraction < 0.5,
      astrophotographyScore: astroScore,
      astrophotographyRatingAr: astroRatingAr,
      astrophotographyRatingEn: astroRatingEn,
      iconSvg
    };
  }

  /**
   * Planet Radar Live Data
   */
  public static getVisiblePlanets(): PlanetVisibility[] {
    return [
      {
        nameAr: 'كوكب المشتري (سيد الكواكب)',
        nameEn: 'Jupiter & 4 Galilean Moons',
        symbol: '♃',
        magnitude: -2.4,
        bestTimeAr: 'من الساعة 8:30 م حتى الفجر',
        bestTimeEn: 'From 8:30 PM until dawn',
        visibleTelescope: 'أحزمة الغيوم العاصفة، البقعة الحمراء العظيمة، وأقماره الأربعة (غاليليو)',
        visibleTelescopeEn: 'Cloud belts, Great Red Spot, & 4 Galilean Moons',
        status: 'optimal'
      },
      {
        nameAr: 'كوكب زحل (جوهرة الحلقات)',
        nameEn: 'Saturn & Golden Rings',
        symbol: '♄',
        magnitude: +0.6,
        bestTimeAr: 'من الغروب حتى الساعة 11:30 م',
        bestTimeEn: 'From sunset until 11:30 PM',
        visibleTelescope: 'حلقات زحل الذهبية الباهرة مع فاصل كاسيني وقمره الضخم تيتان',
        visibleTelescopeEn: 'Iconic golden rings with Cassini Division & moon Titan',
        status: 'optimal'
      },
      {
        nameAr: 'كوكب الزهرة (نجمة الصباح / المساء)',
        nameEn: 'Venus (Evening Star)',
        symbol: '♀',
        magnitude: -4.1,
        bestTimeAr: 'الشفق الغروبي مباشرة (أول جرم يلمع بعد الشمس)',
        bestTimeEn: 'Immediately at dusk twilight (brightest beacon)',
        visibleTelescope: 'أطوار الكوكب الهلالية والطبقة السحابية الفائقة العاكسة',
        visibleTelescopeEn: 'Crescent phase changes and dense reflective cloud decks',
        status: 'moderate'
      }
    ];
  }

  /**
   * Calculates Desert Night Chill Factor
   */
  public static calculateWindChill(tempC: number, windKmh: number): number {
    if (tempC > 15 || windKmh < 5) return tempC;
    // Standard Wind Chill Index
    const chill = 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
    return Math.round(chill);
  }

  /**
   * Dynamic Packing Advice
   */
  public static getPackingList(retreatTerrain: string): DesertPackingItem[] {
    const list: DesertPackingItem[] = [
      {
        id: 'farwa-jacket',
        titleAr: 'الفروة الصحراوية أو معطف دافئ ثقيل',
        titleEn: 'Traditional Desert Farwa or Heavy Winter Coat',
        descAr: 'تنخفض حرارة الصحراء والمرتفعات ليلاً بمقدار 15 إلى 18 درجة مقارنة بالنهار.',
        descEn: 'Desert temperatures plunge 15-18°C as soon as dusk arrives.',
        essential: true,
        category: 'clothing'
      },
      {
        id: 'red-flashlight',
        titleAr: 'كشاف بإضاءة حمراء لحفظ تكيف العين للظلام',
        titleEn: 'Red-Light Headlamp for Night Vision Retention',
        descAr: 'الإضاءة الحمراء تحافظ على حساسية بؤبؤ العين لرصد سدم النجوم الخافتة.',
        descEn: 'Red wavelengths preserve Rhodopsin night vision pigments for stargazing.',
        essential: true,
        category: 'astronomy'
      },
      {
        id: 'desert-boots',
        titleAr: 'أحذية مشي صحراوية مقاومة للرمال',
        titleEn: 'High-Ankle Sand-Proof Trail Boots',
        descAr: 'مناسبة للمشي على الكثبان والتشكيلات الصخرية أثناء جولات الرصد.',
        descEn: 'Crucial for navigating soft dunes and rugged sandstone canyon paths.',
        essential: true,
        category: 'clothing'
      },
      {
        id: 'camera-tripod',
        titleAr: 'حامل كاميرا ثلاثي صلب (Tripod) للتصوير الفلكي',
        titleEn: 'Heavy Duty Tripod for Astrophotography',
        descAr: 'لالتقاط صور تعريض طويل (Long Exposure) لمجرة درب التبانة والشهب.',
        descEn: 'Essential for stable long exposures (15-30s) capturing the Milky Way core.',
        essential: false,
        category: 'astronomy'
      },
      {
        id: 'thermal-flask',
        titleAr: 'حافظة حرارية للمشروبات الساخنة والقهوة السعودية',
        titleEn: 'Insulated Thermal Flask for Hot Beverages & Saudi Coffee',
        descAr: 'للاستمتاع بالقهوة الخولانية الدافئة خلال جلسات الرصد الممتدة.',
        descEn: 'Enjoy piping hot Khawlani spiced coffee during extended midnight star vigils.',
        essential: true,
        category: 'comfort'
      }
    ];

    if (retreatTerrain === 'mountain') {
      list.push({
        id: 'rain-shell',
        titleAr: 'سترة مقاومة للرياح والرذاذ الجبلي',
        titleEn: 'Windproof Alpine Shell & Moisture Shield',
        descAr: 'ارتفاع السودة 3000م يصاحبه ضباب كثيف ونسمات جبلية قوية.',
        descEn: 'Al Souda altitude exceeds 3000m with dense fog drifts and brisk winds.',
        essential: true,
        category: 'clothing'
      });
    }

    return list;
  }
}
