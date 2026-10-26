export interface StarNode {
  id: string;
  nameAr: string;
  nameEn: string;
  x: number; // 0 - 100%
  y: number; // 0 - 100%
  magnitude: number; // visual magnitude (lower = brighter)
  color?: string;
  spectralType?: string;
}

export interface Constellation {
  id: string;
  nameAr: string;
  nameEn: string;
  arabicTraditionAr: string;
  arabicTraditionEn: string;
  seasonAr: string;
  seasonEn: string;
  loreAr: string;
  loreEn: string;
  stars: StarNode[];
  edges: [number, number][]; // indices into stars array
  bestViewingRetreatId: string;
}

export const CONSTELLATIONS: Constellation[] = [
  {
    id: 'orion',
    nameAr: 'كوكبة الجَبّار (الجوزاء عند العرب)',
    nameEn: 'Orion the Hunter',
    arabicTraditionAr: 'كانت العرب تطلق عليها "الجوزاء" وتعتبرها ملكة سماء الشتاء وعلامة اشتداد البرد وموسم المطر وسهيل.',
    arabicTraditionEn: 'Known in ancient Arabic as "Al-Jawzaa", Queen of the Winter Skies, heralding cold desert nights and rains.',
    seasonAr: 'الشتاء والربيع (نوفمبر - إبريل)',
    seasonEn: 'Winter & Spring (Nov - Apr)',
    loreAr: 'أشهر وأوضح كوكبة في سماء الصحراء السعودية. يلمع فيها حزام الجبار المكون من 3 نجوم مستقيمة (النطاق، النظام، المنطقة) وسديم الجبار العظيم M42 الذي يمكن رؤيته بالعين المجردة من وادي عشار وصحراء حسمى.',
    loreEn: 'The most iconic constellation in Saudi desert skies. Features the famous 3-star Belt (Alnitak, Alnilam, Mintaka) and the great M42 Orion Nebula visible with naked eye in pristine Bortle 1 sites.',
    bestViewingRetreatId: 'alula-ashar',
    stars: [
      { id: 'betelgeuse', nameAr: 'إبط الجوزاء (منكب الجوزاء)', nameEn: 'Betelgeuse', x: 30, y: 25, magnitude: 0.5, color: '#f87171' },
      { id: 'bellatrix', nameAr: 'الناجذ (بلاتريكس)', nameEn: 'Bellatrix', x: 70, y: 28, magnitude: 1.6, color: '#93c5fd' },
      { id: 'alnitak', nameAr: 'النطاق', nameEn: 'Alnitak', x: 42, y: 52, magnitude: 1.7, color: '#bae6fd' },
      { id: 'alnilam', nameAr: 'النظام', nameEn: 'Alnilam', x: 50, y: 50, magnitude: 1.6, color: '#bae6fd' },
      { id: 'mintaka', nameAr: 'المنطقة', nameEn: 'Mintaka', x: 58, y: 48, magnitude: 2.2, color: '#bae6fd' },
      { id: 'saiph', nameAr: 'سيف الجبار', nameEn: 'Saiph', x: 34, y: 76, magnitude: 2.0, color: '#93c5fd' },
      { id: 'rigel', nameAr: 'رِجْل الجوزاء (ريجل)', nameEn: 'Rigel', x: 68, y: 74, magnitude: 0.1, color: '#67e8f9' },
      { id: 'meissa', nameAr: 'الهقعة (مَيْسان)', nameEn: 'Meissa', x: 50, y: 15, magnitude: 3.3, color: '#e0f2fe' }
    ],
    edges: [
      [7, 0], [7, 1], // head to shoulders
      [0, 2], [1, 4], // shoulders to belt
      [2, 3], [3, 4], // belt
      [2, 5], [4, 6]  // belt to feet
    ]
  },
  {
    id: 'ursa-major',
    nameAr: 'الدب الأكبر (بنات نَعْش الكبرى)',
    nameEn: 'Ursa Major (The Great Bear)',
    arabicTraditionAr: 'سمّاها العرب "بنات نعش" وجعلوا النعش مربع النجوم الأربعة، والتابعات خلفه هن بناته الماشيات في رثائه.',
    arabicTraditionEn: 'Named Banat Na\'sh (Daughters of the Bier) in ancient Arabic star lore, used for centuries to find True North.',
    seasonAr: 'طوال العام (أوج الرؤية في الربيع والصيف)',
    seasonEn: 'Year-Round (Peaks in Spring/Summer)',
    loreAr: 'تشتهر بمغرفة الدب الأكبر الدائرية حول القطب الشمالي. يشير النجمان (الدبة والمراق) مباشرة إلى النجم القطبي (الجدي) الذي يوجه الرحالة والمسافرين في قلب صحراء الجزيرة العربية.',
    loreEn: 'Features the northern Big Dipper asterism. The pointer stars Merak and Dubhe guide straight to Polaris (The North Star), guiding caravans across the Arabian desert for millennia.',
    bestViewingRetreatId: 'asir-peaks',
    stars: [
      { id: 'dubhe', nameAr: 'الدُبّة (ظهر الدب)', nameEn: 'Dubhe', x: 75, y: 28, magnitude: 1.8, color: '#fef08a' },
      { id: 'merak', nameAr: 'المَرَاق (خاصرة الدب)', nameEn: 'Merak', x: 74, y: 48, magnitude: 2.3, color: '#bae6fd' },
      { id: 'phecda', nameAr: 'الفَخِذ', nameEn: 'Phecda', x: 55, y: 52, magnitude: 2.4, color: '#bae6fd' },
      { id: 'megrez', nameAr: 'المَغْرِز (مبتدأ الذيل)', nameEn: 'Megrez', x: 56, y: 32, magnitude: 3.3, color: '#e0f2fe' },
      { id: 'alioth', nameAr: 'الأَلْيَة (الجون)', nameEn: 'Alioth', x: 42, y: 38, magnitude: 1.7, color: '#e0f2fe' },
      { id: 'mizar', nameAr: 'المِئْزَر (مع القائد السها)', nameEn: 'Mizar', x: 28, y: 46, magnitude: 2.2, color: '#bae6fd' },
      { id: 'alkaid', nameAr: 'القائد', nameEn: 'Alkaid', x: 14, y: 56, magnitude: 1.8, color: '#93c5fd' }
    ],
    edges: [
      [0, 1], [1, 2], [2, 3], [3, 0], // The bowl
      [3, 4], [4, 5], [5, 6]          // The handle
    ]
  },
  {
    id: 'cassiopeia',
    nameAr: 'ذات الكرسي (الكف الخضيب)',
    nameEn: 'Cassiopeia the Queen',
    arabicTraditionAr: 'سمّاها العرب القدماء "الكف الخضيب" وشبهوها بكف ملطخة بالحناء مبسوطة في نهر المجرة.',
    arabicTraditionEn: 'Referred to by ancient Arabs as "The Henna-Stained Hand" stretched out across the river of the Milky Way.',
    seasonAr: 'الخريف والشتاء (سبتمبر - فبراير)',
    seasonEn: 'Autumn & Winter (Sep - Feb)',
    loreAr: 'كوكبة ملكية تأخذ شكل حرف W اللامع في السماء الشمالية، وتقع مباشرة داخل الذراع الكثيف لمجرة درب التبانة، مما يجعل خلفيتها مرصعة بآلاف النجوم والعناقيد المفتوحة.',
    loreEn: 'A distinctive royal W-shaped constellation in the northern sky, lying directly in the dense starfields of the Milky Way, rich with deep-sky open clusters and nebulae.',
    bestViewingRetreatId: 'tabuk-hisma',
    stars: [
      { id: 'caph', nameAr: 'الكَف (الكف الخضيب)', nameEn: 'Caph', x: 18, y: 46, magnitude: 2.2, color: '#fef08a' },
      { id: 'schedar', nameAr: 'الصدر', nameEn: 'Schedar', x: 36, y: 64, magnitude: 2.2, color: '#fed7aa' },
      { id: 'gamma-cas', nameAr: 'نافي (سنام الناقة)', nameEn: 'Navi', x: 50, y: 32, magnitude: 2.1, color: '#bae6fd' },
      { id: 'ruchbah', nameAr: 'الركبة', nameEn: 'Ruchbah', x: 68, y: 60, magnitude: 2.6, color: '#e0f2fe' },
      { id: 'segin', nameAr: 'سيجين (المعصم)', nameEn: 'Segin', x: 84, y: 38, magnitude: 3.3, color: '#93c5fd' }
    ],
    edges: [
      [0, 1], [1, 2], [2, 3], [3, 4]
    ]
  },
  {
    id: 'pleiades',
    nameAr: 'عنقود الثُّرَيّا (الشقيقات السبع)',
    nameEn: 'Pleiades (The Seven Sisters)',
    arabicTraditionAr: 'أبرز منازل القمر عند العرب: "إذا طلع النجم غدية، ابتغى الراعي كفية". علامة مواسم المطر والخصب.',
    arabicTraditionEn: 'The supreme star cluster in Arab heritage; its dawn rising signaled seasons, rains, and pasture fertility.',
    seasonAr: 'الخريف والشتاء (أكتوبر - مارس)',
    seasonEn: 'Autumn & Winter (Oct - Mar)',
    loreAr: 'عنقود نجمي مفتوح أزرق ساطع في برج الثور، يضم مئات النجوم الفتية محاطة بسديم انعكاسي أزرق غازي فائق الجمال عند النظر إليه عبر تلسكوبات منتجعاتنا الفلكية.',
    loreEn: 'A radiant open star cluster glowing in icy blue brilliance. Contains hundreds of young stars enveloped in reflection nebulosity, breathtaking through our resort telescopes.',
    bestViewingRetreatId: 'alula-ashar',
    stars: [
      { id: 'alcyone', nameAr: 'الطرف (العيوقي)', nameEn: 'Alcyone', x: 50, y: 50, magnitude: 2.8, color: '#67e8f9' },
      { id: 'atlas', nameAr: 'أطلس', nameEn: 'Atlas', x: 68, y: 56, magnitude: 3.6, color: '#93c5fd' },
      { id: 'electra', nameAr: 'إلكترا', nameEn: 'Electra', x: 30, y: 44, magnitude: 3.7, color: '#93c5fd' },
      { id: 'maia', nameAr: 'مايا', nameEn: 'Maia', x: 42, y: 34, magnitude: 3.8, color: '#67e8f9' },
      { id: 'merope', nameAr: 'ميروبي', nameEn: 'Merope', x: 44, y: 64, magnitude: 4.1, color: '#67e8f9' },
      { id: 'taygeta', nameAr: 'تايجيتا', nameEn: 'Taygeta', x: 28, y: 30, magnitude: 4.3, color: '#93c5fd' },
      { id: 'pleione', nameAr: 'بليوني', nameEn: 'Pleione', x: 72, y: 52, magnitude: 5.0, color: '#bae6fd' }
    ],
    edges: [
      [5, 2], [2, 3], [3, 0], [0, 4], [0, 1], [1, 6]
    ]
  }
];
