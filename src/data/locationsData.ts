export interface LocationFaq {
  qEn: string;
  qAr: string;
  aEn: string;
  aAr: string;
}

export interface LocationItem {
  id: string;
  slug: string;
  cityEn: string;
  cityAr: string;
  regionEn: string;
  regionAr: string;
  titleEn: string;
  titleAr: string;
  heroHeadlineEn: string;
  heroHeadlineAr: string;
  leadEn: string;
  leadAr: string;
  economicContextEn: string;
  economicContextAr: string;
  keySectorsEn: string[];
  keySectorsAr: string[];
  priorityServicesEn: { title: string; desc: string }[];
  priorityServicesAr: { title: string; desc: string }[];
  faqs: LocationFaq[];
}

export const LOCATIONS_DATA: LocationItem[] = [
  {
    id: "riyadh",
    slug: "riyadh",
    cityEn: "Riyadh",
    cityAr: "الرياض",
    regionEn: "Central Province / Capital",
    regionAr: "منطقة الرياض / العاصمة",
    titleEn: "Business Software, ZATCA ERP & Fleet Tracking in Riyadh | TGL Technologies",
    titleAr: "أنظمة الأعمال والفوترة الإلكترونية وتتبع الأسطول في الرياض | TGL",
    heroHeadlineEn: "Empowering Riyadh Enterprises with Enterprise ERP, Web & Fleet Technology",
    heroHeadlineAr: "حلول البرمجيات السحابية والفوترة وتتبع المركبات للشركات والمؤسسات في الرياض",
    leadEn:
      "As the economic capital of Saudi Arabia and the epicenter of Vision 2030 transformations, Riyadh demands agile, highly compliant technology systems. TGL Technologies equips Riyadh-based enterprises, contracting firms, and commercial establishments with ZATCA Phase 2 compliant ERP, bilingual high-performance corporate websites, and telematics solutions delivered with exceptional remote precision.",
    leadAr:
      "باعتبارها عاصمة المملكة الاقتصادية ومركز مشاريع رؤية 2030 الكبرى، تحتاج الشركات في الرياض إلى بنية تقنية متطورة ومتوافقة بدقة مع الأنظمة الحكومية. تقدم تي جي إل تكنولوجيز لشركات ومؤسسات العاصمة أنظمة تخطيط الموارد (ERP) المجهزة للمرحلة الثانية من فاتورة، والمواقع الإلكترونية المرموقة، وحلول تتبع المركبات بمهنية عالية.",
    economicContextEn:
      "With Riyadh hosting the headquarters of major ministries, the Regional Headquarters (RHQ) programs, and multi-billion-dollar developments such as King Salman Park, New Murabba, and Diriyah, local businesses must meet stringent regulatory standards on Etimad procurement and ZATCA electronic tax compliance.",
    economicContextAr:
      "مع استقطاب الرياض للمقرات الإقليمية للشركات العالمية وتدشين كبرى المشاريع التنموية كحديقة الملك سلمان والمربع الجديد والدرعية، يتعين على المؤسسات المحلية الامتثال لأعلى معايير الحوكمة ومنصة اعتماد والفوترة الإلكترونية.",
    keySectorsEn: [
      "Government procurement and general contracting (Etimad platform readiness)",
      "Corporate holding groups, trading conglomerates, and regional headquarters",
      "Professional service consultancies, law firms, and architectural studios",
      "Commercial retail distributors and courier logistics networks across the capital",
    ],
    keySectorsAr: [
      "المقاولات العامة والتوريدات المتنافسة في منصة اعتماد والمناقصات الحكومية",
      "الشركات القابضة والمجموعات التجارية والمقرات الإقليمية للشركات بالمملكة",
      "الشركات الاستشارية والمكاتب الهندسية وشركات الخدمات التخصصية",
      "موزعو التجزئة والجملة وشبكات الشحن والتوزيع داخل وخارج العاصمة",
    ],
    priorityServicesEn: [
      {
        title: "ZATCA Phase 2 E-Invoicing Cloud ERP",
        desc: "Automated FATOORA generation with live clearance for high-volume B2B enterprise invoices in Riyadh.",
      },
      {
        title: "Bilingual Corporate Websites & Digital Profiles",
        desc: "Designed to help Riyadh firms pass prequalification audits and win tenders with tier-1 contractors.",
      },
      {
        title: "GPS Vehicle Tracking for Ring Roads & Congestion",
        desc: "Monitor commercial vans navigating Northern Ring Road, Khurais, and King Fahd Road with live stop reports.",
      },
    ],
    priorityServicesAr: [
      {
        title: "نظام ERP متوافق مع المرحلة الثانية من فاتورة",
        desc: "إصدار الفواتير الضريبية المعتمدة لقطاع الأعمال وربطها مع هيئة الزكاة لتسريع التحصيل المالي.",
      },
      {
        title: "مواقع إلكترونية وملفات تعريفية للتأهيل",
        desc: "تصاميم تعكس قوة شركتكم وتساعد في استيفاء متطلبات التأهيل لدى كبرى الجهات والشركات.",
      },
      {
        title: "تتبع المركبات وسط زحام شوارع العاصمة",
        desc: "متابعة شاحنات النقل على الطرق الدائرية وخريص وطريق الملك فهد لتقليل التأخير وأوقات الانتظار.",
      },
    ],
    faqs: [
      {
        qEn: "Can TGL deliver ERP and website setups remotely to Riyadh businesses?",
        qAr: "هل تقدم TGL حلول الـ ERP والمواقع للشركات في الرياض عن بعد بالكامل؟",
        aEn: "Yes. Our cloud delivery model is designed for seamless remote deployment. We hold Google Meet/Zoom workshops, migrate your accounts, train your staff, and provide continuous support during Riyadh business hours.",
        aAr: "نعم، نموذج العمل السحابي لدينا يضمن إعداد وتدريب كامل عن بعد مع اجتماعات مرئية ومتابعة مستمرة وفق ساعات العمل الرسمية بالرياض.",
      },
      {
        qEn: "Do your invoice templates satisfy Riyadh government tender requirements?",
        qAr: "هل تتوافق قوالب الفواتير مع شروط المناقصات الحكومية في الرياض؟",
        aEn: "Yes, our invoices are fully formatted with sequential numbers, QR code stamps, commercial registration details, and 15% VAT breakdowns compliant with ZATCA and Etimad billing guidelines.",
        aAr: "نعم، الفواتير الصادرة تتضمن كافة البيانات القانونية: السجل التجاري، الرمز المشفر، والضريبة لتقديمها في مستخلصات المشاريع.",
      },
    ],
  },
  {
    id: "jeddah",
    slug: "jeddah",
    cityEn: "Jeddah",
    cityAr: "جدة",
    regionEn: "Western Province / Makkah Region",
    regionAr: "منطقة مكة المكرمة / المنطقة الغربية",
    titleEn: "Trading ERP, Web Development & Fleet Tracking in Jeddah | TGL Technologies",
    titleAr: "برامج التجارة والفوترة وتتبع الأسطول في جدة | TGL",
    heroHeadlineEn: "Digital & Telematics Technology for Jeddah Trading, Logistics & Hospitality",
    heroHeadlineAr: "حلول تقنية رائدة لقطاعات التجارة والاستيراد والشحن والضيافة في جدة",
    leadEn:
      "Jeddah is the historic commercial gateway of Saudi Arabia and the central logistics hub of the Red Sea coast. Home to Jeddah Islamic Port and rapid mega-developments like Jeddah Central, companies here require fast-moving inventory tracking, multi-warehouse accounting, and smart delivery fleet oversight. TGL Technologies provides Jeddah businesses with agile cloud solutions designed for high-turnover trading.",
    leadAr:
      "تعتبر جدة البوابة التجارية التاريخية للمملكة ومركز الشحن والتوزيع اللوجستي للبحر الأحمر. ومع ميناء جدة الإسلامي ومشاريع وسط جدة العملاقة، تتطلب الحركة التجارية أنظمة مرنة لإدارة المخازن، والفوترة السريعة، ومتابعة أساطيل التوصيل والشاحنات بدقة. تقدم تي جي إل حلولاً سحابية تناسب بيئة الأعمال التجارية في الغربية.",
    economicContextEn:
      "Driven by maritime freight through Jeddah Islamic Port, regional wholesale distribution across Makkah and Madinah, and a booming hospitality economy, Jeddah companies need robust material management and immediate VAT accounting.",
    economicContextAr:
      "يرتكز اقتصاد جدة على حركة الشحن عبر الميناء، وتجارة الجملة والتوزيع لمكة والمدينة، وقطاعات السياحة والضيافة، مما يفرض وجود أنظمة سحابية تربط المبيعات بالمخزون دون أي تأخير.",
    keySectorsEn: [
      "Import, export, and customs-bonded warehouse distribution",
      "Wholesale consumer goods, food, textiles, and construction materials",
      "Logistics transport companies moving cargo along the Western coastal highway",
      "Hospitality, catering, and event equipment rental contractors",
    ],
    keySectorsAr: [
      "الاستيراد والتصدير والمستودعات الجمركية وشركات التخليص",
      "تجارة الجملة في المواد الغذائية، الأقمشة، ومواد البناء والتشطيب",
      "شركات النقل البري التي تنقل البضائع عبر طريق الساحل الغربي",
      "شركات الإعاشة والضيافة وتأجير معدات المناسبات والفعاليات",
    ],
    priorityServicesEn: [
      {
        title: "Multi-Warehouse Inventory & ZATCA ERP",
        desc: "Instant stock transfer tracking between Jeddah Port warehouses, showrooms, and retail clients with QR invoicing.",
      },
      {
        title: "Cold-Chain & Delivery GPS Tracking",
        desc: "Temperature monitoring and speed alerts for refrigerated delivery trucks across the Makkah and Jeddah urban areas.",
      },
      {
        title: "E-Commerce & High-Converting Websites",
        desc: "Bilingual web platforms with WhatsApp ordering integration for retail distributors and wholesalers.",
      },
    ],
    priorityServicesAr: [
      {
        title: "نظام ERP متعدد المخازن ومستودعات الميناء",
        desc: "ربط فوري بين مستودعات الميناء والمعارض مع إصدار فواتير ضريبية فورية للعملاء التجاريين.",
      },
      {
        title: "تتبع شاحنات التبريد وسيارات التوصيل",
        desc: "مراقبة درجات الحرارة لحمولات الأغذية وتتبع مسارات السيارات بين جدة ومكة والمدينة.",
      },
      {
        title: "مواقع ومتاجر إلكترونية تدعم طلبات الواتساب",
        desc: "منصات رقمية ثنائية اللغة تتيح لتجار الجملة والتجزئة استقبال طلبات الشراء المباشرة بسهولة.",
      },
    ],
    faqs: [
      {
        qEn: "Can your ERP manage customs duties and landed inventory costs?",
        qAr: "هل يدعم نظام الـ ERP احتساب الرسوم الجمركية وتكلفة الشحنات الواصلة؟",
        aEn: "Yes, our material trading and ERP modules allow you to allocate freight, customs, and clearance costs directly onto imported inventory items for true margin calculation.",
        aAr: "نعم، يدعم النظام توزيع تكاليف الشحن والجمارك والتخليص على تكلفة المواد المستوردة بدقة لمعرفة صافي الربح الحقيقي.",
      },
      {
        qEn: "How do you coordinate with our team in Jeddah?",
        qAr: "كيف يتم التنسيق مع فريق العمل لدينا في مدينة جدة؟",
        aEn: "Our engineering and support teams work Sunday to Thursday aligned with Jeddah business hours via VIP WhatsApp and video calls.",
        aAr: "يتواصل فريق الدعم الفني يومياً من الأحد إلى الخميس خلال ساعات دوامكم في جدة عبر الواتساب والاتصال المباشر.",
      },
    ],
  },
  {
    id: "dammam",
    slug: "dammam",
    cityEn: "Dammam",
    cityAr: "الدمام",
    regionEn: "Eastern Province / Industrial Hub",
    regionAr: "المنطقة الشرقية / العاصمة الصناعية",
    titleEn: "Industrial ERP, Equipment Rental & Fleet Tracking in Dammam | TGL Technologies",
    titleAr: "أنظمة تأجير المعدات والمقاولات وتتبع الأسطول في الدمام | TGL",
    heroHeadlineEn: "Industrial-Grade Software & Telematics for Dammam Contracting & Logistics",
    heroHeadlineAr: "حلول تقنية متينة لقطاعات الصناعة والتشغيل والمقاولات والخدمات اللوجستية بالدمام",
    leadEn:
      "Dammam and the broader Eastern Province form the industrial backbone of Saudi Arabia. Supplying energy majors, heavy fabrication yards, and construction megaprojects requires uncompromised operational discipline. TGL Technologies provides Dammam enterprises with purpose-built software: equipment rental dispatching, manpower mobilization tracking, ZATCA e-invoicing, and telematics.",
    leadAr:
      "تشكل الدمام والمنطقة الشرقية القلب الصناعي للمملكة وعصب صناعة الطاقة والتصنيع. إن تقديم الخدمات لقطاع النفط والغاز والمشاريع الكبرى يتطلب دقة تشغيلية صارمة. توفر تي جي إل تكنولوجيز لشركات الدمام والخبر أنظمة متخصصة: إدارة تأجير الآليات، وتوريد العمالة، والفوترة الإلكترونية المتوافقة، وحلول تتبع المركبات.",
    economicContextEn:
      "Driven by proximity to Dhahran, Ras Tanura, and extensive industrial cities, Dammam firms must provide certified documentation, rigorous timesheet audits, and full safety accountability.",
    economicContextAr:
      "نظراً لقربها من مراكز أرامكو والمدن الصناعية، يتعين على مقاولي الدمام تقديم سجلات عمل مدققة، وإدارة دقيقة لسلامة السائقين ومعدات المواقع.",
    keySectorsEn: [
      "Oilfield service subcontractors and petrochemical suppliers",
      "Heavy equipment rental, crane hire, and specialized machinery contractors",
      "Industrial manpower supply, scaffolding, and fabrication maintenance",
      "Overland highway freight connecting Eastern Province with Riyadh and GCC borders",
    ],
    keySectorsAr: [
      "مقاولو الباطن وموردو حقول النفط ومصانع البتروكيماويات",
      "شركات تأجير الرافعات والمعدات الثقيلة والمولدات للمواقع الميدانية",
      "مؤسسات توريد العمالة الصناعية، السقالات، وخدمات الصيانة والتشغيل",
      "شركات الشحن البري التي تربط الشرقية بالرياض ومنافذ دول الخليج العربي",
    ],
    priorityServicesEn: [
      {
        title: "Equipment Rental & Dispatch Management",
        desc: "Mobilization records, engine hour logs, and automated monthly equipment billing integrated with ZATCA invoices.",
      },
      {
        title: "Manpower Deployment & Timesheets",
        desc: "Track skilled technician rosters, safety passports, client timesheets, and overtime pay without spreadsheet chaos.",
      },
      {
        title: "AI Dashcams for Long-Haul Highway Safety",
        desc: "Protect heavy trucks traveling the Dammam-Riyadh and Jubail highways from fatigue and reckless driving incidents.",
      },
    ],
    priorityServicesAr: [
      {
        title: "إدارة تأجير المعدات والمولدات",
        desc: "تنظيم إرساليات المعدات للمواقع وساعات العمل والصيانة وإصدار فواتير شهرية متوافقة مع هيئة الزكاة.",
      },
      {
        title: "إدارة العمالة وسجلات الساعات الميدانية",
        desc: "متابعة تسكين الفنيين وبطاقات السلامة واعتماد أوراق الدوام دون أخطاء يدوية.",
      },
      {
        title: "كاميرات ذكية لحماية الشاحنات على الطرق السريعة",
        desc: "حماية أسطول النقل على طريق الدمام-الرياض والجبيل من حوادث النعاس والإرهاق ومراقبة الطريق.",
      },
    ],
    faqs: [
      {
        qEn: "Can your system handle equipment rental billing based on both hours and days?",
        qAr: "هل يدعم النظام فوترة تأجير المعدات بالساعة واليوم والشهر؟",
        aEn: "Yes, our equipment rental system supports flexible billing formulas: hourly, daily, weekly, or monthly contract rates with automatic excess hour surcharges.",
        aAr: "نعم، يتيح النظام خيارات مرنة لاحتساب الأجور: بالساعة أو اليوم أو الشهر مع حساب ساعات العمل الإضافية للمعدة تلقائياً.",
      },
      {
        qEn: "How quickly can we train our dispatchers in Dammam?",
        qAr: "كم يستغرق تدريب موظفي الحركة والتوزيع لدينا في الدمام؟",
        aEn: "We conduct hands-on video training over 2 to 3 days, enabling your dispatchers to manage jobs and vehicles immediately.",
        aAr: "يتم تدريب موظفي التشغيل خلال يومين إلى ثلاثة أيام عبر جلسات تفاعلية مباشرة لضمان تمكنهم الكامل من النظام.",
      },
    ],
  },
  {
    id: "al-jubail",
    slug: "al-jubail",
    cityEn: "Al Jubail",
    cityAr: "الجبيل",
    regionEn: "Eastern Province / Petrochemical Capital",
    regionAr: "المنطقة الشرقية / عاصمة الصناعات البتروكيماوية",
    titleEn: "Heavy Industry Software, Rental & Fleet Tracking in Al Jubail | TGL Technologies",
    titleAr: "أنظمة الصناعات الثقيلة والمعدات وتتبع المركبات في الجبيل | TGL",
    heroHeadlineEn: "Mission-Critical Systems for Al Jubail Industrial City Contractors",
    heroHeadlineAr: "حلول تقنية رصينة لمقاولي وموردي مدينة الجبيل الصناعية",
    leadEn:
      "Al Jubail is the world's premier petrochemical and industrial complex. Operating within Jubail Industrial City (JIC) requires the highest standards of safety, quality certification, and operational auditability. TGL Technologies equips Jubail subcontractors, fabrication plants, and equipment suppliers with digital platforms that eliminate compliance failures and ensure flawless project execution.",
    leadAr:
      "تعد مدينة الجبيل الصناعية أكبر مجمع بتروكيماوي وصناعي في المنطقة. العمل مع كبرى المصانع والشركات هناك يتطلب أعلى معايير السلامة والجودة والشفافية في السجلات. تقدم تي جي إل لمقاولي وموردي الجبيل حلولاً رقمية تحمي أعمالهم وتضمن دقة تنفيذ المشاريع والمستخلصات.",
    economicContextEn:
      "Home to SABIC petrochemical complexes, Sadara, and Marafiq, contractors in Jubail operate in secure industrial zones requiring strict vehicle inspection standards, driver certification, and precise project accounting.",
    economicContextAr:
      "مع وجود مجمعات سابك وصدارة ومرافق، يعمل مقاولو الجبيل داخل مناطق صناعية محكمة تتطلب مواصفات مشددة لسلامة الشاحنات واعتماد السائقين والفواتير النظامية.",
    keySectorsEn: [
      "Petrochemical plant maintenance and turnaround contracting",
      "Heavy lifting, crane services, and modular transport",
      "Specialized industrial scaffolding, insulation, and coating services",
      "Hazardous waste transport and raw chemical distribution",
    ],
    keySectorsAr: [
      "صيانة مصانع البتروكيماويات وأعمال الإغلاق الدوري (Turnaround)",
      "تأجير الرافعات العملاقة وخدمات الرفع الثقيل والنقل التخصصي",
      "أعمال السقالات الصناعية، العزل الحراري، والدهانات الصناعية",
      "نقل المواد الكيميائية والشحنات المصنفة وفق معايير السلامة",
    ],
    priorityServicesEn: [
      {
        title: "Plant Turnaround & Manpower Tracking",
        desc: "Deploy and manage large temporary workforces during scheduled refinery turnarounds with exact hourly billing.",
      },
      {
        title: "Heavy Equipment Telematics & Driver DMS",
        desc: "Ensure cranes and heavy trucks operating inside Jubail comply with speed limits and safety protocols.",
      },
      {
        title: "Auditable ZATCA Tax Invoices for Industrial Clients",
        desc: "Generate flawless electronic invoices accepted by major multinational industrial clients in Jubail.",
      },
    ],
    priorityServicesAr: [
      {
        title: "إدارة مشاريع الإغلاق وصيانة المصانع",
        desc: "تنظيم وتوزيع مئات العمال خلال فترات التوقف والصيانة الدورية للمصانع واحتساب ساعات العمل بدقة.",
      },
      {
        title: "كاميرات الذكاء الاصطناعي وتتبع الآليات بالجبيل",
        desc: "التأكد من التزام سائقي الشاحنات والرافعات بالسرعات المقررة وقواعد السلامة المشددة في شوارع الجبيل.",
      },
      {
        title: "فواتير ضريبية معتمدة لكبرى الشركات الصناعية",
        desc: "إصدار فواتير إلكترونية متوافقة مع متطلبات لجان المشتريات في سابك وكبرى مصانع الجبيل.",
      },
    ],
    faqs: [
      {
        qEn: "Can your system handle safety badge and gate pass expiration for Jubail workers?",
        qAr: "هل يدعم النظام تنبيهات انتهاء تصاريح دخول المصانع وبطاقات السلامة في الجبيل؟",
        aEn: "Yes, our manpower and workforce module tracks gate pass validity, safety training certificates, and medical test dates with automatic expiry alerts.",
        aAr: "نعم، يحتوي نظام العمالة على قسم مخصص لتتبع بطاقات تصاريح الدخول للمصانع ودورات السلامة والتنبيه قبل انتهائها بوقت كافٍ.",
      },
    ],
  },
  {
    id: "saudi-arabia",
    slug: "saudi-arabia",
    cityEn: "Kingdom-wide (Saudi Arabia)",
    cityAr: "كافة أنحاء المملكة العربية السعودية",
    regionEn: "National Coverage / All 13 Provinces",
    regionAr: "تغطية شاملة / كافة مناطق المملكة الـ 13",
    titleEn: "Complete Business Software, ERP & Fleet Solutions across Saudi Arabia | TGL Technologies",
    titleAr: "حلول البرمجيات السحابية والفوترة وتتبع الأسطول في كافة مناطق السعودية | TGL",
    heroHeadlineEn: "Your Unified Technology Partner Across All 13 Saudi Provinces",
    heroHeadlineAr: "شريكك التقني الموحد للبرمجيات وتتبع الأسطول في جميع مناطق المملكة",
    leadEn:
      "Whether your operations are anchored in Tabuk, Neom, Abha, Madinah, Makkah, Hail, or Jazan, modern businesses across the Kingdom need agile, high-reliability technology without exorbitant domestic consulting retainers. TGL Technologies delivers turnkey cloud software, ZATCA e-invoicing ERP, websites, and fleet telematics remotely with rapid support across the entire Kingdom of Saudi Arabia.",
    leadAr:
      "سواء كانت مقرات شركتكم في تبوك، أو مشاريع نيوم، أو أبها، أو المدينة المنورة، أو مكة المكرمة، أو حائل، أو جازان؛ تحتاج منشأتكم إلى شريك تقني معتمد يقدم برمجيات وحلول موثوقة دون تكاليف استشارات مبالغ فيها. تقدم تي جي إل تكنولوجيز حزمة متكاملة من البرمجيات السحابية وتتبع الأسطول تنفذ وتدار عن بعد بكفاءة تامة في كافة أنحاء المملكة.",
    economicContextEn:
      "Under Saudi Vision 2030, economic diversification and regional development are accelerating nationwide. Small and medium enterprises are the growth engine of the Kingdom's non-oil economy.",
    economicContextAr:
      "في إطار رؤية السعودية 2030، تشهد كافة مناطق المملكة حراكاً اقتصادياً واستثمارياً ضخماً، وتشكل المنشآت الصغيرة والمتوسطة المحرك الأساسي للاقتصاد غير النفطي.",
    keySectorsEn: [
      "Regional contracting and infrastructure development across all provinces",
      "Tourism, hospitality, and cultural development in AlUla, Asir, and Red Sea",
      "Agricultural distribution, cold storage, and logistics in Qassim and Al-Jouf",
      "Mining, quarrying, and materials transport in the northern and western regions",
    ],
    keySectorsAr: [
      "المقاولات وتطوير البنية التحتية في المدن الصاعدة ومشاريع التطوير الإقليمي",
      "قطاعات السياحة والضيافة والتراث في العلا وعسير والبحر الأحمر",
      "التوزيع الزراعي والتبريد والخدمات اللوجستية في القصيم والجوف",
      "قطاع التعدين ونقل المواد الخام في المناطق الشمالية والغربية",
    ],
    priorityServicesEn: [
      {
        title: "Nationwide ZATCA Phase 2 E-Invoicing",
        desc: "Consistent e-invoicing and accounting for multi-branch companies operating across different provinces in Saudi Arabia.",
      },
      {
        title: "Inter-City GPS Fleet Tracking & Geofencing",
        desc: "Live tracking of trucks traversing cross-country corridors between Riyadh, Jeddah, Dammam, and border posts.",
      },
      {
        title: "Bilingual Digital Presence for Regional Firms",
        desc: "Empowering regional companies to compete for national-scale corporate contracts with world-class websites.",
      },
    ],
    priorityServicesAr: [
      {
        title: "نظام فوترة موحد لكافة الفروع بالمملكة",
        desc: "إدارة الفواتير والضرائب للمنشآت ذات الفروع المتعددة في مدن المملكة تحت قاعدة بيانات سحابية موحدة.",
      },
      {
        title: "تتبع المركبات بين المدن والمنافذ الحدودية",
        desc: "متابعة حركة الشاحنات على الطرق السريعة الرابطة بين المدن الرئيسية وحتى المنافذ البرية للمملكة.",
      },
      {
        title: "حضور رقمي مرموق للشركات الإقليمية",
        desc: "تمكين الشركات المحلية في مختلف المناطق من منافسة كبرى الشركات الوطنية بمواقع وهوية بصرية رائدة.",
      },
    ],
    faqs: [
      {
        qEn: "How does TGL support clients in remote or developing Saudi regions?",
        qAr: "كيف تقدم TGL الدعم للشركات في المناطق النائية أو المدن الحديثة؟",
        aEn: "Because our systems are cloud-native, our setup, training, and continuous helpdesk are delivered via high-definition video calls and instant WhatsApp channels regardless of your physical city.",
        aAr: "نظراً لأن حلولنا سحابية بالكامل، فإن التهيئة والتدريب والدعم الفني المباشر يتم بسلاسة عبر الاتصال المرئي والواتساب أينما كان موقع منشأتكم.",
      },
      {
        qEn: "Are payments made in Saudi Riyals (SAR)?",
        qAr: "هل يتم سداد قيمة الخدمات بالريال السعودي؟",
        aEn: "Yes, all service proposals, invoices, and payment schedules are denominated and invoiced in Saudi Riyals (SAR).",
        aAr: "نعم، كافة عروض الأسعار والفواتير والاتفاقيات تصدر وتُسدد بالريال السعودي (SAR).",
      },
    ],
  },
];
