export interface Retreat {
  id: string;
  nameAr: string;
  nameEn: string;
  regionAr: string;
  regionEn: string;
  terrain: 'canyon' | 'mountain' | 'crimson' | 'coastal';
  terrainAr: string;
  terrainEn: string;
  bortleScale: number;
  bortleDescAr: string;
  bortleDescEn: string;
  elevation: string;
  elevationEn: string;
  gps: string;
  pricePerNight: number;
  imageDay: string;
  imageNight: string;
  descriptionAr: string;
  descriptionEn: string;
  featuresAr: string[];
  featuresEn: string[];
  unitTypes: {
    typeAr: string;
    typeEn: string;
    capacity: string;
    capacityEn: string;
    sqm: number;
  }[];
  temperature: {
    dayC: number;
    nightC: number;
    windSpeedKmh: number;
    humidityPct: number;
  };
  highlightConstellations: string[];
}

export const RETREATS: Retreat[] = [
  {
    id: 'alula-ashar',
    nameAr: 'قباب وادي عِشار الفلكية - العلا',
    nameEn: 'Ashar Valley Stargazing Domes - AlUla',
    regionAr: 'العلا، منطقة المدينة المنورة',
    regionEn: 'AlUla, Medina Province',
    terrain: 'canyon',
    terrainAr: 'أودية وأخاديد الحجر الرملي',
    terrainEn: 'Sandstone Canyons',
    bortleScale: 1,
    bortleDescAr: 'ظلام فلكي حالك ونقي (فئة 1 على مقياس بورتل)',
    bortleDescEn: 'Pristine Dark Sky (Bortle Class 1)',
    elevation: '720 م فوق سطح البحر',
    elevationEn: '720 m above sea level',
    gps: '26.6852° N, 37.9184° E',
    pricePerNight: 3850,
    // High quality curated luxury desert images with fallback styling
    imageDay: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=1600&q=80',
    imageNight: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80',
    descriptionAr: 'انغمس في أسطورة وادي عِشار بين جبال الحجر الرملي النحتية. صُممت قباب الرصد الجيوديسية الزجاجية بتقنية العزل الحراري الذكي لتمنحك رؤية بانورامية 360 درجة لنجوم مجرة درب التبانة وسديم الجبار مباشرة من سريرك الفاخر.',
    descriptionEn: 'Immerse in the timeless wonder of Ashar Valley amid ancient sandstone monuments. Custom geodesic glass domes featuring smart climate control provide uninterrupted 360-degree vistas of the Milky Way and Orion Nebula directly from your king-size bed.',
    featuresAr: [
      'قباب زجاجية بانورامية بطلاء ذكي مضاد للانعكاس',
      'تلسكوب سيلسترون 8 بوصة محوسب مع فلاتر سديمية',
      'جلسة سمر خاصة مع حطب الغضا والأرطى العطري',
      'مسبح مياه ساخنة معلق بين التكوينات الصخرية',
      'مرشد فلكي خاص وشاي وقهوة خولانية ملكية'
    ],
    featuresEn: [
      '360° Smart Anti-reflective Panoramic Glass Domes',
      'Computerized 8" Celestron Telescope with Nebula Filters',
      'Private Sand Firepit with Aromatic Ghada Wood',
      'Private Heated Infinity Plunge Pool nestled in rocks',
      'Private Astronomer & Royal Khawlani Saudi Coffee Service'
    ],
    unitTypes: [
      { typeAr: 'قبة فلكية جيوديسية ماستر', typeEn: 'Master Celestial Geodesic Dome', capacity: '2 ضيوف', capacityEn: '2 Guests', sqm: 85 },
      { typeAr: 'فيلا الرصد الصحراوية الملكية', typeEn: 'Royal Observatory Desert Villa', capacity: '4 ضيوف', capacityEn: '4 Guests', sqm: 160 }
    ],
    temperature: {
      dayC: 29,
      nightC: 12,
      windSpeedKmh: 14,
      humidityPct: 18
    },
    highlightConstellations: ['orion', 'pleiades', 'cassiopeia']
  },
  {
    id: 'asir-peaks',
    nameAr: 'أكواخ سحاب العرعر - السودة، عسير',
    nameEn: 'Juniper Cloud Cliff Cabins - Al Souda, Asir',
    regionAr: 'السودة، منطقة عسير',
    regionEn: 'Al Souda, Asir Highlands',
    terrain: 'mountain',
    terrainAr: 'قمم جبلية غائمة وغابات عرعر',
    terrainEn: 'Mountain Cloud Peaks & Junipers',
    bortleScale: 2,
    bortleDescAr: 'سماء جبلية نقية جداً فوق طبقة الغيوم (فئة 2)',
    bortleDescEn: 'Pristine Mountain Sky Above Clouds (Bortle Class 2)',
    elevation: '3,015 م فوق سطح البحر',
    elevationEn: '3,015 m above sea level',
    gps: '18.2711° N, 42.3683° E',
    pricePerNight: 2950,
    imageDay: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80',
    imageNight: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80',
    descriptionAr: 'على أعلى قمة في المملكة بارتفاع يتجاوز 3000 متر، تطفو أكواخ العرعر الزجاجية المعلقة على حافة الأجراف الأسطورية. استمتع ببحر الغيوم البيضاء نهاراً، وبسماء باردة صافية كالألماس تعلو الغيوم ليلاً في هدوء ملهم.',
    descriptionEn: 'Perched upon Saudi Arabia\'s highest mountain ridge above 3,000 meters, these glass cliffside cabins hover over endless cloud oceans. Experience crisp alpine breeze by day and diamond-sharp celestial stargazing floating above the clouds by night.',
    featuresAr: [
      'شرفات معلقة بزجاج عريض يطل على تهامة وبحر السحاب',
      'مدفأة حطب عسيرية من حجر البازلت الطبيعي',
      'مرصد بصري لمراقبة نسور عسير ومجرات السماء العميقة',
      'جاكوزي خارجي دافئ على الحافة الجبلية',
      'جلسة عسيرية بالنقش القط مع شاي جبلي بالحبق'
    ],
    featuresEn: [
      'Cantilevered Glass Observation Deck over Sea of Clouds',
      'Natural Basalt Fireplace with Local Mountain Wood',
      'High-Power Optics for Falconry & Deep Sky Galaxies',
      'Heated Outdoor Cliffside Jacuzzi in Alpine Air',
      'Authentic Asiri Qatt Al-Asiri Lounge with Herbal Mountain Teas'
    ],
    unitTypes: [
      { typeAr: 'كوخ الجرف المعلق البانورامي', typeEn: 'Cantilevered Cliffside Glass Cabin', capacity: '2 ضيوف', capacityEn: '2 Guests', sqm: 75 },
      { typeAr: 'جناح سحاب العرعر العائلي', typeEn: 'Juniper Cloud Family Suite', capacity: '4 ضيوف', capacityEn: '4 Guests', sqm: 140 }
    ],
    temperature: {
      dayC: 20,
      nightC: 7,
      windSpeedKmh: 22,
      humidityPct: 65
    },
    highlightConstellations: ['ursa-major', 'cassiopeia', 'cygnus']
  },
  {
    id: 'tabuk-hisma',
    nameAr: 'مضارب حِسمى الملكية - صحراء حِسمى، تبوك',
    nameEn: 'Hisma Royal Pavilions - Hisma Desert, Tabuk',
    regionAr: 'صحراء حِسمى والديسة، منطقة تبوك',
    regionEn: 'Hisma Desert & Wadi Al Disah, Tabuk',
    terrain: 'crimson',
    terrainAr: 'رمال حمراء نارية وأقواس حجرية',
    terrainEn: 'Crimson Sands & Wind Arches',
    bortleScale: 1,
    bortleDescAr: 'ظلام كوني مطلق (فئة 1 - أنقى سماء لرصد الشهب)',
    bortleDescEn: 'Ultimate Cosmic Darkness (Bortle Class 1)',
    elevation: '980 م فوق سطح البحر',
    elevationEn: '980 m above sea level',
    gps: '28.3150° N, 35.8812° E',
    pricePerNight: 3400,
    imageDay: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80',
    imageNight: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
    descriptionAr: 'بين الأقواس الصخرية الحمراء التي شكلتها رياح الدهور في صحراء حِسمى المهيبة، تمزج مضارب السدو الملكية بين عراقة التراث البدوي وأرقى معايير الرفاهية المعاصرة. وجهة عالمية لا تضاهى لمشاهدة زخات الشهب السنوية.',
    descriptionEn: 'Amidst colossal crimson arches shaped by eons of desert winds, our Royal Sadu pavilions fuse legendary Bedouin hospitality with six-star boutique luxury. One of Earth\'s premier dark-sky preserves for observing annual meteor showers.',
    featuresAr: [
      'خيام ملكية من السدو السعودي التراثي المنسوج يدوياً',
      'رحلات سفاري كلاسيكية 4x4 لرصد النجوم وتصوير الديسة',
      'مائدة شواء وحنيذ تحت النجوم مع عازف ربابة وعود',
      'تلسكوب حراري ذكي بتقنية التتبع الإلكتروني للشهب',
      'خيمة مساج وعناية بالأعشاب الصحراوية العطرية'
    ],
    featuresEn: [
      'Handcrafted Authentic Saudi Sadu Royal Pavilions',
      'Vintage 4x4 Off-road Celestial Safari to Wadi Disah',
      'Under-the-Stars Feast & Live Traditional Lute Melodies',
      'Automated Meteor-Tracking Infrared Telescope',
      'Desert Botanicals Wellness & Aromatherapy Tent'
    ],
    unitTypes: [
      { typeAr: 'سرادق السدو الملكي الفاخر', typeEn: 'Royal Sadu Grand Pavilion', capacity: '2 ضيوف', capacityEn: '2 Guests', sqm: 95 },
      { typeAr: 'مضرب حسمى الإمبراطوري', typeEn: 'Imperial Hisma Encampment Suite', capacity: '6 ضيوف', capacityEn: '6 Guests', sqm: 220 }
    ],
    temperature: {
      dayC: 28,
      nightC: 11,
      windSpeedKmh: 16,
      humidityPct: 15
    },
    highlightConstellations: ['orion', 'ursa-major', 'pleiades']
  },
  {
    id: 'red-sea-dunes',
    nameAr: 'فلل الكثبان والشاطئ العذراء - وجهة البحر الأحمر',
    nameEn: 'Coastal Dune Villas - The Red Sea Destination',
    regionAr: 'أرخبيل البحر الأحمر، تبوك',
    regionEn: 'The Red Sea Archipelago, Tabuk',
    terrain: 'coastal',
    terrainAr: 'كثبان ذهبية ناعمة ومياه فيروزية',
    terrainEn: 'Coastal Dunes & Turquoise Waters',
    bortleScale: 2,
    bortleDescAr: 'سماء ساحلية عذراء بنسمات بحرية منعشة (فئة 2)',
    bortleDescEn: 'Pristine Marine Dark Sky (Bortle Class 2)',
    elevation: '15 م فوق سطح البحر',
    elevationEn: '15 m above sea level',
    gps: '25.5392° N, 36.9841° E',
    pricePerNight: 4200,
    imageDay: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    imageNight: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    descriptionAr: 'حيث تتعانق الرمال الذهبية النقية مع مياه البحر الأحمر الشفافة. فلل بيئية مستدامة بالكامل تطفو بتناغم فوق الكثبان الساحلية، لتستيقظ على أمواج البحر الهادئة وتنام على انعكاس النجوم الساطعة على سطح الماء.',
    descriptionEn: 'Where immaculate golden dunes meet crystalline coral lagoons. Fully sustainable bioclimatic villas floating lightly over the shoreline, serenaded by gentle waves and illuminated by constellations reflecting upon the tranquil sea.',
    featuresAr: [
      'تصميم معماري بيئي من أخشاب مستدامة وطاقة شمسية 100%',
      'شرفة استلقاء شبكية معلقة فوق رمال الشاطئ',
      'رحلة يخت ليلي شراعي لرصد النجوم من قلب عرض البحر',
      'عشاء مأكولات بحرية طازجة معدة على الفحم والملح البحري',
      'جلسة تأمل فلكي وعلاج صوتي بترددات البحر الهادئة'
    ],
    featuresEn: [
      '100% Solar-Powered Sustainable Eco-Dune Architecture',
      'Over-Sand Catamaran Hammock Netting for Star Viewing',
      'Bioluminescent Night Catamaran Stargazing Voyage',
      'Coastal Catch Woodfire Dinner on Private Sandbank',
      'Sound Bath Meditation & Ocean Wave Stargazing Therapy'
    ],
    unitTypes: [
      { typeAr: 'فيلا الكثبان الساحلية لشخصين', typeEn: 'Oceanfront Eco-Dune Villa', capacity: '2 ضيوف', capacityEn: '2 Guests', sqm: 110 },
      { typeAr: 'فيلا المرجان الملكية الخاصة', typeEn: 'Royal Lagoon Coral Villa', capacity: '4 ضيوف', capacityEn: '4 Guests', sqm: 190 }
    ],
    temperature: {
      dayC: 31,
      nightC: 19,
      windSpeedKmh: 12,
      humidityPct: 45
    },
    highlightConstellations: ['cygnus', 'cassiopeia', 'orion']
  }
];
