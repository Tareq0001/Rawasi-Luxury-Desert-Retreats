var P=Object.defineProperty;var L=(o,e,t)=>e in o?P(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var p=(o,e,t)=>L(o,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const E={ar:{siteTitle:"رَواسي | ملاذات التخييم الصحراوي الفاخر ورصد النجوم",siteSubtitle:"بين هيبة التراث وعظمة السماء الكونية",brandName:"رَواسي",brandTagline:"منتجعات التخييم الفاخر والمراصد الفلكية",navHome:"الرئيسية",navObservatory:"مرصد النجوم الفلكي",navRetreats:"أطلس الملاذات",navConfigurator:"استوديو التخصيص",navWeather:"حاسبة الطقس والبرودة",navBookNow:"احجز إقامتك الفاخرة",themeToggle:"تغيير السمة",soundToggle:"أصوات السمر والصحراء",soundPlaying:"صوت السمر يعمل",soundMuted:"تشغيل صوت السمر",heroBadge:"سماء حالكة فئة 1 • محميات النجوم الطبيعية في المملكة",heroTitlePart1:"تحت سموات الجزيرة الأسطورية،",heroTitlePart2:"أعِد اكتشاف النجوم من قبتك الزجاجية الفاخرة.",heroSubtitle:"تجربة ضيافة استثنائية من فئة الست نجوم في أعماق العلا، قمم عسير، رمال حِسمى الحمراء، وكثبان البحر الأحمر العذراء. انعم بسكينة الليل الصحراوي وأسرار الفلكيين الأوائل.",heroCtaExplore:"استكشف المرصد الفلكي",heroCtaCustom:"صمّم خيمتك الذكية",heroStatBortle:"مقياس بورتل 1",heroStatBortleDesc:"ظلام كوني نقي خالي من التلوث الضوئي",heroStatAlt:"أعلى قمة 3,015 م",heroStatAltDesc:"رصد النجوم فوق بحر الغيوم في عسير",heroStatHeritage:"منازل قمرية عريقة",heroStatHeritageDesc:"تراث فلكي عربي يمتد لآلاف السنين",celestialTitle:"مرصد النجوم وسماء الليل التفاعلي",celestialSubtitle:"انقر على النجوم والكوكبات للتعرف على تراث الفلكيين العرب وأسماء النجوم الأصيلة في سماء السعودية",bortleScaleLabel:"محاكي التلوث الضوئي (مقياس بورتل):",bortle1:"فئة 1: العلا وحسمى (ظلام نقي تام)",bortle2:"فئة 2: مرتفعات السودة والبحر الأحمر",bortle3:"فئة 3: ضواحي القرى الهادئة",bortle4:"فئة 4: المناطق شبه الحضرية",constellationTabOrion:"الجَبّار (الجوزاء)",constellationTabUrsa:"الدب الأكبر (بنات نعش)",constellationTabCass:"ذات الكرسي (الكف الخضيب)",constellationTabPleiades:"الثريا (الشقيقات السبع)",moonWidgetTitle:"حالة القمر وفرص التصوير الفلكي الليلة",illumination:"نسبة الإضاءة:",astroRating:"مؤشر جودة التصوير الفلكي:",planetsRadarTitle:"رادار الكواكب المرئية الليلة",interactivityTip:"حرك المؤشر للتفاعل مع عمق النجوم، وانقر على أي نجم لاستعراض أسراره الفلكية والتراثية.",retreatsTitle:"أطلس الملاذات والمنتجعات الصحراوية",retreatsSubtitle:"أربع وجهات أيقونية متفردة في ربوع المملكة، صُممت كل منها بخصوصية تامة لتمنحك ملاذاً لا يُنسى",filterAll:"كافة الوجهات",filterCanyon:"أخاديد الحجر الرملي",filterMountain:"قمم السحاب الجبلية",filterCrimson:"رمال حِسمى الحمراء",filterCoastal:"كثبان الشاطئ العذراء",toggleDayNight:"تبديل المشهد (نهار / ليل)",viewDay:"مشهد النهار الذهبي",viewNight:"مشهد الليل والنجوم",perNightSAR:"ر.س / الليلة",amenitiesIncluded:"مزايا الملاذ الحصرية:",reserveNowBtn:"احجز هذا الملاذ الآن",customizeThisRetreat:"تخصيص في الاستوديو",configuratorTitle:"استوديو تخصيص الخيمة والكبينة الذكية",configuratorSubtitle:"اختر نوع المسكن الفاخر، وأضف لمساتك وتجهيزات الرصد المفضلة لمشاهدة التكلفة الفورية وحجز الإقامة",chooseRetreat:"1. اختر الوجهة الصحراوية:",chooseUnitType:"2. نوع المسكن والنمط المعماري:",unitDome:"قبة جيوديسية بانورامية 360°",unitDomeDesc:"زجاج مزدوج عازل للحرارة مع سقف شفاف بالكامل لرؤية المجرة",unitSadu:"سرادق السدو الملكي الفاخر",unitSaduDesc:"خيمة تراثية منسوجة يدوياً بنقوش السدو مع صالون ملكي خاص",unitAirstream:"جناح إيرستريم الفضي الفاخر",unitAirstreamDesc:"كرفان أمريكي كلاسيكي مخصص بتصميم فاخر وتراس خارجي خاص",chooseAmenities:"3. التجهيزات الإضافية والخدمات الفاخرة:",bookingSummaryTitle:"ملخص الباقة والتسعير الفوري",datesSelection:"التواريخ وعدد الضيوف:",checkInDate:"تاريخ الوصول (Check-in):",checkOutDate:"تاريخ المغادرة (Check-out):",guestsCount:"عدد الضيوف:",nightsCount:"عدد الليالي:",staySubtotal:"تكلفة الإقامة:",amenitiesSubtotal:"الخدمات والتجهيزات المختارة:",vatLabel:"ضريبة القيمة المضافة (15% VAT):",totalSARLabel:"المجموع الإجمالي النهائي:",proceedBookingBtn:"المتابعة وإصدار التذكرة الفاخرة",weatherTitle:"حاسبة الطقس وبرودة ليل الصحراء",weatherSubtitle:"تعرف على الفرق الحراري الكبير بين النهار والليل واستعد بأفضل التجهيزات لرحلة لا تشوبها شائبة",selectLocationWeather:"اختر الوجهة لمراجعة الطقس:",dayTemp:"حرارة النهار العظمى",nightTemp:"حرارة الليل الصغرى",windChill:"الحرارة المحسوسة مع هبوب الرياح",packingListTitle:"حقيبة التجهيزات الموصى بها لملاذك:",packEssential:"ضروري وأساسي",packRecommended:"موصى به للرصد",modalTitle:"تأكيد الحجز الفاخر",guestDetailsTitle:"بيانات الضيف الأساسية",fullName:"الاسم الكامل:",phone:"رقم الجوال:",email:"البريد الإلكتروني:",specialNotes:"طلبات خاصة أو حمية غذائية:",confirmAndGeneratePass:"تأكيد الحجز وإصدار التذكرة الذهبية",boardingPassTitle:"تذكرة الإقامة وتصريح الرصد الفلكي الصحراوي",boardingPassSub:"RAWASI LUXURY DESERT BOARDING PASS & ASTRO-PERMIT",passengerName:"اسم الضيف:",bookingRefLabel:"رقم الحجز المرجعي (PNR):",destinationLabel:"الوجهة والملاذ:",checkInLabel:"تاريخ الوصول:",checkOutLabel:"تاريخ المغادرة:",gpsLabel:"إحداثيات الموقع (GPS):",bortleRatingLabel:"تصنيف نقاء السماء:",unitTypeLabel:"نوع الوحدة:",totalPaidLabel:"إجمالي الحجز (شامل 15% ضريبة):",qrCodeSubtitle:"امسح الرمز لتفعيل الإحداثيات الوعرة واستلام مفتاح القبة الذكية",printBoardingPass:"طباعة التذكرة الفاخرة (PDF / ورقي)",closeModal:"إغلاق",footerBrandDesc:"رَواسي هي المنصة الرائدة في المملكة العربية السعودية للتخييم الصحراوي البيئي الفاخر ومحميات السماء المظلمة، نجمع بين عراقة الضيافة السعودية وأحدث تقنيات الرصد الفلكي المستدام.",copyright:"جميع الحقوق محفوظة © رَواسي للتخييم الفاخر والمراصد الفلكية 2026",vision2030:"صُممت بتناغم تام مع رؤية السعودية 2030 لتعزيز السياحة البيئية الفاخرة"},en:{siteTitle:"RAWASI | Luxury Desert Retreats & Stargazing Sanctuaries",siteSubtitle:"Where Ancient Arabian Heritage Meets Celestial Wonders",brandName:"RAWASI",brandTagline:"Luxury Desert Glamping & Stargazing Sanctuaries",navHome:"Home",navObservatory:"Celestial Observatory",navRetreats:"Retreats Atlas",navConfigurator:"Custom Studio",navWeather:"Night Chill Advisor",navBookNow:"Book Your Sanctuary",themeToggle:"Switch Theme",soundToggle:"Campfire & Wind Audio",soundPlaying:"Campfire Ambiance On",soundMuted:"Play Desert Campfire Sound",heroBadge:"Bortle Class 1 Skies • Pristine Dark-Sky Preserves of Saudi Arabia",heroTitlePart1:"Under Mythic Arabian Skies,",heroTitlePart2:"Rediscover the Cosmos from Your Luxury Panoramic Dome.",heroSubtitle:"An ultra-luxury six-star wilderness journey into Ashar Valley AlUla, Asir Cloud Peaks, Hisma Crimson Sands, and pristine Red Sea Dunes. Savor the stillness of desert nights and secrets of ancient astronomers.",heroCtaExplore:"Explore Celestial Map",heroCtaCustom:"Customize Your Dome",heroStatBortle:"Bortle Class 1",heroStatBortleDesc:"Zero light pollution celestial darkness",heroStatAlt:"Peak 3,015 m",heroStatAltDesc:"Stargazing above cloud oceans in Asir",heroStatHeritage:"Millennia of Star Lore",heroStatHeritageDesc:"Ancient Arabian celestial navigation",celestialTitle:"Interactive Celestial Stargazing & Dark Sky Map",celestialSubtitle:"Click stars and constellations to discover ancient Arabic star names and lore in Saudi Arabia's darkest skies",bortleScaleLabel:"Light Pollution Simulator (Bortle Dark-Sky Scale):",bortle1:"Class 1: AlUla & Hisma (Pure Pristine Darkness)",bortle2:"Class 2: Al Souda Peaks & Red Sea Dunes",bortle3:"Class 3: Rural Quiet Oasis",bortle4:"Class 4: Semi-Suburban Horizon",constellationTabOrion:"Orion (Al-Jawzaa)",constellationTabUrsa:"Ursa Major (Banat Na'sh)",constellationTabCass:"Cassiopeia (Al-Kaff Al-Khadib)",constellationTabPleiades:"Pleiades (Al-Thurayya)",moonWidgetTitle:"Tonight's Lunar Phase & Astrophotography Conditions",illumination:"Illumination:",astroRating:"Astrophotography Index:",planetsRadarTitle:"Planetary Visibility Radar Tonight",interactivityTip:"Move cursor for starfield parallax; click any star node to reveal deep sky astrophysical data and Arabian lore.",retreatsTitle:"Atlas of Iconic Saudi Desert Retreats",retreatsSubtitle:"Four extraordinary wilderness destinations across Saudi Arabia, engineered with ultra-exclusive privacy and pristine night skies",filterAll:"All Landscapes",filterCanyon:"Sandstone Canyons",filterMountain:"Cloud Mountain Peaks",filterCrimson:"Hisma Crimson Sands",filterCoastal:"Pristine Coastal Dunes",toggleDayNight:"Toggle Lighting (Day / Night)",viewDay:"Golden Sunlight View",viewNight:"Starlit Midnight View",perNightSAR:"SAR / Night",amenitiesIncluded:"Signature Sanctuary Features:",reserveNowBtn:"Book This Retreat",customizeThisRetreat:"Configure in Studio",configuratorTitle:"Smart Dome & Glamping Customizer Studio",configuratorSubtitle:"Select architectural design, tailor luxury astronomy amenities, and view instant live pricing breakdown",chooseRetreat:"1. Select Desert Destination:",chooseUnitType:"2. Architectural Pavilion Style:",unitDome:"360° Panoramic Geodesic Glass Dome",unitDomeDesc:"Double-glazed smart insulated glass with transparent skylight roof",unitSadu:"Royal Handcrafted Sadu Pavilion",unitSaduDesc:"Authentic handwoven Bedouin textile suite with private majlis",unitAirstream:"Vintage Silver Airstream Suite",unitAirstreamDesc:"Iconic retro-futuristic caravan with private cedar sundeck",chooseAmenities:"3. Curated Stargazing & Hospitality Amenities:",bookingSummaryTitle:"Live Package Summary & Pricing",datesSelection:"Dates & Guest Party:",checkInDate:"Check-in Date:",checkOutDate:"Check-out Date:",guestsCount:"Guests Count:",nightsCount:"Total Nights:",staySubtotal:"Lodging Subtotal:",amenitiesSubtotal:"Selected Curated Amenities:",vatLabel:"Saudi VAT (15%):",totalSARLabel:"Grand Total Amount:",proceedBookingBtn:"Proceed & Generate Boarding Pass",weatherTitle:"Desert Night Chill & Weather Advisor",weatherSubtitle:"Plan for steep day-to-night temperature drops with custom alpine and desert packing advisories",selectLocationWeather:"Select Destination for Weather Data:",dayTemp:"Daytime Peak Temp",nightTemp:"Midnight Low Temp",windChill:"Apparent Wind Chill Temp",packingListTitle:"Curated Packing List for Your Retreat:",packEssential:"Essential & Required",packRecommended:"Recommended for Stargazing",modalTitle:"Confirm Luxury Reservation",guestDetailsTitle:"Primary Guest Information",fullName:"Full Name:",phone:"Mobile Number:",email:"Email Address:",specialNotes:"Dietary Preferences & Special Requests:",confirmAndGeneratePass:"Confirm Booking & Issue Golden Pass",boardingPassTitle:"Luxury Desert Boarding Pass & Celestial Permit",boardingPassSub:"RAWASI LUXURY DESERT BOARDING PASS & ASTRO-PERMIT",passengerName:"Guest Name:",bookingRefLabel:"Booking Reference (PNR):",destinationLabel:"Destination & Retreat:",checkInLabel:"Arrival Date:",checkOutLabel:"Departure Date:",gpsLabel:"GPS Coordinates:",bortleRatingLabel:"Dark-Sky Rating:",unitTypeLabel:"Accommodation Type:",totalPaidLabel:"Total Paid (Incl. 15% VAT):",qrCodeSubtitle:"Scan for off-road satellite coordinates & digital smart lock key",printBoardingPass:"Print Luxury Pass (PDF / Print)",closeModal:"Close",footerBrandDesc:"Rawasi is Saudi Arabia's premier luxury eco-glamping and dark-sky sanctuary platform, marrying authentic Saudi desert hospitality with cutting-edge sustainable stargazing.",copyright:"All Rights Reserved © Rawasi Luxury Retreats & Observatories 2026",vision2030:"Crafted in harmony with Saudi Vision 2030 promoting regenerative luxury tourism"}};class D{constructor(){p(this,"currentLang","ar");p(this,"listeners",[]);const e=localStorage.getItem("rawasi_lang");e&&(e==="ar"||e==="en")&&(this.currentLang=e),this.applyToDOM()}getLang(){return this.currentLang}isAr(){return this.currentLang==="ar"}setLang(e){this.currentLang!==e&&(this.currentLang=e,localStorage.setItem("rawasi_lang",e),this.applyToDOM(),this.notify())}toggleLang(){const e=this.currentLang==="ar"?"en":"ar";return this.setLang(e),e}t(e){return E[this.currentLang][e]||E.ar[e]||e}onLanguageChange(e){this.listeners.push(e)}notify(){for(const e of this.listeners)e(this.currentLang)}applyToDOM(){const e=this.currentLang==="ar";document.documentElement.lang=this.currentLang,document.documentElement.dir=e?"rtl":"ltr",document.body.classList.toggle("lang-ar",e),document.body.classList.toggle("lang-en",!e)}}const n=new D,m=[{id:"alula-ashar",nameAr:"قباب وادي عِشار الفلكية - العلا",nameEn:"Ashar Valley Stargazing Domes - AlUla",regionAr:"العلا، منطقة المدينة المنورة",regionEn:"AlUla, Medina Province",terrain:"canyon",terrainAr:"أودية وأخاديد الحجر الرملي",terrainEn:"Sandstone Canyons",bortleScale:1,bortleDescAr:"ظلام فلكي حالك ونقي (فئة 1 على مقياس بورتل)",bortleDescEn:"Pristine Dark Sky (Bortle Class 1)",elevation:"720 م فوق سطح البحر",elevationEn:"720 m above sea level",gps:"26.6852° N, 37.9184° E",pricePerNight:3850,imageDay:"https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=1600&q=80",imageNight:"https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80",descriptionAr:"انغمس في أسطورة وادي عِشار بين جبال الحجر الرملي النحتية. صُممت قباب الرصد الجيوديسية الزجاجية بتقنية العزل الحراري الذكي لتمنحك رؤية بانورامية 360 درجة لنجوم مجرة درب التبانة وسديم الجبار مباشرة من سريرك الفاخر.",descriptionEn:"Immerse in the timeless wonder of Ashar Valley amid ancient sandstone monuments. Custom geodesic glass domes featuring smart climate control provide uninterrupted 360-degree vistas of the Milky Way and Orion Nebula directly from your king-size bed.",featuresAr:["قباب زجاجية بانورامية بطلاء ذكي مضاد للانعكاس","تلسكوب سيلسترون 8 بوصة محوسب مع فلاتر سديمية","جلسة سمر خاصة مع حطب الغضا والأرطى العطري","مسبح مياه ساخنة معلق بين التكوينات الصخرية","مرشد فلكي خاص وشاي وقهوة خولانية ملكية"],featuresEn:["360° Smart Anti-reflective Panoramic Glass Domes",'Computerized 8" Celestron Telescope with Nebula Filters',"Private Sand Firepit with Aromatic Ghada Wood","Private Heated Infinity Plunge Pool nestled in rocks","Private Astronomer & Royal Khawlani Saudi Coffee Service"],unitTypes:[{typeAr:"قبة فلكية جيوديسية ماستر",typeEn:"Master Celestial Geodesic Dome",capacity:"2 ضيوف",capacityEn:"2 Guests",sqm:85},{typeAr:"فيلا الرصد الصحراوية الملكية",typeEn:"Royal Observatory Desert Villa",capacity:"4 ضيوف",capacityEn:"4 Guests",sqm:160}],temperature:{dayC:29,nightC:12,windSpeedKmh:14,humidityPct:18},highlightConstellations:["orion","pleiades","cassiopeia"]},{id:"asir-peaks",nameAr:"أكواخ سحاب العرعر - السودة، عسير",nameEn:"Juniper Cloud Cliff Cabins - Al Souda, Asir",regionAr:"السودة، منطقة عسير",regionEn:"Al Souda, Asir Highlands",terrain:"mountain",terrainAr:"قمم جبلية غائمة وغابات عرعر",terrainEn:"Mountain Cloud Peaks & Junipers",bortleScale:2,bortleDescAr:"سماء جبلية نقية جداً فوق طبقة الغيوم (فئة 2)",bortleDescEn:"Pristine Mountain Sky Above Clouds (Bortle Class 2)",elevation:"3,015 م فوق سطح البحر",elevationEn:"3,015 m above sea level",gps:"18.2711° N, 42.3683° E",pricePerNight:2950,imageDay:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",imageNight:"https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80",descriptionAr:"على أعلى قمة في المملكة بارتفاع يتجاوز 3000 متر، تطفو أكواخ العرعر الزجاجية المعلقة على حافة الأجراف الأسطورية. استمتع ببحر الغيوم البيضاء نهاراً، وبسماء باردة صافية كالألماس تعلو الغيوم ليلاً في هدوء ملهم.",descriptionEn:"Perched upon Saudi Arabia's highest mountain ridge above 3,000 meters, these glass cliffside cabins hover over endless cloud oceans. Experience crisp alpine breeze by day and diamond-sharp celestial stargazing floating above the clouds by night.",featuresAr:["شرفات معلقة بزجاج عريض يطل على تهامة وبحر السحاب","مدفأة حطب عسيرية من حجر البازلت الطبيعي","مرصد بصري لمراقبة نسور عسير ومجرات السماء العميقة","جاكوزي خارجي دافئ على الحافة الجبلية","جلسة عسيرية بالنقش القط مع شاي جبلي بالحبق"],featuresEn:["Cantilevered Glass Observation Deck over Sea of Clouds","Natural Basalt Fireplace with Local Mountain Wood","High-Power Optics for Falconry & Deep Sky Galaxies","Heated Outdoor Cliffside Jacuzzi in Alpine Air","Authentic Asiri Qatt Al-Asiri Lounge with Herbal Mountain Teas"],unitTypes:[{typeAr:"كوخ الجرف المعلق البانورامي",typeEn:"Cantilevered Cliffside Glass Cabin",capacity:"2 ضيوف",capacityEn:"2 Guests",sqm:75},{typeAr:"جناح سحاب العرعر العائلي",typeEn:"Juniper Cloud Family Suite",capacity:"4 ضيوف",capacityEn:"4 Guests",sqm:140}],temperature:{dayC:20,nightC:7,windSpeedKmh:22,humidityPct:65},highlightConstellations:["ursa-major","cassiopeia","cygnus"]},{id:"tabuk-hisma",nameAr:"مضارب حِسمى الملكية - صحراء حِسمى، تبوك",nameEn:"Hisma Royal Pavilions - Hisma Desert, Tabuk",regionAr:"صحراء حِسمى والديسة، منطقة تبوك",regionEn:"Hisma Desert & Wadi Al Disah, Tabuk",terrain:"crimson",terrainAr:"رمال حمراء نارية وأقواس حجرية",terrainEn:"Crimson Sands & Wind Arches",bortleScale:1,bortleDescAr:"ظلام كوني مطلق (فئة 1 - أنقى سماء لرصد الشهب)",bortleDescEn:"Ultimate Cosmic Darkness (Bortle Class 1)",elevation:"980 م فوق سطح البحر",elevationEn:"980 m above sea level",gps:"28.3150° N, 35.8812° E",pricePerNight:3400,imageDay:"https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80",imageNight:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",descriptionAr:"بين الأقواس الصخرية الحمراء التي شكلتها رياح الدهور في صحراء حِسمى المهيبة، تمزج مضارب السدو الملكية بين عراقة التراث البدوي وأرقى معايير الرفاهية المعاصرة. وجهة عالمية لا تضاهى لمشاهدة زخات الشهب السنوية.",descriptionEn:"Amidst colossal crimson arches shaped by eons of desert winds, our Royal Sadu pavilions fuse legendary Bedouin hospitality with six-star boutique luxury. One of Earth's premier dark-sky preserves for observing annual meteor showers.",featuresAr:["خيام ملكية من السدو السعودي التراثي المنسوج يدوياً","رحلات سفاري كلاسيكية 4x4 لرصد النجوم وتصوير الديسة","مائدة شواء وحنيذ تحت النجوم مع عازف ربابة وعود","تلسكوب حراري ذكي بتقنية التتبع الإلكتروني للشهب","خيمة مساج وعناية بالأعشاب الصحراوية العطرية"],featuresEn:["Handcrafted Authentic Saudi Sadu Royal Pavilions","Vintage 4x4 Off-road Celestial Safari to Wadi Disah","Under-the-Stars Feast & Live Traditional Lute Melodies","Automated Meteor-Tracking Infrared Telescope","Desert Botanicals Wellness & Aromatherapy Tent"],unitTypes:[{typeAr:"سرادق السدو الملكي الفاخر",typeEn:"Royal Sadu Grand Pavilion",capacity:"2 ضيوف",capacityEn:"2 Guests",sqm:95},{typeAr:"مضرب حسمى الإمبراطوري",typeEn:"Imperial Hisma Encampment Suite",capacity:"6 ضيوف",capacityEn:"6 Guests",sqm:220}],temperature:{dayC:28,nightC:11,windSpeedKmh:16,humidityPct:15},highlightConstellations:["orion","ursa-major","pleiades"]},{id:"red-sea-dunes",nameAr:"فلل الكثبان والشاطئ العذراء - وجهة البحر الأحمر",nameEn:"Coastal Dune Villas - The Red Sea Destination",regionAr:"أرخبيل البحر الأحمر، تبوك",regionEn:"The Red Sea Archipelago, Tabuk",terrain:"coastal",terrainAr:"كثبان ذهبية ناعمة ومياه فيروزية",terrainEn:"Coastal Dunes & Turquoise Waters",bortleScale:2,bortleDescAr:"سماء ساحلية عذراء بنسمات بحرية منعشة (فئة 2)",bortleDescEn:"Pristine Marine Dark Sky (Bortle Class 2)",elevation:"15 م فوق سطح البحر",elevationEn:"15 m above sea level",gps:"25.5392° N, 36.9841° E",pricePerNight:4200,imageDay:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",imageNight:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",descriptionAr:"حيث تتعانق الرمال الذهبية النقية مع مياه البحر الأحمر الشفافة. فلل بيئية مستدامة بالكامل تطفو بتناغم فوق الكثبان الساحلية، لتستيقظ على أمواج البحر الهادئة وتنام على انعكاس النجوم الساطعة على سطح الماء.",descriptionEn:"Where immaculate golden dunes meet crystalline coral lagoons. Fully sustainable bioclimatic villas floating lightly over the shoreline, serenaded by gentle waves and illuminated by constellations reflecting upon the tranquil sea.",featuresAr:["تصميم معماري بيئي من أخشاب مستدامة وطاقة شمسية 100%","شرفة استلقاء شبكية معلقة فوق رمال الشاطئ","رحلة يخت ليلي شراعي لرصد النجوم من قلب عرض البحر","عشاء مأكولات بحرية طازجة معدة على الفحم والملح البحري","جلسة تأمل فلكي وعلاج صوتي بترددات البحر الهادئة"],featuresEn:["100% Solar-Powered Sustainable Eco-Dune Architecture","Over-Sand Catamaran Hammock Netting for Star Viewing","Bioluminescent Night Catamaran Stargazing Voyage","Coastal Catch Woodfire Dinner on Private Sandbank","Sound Bath Meditation & Ocean Wave Stargazing Therapy"],unitTypes:[{typeAr:"فيلا الكثبان الساحلية لشخصين",typeEn:"Oceanfront Eco-Dune Villa",capacity:"2 ضيوف",capacityEn:"2 Guests",sqm:110},{typeAr:"فيلا المرجان الملكية الخاصة",typeEn:"Royal Lagoon Coral Villa",capacity:"4 ضيوف",capacityEn:"4 Guests",sqm:190}],temperature:{dayC:31,nightC:19,windSpeedKmh:12,humidityPct:45},highlightConstellations:["cygnus","cassiopeia","orion"]}],y=[{id:"orion",nameAr:"كوكبة الجَبّار (الجوزاء عند العرب)",nameEn:"Orion the Hunter",arabicTraditionAr:'كانت العرب تطلق عليها "الجوزاء" وتعتبرها ملكة سماء الشتاء وعلامة اشتداد البرد وموسم المطر وسهيل.',arabicTraditionEn:'Known in ancient Arabic as "Al-Jawzaa", Queen of the Winter Skies, heralding cold desert nights and rains.',seasonAr:"الشتاء والربيع (نوفمبر - إبريل)",seasonEn:"Winter & Spring (Nov - Apr)",loreAr:"أشهر وأوضح كوكبة في سماء الصحراء السعودية. يلمع فيها حزام الجبار المكون من 3 نجوم مستقيمة (النطاق، النظام، المنطقة) وسديم الجبار العظيم M42 الذي يمكن رؤيته بالعين المجردة من وادي عشار وصحراء حسمى.",loreEn:"The most iconic constellation in Saudi desert skies. Features the famous 3-star Belt (Alnitak, Alnilam, Mintaka) and the great M42 Orion Nebula visible with naked eye in pristine Bortle 1 sites.",bestViewingRetreatId:"alula-ashar",stars:[{id:"betelgeuse",nameAr:"إبط الجوزاء (منكب الجوزاء)",nameEn:"Betelgeuse",x:30,y:25,magnitude:.5,color:"#f87171"},{id:"bellatrix",nameAr:"الناجذ (بلاتريكس)",nameEn:"Bellatrix",x:70,y:28,magnitude:1.6,color:"#93c5fd"},{id:"alnitak",nameAr:"النطاق",nameEn:"Alnitak",x:42,y:52,magnitude:1.7,color:"#bae6fd"},{id:"alnilam",nameAr:"النظام",nameEn:"Alnilam",x:50,y:50,magnitude:1.6,color:"#bae6fd"},{id:"mintaka",nameAr:"المنطقة",nameEn:"Mintaka",x:58,y:48,magnitude:2.2,color:"#bae6fd"},{id:"saiph",nameAr:"سيف الجبار",nameEn:"Saiph",x:34,y:76,magnitude:2,color:"#93c5fd"},{id:"rigel",nameAr:"رِجْل الجوزاء (ريجل)",nameEn:"Rigel",x:68,y:74,magnitude:.1,color:"#67e8f9"},{id:"meissa",nameAr:"الهقعة (مَيْسان)",nameEn:"Meissa",x:50,y:15,magnitude:3.3,color:"#e0f2fe"}],edges:[[7,0],[7,1],[0,2],[1,4],[2,3],[3,4],[2,5],[4,6]]},{id:"ursa-major",nameAr:"الدب الأكبر (بنات نَعْش الكبرى)",nameEn:"Ursa Major (The Great Bear)",arabicTraditionAr:'سمّاها العرب "بنات نعش" وجعلوا النعش مربع النجوم الأربعة، والتابعات خلفه هن بناته الماشيات في رثائه.',arabicTraditionEn:"Named Banat Na'sh (Daughters of the Bier) in ancient Arabic star lore, used for centuries to find True North.",seasonAr:"طوال العام (أوج الرؤية في الربيع والصيف)",seasonEn:"Year-Round (Peaks in Spring/Summer)",loreAr:"تشتهر بمغرفة الدب الأكبر الدائرية حول القطب الشمالي. يشير النجمان (الدبة والمراق) مباشرة إلى النجم القطبي (الجدي) الذي يوجه الرحالة والمسافرين في قلب صحراء الجزيرة العربية.",loreEn:"Features the northern Big Dipper asterism. The pointer stars Merak and Dubhe guide straight to Polaris (The North Star), guiding caravans across the Arabian desert for millennia.",bestViewingRetreatId:"asir-peaks",stars:[{id:"dubhe",nameAr:"الدُبّة (ظهر الدب)",nameEn:"Dubhe",x:75,y:28,magnitude:1.8,color:"#fef08a"},{id:"merak",nameAr:"المَرَاق (خاصرة الدب)",nameEn:"Merak",x:74,y:48,magnitude:2.3,color:"#bae6fd"},{id:"phecda",nameAr:"الفَخِذ",nameEn:"Phecda",x:55,y:52,magnitude:2.4,color:"#bae6fd"},{id:"megrez",nameAr:"المَغْرِز (مبتدأ الذيل)",nameEn:"Megrez",x:56,y:32,magnitude:3.3,color:"#e0f2fe"},{id:"alioth",nameAr:"الأَلْيَة (الجون)",nameEn:"Alioth",x:42,y:38,magnitude:1.7,color:"#e0f2fe"},{id:"mizar",nameAr:"المِئْزَر (مع القائد السها)",nameEn:"Mizar",x:28,y:46,magnitude:2.2,color:"#bae6fd"},{id:"alkaid",nameAr:"القائد",nameEn:"Alkaid",x:14,y:56,magnitude:1.8,color:"#93c5fd"}],edges:[[0,1],[1,2],[2,3],[3,0],[3,4],[4,5],[5,6]]},{id:"cassiopeia",nameAr:"ذات الكرسي (الكف الخضيب)",nameEn:"Cassiopeia the Queen",arabicTraditionAr:'سمّاها العرب القدماء "الكف الخضيب" وشبهوها بكف ملطخة بالحناء مبسوطة في نهر المجرة.',arabicTraditionEn:'Referred to by ancient Arabs as "The Henna-Stained Hand" stretched out across the river of the Milky Way.',seasonAr:"الخريف والشتاء (سبتمبر - فبراير)",seasonEn:"Autumn & Winter (Sep - Feb)",loreAr:"كوكبة ملكية تأخذ شكل حرف W اللامع في السماء الشمالية، وتقع مباشرة داخل الذراع الكثيف لمجرة درب التبانة، مما يجعل خلفيتها مرصعة بآلاف النجوم والعناقيد المفتوحة.",loreEn:"A distinctive royal W-shaped constellation in the northern sky, lying directly in the dense starfields of the Milky Way, rich with deep-sky open clusters and nebulae.",bestViewingRetreatId:"tabuk-hisma",stars:[{id:"caph",nameAr:"الكَف (الكف الخضيب)",nameEn:"Caph",x:18,y:46,magnitude:2.2,color:"#fef08a"},{id:"schedar",nameAr:"الصدر",nameEn:"Schedar",x:36,y:64,magnitude:2.2,color:"#fed7aa"},{id:"gamma-cas",nameAr:"نافي (سنام الناقة)",nameEn:"Navi",x:50,y:32,magnitude:2.1,color:"#bae6fd"},{id:"ruchbah",nameAr:"الركبة",nameEn:"Ruchbah",x:68,y:60,magnitude:2.6,color:"#e0f2fe"},{id:"segin",nameAr:"سيجين (المعصم)",nameEn:"Segin",x:84,y:38,magnitude:3.3,color:"#93c5fd"}],edges:[[0,1],[1,2],[2,3],[3,4]]},{id:"pleiades",nameAr:"عنقود الثُّرَيّا (الشقيقات السبع)",nameEn:"Pleiades (The Seven Sisters)",arabicTraditionAr:'أبرز منازل القمر عند العرب: "إذا طلع النجم غدية، ابتغى الراعي كفية". علامة مواسم المطر والخصب.',arabicTraditionEn:"The supreme star cluster in Arab heritage; its dawn rising signaled seasons, rains, and pasture fertility.",seasonAr:"الخريف والشتاء (أكتوبر - مارس)",seasonEn:"Autumn & Winter (Oct - Mar)",loreAr:"عنقود نجمي مفتوح أزرق ساطع في برج الثور، يضم مئات النجوم الفتية محاطة بسديم انعكاسي أزرق غازي فائق الجمال عند النظر إليه عبر تلسكوبات منتجعاتنا الفلكية.",loreEn:"A radiant open star cluster glowing in icy blue brilliance. Contains hundreds of young stars enveloped in reflection nebulosity, breathtaking through our resort telescopes.",bestViewingRetreatId:"alula-ashar",stars:[{id:"alcyone",nameAr:"الطرف (العيوقي)",nameEn:"Alcyone",x:50,y:50,magnitude:2.8,color:"#67e8f9"},{id:"atlas",nameAr:"أطلس",nameEn:"Atlas",x:68,y:56,magnitude:3.6,color:"#93c5fd"},{id:"electra",nameAr:"إلكترا",nameEn:"Electra",x:30,y:44,magnitude:3.7,color:"#93c5fd"},{id:"maia",nameAr:"مايا",nameEn:"Maia",x:42,y:34,magnitude:3.8,color:"#67e8f9"},{id:"merope",nameAr:"ميروبي",nameEn:"Merope",x:44,y:64,magnitude:4.1,color:"#67e8f9"},{id:"taygeta",nameAr:"تايجيتا",nameEn:"Taygeta",x:28,y:30,magnitude:4.3,color:"#93c5fd"},{id:"pleione",nameAr:"بليوني",nameEn:"Pleione",x:72,y:52,magnitude:5,color:"#bae6fd"}],edges:[[5,2],[2,3],[3,0],[0,4],[0,1],[1,6]]}];class M{constructor(e){p(this,"canvas");p(this,"ctx");p(this,"stars",[]);p(this,"meteors",[]);p(this,"animFrameId",null);p(this,"activeConstellationId","orion");p(this,"hoveredStar",null);p(this,"bortleScale",1);p(this,"mouseX",0);p(this,"mouseY",0);p(this,"targetParallaxX",0);p(this,"targetParallaxY",0);p(this,"currentParallaxX",0);p(this,"currentParallaxY",0);p(this,"onStarSelectCallback",null);p(this,"isArabic",!0);this.canvas=e;const t=e.getContext("2d");if(!t)throw new Error("2D context not available");this.ctx=t,this.handleResize=this.handleResize.bind(this),this.handleMouseMove=this.handleMouseMove.bind(this),this.handleClick=this.handleClick.bind(this),this.render=this.render.bind(this),this.init()}init(){this.handleResize(),this.initStars(450),window.addEventListener("resize",this.handleResize),this.canvas.addEventListener("mousemove",this.handleMouseMove),this.canvas.addEventListener("click",this.handleClick),this.start()}setLanguage(e){this.isArabic=e}setBortleScale(e){this.bortleScale=Math.max(1,Math.min(4,e))}setActiveConstellation(e){this.activeConstellationId=e}onStarSelect(e){this.onStarSelectCallback=e}initStars(e){this.stars=[];const t=["#ffffff","#f8fafc","#bae6fd","#7dd3fc","#fef08a","#fed7aa","#fbcfe8"];for(let a=0;a<e;a++)this.stars.push({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height,z:Math.random()*2+.5,radius:Math.random()<.85?Math.random()*1.3+.4:Math.random()*2.2+1.2,baseAlpha:Math.random()*.7+.3,twinkleSpeed:Math.random()*.04+.015,phase:Math.random()*Math.PI*2,color:t[Math.floor(Math.random()*t.length)]})}handleResize(){const e=this.canvas.getBoundingClientRect(),t=Math.min(window.devicePixelRatio||1,2);this.canvas.width=e.width*t,this.canvas.height=e.height*t,this.ctx.scale(t,t)}handleMouseMove(e){const t=this.canvas.getBoundingClientRect();this.mouseX=e.clientX-t.left,this.mouseY=e.clientY-t.top;const a=(this.mouseX/t.width-.5)*2,s=(this.mouseY/t.height-.5)*2;this.targetParallaxX=a*18,this.targetParallaxY=s*18;const i=y.find(l=>l.id===this.activeConstellationId);let r=null;if(i)for(const l of i.stars){const d=this.getConstellationStarCoords(l,t.width,t.height);if(Math.hypot(this.mouseX-d.x,this.mouseY-d.y)<18){r=l;break}}this.hoveredStar=r,this.canvas.style.cursor=r?"pointer":"default"}handleClick(){if(this.hoveredStar&&this.onStarSelectCallback){const e=y.find(t=>t.id===this.activeConstellationId);e&&this.onStarSelectCallback(this.hoveredStar,e)}}spawnMeteor(){if(Math.random()>(this.bortleScale===1?.035:.015)||this.meteors.length>3)return;const e=this.canvas.getBoundingClientRect(),t=Math.random()*e.width,a=Math.random()*(e.height*.4),s=Math.PI/4+(Math.random()-.5)*.4,i=Math.random()*8+12;this.meteors.push({x:t,y:a,dx:Math.cos(s)*i,dy:Math.sin(s)*i,len:Math.random()*70+60,speed:i,alpha:1,life:1})}getConstellationStarCoords(e,t,a){const s=t*.15,i=a*.15,r=t-s*2,l=a-i*2,d=s+e.x/100*r,c=i+e.y/100*l;return{x:d+this.currentParallaxX*.5,y:c+this.currentParallaxY*.5}}render(){const e=this.canvas.getBoundingClientRect(),t=e.width,a=e.height;this.currentParallaxX+=(this.targetParallaxX-this.currentParallaxX)*.05,this.currentParallaxY+=(this.targetParallaxY-this.currentParallaxY)*.05,this.ctx.clearRect(0,0,t,a),this.drawDeepSkyGlow(t,a),this.drawBackgroundStars(t,a),this.drawActiveConstellation(t,a),this.spawnMeteor(),this.drawMeteors(),this.bortleScale>1&&this.drawBortleLightPollution(t,a),this.animFrameId=requestAnimationFrame(this.render)}drawDeepSkyGlow(e,t){if(this.bortleScale>2)return;const a=this.ctx.createLinearGradient(0,t*.8,e,0),s=this.bortleScale===1?.12:.05;a.addColorStop(0,"rgba(56, 189, 248, 0)"),a.addColorStop(.3,`rgba(56, 189, 248, ${s*.8})`),a.addColorStop(.5,`rgba(244, 114, 182, ${s*.5})`),a.addColorStop(.7,`rgba(147, 197, 253, ${s})`),a.addColorStop(1,"rgba(56, 189, 248, 0)"),this.ctx.fillStyle=a,this.ctx.fillRect(0,0,e,t)}drawBackgroundStars(e,t){const a=performance.now()*.001,s=this.bortleScale===1?3:this.bortleScale===2?2.2:1.4;for(const i of this.stars){if(i.z>s)continue;const r=Math.sin(a*i.twinkleSpeed*10+i.phase),l=Math.max(.1,i.baseAlpha+r*.25),d=i.x+this.currentParallaxX*i.z*.3,c=i.y+this.currentParallaxY*i.z*.3;this.ctx.beginPath(),this.ctx.arc(d,c,i.radius,0,Math.PI*2),this.ctx.fillStyle=i.color,this.ctx.globalAlpha=l,this.ctx.fill()}this.ctx.globalAlpha=1}drawActiveConstellation(e,t){var i;const a=y.find(r=>r.id===this.activeConstellationId);if(!a)return;const s=a.stars.map(r=>this.getConstellationStarCoords(r,e,t));this.ctx.save(),this.ctx.lineWidth=1.6,this.ctx.strokeStyle="rgba(56, 189, 248, 0.45)",this.ctx.setLineDash([4,4]);for(const[r,l]of a.edges){const d=s[r],c=s[l];!d||!c||(this.ctx.beginPath(),this.ctx.moveTo(d.x,d.y),this.ctx.lineTo(c.x,c.y),this.ctx.stroke())}this.ctx.restore();for(let r=0;r<a.stars.length;r++){const l=a.stars[r],d=s[r],c=((i=this.hoveredStar)==null?void 0:i.id)===l.id,h=this.ctx.createRadialGradient(d.x,d.y,2,d.x,d.y,c?26:14);h.addColorStop(0,l.color||"#38bdf8"),h.addColorStop(1,"rgba(56, 189, 248, 0)"),this.ctx.fillStyle=h,this.ctx.beginPath(),this.ctx.arc(d.x,d.y,c?26:14,0,Math.PI*2),this.ctx.fill(),this.ctx.beginPath(),this.ctx.arc(d.x,d.y,c?5.5:3.5,0,Math.PI*2),this.ctx.fillStyle="#ffffff",this.ctx.fill(),this.ctx.font=c?"bold 13px Tajawal, Cairo, sans-serif":"11px Tajawal, Cairo, sans-serif",this.ctx.fillStyle=c?"#fef08a":"#cbd5e1",this.ctx.textAlign="center";const u=this.isArabic?l.nameAr:l.nameEn;this.ctx.fillText(u,d.x,d.y+(c?20:16))}}drawMeteors(){for(let e=this.meteors.length-1;e>=0;e--){const t=this.meteors[e];if(t.x+=t.dx,t.y+=t.dy,t.life-=.025,t.life<=0){this.meteors.splice(e,1);continue}const a=this.ctx.createLinearGradient(t.x,t.y,t.x-t.dx/t.speed*t.len,t.y-t.dy/t.speed*t.len);a.addColorStop(0,`rgba(255, 255, 255, ${t.life})`),a.addColorStop(.3,`rgba(56, 189, 248, ${t.life*.8})`),a.addColorStop(1,"rgba(56, 189, 248, 0)"),this.ctx.save(),this.ctx.lineWidth=2.2,this.ctx.strokeStyle=a,this.ctx.beginPath(),this.ctx.moveTo(t.x,t.y),this.ctx.lineTo(t.x-t.dx/t.speed*t.len,t.y-t.dy/t.speed*t.len),this.ctx.stroke(),this.ctx.restore()}}drawBortleLightPollution(e,t){const a=this.ctx.createLinearGradient(0,t*.6,0,t),s=(this.bortleScale-1)*.12;a.addColorStop(0,"rgba(251, 191, 36, 0)"),a.addColorStop(1,`rgba(251, 146, 60, ${s})`),this.ctx.fillStyle=a,this.ctx.fillRect(0,0,e,t)}start(){this.animFrameId||this.render()}stop(){this.animFrameId&&(cancelAnimationFrame(this.animFrameId),this.animFrameId=null)}destroy(){this.stop(),window.removeEventListener("resize",this.handleResize),this.canvas.removeEventListener("mousemove",this.handleMouseMove),this.canvas.removeEventListener("click",this.handleClick)}}class R{constructor(){p(this,"ctx",null);p(this,"isPlaying",!1);p(this,"masterGain",null);p(this,"campfireGain",null);p(this,"windGain",null);p(this,"fireCrackleInterval",null);p(this,"windNode",null);p(this,"mode","both")}initContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e}this.ctx.state==="suspended"&&this.ctx.resume()}async toggle(){return this.isPlaying?(this.stop(),!1):(await this.start(),!0)}async start(){this.initContext(),this.ctx&&(this.isPlaying||(this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.45,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.campfireGain=this.ctx.createGain(),this.campfireGain.gain.setValueAtTime(this.mode==="wind"?0:.7,this.ctx.currentTime),this.campfireGain.connect(this.masterGain),this.windGain=this.ctx.createGain(),this.windGain.gain.setValueAtTime(this.mode==="fire"?0:.35,this.ctx.currentTime),this.windGain.connect(this.masterGain),this.startWindSynth(),this.startCampfireSynth(),this.isPlaying=!0))}stop(){if(!(!this.isPlaying||!this.ctx)){if(this.fireCrackleInterval!==null&&(window.clearInterval(this.fireCrackleInterval),this.fireCrackleInterval=null),this.windNode){try{this.windNode.stop()}catch{}this.windNode=null}this.masterGain&&(this.masterGain.gain.setTargetAtTime(0,this.ctx.currentTime,.08),setTimeout(()=>{var e;try{(e=this.masterGain)==null||e.disconnect()}catch{}},200)),this.isPlaying=!1}}setVolume(e){if(this.masterGain&&this.ctx){const t=Math.max(0,Math.min(1,e));this.masterGain.gain.setTargetAtTime(t,this.ctx.currentTime,.05)}}setMode(e){if(this.mode=e,!this.ctx)return;const t=this.ctx.currentTime;this.campfireGain&&this.campfireGain.gain.setTargetAtTime(e==="wind"?0:.7,t,.1),this.windGain&&this.windGain.gain.setTargetAtTime(e==="fire"?0:.35,t,.1)}getIsPlaying(){return this.isPlaying}startWindSynth(){if(!this.ctx||!this.windGain)return;const e=this.ctx.sampleRate*2,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),a=t.getChannelData(0);let s=0,i=0,r=0,l=0,d=0,c=0,h=0;for(let b=0;b<e;b++){const v=Math.random()*2-1;s=.99886*s+v*.0555179,i=.99332*i+v*.0750759,r=.969*r+v*.153852,l=.8665*l+v*.3104856,d=.55*d+v*.5329522,c=-.7616*c-v*.016898,a[b]=(s+i+r+l+d+c+h+v*.5362)*.08,h=v*.115926}const u=this.ctx.createBufferSource();u.buffer=t,u.loop=!0;const g=this.ctx.createBiquadFilter();g.type="lowpass",g.frequency.setValueAtTime(320,this.ctx.currentTime),g.Q.setValueAtTime(2.5,this.ctx.currentTime);const f=this.ctx.createOscillator();f.frequency.setValueAtTime(.18,this.ctx.currentTime),this.ctx.createGain().gain.setValueAtTime(140,this.ctx.currentTime),f.connect(g.frequency),u.connect(g),g.connect(this.windGain),u.start(),f.start(),this.windNode=u}startCampfireSynth(){if(!this.ctx||!this.campfireGain)return;const e=this.ctx.sampleRate*2,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),a=t.getChannelData(0);for(let l=0;l<e;l++)a[l]=(Math.random()*2-1)*.05;const s=this.ctx.createBufferSource();s.buffer=t,s.loop=!0;const i=this.ctx.createBiquadFilter();i.type="bandpass",i.frequency.setValueAtTime(650,this.ctx.currentTime),i.Q.setValueAtTime(1.2,this.ctx.currentTime),s.connect(i),i.connect(this.campfireGain),s.start();const r=()=>{if(!this.isPlaying||!this.ctx||!this.campfireGain)return;const l=Math.random()<.22,d=this.ctx.currentTime,c=this.ctx.createOscillator(),h=this.ctx.createGain(),u=this.ctx.createBiquadFilter();u.type="highpass",u.frequency.value=l?800:2200,c.type=l?"triangle":"sine",c.frequency.setValueAtTime(l?140:850+Math.random()*600,d),c.frequency.exponentialRampToValueAtTime(40,d+(l?.08:.02)),h.gain.setValueAtTime(l?.6:.25,d),h.gain.exponentialRampToValueAtTime(.001,d+(l?.09:.025)),c.connect(u),u.connect(h),h.connect(this.campfireGain),c.start(d),c.stop(d+(l?.1:.03))};this.fireCrackleInterval=window.setInterval(()=>{Math.random()>.3&&r()},120)}}const I=new R,S=[{id:"telescope",nameAr:'تلسكوب سيلسترون المحوسب الاحترافي (8")',nameEn:'Celestron 8" Computerized Telescope',descAr:"تتبع آلي للأجرام السماوية مع عدسات تكبير رقمية للتصوير بالهاتف.",descEn:"Motorized celestial tracking with digital smartphone imaging adapters.",priceSAR:450,perNight:!0,icon:"🔭"},{id:"firepit",nameAr:"جلسة سمر مع حطب الغضا والأرطى الملكي",nameEn:"Private Sand Firepit & Ghada Wood",descAr:"إشعال النار الصحراوية العطرية مع دلّة القهوة الخولانية والتمور الفاخرة.",descEn:"Aromatic desert firewood ritual with piping hot Saudi coffee and dates.",priceSAR:350,perNight:!0,icon:"🔥"},{id:"jacuzzi",nameAr:"جاكوزي دافئ خاص تحت النجوم",nameEn:"Heated Cliffside Starlight Jacuzzi",descAr:"استرخاء في مياه دافئة مع إطلالة مفتوحة على أذرع مجرة درب التبانة.",descEn:"Hydrotherapy warm waters under the crystal-clear Milky Way expanse.",priceSAR:550,perNight:!0,icon:"✨"},{id:"astronomer",nameAr:"مرشد فلكي وباحث تراثي خاص",nameEn:"Private Stargazing Astronomer Guide",descAr:"جلسة رصد خاصة مدتها ساعتان للتعرف على منازل القمر وأسماء النجوم عند العرب.",descEn:"2-hour private deep sky exploration decoding ancient Arabian star lore.",priceSAR:800,perNight:!1,icon:"🧭"},{id:"feast",nameAr:"مائدة عشاء سعودية أصيلة وفطور صحراوي",nameEn:"Authentic Saudi Royal Feast & Breakfast",descAr:"حنيذ ومندي مدفون على الجمر، كليجا حائل، فواكه طازجة، وفطور شروق الشمس.",descEn:"Underground coal-cooked Haneeth feast, Hail kleicha, & sunrise breakfast.",priceSAR:650,perNight:!0,icon:"🍽️"}];class x{static calculateNights(e,t){try{const a=new Date(e),i=new Date(t).getTime()-a.getTime(),r=Math.ceil(i/(1e3*60*60*24));return Math.max(1,isNaN(r)?1:r)}catch{return 1}}static generateBookingReference(e){const t=e.split("-")[0].toUpperCase(),a=Math.floor(1e3+Math.random()*9e3);return`RAWASI-${t}-${a}`}static computePrice(e,t){const a=this.calculateNights(t.checkIn,t.checkOut);let s=1,i="قبة فلكية جيوديسية زجاجية",r="Panoramic Geodesic Glass Dome";t.unitType==="sadu"?(s=1.18,i="خيمة السدو الملكية الفاخرة",r="Royal Handwoven Sadu Pavilion"):t.unitType==="airstream"&&(s=.92,i="جناح إيرستريم الفضي الكلاسيكي",r="Luxury Silver Airstream Suite");const l=Math.round(e*s),d=l*a;let c=0;const h=[];for(const b of t.selectedAmenities){const v=S.find(A=>A.id===b);if(v){const A=v.perNight?v.priceSAR*a:v.priceSAR;c+=A,h.push({id:v.id,titleAr:v.nameAr,titleEn:v.nameEn,cost:A})}}const u=d+c,g=Math.round(u*.15),f=u+g,k=this.generateBookingReference(t.retreatId);return{nights:a,basePricePerNight:l,unitMultiplier:s,unitTypeTitleAr:i,unitTypeTitleEn:r,subtotalNights:d,amenitiesTotal:c,amenitiesDetails:h,subtotalBeforeTax:u,vat15:g,totalSAR:f,bookingRef:k}}}function B(){return n.isAr(),`
    <header class="hero-section" id="hero">
      <div class="hero-glow-aurora"></div>
      
      <div class="container hero-container">
        <div class="hero-badge">
          <span class="pulsing-dot"></span>
          <span>${n.t("heroBadge")}</span>
        </div>

        <h1 class="hero-title">
          <span class="gradient-text-gold">${n.t("heroTitlePart1")}</span>
          <br>
          <span class="hero-title-light">${n.t("heroTitlePart2")}</span>
        </h1>

        <p class="hero-subtitle">
          ${n.t("heroSubtitle")}
        </p>

        <div class="hero-cta-group">
          <a href="#observatory" class="btn btn-primary btn-glow">
            <span>${n.t("heroCtaExplore")}</span>
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
          </a>
          <a href="#configurator" class="btn btn-glass">
            <span>${n.t("heroCtaCustom")}</span>
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        <div class="hero-stats-grid">
          <div class="stat-card glass-panel">
            <div class="stat-icon">🌌</div>
            <div class="stat-value gradient-text-gold">${n.t("heroStatBortle")}</div>
            <div class="stat-desc">${n.t("heroStatBortleDesc")}</div>
          </div>
          <div class="stat-card glass-panel">
            <div class="stat-icon">⛰️</div>
            <div class="stat-value gradient-text-gold">${n.t("heroStatAlt")}</div>
            <div class="stat-desc">${n.t("heroStatAltDesc")}</div>
          </div>
          <div class="stat-card glass-panel">
            <div class="stat-icon">📜</div>
            <div class="stat-value gradient-text-gold">${n.t("heroStatHeritage")}</div>
            <div class="stat-desc">${n.t("heroStatHeritageDesc")}</div>
          </div>
        </div>
      </div>
    </header>
  `}class w{static getMoonPhase(e=new Date){const t=new Date("2024-01-11T11:57:00Z").getTime(),a=29.53058867*24*60*60*1e3,i=((e.getTime()-t)%a+a)%a/a,r=Math.round((1-Math.cos(i*2*Math.PI))/2*100);let l="",d="",c="",h=10,u="",g="";return i<.03||i>.97?(l="مُحَاق (ولادة الهلال الجديد)",d="New Moon",h=10,u="استثنائي 10/10 (سماء حالكة تماماً لرصد المجرات السحيقة)",g="Exceptional 10/10 (Pitch black skies for deep sky astrophotography)",c="🌑"):i<.22?(l="هلال متزايد (هلال أول)",d="Waxing Crescent",h=9,u="ممتاز جداً 9/10 (إضاءة قمرية ضعيفة لا تحجب النجوم)",g="Superb 9/10 (Minimal moonlight, superb milky way contrast)",c="🌒"):i<.28?(l="تربيع أول",d="First Quarter",h=7,u="جيد 7/10 (تغرب إضاءة القمر بعد منتصف الليل)",g="Good 7/10 (Moon sets after midnight for dark early hours)",c="🌓"):i<.47?(l="أحدب متزايد",d="Waxing Gibbous",h=5,u="متوسط 5/10 (فرصة ممتازة لتصوير تضاريس القمر نفسه)",g="Moderate 5/10 (Great for lunar crater photography)",c="🌔"):i<.53?(l="بدر مكتمل",d="Full Moon",h=4,u="ليلة البدر 4/10 (إضاءة قمرية ساحرة للكثبان وتصوير تضاريس القمر)",g="Full Moon 4/10 (Mesmerizing dune landscape illumination)",c="🌕"):i<.72?(l="أحدب متناقص",d="Waning Gibbous",h=6,u="متوسط 6/10 (السماء داكنة قبل شروق القمر متأخراً)",g="Moderate 6/10 (Dark skies in early night hours)",c="🌖"):i<.78?(l="تربيع أخير",d="Last Quarter",h=7,u="جيد 7/10 (سماء النصف الأول من الليل حالكة)",g="Good 7/10 (First half of the night is pitch black)",c="🌗"):(l="هلال متناقص (هلال أخير)",d="Waning Crescent",h=9,u="ممتاز جداً 9/10 (مثالي لرصد الشهب والفجر الصادق)",g="Superb 9/10 (Ideal for meteor tracking before dawn)",c="🌘"),{phaseNameAr:l,phaseNameEn:d,illuminationPct:r,isWaxing:i<.5,astrophotographyScore:h,astrophotographyRatingAr:u,astrophotographyRatingEn:g,iconSvg:c}}static getVisiblePlanets(){return[{nameAr:"كوكب المشتري (سيد الكواكب)",nameEn:"Jupiter & 4 Galilean Moons",symbol:"♃",magnitude:-2.4,bestTimeAr:"من الساعة 8:30 م حتى الفجر",bestTimeEn:"From 8:30 PM until dawn",visibleTelescope:"أحزمة الغيوم العاصفة، البقعة الحمراء العظيمة، وأقماره الأربعة (غاليليو)",visibleTelescopeEn:"Cloud belts, Great Red Spot, & 4 Galilean Moons",status:"optimal"},{nameAr:"كوكب زحل (جوهرة الحلقات)",nameEn:"Saturn & Golden Rings",symbol:"♄",magnitude:.6,bestTimeAr:"من الغروب حتى الساعة 11:30 م",bestTimeEn:"From sunset until 11:30 PM",visibleTelescope:"حلقات زحل الذهبية الباهرة مع فاصل كاسيني وقمره الضخم تيتان",visibleTelescopeEn:"Iconic golden rings with Cassini Division & moon Titan",status:"optimal"},{nameAr:"كوكب الزهرة (نجمة الصباح / المساء)",nameEn:"Venus (Evening Star)",symbol:"♀",magnitude:-4.1,bestTimeAr:"الشفق الغروبي مباشرة (أول جرم يلمع بعد الشمس)",bestTimeEn:"Immediately at dusk twilight (brightest beacon)",visibleTelescope:"أطوار الكوكب الهلالية والطبقة السحابية الفائقة العاكسة",visibleTelescopeEn:"Crescent phase changes and dense reflective cloud decks",status:"moderate"}]}static calculateWindChill(e,t){if(e>15||t<5)return e;const a=13.12+.6215*e-11.37*Math.pow(t,.16)+.3965*e*Math.pow(t,.16);return Math.round(a)}static getPackingList(e){const t=[{id:"farwa-jacket",titleAr:"الفروة الصحراوية أو معطف دافئ ثقيل",titleEn:"Traditional Desert Farwa or Heavy Winter Coat",descAr:"تنخفض حرارة الصحراء والمرتفعات ليلاً بمقدار 15 إلى 18 درجة مقارنة بالنهار.",descEn:"Desert temperatures plunge 15-18°C as soon as dusk arrives.",essential:!0,category:"clothing"},{id:"red-flashlight",titleAr:"كشاف بإضاءة حمراء لحفظ تكيف العين للظلام",titleEn:"Red-Light Headlamp for Night Vision Retention",descAr:"الإضاءة الحمراء تحافظ على حساسية بؤبؤ العين لرصد سدم النجوم الخافتة.",descEn:"Red wavelengths preserve Rhodopsin night vision pigments for stargazing.",essential:!0,category:"astronomy"},{id:"desert-boots",titleAr:"أحذية مشي صحراوية مقاومة للرمال",titleEn:"High-Ankle Sand-Proof Trail Boots",descAr:"مناسبة للمشي على الكثبان والتشكيلات الصخرية أثناء جولات الرصد.",descEn:"Crucial for navigating soft dunes and rugged sandstone canyon paths.",essential:!0,category:"clothing"},{id:"camera-tripod",titleAr:"حامل كاميرا ثلاثي صلب (Tripod) للتصوير الفلكي",titleEn:"Heavy Duty Tripod for Astrophotography",descAr:"لالتقاط صور تعريض طويل (Long Exposure) لمجرة درب التبانة والشهب.",descEn:"Essential for stable long exposures (15-30s) capturing the Milky Way core.",essential:!1,category:"astronomy"},{id:"thermal-flask",titleAr:"حافظة حرارية للمشروبات الساخنة والقهوة السعودية",titleEn:"Insulated Thermal Flask for Hot Beverages & Saudi Coffee",descAr:"للاستمتاع بالقهوة الخولانية الدافئة خلال جلسات الرصد الممتدة.",descEn:"Enjoy piping hot Khawlani spiced coffee during extended midnight star vigils.",essential:!0,category:"comfort"}];return e==="mountain"&&t.push({id:"rain-shell",titleAr:"سترة مقاومة للرياح والرذاذ الجبلي",titleEn:"Windproof Alpine Shell & Moisture Shield",descAr:"ارتفاع السودة 3000م يصاحبه ضباب كثيف ونسمات جبلية قوية.",descEn:"Al Souda altitude exceeds 3000m with dense fog drifts and brisk winds.",essential:!0,category:"clothing"}),t}}function N(){const o=n.isAr(),e=w.getMoonPhase(new Date),t=w.getVisiblePlanets();return`
    <section class="section-container" id="observatory">
      <div class="container">
        <div class="section-header text-center">
          <span class="badge badge-cyan">
            🔭 ${o?"المرصد الفلكي التفاعلي":"Interactive Celestial Observatory"}
          </span>
          <h2 class="section-title gradient-text-gold">${n.t("celestialTitle")}</h2>
          <p class="section-subtitle">${n.t("celestialSubtitle")}</p>
        </div>

        <!-- Observatory Top Bar: Constellations Tabs & Bortle Scale -->
        <div class="observatory-controls glass-panel">
          <div class="constellation-tabs" id="constellation-tabs">
            ${y.map((a,s)=>`
              <button class="tab-btn ${s===0?"active":""}" data-constellation-id="${a.id}">
                <span class="tab-star">✦</span>
                <span>${o?a.nameAr:a.nameEn}</span>
              </button>
            `).join("")}
          </div>

          <div class="bortle-control-wrapper">
            <div class="bortle-label-row">
              <span class="bortle-title">${n.t("bortleScaleLabel")}</span>
              <span class="bortle-value-badge" id="bortle-display-text">${n.t("bortle1")}</span>
            </div>
            <div class="slider-row">
              <input type="range" id="bortle-slider" min="1" max="4" step="1" value="1" class="custom-slider">
              <div class="bortle-ticks">
                <span>1 (${o?"حالك":"Pristine"})</span>
                <span>2</span>
                <span>3</span>
                <span>4 (${o?"مضيء":"Suburban"})</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Canvas Visualizer Frame -->
        <div class="stargazing-viewport-frame glass-panel">
          <canvas id="celestial-canvas" class="celestial-canvas"></canvas>
          
          <div class="canvas-overlay-hints">
            <span class="hint-pulse"></span>
            <span>${n.t("interactivityTip")}</span>
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
                <div class="lore-tag">${o?"التراث الفلكي العربي:":"Arabian Star Lore:"}</div>
                <p id="constellation-tradition" class="lore-text"></p>
              </div>
              <p id="constellation-description" class="desc-text"></p>
            </div>

            <div class="card-footer">
              <span class="tip-label">🌟 ${o?"انقر على أي نجم في الخريطة لرؤية اسمه وتفاصيله":"Click any star node in the map for astrophysical data"}</span>
            </div>
          </div>
        </div>

        <!-- Secondary Astronomical Widgets: Moon Phase & Planet Radar -->
        <div class="celestial-widgets-grid">
          <!-- Live Moon Phase Card -->
          <div class="astro-widget-card glass-panel">
            <div class="widget-header">
              <span class="widget-icon">🌙</span>
              <h4>${n.t("moonWidgetTitle")}</h4>
            </div>
            <div class="moon-phase-content">
              <div class="moon-render-icon">${e.iconSvg}</div>
              <div class="moon-details">
                <div class="moon-name">${o?e.phaseNameAr:e.phaseNameEn}</div>
                <div class="moon-stat-row">
                  <span>${n.t("illumination")}</span>
                  <strong>${e.illuminationPct}%</strong>
                </div>
                <div class="moon-astro-score">
                  <span class="score-tag">${n.t("astroRating")}</span>
                  <div class="score-badge ${e.astrophotographyScore>=8?"badge-good":"badge-mid"}">
                    ${o?e.astrophotographyRatingAr:e.astrophotographyRatingEn}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Planet Radar Card -->
          <div class="astro-widget-card glass-panel">
            <div class="widget-header">
              <span class="widget-icon">🪐</span>
              <h4>${n.t("planetsRadarTitle")}</h4>
            </div>
            <div class="planets-list">
              ${t.map(a=>`
                <div class="planet-item">
                  <div class="planet-symbol-col">
                    <span class="planet-glyph">${a.symbol}</span>
                  </div>
                  <div class="planet-info-col">
                    <div class="planet-name-row">
                      <strong>${o?a.nameAr:a.nameEn}</strong>
                      <span class="planet-mag">Mag ${a.magnitude>0?"+":""}${a.magnitude}</span>
                    </div>
                    <div class="planet-timing">⏱️ ${o?a.bestTimeAr:a.bestTimeEn}</div>
                    <div class="planet-telescope">🔭 ${o?a.visibleTelescope:a.visibleTelescopeEn}</div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>

      </div>
    </section>
  `}function G(){const o=n.isAr();return`
    <section class="section-container" id="retreats">
      <div class="container">
        <div class="section-header text-center">
          <span class="badge badge-gold">
            ⛺ ${o?"أطلس الوجهات والملاذات الفاخرة":"Iconic Desert Sanctuaries Atlas"}
          </span>
          <h2 class="section-title gradient-text-gold">${n.t("retreatsTitle")}</h2>
          <p class="section-subtitle">${n.t("retreatsSubtitle")}</p>
        </div>

        <!-- Filters & Lighting Controls -->
        <div class="retreats-toolbar glass-panel">
          <div class="terrain-filters" id="terrain-filters">
            <button class="filter-btn active" data-terrain="all">${n.t("filterAll")}</button>
            <button class="filter-btn" data-terrain="canyon">${n.t("filterCanyon")}</button>
            <button class="filter-btn" data-terrain="mountain">${n.t("filterMountain")}</button>
            <button class="filter-btn" data-terrain="crimson">${n.t("filterCrimson")}</button>
            <button class="filter-btn" data-terrain="coastal">${n.t("filterCoastal")}</button>
          </div>

          <div class="lighting-mode-toggle">
            <span class="toggle-caption">${n.t("toggleDayNight")}:</span>
            <div class="lighting-btn-group">
              <button class="light-mode-btn" id="btn-mode-day" title="${n.t("viewDay")}">
                ☀️ <span>${o?"نهار":"Day"}</span>
              </button>
              <button class="light-mode-btn active" id="btn-mode-night" title="${n.t("viewNight")}">
                ✨ <span>${o?"ليل ونجوم":"Night"}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Retreats Grid -->
        <div class="retreats-grid" id="retreats-grid">
          ${m.map(e=>T(e,o,"night")).join("")}
        </div>
      </div>
    </section>
  `}function T(o,e,t="night"){const a=t==="day"?o.imageDay:o.imageNight,s=e?o.terrainAr:o.terrainEn,i=e?o.nameAr:o.nameEn,r=e?o.regionAr:o.regionEn,l=e?o.descriptionAr:o.descriptionEn,d=e?o.elevation:o.elevationEn,c=e?o.bortleDescAr:o.bortleDescEn,h=e?o.featuresAr:o.featuresEn;return`
    <article class="retreat-card glass-panel" data-terrain="${o.terrain}" data-retreat-id="${o.id}">
      <div class="card-media-wrapper">
        <img src="${a}" alt="${i}" class="retreat-image" loading="lazy" />
        <div class="media-overlay-gradient"></div>
        
        <div class="media-badges-top">
          <span class="terrain-pill">
            <span class="pill-dot"></span>
            ${s}
          </span>
          <span class="bortle-pill">
            ★ Bortle ${o.bortleScale}
          </span>
        </div>

        <div class="price-overlay-tag">
          <span class="price-val">${o.pricePerNight.toLocaleString()}</span>
          <span class="price-curr">${e?"ر.س":"SAR"}</span>
          <span class="price-period">/ ${e?"ليلة":"night"}</span>
        </div>
      </div>

      <div class="card-content">
        <div class="location-row">
          <span class="pin-icon">📍</span>
          <span class="location-name">${r}</span>
          <span class="gps-coords">${o.gps}</span>
        </div>

        <h3 class="retreat-card-title">${i}</h3>
        <p class="retreat-card-desc">${l}</p>

        <div class="spec-metrics-row">
          <div class="metric-item">
            <span class="m-icon">⛰️</span>
            <div class="m-info">
              <span class="m-label">${e?"الارتفاع":"Elevation"}</span>
              <span class="m-val">${d}</span>
            </div>
          </div>
          <div class="metric-item">
            <span class="m-icon">🌌</span>
            <div class="m-info">
              <span class="m-label">${e?"السماء":"Dark Sky"}</span>
              <span class="m-val">${c.split("(")[0]}</span>
            </div>
          </div>
          <div class="metric-item">
            <span class="m-icon">🌡️</span>
            <div class="m-info">
              <span class="m-label">${e?"الليل":"Night"}</span>
              <span class="m-val">${o.temperature.nightC}°C</span>
            </div>
          </div>
        </div>

        <div class="card-features-list">
          <div class="features-title">${n.t("amenitiesIncluded")}</div>
          <ul>
            ${h.slice(0,3).map(u=>`
              <li><span class="feature-bullet">✦</span> <span>${u}</span></li>
            `).join("")}
          </ul>
        </div>

        <div class="card-actions">
          <button class="btn btn-primary btn-book-retreat" data-retreat-id="${o.id}">
            <span>${n.t("reserveNowBtn")}</span>
          </button>
          <button class="btn btn-outline btn-configure-retreat" data-retreat-id="${o.id}">
            <span>${n.t("customizeThisRetreat")}</span>
          </button>
        </div>
      </div>
    </article>
  `}function W(o){const e=n.isAr(),t=m.find(s=>s.id===o.retreatId)||m[0],a=x.computePrice(t.pricePerNight,o);return`
    <section class="section-container" id="configurator">
      <div class="container">
        <div class="section-header text-center">
          <span class="badge badge-cyan">
            🛠️ ${e?"استوديو التصميم والتخصيص الذكي":"Smart Glamping Design Studio"}
          </span>
          <h2 class="section-title gradient-text-gold">${n.t("configuratorTitle")}</h2>
          <p class="section-subtitle">${n.t("configuratorSubtitle")}</p>
        </div>

        <div class="configurator-layout-grid">
          <!-- Left Column: Interactive Options & Amenities -->
          <div class="configurator-controls-col">
            
            <!-- Step 1: Destination Selector -->
            <div class="step-card glass-panel">
              <h3 class="step-title">${n.t("chooseRetreat")}</h3>
              <div class="retreat-pill-selector" id="retreat-pill-selector">
                ${m.map(s=>`
                  <button class="retreat-select-btn ${s.id===o.retreatId?"active":""}" data-retreat-id="${s.id}">
                    <span class="btn-location-icon">📍</span>
                    <span class="btn-name">${e?s.nameAr.split("-")[0]:s.nameEn.split("-")[0]}</span>
                    <span class="btn-region">${e?s.regionAr.split("،")[0]:s.regionEn.split(",")[0]}</span>
                  </button>
                `).join("")}
              </div>
            </div>

            <!-- Step 2: Unit Architecture Style -->
            <div class="step-card glass-panel">
              <h3 class="step-title">${n.t("chooseUnitType")}</h3>
              <div class="unit-types-grid" id="unit-types-grid">
                
                <!-- Dome -->
                <div class="unit-type-option ${o.unitType==="dome"?"selected":""}" data-unit="dome">
                  <div class="unit-icon-glow">🔮</div>
                  <div class="unit-header-info">
                    <h4>${n.t("unitDome")}</h4>
                    <span class="unit-badge">${e?"الخيار الأكثر طلباً":"Signature Experience"}</span>
                  </div>
                  <p class="unit-desc">${n.t("unitDomeDesc")}</p>
                  <div class="unit-rate-tag">100% ${e?"السعر القياسي":"Standard Rate"}</div>
                </div>

                <!-- Sadu -->
                <div class="unit-type-option ${o.unitType==="sadu"?"selected":""}" data-unit="sadu">
                  <div class="unit-icon-glow">⛺</div>
                  <div class="unit-header-info">
                    <h4>${n.t("unitSadu")}</h4>
                    <span class="unit-badge badge-gold">${e?"تراث ملكي":"Royal Heritage"}</span>
                  </div>
                  <p class="unit-desc">${n.t("unitSaduDesc")}</p>
                  <div class="unit-rate-tag">+18% ${e?"فخامة ملكية":"Heritage Luxury"}</div>
                </div>

                <!-- Airstream -->
                <div class="unit-type-option ${o.unitType==="airstream"?"selected":""}" data-unit="airstream">
                  <div class="unit-icon-glow">🚐</div>
                  <div class="unit-header-info">
                    <h4>${n.t("unitAirstream")}</h4>
                    <span class="unit-badge badge-silver">${e?"عصري كلاسيكي":"Retro Luxury"}</span>
                  </div>
                  <p class="unit-desc">${n.t("unitAirstreamDesc")}</p>
                  <div class="unit-rate-tag">-8% ${e?"مرونة ورحابة":"Compact Luxury"}</div>
                </div>

              </div>
            </div>

            <!-- Step 3: Amenities Add-ons -->
            <div class="step-card glass-panel">
              <h3 class="step-title">${n.t("chooseAmenities")}</h3>
              <div class="amenities-checklist" id="amenities-checklist">
                ${S.map(s=>{const i=o.selectedAmenities.includes(s.id);return`
                    <label class="amenity-checkbox-card ${i?"active":""}">
                      <input type="checkbox" value="${s.id}" ${i?"checked":""} class="amenity-input">
                      <span class="amenity-custom-check"></span>
                      <div class="amenity-icon">${s.icon}</div>
                      <div class="amenity-text-content">
                        <div class="amenity-title-row">
                          <strong class="amenity-name">${e?s.nameAr:s.nameEn}</strong>
                          <span class="amenity-price-tag">+${s.priceSAR} ${e?"ر.س":"SAR"} ${s.perNight?e?"/ ليلة":"/ night":e?"/ مرة":"/ stay"}</span>
                        </div>
                        <p class="amenity-desc">${e?s.descAr:s.descEn}</p>
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
              <div class="preview-backdrop" id="preview-backdrop" style="background-image: url('${t.imageNight}')">
                <div class="preview-sky-stars"></div>
                <div class="preview-aurora-glow"></div>
                
                <div class="preview-badge-layer">
                  <span class="live-tag">
                    <span class="live-dot"></span>
                    ${e?"محاكاة ليلية حية":"Live Night Sim"}
                  </span>
                  <span class="preview-elevation">${t.elevation}</span>
                </div>

                <div class="preview-center-unit">
                  <div class="unit-3d-model" id="unit-3d-model">
                    ${O(o.unitType)}
                  </div>
                </div>

                <div class="preview-amenities-overlay" id="preview-amenities-overlay">
                  ${o.selectedAmenities.map(s=>{const i=S.find(r=>r.id===s);return i?`<span class="amenity-bubble" title="${e?i.nameAr:i.nameEn}">${i.icon}</span>`:""}).join("")}
                </div>
              </div>
            </div>

            <!-- Live Price Calculator Panel -->
            <div class="price-calculator-panel glass-panel" id="price-calculator-panel">
              <h3 class="calc-panel-title gradient-text-gold">${n.t("bookingSummaryTitle")}</h3>
              
              <!-- Date Pickers & Guests Counter -->
              <div class="dates-counter-grid">
                <div class="form-field">
                  <label for="input-check-in">${n.t("checkInDate")}</label>
                  <input type="date" id="input-check-in" value="${o.checkIn}" class="custom-date-input">
                </div>
                <div class="form-field">
                  <label for="input-check-out">${n.t("checkOutDate")}</label>
                  <input type="date" id="input-check-out" value="${o.checkOut}" class="custom-date-input">
                </div>
                <div class="form-field">
                  <label for="input-guests">${n.t("guestsCount")}</label>
                  <select id="input-guests" class="custom-select">
                    <option value="1" ${o.guestsCount===1?"selected":""}>1 ${e?"ضيف":"Guest"}</option>
                    <option value="2" ${o.guestsCount===2?"selected":""}>2 ${e?"ضيوف (موصى به)":"Guests (Recommended)"}</option>
                    <option value="3" ${o.guestsCount===3?"selected":""}>3 ${e?"ضيوف":"Guests"}</option>
                    <option value="4" ${o.guestsCount===4?"selected":""}>4 ${e?"ضيوف":"Guests"}</option>
                  </select>
                </div>
              </div>

              <!-- Price Breakdown List -->
              <div class="price-breakdown-list" id="price-breakdown-container">
                ${$(a,e)}
              </div>

              <button class="btn btn-primary btn-block btn-lg btn-glow" id="btn-proceed-booking">
                <span>${n.t("proceedBookingBtn")}</span>
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  `}function $(o,e){const t=e?"ر.س":"SAR";return`
    <div class="breakdown-row">
      <span class="row-label">${e?o.unitTypeTitleAr:o.unitTypeTitleEn} (${o.nights} ${e?"ليالٍ":"nights"} × ${o.basePricePerNight.toLocaleString()} ${t}):</span>
      <span class="row-val">${o.subtotalNights.toLocaleString()} ${t}</span>
    </div>

    ${o.amenitiesDetails.map(a=>`
      <div class="breakdown-row sub-amenity-row">
        <span class="row-label">+ ${e?a.titleAr:a.titleEn}:</span>
        <span class="row-val">+${a.cost.toLocaleString()} ${t}</span>
      </div>
    `).join("")}

    <div class="breakdown-divider"></div>

    <div class="breakdown-row">
      <span class="row-label">${n.t("staySubtotal")}:</span>
      <span class="row-val">${o.subtotalBeforeTax.toLocaleString()} ${t}</span>
    </div>

    <div class="breakdown-row">
      <span class="row-label">${n.t("vatLabel")}:</span>
      <span class="row-val">${o.vat15.toLocaleString()} ${t}</span>
    </div>

    <div class="breakdown-total-row">
      <span class="total-label gradient-text-gold">${n.t("totalSARLabel")}</span>
      <div class="total-val-box">
        <span class="total-amount">${o.totalSAR.toLocaleString()}</span>
        <span class="total-currency">${t}</span>
      </div>
    </div>
  `}function O(o){return o==="sadu"?`
      <div class="sadu-tent-graphic">
        <div class="sadu-roof"></div>
        <div class="sadu-walls">
          <div class="sadu-pattern-stripe"></div>
        </div>
        <div class="sadu-entrance"></div>
      </div>
    `:o==="airstream"?`
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
    `}function C(o="alula-ashar"){const e=n.isAr(),t=m.find(r=>r.id===o)||m[0],a=w.calculateWindChill(t.temperature.nightC,t.temperature.windSpeedKmh),s=w.getPackingList(t.terrain),i=t.temperature.dayC-t.temperature.nightC;return`
    <section class="section-container" id="weather">
      <div class="container">
        <div class="section-header text-center">
          <span class="badge badge-gold">
            ❄️ ${e?"حاسبة الطقس والمناخ الصحراوي":"Microclimate & Night Chill Advisor"}
          </span>
          <h2 class="section-title gradient-text-gold">${n.t("weatherTitle")}</h2>
          <p class="section-subtitle">${n.t("weatherSubtitle")}</p>
        </div>

        <!-- Retreat Selector for Weather -->
        <div class="weather-retreat-tabs" id="weather-retreat-tabs">
          ${m.map(r=>`
            <button class="weather-tab-btn ${r.id===o?"active":""}" data-retreat-id="${r.id}">
              <span>${e?r.nameAr.split("-")[0]:r.nameEn.split("-")[0]}</span>
              <small>${r.elevation}</small>
            </button>
          `).join("")}
        </div>

        <div class="weather-content-grid">
          
          <!-- Temperature Delta & Wind Chill Panel -->
          <div class="weather-temp-card glass-panel">
            <div class="card-header">
              <div class="header-loc">
                <h3>${e?t.nameAr:t.nameEn}</h3>
                <span class="gps-badge">📍 ${t.gps}</span>
              </div>
              <div class="chill-alert-pill">
                <span>⚠️ ${e?`فارق حراري يبلغ ${i} درجة مئوية!`:`Severe ${i}°C Diurnal Drop!`}</span>
              </div>
            </div>

            <!-- Visual Temperature Bars -->
            <div class="temp-bars-comparison">
              <!-- Day Temp -->
              <div class="temp-col day-col">
                <div class="temp-icon">☀️</div>
                <div class="temp-val">${t.temperature.dayC}°C</div>
                <div class="temp-name">${n.t("dayTemp")}</div>
                <div class="temp-bar-outer">
                  <div class="temp-bar-fill day-fill" style="height: ${t.temperature.dayC/45*100}%"></div>
                </div>
              </div>

              <!-- Night Temp -->
              <div class="temp-col night-col">
                <div class="temp-icon">🌙</div>
                <div class="temp-val">${t.temperature.nightC}°C</div>
                <div class="temp-name">${n.t("nightTemp")}</div>
                <div class="temp-bar-outer">
                  <div class="temp-bar-fill night-fill" style="height: ${t.temperature.nightC/45*100}%"></div>
                </div>
              </div>

              <!-- Wind Chill Felt -->
              <div class="temp-col chill-col">
                <div class="temp-icon">💨</div>
                <div class="temp-val">${a}°C</div>
                <div class="temp-name">${n.t("windChill")}</div>
                <div class="temp-bar-outer">
                  <div class="temp-bar-fill chill-fill" style="height: ${a/45*100}%"></div>
                </div>
              </div>
            </div>

            <div class="microclimate-specs-grid">
              <div class="spec-tile">
                <span class="spec-label">${e?"سرعة الرياح الليلية":"Night Wind Speed"}</span>
                <strong class="spec-data">${t.temperature.windSpeedKmh} km/h</strong>
              </div>
              <div class="spec-tile">
                <span class="spec-label">${e?"الرطوبة النسبية":"Humidity"}</span>
                <strong class="spec-data">${t.temperature.humidityPct}%</strong>
              </div>
              <div class="spec-tile">
                <span class="spec-label">${e?"الارتفاع الجغرافي":"Altitude"}</span>
                <strong class="spec-data">${t.elevation}</strong>
              </div>
              <div class="spec-tile">
                <span class="spec-label">${e?"تأثير الغطاء السحابي":"Cloud Cover Impact"}</span>
                <strong class="spec-data">${t.terrain==="mountain"?e?"ضباب ساحر عالي":"High Cloud Inversion":e?"سماء صافية 0%":"Clear Skies 0%"}</strong>
              </div>
            </div>
          </div>

          <!-- Dynamic Packing Checklist -->
          <div class="packing-advisor-card glass-panel">
            <div class="packing-header">
              <span class="backpack-icon">🎒</span>
              <div>
                <h4>${n.t("packingListTitle")}</h4>
                <p class="packing-sub">${e?"قائمة تفاعلية مخصصة لتضاريس ودرجة حرارة هذه الوجهة":"Tailored interactive checklist for this microclimate"}</p>
              </div>
            </div>

            <div class="packing-checklist" id="packing-checklist">
              ${s.map(r=>`
                <label class="packing-item-row">
                  <input type="checkbox" class="pack-checkbox">
                  <span class="pack-custom-box"></span>
                  <div class="pack-info">
                    <div class="pack-title-row">
                      <strong class="pack-title">${e?r.titleAr:r.titleEn}</strong>
                      <span class="pack-badge ${r.essential?"badge-essential":"badge-optional"}">
                        ${r.essential?n.t("packEssential"):n.t("packRecommended")}
                      </span>
                    </div>
                    <p class="pack-desc">${e?r.descAr:r.descEn}</p>
                  </div>
                </label>
              `).join("")}
            </div>

            <div class="packing-footer-tip">
              <span>💡 ${e?"يتم توفير بطانيات صوف دافئة ومدافئ خارجية في جميع ملاذاتنا مجاناً.":"Complimentary luxury merino wool blankets and heaters provided at all sanctuaries."}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  `}function H(o,e){const t=n.isAr(),a=m.find(i=>i.id===o.retreatId)||m[0],s=t?"ر.س":"SAR";return`
    <div class="modal-backdrop" id="booking-modal-backdrop">
      <div class="modal-dialog glass-panel" id="booking-modal-dialog">
        <div class="modal-header">
          <div class="modal-title-box">
            <span class="modal-badge">✨ 6-Star Glamping Booking</span>
            <h3 class="modal-title gradient-text-gold">${n.t("modalTitle")}</h3>
          </div>
          <button class="modal-close-btn" id="btn-close-booking-modal" aria-label="Close">&times;</button>
        </div>

        <div class="modal-body">
          <div class="modal-summary-strip">
            <div class="summary-pill">
              <span class="sp-label">${t?"الملاذ المختارة:":"Sanctuary:"}</span>
              <strong class="sp-val">${t?a.nameAr.split("-")[0]:a.nameEn.split("-")[0]}</strong>
            </div>
            <div class="summary-pill">
              <span class="sp-label">${t?"الفترة:":"Dates:"}</span>
              <strong class="sp-val">${o.checkIn} ➔ ${o.checkOut} (${e.nights} ${t?"ليالٍ":"nights"})</strong>
            </div>
            <div class="summary-pill">
              <span class="sp-label">${t?"المجموع النهائي:":"Total Amount:"}</span>
              <strong class="sp-val text-gold">${e.totalSAR.toLocaleString()} ${s}</strong>
            </div>
          </div>

          <form id="booking-form" class="booking-form">
            <div class="form-section-title">${n.t("guestDetailsTitle")}</div>

            <div class="form-row-2">
              <div class="form-group">
                <label for="guest-name">${n.t("fullName")} *</label>
                <input type="text" id="guest-name" required placeholder="${t?"أ. طارق ابوعشي":"Tareq Aboushi"}" class="form-input" value="${t?"أ. طارق ابوعشي":"Tareq Aboushi"}">
              </div>
              <div class="form-group">
                <label for="guest-phone">${n.t("phone")} *</label>
                <input type="tel" id="guest-phone" required placeholder="+966 50 000 0000" class="form-input" value="+966 50 123 4567">
              </div>
            </div>

            <div class="form-group">
              <label for="guest-email">${n.t("email")} *</label>
              <input type="email" id="guest-email" required placeholder="tareq@example.com" class="form-input" value="tareq.aboushi@gmail.com">
            </div>

            <div class="form-group">
              <label for="guest-notes">${n.t("specialNotes")}</label>
              <textarea id="guest-notes" rows="2" class="form-textarea" placeholder="${t?"تفضيلات إعداد القهوة السعودية، تجهيزات تلسكوب محددة، أو أوقات وصول خاصة...":"Any preferences for Saudi coffee preparation, telescope eyepieces, or arrival time..."}"></textarea>
            </div>

            <div class="vat-disclaimer">
              <span class="vat-icon">ℹ️</span>
              <span>${t?"السعر المعروض شامل ضريبة القيمة المضافة 15% ورسوم الخدمة والضيافة الكاملة.":"Total price includes 15% Saudi VAT, luxury amenity preparation, and full concierge service."}</span>
            </div>

            <div class="modal-footer-actions">
              <button type="button" class="btn btn-outline" id="btn-cancel-modal">${n.t("closeModal")}</button>
              <button type="submit" class="btn btn-primary btn-glow btn-lg" id="btn-submit-booking">
                <span>${n.t("confirmAndGeneratePass")}</span>
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `}function z(o,e,t){const a=n.isAr(),s=m.find(l=>l.id===e.retreatId)||m[0],i=a?"ر.س":"SAR",r=V(t.bookingRef,s.gps);return`
    <div class="modal-backdrop pass-modal-backdrop" id="boarding-pass-backdrop">
      <div class="pass-dialog-container">
        
        <!-- Action Toolbar for Print & Close -->
        <div class="pass-toolbar no-print">
          <button class="btn btn-primary btn-glow" id="btn-print-pass">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
              <path d="M6 14h12v8H6z"/>
            </svg>
            <span>${n.t("printBoardingPass")}</span>
          </button>
          <button class="btn btn-outline" id="btn-close-pass-modal">
            <span>${n.t("closeModal")}</span> &times;
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
                <div class="brand-title">${n.t("boardingPassTitle")}</div>
                <div class="brand-sub">${n.t("boardingPassSub")}</div>
              </div>

              <div class="pass-pnr-box">
                <span class="pnr-title">${n.t("bookingRefLabel")}</span>
                <span class="pnr-code">${t.bookingRef}</span>
              </div>
            </div>

            <!-- Guest & Destination Details Grid -->
            <div class="pass-details-grid">
              
              <div class="pass-field-cell">
                <span class="field-label">${n.t("passengerName")}</span>
                <strong class="field-val">${o.fullName}</strong>
              </div>

              <div class="pass-field-cell">
                <span class="field-label">${n.t("destinationLabel")}</span>
                <strong class="field-val text-gold">${a?s.nameAr:s.nameEn}</strong>
              </div>

              <div class="pass-field-cell">
                <span class="field-label">${n.t("unitTypeLabel")}</span>
                <strong class="field-val">${a?t.unitTypeTitleAr:t.unitTypeTitleEn}</strong>
              </div>

              <div class="pass-field-cell">
                <span class="field-label">${n.t("bortleRatingLabel")}</span>
                <strong class="field-val">★ Bortle Class ${s.bortleScale} (${a?s.bortleDescAr.split("(")[0]:s.bortleDescEn.split("(")[0]})</strong>
              </div>

              <div class="pass-field-cell">
                <span class="field-label">${n.t("checkInLabel")}</span>
                <strong class="field-val">${e.checkIn} (15:00)</strong>
              </div>

              <div class="pass-field-cell">
                <span class="field-label">${n.t("checkOutLabel")}</span>
                <strong class="field-val">${e.checkOut} (12:00)</strong>
              </div>

              <div class="pass-field-cell">
                <span class="field-label">${n.t("gpsLabel")}</span>
                <strong class="field-val font-mono">${s.gps}</strong>
              </div>

              <div class="pass-field-cell">
                <span class="field-label">${n.t("totalPaidLabel")}</span>
                <strong class="field-val text-gold">${t.totalSAR.toLocaleString()} ${i} [PAID]</strong>
              </div>

            </div>

            <!-- Signature & Curated Amenities Strip -->
            <div class="pass-amenities-strip">
              <span class="amenities-strip-label">${a?"الباقة والخدمات المشمولة في التصريح:":"Included Privileges & Astronomy Access:"}</span>
              <div class="amenities-tags-row">
                <span class="tag-pill">🔭 ${a?"مرصد فلكي وتلسكوب خاص":"Private Telescope"}</span>
                <span class="tag-pill">🔥 ${a?"سمر وحطب صحراوي":"Sand Dune Firepit"}</span>
                <span class="tag-pill">☕ ${a?"قهوة خولانية ملكية":"Royal Khawlani Coffee"}</span>
                <span class="tag-pill">🚙 ${a?"مرافقة سيارات الدفع الرباعي":"4x4 Desert Concierge"}</span>
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
                ${r}
              </div>

              <div class="stub-qr-note">
                ${n.t("qrCodeSubtitle")}
              </div>

              <div class="stub-barcode-block">
                <div class="barcode-lines"></div>
                <div class="barcode-number">${t.bookingRef}</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  `}function V(o,e){return`
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
  `}class q{constructor(){p(this,"canvasEngine",null);p(this,"currentTerrainFilter","all");p(this,"currentLightingMode","night");p(this,"activeWeatherRetreatId","alula-ashar");p(this,"configSelection",{retreatId:"alula-ashar",unitType:"dome",selectedAmenities:["telescope","firepit"],checkIn:this.getDefaultCheckInDate(),checkOut:this.getDefaultCheckOutDate(),guestsCount:2});p(this,"currentGuestDetails",{fullName:"أ. طارق ابوعشي",phone:"+966 50 123 4567",email:"tareq.aboushi@gmail.com",notes:""});this.initApp()}getDefaultCheckInDate(){const e=new Date;return e.setDate(e.getDate()+3),e.toISOString().split("T")[0]}getDefaultCheckOutDate(){const e=new Date;return e.setDate(e.getDate()+6),e.toISOString().split("T")[0]}initApp(){this.applyThemeFromStorage(),this.renderAllViews(),this.setupGlobalControls(),this.setupCelestialObservatory(),this.setupRetreatsEvents(),this.setupConfiguratorEvents(),this.setupWeatherEvents(),n.onLanguageChange(()=>{this.renderAllViews(),this.updateNavbarLabels(),this.setupCelestialObservatory(),this.setupRetreatsEvents(),this.setupConfiguratorEvents(),this.setupWeatherEvents()})}renderAllViews(){const e=document.getElementById("app");e&&(e.innerHTML=`
      ${B()}
      ${N()}
      ${G()}
      ${W(this.configSelection)}
      ${C(this.activeWeatherRetreatId)}
    `,this.updateNavbarLabels())}updateNavbarLabels(){const e=n.isAr(),t=(a,s)=>{const i=document.getElementById(a);i&&(i.textContent=s)};t("nav-brand-name",n.t("brandName")),t("nav-brand-tagline",n.t("brandTagline")),t("nav-link-home",n.t("navHome")),t("nav-link-observatory",n.t("navObservatory")),t("nav-link-retreats",n.t("navRetreats")),t("nav-link-configurator",n.t("navConfigurator")),t("nav-link-weather",n.t("navWeather")),t("nav-btn-book",n.t("navBookNow")),t("lang-text",e?"English":"العربية"),t("footer-dest-title",e?"الملاذات الصحراوية":"Desert Sanctuaries"),t("footer-astro-title",e?"مرصد النجوم والفلك":"Astro Observatory"),t("footer-desc",n.t("footerBrandDesc")),t("footer-copy",n.t("copyright")+" • "+n.t("vision2030"))}setupGlobalControls(){const e=document.getElementById("btn-audio-toggle"),t=document.getElementById("audio-icon");e==null||e.addEventListener("click",async()=>{const i=await I.toggle();e&&e.classList.toggle("active",i),t&&(t.textContent=i?"🔊":"🔥")});const a=document.getElementById("btn-theme-toggle");a==null||a.addEventListener("click",()=>{const r=(document.documentElement.getAttribute("data-theme")||"dark")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",r),localStorage.setItem("rawasi_theme",r),this.updateThemeIcon(r)});const s=document.getElementById("btn-lang-toggle");s==null||s.addEventListener("click",()=>{n.toggleLang()})}applyThemeFromStorage(){const e=localStorage.getItem("rawasi_theme")||"dark";document.documentElement.setAttribute("data-theme",e),this.updateThemeIcon(e)}updateThemeIcon(e){const t=document.getElementById("theme-icon");t&&(t.textContent=e==="dark"?"🌙":"☀️")}setupCelestialObservatory(){const e=document.getElementById("celestial-canvas");if(!e)return;this.canvasEngine&&this.canvasEngine.destroy(),this.canvasEngine=new M(e),this.canvasEngine.setLanguage(n.isAr()),this.updateConstellationInfo("orion");const t=document.getElementById("constellation-tabs");t==null||t.addEventListener("click",i=>{var d;const r=i.target.closest(".tab-btn");if(!r)return;const l=r.getAttribute("data-constellation-id");l&&(t.querySelectorAll(".tab-btn").forEach(c=>c.classList.remove("active")),r.classList.add("active"),(d=this.canvasEngine)==null||d.setActiveConstellation(l),this.updateConstellationInfo(l))});const a=document.getElementById("bortle-slider"),s=document.getElementById("bortle-display-text");a==null||a.addEventListener("input",()=>{var r;const i=parseInt(a.value,10);(r=this.canvasEngine)==null||r.setBortleScale(i),s&&(i===1?s.textContent=n.t("bortle1"):i===2?s.textContent=n.t("bortle2"):i===3?s.textContent=n.t("bortle3"):s.textContent=n.t("bortle4"))}),this.canvasEngine.onStarSelect((i,r)=>{const l=n.isAr(),d=document.getElementById("constellation-season"),c=document.getElementById("constellation-name"),h=document.getElementById("constellation-description");d&&(d.textContent=`✦ ${l?"نجم مرصود في":"Star observed in"} ${l?r.nameAr:r.nameEn}`),c&&(c.textContent=`${l?i.nameAr:i.nameEn} (Mag ${i.magnitude})`),h&&(h.textContent=l?`النجم: ${i.nameAr} • القدر الظاهري: ${i.magnitude} • يقع في قلب ${r.nameAr}. يُعد من ألمع العلامات الإرشادية لرحالة الصحراء.`:`Star: ${i.nameEn} • Apparent Magnitude: ${i.magnitude} • Anchors ${r.nameEn}. Used for desert orientation.`)})}updateConstellationInfo(e){const t=n.isAr(),a=y.find(d=>d.id===e);if(!a)return;const s=document.getElementById("constellation-season"),i=document.getElementById("constellation-name"),r=document.getElementById("constellation-tradition"),l=document.getElementById("constellation-description");s&&(s.textContent=t?a.seasonAr:a.seasonEn),i&&(i.textContent=t?a.nameAr:a.nameEn),r&&(r.textContent=t?a.arabicTraditionAr:a.arabicTraditionEn),l&&(l.textContent=t?a.loreAr:a.loreEn)}setupRetreatsEvents(){const e=document.getElementById("terrain-filters");e==null||e.addEventListener("click",i=>{const r=i.target.closest(".filter-btn");if(!r)return;const l=r.getAttribute("data-terrain");l&&(this.currentTerrainFilter=l,e.querySelectorAll(".filter-btn").forEach(d=>d.classList.remove("active")),r.classList.add("active"),this.filterRetreatsDisplay())});const t=document.getElementById("btn-mode-day"),a=document.getElementById("btn-mode-night");t==null||t.addEventListener("click",()=>{this.currentLightingMode="day",t.classList.add("active"),a==null||a.classList.remove("active"),this.filterRetreatsDisplay()}),a==null||a.addEventListener("click",()=>{this.currentLightingMode="night",a.classList.add("active"),t==null||t.classList.remove("active"),this.filterRetreatsDisplay()});const s=document.getElementById("retreats-grid");s==null||s.addEventListener("click",i=>{var d;const r=i.target.closest(".btn-book-retreat");if(r){const c=r.getAttribute("data-retreat-id");c&&(this.configSelection.retreatId=c,this.openBookingModal());return}const l=i.target.closest(".btn-configure-retreat");if(l){const c=l.getAttribute("data-retreat-id");c&&(this.configSelection.retreatId=c,this.syncConfiguratorUI(),(d=document.getElementById("configurator"))==null||d.scrollIntoView({behavior:"smooth"}))}})}filterRetreatsDisplay(){const e=document.getElementById("retreats-grid");if(!e)return;const t=this.currentTerrainFilter==="all"?m:m.filter(a=>a.terrain===this.currentTerrainFilter);e.innerHTML=t.map(a=>T(a,n.isAr(),this.currentLightingMode)).join("")}setupConfiguratorEvents(){const e=document.getElementById("retreat-pill-selector");e==null||e.addEventListener("click",d=>{const c=d.target.closest(".retreat-select-btn");if(!c)return;const h=c.getAttribute("data-retreat-id");h&&(this.configSelection.retreatId=h,e.querySelectorAll(".retreat-select-btn").forEach(u=>u.classList.remove("active")),c.classList.add("active"),this.syncConfiguratorUI())});const t=document.getElementById("unit-types-grid");t==null||t.addEventListener("click",d=>{const c=d.target.closest(".unit-type-option");if(!c)return;const h=c.getAttribute("data-unit");h&&(this.configSelection.unitType=h,t.querySelectorAll(".unit-type-option").forEach(u=>u.classList.remove("selected")),c.classList.add("selected"),this.syncConfiguratorUI())});const a=document.getElementById("amenities-checklist");a==null||a.addEventListener("change",d=>{var h;const c=d.target;if(c&&c.classList.contains("amenity-input")){const u=c.value;c.checked?this.configSelection.selectedAmenities.includes(u)||this.configSelection.selectedAmenities.push(u):this.configSelection.selectedAmenities=this.configSelection.selectedAmenities.filter(g=>g!==u),(h=c.closest(".amenity-checkbox-card"))==null||h.classList.toggle("active",c.checked),this.syncConfiguratorUI()}});const s=document.getElementById("input-check-in"),i=document.getElementById("input-check-out");s==null||s.addEventListener("change",()=>{this.configSelection.checkIn=s.value,this.syncConfiguratorUI()}),i==null||i.addEventListener("change",()=>{this.configSelection.checkOut=i.value,this.syncConfiguratorUI()});const r=document.getElementById("input-guests");r==null||r.addEventListener("change",()=>{this.configSelection.guestsCount=parseInt(r.value,10)||2,this.syncConfiguratorUI()});const l=document.getElementById("btn-proceed-booking");l==null||l.addEventListener("click",()=>{this.openBookingModal()})}syncConfiguratorUI(){const e=n.isAr(),t=m.find(d=>d.id===this.configSelection.retreatId)||m[0],a=x.computePrice(t.pricePerNight,this.configSelection),s=document.getElementById("price-breakdown-container");s&&(s.innerHTML=$(a,e));const i=document.getElementById("preview-backdrop");i&&(i.style.backgroundImage=`url('${t.imageNight}')`);const r=document.getElementById("unit-3d-model");r&&(this.configSelection.unitType==="sadu"?r.innerHTML=`
          <div class="sadu-tent-graphic">
            <div class="sadu-roof"></div>
            <div class="sadu-walls"><div class="sadu-pattern-stripe"></div></div>
          </div>
        `:this.configSelection.unitType==="airstream"?r.innerHTML=`
          <div class="airstream-graphic">
            <div class="airstream-body">
              <div class="airstream-window w1"></div>
              <div class="airstream-window w2"></div>
            </div>
          </div>
        `:r.innerHTML=`
          <div class="geodesic-dome-graphic">
            <div class="dome-shell">
              <div class="dome-grid-overlay"></div>
              <div class="dome-glow-interior"></div>
            </div>
            <div class="dome-deck"></div>
          </div>
        `);const l=document.getElementById("preview-amenities-overlay");l&&(l.innerHTML=this.configSelection.selectedAmenities.map(d=>{const c=S.find(h=>h.id===d);return c?`<span class="amenity-bubble" title="${e?c.nameAr:c.nameEn}">${c.icon}</span>`:""}).join(""))}setupWeatherEvents(){const e=document.getElementById("weather-retreat-tabs");e==null||e.addEventListener("click",a=>{const s=a.target.closest(".weather-tab-btn");if(!s)return;const i=s.getAttribute("data-retreat-id");if(i){this.activeWeatherRetreatId=i;const r=document.getElementById("weather");if(r){const l=document.createElement("div");l.innerHTML=C(this.activeWeatherRetreatId);const d=l.querySelector("#weather");d&&(r.replaceWith(d),this.setupWeatherEvents())}}});const t=document.getElementById("packing-checklist");t==null||t.addEventListener("change",a=>{const s=a.target;if(s){const i=s.closest(".packing-item-row");i&&i.classList.toggle("checked",s.checked)}})}openBookingModal(){const e=document.getElementById("modals-root");if(!e)return;const t=m.find(c=>c.id===this.configSelection.retreatId)||m[0],a=x.computePrice(t.pricePerNight,this.configSelection);e.innerHTML=H(this.configSelection,a);const s=document.getElementById("btn-close-booking-modal"),i=document.getElementById("btn-cancel-modal"),r=document.getElementById("booking-modal-backdrop"),l=()=>{e.innerHTML=""};s==null||s.addEventListener("click",l),i==null||i.addEventListener("click",l),r==null||r.addEventListener("click",c=>{c.target===r&&l()});const d=document.getElementById("booking-form");d==null||d.addEventListener("submit",c=>{c.preventDefault();const h=document.getElementById("guest-name"),u=document.getElementById("guest-phone"),g=document.getElementById("guest-email"),f=document.getElementById("guest-notes");this.currentGuestDetails={fullName:(h==null?void 0:h.value)||"Tareq Aboushi",phone:(u==null?void 0:u.value)||"+966 50 123 4567",email:(g==null?void 0:g.value)||"tareq.aboushi@gmail.com",notes:(f==null?void 0:f.value)||""},this.openBoardingPassModal(a)})}openBoardingPassModal(e){const t=document.getElementById("modals-root");if(!t)return;t.innerHTML=z(this.currentGuestDetails,this.configSelection,e);const a=document.getElementById("btn-print-pass");a==null||a.addEventListener("click",()=>{window.print()});const s=document.getElementById("btn-close-pass-modal"),i=document.getElementById("boarding-pass-backdrop"),r=()=>{t.innerHTML=""};s==null||s.addEventListener("click",r),i==null||i.addEventListener("click",l=>{l.target===i&&r()})}}window.addEventListener("DOMContentLoaded",()=>{new q});
