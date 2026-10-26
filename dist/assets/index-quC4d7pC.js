var wr=Object.defineProperty;var Sr=(l,t,e)=>t in l?wr(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e;var B=(l,t,e)=>Sr(l,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();const ji={ar:{siteTitle:"رَواسي | ملاذات التخييم الصحراوي الفاخر ورصد النجوم",siteSubtitle:"بين هيبة التراث وعظمة السماء الكونية",brandName:"رَواسي",brandTagline:"منتجعات التخييم الفاخر والمراصد الفلكية",navHome:"الرئيسية",navObservatory:"مرصد النجوم الفلكي",navRetreats:"أطلس الملاذات",navConfigurator:"استوديو التخصيص",navWeather:"حاسبة الطقس والبرودة",navBookNow:"احجز إقامتك الفاخرة",themeToggle:"تغيير السمة",soundToggle:"أصوات السمر والصحراء",soundPlaying:"صوت السمر يعمل",soundMuted:"تشغيل صوت السمر",heroBadge:"سماء حالكة فئة 1 • محميات النجوم الطبيعية في المملكة",heroTitlePart1:"تحت سموات الجزيرة الأسطورية،",heroTitlePart2:"أعِد اكتشاف النجوم من قبتك الزجاجية الفاخرة.",heroSubtitle:"تجربة ضيافة استثنائية من فئة الست نجوم في أعماق العلا، قمم عسير، رمال حِسمى الحمراء، وكثبان البحر الأحمر العذراء. انعم بسكينة الليل الصحراوي وأسرار الفلكيين الأوائل.",heroCtaExplore:"استكشف المرصد الفلكي",heroCtaCustom:"صمّم خيمتك الذكية",heroStatBortle:"مقياس بورتل 1",heroStatBortleDesc:"ظلام كوني نقي خالي من التلوث الضوئي",heroStatAlt:"أعلى قمة 3,015 م",heroStatAltDesc:"رصد النجوم فوق بحر الغيوم في عسير",heroStatHeritage:"منازل قمرية عريقة",heroStatHeritageDesc:"تراث فلكي عربي يمتد لآلاف السنين",celestialTitle:"مرصد النجوم وسماء الليل التفاعلي",celestialSubtitle:"انقر على النجوم والكوكبات للتعرف على تراث الفلكيين العرب وأسماء النجوم الأصيلة في سماء السعودية",bortleScaleLabel:"محاكي التلوث الضوئي (مقياس بورتل):",bortle1:"فئة 1: العلا وحسمى (ظلام نقي تام)",bortle2:"فئة 2: مرتفعات السودة والبحر الأحمر",bortle3:"فئة 3: ضواحي القرى الهادئة",bortle4:"فئة 4: المناطق شبه الحضرية",constellationTabOrion:"الجَبّار (الجوزاء)",constellationTabUrsa:"الدب الأكبر (بنات نعش)",constellationTabCass:"ذات الكرسي (الكف الخضيب)",constellationTabPleiades:"الثريا (الشقيقات السبع)",moonWidgetTitle:"حالة القمر وفرص التصوير الفلكي الليلة",illumination:"نسبة الإضاءة:",astroRating:"مؤشر جودة التصوير الفلكي:",planetsRadarTitle:"رادار الكواكب المرئية الليلة",interactivityTip:"حرك المؤشر للتفاعل مع عمق النجوم، وانقر على أي نجم لاستعراض أسراره الفلكية والتراثية.",retreatsTitle:"أطلس الملاذات والمنتجعات الصحراوية",retreatsSubtitle:"أربع وجهات أيقونية متفردة في ربوع المملكة، صُممت كل منها بخصوصية تامة لتمنحك ملاذاً لا يُنسى",filterAll:"كافة الوجهات",filterCanyon:"أخاديد الحجر الرملي",filterMountain:"قمم السحاب الجبلية",filterCrimson:"رمال حِسمى الحمراء",filterCoastal:"كثبان الشاطئ العذراء",toggleDayNight:"تبديل المشهد (نهار / ليل)",viewDay:"مشهد النهار الذهبي",viewNight:"مشهد الليل والنجوم",perNightSAR:"ر.س / الليلة",amenitiesIncluded:"مزايا الملاذ الحصرية:",reserveNowBtn:"احجز هذا الملاذ الآن",customizeThisRetreat:"تخصيص في الاستوديو",configuratorTitle:"استوديو تخصيص الخيمة والكبينة الذكية",configuratorSubtitle:"اختر نوع المسكن الفاخر، وأضف لمساتك وتجهيزات الرصد المفضلة لمشاهدة التكلفة الفورية وحجز الإقامة",chooseRetreat:"1. اختر الوجهة الصحراوية:",chooseUnitType:"2. نوع المسكن والنمط المعماري:",unitDome:"قبة جيوديسية بانورامية 360°",unitDomeDesc:"زجاج مزدوج عازل للحرارة مع سقف شفاف بالكامل لرؤية المجرة",unitSadu:"سرادق السدو الملكي الفاخر",unitSaduDesc:"خيمة تراثية منسوجة يدوياً بنقوش السدو مع صالون ملكي خاص",unitAirstream:"جناح إيرستريم الفضي الفاخر",unitAirstreamDesc:"كرفان أمريكي كلاسيكي مخصص بتصميم فاخر وتراس خارجي خاص",chooseAmenities:"3. التجهيزات الإضافية والخدمات الفاخرة:",bookingSummaryTitle:"ملخص الباقة والتسعير الفوري",datesSelection:"التواريخ وعدد الضيوف:",checkInDate:"تاريخ الوصول (Check-in):",checkOutDate:"تاريخ المغادرة (Check-out):",guestsCount:"عدد الضيوف:",nightsCount:"عدد الليالي:",staySubtotal:"تكلفة الإقامة:",amenitiesSubtotal:"الخدمات والتجهيزات المختارة:",vatLabel:"ضريبة القيمة المضافة (15% VAT):",totalSARLabel:"المجموع الإجمالي النهائي:",proceedBookingBtn:"المتابعة وإصدار التذكرة الفاخرة",weatherTitle:"حاسبة الطقس وبرودة ليل الصحراء",weatherSubtitle:"تعرف على الفرق الحراري الكبير بين النهار والليل واستعد بأفضل التجهيزات لرحلة لا تشوبها شائبة",selectLocationWeather:"اختر الوجهة لمراجعة الطقس:",dayTemp:"حرارة النهار العظمى",nightTemp:"حرارة الليل الصغرى",windChill:"الحرارة المحسوسة مع هبوب الرياح",packingListTitle:"حقيبة التجهيزات الموصى بها لملاذك:",packEssential:"ضروري وأساسي",packRecommended:"موصى به للرصد",modalTitle:"تأكيد الحجز الفاخر",guestDetailsTitle:"بيانات الضيف الأساسية",fullName:"الاسم الكامل:",phone:"رقم الجوال:",email:"البريد الإلكتروني:",specialNotes:"طلبات خاصة أو حمية غذائية:",confirmAndGeneratePass:"تأكيد الحجز وإصدار التذكرة الذهبية",boardingPassTitle:"تذكرة الإقامة وتصريح الرصد الفلكي الصحراوي",boardingPassSub:"RAWASI LUXURY DESERT BOARDING PASS & ASTRO-PERMIT",passengerName:"اسم الضيف:",bookingRefLabel:"رقم الحجز المرجعي (PNR):",destinationLabel:"الوجهة والملاذ:",checkInLabel:"تاريخ الوصول:",checkOutLabel:"تاريخ المغادرة:",gpsLabel:"إحداثيات الموقع (GPS):",bortleRatingLabel:"تصنيف نقاء السماء:",unitTypeLabel:"نوع الوحدة:",totalPaidLabel:"إجمالي الحجز (شامل 15% ضريبة):",qrCodeSubtitle:"امسح الرمز لتفعيل الإحداثيات الوعرة واستلام مفتاح القبة الذكية",printBoardingPass:"طباعة التذكرة الفاخرة (PDF / ورقي)",closeModal:"إغلاق",footerBrandDesc:"رَواسي هي المنصة الرائدة في المملكة العربية السعودية للتخييم الصحراوي البيئي الفاخر ومحميات السماء المظلمة، نجمع بين عراقة الضيافة السعودية وأحدث تقنيات الرصد الفلكي المستدام.",copyright:"جميع الحقوق محفوظة © رَواسي للتخييم الفاخر والمراصد الفلكية 2026",vision2030:"صُممت بتناغم تام مع رؤية السعودية 2030 لتعزيز السياحة البيئية الفاخرة"},en:{siteTitle:"RAWASI | Luxury Desert Retreats & Stargazing Sanctuaries",siteSubtitle:"Where Ancient Arabian Heritage Meets Celestial Wonders",brandName:"RAWASI",brandTagline:"Luxury Desert Glamping & Stargazing Sanctuaries",navHome:"Home",navObservatory:"Celestial Observatory",navRetreats:"Retreats Atlas",navConfigurator:"Custom Studio",navWeather:"Night Chill Advisor",navBookNow:"Book Your Sanctuary",themeToggle:"Switch Theme",soundToggle:"Campfire & Wind Audio",soundPlaying:"Campfire Ambiance On",soundMuted:"Play Desert Campfire Sound",heroBadge:"Bortle Class 1 Skies • Pristine Dark-Sky Preserves of Saudi Arabia",heroTitlePart1:"Under Mythic Arabian Skies,",heroTitlePart2:"Rediscover the Cosmos from Your Luxury Panoramic Dome.",heroSubtitle:"An ultra-luxury six-star wilderness journey into Ashar Valley AlUla, Asir Cloud Peaks, Hisma Crimson Sands, and pristine Red Sea Dunes. Savor the stillness of desert nights and secrets of ancient astronomers.",heroCtaExplore:"Explore Celestial Map",heroCtaCustom:"Customize Your Dome",heroStatBortle:"Bortle Class 1",heroStatBortleDesc:"Zero light pollution celestial darkness",heroStatAlt:"Peak 3,015 m",heroStatAltDesc:"Stargazing above cloud oceans in Asir",heroStatHeritage:"Millennia of Star Lore",heroStatHeritageDesc:"Ancient Arabian celestial navigation",celestialTitle:"Interactive Celestial Stargazing & Dark Sky Map",celestialSubtitle:"Click stars and constellations to discover ancient Arabic star names and lore in Saudi Arabia's darkest skies",bortleScaleLabel:"Light Pollution Simulator (Bortle Dark-Sky Scale):",bortle1:"Class 1: AlUla & Hisma (Pure Pristine Darkness)",bortle2:"Class 2: Al Souda Peaks & Red Sea Dunes",bortle3:"Class 3: Rural Quiet Oasis",bortle4:"Class 4: Semi-Suburban Horizon",constellationTabOrion:"Orion (Al-Jawzaa)",constellationTabUrsa:"Ursa Major (Banat Na'sh)",constellationTabCass:"Cassiopeia (Al-Kaff Al-Khadib)",constellationTabPleiades:"Pleiades (Al-Thurayya)",moonWidgetTitle:"Tonight's Lunar Phase & Astrophotography Conditions",illumination:"Illumination:",astroRating:"Astrophotography Index:",planetsRadarTitle:"Planetary Visibility Radar Tonight",interactivityTip:"Move cursor for starfield parallax; click any star node to reveal deep sky astrophysical data and Arabian lore.",retreatsTitle:"Atlas of Iconic Saudi Desert Retreats",retreatsSubtitle:"Four extraordinary wilderness destinations across Saudi Arabia, engineered with ultra-exclusive privacy and pristine night skies",filterAll:"All Landscapes",filterCanyon:"Sandstone Canyons",filterMountain:"Cloud Mountain Peaks",filterCrimson:"Hisma Crimson Sands",filterCoastal:"Pristine Coastal Dunes",toggleDayNight:"Toggle Lighting (Day / Night)",viewDay:"Golden Sunlight View",viewNight:"Starlit Midnight View",perNightSAR:"SAR / Night",amenitiesIncluded:"Signature Sanctuary Features:",reserveNowBtn:"Book This Retreat",customizeThisRetreat:"Configure in Studio",configuratorTitle:"Smart Dome & Glamping Customizer Studio",configuratorSubtitle:"Select architectural design, tailor luxury astronomy amenities, and view instant live pricing breakdown",chooseRetreat:"1. Select Desert Destination:",chooseUnitType:"2. Architectural Pavilion Style:",unitDome:"360° Panoramic Geodesic Glass Dome",unitDomeDesc:"Double-glazed smart insulated glass with transparent skylight roof",unitSadu:"Royal Handcrafted Sadu Pavilion",unitSaduDesc:"Authentic handwoven Bedouin textile suite with private majlis",unitAirstream:"Vintage Silver Airstream Suite",unitAirstreamDesc:"Iconic retro-futuristic caravan with private cedar sundeck",chooseAmenities:"3. Curated Stargazing & Hospitality Amenities:",bookingSummaryTitle:"Live Package Summary & Pricing",datesSelection:"Dates & Guest Party:",checkInDate:"Check-in Date:",checkOutDate:"Check-out Date:",guestsCount:"Guests Count:",nightsCount:"Total Nights:",staySubtotal:"Lodging Subtotal:",amenitiesSubtotal:"Selected Curated Amenities:",vatLabel:"Saudi VAT (15%):",totalSARLabel:"Grand Total Amount:",proceedBookingBtn:"Proceed & Generate Boarding Pass",weatherTitle:"Desert Night Chill & Weather Advisor",weatherSubtitle:"Plan for steep day-to-night temperature drops with custom alpine and desert packing advisories",selectLocationWeather:"Select Destination for Weather Data:",dayTemp:"Daytime Peak Temp",nightTemp:"Midnight Low Temp",windChill:"Apparent Wind Chill Temp",packingListTitle:"Curated Packing List for Your Retreat:",packEssential:"Essential & Required",packRecommended:"Recommended for Stargazing",modalTitle:"Confirm Luxury Reservation",guestDetailsTitle:"Primary Guest Information",fullName:"Full Name:",phone:"Mobile Number:",email:"Email Address:",specialNotes:"Dietary Preferences & Special Requests:",confirmAndGeneratePass:"Confirm Booking & Issue Golden Pass",boardingPassTitle:"Luxury Desert Boarding Pass & Celestial Permit",boardingPassSub:"RAWASI LUXURY DESERT BOARDING PASS & ASTRO-PERMIT",passengerName:"Guest Name:",bookingRefLabel:"Booking Reference (PNR):",destinationLabel:"Destination & Retreat:",checkInLabel:"Arrival Date:",checkOutLabel:"Departure Date:",gpsLabel:"GPS Coordinates:",bortleRatingLabel:"Dark-Sky Rating:",unitTypeLabel:"Accommodation Type:",totalPaidLabel:"Total Paid (Incl. 15% VAT):",qrCodeSubtitle:"Scan for off-road satellite coordinates & digital smart lock key",printBoardingPass:"Print Luxury Pass (PDF / Print)",closeModal:"Close",footerBrandDesc:"Rawasi is Saudi Arabia's premier luxury eco-glamping and dark-sky sanctuary platform, marrying authentic Saudi desert hospitality with cutting-edge sustainable stargazing.",copyright:"All Rights Reserved © Rawasi Luxury Retreats & Observatories 2026",vision2030:"Crafted in harmony with Saudi Vision 2030 promoting regenerative luxury tourism"}};class Tr{constructor(){B(this,"currentLang","ar");B(this,"listeners",[]);const t=localStorage.getItem("rawasi_lang");t&&(t==="ar"||t==="en")&&(this.currentLang=t),this.applyToDOM()}getLang(){return this.currentLang}isAr(){return this.currentLang==="ar"}setLang(t){this.currentLang!==t&&(this.currentLang=t,localStorage.setItem("rawasi_lang",t),this.applyToDOM(),this.notify())}toggleLang(){const t=this.currentLang==="ar"?"en":"ar";return this.setLang(t),t}t(t){return ji[this.currentLang][t]||ji.ar[t]||t}onLanguageChange(t){this.listeners.push(t)}notify(){for(const t of this.listeners)t(this.currentLang)}applyToDOM(){const t=this.currentLang==="ar";document.documentElement.lang=this.currentLang,document.documentElement.dir=t?"rtl":"ltr",document.body.classList.toggle("lang-ar",t),document.body.classList.toggle("lang-en",!t)}}const y=new Tr,lt=[{id:"alula-ashar",nameAr:"قباب وادي عِشار الفلكية - العلا",nameEn:"Ashar Valley Stargazing Domes - AlUla",regionAr:"العلا، منطقة المدينة المنورة",regionEn:"AlUla, Medina Province",terrain:"canyon",terrainAr:"أودية وأخاديد الحجر الرملي",terrainEn:"Sandstone Canyons",bortleScale:1,bortleDescAr:"ظلام فلكي حالك ونقي (فئة 1 على مقياس بورتل)",bortleDescEn:"Pristine Dark Sky (Bortle Class 1)",elevation:"720 م فوق سطح البحر",elevationEn:"720 m above sea level",gps:"26.6852° N, 37.9184° E",pricePerNight:3850,imageDay:"https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=1600&q=80",imageNight:"https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80",descriptionAr:"انغمس في أسطورة وادي عِشار بين جبال الحجر الرملي النحتية. صُممت قباب الرصد الجيوديسية الزجاجية بتقنية العزل الحراري الذكي لتمنحك رؤية بانورامية 360 درجة لنجوم مجرة درب التبانة وسديم الجبار مباشرة من سريرك الفاخر.",descriptionEn:"Immerse in the timeless wonder of Ashar Valley amid ancient sandstone monuments. Custom geodesic glass domes featuring smart climate control provide uninterrupted 360-degree vistas of the Milky Way and Orion Nebula directly from your king-size bed.",featuresAr:["قباب زجاجية بانورامية بطلاء ذكي مضاد للانعكاس","تلسكوب سيلسترون 8 بوصة محوسب مع فلاتر سديمية","جلسة سمر خاصة مع حطب الغضا والأرطى العطري","مسبح مياه ساخنة معلق بين التكوينات الصخرية","مرشد فلكي خاص وشاي وقهوة خولانية ملكية"],featuresEn:["360° Smart Anti-reflective Panoramic Glass Domes",'Computerized 8" Celestron Telescope with Nebula Filters',"Private Sand Firepit with Aromatic Ghada Wood","Private Heated Infinity Plunge Pool nestled in rocks","Private Astronomer & Royal Khawlani Saudi Coffee Service"],unitTypes:[{typeAr:"قبة فلكية جيوديسية ماستر",typeEn:"Master Celestial Geodesic Dome",capacity:"2 ضيوف",capacityEn:"2 Guests",sqm:85},{typeAr:"فيلا الرصد الصحراوية الملكية",typeEn:"Royal Observatory Desert Villa",capacity:"4 ضيوف",capacityEn:"4 Guests",sqm:160}],temperature:{dayC:29,nightC:12,windSpeedKmh:14,humidityPct:18},highlightConstellations:["orion","pleiades","cassiopeia"]},{id:"asir-peaks",nameAr:"أكواخ سحاب العرعر - السودة، عسير",nameEn:"Juniper Cloud Cliff Cabins - Al Souda, Asir",regionAr:"السودة، منطقة عسير",regionEn:"Al Souda, Asir Highlands",terrain:"mountain",terrainAr:"قمم جبلية غائمة وغابات عرعر",terrainEn:"Mountain Cloud Peaks & Junipers",bortleScale:2,bortleDescAr:"سماء جبلية نقية جداً فوق طبقة الغيوم (فئة 2)",bortleDescEn:"Pristine Mountain Sky Above Clouds (Bortle Class 2)",elevation:"3,015 م فوق سطح البحر",elevationEn:"3,015 m above sea level",gps:"18.2711° N, 42.3683° E",pricePerNight:2950,imageDay:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",imageNight:"https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80",descriptionAr:"على أعلى قمة في المملكة بارتفاع يتجاوز 3000 متر، تطفو أكواخ العرعر الزجاجية المعلقة على حافة الأجراف الأسطورية. استمتع ببحر الغيوم البيضاء نهاراً، وبسماء باردة صافية كالألماس تعلو الغيوم ليلاً في هدوء ملهم.",descriptionEn:"Perched upon Saudi Arabia's highest mountain ridge above 3,000 meters, these glass cliffside cabins hover over endless cloud oceans. Experience crisp alpine breeze by day and diamond-sharp celestial stargazing floating above the clouds by night.",featuresAr:["شرفات معلقة بزجاج عريض يطل على تهامة وبحر السحاب","مدفأة حطب عسيرية من حجر البازلت الطبيعي","مرصد بصري لمراقبة نسور عسير ومجرات السماء العميقة","جاكوزي خارجي دافئ على الحافة الجبلية","جلسة عسيرية بالنقش القط مع شاي جبلي بالحبق"],featuresEn:["Cantilevered Glass Observation Deck over Sea of Clouds","Natural Basalt Fireplace with Local Mountain Wood","High-Power Optics for Falconry & Deep Sky Galaxies","Heated Outdoor Cliffside Jacuzzi in Alpine Air","Authentic Asiri Qatt Al-Asiri Lounge with Herbal Mountain Teas"],unitTypes:[{typeAr:"كوخ الجرف المعلق البانورامي",typeEn:"Cantilevered Cliffside Glass Cabin",capacity:"2 ضيوف",capacityEn:"2 Guests",sqm:75},{typeAr:"جناح سحاب العرعر العائلي",typeEn:"Juniper Cloud Family Suite",capacity:"4 ضيوف",capacityEn:"4 Guests",sqm:140}],temperature:{dayC:20,nightC:7,windSpeedKmh:22,humidityPct:65},highlightConstellations:["ursa-major","cassiopeia","cygnus"]},{id:"tabuk-hisma",nameAr:"مضارب حِسمى الملكية - صحراء حِسمى، تبوك",nameEn:"Hisma Royal Pavilions - Hisma Desert, Tabuk",regionAr:"صحراء حِسمى والديسة، منطقة تبوك",regionEn:"Hisma Desert & Wadi Al Disah, Tabuk",terrain:"crimson",terrainAr:"رمال حمراء نارية وأقواس حجرية",terrainEn:"Crimson Sands & Wind Arches",bortleScale:1,bortleDescAr:"ظلام كوني مطلق (فئة 1 - أنقى سماء لرصد الشهب)",bortleDescEn:"Ultimate Cosmic Darkness (Bortle Class 1)",elevation:"980 م فوق سطح البحر",elevationEn:"980 m above sea level",gps:"28.3150° N, 35.8812° E",pricePerNight:3400,imageDay:"https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80",imageNight:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",descriptionAr:"بين الأقواس الصخرية الحمراء التي شكلتها رياح الدهور في صحراء حِسمى المهيبة، تمزج مضارب السدو الملكية بين عراقة التراث البدوي وأرقى معايير الرفاهية المعاصرة. وجهة عالمية لا تضاهى لمشاهدة زخات الشهب السنوية.",descriptionEn:"Amidst colossal crimson arches shaped by eons of desert winds, our Royal Sadu pavilions fuse legendary Bedouin hospitality with six-star boutique luxury. One of Earth's premier dark-sky preserves for observing annual meteor showers.",featuresAr:["خيام ملكية من السدو السعودي التراثي المنسوج يدوياً","رحلات سفاري كلاسيكية 4x4 لرصد النجوم وتصوير الديسة","مائدة شواء وحنيذ تحت النجوم مع عازف ربابة وعود","تلسكوب حراري ذكي بتقنية التتبع الإلكتروني للشهب","خيمة مساج وعناية بالأعشاب الصحراوية العطرية"],featuresEn:["Handcrafted Authentic Saudi Sadu Royal Pavilions","Vintage 4x4 Off-road Celestial Safari to Wadi Disah","Under-the-Stars Feast & Live Traditional Lute Melodies","Automated Meteor-Tracking Infrared Telescope","Desert Botanicals Wellness & Aromatherapy Tent"],unitTypes:[{typeAr:"سرادق السدو الملكي الفاخر",typeEn:"Royal Sadu Grand Pavilion",capacity:"2 ضيوف",capacityEn:"2 Guests",sqm:95},{typeAr:"مضرب حسمى الإمبراطوري",typeEn:"Imperial Hisma Encampment Suite",capacity:"6 ضيوف",capacityEn:"6 Guests",sqm:220}],temperature:{dayC:28,nightC:11,windSpeedKmh:16,humidityPct:15},highlightConstellations:["orion","ursa-major","pleiades"]},{id:"red-sea-dunes",nameAr:"فلل الكثبان والشاطئ العذراء - وجهة البحر الأحمر",nameEn:"Coastal Dune Villas - The Red Sea Destination",regionAr:"أرخبيل البحر الأحمر، تبوك",regionEn:"The Red Sea Archipelago, Tabuk",terrain:"coastal",terrainAr:"كثبان ذهبية ناعمة ومياه فيروزية",terrainEn:"Coastal Dunes & Turquoise Waters",bortleScale:2,bortleDescAr:"سماء ساحلية عذراء بنسمات بحرية منعشة (فئة 2)",bortleDescEn:"Pristine Marine Dark Sky (Bortle Class 2)",elevation:"15 م فوق سطح البحر",elevationEn:"15 m above sea level",gps:"25.5392° N, 36.9841° E",pricePerNight:4200,imageDay:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",imageNight:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",descriptionAr:"حيث تتعانق الرمال الذهبية النقية مع مياه البحر الأحمر الشفافة. فلل بيئية مستدامة بالكامل تطفو بتناغم فوق الكثبان الساحلية، لتستيقظ على أمواج البحر الهادئة وتنام على انعكاس النجوم الساطعة على سطح الماء.",descriptionEn:"Where immaculate golden dunes meet crystalline coral lagoons. Fully sustainable bioclimatic villas floating lightly over the shoreline, serenaded by gentle waves and illuminated by constellations reflecting upon the tranquil sea.",featuresAr:["تصميم معماري بيئي من أخشاب مستدامة وطاقة شمسية 100%","شرفة استلقاء شبكية معلقة فوق رمال الشاطئ","رحلة يخت ليلي شراعي لرصد النجوم من قلب عرض البحر","عشاء مأكولات بحرية طازجة معدة على الفحم والملح البحري","جلسة تأمل فلكي وعلاج صوتي بترددات البحر الهادئة"],featuresEn:["100% Solar-Powered Sustainable Eco-Dune Architecture","Over-Sand Catamaran Hammock Netting for Star Viewing","Bioluminescent Night Catamaran Stargazing Voyage","Coastal Catch Woodfire Dinner on Private Sandbank","Sound Bath Meditation & Ocean Wave Stargazing Therapy"],unitTypes:[{typeAr:"فيلا الكثبان الساحلية لشخصين",typeEn:"Oceanfront Eco-Dune Villa",capacity:"2 ضيوف",capacityEn:"2 Guests",sqm:110},{typeAr:"فيلا المرجان الملكية الخاصة",typeEn:"Royal Lagoon Coral Villa",capacity:"4 ضيوف",capacityEn:"4 Guests",sqm:190}],temperature:{dayC:31,nightC:19,windSpeedKmh:12,humidityPct:45},highlightConstellations:["cygnus","cassiopeia","orion"]}],Te=[{id:"orion",nameAr:"كوكبة الجَبّار (الجوزاء عند العرب)",nameEn:"Orion the Hunter",arabicTraditionAr:'كانت العرب تطلق عليها "الجوزاء" وتعتبرها ملكة سماء الشتاء وعلامة اشتداد البرد وموسم المطر وسهيل.',arabicTraditionEn:'Known in ancient Arabic as "Al-Jawzaa", Queen of the Winter Skies, heralding cold desert nights and rains.',seasonAr:"الشتاء والربيع (نوفمبر - إبريل)",seasonEn:"Winter & Spring (Nov - Apr)",loreAr:"أشهر وأوضح كوكبة في سماء الصحراء السعودية. يلمع فيها حزام الجبار المكون من 3 نجوم مستقيمة (النطاق، النظام، المنطقة) وسديم الجبار العظيم M42 الذي يمكن رؤيته بالعين المجردة من وادي عشار وصحراء حسمى.",loreEn:"The most iconic constellation in Saudi desert skies. Features the famous 3-star Belt (Alnitak, Alnilam, Mintaka) and the great M42 Orion Nebula visible with naked eye in pristine Bortle 1 sites.",bestViewingRetreatId:"alula-ashar",stars:[{id:"betelgeuse",nameAr:"إبط الجوزاء (منكب الجوزاء)",nameEn:"Betelgeuse",x:30,y:25,magnitude:.5,color:"#f87171"},{id:"bellatrix",nameAr:"الناجذ (بلاتريكس)",nameEn:"Bellatrix",x:70,y:28,magnitude:1.6,color:"#93c5fd"},{id:"alnitak",nameAr:"النطاق",nameEn:"Alnitak",x:42,y:52,magnitude:1.7,color:"#bae6fd"},{id:"alnilam",nameAr:"النظام",nameEn:"Alnilam",x:50,y:50,magnitude:1.6,color:"#bae6fd"},{id:"mintaka",nameAr:"المنطقة",nameEn:"Mintaka",x:58,y:48,magnitude:2.2,color:"#bae6fd"},{id:"saiph",nameAr:"سيف الجبار",nameEn:"Saiph",x:34,y:76,magnitude:2,color:"#93c5fd"},{id:"rigel",nameAr:"رِجْل الجوزاء (ريجل)",nameEn:"Rigel",x:68,y:74,magnitude:.1,color:"#67e8f9"},{id:"meissa",nameAr:"الهقعة (مَيْسان)",nameEn:"Meissa",x:50,y:15,magnitude:3.3,color:"#e0f2fe"}],edges:[[7,0],[7,1],[0,2],[1,4],[2,3],[3,4],[2,5],[4,6]]},{id:"ursa-major",nameAr:"الدب الأكبر (بنات نَعْش الكبرى)",nameEn:"Ursa Major (The Great Bear)",arabicTraditionAr:'سمّاها العرب "بنات نعش" وجعلوا النعش مربع النجوم الأربعة، والتابعات خلفه هن بناته الماشيات في رثائه.',arabicTraditionEn:"Named Banat Na'sh (Daughters of the Bier) in ancient Arabic star lore, used for centuries to find True North.",seasonAr:"طوال العام (أوج الرؤية في الربيع والصيف)",seasonEn:"Year-Round (Peaks in Spring/Summer)",loreAr:"تشتهر بمغرفة الدب الأكبر الدائرية حول القطب الشمالي. يشير النجمان (الدبة والمراق) مباشرة إلى النجم القطبي (الجدي) الذي يوجه الرحالة والمسافرين في قلب صحراء الجزيرة العربية.",loreEn:"Features the northern Big Dipper asterism. The pointer stars Merak and Dubhe guide straight to Polaris (The North Star), guiding caravans across the Arabian desert for millennia.",bestViewingRetreatId:"asir-peaks",stars:[{id:"dubhe",nameAr:"الدُبّة (ظهر الدب)",nameEn:"Dubhe",x:75,y:28,magnitude:1.8,color:"#fef08a"},{id:"merak",nameAr:"المَرَاق (خاصرة الدب)",nameEn:"Merak",x:74,y:48,magnitude:2.3,color:"#bae6fd"},{id:"phecda",nameAr:"الفَخِذ",nameEn:"Phecda",x:55,y:52,magnitude:2.4,color:"#bae6fd"},{id:"megrez",nameAr:"المَغْرِز (مبتدأ الذيل)",nameEn:"Megrez",x:56,y:32,magnitude:3.3,color:"#e0f2fe"},{id:"alioth",nameAr:"الأَلْيَة (الجون)",nameEn:"Alioth",x:42,y:38,magnitude:1.7,color:"#e0f2fe"},{id:"mizar",nameAr:"المِئْزَر (مع القائد السها)",nameEn:"Mizar",x:28,y:46,magnitude:2.2,color:"#bae6fd"},{id:"alkaid",nameAr:"القائد",nameEn:"Alkaid",x:14,y:56,magnitude:1.8,color:"#93c5fd"}],edges:[[0,1],[1,2],[2,3],[3,0],[3,4],[4,5],[5,6]]},{id:"cassiopeia",nameAr:"ذات الكرسي (الكف الخضيب)",nameEn:"Cassiopeia the Queen",arabicTraditionAr:'سمّاها العرب القدماء "الكف الخضيب" وشبهوها بكف ملطخة بالحناء مبسوطة في نهر المجرة.',arabicTraditionEn:'Referred to by ancient Arabs as "The Henna-Stained Hand" stretched out across the river of the Milky Way.',seasonAr:"الخريف والشتاء (سبتمبر - فبراير)",seasonEn:"Autumn & Winter (Sep - Feb)",loreAr:"كوكبة ملكية تأخذ شكل حرف W اللامع في السماء الشمالية، وتقع مباشرة داخل الذراع الكثيف لمجرة درب التبانة، مما يجعل خلفيتها مرصعة بآلاف النجوم والعناقيد المفتوحة.",loreEn:"A distinctive royal W-shaped constellation in the northern sky, lying directly in the dense starfields of the Milky Way, rich with deep-sky open clusters and nebulae.",bestViewingRetreatId:"tabuk-hisma",stars:[{id:"caph",nameAr:"الكَف (الكف الخضيب)",nameEn:"Caph",x:18,y:46,magnitude:2.2,color:"#fef08a"},{id:"schedar",nameAr:"الصدر",nameEn:"Schedar",x:36,y:64,magnitude:2.2,color:"#fed7aa"},{id:"gamma-cas",nameAr:"نافي (سنام الناقة)",nameEn:"Navi",x:50,y:32,magnitude:2.1,color:"#bae6fd"},{id:"ruchbah",nameAr:"الركبة",nameEn:"Ruchbah",x:68,y:60,magnitude:2.6,color:"#e0f2fe"},{id:"segin",nameAr:"سيجين (المعصم)",nameEn:"Segin",x:84,y:38,magnitude:3.3,color:"#93c5fd"}],edges:[[0,1],[1,2],[2,3],[3,4]]},{id:"pleiades",nameAr:"عنقود الثُّرَيّا (الشقيقات السبع)",nameEn:"Pleiades (The Seven Sisters)",arabicTraditionAr:'أبرز منازل القمر عند العرب: "إذا طلع النجم غدية، ابتغى الراعي كفية". علامة مواسم المطر والخصب.',arabicTraditionEn:"The supreme star cluster in Arab heritage; its dawn rising signaled seasons, rains, and pasture fertility.",seasonAr:"الخريف والشتاء (أكتوبر - مارس)",seasonEn:"Autumn & Winter (Oct - Mar)",loreAr:"عنقود نجمي مفتوح أزرق ساطع في برج الثور، يضم مئات النجوم الفتية محاطة بسديم انعكاسي أزرق غازي فائق الجمال عند النظر إليه عبر تلسكوبات منتجعاتنا الفلكية.",loreEn:"A radiant open star cluster glowing in icy blue brilliance. Contains hundreds of young stars enveloped in reflection nebulosity, breathtaking through our resort telescopes.",bestViewingRetreatId:"alula-ashar",stars:[{id:"alcyone",nameAr:"الطرف (العيوقي)",nameEn:"Alcyone",x:50,y:50,magnitude:2.8,color:"#67e8f9"},{id:"atlas",nameAr:"أطلس",nameEn:"Atlas",x:68,y:56,magnitude:3.6,color:"#93c5fd"},{id:"electra",nameAr:"إلكترا",nameEn:"Electra",x:30,y:44,magnitude:3.7,color:"#93c5fd"},{id:"maia",nameAr:"مايا",nameEn:"Maia",x:42,y:34,magnitude:3.8,color:"#67e8f9"},{id:"merope",nameAr:"ميروبي",nameEn:"Merope",x:44,y:64,magnitude:4.1,color:"#67e8f9"},{id:"taygeta",nameAr:"تايجيتا",nameEn:"Taygeta",x:28,y:30,magnitude:4.3,color:"#93c5fd"},{id:"pleione",nameAr:"بليوني",nameEn:"Pleione",x:72,y:52,magnitude:5,color:"#bae6fd"}],edges:[[5,2],[2,3],[3,0],[0,4],[0,1],[1,6]]}];class Ar{constructor(t){B(this,"canvas");B(this,"ctx");B(this,"stars",[]);B(this,"meteors",[]);B(this,"embers",[]);B(this,"animFrameId",null);B(this,"activeConstellationId","orion");B(this,"hoveredStar",null);B(this,"bortleScale",1);B(this,"mouseX",0);B(this,"mouseY",0);B(this,"targetParallaxX",0);B(this,"targetParallaxY",0);B(this,"currentParallaxX",0);B(this,"currentParallaxY",0);B(this,"onStarSelectCallback",null);B(this,"isArabic",!0);this.canvas=t;const e=t.getContext("2d");if(!e)throw new Error("2D context not available");this.ctx=e,this.handleResize=this.handleResize.bind(this),this.handleMouseMove=this.handleMouseMove.bind(this),this.handleClick=this.handleClick.bind(this),this.render=this.render.bind(this),this.init()}init(){this.handleResize(),this.initStars(450),window.addEventListener("resize",this.handleResize),this.canvas.addEventListener("mousemove",this.handleMouseMove),this.canvas.addEventListener("click",this.handleClick),this.start()}setLanguage(t){this.isArabic=t}setBortleScale(t){this.bortleScale=Math.max(1,Math.min(4,t))}setActiveConstellation(t){this.activeConstellationId=t}onStarSelect(t){this.onStarSelectCallback=t}initStars(t){this.stars=[];const e=["#ffffff","#f8fafc","#bae6fd","#7dd3fc","#fef08a","#fed7aa","#fbcfe8"];for(let i=0;i<t;i++)this.stars.push({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height,z:Math.random()*2+.5,radius:Math.random()<.85?Math.random()*1.3+.4:Math.random()*2.2+1.2,baseAlpha:Math.random()*.7+.3,twinkleSpeed:Math.random()*.04+.015,phase:Math.random()*Math.PI*2,color:e[Math.floor(Math.random()*e.length)]})}handleResize(){const t=this.canvas.getBoundingClientRect(),e=Math.min(window.devicePixelRatio||1,2);this.canvas.width=t.width*e,this.canvas.height=t.height*e,this.ctx.scale(e,e)}handleMouseMove(t){const e=this.canvas.getBoundingClientRect();this.mouseX=t.clientX-e.left,this.mouseY=t.clientY-e.top;const i=(this.mouseX/e.width-.5)*2,n=(this.mouseY/e.height-.5)*2;this.targetParallaxX=i*18,this.targetParallaxY=n*18;const r=Te.find(s=>s.id===this.activeConstellationId);let a=null;if(r)for(const s of r.stars){const o=this.getConstellationStarCoords(s,e.width,e.height);if(Math.hypot(this.mouseX-o.x,this.mouseY-o.y)<18){a=s;break}}this.hoveredStar=a,this.canvas.style.cursor=a?"pointer":"default"}handleClick(){if(this.hoveredStar&&this.onStarSelectCallback){const t=Te.find(e=>e.id===this.activeConstellationId);t&&this.onStarSelectCallback(this.hoveredStar,t)}}spawnMeteor(){if(Math.random()>(this.bortleScale===1?.08:.04)||this.meteors.length>5)return;const t=this.canvas.getBoundingClientRect(),e=Math.random()*t.width,i=Math.random()*(t.height*.4),n=Math.PI/4+(Math.random()-.5)*.4,r=Math.random()*10+14;this.meteors.push({x:e,y:i,dx:Math.cos(n)*r,dy:Math.sin(n)*r,len:Math.random()*90+80,speed:r,alpha:1,life:1})}updateAndDrawEmbers(t,e){if(this.embers.length<35&&Math.random()<.3){const i=["#f59e0b","#d97706","#ea580c","#fef08a"];this.embers.push({x:Math.random()*t,y:e+10,vx:(Math.random()-.5)*.6,vy:-(Math.random()*1.5+.8),radius:Math.random()*1.8+.8,alpha:Math.random()*.7+.3,color:i[Math.floor(Math.random()*i.length)],sway:Math.random()*Math.PI*2,swaySpeed:Math.random()*.03+.01})}for(let i=this.embers.length-1;i>=0;i--){const n=this.embers[i];if(n.sway+=n.swaySpeed,n.x+=n.vx+Math.sin(n.sway)*.8,n.y+=n.vy,n.alpha-=.0025,n.y<-20||n.alpha<=0){this.embers.splice(i,1);continue}this.ctx.save(),this.ctx.globalAlpha=Math.max(0,n.alpha),this.ctx.fillStyle=n.color,this.ctx.shadowBlur=8,this.ctx.shadowColor=n.color,this.ctx.beginPath(),this.ctx.arc(n.x,n.y,n.radius,0,Math.PI*2),this.ctx.fill(),this.ctx.restore()}}getConstellationStarCoords(t,e,i){const n=e*.15,r=i*.15,a=e-n*2,s=i-r*2,o=n+t.x/100*a,c=r+t.y/100*s;return{x:o+this.currentParallaxX*.5,y:c+this.currentParallaxY*.5}}render(){const t=this.canvas.getBoundingClientRect(),e=t.width,i=t.height;this.currentParallaxX+=(this.targetParallaxX-this.currentParallaxX)*.05,this.currentParallaxY+=(this.targetParallaxY-this.currentParallaxY)*.05,this.ctx.clearRect(0,0,e,i),this.drawDeepSkyGlow(e,i),this.drawBackgroundStars(e,i),this.drawActiveConstellation(e,i),this.spawnMeteor(),this.drawMeteors(),this.updateAndDrawEmbers(e,i),this.bortleScale>1&&this.drawBortleLightPollution(e,i),this.animFrameId=requestAnimationFrame(this.render)}drawDeepSkyGlow(t,e){if(this.bortleScale>2)return;const i=this.ctx.createLinearGradient(0,e*.8,t,0),n=this.bortleScale===1?.12:.05;i.addColorStop(0,"rgba(56, 189, 248, 0)"),i.addColorStop(.3,`rgba(56, 189, 248, ${n*.8})`),i.addColorStop(.5,`rgba(244, 114, 182, ${n*.5})`),i.addColorStop(.7,`rgba(147, 197, 253, ${n})`),i.addColorStop(1,"rgba(56, 189, 248, 0)"),this.ctx.fillStyle=i,this.ctx.fillRect(0,0,t,e)}drawBackgroundStars(t,e){const i=performance.now()*.001,n=this.bortleScale===1?3:this.bortleScale===2?2.2:1.4;for(const r of this.stars){if(r.z>n)continue;const a=Math.sin(i*r.twinkleSpeed*10+r.phase),s=Math.max(.1,r.baseAlpha+a*.25),o=r.x+this.currentParallaxX*r.z*.3,c=r.y+this.currentParallaxY*r.z*.3;this.ctx.beginPath(),this.ctx.arc(o,c,r.radius,0,Math.PI*2),this.ctx.fillStyle=r.color,this.ctx.globalAlpha=s,this.ctx.fill()}this.ctx.globalAlpha=1}drawActiveConstellation(t,e){var r;const i=Te.find(a=>a.id===this.activeConstellationId);if(!i)return;const n=i.stars.map(a=>this.getConstellationStarCoords(a,t,e));this.ctx.save(),this.ctx.lineWidth=1.6,this.ctx.strokeStyle="rgba(56, 189, 248, 0.45)",this.ctx.setLineDash([4,4]);for(const[a,s]of i.edges){const o=n[a],c=n[s];!o||!c||(this.ctx.beginPath(),this.ctx.moveTo(o.x,o.y),this.ctx.lineTo(c.x,c.y),this.ctx.stroke())}this.ctx.restore();for(let a=0;a<i.stars.length;a++){const s=i.stars[a],o=n[a],c=((r=this.hoveredStar)==null?void 0:r.id)===s.id,d=this.ctx.createRadialGradient(o.x,o.y,2,o.x,o.y,c?26:14);d.addColorStop(0,s.color||"#38bdf8"),d.addColorStop(1,"rgba(56, 189, 248, 0)"),this.ctx.fillStyle=d,this.ctx.beginPath(),this.ctx.arc(o.x,o.y,c?26:14,0,Math.PI*2),this.ctx.fill(),this.ctx.beginPath(),this.ctx.arc(o.x,o.y,c?5.5:3.5,0,Math.PI*2),this.ctx.fillStyle="#ffffff",this.ctx.fill(),this.ctx.font=c?"bold 13px Tajawal, Cairo, sans-serif":"11px Tajawal, Cairo, sans-serif",this.ctx.fillStyle=c?"#fef08a":"#cbd5e1",this.ctx.textAlign="center";const u=this.isArabic?s.nameAr:s.nameEn;this.ctx.fillText(u,o.x,o.y+(c?20:16))}}drawMeteors(){for(let t=this.meteors.length-1;t>=0;t--){const e=this.meteors[t];if(e.x+=e.dx,e.y+=e.dy,e.life-=.025,e.life<=0){this.meteors.splice(t,1);continue}const i=this.ctx.createLinearGradient(e.x,e.y,e.x-e.dx/e.speed*e.len,e.y-e.dy/e.speed*e.len);i.addColorStop(0,`rgba(255, 255, 255, ${e.life})`),i.addColorStop(.3,`rgba(56, 189, 248, ${e.life*.8})`),i.addColorStop(1,"rgba(56, 189, 248, 0)"),this.ctx.save(),this.ctx.lineWidth=2.2,this.ctx.strokeStyle=i,this.ctx.beginPath(),this.ctx.moveTo(e.x,e.y),this.ctx.lineTo(e.x-e.dx/e.speed*e.len,e.y-e.dy/e.speed*e.len),this.ctx.stroke(),this.ctx.restore()}}drawBortleLightPollution(t,e){const i=this.ctx.createLinearGradient(0,e*.6,0,e),n=(this.bortleScale-1)*.12;i.addColorStop(0,"rgba(251, 191, 36, 0)"),i.addColorStop(1,`rgba(251, 146, 60, ${n})`),this.ctx.fillStyle=i,this.ctx.fillRect(0,0,t,e)}start(){this.animFrameId||this.render()}stop(){this.animFrameId&&(cancelAnimationFrame(this.animFrameId),this.animFrameId=null)}destroy(){this.stop(),window.removeEventListener("resize",this.handleResize),this.canvas.removeEventListener("mousemove",this.handleMouseMove),this.canvas.removeEventListener("click",this.handleClick)}}class Cr{constructor(){B(this,"ctx",null);B(this,"isPlaying",!1);B(this,"masterGain",null);B(this,"campfireGain",null);B(this,"windGain",null);B(this,"fireCrackleInterval",null);B(this,"windNode",null);B(this,"mode","both")}initContext(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t}this.ctx.state==="suspended"&&this.ctx.resume()}async toggle(){return this.isPlaying?(this.stop(),!1):(await this.start(),!0)}async start(){this.initContext(),this.ctx&&(this.isPlaying||(this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.45,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.campfireGain=this.ctx.createGain(),this.campfireGain.gain.setValueAtTime(this.mode==="wind"?0:.7,this.ctx.currentTime),this.campfireGain.connect(this.masterGain),this.windGain=this.ctx.createGain(),this.windGain.gain.setValueAtTime(this.mode==="fire"?0:.35,this.ctx.currentTime),this.windGain.connect(this.masterGain),this.startWindSynth(),this.startCampfireSynth(),this.isPlaying=!0))}stop(){if(!(!this.isPlaying||!this.ctx)){if(this.fireCrackleInterval!==null&&(window.clearInterval(this.fireCrackleInterval),this.fireCrackleInterval=null),this.windNode){try{this.windNode.stop()}catch{}this.windNode=null}this.masterGain&&(this.masterGain.gain.setTargetAtTime(0,this.ctx.currentTime,.08),setTimeout(()=>{var t;try{(t=this.masterGain)==null||t.disconnect()}catch{}},200)),this.isPlaying=!1}}setVolume(t){if(this.masterGain&&this.ctx){const e=Math.max(0,Math.min(1,t));this.masterGain.gain.setTargetAtTime(e,this.ctx.currentTime,.05)}}setMode(t){if(this.mode=t,!this.ctx)return;const e=this.ctx.currentTime;this.campfireGain&&this.campfireGain.gain.setTargetAtTime(t==="wind"?0:.7,e,.1),this.windGain&&this.windGain.gain.setTargetAtTime(t==="fire"?0:.35,e,.1)}getIsPlaying(){return this.isPlaying}startWindSynth(){if(!this.ctx||!this.windGain)return;const t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),i=e.getChannelData(0);let n=0,r=0,a=0,s=0,o=0,c=0,d=0;for(let h=0;h<t;h++){const g=Math.random()*2-1;n=.99886*n+g*.0555179,r=.99332*r+g*.0750759,a=.969*a+g*.153852,s=.8665*s+g*.3104856,o=.55*o+g*.5329522,c=-.7616*c-g*.016898,i[h]=(n+r+a+s+o+c+d+g*.5362)*.08,d=g*.115926}const u=this.ctx.createBufferSource();u.buffer=e,u.loop=!0;const f=this.ctx.createBiquadFilter();f.type="lowpass",f.frequency.setValueAtTime(320,this.ctx.currentTime),f.Q.setValueAtTime(2.5,this.ctx.currentTime);const m=this.ctx.createOscillator();m.frequency.setValueAtTime(.18,this.ctx.currentTime),this.ctx.createGain().gain.setValueAtTime(140,this.ctx.currentTime),m.connect(f.frequency),u.connect(f),f.connect(this.windGain),u.start(),m.start(),this.windNode=u}startCampfireSynth(){if(!this.ctx||!this.campfireGain)return;const t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),i=e.getChannelData(0);for(let s=0;s<t;s++)i[s]=(Math.random()*2-1)*.05;const n=this.ctx.createBufferSource();n.buffer=e,n.loop=!0;const r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(650,this.ctx.currentTime),r.Q.setValueAtTime(1.2,this.ctx.currentTime),n.connect(r),r.connect(this.campfireGain),n.start();const a=()=>{if(!this.isPlaying||!this.ctx||!this.campfireGain)return;const s=Math.random()<.22,o=this.ctx.currentTime,c=this.ctx.createOscillator(),d=this.ctx.createGain(),u=this.ctx.createBiquadFilter();u.type="highpass",u.frequency.value=s?800:2200,c.type=s?"triangle":"sine",c.frequency.setValueAtTime(s?140:850+Math.random()*600,o),c.frequency.exponentialRampToValueAtTime(40,o+(s?.08:.02)),d.gain.setValueAtTime(s?.6:.25,o),d.gain.exponentialRampToValueAtTime(.001,o+(s?.09:.025)),c.connect(u),u.connect(d),d.connect(this.campfireGain),c.start(o),c.stop(o+(s?.1:.03))};this.fireCrackleInterval=window.setInterval(()=>{Math.random()>.3&&a()},120)}}const kr=new Cr,Ge=[{id:"telescope",nameAr:'تلسكوب سيلسترون المحوسب الاحترافي (8")',nameEn:'Celestron 8" Computerized Telescope',descAr:"تتبع آلي للأجرام السماوية مع عدسات تكبير رقمية للتصوير بالهاتف.",descEn:"Motorized celestial tracking with digital smartphone imaging adapters.",priceSAR:450,perNight:!0,icon:"🔭"},{id:"firepit",nameAr:"جلسة سمر مع حطب الغضا والأرطى الملكي",nameEn:"Private Sand Firepit & Ghada Wood",descAr:"إشعال النار الصحراوية العطرية مع دلّة القهوة الخولانية والتمور الفاخرة.",descEn:"Aromatic desert firewood ritual with piping hot Saudi coffee and dates.",priceSAR:350,perNight:!0,icon:"🔥"},{id:"jacuzzi",nameAr:"جاكوزي دافئ خاص تحت النجوم",nameEn:"Heated Cliffside Starlight Jacuzzi",descAr:"استرخاء في مياه دافئة مع إطلالة مفتوحة على أذرع مجرة درب التبانة.",descEn:"Hydrotherapy warm waters under the crystal-clear Milky Way expanse.",priceSAR:550,perNight:!0,icon:"✨"},{id:"astronomer",nameAr:"مرشد فلكي وباحث تراثي خاص",nameEn:"Private Stargazing Astronomer Guide",descAr:"جلسة رصد خاصة مدتها ساعتان للتعرف على منازل القمر وأسماء النجوم عند العرب.",descEn:"2-hour private deep sky exploration decoding ancient Arabian star lore.",priceSAR:800,perNight:!1,icon:"🧭"},{id:"feast",nameAr:"مائدة عشاء سعودية أصيلة وفطور صحراوي",nameEn:"Authentic Saudi Royal Feast & Breakfast",descAr:"حنيذ ومندي مدفون على الجمر، كليجا حائل، فواكه طازجة، وفطور شروق الشمس.",descEn:"Underground coal-cooked Haneeth feast, Hail kleicha, & sunrise breakfast.",priceSAR:650,perNight:!0,icon:"🍽️"}];class di{static calculateNights(t,e){try{const i=new Date(t),r=new Date(e).getTime()-i.getTime(),a=Math.ceil(r/(1e3*60*60*24));return Math.max(1,isNaN(a)?1:a)}catch{return 1}}static generateBookingReference(t){const e=t.split("-")[0].toUpperCase(),i=Math.floor(1e3+Math.random()*9e3);return`RAWASI-${e}-${i}`}static computePrice(t,e){const i=this.calculateNights(e.checkIn,e.checkOut);let n=1,r="قبة فلكية جيوديسية زجاجية",a="Panoramic Geodesic Glass Dome";e.unitType==="sadu"?(n=1.18,r="خيمة السدو الملكية الفاخرة",a="Royal Handwoven Sadu Pavilion"):e.unitType==="airstream"&&(n=.92,r="جناح إيرستريم الفضي الكلاسيكي",a="Luxury Silver Airstream Suite");const s=Math.round(t*n),o=s*i;let c=0;const d=[];for(const h of e.selectedAmenities){const g=Ge.find(b=>b.id===h);if(g){const b=g.perNight?g.priceSAR*i:g.priceSAR;c+=b,d.push({id:g.id,titleAr:g.nameAr,titleEn:g.nameEn,cost:b})}}const u=o+c,f=Math.round(u*.15),m=u+f,_=this.generateBookingReference(e.retreatId);return{nights:i,basePricePerNight:s,unitMultiplier:n,unitTypeTitleAr:r,unitTypeTitleEn:a,subtotalNights:o,amenitiesTotal:c,amenitiesDetails:d,subtotalBeforeTax:u,vat15:f,totalSAR:m,bookingRef:_}}}function Er(){return y.isAr(),`
    <header class="hero-section" id="hero">
      <div class="hero-glow-aurora"></div>
      
      <div class="container hero-container">
        <div class="hero-badge">
          <span class="pulsing-dot"></span>
          <span>${y.t("heroBadge")}</span>
        </div>

        <h1 class="hero-title">
          <span class="gradient-text-gold">${y.t("heroTitlePart1")}</span>
          <br>
          <span class="hero-title-light">${y.t("heroTitlePart2")}</span>
        </h1>

        <p class="hero-subtitle">
          ${y.t("heroSubtitle")}
        </p>

        <div class="hero-cta-group">
          <a href="#observatory" class="btn btn-primary btn-glow">
            <span>${y.t("heroCtaExplore")}</span>
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
          </a>
          <a href="#configurator" class="btn btn-glass">
            <span>${y.t("heroCtaCustom")}</span>
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        <div class="hero-stats-grid">
          <div class="stat-card glass-panel tilt-card">
            <div class="stat-icon">🌌</div>
            <div class="stat-value gradient-text-gold" data-counter="1.0" data-suffix=" Bortle">${y.t("heroStatBortle")}</div>
            <div class="stat-desc">${y.t("heroStatBortleDesc")}</div>
          </div>
          <div class="stat-card glass-panel tilt-card">
            <div class="stat-icon">⛰️</div>
            <div class="stat-value gradient-text-gold" data-counter="3015" data-suffix="m">${y.t("heroStatAlt")}</div>
            <div class="stat-desc">${y.t("heroStatAltDesc")}</div>
          </div>
          <div class="stat-card glass-panel tilt-card">
            <div class="stat-icon">📜</div>
            <div class="stat-value gradient-text-gold" data-counter="100" data-suffix="%">${y.t("heroStatHeritage")}</div>
            <div class="stat-desc">${y.t("heroStatHeritageDesc")}</div>
          </div>
        </div>
      </div>
    </header>
  `}class We{static getMoonPhase(t=new Date){const e=new Date("2024-01-11T11:57:00Z").getTime(),i=29.53058867*24*60*60*1e3,r=((t.getTime()-e)%i+i)%i/i,a=Math.round((1-Math.cos(r*2*Math.PI))/2*100);let s="",o="",c="",d=10,u="",f="";return r<.03||r>.97?(s="مُحَاق (ولادة الهلال الجديد)",o="New Moon",d=10,u="استثنائي 10/10 (سماء حالكة تماماً لرصد المجرات السحيقة)",f="Exceptional 10/10 (Pitch black skies for deep sky astrophotography)",c="🌑"):r<.22?(s="هلال متزايد (هلال أول)",o="Waxing Crescent",d=9,u="ممتاز جداً 9/10 (إضاءة قمرية ضعيفة لا تحجب النجوم)",f="Superb 9/10 (Minimal moonlight, superb milky way contrast)",c="🌒"):r<.28?(s="تربيع أول",o="First Quarter",d=7,u="جيد 7/10 (تغرب إضاءة القمر بعد منتصف الليل)",f="Good 7/10 (Moon sets after midnight for dark early hours)",c="🌓"):r<.47?(s="أحدب متزايد",o="Waxing Gibbous",d=5,u="متوسط 5/10 (فرصة ممتازة لتصوير تضاريس القمر نفسه)",f="Moderate 5/10 (Great for lunar crater photography)",c="🌔"):r<.53?(s="بدر مكتمل",o="Full Moon",d=4,u="ليلة البدر 4/10 (إضاءة قمرية ساحرة للكثبان وتصوير تضاريس القمر)",f="Full Moon 4/10 (Mesmerizing dune landscape illumination)",c="🌕"):r<.72?(s="أحدب متناقص",o="Waning Gibbous",d=6,u="متوسط 6/10 (السماء داكنة قبل شروق القمر متأخراً)",f="Moderate 6/10 (Dark skies in early night hours)",c="🌖"):r<.78?(s="تربيع أخير",o="Last Quarter",d=7,u="جيد 7/10 (سماء النصف الأول من الليل حالكة)",f="Good 7/10 (First half of the night is pitch black)",c="🌗"):(s="هلال متناقص (هلال أخير)",o="Waning Crescent",d=9,u="ممتاز جداً 9/10 (مثالي لرصد الشهب والفجر الصادق)",f="Superb 9/10 (Ideal for meteor tracking before dawn)",c="🌘"),{phaseNameAr:s,phaseNameEn:o,illuminationPct:a,isWaxing:r<.5,astrophotographyScore:d,astrophotographyRatingAr:u,astrophotographyRatingEn:f,iconSvg:c}}static getVisiblePlanets(){return[{nameAr:"كوكب المشتري (سيد الكواكب)",nameEn:"Jupiter & 4 Galilean Moons",symbol:"♃",magnitude:-2.4,bestTimeAr:"من الساعة 8:30 م حتى الفجر",bestTimeEn:"From 8:30 PM until dawn",visibleTelescope:"أحزمة الغيوم العاصفة، البقعة الحمراء العظيمة، وأقماره الأربعة (غاليليو)",visibleTelescopeEn:"Cloud belts, Great Red Spot, & 4 Galilean Moons",status:"optimal"},{nameAr:"كوكب زحل (جوهرة الحلقات)",nameEn:"Saturn & Golden Rings",symbol:"♄",magnitude:.6,bestTimeAr:"من الغروب حتى الساعة 11:30 م",bestTimeEn:"From sunset until 11:30 PM",visibleTelescope:"حلقات زحل الذهبية الباهرة مع فاصل كاسيني وقمره الضخم تيتان",visibleTelescopeEn:"Iconic golden rings with Cassini Division & moon Titan",status:"optimal"},{nameAr:"كوكب الزهرة (نجمة الصباح / المساء)",nameEn:"Venus (Evening Star)",symbol:"♀",magnitude:-4.1,bestTimeAr:"الشفق الغروبي مباشرة (أول جرم يلمع بعد الشمس)",bestTimeEn:"Immediately at dusk twilight (brightest beacon)",visibleTelescope:"أطوار الكوكب الهلالية والطبقة السحابية الفائقة العاكسة",visibleTelescopeEn:"Crescent phase changes and dense reflective cloud decks",status:"moderate"}]}static calculateWindChill(t,e){if(t>15||e<5)return t;const i=13.12+.6215*t-11.37*Math.pow(e,.16)+.3965*t*Math.pow(e,.16);return Math.round(i)}static getPackingList(t){const e=[{id:"farwa-jacket",titleAr:"الفروة الصحراوية أو معطف دافئ ثقيل",titleEn:"Traditional Desert Farwa or Heavy Winter Coat",descAr:"تنخفض حرارة الصحراء والمرتفعات ليلاً بمقدار 15 إلى 18 درجة مقارنة بالنهار.",descEn:"Desert temperatures plunge 15-18°C as soon as dusk arrives.",essential:!0,category:"clothing"},{id:"red-flashlight",titleAr:"كشاف بإضاءة حمراء لحفظ تكيف العين للظلام",titleEn:"Red-Light Headlamp for Night Vision Retention",descAr:"الإضاءة الحمراء تحافظ على حساسية بؤبؤ العين لرصد سدم النجوم الخافتة.",descEn:"Red wavelengths preserve Rhodopsin night vision pigments for stargazing.",essential:!0,category:"astronomy"},{id:"desert-boots",titleAr:"أحذية مشي صحراوية مقاومة للرمال",titleEn:"High-Ankle Sand-Proof Trail Boots",descAr:"مناسبة للمشي على الكثبان والتشكيلات الصخرية أثناء جولات الرصد.",descEn:"Crucial for navigating soft dunes and rugged sandstone canyon paths.",essential:!0,category:"clothing"},{id:"camera-tripod",titleAr:"حامل كاميرا ثلاثي صلب (Tripod) للتصوير الفلكي",titleEn:"Heavy Duty Tripod for Astrophotography",descAr:"لالتقاط صور تعريض طويل (Long Exposure) لمجرة درب التبانة والشهب.",descEn:"Essential for stable long exposures (15-30s) capturing the Milky Way core.",essential:!1,category:"astronomy"},{id:"thermal-flask",titleAr:"حافظة حرارية للمشروبات الساخنة والقهوة السعودية",titleEn:"Insulated Thermal Flask for Hot Beverages & Saudi Coffee",descAr:"للاستمتاع بالقهوة الخولانية الدافئة خلال جلسات الرصد الممتدة.",descEn:"Enjoy piping hot Khawlani spiced coffee during extended midnight star vigils.",essential:!0,category:"comfort"}];return t==="mountain"&&e.push({id:"rain-shell",titleAr:"سترة مقاومة للرياح والرذاذ الجبلي",titleEn:"Windproof Alpine Shell & Moisture Shield",descAr:"ارتفاع السودة 3000م يصاحبه ضباب كثيف ونسمات جبلية قوية.",descEn:"Al Souda altitude exceeds 3000m with dense fog drifts and brisk winds.",essential:!0,category:"clothing"}),e}}function Mr(){const l=y.isAr(),t=We.getMoonPhase(new Date),e=We.getVisiblePlanets();return`
    <section class="section-container" id="observatory">
      <div class="container">
        <div class="section-header text-center">
          <span class="badge badge-cyan">
            🔭 ${l?"المرصد الفلكي التفاعلي":"Interactive Celestial Observatory"}
          </span>
          <h2 class="section-title gradient-text-gold">${y.t("celestialTitle")}</h2>
          <p class="section-subtitle">${y.t("celestialSubtitle")}</p>
        </div>

        <!-- Observatory Top Bar: Constellations Tabs & Bortle Scale -->
        <div class="observatory-controls glass-panel">
          <div class="constellation-tabs" id="constellation-tabs">
            ${Te.map((i,n)=>`
              <button class="tab-btn ${n===0?"active":""}" data-constellation-id="${i.id}">
                <span class="tab-star">✦</span>
                <span>${l?i.nameAr:i.nameEn}</span>
              </button>
            `).join("")}
          </div>

          <div class="bortle-control-wrapper">
            <div class="bortle-label-row">
              <span class="bortle-title">${y.t("bortleScaleLabel")}</span>
              <span class="bortle-value-badge" id="bortle-display-text">${y.t("bortle1")}</span>
            </div>
            <div class="slider-row">
              <input type="range" id="bortle-slider" min="1" max="4" step="1" value="1" class="custom-slider">
              <div class="bortle-ticks">
                <span>1 (${l?"حالك":"Pristine"})</span>
                <span>2</span>
                <span>3</span>
                <span>4 (${l?"مضيء":"Suburban"})</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Canvas Visualizer Frame -->
        <div class="stargazing-viewport-frame glass-panel">
          <canvas id="celestial-canvas" class="celestial-canvas"></canvas>
          
          <div class="canvas-overlay-hints">
            <span class="hint-pulse"></span>
            <span>${y.t("interactivityTip")}</span>
          </div>

          <!-- Constellation Information Overlay Card -->
          <div class="constellation-info-card glass-panel" id="constellation-info-card">
            <div class="card-header">
              <div class="card-titles">
                <span class="constellation-subtitle" id="constellation-season"></span>
                <h3 class="constellation-title gradient-text-gold" id="constellation-name"></h3>
              </div>
              <span class="star-badge" id="constellation-badge">★</span>
            </div>

            <div class="card-body">
              <div class="lore-block">
                <div class="lore-tag">${l?"التراث الفلكي العربي:":"Arabian Star Lore:"}</div>
                <p id="constellation-tradition" class="lore-text"></p>
              </div>
              <p id="constellation-description" class="desc-text"></p>
            </div>

            <div class="card-footer">
              <span class="tip-label">🌟 ${l?"انقر على أي نجم في الخريطة لرؤية اسمه وتفاصيله":"Click any star node in the map for astrophysical data"}</span>
            </div>
          </div>
        </div>

        <!-- Secondary Astronomical Widgets: Moon Phase & Planet Radar -->
        <div class="celestial-widgets-grid">
          <!-- Live Moon Phase Card -->
          <div class="astro-widget-card glass-panel">
            <div class="widget-header">
              <span class="widget-icon">🌙</span>
              <h4>${y.t("moonWidgetTitle")}</h4>
            </div>
            <div class="moon-phase-content">
              <div class="moon-render-icon">${t.iconSvg}</div>
              <div class="moon-details">
                <div class="moon-name">${l?t.phaseNameAr:t.phaseNameEn}</div>
                <div class="moon-stat-row">
                  <span>${y.t("illumination")}</span>
                  <strong>${t.illuminationPct}%</strong>
                </div>
                <div class="moon-astro-score">
                  <span class="score-tag">${y.t("astroRating")}</span>
                  <div class="score-badge ${t.astrophotographyScore>=8?"badge-good":"badge-mid"}">
                    ${l?t.astrophotographyRatingAr:t.astrophotographyRatingEn}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Planet Radar Card -->
          <div class="astro-widget-card glass-panel">
            <div class="widget-header">
              <span class="widget-icon">🪐</span>
              <h4>${y.t("planetsRadarTitle")}</h4>
            </div>
            <div class="planets-list">
              ${e.map(i=>`
                <div class="planet-item">
                  <div class="planet-symbol-col">
                    <span class="planet-glyph">${i.symbol}</span>
                  </div>
                  <div class="planet-info-col">
                    <div class="planet-name-row">
                      <strong>${l?i.nameAr:i.nameEn}</strong>
                      <span class="planet-mag">Mag ${i.magnitude>0?"+":""}${i.magnitude}</span>
                    </div>
                    <div class="planet-timing">⏱️ ${l?i.bestTimeAr:i.bestTimeEn}</div>
                    <div class="planet-telescope">🔭 ${l?i.visibleTelescope:i.visibleTelescopeEn}</div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>

      </div>
    </section>
  `}function Pr(){const l=y.isAr();return`
    <section class="section-container" id="retreats">
      <div class="container">
        <div class="section-header text-center">
          <span class="badge badge-gold">
            ⛺ ${l?"أطلس الوجهات والملاذات الفاخرة":"Iconic Desert Sanctuaries Atlas"}
          </span>
          <h2 class="section-title gradient-text-gold">${y.t("retreatsTitle")}</h2>
          <p class="section-subtitle">${y.t("retreatsSubtitle")}</p>
        </div>

        <!-- Filters & Lighting Controls -->
        <div class="retreats-toolbar glass-panel">
          <div class="terrain-filters" id="terrain-filters">
            <button class="filter-btn active" data-terrain="all">${y.t("filterAll")}</button>
            <button class="filter-btn" data-terrain="canyon">${y.t("filterCanyon")}</button>
            <button class="filter-btn" data-terrain="mountain">${y.t("filterMountain")}</button>
            <button class="filter-btn" data-terrain="crimson">${y.t("filterCrimson")}</button>
            <button class="filter-btn" data-terrain="coastal">${y.t("filterCoastal")}</button>
          </div>

          <div class="lighting-mode-toggle">
            <span class="toggle-caption">${y.t("toggleDayNight")}:</span>
            <div class="lighting-btn-group">
              <button class="light-mode-btn" id="btn-mode-day" title="${y.t("viewDay")}">
                ☀️ <span>${l?"نهار":"Day"}</span>
              </button>
              <button class="light-mode-btn active" id="btn-mode-night" title="${y.t("viewNight")}">
                ✨ <span>${l?"ليل ونجوم":"Night"}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Retreats Grid -->
        <div class="retreats-grid" id="retreats-grid">
          ${lt.map(t=>gn(t,l,"night")).join("")}
        </div>
      </div>
    </section>
  `}function gn(l,t,e="night"){const i=e==="day"?l.imageDay:l.imageNight,n=t?l.terrainAr:l.terrainEn,r=t?l.nameAr:l.nameEn,a=t?l.regionAr:l.regionEn,s=t?l.descriptionAr:l.descriptionEn,o=t?l.elevation:l.elevationEn,c=t?l.bortleDescAr:l.bortleDescEn,d=t?l.featuresAr:l.featuresEn;return`
    <article class="retreat-card glass-panel" data-terrain="${l.terrain}" data-retreat-id="${l.id}">
      <div class="card-media-wrapper">
        <img src="${i}" alt="${r}" class="retreat-image" loading="lazy" />
        <div class="media-overlay-gradient"></div>
        
        <div class="media-badges-top">
          <span class="terrain-pill">
            <span class="pill-dot"></span>
            ${n}
          </span>
          <span class="bortle-pill">
            ★ Bortle ${l.bortleScale}
          </span>
        </div>

        <div class="price-overlay-tag">
          <span class="price-val">${l.pricePerNight.toLocaleString()}</span>
          <span class="price-curr">${t?"ر.س":"SAR"}</span>
          <span class="price-period">/ ${t?"ليلة":"night"}</span>
        </div>
      </div>

      <div class="card-content">
        <div class="location-row">
          <span class="pin-icon">📍</span>
          <span class="location-name">${a}</span>
          <span class="gps-coords">${l.gps}</span>
        </div>

        <h3 class="retreat-card-title">${r}</h3>
        <p class="retreat-card-desc">${s}</p>

        <div class="spec-metrics-row">
          <div class="metric-item">
            <span class="m-icon">⛰️</span>
            <div class="m-info">
              <span class="m-label">${t?"الارتفاع":"Elevation"}</span>
              <span class="m-val">${o}</span>
            </div>
          </div>
          <div class="metric-item">
            <span class="m-icon">🌌</span>
            <div class="m-info">
              <span class="m-label">${t?"السماء":"Dark Sky"}</span>
              <span class="m-val">${c.split("(")[0]}</span>
            </div>
          </div>
          <div class="metric-item">
            <span class="m-icon">🌡️</span>
            <div class="m-info">
              <span class="m-label">${t?"الليل":"Night"}</span>
              <span class="m-val">${l.temperature.nightC}°C</span>
            </div>
          </div>
        </div>

        <div class="card-features-list">
          <div class="features-title">${y.t("amenitiesIncluded")}</div>
          <ul>
            ${d.slice(0,3).map(u=>`
              <li><span class="feature-bullet">✦</span> <span>${u}</span></li>
            `).join("")}
          </ul>
        </div>

        <div class="card-actions">
          <button class="btn btn-primary btn-book-retreat" data-retreat-id="${l.id}">
            <span>${y.t("reserveNowBtn")}</span>
          </button>
          <button class="btn btn-outline btn-configure-retreat" data-retreat-id="${l.id}">
            <span>${y.t("customizeThisRetreat")}</span>
          </button>
        </div>
      </div>
    </article>
  `}function Rr(l){const t=y.isAr(),e=lt.find(n=>n.id===l.retreatId)||lt[0],i=di.computePrice(e.pricePerNight,l);return`
    <section class="section-container" id="configurator">
      <div class="container">
        <div class="section-header text-center">
          <span class="badge badge-cyan">
            🛠️ ${t?"استوديو التصميم والتخصيص الذكي":"Smart Glamping Design Studio"}
          </span>
          <h2 class="section-title gradient-text-gold">${y.t("configuratorTitle")}</h2>
          <p class="section-subtitle">${y.t("configuratorSubtitle")}</p>
        </div>

        <div class="configurator-layout-grid">
          <!-- Left Column: Interactive Options & Amenities -->
          <div class="configurator-controls-col">
            
            <!-- Step 1: Destination Selector -->
            <div class="step-card glass-panel">
              <h3 class="step-title">${y.t("chooseRetreat")}</h3>
              <div class="retreat-pill-selector" id="retreat-pill-selector">
                ${lt.map(n=>`
                  <button class="retreat-select-btn ${n.id===l.retreatId?"active":""}" data-retreat-id="${n.id}">
                    <span class="btn-location-icon">📍</span>
                    <span class="btn-name">${t?n.nameAr.split("-")[0]:n.nameEn.split("-")[0]}</span>
                    <span class="btn-region">${t?n.regionAr.split("،")[0]:n.regionEn.split(",")[0]}</span>
                  </button>
                `).join("")}
              </div>
            </div>

            <!-- Step 2: Unit Architecture Style -->
            <div class="step-card glass-panel">
              <h3 class="step-title">${y.t("chooseUnitType")}</h3>
              <div class="unit-types-grid" id="unit-types-grid">
                
                <!-- Dome -->
                <div class="unit-type-option ${l.unitType==="dome"?"selected":""}" data-unit="dome">
                  <div class="unit-icon-glow">🔮</div>
                  <div class="unit-header-info">
                    <h4>${y.t("unitDome")}</h4>
                    <span class="unit-badge">${t?"الخيار الأكثر طلباً":"Signature Experience"}</span>
                  </div>
                  <p class="unit-desc">${y.t("unitDomeDesc")}</p>
                  <div class="unit-rate-tag">100% ${t?"السعر القياسي":"Standard Rate"}</div>
                </div>

                <!-- Sadu -->
                <div class="unit-type-option ${l.unitType==="sadu"?"selected":""}" data-unit="sadu">
                  <div class="unit-icon-glow">⛺</div>
                  <div class="unit-header-info">
                    <h4>${y.t("unitSadu")}</h4>
                    <span class="unit-badge badge-gold">${t?"تراث ملكي":"Royal Heritage"}</span>
                  </div>
                  <p class="unit-desc">${y.t("unitSaduDesc")}</p>
                  <div class="unit-rate-tag">+18% ${t?"فخامة ملكية":"Heritage Luxury"}</div>
                </div>

                <!-- Airstream -->
                <div class="unit-type-option ${l.unitType==="airstream"?"selected":""}" data-unit="airstream">
                  <div class="unit-icon-glow">🚐</div>
                  <div class="unit-header-info">
                    <h4>${y.t("unitAirstream")}</h4>
                    <span class="unit-badge badge-silver">${t?"عصري كلاسيكي":"Retro Luxury"}</span>
                  </div>
                  <p class="unit-desc">${y.t("unitAirstreamDesc")}</p>
                  <div class="unit-rate-tag">-8% ${t?"مرونة ورحابة":"Compact Luxury"}</div>
                </div>

              </div>
            </div>

            <!-- Step 3: Amenities Add-ons -->
            <div class="step-card glass-panel">
              <h3 class="step-title">${y.t("chooseAmenities")}</h3>
              <div class="amenities-checklist" id="amenities-checklist">
                ${Ge.map(n=>{const r=l.selectedAmenities.includes(n.id);return`
                    <label class="amenity-checkbox-card ${r?"active":""}">
                      <input type="checkbox" value="${n.id}" ${r?"checked":""} class="amenity-input">
                      <span class="amenity-custom-check"></span>
                      <div class="amenity-icon">${n.icon}</div>
                      <div class="amenity-text-content">
                        <div class="amenity-title-row">
                          <strong class="amenity-name">${t?n.nameAr:n.nameEn}</strong>
                          <span class="amenity-price-tag">+${n.priceSAR} ${t?"ر.س":"SAR"} ${n.perNight?t?"/ ليلة":"/ night":t?"/ مرة":"/ stay"}</span>
                        </div>
                        <p class="amenity-desc">${t?n.descAr:n.descEn}</p>
                      </div>
                    </label>
                  `}).join("")}
              </div>
            </div>

          </div>

          <!-- Right Column: Interactive 3D Visualizer & Live Price Calculator -->
          <div class="configurator-summary-col">
            
            <!-- Architectural 3D Simulation Frame -->
            <div class="preview-3d-frame glass-panel">
              <div class="preview-backdrop" id="preview-backdrop" style="background-image: url('${e.imageNight}')">
                <div class="preview-sky-stars"></div>
                <div class="preview-aurora-glow"></div>
                
                <div class="preview-badge-layer">
                  <span class="live-tag">
                    <span class="live-dot"></span>
                    ${t?"محاكاة ليلية حية":"Live Night Sim"}
                  </span>
                  <span class="preview-elevation">${e.elevation}</span>
                </div>

                <div class="preview-center-unit">
                  <div class="unit-3d-model" id="unit-3d-model">
                    ${Dr(l.unitType)}
                  </div>
                </div>

                <div class="preview-amenities-overlay" id="preview-amenities-overlay">
                  ${l.selectedAmenities.map(n=>{const r=Ge.find(a=>a.id===n);return r?`<span class="amenity-bubble" title="${t?r.nameAr:r.nameEn}">${r.icon}</span>`:""}).join("")}
                </div>
              </div>
            </div>

            <!-- Live Price Calculator Panel -->
            <div class="price-calculator-panel glass-panel" id="price-calculator-panel">
              <h3 class="calc-panel-title gradient-text-gold">${y.t("bookingSummaryTitle")}</h3>
              
              <!-- Date Pickers & Guests Counter -->
              <div class="dates-counter-grid">
                <div class="form-field">
                  <label for="input-check-in">${y.t("checkInDate")}</label>
                  <input type="date" id="input-check-in" value="${l.checkIn}" class="custom-date-input">
                </div>
                <div class="form-field">
                  <label for="input-check-out">${y.t("checkOutDate")}</label>
                  <input type="date" id="input-check-out" value="${l.checkOut}" class="custom-date-input">
                </div>
                <div class="form-field">
                  <label for="input-guests">${y.t("guestsCount")}</label>
                  <select id="input-guests" class="custom-select">
                    <option value="1" ${l.guestsCount===1?"selected":""}>1 ${t?"ضيف":"Guest"}</option>
                    <option value="2" ${l.guestsCount===2?"selected":""}>2 ${t?"ضيوف (موصى به)":"Guests (Recommended)"}</option>
                    <option value="3" ${l.guestsCount===3?"selected":""}>3 ${t?"ضيوف":"Guests"}</option>
                    <option value="4" ${l.guestsCount===4?"selected":""}>4 ${t?"ضيوف":"Guests"}</option>
                  </select>
                </div>
              </div>

              <!-- Price Breakdown List -->
              <div class="price-breakdown-list" id="price-breakdown-container">
                ${vn(i,t)}
              </div>

              <button class="btn btn-primary btn-block btn-lg btn-glow" id="btn-proceed-booking">
                <span>${y.t("proceedBookingBtn")}</span>
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  `}function vn(l,t){const e=t?"ر.س":"SAR";return`
    <div class="breakdown-row">
      <span class="row-label">${t?l.unitTypeTitleAr:l.unitTypeTitleEn} (${l.nights} ${t?"ليالٍ":"nights"} × ${l.basePricePerNight.toLocaleString()} ${e}):</span>
      <span class="row-val">${l.subtotalNights.toLocaleString()} ${e}</span>
    </div>

    ${l.amenitiesDetails.map(i=>`
      <div class="breakdown-row sub-amenity-row">
        <span class="row-label">+ ${t?i.titleAr:i.titleEn}:</span>
        <span class="row-val">+${i.cost.toLocaleString()} ${e}</span>
      </div>
    `).join("")}

    <div class="breakdown-divider"></div>

    <div class="breakdown-row">
      <span class="row-label">${y.t("staySubtotal")}:</span>
      <span class="row-val">${l.subtotalBeforeTax.toLocaleString()} ${e}</span>
    </div>

    <div class="breakdown-row">
      <span class="row-label">${y.t("vatLabel")}:</span>
      <span class="row-val">${l.vat15.toLocaleString()} ${e}</span>
    </div>

    <div class="breakdown-total-row">
      <span class="total-label gradient-text-gold">${y.t("totalSARLabel")}</span>
      <div class="total-val-box">
        <span class="total-amount">${l.totalSAR.toLocaleString()}</span>
        <span class="total-currency">${e}</span>
      </div>
    </div>
  `}function Dr(l){return l==="sadu"?`
      <div class="sadu-tent-graphic">
        <div class="sadu-roof"></div>
        <div class="sadu-walls">
          <div class="sadu-pattern-stripe"></div>
        </div>
        <div class="sadu-entrance"></div>
      </div>
    `:l==="airstream"?`
      <div class="airstream-graphic">
        <div class="airstream-body">
          <div class="airstream-window w1"></div>
          <div class="airstream-window w2"></div>
        </div>
        <div class="airstream-wheel"></div>
      </div>
    `:`
      <div class="geodesic-dome-graphic">
        <div class="dome-shell">
          <div class="dome-grid-overlay"></div>
          <div class="dome-glow-interior"></div>
        </div>
        <div class="dome-deck"></div>
      </div>
    `}function Ki(l="alula-ashar"){const t=y.isAr(),e=lt.find(a=>a.id===l)||lt[0],i=We.calculateWindChill(e.temperature.nightC,e.temperature.windSpeedKmh),n=We.getPackingList(e.terrain),r=e.temperature.dayC-e.temperature.nightC;return`
    <section class="section-container" id="weather">
      <div class="container">
        <div class="section-header text-center">
          <span class="badge badge-gold">
            ❄️ ${t?"حاسبة الطقس والمناخ الصحراوي":"Microclimate & Night Chill Advisor"}
          </span>
          <h2 class="section-title gradient-text-gold">${y.t("weatherTitle")}</h2>
          <p class="section-subtitle">${y.t("weatherSubtitle")}</p>
        </div>

        <!-- Retreat Selector for Weather -->
        <div class="weather-retreat-tabs" id="weather-retreat-tabs">
          ${lt.map(a=>`
            <button class="weather-tab-btn ${a.id===l?"active":""}" data-retreat-id="${a.id}">
              <span>${t?a.nameAr.split("-")[0]:a.nameEn.split("-")[0]}</span>
              <small>${a.elevation}</small>
            </button>
          `).join("")}
        </div>

        <div class="weather-content-grid">
          
          <!-- Temperature Delta & Wind Chill Panel -->
          <div class="weather-temp-card glass-panel">
            <div class="card-header">
              <div class="header-loc">
                <h3>${t?e.nameAr:e.nameEn}</h3>
                <span class="gps-badge">📍 ${e.gps}</span>
              </div>
              <div class="chill-alert-pill">
                <span>⚠️ ${t?`فارق حراري يبلغ ${r} درجة مئوية!`:`Severe ${r}°C Diurnal Drop!`}</span>
              </div>
            </div>

            <!-- Visual Temperature Bars -->
            <div class="temp-bars-comparison">
              <!-- Day Temp -->
              <div class="temp-col day-col">
                <div class="temp-icon">☀️</div>
                <div class="temp-val">${e.temperature.dayC}°C</div>
                <div class="temp-name">${y.t("dayTemp")}</div>
                <div class="temp-bar-outer">
                  <div class="temp-bar-fill day-fill" style="height: ${e.temperature.dayC/45*100}%"></div>
                </div>
              </div>

              <!-- Night Temp -->
              <div class="temp-col night-col">
                <div class="temp-icon">🌙</div>
                <div class="temp-val">${e.temperature.nightC}°C</div>
                <div class="temp-name">${y.t("nightTemp")}</div>
                <div class="temp-bar-outer">
                  <div class="temp-bar-fill night-fill" style="height: ${e.temperature.nightC/45*100}%"></div>
                </div>
              </div>

              <!-- Wind Chill Felt -->
              <div class="temp-col chill-col">
                <div class="temp-icon">💨</div>
                <div class="temp-val">${i}°C</div>
                <div class="temp-name">${y.t("windChill")}</div>
                <div class="temp-bar-outer">
                  <div class="temp-bar-fill chill-fill" style="height: ${i/45*100}%"></div>
                </div>
              </div>
            </div>

            <div class="microclimate-specs-grid">
              <div class="spec-tile">
                <span class="spec-label">${t?"سرعة الرياح الليلية":"Night Wind Speed"}</span>
                <strong class="spec-data">${e.temperature.windSpeedKmh} km/h</strong>
              </div>
              <div class="spec-tile">
                <span class="spec-label">${t?"الرطوبة النسبية":"Humidity"}</span>
                <strong class="spec-data">${e.temperature.humidityPct}%</strong>
              </div>
              <div class="spec-tile">
                <span class="spec-label">${t?"الارتفاع الجغرافي":"Altitude"}</span>
                <strong class="spec-data">${e.elevation}</strong>
              </div>
              <div class="spec-tile">
                <span class="spec-label">${t?"تأثير الغطاء السحابي":"Cloud Cover Impact"}</span>
                <strong class="spec-data">${e.terrain==="mountain"?t?"ضباب ساحر عالي":"High Cloud Inversion":t?"سماء صافية 0%":"Clear Skies 0%"}</strong>
              </div>
            </div>
          </div>

          <!-- Dynamic Packing Checklist -->
          <div class="packing-advisor-card glass-panel">
            <div class="packing-header">
              <span class="backpack-icon">🎒</span>
              <div>
                <h4>${y.t("packingListTitle")}</h4>
                <p class="packing-sub">${t?"قائمة تفاعلية مخصصة لتضاريس ودرجة حرارة هذه الوجهة":"Tailored interactive checklist for this microclimate"}</p>
              </div>
            </div>

            <div class="packing-checklist" id="packing-checklist">
              ${n.map(a=>`
                <label class="packing-item-row">
                  <input type="checkbox" class="pack-checkbox">
                  <span class="pack-custom-box"></span>
                  <div class="pack-info">
                    <div class="pack-title-row">
                      <strong class="pack-title">${t?a.titleAr:a.titleEn}</strong>
                      <span class="pack-badge ${a.essential?"badge-essential":"badge-optional"}">
                        ${a.essential?y.t("packEssential"):y.t("packRecommended")}
                      </span>
                    </div>
                    <p class="pack-desc">${t?a.descAr:a.descEn}</p>
                  </div>
                </label>
              `).join("")}
            </div>

            <div class="packing-footer-tip">
              <span>💡 ${t?"يتم توفير بطانيات صوف دافئة ومدافئ خارجية في جميع ملاذاتنا مجاناً.":"Complimentary luxury merino wool blankets and heaters provided at all sanctuaries."}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  `}function $r(l,t){const e=y.isAr(),i=lt.find(r=>r.id===l.retreatId)||lt[0],n=e?"ر.س":"SAR";return`
    <div class="modal-backdrop" id="booking-modal-backdrop">
      <div class="modal-dialog glass-panel" id="booking-modal-dialog">
        <div class="modal-header">
          <div class="modal-title-box">
            <span class="modal-badge">✨ 6-Star Glamping Booking</span>
            <h3 class="modal-title gradient-text-gold">${y.t("modalTitle")}</h3>
          </div>
          <button class="modal-close-btn" id="btn-close-booking-modal" aria-label="Close">&times;</button>
        </div>

        <div class="modal-body">
          <div class="modal-summary-strip">
            <div class="summary-pill">
              <span class="sp-label">${e?"الملاذ المختارة:":"Sanctuary:"}</span>
              <strong class="sp-val">${e?i.nameAr.split("-")[0]:i.nameEn.split("-")[0]}</strong>
            </div>
            <div class="summary-pill">
              <span class="sp-label">${e?"الفترة:":"Dates:"}</span>
              <strong class="sp-val">${l.checkIn} ➔ ${l.checkOut} (${t.nights} ${e?"ليالٍ":"nights"})</strong>
            </div>
            <div class="summary-pill">
              <span class="sp-label">${e?"المجموع النهائي:":"Total Amount:"}</span>
              <strong class="sp-val text-gold">${t.totalSAR.toLocaleString()} ${n}</strong>
            </div>
          </div>

          <form id="booking-form" class="booking-form">
            <div class="form-section-title">${y.t("guestDetailsTitle")}</div>

            <div class="form-row-2">
              <div class="form-group">
                <label for="guest-name">${y.t("fullName")} *</label>
                <input type="text" id="guest-name" required placeholder="${e?"أ. طارق ابوعشي":"Tareq Aboushi"}" class="form-input" value="${e?"أ. طارق ابوعشي":"Tareq Aboushi"}">
              </div>
              <div class="form-group">
                <label for="guest-phone">${y.t("phone")} *</label>
                <input type="tel" id="guest-phone" required placeholder="+966 50 000 0000" class="form-input" value="+966 50 123 4567">
              </div>
            </div>

            <div class="form-group">
              <label for="guest-email">${y.t("email")} *</label>
              <input type="email" id="guest-email" required placeholder="tareq@example.com" class="form-input" value="tareq.aboushi@gmail.com">
            </div>

            <div class="form-group">
              <label for="guest-notes">${y.t("specialNotes")}</label>
              <textarea id="guest-notes" rows="2" class="form-textarea" placeholder="${e?"تفضيلات إعداد القهوة السعودية، تجهيزات تلسكوب محددة، أو أوقات وصول خاصة...":"Any preferences for Saudi coffee preparation, telescope eyepieces, or arrival time..."}"></textarea>
            </div>

            <div class="vat-disclaimer">
              <span class="vat-icon">ℹ️</span>
              <span>${e?"السعر المعروض شامل ضريبة القيمة المضافة 15% ورسوم الخدمة والضيافة الكاملة.":"Total price includes 15% Saudi VAT, luxury amenity preparation, and full concierge service."}</span>
            </div>

            <div class="modal-footer-actions">
              <button type="button" class="btn btn-outline" id="btn-cancel-modal">${y.t("closeModal")}</button>
              <button type="submit" class="btn btn-primary btn-glow btn-lg" id="btn-submit-booking">
                <span>${y.t("confirmAndGeneratePass")}</span>
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `}function Ir(l,t,e){const i=y.isAr(),n=lt.find(s=>s.id===t.retreatId)||lt[0],r=i?"ر.س":"SAR",a=Lr(e.bookingRef,n.gps);return`
    <div class="modal-backdrop pass-modal-backdrop" id="boarding-pass-backdrop">
      <div class="pass-dialog-container">
        
        <!-- Action Toolbar for Print & Close -->
        <div class="pass-toolbar no-print">
          <button class="btn btn-primary btn-glow" id="btn-print-pass">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
              <path d="M6 14h12v8H6z"/>
            </svg>
            <span>${y.t("printBoardingPass")}</span>
          </button>
          <button class="btn btn-outline" id="btn-close-pass-modal">
            <span>${y.t("closeModal")}</span> &times;
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
                <div class="brand-title">${y.t("boardingPassTitle")}</div>
                <div class="brand-sub">${y.t("boardingPassSub")}</div>
              </div>

              <div class="pass-pnr-box">
                <span class="pnr-title">${y.t("bookingRefLabel")}</span>
                <span class="pnr-code">${e.bookingRef}</span>
              </div>
            </div>

            <!-- Guest & Destination Details Grid -->
            <div class="pass-details-grid">
              
              <div class="pass-field-cell">
                <span class="field-label">${y.t("passengerName")}</span>
                <strong class="field-val">${l.fullName}</strong>
              </div>

              <div class="pass-field-cell">
                <span class="field-label">${y.t("destinationLabel")}</span>
                <strong class="field-val text-gold">${i?n.nameAr:n.nameEn}</strong>
              </div>

              <div class="pass-field-cell">
                <span class="field-label">${y.t("unitTypeLabel")}</span>
                <strong class="field-val">${i?e.unitTypeTitleAr:e.unitTypeTitleEn}</strong>
              </div>

              <div class="pass-field-cell">
                <span class="field-label">${y.t("bortleRatingLabel")}</span>
                <strong class="field-val">★ Bortle Class ${n.bortleScale} (${i?n.bortleDescAr.split("(")[0]:n.bortleDescEn.split("(")[0]})</strong>
              </div>

              <div class="pass-field-cell">
                <span class="field-label">${y.t("checkInLabel")}</span>
                <strong class="field-val">${t.checkIn} (15:00)</strong>
              </div>

              <div class="pass-field-cell">
                <span class="field-label">${y.t("checkOutLabel")}</span>
                <strong class="field-val">${t.checkOut} (12:00)</strong>
              </div>

              <div class="pass-field-cell">
                <span class="field-label">${y.t("gpsLabel")}</span>
                <strong class="field-val font-mono">${n.gps}</strong>
              </div>

              <div class="pass-field-cell">
                <span class="field-label">${y.t("totalPaidLabel")}</span>
                <strong class="field-val text-gold">${e.totalSAR.toLocaleString()} ${r} [PAID]</strong>
              </div>

            </div>

            <!-- Signature & Curated Amenities Strip -->
            <div class="pass-amenities-strip">
              <span class="amenities-strip-label">${i?"الباقة والخدمات المشمولة في التصريح:":"Included Privileges & Astronomy Access:"}</span>
              <div class="amenities-tags-row">
                <span class="tag-pill">🔭 ${i?"مرصد فلكي وتلسكوب خاص":"Private Telescope"}</span>
                <span class="tag-pill">🔥 ${i?"سمر وحطب صحراوي":"Sand Dune Firepit"}</span>
                <span class="tag-pill">☕ ${i?"قهوة خولانية ملكية":"Royal Khawlani Coffee"}</span>
                <span class="tag-pill">🚙 ${i?"مرافقة سيارات الدفع الرباعي":"4x4 Desert Concierge"}</span>
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
                ${a}
              </div>

              <div class="stub-qr-note">
                ${y.t("qrCodeSubtitle")}
              </div>

              <div class="stub-barcode-block">
                <div class="barcode-lines"></div>
                <div class="barcode-number">${e.bookingRef}</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  `}function Lr(l,t){return`
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
  `}function Nt(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}function _n(l,t){l.prototype=Object.create(t.prototype),l.prototype.constructor=l,l.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Tt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ee={duration:.5,overwrite:!1,delay:0},Ci,ct,H,Et=1e8,G=1/Et,ui=Math.PI*2,Or=ui/4,Br=0,yn=Math.sqrt,Nr=Math.cos,Fr=Math.sin,st=function(t){return typeof t=="string"},nt=function(t){return typeof t=="function"},zt=function(t){return typeof t=="number"},ki=function(t){return typeof t>"u"},Ot=function(t){return typeof t=="object"},mt=function(t){return t!==!1},Ei=function(){return typeof window<"u"},Be=function(t){return nt(t)||st(t)},bn=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ut=Array.isArray,zr=/random\([^)]+\)/g,Gr=/,\s*/g,Qi=/(?:-?\.?\d|\.)+/gi,xn=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,de=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ti=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,wn=/[+-]=-?[.\d]+/,Wr=/[^,'"\[\]\s]+/gi,Vr=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Q,$t,hi,Mi,At={},Ve={},Sn,Tn=function(t){return(Ve=me(t,At))&&yt},Pi=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Me=function(t,e){return!e&&console.warn(t)},An=function(t,e){return t&&(At[t]=e)&&Ve&&(Ve[t]=e)||At},Pe=function(){return 0},qr={suppressEvents:!0,isStart:!0,kill:!1},Ne={suppressEvents:!0,kill:!1},Ur={suppressEvents:!0},Ri={},Yt=[],fi={},Cn,bt={},ei={},Zi=30,Fe=[],Di="",$i=function(t){var e=t[0],i,n;if(Ot(e)||nt(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(n=Fe.length;n--&&!Fe[n].targetTest(e););i=Fe[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new Xn(t[n],i)))||t.splice(n,1);return t},re=function(t){return t._gsap||$i(Mt(t))[0]._gsap},kn=function(t,e,i){return(i=t[e])&&nt(i)?t[e]():ki(i)&&t.getAttribute&&t.getAttribute(e)||i},gt=function(t,e){return(t=t.split(",")).forEach(e)||t},rt=function(t){return Math.round(t*1e5)/1e5||0},K=function(t){return Math.round(t*1e7)/1e7||0},he=function(t,e){var i=e.charAt(0),n=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+n:i==="-"?t-n:i==="*"?t*n:t/n},Yr=function(t,e){for(var i=e.length,n=0;t.indexOf(e[n])<0&&++n<i;);return n<i},qe=function(){var t=Yt.length,e=Yt.slice(0),i,n;for(fi={},Yt.length=0,i=0;i<t;i++)n=e[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Ii=function(t){return!!(t._initted||t._startAt||t.add)},En=function(t,e,i,n){Yt.length&&!ct&&qe(),t.render(e,i,!!(ct&&e<0&&Ii(t))),Yt.length&&!ct&&qe()},Mn=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Wr).length<2?e:st(t)?t.trim():t},Pn=function(t){return t},Ct=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},Hr=function(t){return function(e,i){for(var n in i)n in e||n==="duration"&&t||n==="ease"||(e[n]=i[n])}},me=function(t,e){for(var i in e)t[i]=e[i];return t},Ji=function l(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=Ot(e[i])?l(t[i]||(t[i]={}),e[i]):e[i]);return t},Ue=function(t,e){var i={},n;for(n in t)n in e||(i[n]=t[n]);return i},Ae=function(t){var e=t.parent||Q,i=t.keyframes?Hr(ut(t.keyframes)):Ct;if(mt(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},Xr=function(t,e){for(var i=t.length,n=i===e.length;n&&i--&&t[i]===e[i];);return i<0},Rn=function(t,e,i,n,r){var a=t[n],s;if(r)for(s=e[r];a&&a[r]>s;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[n]=e,e._prev=a,e.parent=e._dp=t,e},Ke=function(t,e,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=e._prev,a=e._next;r?r._next=a:t[i]===e&&(t[i]=a),a?a._prev=r:t[n]===e&&(t[n]=r),e._next=e._prev=e.parent=null},Xt=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ae=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},jr=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},pi=function(t,e,i,n){return t._startAt&&(ct?t._startAt.revert(Ne):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,n))},Kr=function l(t){return!t||t._ts&&l(t.parent)},tn=function(t){return t._repeat?ge(t._tTime,t=t.duration()+t._rDelay)*t:0},ge=function(t,e){var i=Math.floor(t=K(t/e));return t&&i===t?i-1:i},Ye=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Qe=function(t){return t._end=K(t._start+(t._tDur/Math.abs(t._ts||t._rts||G)||0))},Ze=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=K(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Qe(t),i._dirty||ae(i,t)),t},Dn=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=Ye(t.rawTime(),e),(!e._dur||Oe(0,e.totalDuration(),i)-e._tTime>G)&&e.render(i,!0)),ae(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-G}},It=function(t,e,i,n){return e.parent&&Xt(e),e._start=K((zt(i)?i:i||t!==Q?kt(t,i,e):t._time)+e._delay),e._end=K(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Rn(t,e,"_first","_last",t._sort?"_start":0),mi(e)||(t._recent=e),n||Dn(t,e),t._ts<0&&Ze(t,t._tTime),t},$n=function(t,e){return(At.ScrollTrigger||Pi("scrollTrigger",e))&&At.ScrollTrigger.create(e,t)},In=function(t,e,i,n,r){if(Oi(t,e,r),!t._initted)return 1;if(!i&&t._pt&&!ct&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Cn!==xt.frame)return Yt.push(t),t._lazy=[r,n],1},Qr=function l(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||l(e))},mi=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Zr=function(t,e,i,n){var r=t.ratio,a=e<0||!e&&(!t._start&&Qr(t)&&!(!t._initted&&mi(t))||(t._ts<0||t._dp._ts<0)&&!mi(t))?0:1,s=t._rDelay,o=0,c,d,u;if(s&&t._repeat&&(o=Oe(0,t._tDur,e),d=ge(o,s),t._yoyo&&d&1&&(a=1-a),d!==ge(t._tTime,s)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||ct||n||t._zTime===G||!e&&t._zTime){if(!t._initted&&In(t,e,n,i,o))return;for(u=t._zTime,t._zTime=e||(i?G:0),i||(i=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=o,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&pi(t,e,i,!0),t._onUpdate&&!i&&wt(t,"onUpdate"),o&&t._repeat&&!i&&t.parent&&wt(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Xt(t,1),!i&&!ct&&(wt(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Jr=function(t,e,i){var n;if(i>e)for(n=t._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>e)return n;n=n._next}else for(n=t._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<e)return n;n=n._prev}},ve=function(t,e,i,n){var r=t._repeat,a=K(e)||0,s=t._tTime/t._tDur;return s&&!n&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:K(a*(r+1)+t._rDelay*r):a,s>0&&!n&&Ze(t,t._tTime=t._tDur*s),t.parent&&Qe(t),i||ae(t.parent,t),t},en=function(t){return t instanceof pt?ae(t):ve(t,t._dur)},ta={_start:0,endTime:Pe,totalDuration:Pe},kt=function l(t,e,i){var n=t.labels,r=t._recent||ta,a=t.duration()>=Et?r.endTime(!1):t._dur,s,o,c;return st(e)&&(isNaN(e)||e in n)?(o=e.charAt(0),c=e.substr(-1)==="%",s=e.indexOf("="),o==="<"||o===">"?(s>=0&&(e=e.replace(/=/,"")),(o==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(s<0?r:i).totalDuration()/100:1)):s<0?(e in n||(n[e]=a),n[e]):(o=parseFloat(e.charAt(s-1)+e.substr(s+1)),c&&i&&(o=o/100*(ut(i)?i[0]:i).totalDuration()),s>1?l(t,e.substr(0,s-1),i)+o:a+o)):e==null?a:+e},Ce=function(t,e,i){var n=zt(e[1]),r=(n?2:1)+(t<2?0:1),a=e[r],s,o;if(n&&(a.duration=e[1]),a.parent=i,t){for(s=a,o=i;o&&!("immediateRender"in s);)s=o.vars.defaults||{},o=mt(o.vars.inherit)&&o.parent;a.immediateRender=mt(s.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new at(e[0],a,e[r+1])},Qt=function(t,e){return t||t===0?e(t):e},Oe=function(t,e,i){return i<t?t:i>e?e:i},dt=function(t,e){return!st(t)||!(e=Vr.exec(t))?"":e[1]},ea=function(t,e,i){return Qt(i,function(n){return Oe(t,e,n)})},gi=[].slice,Ln=function(t,e){return t&&Ot(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ot(t[0]))&&!t.nodeType&&t!==$t},ia=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(n){var r;return st(n)&&!e||Ln(n,1)?(r=i).push.apply(r,Mt(n)):i.push(n)})||i},Mt=function(t,e,i){return H&&!e&&H.selector?H.selector(t):st(t)&&!i&&(hi||!_e())?gi.call((e||Mi).querySelectorAll(t),0):ut(t)?ia(t,i):Ln(t)?gi.call(t,0):t?[t]:[]},vi=function(t){return t=Mt(t)[0]||Me("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Mt(e,i.querySelectorAll?i:i===t?Me("Invalid scope")||Mi.createElement("div"):t)}},On=function(t){return t.sort(function(){return .5-Math.random()})},Bn=function(t){if(nt(t))return t;var e=Ot(t)?t:{each:t},i=se(e.ease),n=e.from||0,r=parseFloat(e.base)||0,a={},s=n>0&&n<1,o=isNaN(n)||s,c=e.axis,d=n,u=n;return st(n)?d=u={center:.5,edges:.5,end:1}[n]||0:!s&&o&&(d=n[0],u=n[1]),function(f,m,_){var h=(_||e).length,g=a[h],b,w,S,T,x,M,A,k,C;if(!g){if(C=e.grid==="auto"?0:(e.grid||[1,Et])[1],!C){for(A=-Et;A<(A=_[C++].getBoundingClientRect().left)&&C<h;);C<h&&C--}for(g=a[h]=[],b=o?Math.min(C,h)*d-.5:n%C,w=C===Et?0:o?h*u/C-.5:n/C|0,A=0,k=Et,M=0;M<h;M++)S=M%C-b,T=w-(M/C|0),g[M]=x=c?Math.abs(c==="y"?T:S):yn(S*S+T*T),x>A&&(A=x),x<k&&(k=x);n==="random"&&On(g),g.max=A-k,g.min=k,g.v=h=(parseFloat(e.amount)||parseFloat(e.each)*(C>h?h-1:c?c==="y"?h/C:C:Math.max(C,h/C))||0)*(n==="edges"?-1:1),g.b=h<0?r-h:r,g.u=dt(e.amount||e.each)||0,i=i&&h<0?ma(i):i}return h=(g[f]-g.min)/g.max||0,K(g.b+(i?i(h):h)*g.v)+g.u}},_i=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var n=K(Math.round(parseFloat(i)/t)*t*e);return(n-n%1)/e+(zt(i)?0:dt(i))}},Nn=function(t,e){var i=ut(t),n,r;return!i&&Ot(t)&&(n=i=t.radius||Et,t.values?(t=Mt(t.values),(r=!zt(t[0]))&&(n*=n)):t=_i(t.increment)),Qt(e,i?nt(t)?function(a){return r=t(a),Math.abs(r-a)<=n?r:a}:function(a){for(var s=parseFloat(r?a.x:a),o=parseFloat(r?a.y:0),c=Et,d=0,u=t.length,f,m;u--;)r?(f=t[u].x-s,m=t[u].y-o,f=f*f+m*m):f=Math.abs(t[u]-s),f<c&&(c=f,d=u);return d=!n||c<=n?t[d]:a,r||d===a||zt(a)?d:d+dt(a)}:_i(t))},Fn=function(t,e,i,n){return Qt(ut(t)?!e:i===!0?!!(i=0):!n,function(){return ut(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*n)/n})},na=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(n){return e.reduce(function(r,a){return a(r)},n)}},ra=function(t,e){return function(i){return t(parseFloat(i))+(e||dt(i))}},aa=function(t,e,i){return Gn(t,e,0,1,i)},zn=function(t,e,i){return Qt(i,function(n){return t[~~e(n)]})},sa=function l(t,e,i){var n=e-t;return ut(t)?zn(t,l(0,t.length),e):Qt(i,function(r){return(n+(r-t)%n)%n+t})},oa=function l(t,e,i){var n=e-t,r=n*2;return ut(t)?zn(t,l(0,t.length-1),e):Qt(i,function(a){return a=(r+(a-t)%r)%r||0,t+(a>n?r-a:a)})},Re=function(t){return t.replace(zr,function(e){var i=e.indexOf("[")+1,n=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(Gr);return Fn(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},Gn=function(t,e,i,n,r){var a=e-t,s=n-i;return Qt(r,function(o){return i+((o-t)/a*s||0)})},la=function l(t,e,i,n){var r=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!r){var a=st(t),s={},o,c,d,u,f;if(i===!0&&(n=1)&&(i=null),a)t={p:t},e={p:e};else if(ut(t)&&!ut(e)){for(d=[],u=t.length,f=u-2,c=1;c<u;c++)d.push(l(t[c-1],t[c]));u--,r=function(_){_*=u;var h=Math.min(f,~~_);return d[h](_-h)},i=e}else n||(t=me(ut(t)?[]:{},t));if(!d){for(o in e)Li.call(s,t,o,"get",e[o]);r=function(_){return Fi(_,s)||(a?t.p:t)}}}return Qt(i,r)},nn=function(t,e,i){var n=t.labels,r=Et,a,s,o;for(a in n)s=n[a]-e,s<0==!!i&&s&&r>(s=Math.abs(s))&&(o=a,r=s);return o},wt=function(t,e,i){var n=t.vars,r=n[e],a=H,s=t._ctx,o,c,d;if(r)return o=n[e+"Params"],c=n.callbackScope||t,i&&Yt.length&&qe(),s&&(H=s),d=o?r.apply(c,o):r.call(c),H=a,d},xe=function(t){return Xt(t),t.scrollTrigger&&t.scrollTrigger.kill(!!ct),t.progress()<1&&wt(t,"onInterrupt"),t},ue,Wn=[],Vn=function(t){if(t)if(t=!t.name&&t.default||t,Ei()||t.headless){var e=t.name,i=nt(t),n=e&&!i&&t.init?function(){this._props=[]}:t,r={init:Pe,render:Fi,add:Li,kill:Aa,modifier:Ta,rawVars:0},a={targetTest:0,get:0,getSetter:Ni,aliases:{},register:0};if(_e(),t!==n){if(bt[e])return;Ct(n,Ct(Ue(t,r),a)),me(n.prototype,me(r,Ue(t,a))),bt[n.prop=e]=n,t.targetTest&&(Fe.push(n),Ri[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}An(e,n),t.register&&t.register(yt,n,vt)}else Wn.push(t)},z=255,we={aqua:[0,z,z],lime:[0,z,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,z],navy:[0,0,128],white:[z,z,z],olive:[128,128,0],yellow:[z,z,0],orange:[z,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[z,0,0],pink:[z,192,203],cyan:[0,z,z],transparent:[z,z,z,0]},ii=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*z+.5|0},qn=function(t,e,i){var n=t?zt(t)?[t>>16,t>>8&z,t&z]:0:we.black,r,a,s,o,c,d,u,f,m,_;if(!n){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),we[t])n=we[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),s=t.charAt(3),t="#"+r+r+a+a+s+s+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return n=parseInt(t.substr(1,6),16),[n>>16,n>>8&z,n&z,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),n=[t>>16,t>>8&z,t&z]}else if(t.substr(0,3)==="hsl"){if(n=_=t.match(Qi),!e)o=+n[0]%360/360,c=+n[1]/100,d=+n[2]/100,a=d<=.5?d*(c+1):d+c-d*c,r=d*2-a,n.length>3&&(n[3]*=1),n[0]=ii(o+1/3,r,a),n[1]=ii(o,r,a),n[2]=ii(o-1/3,r,a);else if(~t.indexOf("="))return n=t.match(xn),i&&n.length<4&&(n[3]=1),n}else n=t.match(Qi)||we.transparent;n=n.map(Number)}return e&&!_&&(r=n[0]/z,a=n[1]/z,s=n[2]/z,u=Math.max(r,a,s),f=Math.min(r,a,s),d=(u+f)/2,u===f?o=c=0:(m=u-f,c=d>.5?m/(2-u-f):m/(u+f),o=u===r?(a-s)/m+(a<s?6:0):u===a?(s-r)/m+2:(r-a)/m+4,o*=60),n[0]=~~(o+.5),n[1]=~~(c*100+.5),n[2]=~~(d*100+.5)),i&&n.length<4&&(n[3]=1),n},Un=function(t){var e=[],i=[],n=-1;return t.split(Ht).forEach(function(r){var a=r.match(de)||[];e.push.apply(e,a),i.push(n+=a.length+1)}),e.c=i,e},rn=function(t,e,i){var n="",r=(t+n).match(Ht),a=e?"hsla(":"rgba(",s=0,o,c,d,u;if(!r)return t;if(r=r.map(function(f){return(f=qn(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(d=Un(t),o=i.c,o.join(n)!==d.c.join(n)))for(c=t.replace(Ht,"1").split(de),u=c.length-1;s<u;s++)n+=c[s]+(~o.indexOf(s)?r.shift()||a+"0,0,0,0)":(d.length?d:r.length?r:i).shift());if(!c)for(c=t.split(Ht),u=c.length-1;s<u;s++)n+=c[s]+r[s];return n+c[u]},Ht=(function(){var l="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in we)l+="|"+t+"\\b";return new RegExp(l+")","gi")})(),ca=/hsl[a]?\(/,Yn=function(t){var e=t.join(" "),i;if(Ht.lastIndex=0,Ht.test(e))return i=ca.test(e),t[1]=rn(t[1],i),t[0]=rn(t[0],i,Un(t[1])),!0},De,xt=(function(){var l=Date.now,t=500,e=33,i=l(),n=i,r=1e3/240,a=r,s=[],o,c,d,u,f,m,_=function h(g){var b=l()-n,w=g===!0,S,T,x,M;if((b>t||b<0)&&(i+=b-e),n+=b,x=n-i,S=x-a,(S>0||w)&&(M=++u.frame,f=x-u.time*1e3,u.time=x=x/1e3,a+=S+(S>=r?4:r-S),T=1),w||(o=c(h)),T)for(m=0;m<s.length;m++)s[m](x,f,M,g)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){Sn&&(!hi&&Ei()&&($t=hi=window,Mi=$t.document||{},At.gsap=yt,($t.gsapVersions||($t.gsapVersions=[])).push(yt.version),Tn(Ve||$t.GreenSockGlobals||!$t.gsap&&$t||{}),Wn.forEach(Vn)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,o&&u.sleep(),c=d||function(g){return setTimeout(g,a-u.time*1e3+1|0)},De=1,_(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(o),De=0,c=Pe},lagSmoothing:function(g,b){t=g||1/0,e=Math.min(b||33,t)},fps:function(g){r=1e3/(g||240),a=u.time*1e3+r},add:function(g,b,w){var S=b?function(T,x,M,A){g(T,x,M,A),u.remove(S)}:g;return u.remove(g),s[w?"unshift":"push"](S),_e(),S},remove:function(g,b){~(b=s.indexOf(g))&&s.splice(b,1)&&m>=b&&m--},_listeners:s},u})(),_e=function(){return!De&&xt.wake()},N={},da=/^[\d.\-M][\d.\-,\s]/,ua=/["']/g,ha=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),n=i[0],r=1,a=i.length,s,o,c;r<a;r++)o=i[r],s=r!==a-1?o.lastIndexOf(","):o.length,c=o.substr(0,s),e[n]=isNaN(c)?c.replace(ua,"").trim():+c,n=o.substr(s+1).trim();return e},fa=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),n=t.indexOf("(",e);return t.substring(e,~n&&n<i?t.indexOf(")",i+1):i)},pa=function(t){var e=(t+"").split("("),i=N[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[ha(e[1])]:fa(t).split(",").map(Mn)):N._CE&&da.test(t)?N._CE("",t):i},ma=function(t){return function(e){return 1-t(1-e)}},se=function(t,e){return t&&(nt(t)?t:N[t]||pa(t))||e},le=function(t,e,i,n){i===void 0&&(i=function(o){return 1-e(1-o)}),n===void 0&&(n=function(o){return o<.5?e(o*2)/2:1-e((1-o)*2)/2});var r={easeIn:e,easeOut:i,easeInOut:n},a;return gt(t,function(s){N[s]=At[s]=r,N[a=s.toLowerCase()]=i;for(var o in r)N[a+(o==="easeIn"?".in":o==="easeOut"?".out":".inOut")]=N[s+"."+o]=r[o]}),r},Hn=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},ni=function l(t,e,i){var n=e>=1?e:1,r=(i||(t?.3:.45))/(e<1?e:1),a=r/ui*(Math.asin(1/n)||0),s=function(d){return d===1?1:n*Math.pow(2,-10*d)*Fr((d-a)*r)+1},o=t==="out"?s:t==="in"?function(c){return 1-s(1-c)}:Hn(s);return r=ui/r,o.config=function(c,d){return l(t,c,d)},o},ri=function l(t,e){e===void 0&&(e=1.70158);var i=function(a){return a?--a*a*((e+1)*a+e)+1:0},n=t==="out"?i:t==="in"?function(r){return 1-i(1-r)}:Hn(i);return n.config=function(r){return l(t,r)},n};gt("Linear,Quad,Cubic,Quart,Quint,Strong",function(l,t){var e=t<5?t+1:t;le(l+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});N.Linear.easeNone=N.none=N.Linear.easeIn;le("Elastic",ni("in"),ni("out"),ni());(function(l,t){var e=1/t,i=2*e,n=2.5*e,r=function(s){return s<e?l*s*s:s<i?l*Math.pow(s-1.5/t,2)+.75:s<n?l*(s-=2.25/t)*s+.9375:l*Math.pow(s-2.625/t,2)+.984375};le("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);le("Expo",function(l){return Math.pow(2,10*(l-1))*l+l*l*l*l*l*l*(1-l)});le("Circ",function(l){return-(yn(1-l*l)-1)});le("Sine",function(l){return l===1?1:-Nr(l*Or)+1});le("Back",ri("in"),ri("out"),ri());N.SteppedEase=N.steps=At.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,n=t+(e?0:1),r=e?1:0,a=1-G;return function(s){return((n*Oe(0,a,s)|0)+r)*i}}};Ee.ease=N["quad.out"];gt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(l){return Di+=l+","+l+"Params,"});var Xn=function(t,e){this.id=Br++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:kn,this.set=e?e.getSetter:Ni},$e=(function(){function l(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ve(this,+e.duration,1,1),this.data=e.data,H&&(this._ctx=H,H.data.push(this)),De||xt.wake()}var t=l.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,ve(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,n){if(_e(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ze(this,i),!r._dp||r.parent||Dn(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&It(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===G||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),En(this,i,n)),this},t.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+tn(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},t.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+tn(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?ge(this._tTime,r)+1:1},t.timeScale=function(i,n){if(!arguments.length)return this._rts===-G?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?Ye(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-G?0:this._rts,this.totalTime(Oe(-Math.abs(this._delay),this.totalDuration(),r),n!==!1),Qe(this),jr(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(_e(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==G&&(this._tTime-=G)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=K(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&It(n,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(mt(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ye(n.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=Ur);var n=ct;return ct=i,Ii(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),ct=n,this},t.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,en(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,en(this),n?this.time(n):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,n){return this.totalTime(kt(this,i),mt(n))},t.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,mt(n)),this._dur||(this._zTime=-G),this},t.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},t.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},t.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-G:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-G,this},t.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-G)},t.eventCallback=function(i,n,r){var a=this.vars;return arguments.length>1?(n?(a[i]=n,r&&(a[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete a[i],this):a[i]},t.then=function(i){var n=this,r=n._prom;return new Promise(function(a){var s=nt(i)?i:Pn,o=function(){var d=n.then;n.then=null,r&&r(),nt(s)&&(s=s(n))&&(s.then||s===n)&&(n.then=d),a(s),n.then=d};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?o():n._prom=o})},t.kill=function(){xe(this)},l})();Ct($e.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-G,_prom:0,_ps:!1,_rts:1});var pt=(function(l){_n(t,l);function t(i,n){var r;return i===void 0&&(i={}),r=l.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=mt(i.sortChildren),Q&&It(i.parent||Q,Nt(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&$n(Nt(r),i.scrollTrigger),r}var e=t.prototype;return e.to=function(n,r,a){return Ce(0,arguments,this),this},e.from=function(n,r,a){return Ce(1,arguments,this),this},e.fromTo=function(n,r,a,s){return Ce(2,arguments,this),this},e.set=function(n,r,a){return r.duration=0,r.parent=this,Ae(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new at(n,r,kt(this,a),1),this},e.call=function(n,r,a){return It(this,at.delayedCall(0,n,r),a)},e.staggerTo=function(n,r,a,s,o,c,d){return a.duration=r,a.stagger=a.stagger||s,a.onComplete=c,a.onCompleteParams=d,a.parent=this,new at(n,a,kt(this,o)),this},e.staggerFrom=function(n,r,a,s,o,c,d){return a.runBackwards=1,Ae(a).immediateRender=mt(a.immediateRender),this.staggerTo(n,r,a,s,o,c,d)},e.staggerFromTo=function(n,r,a,s,o,c,d,u){return s.startAt=a,Ae(s).immediateRender=mt(s.immediateRender),this.staggerTo(n,r,s,o,c,d,u)},e.render=function(n,r,a){var s=this._time,o=this._dirty?this.totalDuration():this._tDur,c=this._dur,d=n<=0?0:K(n),u=this._zTime<0!=n<0&&(this._initted||!c),f,m,_,h,g,b,w,S,T,x,M,A;if(this!==Q&&d>o&&n>=0&&(d=o),d!==this._tTime||a||u){if(s!==this._time&&c&&(d+=this._time-s,n+=this._time-s),f=d,T=this._start,S=this._ts,b=!S,u&&(c||(s=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(M=this._yoyo,g=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(g*100+n,r,a);if(f=K(d%g),d===o?(h=this._repeat,f=c):(x=K(d/g),h=~~x,h&&h===x&&(f=c,h--),f>c&&(f=c)),x=ge(this._tTime,g),!s&&this._tTime&&x!==h&&this._tTime-x*g-this._dur<=0&&(x=h),M&&h&1&&(f=c-f,A=1),h!==x&&!this._lock){var k=M&&x&1,C=k===(M&&h&1);if(h<x&&(k=!k),s=k?0:d%c?c:d,this._lock=1,this.render(s||(A?0:K(h*g)),r,!c)._lock=0,this._tTime=d,!r&&this.parent&&wt(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,x=h),s&&s!==this._time||b!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,o=this._tDur,C&&(this._lock=2,s=k?c:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!b)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=Jr(this,K(s),K(f)),w&&(d-=f-(f=w._start))),this._tTime=d,this._time=f,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,s=0),!s&&d&&c&&!r&&!x&&(wt(this,"onStart"),this._tTime!==d))return this;if(f>=s&&n>=0)for(m=this._first;m;){if(_=m._next,(m._act||f>=m._start)&&m._ts&&w!==m){if(m.parent!==this)return this.render(n,r,a);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,r,a),f!==this._time||!this._ts&&!b){w=0,_&&(d+=this._zTime=-G);break}}m=_}else{m=this._last;for(var I=n<0?n:f;m;){if(_=m._prev,(m._act||I<=m._end)&&m._ts&&w!==m){if(m.parent!==this)return this.render(n,r,a);if(m.render(m._ts>0?(I-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(I-m._start)*m._ts,r,a||ct&&Ii(m)),f!==this._time||!this._ts&&!b){w=0,_&&(d+=this._zTime=I?-G:G);break}}m=_}}if(w&&!r&&(this.pause(),w.render(f>=s?0:-G)._zTime=f>=s?1:-1,this._ts))return this._start=T,Qe(this),this.render(n,r,a);this._onUpdate&&!r&&wt(this,"onUpdate",!0),(d===o&&this._tTime>=this.totalDuration()||!d&&s)&&(T===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(d===o&&this._ts>0||!d&&this._ts<0)&&Xt(this,1),!r&&!(n<0&&!s)&&(d||s||!o)&&(wt(this,d===o&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<o&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(n,r){var a=this;if(zt(r)||(r=kt(this,r,n)),!(n instanceof $e)){if(ut(n))return n.forEach(function(s){return a.add(s,r)}),this;if(st(n))return this.addLabel(n,r);if(nt(n))n=at.delayedCall(0,n);else return this}return this!==n?It(this,n,r):this},e.getChildren=function(n,r,a,s){n===void 0&&(n=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=-Et);for(var o=[],c=this._first;c;)c._start>=s&&(c instanceof at?r&&o.push(c):(a&&o.push(c),n&&o.push.apply(o,c.getChildren(!0,r,a)))),c=c._next;return o},e.getById=function(n){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===n)return r[a]},e.remove=function(n){return st(n)?this.removeLabel(n):nt(n)?this.killTweensOf(n):(n.parent===this&&Ke(this,n),n===this._recent&&(this._recent=this._last),ae(this))},e.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=K(xt.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),l.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},e.addLabel=function(n,r){return this.labels[n]=kt(this,r),this},e.removeLabel=function(n){return delete this.labels[n],this},e.addPause=function(n,r,a){var s=at.delayedCall(0,r||Pe,a);return s.data="isPause",this._hasPause=1,It(this,s,kt(this,n))},e.removePause=function(n){var r=this._first;for(n=kt(this,n);r;)r._start===n&&r.data==="isPause"&&Xt(r),r=r._next},e.killTweensOf=function(n,r,a){for(var s=this.getTweensOf(n,a),o=s.length;o--;)Vt!==s[o]&&s[o].kill(n,r);return this},e.getTweensOf=function(n,r){for(var a=[],s=Mt(n),o=this._first,c=zt(r),d;o;)o instanceof at?Yr(o._targets,s)&&(c?(!Vt||o._initted&&o._ts)&&o.globalTime(0)<=r&&o.globalTime(o.totalDuration())>r:!r||o.isActive())&&a.push(o):(d=o.getTweensOf(s,r)).length&&a.push.apply(a,d),o=o._next;return a},e.tweenTo=function(n,r){r=r||{};var a=this,s=kt(a,n),o=r,c=o.startAt,d=o.onStart,u=o.onStartParams,f=o.immediateRender,m,_=at.to(a,Ct({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale())||G,onStart:function(){if(a.pause(),!m){var g=r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==g&&ve(_,g,0,1).render(_._time,!0,!0),m=1}d&&d.apply(_,u||[])}},r));return f?_.render(0):_},e.tweenFromTo=function(n,r,a){return this.tweenTo(r,Ct({startAt:{time:kt(this,n)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(n){return n===void 0&&(n=this._time),nn(this,kt(this,n))},e.previousLabel=function(n){return n===void 0&&(n=this._time),nn(this,kt(this,n),1)},e.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+G)},e.shiftChildren=function(n,r,a){a===void 0&&(a=0);var s=this._first,o=this.labels,c;for(n=K(n);s;)s._start>=a&&(s._start+=n,s._end+=n),s=s._next;if(r)for(c in o)o[c]>=a&&(o[c]+=n);return ae(this)},e.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return l.prototype.invalidate.call(this,n)},e.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),ae(this)},e.totalDuration=function(n){var r=0,a=this,s=a._last,o=Et,c,d,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-n:n));if(a._dirty){for(u=a.parent;s;)c=s._prev,s._dirty&&s.totalDuration(),d=s._start,d>o&&a._sort&&s._ts&&!a._lock?(a._lock=1,It(a,s,d-s._delay,1)._lock=0):o=d,d<0&&s._ts&&(r-=d,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=K(d/a._ts),a._time-=d,a._tTime-=d),a.shiftChildren(-d,!1,-1/0),o=0),s._end>r&&s._ts&&(r=s._end),s=c;ve(a,a===Q&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(n){if(Q._ts&&(En(Q,Ye(n,Q)),Cn=xt.frame),xt.frame>=Zi){Zi+=Tt.autoSleep||120;var r=Q._first;if((!r||!r._ts)&&Tt.autoSleep&&xt._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||xt.sleep()}}},t})($e);Ct(pt.prototype,{_lock:0,_hasPause:0,_forcing:0});var ga=function(t,e,i,n,r,a,s){var o=new vt(this._pt,t,e,0,1,tr,null,r),c=0,d=0,u,f,m,_,h,g,b,w;for(o.b=i,o.e=n,i+="",n+="",(b=~n.indexOf("random("))&&(n=Re(n)),a&&(w=[i,n],a(w,t,e),i=w[0],n=w[1]),f=i.match(ti)||[];u=ti.exec(n);)_=u[0],h=n.substring(c,u.index),m?m=(m+1)%5:h.substr(-5)==="rgba("&&(m=1),_!==f[d++]&&(g=parseFloat(f[d-1])||0,o._pt={_next:o._pt,p:h||d===1?h:",",s:g,c:_.charAt(1)==="="?he(g,_)-g:parseFloat(_)-g,m:m&&m<4?Math.round:0},c=ti.lastIndex);return o.c=c<n.length?n.substring(c,n.length):"",o.fp=s,(wn.test(n)||b)&&(o.e=0),this._pt=o,o},Li=function(t,e,i,n,r,a,s,o,c,d){nt(n)&&(n=n(r||0,t,a));var u=t[e],f=i!=="get"?i:nt(u)?c?t[e.indexOf("set")||!nt(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,m=nt(u)?c?xa:Zn:Bi,_;if(st(n)&&(~n.indexOf("random(")&&(n=Re(n)),n.charAt(1)==="="&&(_=he(f,n)+(dt(f)||0),(_||_===0)&&(n=_))),!d||f!==n||yi)return!isNaN(f*n)&&n!==""?(_=new vt(this._pt,t,e,+f||0,n-(f||0),typeof u=="boolean"?Sa:Jn,0,m),c&&(_.fp=c),s&&_.modifier(s,this,t),this._pt=_):(!u&&!(e in t)&&Pi(e,n),ga.call(this,t,e,f,n,m,o||Tt.stringFilter,c))},va=function(t,e,i,n,r){if(nt(t)&&(t=ke(t,r,e,i,n)),!Ot(t)||t.style&&t.nodeType||ut(t)||bn(t))return st(t)?ke(t,r,e,i,n):t;var a={},s;for(s in t)a[s]=ke(t[s],r,e,i,n);return a},jn=function(t,e,i,n,r,a){var s,o,c,d;if(bt[t]&&(s=new bt[t]).init(r,s.rawVars?e[t]:va(e[t],n,r,a,i),i,n,a)!==!1&&(i._pt=o=new vt(i._pt,r,t,0,1,s.render,s,0,s.priority),i!==ue))for(c=i._ptLookup[i._targets.indexOf(r)],d=s._props.length;d--;)c[s._props[d]]=o;return s},Vt,yi,Oi=function l(t,e,i){var n=t.vars,r=n.ease,a=n.startAt,s=n.immediateRender,o=n.lazy,c=n.onUpdate,d=n.runBackwards,u=n.yoyoEase,f=n.keyframes,m=n.autoRevert,_=t._dur,h=t._startAt,g=t._targets,b=t.parent,w=b&&b.data==="nested"?b.vars.targets:g,S=t._overwrite==="auto"&&!Ci,T=t.timeline,x=n.easeReverse||u,M,A,k,C,I,X,Y,W,q,J,tt,j,ht;if(T&&(!f||!r)&&(r="none"),t._ease=se(r,Ee.ease),t._rEase=x&&(se(x)||t._ease),t._from=!T&&!!n.runBackwards,t._from&&(t.ratio=1),!T||f&&!n.stagger){if(W=g[0]?re(g[0]).harness:0,j=W&&n[W.prop],M=Ue(n,Ri),h&&(h._zTime<0&&h.progress(1),e<0&&d&&s&&!m?h.render(-1,!0):h.revert(d&&_?Ne:qr),h._lazy=0),a){if(Xt(t._startAt=at.set(g,Ct({data:"isStart",overwrite:!1,parent:b,immediateRender:!0,lazy:!h&&mt(o),startAt:null,delay:0,onUpdate:c&&function(){return wt(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ct||!s&&!m)&&t._startAt.revert(Ne),s&&_&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(d&&_&&!h){if(e&&(s=!1),k=Ct({overwrite:!1,data:"isFromStart",lazy:s&&!h&&mt(o),immediateRender:s,stagger:0,parent:b},M),j&&(k[W.prop]=j),Xt(t._startAt=at.set(g,k)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ct?t._startAt.revert(Ne):t._startAt.render(-1,!0)),t._zTime=e,!s)l(t._startAt,G,G);else if(!e)return}for(t._pt=t._ptCache=0,o=_&&mt(o)||o&&!_,A=0;A<g.length;A++){if(I=g[A],Y=I._gsap||$i(g)[A]._gsap,t._ptLookup[A]=J={},fi[Y.id]&&Yt.length&&qe(),tt=w===g?A:w.indexOf(I),W&&(q=new W).init(I,j||M,t,tt,w)!==!1&&(t._pt=C=new vt(t._pt,I,q.name,0,1,q.render,q,0,q.priority),q._props.forEach(function(Wt){J[Wt]=C}),q.priority&&(X=1)),!W||j)for(k in M)bt[k]&&(q=jn(k,M,t,tt,I,w))?q.priority&&(X=1):J[k]=C=Li.call(t,I,k,"get",M[k],tt,w,0,n.stringFilter);t._op&&t._op[A]&&t.kill(I,t._op[A]),S&&t._pt&&(Vt=t,Q.killTweensOf(I,J,t.globalTime(e)),ht=!t.parent,Vt=0),t._pt&&o&&(fi[Y.id]=1)}X&&er(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!ht,f&&e<=0&&T.render(Et,!0,!0)},_a=function(t,e,i,n,r,a,s,o){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],d,u,f,m;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,m=t._targets.length;m--;){if(d=f[m][e],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==e&&d.fp!==e;)d=d._next;if(!d)return yi=1,t.vars[e]="+=0",Oi(t,s),yi=0,o?Me(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(d)}for(m=c.length;m--;)u=c[m],d=u._pt||u,d.s=(n||n===0)&&!r?n:d.s+(n||0)+a*d.c,d.c=i-d.s,u.e&&(u.e=rt(i)+dt(u.e)),u.b&&(u.b=d.s+dt(u.b))},ya=function(t,e){var i=t[0]?re(t[0]).harness:0,n=i&&i.aliases,r,a,s,o;if(!n)return e;r=me({},e);for(a in n)if(a in r)for(o=n[a].split(","),s=o.length;s--;)r[o[s]]=r[a];return r},ba=function(t,e,i,n){var r=e.ease||n||"power1.inOut",a,s;if(ut(e))s=i[t]||(i[t]=[]),e.forEach(function(o,c){return s.push({t:c/(e.length-1)*100,v:o,e:r})});else for(a in e)s=i[a]||(i[a]=[]),a==="ease"||s.push({t:parseFloat(t),v:e[a],e:r})},ke=function(t,e,i,n,r){return nt(t)?t.call(e,i,n,r):st(t)&&~t.indexOf("random(")?Re(t):t},Kn=Di+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Qn={};gt(Kn+",id,stagger,delay,duration,paused,scrollTrigger",function(l){return Qn[l]=1});var at=(function(l){_n(t,l);function t(i,n,r,a){var s;typeof n=="number"&&(r.duration=n,n=r,r=null),s=l.call(this,a?n:Ae(n))||this;var o=s.vars,c=o.duration,d=o.delay,u=o.immediateRender,f=o.stagger,m=o.overwrite,_=o.keyframes,h=o.defaults,g=o.scrollTrigger,b=n.parent||Q,w=(ut(i)||bn(i)?zt(i[0]):"length"in n)?[i]:Mt(i),S,T,x,M,A,k,C,I;if(s._targets=w.length?$i(w):Me("GSAP target "+i+" not found. https://gsap.com",!Tt.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=m,_||f||Be(c)||Be(d)){n=s.vars;var X=n.easeReverse||n.yoyoEase;if(S=s.timeline=new pt({data:"nested",defaults:h||{},targets:b&&b.data==="nested"?b.vars.targets:w}),S.kill(),S.parent=S._dp=Nt(s),S._start=0,f||Be(c)||Be(d)){if(M=w.length,C=f&&Bn(f),Ot(f))for(A in f)~Kn.indexOf(A)&&(I||(I={}),I[A]=f[A]);for(T=0;T<M;T++)x=Ue(n,Qn),x.stagger=0,X&&(x.easeReverse=X),I&&me(x,I),k=w[T],x.duration=+ke(c,Nt(s),T,k,w),x.delay=(+ke(d,Nt(s),T,k,w)||0)-s._delay,!f&&M===1&&x.delay&&(s._delay=d=x.delay,s._start+=d,x.delay=0),S.to(k,x,C?C(T,k,w):0),S._ease=N.none;S.duration()?c=d=0:s.timeline=0}else if(_){Ae(Ct(S.vars.defaults,{ease:"none"})),S._ease=se(_.ease||n.ease||"none");var Y=0,W,q,J;if(ut(_))_.forEach(function(tt){return S.to(w,tt,">")}),S.duration();else{x={};for(A in _)A==="ease"||A==="easeEach"||ba(A,_[A],x,_.easeEach);for(A in x)for(W=x[A].sort(function(tt,j){return tt.t-j.t}),Y=0,T=0;T<W.length;T++)q=W[T],J={ease:q.e,duration:(q.t-(T?W[T-1].t:0))/100*c},J[A]=q.v,S.to(w,J,Y),Y+=J.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||s.duration(c=S.duration())}else s.timeline=0;return m===!0&&!Ci&&(Vt=Nt(s),Q.killTweensOf(w),Vt=0),It(b,Nt(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),(u||!c&&!_&&s._start===K(b._time)&&mt(u)&&Kr(Nt(s))&&b.data!=="nested")&&(s._tTime=-G,s.render(Math.max(0,-d)||0)),g&&$n(Nt(s),g),s}var e=t.prototype;return e.render=function(n,r,a){var s=this._time,o=this._tDur,c=this._dur,d=n<0,u=n>o-G&&!d?o:n<G?0:n,f,m,_,h,g,b,w,S;if(!c)Zr(this,n,r,a);else if(u!==this._tTime||!n||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(f=u,S=this.timeline,this._repeat){if(h=c+this._rDelay,this._repeat<-1&&d)return this.totalTime(h*100+n,r,a);if(f=K(u%h),u===o?(_=this._repeat,f=c):(g=K(u/h),_=~~g,_&&_===g?(f=c,_--):f>c&&(f=c)),b=this._yoyo&&_&1,b&&(f=c-f),g=ge(this._tTime,h),f===s&&!a&&this._initted&&_===g)return this._tTime=u,this;_!==g&&this.vars.repeatRefresh&&!b&&!this._lock&&f!==h&&this._initted&&(this._lock=a=1,this.render(K(h*_),!0).invalidate()._lock=0)}if(!this._initted){if(In(this,d?n:f,a,r,u))return this._tTime=0,this;if(s!==this._time&&!(a&&this.vars.repeatRefresh&&_!==g))return this;if(c!==this._dur)return this.render(n,r,a)}if(this._rEase){var T=f<s;if(T!==this._inv){var x=T?s:c-s;this._inv=T,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=s,this._invRecip=x?(T?-1:1)/x:0,this._invScale=T?-this.ratio:1-this.ratio,this._invEase=T?this._rEase:this._ease}this.ratio=w=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=w=this._ease(f/c);if(this._from&&(this.ratio=w=1-w),this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!s&&u&&!r&&!g&&(wt(this,"onStart"),this._tTime!==u))return this;for(m=this._pt;m;)m.r(w,m.d),m=m._next;S&&S.render(n<0?n:S._dur*S._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(d&&pi(this,n,r,a),wt(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!r&&this.parent&&wt(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(d&&!this._onUpdate&&pi(this,n,!0,!0),(n||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Xt(this,1),!r&&!(d&&!s)&&(u||s||b)&&(wt(this,u===o?"onComplete":"onReverseComplete",!0),this._prom&&!(u<o&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),l.prototype.invalidate.call(this,n)},e.resetTo=function(n,r,a,s,o){De||xt.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||Oi(this,c),d=this._ease(c/this._dur),_a(this,n,r,a,s,d,c,o)?this.resetTo(n,r,a,s,1):(Ze(this,0),this.parent||Rn(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?xe(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ct),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,Vt&&Vt.vars.overwrite!==!0)._first||xe(this),this.parent&&a!==this.timeline.totalDuration()&&ve(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,o=n?Mt(n):s,c=this._ptLookup,d=this._pt,u,f,m,_,h,g,b;if((!r||r==="all")&&Xr(s,o))return r==="all"&&(this._pt=0),xe(this);for(u=this._op=this._op||[],r!=="all"&&(st(r)&&(h={},gt(r,function(w){return h[w]=1}),r=h),r=ya(s,r)),b=s.length;b--;)if(~o.indexOf(s[b])){f=c[b],r==="all"?(u[b]=r,_=f,m={}):(m=u[b]=u[b]||{},_=r);for(h in _)g=f&&f[h],g&&((!("kill"in g.d)||g.d.kill(h)===!0)&&Ke(this,g,"_pt"),delete f[h]),m!=="all"&&(m[h]=1)}return this._initted&&!this._pt&&d&&xe(this),this},t.to=function(n,r){return new t(n,r,arguments[2])},t.from=function(n,r){return Ce(1,arguments)},t.delayedCall=function(n,r,a,s){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},t.fromTo=function(n,r,a){return Ce(2,arguments)},t.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(n,r)},t.killTweensOf=function(n,r,a){return Q.killTweensOf(n,r,a)},t})($e);Ct(at.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});gt("staggerTo,staggerFrom,staggerFromTo",function(l){at[l]=function(){var t=new pt,e=gi.call(arguments,0);return e.splice(l==="staggerFromTo"?5:4,0,0),t[l].apply(t,e)}});var Bi=function(t,e,i){return t[e]=i},Zn=function(t,e,i){return t[e](i)},xa=function(t,e,i,n){return t[e](n.fp,i)},wa=function(t,e,i){return t.setAttribute(e,i)},Ni=function(t,e){return nt(t[e])?Zn:ki(t[e])&&t.setAttribute?wa:Bi},Jn=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Sa=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},tr=function(t,e){var i=e._pt,n="";if(!t&&e.b)n=e.b;else if(t===1&&e.e)n=e.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+n,i=i._next;n+=e.c}e.set(e.t,e.p,n,e)},Fi=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},Ta=function(t,e,i,n){for(var r=this._pt,a;r;)a=r._next,r.p===n&&r.modifier(t,e,i),r=a},Aa=function(t){for(var e=this._pt,i,n;e;)n=e._next,e.p===t&&!e.op||e.op===t?Ke(this,e,"_pt"):e.dep||(i=1),e=n;return!i},Ca=function(t,e,i,n){n.mSet(t,e,n.m.call(n.tween,i,n.mt),n)},er=function(t){for(var e=t._pt,i,n,r,a;e;){for(i=e._next,n=r;n&&n.pr>e.pr;)n=n._next;(e._prev=n?n._prev:a)?e._prev._next=e:r=e,(e._next=n)?n._prev=e:a=e,e=i}t._pt=r},vt=(function(){function l(e,i,n,r,a,s,o,c,d){this.t=i,this.s=r,this.c=a,this.p=n,this.r=s||Jn,this.d=o||this,this.set=c||Bi,this.pr=d||0,this._next=e,e&&(e._prev=this)}var t=l.prototype;return t.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=Ca,this.m=i,this.mt=r,this.tween=n},l})();gt(Di+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(l){return Ri[l]=1});At.TweenMax=At.TweenLite=at;At.TimelineLite=At.TimelineMax=pt;Q=new pt({sortChildren:!1,defaults:Ee,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Tt.stringFilter=Yn;var oe=[],ze={},ka=[],an=0,Ea=0,ai=function(t){return(ze[t]||ka).map(function(e){return e()})},bi=function(){var t=Date.now(),e=[];t-an>2&&(ai("matchMediaInit"),oe.forEach(function(i){var n=i.queries,r=i.conditions,a,s,o,c;for(s in n)a=$t.matchMedia(n[s]).matches,a&&(o=1),a!==r[s]&&(r[s]=a,c=1);c&&(i.revert(),o&&e.push(i))}),ai("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),an=t,ai("matchMedia"))},ir=(function(){function l(e,i){this.selector=i&&vi(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Ea++,e&&this.add(e)}var t=l.prototype;return t.add=function(i,n,r){nt(i)&&(r=n,n=i,i=nt);var a=this,s=function(){var c=H,d=a.selector,u;return c&&c!==a&&c.data.push(a),r&&(a.selector=vi(r)),H=a,u=n.apply(a,arguments),nt(u)&&a._r.push(u),H=c,a.selector=d,a.isReverted=!1,u};return a.last=s,i===nt?s(a,function(o){return a.add(null,o)}):i?a[i]=s:s},t.ignore=function(i){var n=H;H=null,i(this),H=n},t.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof l?i.push.apply(i,n.getTweens()):n instanceof at&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,n){var r=this;if(i?(function(){for(var s=r.getTweens(),o=r.data.length,c;o--;)c=r.data[o],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(d){return s.splice(s.indexOf(d),1)}));for(s.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,u){return u.g-d.g||-1/0}).forEach(function(d){return d.t.revert(i)}),o=r.data.length;o--;)c=r.data[o],c instanceof pt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof at)&&c.revert&&c.revert(i);r._r.forEach(function(d){return d(i,r)}),r.isReverted=!0})():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),n)for(var a=oe.length;a--;)oe[a].id===this.id&&oe.splice(a,1)},t.revert=function(i){this.kill(i||{})},l})(),Ma=(function(){function l(e){this.contexts=[],this.scope=e,H&&H.data.push(this)}var t=l.prototype;return t.add=function(i,n,r){Ot(i)||(i={matches:i});var a=new ir(0,r||this.scope),s=a.conditions={},o,c,d;H&&!a.selector&&(a.selector=H.selector),this.contexts.push(a),n=a.add("onMatch",n),a.queries=i;for(c in i)c==="all"?d=1:(o=$t.matchMedia(i[c]),o&&(oe.indexOf(a)<0&&oe.push(a),(s[c]=o.matches)&&(d=1),o.addListener?o.addListener(bi):o.addEventListener("change",bi)));return d&&n(a,function(u){return a.add(null,u)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},l})(),He={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(n){return Vn(n)})},timeline:function(t){return new pt(t)},getTweensOf:function(t,e){return Q.getTweensOf(t,e)},getProperty:function(t,e,i,n){st(t)&&(t=Mt(t)[0]);var r=re(t||{}).get,a=i?Pn:Mn;return i==="native"&&(i=""),t&&(e?a((bt[e]&&bt[e].get||r)(t,e,i,n)):function(s,o,c){return a((bt[s]&&bt[s].get||r)(t,s,o,c))})},quickSetter:function(t,e,i){if(t=Mt(t),t.length>1){var n=t.map(function(d){return yt.quickSetter(d,e,i)}),r=n.length;return function(d){for(var u=r;u--;)n[u](d)}}t=t[0]||{};var a=bt[e],s=re(t),o=s.harness&&(s.harness.aliases||{})[e]||e,c=a?function(d){var u=new a;ue._pt=0,u.init(t,i?d+i:d,ue,0,[t]),u.render(1,u),ue._pt&&Fi(1,ue)}:s.set(t,o);return a?c:function(d){return c(t,o,i?d+i:d,s,1)}},quickTo:function(t,e,i){var n,r=yt.to(t,Ct((n={},n[e]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),a=function(o,c,d){return r.resetTo(e,o,c,d)};return a.tween=r,a},isTweening:function(t){return Q.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=se(t.ease,Ee.ease)),Ji(Ee,t||{})},config:function(t){return Ji(Tt,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,n=t.plugins,r=t.defaults,a=t.extendTimeline;(n||"").split(",").forEach(function(s){return s&&!bt[s]&&!At[s]&&Me(e+" effect requires "+s+" plugin.")}),ei[e]=function(s,o,c){return i(Mt(s),Ct(o||{},r),c)},a&&(pt.prototype[e]=function(s,o,c){return this.add(ei[e](s,Ot(o)?o:(c=o)&&{},this),c)})},registerEase:function(t,e){N[t]=se(e)},parseEase:function(t,e){return arguments.length?se(t,e):N},getById:function(t){return Q.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new pt(t),n,r;for(i.smoothChildTiming=mt(t.smoothChildTiming),Q.remove(i),i._dp=0,i._time=i._tTime=Q._time,n=Q._first;n;)r=n._next,(e||!(!n._dur&&n instanceof at&&n.vars.onComplete===n._targets[0]))&&It(i,n,n._start-n._delay),n=r;return It(Q,i,0),i},context:function(t,e){return t?new ir(t,e):H},matchMedia:function(t){return new Ma(t)},matchMediaRefresh:function(){return oe.forEach(function(t){var e=t.conditions,i,n;for(n in e)e[n]&&(e[n]=!1,i=1);i&&t.revert()})||bi()},addEventListener:function(t,e){var i=ze[t]||(ze[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=ze[t],n=i&&i.indexOf(e);n>=0&&i.splice(n,1)},utils:{wrap:sa,wrapYoyo:oa,distribute:Bn,random:Fn,snap:Nn,normalize:aa,getUnit:dt,clamp:ea,splitColor:qn,toArray:Mt,selector:vi,mapRange:Gn,pipe:na,unitize:ra,interpolate:la,shuffle:On},install:Tn,effects:ei,ticker:xt,updateRoot:pt.updateRoot,plugins:bt,globalTimeline:Q,core:{PropTween:vt,globals:An,Tween:at,Timeline:pt,Animation:$e,getCache:re,_removeLinkedListItem:Ke,reverting:function(){return ct},context:function(t){return t&&H&&(H.data.push(t),t._ctx=H),H},suppressOverwrites:function(t){return Ci=t}}};gt("to,from,fromTo,delayedCall,set,killTweensOf",function(l){return He[l]=at[l]});xt.add(pt.updateRoot);ue=He.to({},{duration:0});var Pa=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},Ra=function(t,e){var i=t._targets,n,r,a;for(n in e)for(r=i.length;r--;)a=t._ptLookup[r][n],a&&(a=a.d)&&(a._pt&&(a=Pa(a,n)),a&&a.modifier&&a.modifier(e[n],t,i[r],n))},si=function(t,e){return{name:t,headless:1,rawVars:1,init:function(n,r,a){a._onInit=function(s){var o,c;if(st(r)&&(o={},gt(r,function(d){return o[d]=1}),r=o),e){o={};for(c in r)o[c]=e(r[c]);r=o}Ra(s,r)}}}},yt=He.registerPlugin({name:"attr",init:function(t,e,i,n,r){var a,s,o;this.tween=i;for(a in e)o=t.getAttribute(a)||"",s=this.add(t,"setAttribute",(o||0)+"",e[a],n,r,0,0,a),s.op=a,s.b=o,this._props.push(a)},render:function(t,e){for(var i=e._pt;i;)ct?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},si("roundProps",_i),si("modifiers"),si("snap",Nn))||He;at.version=pt.version=yt.version="3.15.0";Sn=1;Ei()&&_e();N.Power0;N.Power1;N.Power2;N.Power3;N.Power4;N.Linear;N.Quad;N.Cubic;N.Quart;N.Quint;N.Strong;N.Elastic;N.Back;N.SteppedEase;N.Bounce;N.Sine;N.Expo;N.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var sn,qt,fe,zi,ne,on,Gi,Da=function(){return typeof window<"u"},Gt={},ee=180/Math.PI,pe=Math.PI/180,ce=Math.atan2,ln=1e8,Wi=/([A-Z])/g,$a=/(left|right|width|margin|padding|x)/i,Ia=/[\s,\(]\S/,Lt={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},xi=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},La=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Oa=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Ba=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Na=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},nr=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},rr=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Fa=function(t,e,i){return t.style[e]=i},za=function(t,e,i){return t.style.setProperty(e,i)},Ga=function(t,e,i){return t._gsap[e]=i},Wa=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},Va=function(t,e,i,n,r){var a=t._gsap;a.scaleX=a.scaleY=i,a.renderTransform(r,a)},qa=function(t,e,i,n,r){var a=t._gsap;a[e]=i,a.renderTransform(r,a)},Z="transform",_t=Z+"Origin",Ua=function l(t,e){var i=this,n=this.target,r=n.style,a=n._gsap;if(t in Gt&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Lt[t]||t,~t.indexOf(",")?t.split(",").forEach(function(s){return i.tfm[s]=Ft(n,s)}):this.tfm[t]=a.x?a[t]:Ft(n,t),t===_t&&(this.tfm.zOrigin=a.zOrigin);else return Lt.transform.split(",").forEach(function(s){return l.call(i,s,e)});if(this.props.indexOf(Z)>=0)return;a.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(_t,e,"")),t=Z}(r||e)&&this.props.push(t,e,r[t])},ar=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Ya=function(){var t=this.props,e=this.target,i=e.style,n=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?i[t[r]]=t[r+2]:i.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Wi,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)n[a]=this.tfm[a];n.svg&&(n.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Gi(),(!r||!r.isStart)&&!i[Z]&&(ar(i),n.zOrigin&&i[_t]&&(i[_t]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},sr=function(t,e){var i={target:t,props:[],revert:Ya,save:Ua};return t._gsap||yt.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(n){return i.save(n)}),i},or,wi=function(t,e){var i=qt.createElementNS?qt.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):qt.createElement(t);return i&&i.style?i:qt.createElement(t)},St=function l(t,e,i){var n=getComputedStyle(t);return n[e]||n.getPropertyValue(e.replace(Wi,"-$1").toLowerCase())||n.getPropertyValue(e)||!i&&l(t,ye(e)||e,1)||""},cn="O,Moz,ms,Ms,Webkit".split(","),ye=function(t,e,i){var n=e||ne,r=n.style,a=5;if(t in r&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(cn[a]+t in r););return a<0?null:(a===3?"ms":a>=0?cn[a]:"")+t},Si=function(){Da()&&window.document&&(sn=window,qt=sn.document,fe=qt.documentElement,ne=wi("div")||{style:{}},wi("div"),Z=ye(Z),_t=Z+"Origin",ne.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",or=!!ye("perspective"),Gi=yt.core.reverting,zi=1)},dn=function(t){var e=t.ownerSVGElement,i=wi("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=t.cloneNode(!0),r;n.style.display="block",i.appendChild(n),fe.appendChild(i);try{r=n.getBBox()}catch{}return i.removeChild(n),fe.removeChild(i),r},un=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},lr=function(t){var e,i;try{e=t.getBBox()}catch{e=dn(t),i=1}return e&&(e.width||e.height)||i||(e=dn(t)),e&&!e.width&&!e.x&&!e.y?{x:+un(t,["x","cx","x1"])||0,y:+un(t,["y","cy","y1"])||0,width:0,height:0}:e},cr=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&lr(t))},jt=function(t,e){if(e){var i=t.style,n;e in Gt&&e!==_t&&(e=Z),i.removeProperty?(n=e.substr(0,2),(n==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(n==="--"?e:e.replace(Wi,"-$1").toLowerCase())):i.removeAttribute(e)}},Ut=function(t,e,i,n,r,a){var s=new vt(t._pt,e,i,0,1,a?rr:nr);return t._pt=s,s.b=n,s.e=r,t._props.push(i),s},hn={deg:1,rad:1,turn:1},Ha={grid:1,flex:1},Kt=function l(t,e,i,n){var r=parseFloat(i)||0,a=(i+"").trim().substr((r+"").length)||"px",s=ne.style,o=$a.test(e),c=t.tagName.toLowerCase()==="svg",d=(c?"client":"offset")+(o?"Width":"Height"),u=100,f=n==="px",m=n==="%",_,h,g,b;if(n===a||!r||hn[n]||hn[a])return r;if(a!=="px"&&!f&&(r=l(t,e,i,"px")),b=t.getCTM&&cr(t),(m||a==="%")&&(Gt[e]||~e.indexOf("adius")))return _=b?t.getBBox()[o?"width":"height"]:t[d],rt(m?r/_*u:r/100*_);if(s[o?"width":"height"]=u+(f?a:n),h=n!=="rem"&&~e.indexOf("adius")||n==="em"&&t.appendChild&&!c?t:t.parentNode,b&&(h=(t.ownerSVGElement||{}).parentNode),(!h||h===qt||!h.appendChild)&&(h=qt.body),g=h._gsap,g&&m&&g.width&&o&&g.time===xt.time&&!g.uncache)return rt(r/g.width*u);if(m&&(e==="height"||e==="width")){var w=t.style[e];t.style[e]=u+n,_=t[d],w?t.style[e]=w:jt(t,e)}else(m||a==="%")&&!Ha[St(h,"display")]&&(s.position=St(t,"position")),h===t&&(s.position="static"),h.appendChild(ne),_=ne[d],h.removeChild(ne),s.position="absolute";return o&&m&&(g=re(h),g.time=xt.time,g.width=h[d]),rt(f?_*r/u:_&&r?u/_*r:0)},Ft=function(t,e,i,n){var r;return zi||Si(),e in Lt&&e!=="transform"&&(e=Lt[e],~e.indexOf(",")&&(e=e.split(",")[0])),Gt[e]&&e!=="transform"?(r=Le(t,n),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:je(St(t,_t))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=Xe[e]&&Xe[e](t,e,i)||St(t,e)||kn(t,e)||(e==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?Kt(t,e,r,i)+i:r},Xa=function(t,e,i,n){if(!i||i==="none"){var r=ye(e,t,1),a=r&&St(t,r,1);a&&a!==i?(e=r,i=a):e==="borderColor"&&(i=St(t,"borderTopColor"))}var s=new vt(this._pt,t.style,e,0,1,tr),o=0,c=0,d,u,f,m,_,h,g,b,w,S,T,x;if(s.b=i,s.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=St(t,n.substring(4,n.indexOf(")")))),n==="auto"&&(h=t.style[e],t.style[e]=n,n=St(t,e)||n,h?t.style[e]=h:jt(t,e)),d=[i,n],Yn(d),i=d[0],n=d[1],f=i.match(de)||[],x=n.match(de)||[],x.length){for(;u=de.exec(n);)g=u[0],w=n.substring(o,u.index),_?_=(_+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(_=1),g!==(h=f[c++]||"")&&(m=parseFloat(h)||0,T=h.substr((m+"").length),g.charAt(1)==="="&&(g=he(m,g)+T),b=parseFloat(g),S=g.substr((b+"").length),o=de.lastIndex-S.length,S||(S=S||Tt.units[e]||T,o===n.length&&(n+=S,s.e+=S)),T!==S&&(m=Kt(t,e,h,S)||0),s._pt={_next:s._pt,p:w||c===1?w:",",s:m,c:b-m,m:_&&_<4||e==="zIndex"?Math.round:0});s.c=o<n.length?n.substring(o,n.length):""}else s.r=e==="display"&&n==="none"?rr:nr;return wn.test(n)&&(s.e=0),this._pt=s,s},fn={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ja=function(t){var e=t.split(" "),i=e[0],n=e[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(t=i,i=n,n=t),e[0]=fn[i]||i,e[1]=fn[n]||n,e.join(" ")},Ka=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,n=i.style,r=e.u,a=i._gsap,s,o,c;if(r==="all"||r===!0)n.cssText="",o=1;else for(r=r.split(","),c=r.length;--c>-1;)s=r[c],Gt[s]&&(o=1,s=s==="transformOrigin"?_t:Z),jt(i,s);o&&(jt(i,Z),a&&(a.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",Le(i,1),a.uncache=1,ar(n)))}},Xe={clearProps:function(t,e,i,n,r){if(r.data!=="isFromStart"){var a=t._pt=new vt(t._pt,e,i,0,0,Ka);return a.u=n,a.pr=-10,a.tween=r,t._props.push(i),1}}},Ie=[1,0,0,1,0,0],dr={},ur=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},pn=function(t){var e=St(t,Z);return ur(e)?Ie:e.substr(7).match(xn).map(rt)},Vi=function(t,e){var i=t._gsap||re(t),n=t.style,r=pn(t),a,s,o,c;return i.svg&&t.getAttribute("transform")?(o=t.transform.baseVal.consolidate().matrix,r=[o.a,o.b,o.c,o.d,o.e,o.f],r.join(",")==="1,0,0,1,0,0"?Ie:r):(r===Ie&&!t.offsetParent&&t!==fe&&!i.svg&&(o=n.display,n.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,s=t.nextElementSibling,fe.appendChild(t)),r=pn(t),o?n.display=o:jt(t,"display"),c&&(s?a.insertBefore(t,s):a?a.appendChild(t):fe.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ti=function(t,e,i,n,r,a){var s=t._gsap,o=r||Vi(t,!0),c=s.xOrigin||0,d=s.yOrigin||0,u=s.xOffset||0,f=s.yOffset||0,m=o[0],_=o[1],h=o[2],g=o[3],b=o[4],w=o[5],S=e.split(" "),T=parseFloat(S[0])||0,x=parseFloat(S[1])||0,M,A,k,C;i?o!==Ie&&(A=m*g-_*h)&&(k=T*(g/A)+x*(-h/A)+(h*w-g*b)/A,C=T*(-_/A)+x*(m/A)-(m*w-_*b)/A,T=k,x=C):(M=lr(t),T=M.x+(~S[0].indexOf("%")?T/100*M.width:T),x=M.y+(~(S[1]||S[0]).indexOf("%")?x/100*M.height:x)),n||n!==!1&&s.smooth?(b=T-c,w=x-d,s.xOffset=u+(b*m+w*h)-b,s.yOffset=f+(b*_+w*g)-w):s.xOffset=s.yOffset=0,s.xOrigin=T,s.yOrigin=x,s.smooth=!!n,s.origin=e,s.originIsAbsolute=!!i,t.style[_t]="0px 0px",a&&(Ut(a,s,"xOrigin",c,T),Ut(a,s,"yOrigin",d,x),Ut(a,s,"xOffset",u,s.xOffset),Ut(a,s,"yOffset",f,s.yOffset)),t.setAttribute("data-svg-origin",T+" "+x)},Le=function(t,e){var i=t._gsap||new Xn(t);if("x"in i&&!e&&!i.uncache)return i;var n=t.style,r=i.scaleX<0,a="px",s="deg",o=getComputedStyle(t),c=St(t,_t)||"0",d,u,f,m,_,h,g,b,w,S,T,x,M,A,k,C,I,X,Y,W,q,J,tt,j,ht,Wt,v,p,E,R,P,$;return d=u=f=h=g=b=w=S=T=0,m=_=1,i.svg=!!(t.getCTM&&cr(t)),o.translate&&((o.translate!=="none"||o.scale!=="none"||o.rotate!=="none")&&(n[Z]=(o.translate!=="none"?"translate3d("+(o.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(o.rotate!=="none"?"rotate("+o.rotate+") ":"")+(o.scale!=="none"?"scale("+o.scale.split(" ").join(",")+") ":"")+(o[Z]!=="none"?o[Z]:"")),n.scale=n.rotate=n.translate="none"),A=Vi(t,i.svg),i.svg&&(i.uncache?(ht=t.getBBox(),c=i.xOrigin-ht.x+"px "+(i.yOrigin-ht.y)+"px",j=""):j=!e&&t.getAttribute("data-svg-origin"),Ti(t,j||c,!!j||i.originIsAbsolute,i.smooth!==!1,A)),x=i.xOrigin||0,M=i.yOrigin||0,A!==Ie&&(X=A[0],Y=A[1],W=A[2],q=A[3],d=J=A[4],u=tt=A[5],A.length===6?(m=Math.sqrt(X*X+Y*Y),_=Math.sqrt(q*q+W*W),h=X||Y?ce(Y,X)*ee:0,w=W||q?ce(W,q)*ee+h:0,w&&(_*=Math.abs(Math.cos(w*pe))),i.svg&&(d-=x-(x*X+M*W),u-=M-(x*Y+M*q))):($=A[6],R=A[7],v=A[8],p=A[9],E=A[10],P=A[11],d=A[12],u=A[13],f=A[14],k=ce($,E),g=k*ee,k&&(C=Math.cos(-k),I=Math.sin(-k),j=J*C+v*I,ht=tt*C+p*I,Wt=$*C+E*I,v=J*-I+v*C,p=tt*-I+p*C,E=$*-I+E*C,P=R*-I+P*C,J=j,tt=ht,$=Wt),k=ce(-W,E),b=k*ee,k&&(C=Math.cos(-k),I=Math.sin(-k),j=X*C-v*I,ht=Y*C-p*I,Wt=W*C-E*I,P=q*I+P*C,X=j,Y=ht,W=Wt),k=ce(Y,X),h=k*ee,k&&(C=Math.cos(k),I=Math.sin(k),j=X*C+Y*I,ht=J*C+tt*I,Y=Y*C-X*I,tt=tt*C-J*I,X=j,J=ht),g&&Math.abs(g)+Math.abs(h)>359.9&&(g=h=0,b=180-b),m=rt(Math.sqrt(X*X+Y*Y+W*W)),_=rt(Math.sqrt(tt*tt+$*$)),k=ce(J,tt),w=Math.abs(k)>2e-4?k*ee:0,T=P?1/(P<0?-P:P):0),i.svg&&(j=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!ur(St(t,Z)),j&&t.setAttribute("transform",j))),Math.abs(w)>90&&Math.abs(w)<270&&(r?(m*=-1,w+=h<=0?180:-180,h+=h<=0?180:-180):(_*=-1,w+=w<=0?180:-180)),e=e||i.uncache,i.x=d-((i.xPercent=d&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-d)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+a,i.y=u-((i.yPercent=u&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+a,i.z=f+a,i.scaleX=rt(m),i.scaleY=rt(_),i.rotation=rt(h)+s,i.rotationX=rt(g)+s,i.rotationY=rt(b)+s,i.skewX=w+s,i.skewY=S+s,i.transformPerspective=T+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!e&&i.zOrigin||0)&&(n[_t]=je(c)),i.xOffset=i.yOffset=0,i.force3D=Tt.force3D,i.renderTransform=i.svg?Za:or?hr:Qa,i.uncache=0,i},je=function(t){return(t=t.split(" "))[0]+" "+t[1]},oi=function(t,e,i){var n=dt(e);return rt(parseFloat(e)+parseFloat(Kt(t,"x",i+"px",n)))+n},Qa=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,hr(t,e)},Jt="0deg",be="0px",te=") ",hr=function(t,e){var i=e||this,n=i.xPercent,r=i.yPercent,a=i.x,s=i.y,o=i.z,c=i.rotation,d=i.rotationY,u=i.rotationX,f=i.skewX,m=i.skewY,_=i.scaleX,h=i.scaleY,g=i.transformPerspective,b=i.force3D,w=i.target,S=i.zOrigin,T="",x=b==="auto"&&t&&t!==1||b===!0;if(S&&(u!==Jt||d!==Jt)){var M=parseFloat(d)*pe,A=Math.sin(M),k=Math.cos(M),C;M=parseFloat(u)*pe,C=Math.cos(M),a=oi(w,a,A*C*-S),s=oi(w,s,-Math.sin(M)*-S),o=oi(w,o,k*C*-S+S)}g!==be&&(T+="perspective("+g+te),(n||r)&&(T+="translate("+n+"%, "+r+"%) "),(x||a!==be||s!==be||o!==be)&&(T+=o!==be||x?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+te),c!==Jt&&(T+="rotate("+c+te),d!==Jt&&(T+="rotateY("+d+te),u!==Jt&&(T+="rotateX("+u+te),(f!==Jt||m!==Jt)&&(T+="skew("+f+", "+m+te),(_!==1||h!==1)&&(T+="scale("+_+", "+h+te),w.style[Z]=T||"translate(0, 0)"},Za=function(t,e){var i=e||this,n=i.xPercent,r=i.yPercent,a=i.x,s=i.y,o=i.rotation,c=i.skewX,d=i.skewY,u=i.scaleX,f=i.scaleY,m=i.target,_=i.xOrigin,h=i.yOrigin,g=i.xOffset,b=i.yOffset,w=i.forceCSS,S=parseFloat(a),T=parseFloat(s),x,M,A,k,C;o=parseFloat(o),c=parseFloat(c),d=parseFloat(d),d&&(d=parseFloat(d),c+=d,o+=d),o||c?(o*=pe,c*=pe,x=Math.cos(o)*u,M=Math.sin(o)*u,A=Math.sin(o-c)*-f,k=Math.cos(o-c)*f,c&&(d*=pe,C=Math.tan(c-d),C=Math.sqrt(1+C*C),A*=C,k*=C,d&&(C=Math.tan(d),C=Math.sqrt(1+C*C),x*=C,M*=C)),x=rt(x),M=rt(M),A=rt(A),k=rt(k)):(x=u,k=f,M=A=0),(S&&!~(a+"").indexOf("px")||T&&!~(s+"").indexOf("px"))&&(S=Kt(m,"x",a,"px"),T=Kt(m,"y",s,"px")),(_||h||g||b)&&(S=rt(S+_-(_*x+h*A)+g),T=rt(T+h-(_*M+h*k)+b)),(n||r)&&(C=m.getBBox(),S=rt(S+n/100*C.width),T=rt(T+r/100*C.height)),C="matrix("+x+","+M+","+A+","+k+","+S+","+T+")",m.setAttribute("transform",C),w&&(m.style[Z]=C)},Ja=function(t,e,i,n,r){var a=360,s=st(r),o=parseFloat(r)*(s&&~r.indexOf("rad")?ee:1),c=o-n,d=n+c+"deg",u,f;return s&&(u=r.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*ln)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*ln)%a-~~(c/a)*a)),t._pt=f=new vt(t._pt,e,i,n,c,La),f.e=d,f.u="deg",t._props.push(i),f},mn=function(t,e){for(var i in e)t[i]=e[i];return t},ts=function(t,e,i){var n=mn({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=i.style,s,o,c,d,u,f,m,_;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[Z]=e,s=Le(i,1),jt(i,Z),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Z],a[Z]=e,s=Le(i,1),a[Z]=c);for(o in Gt)c=n[o],d=s[o],c!==d&&r.indexOf(o)<0&&(m=dt(c),_=dt(d),u=m!==_?Kt(i,o,c,_):parseFloat(c),f=parseFloat(d),t._pt=new vt(t._pt,s,o,u,f-u,xi),t._pt.u=_||0,t._props.push(o));mn(s,n)};gt("padding,margin,Width,Radius",function(l,t){var e="Top",i="Right",n="Bottom",r="Left",a=(t<3?[e,i,n,r]:[e+r,e+i,n+i,n+r]).map(function(s){return t<2?l+s:"border"+s+l});Xe[t>1?"border"+l:l]=function(s,o,c,d,u){var f,m;if(arguments.length<4)return f=a.map(function(_){return Ft(s,_,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(d+"").split(" "),m={},a.forEach(function(_,h){return m[_]=f[h]=f[h]||f[(h-1)/2|0]}),s.init(o,m,u)}});var fr={name:"css",register:Si,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,n,r){var a=this._props,s=t.style,o=i.vars.startAt,c,d,u,f,m,_,h,g,b,w,S,T,x,M,A,k,C;zi||Si(),this.styles=this.styles||sr(t),k=this.styles.props,this.tween=i;for(h in e)if(h!=="autoRound"&&(d=e[h],!(bt[h]&&jn(h,e,i,n,t,r)))){if(m=typeof d,_=Xe[h],m==="function"&&(d=d.call(i,n,t,r),m=typeof d),m==="string"&&~d.indexOf("random(")&&(d=Re(d)),_)_(this,t,h,d,i)&&(A=1);else if(h.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(h)+"").trim(),d+="",Ht.lastIndex=0,Ht.test(c)||(g=dt(c),b=dt(d),b?g!==b&&(c=Kt(t,h,c,b)+b):g&&(d+=g)),this.add(s,"setProperty",c,d,n,r,0,0,h),a.push(h),k.push(h,0,s[h]);else if(m!=="undefined"){if(o&&h in o?(c=typeof o[h]=="function"?o[h].call(i,n,t,r):o[h],st(c)&&~c.indexOf("random(")&&(c=Re(c)),dt(c+"")||c==="auto"||(c+=Tt.units[h]||dt(Ft(t,h))||""),(c+"").charAt(1)==="="&&(c=Ft(t,h))):c=Ft(t,h),f=parseFloat(c),w=m==="string"&&d.charAt(1)==="="&&d.substr(0,2),w&&(d=d.substr(2)),u=parseFloat(d),h in Lt&&(h==="autoAlpha"&&(f===1&&Ft(t,"visibility")==="hidden"&&u&&(f=0),k.push("visibility",0,s.visibility),Ut(this,s,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),h!=="scale"&&h!=="transform"&&(h=Lt[h],~h.indexOf(",")&&(h=h.split(",")[0]))),S=h in Gt,S){if(this.styles.save(h),C=d,m==="string"&&d.substring(0,6)==="var(--"){if(d=St(t,d.substring(4,d.indexOf(")"))),d.substring(0,5)==="calc("){var I=t.style.perspective;t.style.perspective=d,d=St(t,"perspective"),I?t.style.perspective=I:jt(t,"perspective")}u=parseFloat(d)}if(T||(x=t._gsap,x.renderTransform&&!e.parseTransform||Le(t,e.parseTransform),M=e.smoothOrigin!==!1&&x.smooth,T=this._pt=new vt(this._pt,s,Z,0,1,x.renderTransform,x,0,-1),T.dep=1),h==="scale")this._pt=new vt(this._pt,x,"scaleY",x.scaleY,(w?he(x.scaleY,w+u):u)-x.scaleY||0,xi),this._pt.u=0,a.push("scaleY",h),h+="X";else if(h==="transformOrigin"){k.push(_t,0,s[_t]),d=ja(d),x.svg?Ti(t,d,0,M,0,this):(b=parseFloat(d.split(" ")[2])||0,b!==x.zOrigin&&Ut(this,x,"zOrigin",x.zOrigin,b),Ut(this,s,h,je(c),je(d)));continue}else if(h==="svgOrigin"){Ti(t,d,1,M,0,this);continue}else if(h in dr){Ja(this,x,h,f,w?he(f,w+d):d);continue}else if(h==="smoothOrigin"){Ut(this,x,"smooth",x.smooth,d);continue}else if(h==="force3D"){x[h]=d;continue}else if(h==="transform"){ts(this,d,t);continue}}else h in s||(h=ye(h)||h);if(S||(u||u===0)&&(f||f===0)&&!Ia.test(d)&&h in s)g=(c+"").substr((f+"").length),u||(u=0),b=dt(d)||(h in Tt.units?Tt.units[h]:g),g!==b&&(f=Kt(t,h,c,b)),this._pt=new vt(this._pt,S?x:s,h,f,(w?he(f,w+u):u)-f,!S&&(b==="px"||h==="zIndex")&&e.autoRound!==!1?Na:xi),this._pt.u=b||0,S&&C!==d?(this._pt.b=c,this._pt.e=C,this._pt.r=Ba):g!==b&&b!=="%"&&(this._pt.b=c,this._pt.r=Oa);else if(h in s)Xa.call(this,t,h,c,w?w+d:d);else if(h in t)this.add(t,h,c||t[h],w?w+d:d,n,r);else if(h!=="parseTransform"){Pi(h,d);continue}S||(h in s?k.push(h,0,s[h]):typeof t[h]=="function"?k.push(h,2,t[h]()):k.push(h,1,c||t[h])),a.push(h)}}A&&er(this)},render:function(t,e){if(e.tween._time||!Gi())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:Ft,aliases:Lt,getSetter:function(t,e,i){var n=Lt[e];return n&&n.indexOf(",")<0&&(e=n),e in Gt&&e!==_t&&(t._gsap.x||Ft(t,"x"))?i&&on===i?e==="scale"?Wa:Ga:(on=i||{})&&(e==="scale"?Va:qa):t.style&&!ki(t.style[e])?Fa:~e.indexOf("-")?za:Ni(t,e)},core:{_removeProperty:jt,_getMatrix:Vi}};yt.utils.checkPrefix=ye;yt.core.getStyleSaver=sr;(function(l,t,e,i){var n=gt(l+","+t+","+e,function(r){Gt[r]=1});gt(t,function(r){Tt.units[r]="deg",dr[r]=1}),Lt[n[13]]=l+","+t,gt(i,function(r){var a=r.split(":");Lt[a[1]]=n[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");gt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(l){Tt.units[l]="px"});yt.registerPlugin(fr);var Se=yt.registerPlugin(fr)||yt;Se.core.Tween;var qi={};(function l(t,e,i,n){var r=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",s=(function(){if(!t.OffscreenCanvas)return!1;try{var v=new OffscreenCanvas(1,1),p=v.getContext("2d");p.fillRect(0,0,1,1);var E=v.transferToImageBitmap();p.createPattern(E,"no-repeat")}catch{return!1}return!0})();function o(){}function c(v){var p=e.exports.Promise,E=p!==void 0?p:t.Promise;return typeof E=="function"?new E(v):(v(o,o),null)}var d=(function(v,p){return{transform:function(E){if(v)return E;if(p.has(E))return p.get(E);var R=new OffscreenCanvas(E.width,E.height),P=R.getContext("2d");return P.drawImage(E,0,0),p.set(E,R),R},clear:function(){p.clear()}}})(s,new Map),u=(function(){var v=Math.floor(16.666666666666668),p,E,R={},P=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(p=function($){var L=Math.random();return R[L]=requestAnimationFrame(function D(O){P===O||P+v-1<O?(P=O,delete R[L],$()):R[L]=requestAnimationFrame(D)}),L},E=function($){R[$]&&cancelAnimationFrame(R[$])}):(p=function($){return setTimeout($,v)},E=function($){return clearTimeout($)}),{frame:p,cancel:E}})(),f=(function(){var v,p,E={};function R(P){function $(L,D){P.postMessage({options:L||{},callback:D})}P.init=function(D){var O=D.transferControlToOffscreen();P.postMessage({canvas:O},[O])},P.fire=function(D,O,V){if(p)return $(D,null),p;var et=Math.random().toString(36).slice(2);return p=c(function(U){function it(ot){ot.data.callback===et&&(delete E[et],P.removeEventListener("message",it),p=null,d.clear(),V(),U())}P.addEventListener("message",it),$(D,et),E[et]=it.bind(null,{data:{callback:et}})}),p},P.reset=function(){P.postMessage({reset:!0});for(var D in E)E[D](),delete E[D]}}return function(){if(v)return v;if(!i&&r){var P=["var CONFETTI, SIZE = {}, module = {};","("+l.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{v=new Worker(URL.createObjectURL(new Blob([P])))}catch($){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",$),null}R(v)}return v}})(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function _(v,p){return p?p(v):v}function h(v){return v!=null}function g(v,p,E){return _(v&&h(v[p])?v[p]:m[p],E)}function b(v){return v<0?0:Math.floor(v)}function w(v,p){return Math.floor(Math.random()*(p-v))+v}function S(v){return parseInt(v,16)}function T(v){return v.map(x)}function x(v){var p=String(v).replace(/[^0-9a-f]/gi,"");return p.length<6&&(p=p[0]+p[0]+p[1]+p[1]+p[2]+p[2]),{r:S(p.substring(0,2)),g:S(p.substring(2,4)),b:S(p.substring(4,6))}}function M(v){var p=g(v,"origin",Object);return p.x=g(p,"x",Number),p.y=g(p,"y",Number),p}function A(v){v.width=document.documentElement.clientWidth,v.height=document.documentElement.clientHeight}function k(v){var p=v.getBoundingClientRect();v.width=p.width,v.height=p.height}function C(v){var p=document.createElement("canvas");return p.style.position="fixed",p.style.top="0px",p.style.left="0px",p.style.pointerEvents="none",p.style.zIndex=v,p}function I(v,p,E,R,P,$,L,D,O){v.save(),v.translate(p,E),v.rotate($),v.scale(R,P),v.arc(0,0,1,L,D,O),v.restore()}function X(v){var p=v.angle*(Math.PI/180),E=v.spread*(Math.PI/180);return{x:v.x,y:v.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:v.startVelocity*.5+Math.random()*v.startVelocity,angle2D:-p+(.5*E-Math.random()*E),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:v.color,shape:v.shape,tick:0,totalTicks:v.ticks,decay:v.decay,drift:v.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:v.gravity*3,ovalScalar:.6,scalar:v.scalar,flat:v.flat}}function Y(v,p){p.x+=Math.cos(p.angle2D)*p.velocity+p.drift,p.y+=Math.sin(p.angle2D)*p.velocity+p.gravity,p.velocity*=p.decay,p.flat?(p.wobble=0,p.wobbleX=p.x+10*p.scalar,p.wobbleY=p.y+10*p.scalar,p.tiltSin=0,p.tiltCos=0,p.random=1):(p.wobble+=p.wobbleSpeed,p.wobbleX=p.x+10*p.scalar*Math.cos(p.wobble),p.wobbleY=p.y+10*p.scalar*Math.sin(p.wobble),p.tiltAngle+=.1,p.tiltSin=Math.sin(p.tiltAngle),p.tiltCos=Math.cos(p.tiltAngle),p.random=Math.random()+2);var E=p.tick++/p.totalTicks,R=p.x+p.random*p.tiltCos,P=p.y+p.random*p.tiltSin,$=p.wobbleX+p.random*p.tiltCos,L=p.wobbleY+p.random*p.tiltSin;if(v.fillStyle="rgba("+p.color.r+", "+p.color.g+", "+p.color.b+", "+(1-E)+")",v.beginPath(),a&&p.shape.type==="path"&&typeof p.shape.path=="string"&&Array.isArray(p.shape.matrix))v.fill(j(p.shape.path,p.shape.matrix,p.x,p.y,Math.abs($-R)*.1,Math.abs(L-P)*.1,Math.PI/10*p.wobble));else if(p.shape.type==="bitmap"){var D=Math.PI/10*p.wobble,O=Math.abs($-R)*.1,V=Math.abs(L-P)*.1,et=p.shape.bitmap.width*p.scalar,U=p.shape.bitmap.height*p.scalar,it=new DOMMatrix([Math.cos(D)*O,Math.sin(D)*O,-Math.sin(D)*V,Math.cos(D)*V,p.x,p.y]);it.multiplySelf(new DOMMatrix(p.shape.matrix));var ot=v.createPattern(d.transform(p.shape.bitmap),"no-repeat");ot.setTransform(it),v.globalAlpha=1-E,v.fillStyle=ot,v.fillRect(p.x-et/2,p.y-U/2,et,U),v.globalAlpha=1}else if(p.shape==="circle")v.ellipse?v.ellipse(p.x,p.y,Math.abs($-R)*p.ovalScalar,Math.abs(L-P)*p.ovalScalar,Math.PI/10*p.wobble,0,2*Math.PI):I(v,p.x,p.y,Math.abs($-R)*p.ovalScalar,Math.abs(L-P)*p.ovalScalar,Math.PI/10*p.wobble,0,2*Math.PI);else if(p.shape==="star")for(var F=Math.PI/2*3,ft=4*p.scalar,Pt=8*p.scalar,Rt=p.x,Bt=p.y,Zt=5,Dt=Math.PI/Zt;Zt--;)Rt=p.x+Math.cos(F)*Pt,Bt=p.y+Math.sin(F)*Pt,v.lineTo(Rt,Bt),F+=Dt,Rt=p.x+Math.cos(F)*ft,Bt=p.y+Math.sin(F)*ft,v.lineTo(Rt,Bt),F+=Dt;else v.moveTo(Math.floor(p.x),Math.floor(p.y)),v.lineTo(Math.floor(p.wobbleX),Math.floor(P)),v.lineTo(Math.floor($),Math.floor(L)),v.lineTo(Math.floor(R),Math.floor(p.wobbleY));return v.closePath(),v.fill(),p.tick<p.totalTicks}function W(v,p,E,R,P){var $=p.slice(),L=v.getContext("2d"),D,O,V=c(function(et){function U(){D=O=null,L.clearRect(0,0,R.width,R.height),d.clear(),P(),et()}function it(){i&&!(R.width===n.width&&R.height===n.height)&&(R.width=v.width=n.width,R.height=v.height=n.height),!R.width&&!R.height&&(E(v),R.width=v.width,R.height=v.height),L.clearRect(0,0,R.width,R.height),$=$.filter(function(ot){return Y(L,ot)}),$.length?D=u.frame(it):U()}D=u.frame(it),O=U});return{addFettis:function(et){return $=$.concat(et),V},canvas:v,promise:V,reset:function(){D&&u.cancel(D),O&&O()}}}function q(v,p){var E=!v,R=!!g(p||{},"resize"),P=!1,$=g(p,"disableForReducedMotion",Boolean),L=r&&!!g(p||{},"useWorker"),D=L?f():null,O=E?A:k,V=v&&D?!!v.__confetti_initialized:!1,et=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,U;function it(F,ft,Pt){for(var Rt=g(F,"particleCount",b),Bt=g(F,"angle",Number),Zt=g(F,"spread",Number),Dt=g(F,"startVelocity",Number),pr=g(F,"decay",Number),mr=g(F,"gravity",Number),gr=g(F,"drift",Number),Ui=g(F,"colors",T),vr=g(F,"ticks",Number),Yi=g(F,"shapes"),_r=g(F,"scalar"),yr=!!g(F,"flat"),Hi=M(F),Xi=Rt,Je=[],br=v.width*Hi.x,xr=v.height*Hi.y;Xi--;)Je.push(X({x:br,y:xr,angle:Bt,spread:Zt,startVelocity:Dt,color:Ui[Xi%Ui.length],shape:Yi[w(0,Yi.length)],ticks:vr,decay:pr,gravity:mr,drift:gr,scalar:_r,flat:yr}));return U?U.addFettis(Je):(U=W(v,Je,O,ft,Pt),U.promise)}function ot(F){var ft=$||g(F,"disableForReducedMotion",Boolean),Pt=g(F,"zIndex",Number);if(ft&&et)return c(function(Dt){Dt()});E&&U?v=U.canvas:E&&!v&&(v=C(Pt),document.body.appendChild(v)),R&&!V&&O(v);var Rt={width:v.width,height:v.height};D&&!V&&D.init(v),V=!0,D&&(v.__confetti_initialized=!0);function Bt(){if(D){var Dt={getBoundingClientRect:function(){if(!E)return v.getBoundingClientRect()}};O(Dt),D.postMessage({resize:{width:Dt.width,height:Dt.height}});return}Rt.width=Rt.height=null}function Zt(){U=null,R&&(P=!1,t.removeEventListener("resize",Bt)),E&&v&&(document.body.contains(v)&&document.body.removeChild(v),v=null,V=!1)}return R&&!P&&(P=!0,t.addEventListener("resize",Bt,!1)),D?D.fire(F,Rt,Zt):it(F,Rt,Zt)}return ot.reset=function(){D&&D.reset(),U&&U.reset()},ot}var J;function tt(){return J||(J=q(null,{useWorker:!0,resize:!0})),J}function j(v,p,E,R,P,$,L){var D=new Path2D(v),O=new Path2D;O.addPath(D,new DOMMatrix(p));var V=new Path2D;return V.addPath(O,new DOMMatrix([Math.cos(L)*P,Math.sin(L)*P,-Math.sin(L)*$,Math.cos(L)*$,E,R])),V}function ht(v){if(!a)throw new Error("path confetti are not supported in this browser");var p,E;typeof v=="string"?p=v:(p=v.path,E=v.matrix);var R=new Path2D(p),P=document.createElement("canvas"),$=P.getContext("2d");if(!E){for(var L=1e3,D=L,O=L,V=0,et=0,U,it,ot=0;ot<L;ot+=2)for(var F=0;F<L;F+=2)$.isPointInPath(R,ot,F,"nonzero")&&(D=Math.min(D,ot),O=Math.min(O,F),V=Math.max(V,ot),et=Math.max(et,F));U=V-D,it=et-O;var ft=10,Pt=Math.min(ft/U,ft/it);E=[Pt,0,0,Pt,-Math.round(U/2+D)*Pt,-Math.round(it/2+O)*Pt]}return{type:"path",path:p,matrix:E}}function Wt(v){var p,E=1,R="#000000",P='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof v=="string"?p=v:(p=v.text,E="scalar"in v?v.scalar:E,P="fontFamily"in v?v.fontFamily:P,R="color"in v?v.color:R);var $=10*E,L=""+$+"px "+P,D=new OffscreenCanvas($,$),O=D.getContext("2d");O.font=L;var V=O.measureText(p),et=Math.ceil(V.actualBoundingBoxRight+V.actualBoundingBoxLeft),U=Math.ceil(V.actualBoundingBoxAscent+V.actualBoundingBoxDescent),it=2,ot=V.actualBoundingBoxLeft+it,F=V.actualBoundingBoxAscent+it;et+=it+it,U+=it+it,D=new OffscreenCanvas(et,U),O=D.getContext("2d"),O.font=L,O.fillStyle=R,O.fillText(p,ot,F);var ft=1/E;return{type:"bitmap",bitmap:D.transferToImageBitmap(),matrix:[ft,0,0,ft,-et*ft/2,-U*ft/2]}}e.exports=function(){return tt().apply(this,arguments)},e.exports.reset=function(){tt().reset()},e.exports.create=q,e.exports.shapeFromPath=ht,e.exports.shapeFromText=Wt})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),qi,!1);const li=qi.exports;qi.exports.create;const ie=class ie{constructor(){B(this,"observer",null)}static getInstance(){return ie.instance||(ie.instance=new ie),ie.instance}init(){this.init3DTilt(),this.initScrollReveal(),this.initAnimatedCounters(),this.initMagneticButtons(),this.initHeroEntrance()}initHeroEntrance(){const t=document.querySelector(".hero-badge"),e=document.querySelector(".hero-title"),i=document.querySelector(".hero-lead"),n=document.querySelector(".hero-actions"),r=document.querySelector(".hero-stats"),a=Se.timeline({defaults:{ease:"power3.out"}});t&&a.fromTo(t,{y:-20,opacity:0,scale:.9},{y:0,opacity:1,scale:1,duration:.6}),e&&a.fromTo(e,{y:30,opacity:0},{y:0,opacity:1,duration:.8},"-=0.3"),i&&a.fromTo(i,{y:20,opacity:0},{y:0,opacity:1,duration:.6},"-=0.4"),n&&a.fromTo(n,{y:20,opacity:0},{y:0,opacity:1,duration:.6},"-=0.3"),r&&a.fromTo(r,{y:30,opacity:0},{y:0,opacity:1,duration:.7,stagger:.1},"-=0.3")}init3DTilt(){document.querySelectorAll(".retreat-card, .config-preview-card, .stargazing-hud, .weather-card, .bortle-card, .pricing-summary-card, .spec-card").forEach(e=>{e.classList.add("tilt-card"),e.addEventListener("mousemove",i=>{const n=e.getBoundingClientRect(),r=i.clientX-n.left,a=i.clientY-n.top,s=n.width/2,o=n.height/2,c=(r-s)/s,u=-((a-o)/o)*7,f=c*7;e.style.transform=`perspective(1000px) rotateX(${u.toFixed(2)}deg) rotateY(${f.toFixed(2)}deg) translateY(-6px) scale3d(1.02, 1.02, 1.02)`,e.style.setProperty("--spot-x",`${r}px`),e.style.setProperty("--spot-y",`${a}px`)}),e.addEventListener("mouseleave",()=>{e.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale3d(1, 1, 1)",e.style.transition="transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)"}),e.addEventListener("mouseenter",()=>{e.style.transition="none"})})}initScrollReveal(){const t=document.querySelectorAll(".section-header, .retreats-grid, .configurator-grid, .weather-grid, .constellation-picker, .stargazing-hud");this.observer&&this.observer.disconnect(),this.observer=new IntersectionObserver(e=>{e.forEach(i=>{var n;if(i.isIntersecting){const r=i.target;r.classList.add("is-revealed"),Se.fromTo(r,{y:40,opacity:0},{y:0,opacity:1,duration:.8,ease:"power3.out",overwrite:"auto"});const a=r.querySelectorAll(".retreat-card, .weather-card, .constellation-chip, .bortle-card");a.length>0&&Se.fromTo(a,{y:30,opacity:0,scale:.96},{y:0,opacity:1,scale:1,duration:.6,stagger:.08,ease:"power2.out",delay:.1}),(n=this.observer)==null||n.unobserve(r)}})},{threshold:.15}),t.forEach(e=>{var i;e.style.opacity="0",e.style.transform="translateY(30px)",(i=this.observer)==null||i.observe(e)})}initAnimatedCounters(){const t=document.querySelectorAll("[data-counter]"),e=new IntersectionObserver(i=>{i.forEach(n=>{if(n.isIntersecting){const r=n.target,a=parseFloat(r.getAttribute("data-counter")||"0"),s=r.getAttribute("data-suffix")||"",o=a%1!==0,c={val:0};Se.to(c,{val:a,duration:1.8,ease:"power2.out",onUpdate:()=>{r.textContent=o?`${c.val.toFixed(1)}${s}`:`${Math.round(c.val)}${s}`}}),e.unobserve(r)}})},{threshold:.3});t.forEach(i=>e.observe(i))}initMagneticButtons(){document.querySelectorAll(".btn-gold-luxury, .btn-cyan-starlight, .theme-toggle-btn, .lang-toggle-btn").forEach(e=>{e.addEventListener("mousemove",i=>{const n=e.getBoundingClientRect(),r=i.clientX-n.left-n.width/2,a=i.clientY-n.top-n.height/2;e.style.transform=`translate(${r*.25}px, ${a*.25}px) scale(1.04)`,e.style.transition="transform 0.1s ease-out"}),e.addEventListener("mouseleave",()=>{e.style.transform="translate(0px, 0px) scale(1)",e.style.transition="transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)"})})}triggerGoldenConfetti(){li({particleCount:70,angle:60,spread:65,origin:{x:.1,y:.7},colors:["#f59e0b","#d97706","#38bdf8","#fef08a","#ffffff"]}),li({particleCount:70,angle:120,spread:65,origin:{x:.9,y:.7},colors:["#f59e0b","#d97706","#38bdf8","#fef08a","#ffffff"]}),setTimeout(()=>{li({particleCount:90,spread:100,origin:{y:.5},colors:["#ffd700","#38bdf8","#ffffff","#ea580c"]})},250)}};B(ie,"instance");let Ai=ie;const ci=Ai.getInstance();class es{constructor(){B(this,"canvasEngine",null);B(this,"currentTerrainFilter","all");B(this,"currentLightingMode","night");B(this,"activeWeatherRetreatId","alula-ashar");B(this,"configSelection",{retreatId:"alula-ashar",unitType:"dome",selectedAmenities:["telescope","firepit"],checkIn:this.getDefaultCheckInDate(),checkOut:this.getDefaultCheckOutDate(),guestsCount:2});B(this,"currentGuestDetails",{fullName:"أ. طارق ابوعشي",phone:"+966 50 123 4567",email:"tareq.aboushi@gmail.com",notes:""});this.initApp()}getDefaultCheckInDate(){const t=new Date;return t.setDate(t.getDate()+3),t.toISOString().split("T")[0]}getDefaultCheckOutDate(){const t=new Date;return t.setDate(t.getDate()+6),t.toISOString().split("T")[0]}initApp(){this.applyThemeFromStorage(),this.renderAllViews(),this.setupGlobalControls(),this.setupCelestialObservatory(),this.setupRetreatsEvents(),this.setupConfiguratorEvents(),this.setupWeatherEvents(),ci.init(),y.onLanguageChange(()=>{this.renderAllViews(),this.updateNavbarLabels(),this.setupCelestialObservatory(),this.setupRetreatsEvents(),this.setupConfiguratorEvents(),this.setupWeatherEvents(),ci.init()})}renderAllViews(){const t=document.getElementById("app");t&&(t.innerHTML=`
      ${Er()}
      ${Mr()}
      ${Pr()}
      ${Rr(this.configSelection)}
      ${Ki(this.activeWeatherRetreatId)}
    `,this.updateNavbarLabels())}updateNavbarLabels(){const t=y.isAr(),e=(i,n)=>{const r=document.getElementById(i);r&&(r.textContent=n)};e("nav-brand-name",y.t("brandName")),e("nav-brand-tagline",y.t("brandTagline")),e("nav-link-home",y.t("navHome")),e("nav-link-observatory",y.t("navObservatory")),e("nav-link-retreats",y.t("navRetreats")),e("nav-link-configurator",y.t("navConfigurator")),e("nav-link-weather",y.t("navWeather")),e("nav-btn-book",y.t("navBookNow")),e("lang-text",t?"English":"العربية"),e("footer-dest-title",t?"الملاذات الصحراوية":"Desert Sanctuaries"),e("footer-astro-title",t?"مرصد النجوم والفلك":"Astro Observatory"),e("footer-desc",y.t("footerBrandDesc")),e("footer-copy",y.t("copyright")+" • "+y.t("vision2030"))}setupGlobalControls(){const t=document.getElementById("btn-audio-toggle"),e=document.getElementById("audio-icon");t==null||t.addEventListener("click",async()=>{const r=await kr.toggle();t&&t.classList.toggle("active",r),e&&(e.textContent=r?"🔊":"🔥")});const i=document.getElementById("btn-theme-toggle");i==null||i.addEventListener("click",()=>{const a=(document.documentElement.getAttribute("data-theme")||"dark")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",a),localStorage.setItem("rawasi_theme",a),this.updateThemeIcon(a)});const n=document.getElementById("btn-lang-toggle");n==null||n.addEventListener("click",()=>{y.toggleLang()})}applyThemeFromStorage(){const t=localStorage.getItem("rawasi_theme")||"dark";document.documentElement.setAttribute("data-theme",t),this.updateThemeIcon(t)}updateThemeIcon(t){const e=document.getElementById("theme-icon");e&&(e.textContent=t==="dark"?"🌙":"☀️")}setupCelestialObservatory(){const t=document.getElementById("celestial-canvas");if(!t)return;this.canvasEngine&&this.canvasEngine.destroy(),this.canvasEngine=new Ar(t),this.canvasEngine.setLanguage(y.isAr()),this.updateConstellationInfo("orion");const e=document.getElementById("constellation-tabs");e==null||e.addEventListener("click",r=>{var o;const a=r.target.closest(".tab-btn");if(!a)return;const s=a.getAttribute("data-constellation-id");s&&(e.querySelectorAll(".tab-btn").forEach(c=>c.classList.remove("active")),a.classList.add("active"),(o=this.canvasEngine)==null||o.setActiveConstellation(s),this.updateConstellationInfo(s))});const i=document.getElementById("bortle-slider"),n=document.getElementById("bortle-display-text");i==null||i.addEventListener("input",()=>{var a;const r=parseInt(i.value,10);(a=this.canvasEngine)==null||a.setBortleScale(r),n&&(r===1?n.textContent=y.t("bortle1"):r===2?n.textContent=y.t("bortle2"):r===3?n.textContent=y.t("bortle3"):n.textContent=y.t("bortle4"))}),this.canvasEngine.onStarSelect((r,a)=>{const s=y.isAr(),o=document.getElementById("constellation-season"),c=document.getElementById("constellation-name"),d=document.getElementById("constellation-description");o&&(o.textContent=`✦ ${s?"نجم مرصود في":"Star observed in"} ${s?a.nameAr:a.nameEn}`),c&&(c.textContent=`${s?r.nameAr:r.nameEn} (Mag ${r.magnitude})`),d&&(d.textContent=s?`النجم: ${r.nameAr} • القدر الظاهري: ${r.magnitude} • يقع في قلب ${a.nameAr}. يُعد من ألمع العلامات الإرشادية لرحالة الصحراء.`:`Star: ${r.nameEn} • Apparent Magnitude: ${r.magnitude} • Anchors ${a.nameEn}. Used for desert orientation.`)})}updateConstellationInfo(t){const e=y.isAr(),i=Te.find(o=>o.id===t);if(!i)return;const n=document.getElementById("constellation-season"),r=document.getElementById("constellation-name"),a=document.getElementById("constellation-tradition"),s=document.getElementById("constellation-description");n&&(n.textContent=e?i.seasonAr:i.seasonEn),r&&(r.textContent=e?i.nameAr:i.nameEn),a&&(a.textContent=e?i.arabicTraditionAr:i.arabicTraditionEn),s&&(s.textContent=e?i.loreAr:i.loreEn)}setupRetreatsEvents(){const t=document.getElementById("terrain-filters");t==null||t.addEventListener("click",r=>{const a=r.target.closest(".filter-btn");if(!a)return;const s=a.getAttribute("data-terrain");s&&(this.currentTerrainFilter=s,t.querySelectorAll(".filter-btn").forEach(o=>o.classList.remove("active")),a.classList.add("active"),this.filterRetreatsDisplay())});const e=document.getElementById("btn-mode-day"),i=document.getElementById("btn-mode-night");e==null||e.addEventListener("click",()=>{this.currentLightingMode="day",e.classList.add("active"),i==null||i.classList.remove("active"),this.filterRetreatsDisplay()}),i==null||i.addEventListener("click",()=>{this.currentLightingMode="night",i.classList.add("active"),e==null||e.classList.remove("active"),this.filterRetreatsDisplay()});const n=document.getElementById("retreats-grid");n==null||n.addEventListener("click",r=>{var o;const a=r.target.closest(".btn-book-retreat");if(a){const c=a.getAttribute("data-retreat-id");c&&(this.configSelection.retreatId=c,this.openBookingModal());return}const s=r.target.closest(".btn-configure-retreat");if(s){const c=s.getAttribute("data-retreat-id");c&&(this.configSelection.retreatId=c,this.syncConfiguratorUI(),(o=document.getElementById("configurator"))==null||o.scrollIntoView({behavior:"smooth"}))}})}filterRetreatsDisplay(){const t=document.getElementById("retreats-grid");if(!t)return;const e=this.currentTerrainFilter==="all"?lt:lt.filter(i=>i.terrain===this.currentTerrainFilter);t.innerHTML=e.map(i=>gn(i,y.isAr(),this.currentLightingMode)).join("")}setupConfiguratorEvents(){const t=document.getElementById("retreat-pill-selector");t==null||t.addEventListener("click",o=>{const c=o.target.closest(".retreat-select-btn");if(!c)return;const d=c.getAttribute("data-retreat-id");d&&(this.configSelection.retreatId=d,t.querySelectorAll(".retreat-select-btn").forEach(u=>u.classList.remove("active")),c.classList.add("active"),this.syncConfiguratorUI())});const e=document.getElementById("unit-types-grid");e==null||e.addEventListener("click",o=>{const c=o.target.closest(".unit-type-option");if(!c)return;const d=c.getAttribute("data-unit");d&&(this.configSelection.unitType=d,e.querySelectorAll(".unit-type-option").forEach(u=>u.classList.remove("selected")),c.classList.add("selected"),this.syncConfiguratorUI())});const i=document.getElementById("amenities-checklist");i==null||i.addEventListener("change",o=>{var d;const c=o.target;if(c&&c.classList.contains("amenity-input")){const u=c.value;c.checked?this.configSelection.selectedAmenities.includes(u)||this.configSelection.selectedAmenities.push(u):this.configSelection.selectedAmenities=this.configSelection.selectedAmenities.filter(f=>f!==u),(d=c.closest(".amenity-checkbox-card"))==null||d.classList.toggle("active",c.checked),this.syncConfiguratorUI()}});const n=document.getElementById("input-check-in"),r=document.getElementById("input-check-out");n==null||n.addEventListener("change",()=>{this.configSelection.checkIn=n.value,this.syncConfiguratorUI()}),r==null||r.addEventListener("change",()=>{this.configSelection.checkOut=r.value,this.syncConfiguratorUI()});const a=document.getElementById("input-guests");a==null||a.addEventListener("change",()=>{this.configSelection.guestsCount=parseInt(a.value,10)||2,this.syncConfiguratorUI()});const s=document.getElementById("btn-proceed-booking");s==null||s.addEventListener("click",()=>{this.openBookingModal()})}syncConfiguratorUI(){const t=y.isAr(),e=lt.find(o=>o.id===this.configSelection.retreatId)||lt[0],i=di.computePrice(e.pricePerNight,this.configSelection),n=document.getElementById("price-breakdown-container");n&&(n.innerHTML=vn(i,t));const r=document.getElementById("preview-backdrop");r&&(r.style.backgroundImage=`url('${e.imageNight}')`);const a=document.getElementById("unit-3d-model");a&&(this.configSelection.unitType==="sadu"?a.innerHTML=`
          <div class="sadu-tent-graphic">
            <div class="sadu-roof"></div>
            <div class="sadu-walls"><div class="sadu-pattern-stripe"></div></div>
          </div>
        `:this.configSelection.unitType==="airstream"?a.innerHTML=`
          <div class="airstream-graphic">
            <div class="airstream-body">
              <div class="airstream-window w1"></div>
              <div class="airstream-window w2"></div>
            </div>
          </div>
        `:a.innerHTML=`
          <div class="geodesic-dome-graphic">
            <div class="dome-shell">
              <div class="dome-grid-overlay"></div>
              <div class="dome-glow-interior"></div>
            </div>
            <div class="dome-deck"></div>
          </div>
        `);const s=document.getElementById("preview-amenities-overlay");s&&(s.innerHTML=this.configSelection.selectedAmenities.map(o=>{const c=Ge.find(d=>d.id===o);return c?`<span class="amenity-bubble" title="${t?c.nameAr:c.nameEn}">${c.icon}</span>`:""}).join(""))}setupWeatherEvents(){const t=document.getElementById("weather-retreat-tabs");t==null||t.addEventListener("click",i=>{const n=i.target.closest(".weather-tab-btn");if(!n)return;const r=n.getAttribute("data-retreat-id");if(r){this.activeWeatherRetreatId=r;const a=document.getElementById("weather");if(a){const s=document.createElement("div");s.innerHTML=Ki(this.activeWeatherRetreatId);const o=s.querySelector("#weather");o&&(a.replaceWith(o),this.setupWeatherEvents())}}});const e=document.getElementById("packing-checklist");e==null||e.addEventListener("change",i=>{const n=i.target;if(n){const r=n.closest(".packing-item-row");r&&r.classList.toggle("checked",n.checked)}})}openBookingModal(){const t=document.getElementById("modals-root");if(!t)return;const e=lt.find(c=>c.id===this.configSelection.retreatId)||lt[0],i=di.computePrice(e.pricePerNight,this.configSelection);t.innerHTML=$r(this.configSelection,i);const n=document.getElementById("btn-close-booking-modal"),r=document.getElementById("btn-cancel-modal"),a=document.getElementById("booking-modal-backdrop"),s=()=>{t.innerHTML=""};n==null||n.addEventListener("click",s),r==null||r.addEventListener("click",s),a==null||a.addEventListener("click",c=>{c.target===a&&s()});const o=document.getElementById("booking-form");o==null||o.addEventListener("submit",c=>{c.preventDefault();const d=document.getElementById("guest-name"),u=document.getElementById("guest-phone"),f=document.getElementById("guest-email"),m=document.getElementById("guest-notes");this.currentGuestDetails={fullName:(d==null?void 0:d.value)||"Tareq Aboushi",phone:(u==null?void 0:u.value)||"+966 50 123 4567",email:(f==null?void 0:f.value)||"tareq.aboushi@gmail.com",notes:(m==null?void 0:m.value)||""},this.openBoardingPassModal(i)})}openBoardingPassModal(t){const e=document.getElementById("modals-root");if(!e)return;e.innerHTML=Ir(this.currentGuestDetails,this.configSelection,t),ci.triggerGoldenConfetti();const i=document.getElementById("btn-print-pass");i==null||i.addEventListener("click",()=>{window.print()});const n=document.getElementById("btn-close-pass-modal"),r=document.getElementById("boarding-pass-backdrop"),a=()=>{e.innerHTML=""};n==null||n.addEventListener("click",a),r==null||r.addEventListener("click",s=>{s.target===r&&a()})}}window.addEventListener("DOMContentLoaded",()=>{new es});
