export interface ServiceFaq {
  qEn: string;
  qAr: string;
  aEn: string;
  aAr: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  slug: string;
  titleEn: string;
  titleAr: string;
  shortDescEn: string;
  shortDescAr: string;
  heroHeadlineEn: string;
  heroHeadlineAr: string;
  overviewEn: string;
  overviewAr: string;
  whatYouGetEn: string[];
  whatYouGetAr: string[];
  featuresEn: { title: string; desc: string }[];
  featuresAr: { title: string; desc: string }[];
  whoItsForEn: string[];
  whoItsForAr: string[];
  deliveryMethodEn: string;
  deliveryMethodAr: string;
  complianceNotesEn: string;
  complianceNotesAr: string;
  faqs: ServiceFaq[];
  relatedSlugs: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "zatca-erp",
    number: "01",
    slug: "zatca-e-invoicing-erp",
    titleEn: "ZATCA E-Invoicing ERP",
    titleAr: "نظام ERP متوافق مع الفوترة الإلكترونية (فاتورة)",
    shortDescEn: "TGL ERP and Zoho ERP, FATOORA-compliant invoicing, inventory, sales, purchase and finance in one unified system.",
    shortDescAr: "أنظمة TGL ERP و Zoho ERP المتوافقة مع متطلبات المرحلة الثانية من فاتورة، وإدارة المخزون والمشتريات والمبيعات والحسابات.",
    heroHeadlineEn: "ZATCA Phase 2 E-Invoicing & Cloud ERP for Saudi SMEs",
    heroHeadlineAr: "حلول الفوترة الإلكترونية (المرحلة الثانية) وأنظمة ERP السحابية لشركات المملكة",
    overviewEn:
      "TGL Technologies delivers ZATCA-compliant Cloud ERP implementations specifically configured for the Saudi Arabian commercial landscape. Under ZATCA (Zakat, Tax and Customs Authority) regulations, businesses across the Kingdom must issue compliant electronic invoices (Fatoora). Our dual offering of TGL Proprietary ERP and certified Zoho ERP configurations empowers Saudi businesses to transition smoothly through Phase 1 (generation) and Phase 2 (clearance and reporting integration) without operational disruption.",
    overviewAr:
      "تقدم تي جي إل تكنولوجيز حلول تخطيط الموارد المؤسسية (ERP) السحابية المتوافقة بالكامل مع أنظمة هيئة الزكاة والضريبة والجمارك (ZATCA) في المملكة العربية السعودية. مع متطلبات مشروع الفوترة الإلكترونية (فاتورة)، أصبح من الإلزامي على المنشآت إصدار فواتير إلكترونية متوافقة وتكاملها مع منصة الهيئة. نوفر لك إما نظام TGL ERP المخصص أو حلول Zoho ERP المهيأة لتلبية متطلبات المرحلة الأولى والثانية بأعلى درجات الموثوقية.",
    whatYouGetEn: [
      "Full ZATCA Phase 2 XML/UBL 2.1 compliant invoice generation and cryptographic stamping",
      "Dynamic B2B Standard Tax Invoices and B2C Simplified Tax Invoices with validated QR codes",
      "Unified multi-branch inventory, warehouse control, and serial/batch tracking",
      "Complete Chart of Accounts structured for Saudi 15% VAT and monthly/quarterly filing",
      "Sales, purchase orders, quotation workflows, and accounts receivable/payable management",
      "Role-based security, bilingual Arabic-English PDF generation, and automated audit trails",
    ],
    whatYouGetAr: [
      "توليد فواتير بصيغة XML/UBL 2.1 متوافقة مع متطلبات الختم المشفر للمرحلة الثانية",
      "إصدار الفواتير الضريبية (B2B) والفواتير المبسطة (B2C) المزودة برمز الاستجابة السريعة (QR)",
      "إدارة متكاملة للمخزون متعدد الفروع والمستودعات وتتبع الدفعات وتواريخ الصلاحية",
      "دليل حسابات مهيأ وفق ضريبة القيمة المضافة السعودية (15%) وإقرارات الهيئة",
      "إدارة دورات المبيعات والمشتريات وعروض الأسعار وحسابات الموردين والعملاء",
      "صلاحيات مستخدمين دقيقة، طباعة ثنائية اللغة (عربي/إنجليزي)، وسجل تدقيق شامل",
    ],
    featuresEn: [
      {
        title: "Fatoora Phase 2 Integration Architecture",
        desc: "Equipped with API connectors to the ZATCA Fatoora portal for real-time invoice clearance and reporting per wave schedules.",
      },
      {
        title: "Bilingual Arabic-First Interface",
        desc: "Intuitive RTL interface in Arabic alongside full English capability, ensuring seamless adoption for diverse corporate teams in KSA.",
      },
      {
        title: "Real-Time VAT & Financial Reporting",
        desc: "Instant calculation of output and input 15% VAT, pre-populating fields required for standard ZATCA GAZT return submission.",
      },
      {
        title: "Multi-Currency & Bank Reconciliation",
        desc: "Saudi Riyal (SAR) primary ledger with support for USD, EUR, and GCC currencies alongside local bank feed imports.",
      },
    ],
    featuresAr: [
      {
        title: "تكامل تقني مع بوابة فاتورة",
        desc: "واجهات برمجية مهيأة للربط المباشر مع منصة فاتورة لاعتماد الفواتير أو الإبلاغ عنها حسب المجموعة المستهدفة.",
      },
      {
        title: "واجهة ثنائية اللغة تدعم العربية كأصل",
        desc: "تصميم سلس من اليمين إلى اليسار (RTL) مع إمكانية التبديل إلى الإنجليزية لخدمة فرق العمل المتنوعة بالمملكة.",
      },
      {
        title: "تقارير فورية لضريبة القيمة المضافة 15%",
        desc: "احتساب فوري لضريبة المدخلات والمخرجات وتجهيز أرقام الإقرار الضريبي لتقديمه في المواعيد المقررة دون أخطاء.",
      },
      {
        title: "دعم الريال السعودي والعملات الخليجية",
        desc: "دفتر أستاذ رئيسي بالريال السعودي مع دعم العملات الأجنبية والمطابقة البنكية الدقيقة لحسابات الشركات.",
      },
    ],
    whoItsForEn: [
      "Saudi SMEs transitioning from spreadsheets or legacy desktop accounting",
      "Trading, retail, wholesale, and contracting firms mandated by ZATCA waves",
      "Foreign enterprises launching operations in Saudi Arabia under MISA licensing",
      "Businesses seeking affordable monthly or annual ERP subscriptions without massive setup fees",
    ],
    whoItsForAr: [
      "الشركات الصغيرة والمتوسطة التي ترغب بالانتقال من جداول الإكسيل إلى نظام سحابي منظم",
      "مؤسسات التجارة والمقاولات والتوزيع المشمولة بمجموعات الفوترة الإلكترونية",
      "الشركات الأجنبية الحاصلة على ترخيص وزارة الاستثمار (MISA) وتؤسس أعمالها بالسعودية",
      "المنشآت الباحثة عن اشتراكات مرنة بتكلفة معقولة ودعم فني مستمر دون تكاليف باهظة",
    ],
    deliveryMethodEn:
      "Delivered remotely via high-speed cloud infrastructure. Our team conducts requirements workshops on Google Meet/Zoom, migrates master data, configures your Chart of Accounts, and trains your team in Saudi working hours (Sun–Thu).",
    deliveryMethodAr:
      "يتم تنفيذ النظام وتهيئته سحابياً بالكامل. يعقد مهندسونا جلسات العمل عبر الاتصال المرئي لدراسة المتطلبات ونقل البيانات وتدريب موظفيكم خلال أوقات العمل السعودية (الأحد إلى الخميس).",
    complianceNotesEn:
      "ZATCA compliance is enforced through cryptographic invoice signing, Universally Unique Identifiers (UUID), and sequential numbering. Note: Compliance depends on the selected ERP and ZATCA solution-provider requirements.",
    complianceNotesAr:
      "يتم الالتزام بمتطلبات ZATCA من خلال التشفير والختم الرقمي والمعرف الفريد عالمياً (UUID) والتسلسل غير القابل للتعديل. ملاحظة: يعتمد الالتزام على إصدار النظام المعتمد.",
    faqs: [
      {
        qEn: "What is the difference between ZATCA Phase 1 and Phase 2?",
        qAr: "ما الفرق بين المرحلة الأولى والمرحلة الثانية من الفوترة الإلكترونية؟",
        aEn: "Phase 1 requires generating and storing compliant electronic invoices with QR codes without manual tampering. Phase 2 integrates your ERP software directly with ZATCA's Fatoora platform via APIs for real-time clearance of standard invoices and reporting of simplified invoices.",
        aAr: "المرحلة الأولى تتطلب إصدار الفواتير وحفظها إلكترونياً بنظام سحابي يمنع التعديل اليدوي مع رمز QR. أما المرحلة الثانية فتتطلب الربط والتكامل المباشر لنظامك مع منصة فاتورة التابعة للهيئة لمصادقة الفواتير القياسية والإبلاغ عن الفواتير المبسطة.",
      },
      {
        qEn: "Can TGL help us integrate Zoho ERP with ZATCA?",
        qAr: "هل تقدم TGL خدمة ربط وتجهيز Zoho ERP مع هيئة الزكاة؟",
        aEn: "Yes. We configure Zoho Books and Zoho One to comply with Saudi VAT rules, Arabic invoice layout requirements, and Phase 2 clearance protocols.",
        aAr: "نعم، نقوم بتهيئة وتخصيص Zoho Books و Zoho One لتتوافق مع متطلبات ضريبة القيمة المضافة والفواتير ثنائية اللغة والربط التقني المعتمد.",
      },
      {
        qEn: "Does the system support both Arabic and English invoices?",
        qAr: "هل يدعم النظام إصدار الفواتير باللغتين العربية والإنجليزية معاً؟",
        aEn: "Yes. Every generated invoice template contains compliant Arabic descriptions alongside English text, meeting Saudi legal standards.",
        aAr: "نعم، تتضمن قوالب الفواتير البيانات الإلزامية باللغة العربية مع إمكانية عرض الإنجليزية جنباً إلى جنب طبقاً للوائح النظامية.",
      },
      {
        qEn: "How long does remote onboarding take?",
        qAr: "كم يستغرق تركيب النظام وتدريب الموظفين عن بُعد؟",
        aEn: "Standard setups for SMEs typically complete within 7 to 14 business days, including data migration, testing, and team training.",
        aAr: "تستغرق التهيئة القياسية للشركات المتوسطة والصغيرة من 7 إلى 14 يوم عمل تشمل رفع البيانات والاختبارات وتدريب الكادر.",
      },
      {
        qEn: "Do you provide ongoing technical support after go-live?",
        qAr: "هل تقدمون دعماً فنياً مستمراً بعد تدشين النظام؟",
        aEn: "Yes, our dedicated support desk operates during Saudi business hours (Sunday to Thursday, 8 AM – 6 PM AST) via WhatsApp, email, and live remote assistance.",
        aAr: "نعم، يقدم مكتب الدعم الفني خدماته خلال ساعات العمل الرسمية بالمملكة (الأحد إلى الخميس من 8 صباحاً حتى 6 مساءً) عبر الواتساب والبريد وجلسات الدعم المباشر.",
      },
    ],
    relatedSlugs: ["accounting-vat-support", "industry-software", "remote-support-training"],
  },
  {
    id: "industry-software",
    number: "02",
    slug: "industry-software",
    titleEn: "Industry-Specific Software",
    titleAr: "أنظمة وبرمجيات القطاعات المتخصصة",
    shortDescEn: "Ready-to-customise software engineered for Manpower Supply, Equipment Rental, and Material Trading companies in KSA.",
    shortDescAr: "حلول رقمية جاهزة للتخصيص صُممت خصيصاً لشركات توريد العمالة، وتأجير المعدات، وتجارة وتوريد المواد في المملكة.",
    heroHeadlineEn: "Tailored Business Software for Saudi Industrial & Contracting Sectors",
    heroHeadlineAr: "برمجيات تشغيلية متخصصة لقطاعات المقاولات والتشغيل والتوريد في السعودية",
    overviewEn:
      "Generic ERPs often fail to capture the specialized operational workflows of Saudi service and industrial contractors. TGL Technologies provides purpose-built, configurable software suites for three core economic pillars: Manpower Supply & Human Resource Contracting, Heavy Equipment & Tool Rental, and Construction Material Trading. Each system is designed with local Saudi labor rules (Iqama tracking, GOSI, Qiwa), rental agreements, and VAT handling built into the foundation.",
    overviewAr:
      "غالباً ما تعجز الأنظمة العامة عن استيعاب تفاصيل التشغيل الميداني لشركات المقاولات والخدمات بالمملكة. تقدم تي جي إل أنظمة برمجية متخصصة ومصممة بدقة لثلاثة قطاعات رئيسية: شركات توريد وإعارة العمالة، شركات تأجير المعدات والآليات، ومؤسسات تجارة وتوريد مواد البناء. تم تضمين إدارة الإقامات ومنصات قوى ومقاييم وعقود التأجير وضريبة القيمة المضافة ضمن صميم البرامج.",
    whatYouGetEn: [
      "Manpower module: Worker deployment rosters, client timesheets, Iqama expiry alerts, salary processing",
      "Equipment Rental module: Asset availability board, mobilization/demobilization dispatch, maintenance logs, hourly/daily billing",
      "Material Trading module: Multi-location stock tracking, delivery order (DO) generation, supplier price comparisons, profit margin locks",
      "Seamless integration with ZATCA Phase 2 e-invoicing for project-based milestone billing",
      "Custom role hierarchies for site foremen, operations managers, and accountants",
    ],
    whatYouGetAr: [
      "نظام توريد العمالة: جداول تسكين العمالة، تتبع ساعات العمل لدى العملاء، تنبيهات الإقامات والتأمينات، وإصدار المستخلصات",
      "نظام تأجير المعدات: لوحة جاهزية المعدات، مذكرات الترحيل والإرجاع، سجلات الصيانة الدورية، والفوترة بالساعة أو اليوم أو الشهر",
      "نظام تجارة المواد: تتبع المخازن المتعددة، أذونات التسليم (DO)، مقارنات أسعار الموردين، ومراقبة هوامش الربح",
      "تكامل فوري مع الفوترة الإلكترونية لإصدار مستخلصات وفواتير المشاريع تلقائياً",
      "صلاحيات مرنة لمهندسي المواقع، مديري التشغيل، والمحاسبين الماليين",
    ],
    featuresEn: [
      {
        title: "Saudi Labor & Compliance Tracking",
        desc: "Automated alerts for Iqama renewals, medical insurance, occupational safety cards, and Qiwa contract status.",
      },
      {
        title: "Dynamic Asset & Fleet Rental Dispatch",
        desc: "Interactive visual calendar showing cranes, forklifts, generators, and trucks with real-time operational status.",
      },
      {
        title: "Client Timesheet to Invoice Automation",
        desc: "Turn verified site timesheets directly into ZATCA-compliant milestone tax invoices with one click.",
      },
      {
        title: "Job-Costing & Project Profitability",
        desc: "Track direct labor, equipment depreciation, and consumables against contract revenue to protect net margins.",
      },
    ],
    featuresAr: [
      {
        title: "إدارة الإقامات والامتثال للأنظمة",
        desc: "تنبيهات استباقية لانتهاء الإقامات، الفحص الطبي، التأمين الصحي، وتوافق العقود مع منصة قوى.",
      },
      {
        title: "لوحة تخطيط تأجير الآليات والمعدات",
        desc: "تقويم مرئي تفاعلي يوضح حالة الرافعات والمولدات والشاحنات ومواقع تشغيلها وفترات الصيانة.",
      },
      {
        title: "تحويل سجلات الساعات إلى فواتير",
        desc: "تحويل أوراق دوام العمالة المعتمدة في المواقع إلى فواتير ضريبية نظامية بضغطة زر واحدة.",
      },
      {
        title: "حساب تكاليف المشاريع وربحيتها",
        desc: "تتبع تكلفة العمالة المباشرة واستهلاك المعدات والمواد مقارنة بدخل العقد لحماية أرباح الشركة.",
      },
    ],
    whoItsForEn: [
      "Manpower supply firms deploying teams in Riyadh, Eastern Province, and Neom mega-projects",
      "Heavy equipment rental companies serving Jubail industrial city and Yanbu refineries",
      "Building material distributors needing tight inventory control and rapid delivery tracking",
      "Contractors requiring specialized operational software without the multi-million SAR tier cost",
    ],
    whoItsForAr: [
      "شركات تأجير الكوادر والعمالة في الرياض والمنطقة الشرقية ومشاريع نيوم والبحر الأحمر",
      "مؤسسات تأجير المعدات الثقيلة والرافعات في الجبيل الصناعية وينبع والمناطق الصناعية",
      "موردو مواد البناء والكهرباء والسباكة الباحثون عن تحكم دقيق بالمخزون والتسليم",
      "المقاولون الراغبون في برنامج تشغيلي محكم دون تكاليف التطوير البرمجي الباهظة",
    ],
    deliveryMethodEn:
      "Delivered remotely as a turnkey cloud system. We review your current contracts and timesheets, adjust workflow templates, import master records, and run end-to-end user testing with your operations team.",
    deliveryMethodAr:
      "تطبيق سحابي متكامل يسلّم عن بعد. يقوم خبراؤنا بدراسة نماذج عقودكم وجداول العمل، وضبط النظام ليلائم دورة عملكم بدقة، مع تدريب العاملين.",
    complianceNotesEn:
      "Designed to meet Saudi Labor Law guidelines and ZATCA B2B milestone invoicing formats. Customisable for Etimad platform billing compliance.",
    complianceNotesAr:
      "مصمم ليتوافق مع نظام العمل السعودي ومعايير فوترة المشاريع الحكومية والخاصة ومنصة اعتماد.",
    faqs: [
      {
        qEn: "Can the manpower software manage multiple client contracts simultaneously?",
        qAr: "هل يستطيع برنامج توريد العمالة إدارة عقود عملاء متعددة في آن واحد؟",
        aEn: "Yes. You can assign workers across different client sites, track distinct billing rates per trade, and issue separated invoices effortlessly.",
        aAr: "نعم، يمكنك توزيع العمال على مواقع عملاء متعددة بأسعار فوترة مختلفة لكل مهنة وإصدار فواتير مستقلة لكل مشروع.",
      },
      {
        qEn: "Does the equipment rental system alert for preventive maintenance?",
        qAr: "هل يرسل نظام تأجير المعدات تنبيهات بمواعيد الصيانة الوقائية؟",
        aEn: "Yes, automated alerts trigger based on either operating hours recorded or calendar intervals (e.g., every 250 engine hours).",
        aAr: "نعم، يطلق النظام تنبيهات تلقائية بناءً على ساعات تشغيل المحرك أو الفترات الزمنية المحددة لكل أصل لضمان جاهزية المعدة.",
      },
      {
        qEn: "Is the software accessible from smartphones on project sites?",
        qAr: "هل يمكن الوصول إلى النظام عبر الهواتف الذكية في مواقع العمل؟",
        aEn: "Yes, the web application is fully mobile-responsive and accessible on modern smartphones and tablets without dedicated app installations.",
        aAr: "نعم، النظام متوافق بالكامل مع متصفحات الهواتف الذكية والأجهزة اللوحية للمشرفين الميدانيين دون الحاجة لتحميل تطبيقات معقدة.",
      },
      {
        qEn: "Can we migrate our existing Excel client and equipment lists?",
        qAr: "هل يمكن نقل بيانات العملاء والمعدات الحالية من ملفات الإكسيل؟",
        aEn: "Absolutely. Our onboarding team validates and imports your existing Excel datasets into the new system as part of the setup package.",
        aAr: "بالتأكيد، يقوم فريقنا بمراجعة وتنظيم ملفات الإكسيل واستيرادها بالكامل ضمن مرحلة الإعداد الأولي.",
      },
    ],
    relatedSlugs: ["zatca-e-invoicing-erp", "gps-fleet-tracking", "accounting-vat-support"],
  },
  {
    id: "web-dev",
    number: "03",
    slug: "website-design-development",
    titleEn: "Website Design & Development",
    titleAr: "تصميم وتطوير المواقع الإلكترونية",
    shortDescEn: "Modern, mobile-friendly corporate and e-commerce websites built in English and Arabic for high search visibility in Saudi Arabia.",
    shortDescAr: "مواقع إلكترونية حديثة ومتاجر رقمية ثنائية اللغة متوافقة تماماً مع الجوال ومحركات البحث في المملكة العربية السعودية.",
    heroHeadlineEn: "High-Converting Bilingual Websites for Saudi Enterprises",
    heroHeadlineAr: "مواقع إلكترونية احترافية تعزز حضور الشركات في السوق السعودي",
    overviewEn:
      "Your website is the digital storefront of your business in Saudi Arabia. With mobile internet penetration exceeding 98% in the Kingdom, businesses require lightning-fast, beautifully designed, bilingual Arabic-first web platforms. TGL Technologies crafts corporate web presences, service portfolios, and e-commerce platforms engineered for Google.com.sa ranking and WhatsApp conversion. We enforce strict Core Web Vitals performance, elegant RTL typography, and frictionless lead capture.",
    overviewAr:
      "الموقع الإلكتروني هو الواجهة الأولى لمؤسستك أمام العملاء والجهات الحكومية في المملكة. مع تجاوز نسبة استخدام الإنترنت عبر الجوال 98% في السعودية، تحتاج شركتك لموقع فائق السرعة، بتصميم راقٍ، ثنائي اللغة، ومبني بأفضل معايير تجربة المستخدم. نصمم ونطور مواقع الشركات والمتاجر الإلكترونية مع التركيز على التصدر في محرك بحث جوجل السعودية وسهولة التواصل عبر الواتساب.",
    whatYouGetEn: [
      "Bilingual English and Arabic architecture with native RTL rendering and typography",
      "Mobile-first responsive layouts tested across iOS and Android viewports",
      "Comprehensive on-page technical SEO, schema markup, and Saudi local business tags",
      "One-click WhatsApp floating chat and interactive demo/quote booking forms",
      "High-speed cloud hosting setup on Cloudflare CDN with Middle East edge PoPs",
      "SSL certificate, security headers, fast page load speeds (LCP < 2.0s)",
    ],
    whatYouGetAr: [
      "بنية تقنية ثنائية اللغة تدعم العربية والإنجليزية باتجاهات صحيحة وخطوط أنيقة",
      "تصميم متجاوب بالكامل مع شاشات الهواتف الذكية والأجهزة اللوحية والحواسيب",
      "تهيئة شاملة لمحركات البحث (SEO) والبيانات المنظمة لرفع الترتيب في جوجل السعودية",
      "أزرار واتساب تفاعلية ونماذج طلب عروض الأسعار السريعة",
      "استضافة سحابية عالية الأداء على شبكات تسليم المحتوى المجهزة لمراكز بيانات الخليج",
      "شهادة أمان SSL مجانية، وحماية متطورة، وسرعة تحميل فائقة لأعلى أداء",
    ],
    featuresEn: [
      {
        title: "Saudi Consumer UX Optimization",
        desc: "Designed specifically for Saudi business decision-makers with prominent WhatsApp CTAs, local contact numbers, and trust badges.",
      },
      {
        title: "Arabic Typography Excellence",
        desc: "Carefully calibrated fonts (IBM Plex Sans Arabic, Tajawal) guaranteeing legible, balanced typographic hierarchy across all devices.",
      },
      {
        title: "Search Engine Supremacy",
        desc: "Targeted keyword mapping for Riyadh, Jeddah, and Dammam buyers with clean URLs and structured JSON-LD schemas.",
      },
      {
        title: "Easy CMS Control",
        desc: "Empower your marketing team to publish blog posts, add services, and update company case studies effortlessly.",
      },
    ],
    featuresAr: [
      {
        title: "تجربة مستخدم موجهة للسوق السعودي",
        desc: "توزيع مدروس للأزرار ونقاط الاتصال بالواتساب وأرقام الهواتف وعناصر الثقة التي يبحث عنها العميل بالمملكة.",
      },
      {
        title: "خطوط عربية عصرية وواضحة",
        desc: "استخدام أفضل الخطوط الرقمية الرسمية لقراءة مريحة وهوية تعكس مكانة شركتكم المؤسسية.",
      },
      {
        title: "تهيئة متقدمة لمحركات البحث المحلية",
        desc: "استهداف كلمات البحث الأكثر طلباً لخدماتكم في الرياض وجدة والدمام لضمان استقطاب عملاء فعليين.",
      },
      {
        title: "لوحة تحكم سهلة لإدارة المحتوى",
        desc: "تمكين فريقكم من إضافة المقالات وتحديث قائمة الخدمات ونماذج الأعمال دون الحاجة لخبرة برمجية.",
      },
    ],
    whoItsForEn: [
      "New Saudi commercial establishments needing an impressive website for CR / licensing",
      "Established contracting and trading companies looking to modernize an outdated site",
      "Service providers seeking consistent inbound inquiries via WhatsApp and Google search",
      "B2B firms bidding on corporate tenders requiring a credible corporate web presence",
    ],
    whoItsForAr: [
      "الشركات والمؤسسات الجديدة التي تحتاج موقعاً رسمياً لإنهاء التراخيص والاعتمادات",
      "شركات المقاولات والتجارة التي ترغب في تجديد موقعها القديم ليعكس تطور أعمالها",
      "المنشآت الخدمية التي ترغب في زيادة طلبات الشراء والاستفسارات عبر الواتساب",
      "الشركات المتنافسة في المناقصات الحكومية والخاصة التي تحتاج ملفاً رقمياً مرموقاً",
    ],
    deliveryMethodEn:
      "Full digital delivery. We conduct wireframe walkthroughs, produce mockups, develop the responsive codebase, connect your domain and emails, and launch with zero downtime.",
    deliveryMethodAr:
      "تنفيذ رقمي متكامل يشمل تصميم النماذج الأولية، وبرمجة الموقع، وربط النطاق (الدومين) والبريد الإلكتروني، وتدشين الموقع بنجاح.",
    complianceNotesEn:
      "Built with Saudi PDPL data protection compliance for lead forms and privacy disclosures. SSL encryption enforced by default.",
    complianceNotesAr:
      "متوافق مع نظام حماية البيانات الشخصية السعودي (PDPL) في جمع البيانات واستمارات التواصل وتشفير SSL التام.",
    faqs: [
      {
        qEn: "Can you build the site on a .sa or .com.sa domain?",
        qAr: "هل يمكن ربط الموقع بنطاق سعودي رسمي (.sa أو .com.sa)؟",
        aEn: "Yes. We configure DNS records for SaudiNIC registered domains as well as standard global domains like .com.",
        aAr: "نعم، نساعدكم في إعداد السجلات التقنية (DNS) للنطاقات السعودية المسجلة عبر المركز السعودي لمعلومات الشبكة أو النطاقات العالمية.",
      },
      {
        qEn: "Do you write the Arabic and English content for us?",
        qAr: "هل تقومون بصياغة المحتوى باللغتين العربية والإنجليزية؟",
        aEn: "Yes, our bilingual copywriters develop professional, industry-tailored copy in both languages as part of our website development packages.",
        aAr: "نعم، يتولى فريق كتابة المحتوى صياغة نصوص تسويقية وتقنية احترافية باللغتين تناسب تخصص شركتكم وطبيعة السوق السعودي.",
      },
      {
        qEn: "How fast will the website load in Saudi Arabia?",
        qAr: "ما مدى سرعة تحميل الموقع داخل مدن المملكة؟",
        aEn: "With Cloudflare Middle East CDN edge routing and modern asset compression, average page load times across Saudi Arabia remain under 1.8 seconds.",
        aAr: "بفضل استخدام خوادم التوزيع السحابية القريبة من مراكز بيانات الرياض وجدة، يبلغ معدل سرعة فتح الموقع أقل من ثانيتين على الهواتف.",
      },
    ],
    relatedSlugs: ["company-profile-branding", "business-email", "digital-marketing"],
  },
  {
    id: "business-email",
    number: "04",
    slug: "business-email",
    titleEn: "Professional Business Email",
    titleAr: "البريد الإلكتروني المهني للأعمال",
    shortDescEn: "Google Workspace, Microsoft 365, and Zoho Mail on your corporate domain: migration, SPF/DKIM security, and local support.",
    shortDescAr: "إعداد وتهيئة Google Workspace و Microsoft 365 و Zoho Mail بنطاق شركتك مع حماية كاملة ودعم فني مستمر.",
    heroHeadlineEn: "Enterprise Business Email & Cloud Productivity for Saudi Teams",
    heroHeadlineAr: "حلول البريد الإلكتروني السحابي وحزم الإنتاجية لشركات المملكة",
    overviewEn:
      "Using generic @gmail.com or @yahoo.com addresses damages your corporate credibility when dealing with Saudi government entities, enterprise clients, or procurement portals like Etimad. TGL Technologies sets up, migrates, and secures professional business email on your domain name. Whether you prefer Google Workspace (Gmail, Drive, Meet), Microsoft 365 (Outlook, Teams, Excel), or cost-effective Zoho Mail, we handle domain verification, SPF/DKIM/DMARC anti-spoofing security, and seamless mobile synchronization.",
    overviewAr:
      "استخدام عناوين البريد المجانية مثل Gmail يقلل من موثوقية شركتكم عند مخاطبة كبرى الشركات أو الجهات الرسمية أو الدخول في منصة اعتماد. تقدم تي جي إل خدمات التأسيس والنقل والحماية للبريد الإلكتروني الرسمي على نطاق شركتكم الخاص (@yourcompany.com). نوفر أفضل الحلول العالمية: Google Workspace أو Microsoft 365 أو Zoho Mail مع ضبط سجلات الأمان SPF و DKIM و DMARC لمنع وصول رسائلكم إلى مجلد المهملات.",
    whatYouGetEn: [
      "Custom domain email addresses (e.g., info@yourcompany.sa, ceo@yourcompany.com)",
      "Strict DNS anti-spam configuration: SPF, DKIM, and DMARC enforcement",
      "Seamless migration of historical emails, contacts, and calendar schedules",
      "Enterprise security: 2-Factor Authentication (2FA) and phishing filters",
      "Desktop Outlook and mobile setup support for iPhone and Android devices",
      "Admin console delegation and ongoing user mailbox management",
    ],
    whatYouGetAr: [
      "عناوين بريد إلكتروني باسم شركتكم (مثل info@company.sa أو sales@company.com)",
      "ضبط سجلات الحماية العالمية SPF و DKIM و DMARC لضمان وصول الرسائل لصندوق الوارد",
      "نقل آمن لكافة الرسائل وجهات الاتصال والمرفقات القديمة دون فقدان أي بيانات",
      "تأمين متقدم بحماية المصادقة الثنائية (2FA) ومكافحة رسائل الاحتيال الإلكتروني",
      "إعداد البريد على برامج Outlook وتطبيقات الجوال لأجهزة آيفون وأندرويد",
      "لوحة تحكم إدارية لإنشاء وحذف المستخدمين وتعديل الصلاحيات بسهولة",
    ],
    featuresEn: [
      {
        title: "Guaranteed Inbox Delivery",
        desc: "Properly authenticated mail records prevent your sales proposals and invoices from landing in clients' spam folders.",
      },
      {
        title: "Zero Downtime Migration",
        desc: "Switch from legacy cPanel or previous hosting providers without missing a single inbound customer email.",
      },
      {
        title: "Collaborative Cloud Storage",
        desc: "Secure cloud drive storage for sharing contracts, CAD drawings, and accounting sheets safely with your team.",
      },
      {
        title: "Local Saudi Billing Guidance",
        desc: "Clear assistance on selecting the most cost-effective tier in Saudi Riyals matching your headcount.",
      },
    ],
    featuresAr: [
      {
        title: "ضمان وصول الرسائل لصندوق الوارد",
        desc: "الضبط السليم لسجلات النطاق يمنع حظر عروض أسعاركم وفواتيركم أو تصنيفها كرسائل غير مرغوب فيها.",
      },
      {
        title: "نقل بريد سلس دون أي انقطاع",
        desc: "الانتقال من الاستضافات القديمة إلى المنصات السحابية الموثوقة دون توقف استقبال الرسائل ولو لدقيقة واحدة.",
      },
      {
        title: "مساحات تخزين سحابية مشتركة",
        desc: "حفظ ومشاركة المستندات والعقود والملفات الهندسية بأمان تام بين أفراد الفريق ومسؤولي الإدارة.",
      },
      {
        title: "خيارات اقتصادية تناسب ميزانيتكم",
        desc: "إرشادكم لاختيار الباقة الأنسب من حيث التكلفة بالريال السعودي بما يلائم عدد موظفيكم.",
      },
    ],
    whoItsForEn: [
      "Newly registered Saudi CRs establishing their business identity",
      "Contracting and trading companies experiencing email bounce or delivery failures",
      "Teams seeking integrated calendar scheduling and video meetings with Saudi clients",
    ],
    whoItsForAr: [
      "السجلات التجارية الجديدة التي تؤسس حضورها المؤسسي ورسائلها الرسمية",
      "الشركات التي تعاني من بطء استضافتها الحالية أو ارتداد الرسائل المهمة",
      "المنشآت الراغبة في تنظيم الاجتماعات المرئية ومشاركة الملفات بسهولة بين الفروع",
    ],
    deliveryMethodEn:
      "Configured remotely via domain registrar access. We provision user mailboxes, establish DNS records, and provide step-by-step video guides for your staff.",
    deliveryMethodAr:
      "إعداد رقمي عن بعد من خلال لوحة النطاق. نقوم بإنشاء الحسابات وضبط إعدادات النطاق وتقديم شروحات ميسرة للموظفين.",
    complianceNotesEn:
      "Enterprise email accounts adhere to corporate data retention and regulatory requirements in the GCC.",
    complianceNotesAr:
      "تطابق حلول البريد السحابي معايير الخصوصية وحفظ السجلات وسرية البيانات المؤسسية.",
    faqs: [
      {
        qEn: "Which platform is best: Google Workspace, Microsoft 365, or Zoho Mail?",
        qAr: "أيهما أفضل لشركتي: Google Workspace أم Microsoft 365 أم Zoho Mail؟",
        aEn: "Google Workspace is best for collaborative real-time docs and Gmail simplicity; Microsoft 365 is standard for corporate finance and heavy Excel users; Zoho Mail offers the most cost-effective solution for growing SMEs on a budget.",
        aAr: "جوجل وورك سبيس ممتاز للعمل الجماعي وسهولة الاستخدام؛ مايكروسوفت 365 هو الخيار التقليدي لمستخدمي أوفيس وبرامج إكسيل المتقدمة؛ بينما يوفر زوهو ميل أعلى قيمة اقتصادية للميزانيات المحدودة.",
      },
      {
        qEn: "Will our existing emails be preserved during migration?",
        qAr: "هل سيتم الاحتفاظ بكافة رسائلنا القديمة عند الانتقال؟",
        aEn: "Yes, we run an automated migration process that transfers your existing folders, inbox history, and sent messages intact.",
        aAr: "نعم، نقوم بعملية ترحيل بيانات كاملة لنقل جميع الرسائل الواردة والمرسلة والمجلدات بدقة دون ضياع أي بريد.",
      },
    ],
    relatedSlugs: ["website-design-development", "company-profile-branding", "remote-support-training"],
  },
  {
    id: "branding",
    number: "05",
    slug: "company-profile-branding",
    titleEn: "Company Profile & Branding",
    titleAr: "تصميم الهوية وملف الشركة التعريفي",
    shortDescEn: "Logo design, corporate brand identity, bilingual company profiles, copywriting, and print-ready files for Saudi tenders.",
    shortDescAr: "تصميم الشعارات، والهويات البصرية المتكاملة، وكتابة وتصميم الملف التعريفي للشركة (Company Profile) للمناقصات والاعتمادات.",
    heroHeadlineEn: "Prestige Corporate Branding & Bilingual Company Profiles for Saudi Markets",
    heroHeadlineAr: "هويات بصرية وملفات تعريفية مؤسسية تليق بمتطلبات السوق والمناقصات السعودية",
    overviewEn:
      "In the competitive Saudi business environment, winning bids with Aramco, SABIC, government entities on Etimad, or tier-1 contractors requires a prestigious, thoroughly vetted company profile. TGL Technologies designs comprehensive brand identity packages: memorable corporate logos, standardized typography, brand guideline manuals, stationery, and publication-grade bilingual company profile documents with executive copywriting.",
    overviewAr:
      "في ظل التنافسية الكبيرة في السوق السعودي ومشاريع رؤية 2030، يتطلب الفوز بالعقود مع أرامكو أو سابك أو الجهات الحكومية في منصة اعتماد تقديم ملف تعريفي (Company Profile) رفيع المستوى. تصمم تي جي إل هويات تجارية متكاملة تشمل الشعار، دليل الهوية البصرية، المطبوعات الرسمية، وملفاً تعريفياً ثنائي اللغة بصياغة تسويقية قوية تعزز الثقة لدى لجان التقييم والعملاء.",
    whatYouGetEn: [
      "Custom vector logo design with full copyright ownership and format kit (AI, EPS, SVG, PNG)",
      "Bilingual Company Profile (12 to 24 pages) with research-backed industry copywriting",
      "Print-ready CMYK layouts alongside high-resolution interactive digital PDF versions",
      "Corporate stationery suite: Letterheads, invoice templates, business cards, envelopes",
      "Brand guideline manual detailing official color codes (Pantone/HEX/RGB) and typography rules",
      "Social media avatar kits and presentation deck templates (PowerPoint / Google Slides)",
    ],
    whatYouGetAr: [
      "تصميم شعار احترافي مبتكر مع تسليم كافة الملفات المصدرية وملكية فكرية كاملة",
      "ملف تعريفي متكامل (12 إلى 24 صفحة) بصياغة عربية وإنجليزية موجهة للمناقصات",
      "نسخ رقمية تفاعلية بأسلوب عرض جذاب بالإضافة لملفات جاهزة للمطابع بجودة عالية",
      "تصميم المطبوعات والمراسلات: الخطابات الرسمية، بطاقات العمل، السندات والأظرف",
      "دليل استخدام الهوية البصرية الذي يوضح الألوان الرسمية وقواعد استخدام الشعار",
      "قوالب عروض تقديمية (PowerPoint) ونماذج منشورات لمنصات التواصل الاجتماعي",
    ],
    featuresEn: [
      {
        title: "Tender-Ready Presentation",
        desc: "Structured to answer client prequalification questionnaires, showcasing company vision, safety policies, leadership, and past projects.",
      },
      {
        title: "Native Arabic & English Editorial",
        desc: "Written by native business copywriters rather than literal translation tools, projecting sophistication and authority.",
      },
      {
        title: "Saudi Visual Nuance",
        desc: "Design aesthetic calibrated for the Saudi corporate landscape, balancing modern innovation with regional prestige.",
      },
    ],
    featuresAr: [
      {
        title: "هيكلة مخصصة للتأهيل والمناقصات",
        desc: "تصميم الملف لإبراز رؤية الشركة، سياسات السلامة والجودة (HSE)، الهيكل الإداري، وسابقة الأعمال المعتمدة.",
      },
      {
        title: "صياغة لغوية تسويقية رصينة",
        desc: "كتابة نصوص احترافية بأيدي متخصصين تفهم طبيعة المصطلحات التجارية والهندسية بالسوق السعودي.",
      },
      {
        title: "طابع بصري يعكس التميز",
        desc: "تناغم لوني وتصميم يعبر عن الحداثة والاحتراف بما يتناسب مع ثقافة قطاع الأعمال في المملكة.",
      },
    ],
    whoItsForEn: [
      "New startups needing a professional market presence from day one",
      "Subcontractors submitting prequalification documents to main contractors in Riyadh or Eastern Province",
      "Companies expanding their service lines or rebranding for Saudi Vision 2030 initiatives",
    ],
    whoItsForAr: [
      "المؤسسات والشركات الناشئة التي تحتاج لانطلاقة قوية وهوية مرموقة أمام السوق",
      "مقابلو الباطن الراغبون في استيفاء شروط التأهيل المسبق لدى كبرى الشركات والمشاريع",
      "الشركات العريقة الراغبة في تحديث علامتها التجارية والتوسع في قطاعات جديدة",
    ],
    deliveryMethodEn:
      "Collaborative creative process conducted online. We deliver initial creative concepts, iterate based on your feedback, deliver digital and print assets via cloud folder, and handle revisions swiftly.",
    deliveryMethodAr:
      "عملية إبداعية تفاعلية عبر الإنترنت. نقدم مفاهيم أولية للشعار ونطورها وفق ملاحظاتكم، ونسلم الملفات المنتهية بتنسيقات متعددة عبر رابط سحابي آمن.",
    complianceNotesEn:
      "All branding materials strictly avoid prohibited symbols, respecting Saudi intellectual property and cultural guidelines.",
    complianceNotesAr:
      "تلتزم التصاميم بالأنظمة والضوابط المعتمدة في الهيئة السعودية للملكية الفكرية دون استخدام أي شعارات رسمية غير مصرح بها.",
    faqs: [
      {
        qEn: "How many logo concepts do you present initially?",
        qAr: "كم نموذجاً أولياً للشعار تقدمونه للاختيار؟",
        aEn: "We present 3 distinct design concepts based on your industry, followed by revisions on your selected direction.",
        aAr: "نقدم 3 مسارات إبداعية مختلفة للشعار مبنية على هوية نشاطكم، ثم نقوم بتطوير وتعديل النموذج الذي ينال استحسانكم.",
      },
      {
        qEn: "Do you provide editable source files?",
        qAr: "هل أحصل على ملفات التصميم الأصلية القابلة للتعديل؟",
        aEn: "Yes. You receive full ownership including vector AI, PDF, EPS, and high-resolution raster files for lifetime use.",
        aAr: "نعم، تحصل على كافة الملفات المصدرية المفتوحة والمتجهية (Vector) وحقوق الملكية الكاملة لاستخدامها مدى الحياة.",
      },
    ],
    relatedSlugs: ["website-design-development", "digital-marketing", "business-email"],
  },
  {
    id: "marketing",
    number: "06",
    slug: "digital-marketing",
    titleEn: "Digital Marketing & Social Media",
    titleAr: "التسويق الرقمي وإدارة منصات التواصل",
    shortDescEn: "Google Business Profile optimization, YouTube, Facebook, LinkedIn, and Instagram management to capture qualified Saudi buyers.",
    shortDescAr: "إدارة وتطوير الحسابات على منصات التواصل، وتحسين الظهور في خرائط جوجل، وحملات مدروسة لجلب عملاء حقيقيين في السعودية.",
    heroHeadlineEn: "Targeted Inbound B2B & B2C Digital Marketing in Saudi Arabia",
    heroHeadlineAr: "حملات تسويقية رقمية موجهة لزيادة المبيعات والعقود في السوق السعودي",
    overviewEn:
      "Traditional marketing is no longer enough to win in Saudi Arabia's vibrant digital marketplace. Local buyers search on Google Maps, research vendors on LinkedIn, and connect directly over WhatsApp. TGL Technologies provides ongoing digital marketing retainers focusing on what matters: qualified lead generation. We optimize your Google Business Profile for local pack rankings in your city, manage social media content calendars with bilingual copy, and run conversion-driven ad campaigns.",
    overviewAr:
      "الاعتماد على المعارف وحدها لم يعد كافياً لنمو الشركات في المملكة. يبحث أصحاب القرار اليوم عن الموردين عبر خرائط جوجل ولينكد إن ويتواصلون فورياً عبر الواتساب. تقدم تي جي إل خطط تسويق رقمي وإدارة دورية تركز على النتيجة الأهم: جلب عملاء محتملين واستفسارات شراء فعلية. نهتم بتحسين ظهورك في خرائط جوجل بالرياض والمدن الرئيسية، وصناعة محتوى تفاعلي رصين، وإدارة الحملات الإعلانية بدقة.",
    whatYouGetEn: [
      "Google Business Profile setup, citation building, and review strategy for local map packs",
      "Monthly social media content calendar (LinkedIn, X/Twitter, Instagram) with bilingual graphic posts",
      "High-intent Search Ads management on Google targeted to Saudi commercial keywords",
      "WhatsApp click-to-chat campaign setup with conversion tracking in Google Analytics 4",
      "Monthly transparent performance reports detailing lead inquiries, clicks, and impressions",
    ],
    whatYouGetAr: [
      "إعداد وتوثيق وتطوير ملف خرائط جوجل (Google Business) للتصدر في نتائج البحث المحلية بمدينتك",
      "خطة محتوى شهرية للمنصات (لينكد إن، إنستغرام، إكس) بتصاميم احترافية وكتابة متقنة",
      "إدارة الحملات الإعلانية الممولة على شبكة بحث جوجل للكلمات المفتاحية ذات القيمة العالية",
      "إطلاق حملات واتساب تفاعلية مباشرة مع تتبع دقيق للتحويلات في Google Analytics 4",
      "تقارير شهرية شفافة توضح عدد طلبات التواصل والاتصالات والمؤشرات المحققة",
    ],
    featuresEn: [
      {
        title: "Local Saudi Map Optimization",
        desc: "Dominate Google search results when nearby commercial customers search for your products or services in Riyadh, Jeddah, or Dammam.",
      },
      {
        title: "B2B Lead Funnels",
        desc: "Target decision-makers, procurement officers, and business owners with professional case studies and technical highlights.",
      },
      {
        title: "Cultural Tone & Calendar",
        desc: "Align your marketing schedule with Saudi national occasions, Foundation Day, Eid holidays, and seasonal business cycles.",
      },
    ],
    featuresAr: [
      {
        title: "التصدر في خرائط جوجل المحلية",
        desc: "الظهور في أولى النتائج عند بحث العملاء في منطقتك الجغرافية عن المنتجات أو الخدمات التي تقدمها.",
      },
      {
        title: "استهداف مسؤولي المشتريات والمديرين",
        desc: "بناء قنوات تسويقية B2B تخاطب أصحاب القرار في الشركات والمؤسسات برسائل عملية ومقنعة.",
      },
      {
        title: "مواكبة المناسبات والمواسم السعودية",
        desc: "مواءمة الحملات مع المناسبات الوطنية ويوم التأسيس والأعياد ومواسم النشاط التجاري بالمملكة.",
      },
    ],
    whoItsForEn: [
      "Service providers wanting consistent calls and WhatsApp messages from local clients",
      "Wholesale traders expanding their distribution across different Saudi regions",
      "Contractors seeking to build long-term brand equity and industry authority",
    ],
    whoItsForAr: [
      "الشركات الخدمية التي ترغب في تلقي اتصالات ورسائل يومية من عملاء في مدينتها",
      "تجار الجملة والموزعون الساعون لتوسيع قاعدة عملائهم في مختلف مناطق المملكة",
      "المؤسسات التي ترغب في بناء اسم تجاري قوي وموثوق في قطاعها",
    ],
    deliveryMethodEn:
      "Managed remotely by our digital marketing specialists. We coordinate with you via dedicated WhatsApp channel and provide monthly video review meetings.",
    deliveryMethodAr:
      "إدارة رقمية شهرية عبر فريق متخصص في التسويق الخليجي مع تواصل فوري عبر الواتساب واجتماعات دورية لمراجعة النتائج.",
    complianceNotesEn:
      "All campaigns comply with Saudi advertising regulations, consumer protection guidelines, and platform policies.",
    complianceNotesAr:
      "تتوافق كافة الأنشطة الإعلانية مع الأنظمة المرعية الصادرة عن الهيئة العامة لتنظيم الإعلام في المملكة.",
    faqs: [
      {
        qEn: "How quickly do we start seeing inquiries from Google Business Profile?",
        qAr: "متى نبدأ بملاحظة استفسارات العملاء من خرائط جوجل؟",
        aEn: "Properly optimized listings with fresh photos and reviews typically experience a 40–80% rise in calls and directions within 30 to 60 days.",
        aAr: "عادة ما تبدأ النتائج الملموسة في ارتفاع الاتصالات والزيارات خلال 30 إلى 60 يوماً من اكتمال التوثيق والتهيئة وجمع التقييمات الإيجابية.",
      },
      {
        qEn: "Do you manage paid ad budgets directly?",
        qAr: "هل تتضمن الباقة الميزانية الإعلانية المدفوعة لجوجل ومنصات التواصل؟",
        aEn: "Ad spend is paid directly to Google or Meta from your company credit card in SAR to maintain complete billing control. We charge a management fee.",
        aAr: "تُدفع ميزانية الإعلانات مباشرة للمنصات (جوجل، ميتا) باستخدام بطاقة شركتكم الائتمانية بالريال لضمان الشفافية، ورسومنا تكون مقابل الإدارة والتطوير.",
      },
    ],
    relatedSlugs: ["website-design-development", "company-profile-branding", "zatca-e-invoicing-erp"],
  },
  {
    id: "accounting-vat",
    number: "07",
    slug: "accounting-vat-support",
    titleEn: "Accounting & VAT Support",
    titleAr: "خدمات المحاسبة ودعم ضريبة القيمة المضافة",
    shortDescEn: "Bookkeeping, monthly MIS financial reports, and VAT return preparation for small and mid-sized enterprises in Saudi Arabia.",
    shortDescAr: "مسك الدفاتر المحاسبية، وإعداد التقارير المالية الدورية، وتجهيز إقرارات ضريبة القيمة المضافة (15%) لمنشآت المملكة.",
    heroHeadlineEn: "Reliable Remote Bookkeeping & Saudi VAT Return Compliance",
    heroHeadlineAr: "حلول مسك الدفاتر المحاسبية والامتثال لضريبة القيمة المضافة لشركات السعودية",
    overviewEn:
      "Maintaining an accurate, clean financial ledger is not just good business practice—under Saudi ZATCA regulations, accurate records and timely VAT return filings are mandatory to avoid severe non-compliance penalties. TGL Technologies provides professional remote accounting and bookkeeping support for Saudi businesses. We reconcile bank statements, review supplier invoices, manage receivables and payables, and prepare your 15% VAT filing data ready for submission.",
    overviewAr:
      "إدارة الحسابات المالية بدقة ليست مجرد خطوة تنظيمية، بل هي التزام قانوني صارم وفق لوائح هيئة الزكاة والضريبة والجمارك لتجنب الغرامات المالية الباهظة. تقدم تي جي إل خدمات المحاسبة ومسك الدفاتر عن بعد للمؤسسات والشركات في المملكة. نتولى مراجعة الفواتير، ومطابقة الحسابات البنكية، ومتابعة الذمم المدينة والدائنة، وتجهيز أرقام إقرار ضريبة القيمة المضافة (15%) بدقة قبل موعد التقديم.",
    whatYouGetEn: [
      "Accurate day-to-day transaction recording and journal entry verification",
      "Monthly bank and credit card statement reconciliations in Saudi Riyals (SAR)",
      "Preparation of standard ZATCA VAT Return workpapers with input/output tax netting",
      "Executive Monthly Management Information System (MIS) reports: P&L, Balance Sheet, Cash Flow",
      "Accounts aging reports to accelerate client collections and manage cash flow",
      "Clean financial record hygiene ready for external statutory audit",
    ],
    whatYouGetAr: [
      "تسجيل القيود اليومية ومراجعة فواتير الشراء والبيع والمصروفات أولاً بأول",
      "المطابقة الشهرية لكافة الحسابات البنكية بالريال السعودي وتصنيف الحركات بدقة",
      "تجهيز مسودة إقرار ضريبة القيمة المضافة ومطابقة ضريبة المدخلات مع المخرجات",
      "تقارير مالية إدارية شهرية واضحة: بيان الأرباح والخسائر، المركز المالي، والتدفقات النقدية",
      "تقارير أعمار الديون لتحصيل المستحقات من العملاء وتحسين السيولة المالية",
      "سجلات محاسبية منظمة وموثقة تسهل عمل المراجع المالي القانوني لنهاية العام",
    ],
    featuresEn: [
      {
        title: "Saudi 15% VAT Accuracy",
        desc: "Ensure every invoice claimed has a compliant tax number and QR code to safeguard against VAT audit disallowances.",
      },
      {
        title: "Fraction of Full-Time Cost",
        desc: "Access qualified accounting professionals remotely for less than the cost of a junior in-house accountant in KSA.",
      },
      {
        title: "Cloud Software Synergy",
        desc: "We work directly inside your TGL ERP, Zoho Books, or cloud ledger, keeping numbers live and accessible 24/7.",
      },
    ],
    featuresAr: [
      {
        title: "دقة تامة في ضريبة 15%",
        desc: "التأكد من اكتمال الأرقام الضريبية والفواتير النظامية لتفادي رفض أي مدخلات ضريبية عند الفحص.",
      },
      {
        title: "توفير كبير في التكاليف التشغيلية",
        desc: "الحصول على خدمات فريق محاسبي متمرس بتكلفة شهرية أقل بكثير من تعيين محاسب مقيم بدوام كامل.",
      },
      {
        title: "العمل على أنظمتكم السحابية",
        desc: "نعمل مباشرة على نظام TGL ERP أو Zoho Books أو أي نظام محاسبي سحابي معتمد لديكم.",
      },
    ],
    whoItsForEn: [
      "Growing SMEs without an in-house full-time chief accountant",
      "Foreign companies operating in Saudi Arabia requiring compliant local bookkeeping",
      "Business owners needing clear monthly visibility on gross margins and operational expenses",
    ],
    whoItsForAr: [
      "الشركات الصغيرة والمتوسطة التي لا تحتاج لتحمل تكاليف قسم محاسبي كامل داخل الشركة",
      "الشركات المستثمرة بالمملكة الراغبة في ضبط حساباتها وفق المعايير السعودية",
      "رواد الأعمال الراغبين في معرفة أرباحهم الصافية ومصروفاتهم الشهرية بشفافية تامة",
    ],
    deliveryMethodEn:
      "Secure remote workflow. You share digital copies of invoices and bank statements via cloud drive or accounting portal; our team verifies, categorizes, and provides monthly reviews.",
    deliveryMethodAr:
      "خدمة منظمة عن بعد. ترفعون صور الفواتير وكشوفات الحساب عبر مجلد سحابي محمي؛ ويتولى فريقنا القيود والتقارير الشهرية.",
    complianceNotesEn:
      "All VAT preparation adheres strictly to ZATCA regulations. Submission to the official portal is performed with client approval.",
    complianceNotesAr:
      "تتم كافة أعمال الاحتساب الضريبي وفق تعليمات هيئة الزكاة والضريبة والجمارك ويتم التقديم النهائي باعتماد العميل.",
    faqs: [
      {
        qEn: "Can you help rectify backlog or unorganized accounts from past months?",
        qAr: "هل تقدمون خدمة ترتيب وتصحيح الحسابات المتراكمة من فترات سابقة؟",
        aEn: "Yes, we perform forensic cleanup of backlog records, reconcile missing periods, and bring your books up to date for VAT compliance.",
        aAr: "نعم، نقدم خدمة مراجعة وترتيب القيود السابقة ومطابقة الفترات المتأخرة لتصحيح وضع المنشأة الضريبي والقانوني.",
      },
      {
        qEn: "How do we transmit daily invoices and receipts to your team?",
        qAr: "كيف يتم إرسال الفواتير والمستندات اليومية إلى فريقكم؟",
        aEn: "You can upload scans or phone snapshots directly to your dedicated cloud folder or email them to our accounting desk.",
        aAr: "يمكنكم ببساطة رفع صور الفواتير والإيصالات عبر مجلد سحابي مخصص لشركتكم أو إرسالها لمسؤول الحساب لدينا.",
      },
    ],
    relatedSlugs: ["zatca-e-invoicing-erp", "industry-software", "remote-support-training"],
  },
  {
    id: "gps-fleet",
    number: "08",
    slug: "gps-fleet-tracking",
    titleEn: "GPS Fleet Tracking",
    titleAr: "تتبع المركبات والأسطول عبر GPS",
    shortDescEn: "Live tracking, geofencing, speed alerts, trip history, fuel monitoring, and WASL-ready platform integration across KSA.",
    shortDescAr: "تتبع فوري للمركبات، وسياج جغرافي، وتنبيهات السرعة، واستهلاك الوقود، مع تكامل جاهز للربط مع منصة وصل.",
    heroHeadlineEn: "Enterprise GPS Fleet Telematics & WASL-Ready Tracking in Saudi Arabia",
    heroHeadlineAr: "حلول تتبع المركبات عن بُعد وإدارة الأساطيل الجاهزة للربط مع منصة وصل",
    overviewEn:
      "Operating a commercial vehicle fleet in Saudi Arabia presents unique challenges: vast highway distances, extreme summer temperatures, driver safety oversight, and stringent Transport General Authority regulations. TGL Technologies delivers end-to-end GPS fleet telematics: real-time vehicle positioning, route replay, unauthorized trip alerts, geofencing around job sites, and temperature monitoring for refrigerated logistics. Our platform is engineered for WASL-ready integration to keep your transport operations fully compliant.",
    overviewAr:
      "تشغيل أساطيل النقل والتوزيع في المملكة يفرض تحديات كبيرة: المسافات الطويلة بين المدن، ظروف الطقس، متابعة سلوك السائقين، والالتزام بلوائح الهيئة العامة للنقل. تقدم تي جي إل أحدث حلول التتبع عبر الأقمار الصناعية (GPS): متابعة حية لمسارات المركبات، تنبيهات تجاوز السرعة والمناطق المحظورة، ومراقبة حرارة شاحنات التبريد. تم تصميم منصتنا لتكون جاهزة للتكامل مع منصة وصل لضمان تشغيل أسطولك بأمان ونظامية.",
    whatYouGetEn: [
      "Real-time GPS vehicle location tracking with live map updates every 10–30 seconds",
      "Route history playback, stop durations, idling reports, and mileage counters",
      "Custom geofencing alerts for warehouses, customer delivery zones, and borders",
      "Driver speed violation alerts, harsh braking, and sudden acceleration monitoring",
      "WASL-ready platform integration architecture for commercial transport licenses",
      "Optional temperature sensors for cold-chain refrigerated delivery trucks",
    ],
    whatYouGetAr: [
      "تتبع حي للمركبات على الخريطة مع تحديث فوري للموقع كل 10 إلى 30 ثانية",
      "إعادة تشغيل مسار الرحلات السابقة، ومعرفة أوقات التوقف والتشغيل في وضع الخمول",
      "سياج جغرافي ذكي يرسل تنبيهات فورية عند دخول أو خروج السيارات من المستودعات أو المدن",
      "تنبيهات تجاوز السرعة المحددة، والفرملة المفاجئة، والتسارع العنيف لسلامة السائقين",
      "منصة برمجية مهيأة للربط التقني مع منصة وصل لقطاعات النقل والتأجير والشحن",
      "حساسات اختيارية لقياس درجات الحرارة والرطوبة لشاحنات نقل الأغذية والأدوية",
    ],
    featuresEn: [
      {
        title: "WASL-Ready Telematics Middleware",
        desc: "Built to interface with Saudi Transport General Authority (TGA) WASL requirements for commercial cargo and passenger transport.",
      },
      {
        title: "Ruggedized 4G Hardware Compatibility",
        desc: "Compatible with industry-leading Teltonika and Queclink trackers built to withstand intense desert heat up to 75°C.",
      },
      {
        title: "Fuel & Maintenance Optimization",
        desc: "Identify excessive engine idling, optimize delivery routes, and cut operational fleet fuel expenditures by 15–25%.",
      },
    ],
    featuresAr: [
      {
        title: "جاهزية للتكامل مع منصة وصل",
        desc: "بنية تقنية تدعم نقل بيانات التتبع وفق معايير الهيئة العامة للنقل لقطاعات الشحن والتوجيه.",
      },
      {
        title: "أجهزة متطورة تتحمل حرارة الصيف",
        desc: "توافق مع أفضل أجهزة التتبع العالمية المصممة للعمل في الظروف المناخية القاسية حتى 75 درجة مئوية.",
      },
      {
        title: "تقليل استهلاك الوقود والصيانة",
        desc: "الكشف عن الهدر الناتج عن تشغيل المحرك أثناء التوقف وتحسين المسارات لخفض تكلفة الوقود بنسبة تصل إلى 20%.",
      },
    ],
    whoItsForEn: [
      "Logistics, freight forwarding, and courier delivery operators across Saudi Arabia",
      "Equipment rental and construction firms dispatching machinery to job sites",
      "Food, dairy, and pharmaceutical distributors managing cold-chain integrity",
      "Corporate fleets seeking to eliminate vehicle misuse and overtime disputes",
    ],
    whoItsForAr: [
      "شركات الخدمات اللوجستية والنقل السريع والتوزيع الداخلي بين المدن",
      "مؤسسات المقاولات وتأجير المعدات لمتابعة حركة الآليات والسيارات الميدانية",
      "شركات الأغذية والمشروبات والأدوية التي تتطلب مراقبة درجات التبريد",
      "الشركات التي ترغب في منع استخدام سيارات العمل للأغراض الشخصية بعد ساعات الدوام",
    ],
    deliveryMethodEn:
      "Turnkey telematics platform setup. We configure your cloud tracking server, set up user accounts, define geofences, and provide pre-configured devices or software protocols for your local auto technician to install in minutes.",
    deliveryMethodAr:
      "تهيئة سحابية فورية. نضبط المنصة وحسابات المتابعة والسياج الجغرافي، ونقدم إرشادات فنية ميسرة لفنيي الكهرباء لتركيب الأجهزة في دقائق.",
    complianceNotesEn:
      "WASL-ready integration applies to supported tracking devices and telematics middleware in line with Transport General Authority guidelines.",
    complianceNotesAr:
      "التكامل الجاهز مع منصة وصل ينطبق على أجهزة التتبع المتوافقة وفق لوائح الهيئة العامة للنقل بالمملكة.",
    faqs: [
      {
        qEn: "What does 'WASL-ready' mean for our fleet?",
        qAr: "ماذا يعني 'تكامل جاهز لمنصة وصل' بالنسبة لأسطولنا؟",
        aEn: "It means our telematics software structure is built to transmit the vehicle telemetry fields (location, speed, plate data, driver) required by the Transport General Authority's WASL gateway when integrated with an approved service provider.",
        aAr: "يعني ذلك أن نظامنا البرمجي مهيأ ومبرمج لربط وبث الحقول والبيانات المطلوبة من منصة وصل (الموقع، السرعة، رقم اللوحة، بيانات السائق) وفق الضوابط المعتمدة.",
      },
      {
        qEn: "Can I monitor my fleet on my iPhone or Android device?",
        qAr: "هل يمكنني متابعة سيارات الأسطول عبر هاتفي الشخصي؟",
        aEn: "Yes, our mobile web platform is fully responsive and provides instant real-time alerts directly on your smartphone.",
        aAr: "نعم، يمكنك متابعة كافة المركبات لحظة بلحظة واستقبال التنبيهات الفورية عبر متصفح الهاتف أو التطبيق بكل سهولة.",
      },
    ],
    relatedSlugs: ["ai-dashcam-monitoring", "industry-software", "zatca-e-invoicing-erp"],
  },
  {
    id: "ai-dashcam",
    number: "09",
    slug: "ai-dashcam-monitoring",
    titleEn: "AI Dashcam Monitoring",
    titleAr: "كاميرات المراقبة الذكية للأسطول (AI Dashcam)",
    shortDescEn: "Driver behavior alerts, forward collision warnings, live video streaming, and tamper-proof incident recording for safer fleets.",
    shortDescAr: "تنبيهات فورية لسلوك السائق، والتحذير من التصادم، وبث مرئي حي، وتسجيل موثق للحوادث لتعزيز السلامة وحماية المركبات.",
    heroHeadlineEn: "Next-Gen AI Fleet Dashcams & Driver Safety Video Telematics in KSA",
    heroHeadlineAr: "أنظمة كاميرات المراقبة المدعومة بالذكاء الاصطناعي لحماية أساطيل النقل في السعودية",
    overviewEn:
      "Fleet accidents and unsubstantiated damage claims can severely impact commercial margins in Saudi Arabia. TGL Technologies provides intelligent dual-facing AI dashcam systems that combine Advanced Driver Assistance Systems (ADAS) and Driver Monitoring Systems (DMS). The forward camera detects tailgating, pedestrian risks, and lane departures, while the cabin-facing camera uses edge AI to detect driver distraction, mobile phone usage, drowsiness, and seatbelt non-compliance.",
    overviewAr:
      "تشكل الحوادث المرورية والنزاعات التأمينية عبئاً مالياً وإدارياً كبيراً على مديري الأساطيل بالمملكة. تقدم تي جي إل أنظمة كاميرات ذكية ثنائية العدسة تعمل بالذكاء الاصطناعي تجمع بين حماية الطريق ومراقبة سلوك السائق. ترصد الكاميرا الأمامية مسافة الأمان وخطر التصادم، بينما ترصد الكاميرا الداخلية بالذكاء الاصطناعي حالات تشتت الانتباه، أو استخدام الجوال أثناء القيادة، أو النعاس، أو عدم ربط حزام الأمان.",
    whatYouGetEn: [
      "Dual-channel high-definition video (1080p road-facing + wide cabin-facing camera)",
      "Edge AI Driver Monitoring (DMS): Distraction, fatigue, mobile phone usage, smoking detection",
      "Advanced Driver Assistance (ADAS): Forward collision warning, unsafe distance alerts",
      "Automatic event video clip upload to cloud upon harsh braking, impact, or sudden swerve",
      "Live remote video streaming for fleet dispatchers during critical situations",
      "Tamper-proof lockable SD card enclosure and GPS-synchronized video watermarks",
    ],
    whatYouGetAr: [
      "تصوير عالي الدقة ثنائي القناة (عدسة خارجية للطريق 1080p + عدسة داخلية واسعة للمقصورة)",
      "نظام مراقبة السائق (DMS): كشف فوري للنعاس، واستخدام الهاتف، والتدخين، وعدم ربط الحزام",
      "نظام مساعدة القيادة (ADAS): تحذير من الاقتراب الخطر وتنبيهات تفادي التصادم الأمامي",
      "رفع تلقائي لمقاطع الفيديو الحرجة إلى السحابة فور وقوع فرملة حادة أو صدمة أو اهتزاز",
      "إمكانية البث المرئي الحي المباشر لمدير الأسطول للاطمئنان على حالة السيارة والسائق",
      "صندوق حماية مقفل لمنع نزع شريحة الذاكرة وختم مائي يوضح إحداثيات GPS والسرعة والوقت",
    ],
    featuresEn: [
      {
        title: "Immediate In-Cabin Audio Coaching",
        desc: "Spoken voice alert in the vehicle notifies the driver immediately when fatigue or mobile distraction is detected.",
      },
      {
        title: "Definitive Insurance Dispute Defense",
        desc: "Tamper-proof time-stamped video evidence exonerates your drivers from false third-party claims and accident liability.",
      },
      {
        title: "High-Temperature Reliability",
        desc: "Supercapacitor-based architecture engineered to survive intense Saudi summer cabin heat without battery swelling.",
      },
    ],
    featuresAr: [
      {
        title: "تنبيه صوتي فوري داخل المقصورة",
        desc: "تنبيه السائق صوتياً في نفس اللحظة بمجرد انشغاله عن الطريق أو شعوره بالإرهاق لتفادي الحوادث.",
      },
      {
        title: "دليل قاطع لشركات التأمين ونجم",
        desc: "توثيق رسمي بالصوت والصورة يحمي شركتك وسائقيك من الادعاءات غير الصحيحة في تقارير نجم والتأمين.",
      },
      {
        title: "مكثف فائق يتحمل حرارة الصيف",
        desc: "يعتمد على مكثفات كهربائية متطورة (Supercapacitor) بدلاً من بطاريات الليثيوم لضمان الأمان في حرارة المملكة.",
      },
    ],
    whoItsForEn: [
      "Commercial cargo fleets, fuel tankers, and hazardous material haulers",
      "Corporate executive passenger transport and limousine rental fleets",
      "School bus and employee shuttle operators prioritizing passenger safety",
      "Companies experiencing high vehicle maintenance costs and frequent fender benders",
    ],
    whoItsForAr: [
      "شاحنات النقل الثقيل، صهاريج الوقود، وناقلات المواد الخطرة على الطرق السريعة",
      "شركات نقل الركاب والليموزين الفاخر وتأجير السيارات",
      "حافلات النقل المدرسي ونقل الموظفين لضمان أعلى معايير السلامة للركاب",
      "الشركات التي تعاني من ارتفاع تكاليف إصلاح الحوادث وتكرار المخالفات المرورية",
    ],
    deliveryMethodEn:
      "Hardware setup and cloud platform deployment. We provision your secure video monitoring cloud portal, configure event thresholds, and provide remote guidance for camera calibration.",
    deliveryMethodAr:
      "تجهيز المنصة السحابية وضبط حساسية التنبيهات وإرشاد الفنيين لطريقة معايرة العدسات عن بعد.",
    complianceNotesEn:
      "Configurable for internal cabin privacy compliance per Saudi labor and privacy preferences.",
    complianceNotesAr:
      "إمكانية ضبط خصوصية الكاميرا الداخلية بما يتوافق مع بيئة العمل والخصوصية المتبعة في المنشأة.",
    faqs: [
      {
        qEn: "Does the camera record continuously or only during incidents?",
        qAr: "هل تسجل الكاميرا بشكل متواصل أم فقط عند وقوع الحوادث؟",
        aEn: "The device records continuously onto the local encrypted memory card, while automatically transmitting short 15–30 second HD video clips to the cloud server whenever an alert or crash is triggered.",
        aAr: "تسجل الكاميرا باستمرار على بطاقة الذاكرة المشفرة بالسيارة، وترسل تلقائياً مقطع فيديو عالي الدقة (15-30 ثانية) للسحابة عند رصد فرملة مفاجئة أو حادث.",
      },
      {
        qEn: "Can dispatchers speak directly to the driver through the camera?",
        qAr: "هل يمكن لمدير الأسطول التحدث مباشرة مع السائق عبر الكاميرا؟",
        aEn: "Yes, our supported high-end models include two-way voice communication for live operational dispatch and emergency check-ins.",
        aAr: "نعم، تدعم الموديلات المتقدمة خاصية الاتصال الصوتي ثنائي الاتجاه للتحدث المباشر مع السائق في حالات الطوارئ.",
      },
    ],
    relatedSlugs: ["gps-fleet-tracking", "industry-software", "remote-support-training"],
  },
  {
    id: "remote-support",
    number: "10",
    slug: "remote-support-training",
    titleEn: "Remote Support & Training",
    titleAr: "الدعم الفني والتدريب عن بُعد",
    shortDescEn: "Fast helpdesk, user onboarding, workflow customization, and system maintenance across the Saudi working week (Sunday to Thursday).",
    shortDescAr: "مكتب مساعدة فني سريع، وتدريب الموظفين، وضبط العمليات، وصيانة الأنظمة طوال أيام العمل بالمملكة (الأحد إلى الخميس).",
    heroHeadlineEn: "Dedicated Remote IT Support & Training Aligned with Saudi Business Hours",
    heroHeadlineAr: "دعم فني وتدريب مهني مستمر متوافق مع ساعات العمل وأسبوع العمل السعودي",
    overviewEn:
      "Software implementations only succeed when your team knows how to use them with confidence. TGL Technologies provides proactive remote IT support, live screen-share user training, and continuous system maintenance across all 10 service verticals. Operating specifically during the Saudi Arabian commercial work week (Sunday through Thursday, 8:00 AM to 6:00 PM AST), our dedicated engineering desk ensures your staff never face software blockers or downtime alone.",
    overviewAr:
      "نجاح أي حل تقني أو نظام ERP يقاس بمدى قدرة موظفيك على استخدامه بكفاءة وثقة. تقدم تي جي إل خدمات الدعم الفني السحابي والتدريب التفاعلي المباشر والصيانة الدورية لجميع الأنظمة والخدمات التي نقدمها. يعمل فريقنا الهندسي وفق أسبوع العمل وساعات الدوام الرسمية في المملكة (من الأحد إلى الخميس من 8:00 صباحاً إلى 6:00 مساءً بتوقيت مكة) لضمان استمرار أعمالكم دون أي توقف.",
    whatYouGetEn: [
      "Helpdesk access via dedicated VIP WhatsApp line, email ticketing, and direct phone",
      "Live screen-share troubleshooting and operational assistance on Google Meet or Zoom",
      "Personalized onboarding training sessions for new staff in Arabic and English",
      "Routine software patches, cloud database backups, and ZATCA rule maintenance",
      "Rapid Service Level Agreement (SLA) response times for critical business issues",
      "Clear video tutorial library recorded specifically for your company's workflows",
    ],
    whatYouGetAr: [
      "قنوات تواصل مباشرة عبر خط واتساب مخصص، ونظام تذاكر البريد، والاتصال الهاتفي",
      "جلسات دعم فني فورية عبر مشاركة الشاشة لحل أي استفسار أو مشكلة في دقائق",
      "دورات تدريبية مخصصة للموظفين الجدد باللغتين العربية والإنجليزية لسرعة استيعاب النظام",
      "تحديثات دورية مستمرة، نسخ احتياطي لقواعد البيانات، وتحديث بروتوكولات الفوترة",
      "اتفاقية مستوى خدمة (SLA) تضمن سرعة الاستجابة للحالات الطارئة والحرجة",
      "مكتبة شروحات فيديو مسجلة ومفصلة لخطوات العمل في منشأتكم للرجوع إليها دائماً",
    ],
    featuresEn: [
      {
        title: "Aligned with Saudi Working Hours",
        desc: "We work when you work: Sunday through Thursday, Arabia Standard Time (UTC+3), ensuring zero weekend delays.",
      },
      {
        title: "Bilingual Technical Specialists",
        desc: "Communicate comfortably in Arabic or English with engineers who understand both software code and Saudi business practices.",
      },
      {
        title: "Cost-Effective Scalability",
        desc: "Avoid the high overhead of hiring full-time in-house IT administrators while gaining a complete multi-disciplinary team.",
      },
    ],
    featuresAr: [
      {
        title: "توافق تام مع أوقات العمل بالمملكة",
        desc: "فريقنا متواجد معك من الأحد إلى الخميس بتوقيت مكة المكرمة لضمان الاستجابة السريعة أثناء ساعات عملكم.",
      },
      {
        title: "مهندسون متخصصون يتحدثون العربية والإنجليزية",
        desc: "تواصل سهل ومباشر مع مهندسين يفهمون الأنظمة البرمجية وطبيعة الإجراءات الإدارية في الشركات السعودية.",
      },
      {
        title: "فريق تقني متكامل بأقل تكلفة",
        desc: "توفير تكاليف استقطاب مسؤول تقنية معلومات دائم، مع الاستفادة من خبرات متنوعة في البرمجيات والشبكات والدعم.",
      },
    ],
    whoItsForEn: [
      "Saudi businesses adopting new ERP, fleet tracking, or website solutions",
      "Companies seeking to eliminate user errors, invoice mistakes, and reporting delays",
      "Managers who need peace of mind knowing technical support is just a WhatsApp message away",
    ],
    whoItsForAr: [
      "الشركات التي تبنت أنظمة ERP أو تتبع أسطول حديثة وترغب في تدريب كادرها المالي والإداري",
      "المنشآت التي ترغب في تقليل أخطاء الإدخال اليدوي وضمان استقرار عملياتها اليومية",
      "أصحاب الأعمال الذين يفضلون راحة البال بوجود شريك تقني معتمد متاح دائماً بالواتساب",
    ],
    deliveryMethodEn:
      "Remote helpdesk via Google Meet, TeamViewer/AnyDesk, phone, and WhatsApp. Inquiries logged, prioritized, and resolved with clear status tracking.",
    deliveryMethodAr:
      "دعم رقمي فوري عبر الاتصال المرئي وبرامج المشاركة السريعة والواتساب لتقديم الحلول والتدريب فوراً.",
    complianceNotesEn:
      "Strict data confidentiality and access control applied to all remote screen-share and maintenance sessions.",
    complianceNotesAr:
      "سرية تامة لبيانات العميل ومعايير أمان مشددة أثناء جلسات الدعم والمساعدة الفنية.",
    faqs: [
      {
        qEn: "What are your exact support hours?",
        qAr: "ما هي أوقات ومواعيد تقديم الدعم الفني بالضبط؟",
        aEn: "Our team operates Sunday through Thursday, from 8:00 AM to 6:00 PM Arabia Standard Time (UTC+3).",
        aAr: "ساعات العمل الرسمية لفريق الدعم هي من الأحد إلى الخميس، من الساعة 8:00 صباحاً وحتى 6:00 مساءً بتوقيت مكة المكرمة.",
      },
      {
        qEn: "Can you train our non-technical staff?",
        qAr: "هل تقدمون التدريب للموظفين الذين لا يملكون خلفية تقنية؟",
        aEn: "Yes! Our training sessions are step-by-step, highly visual, and paced specifically for everyday administrative and warehouse staff.",
        aAr: "نعم بالتأكيد! جلسات التدريب لدينا مصممة بخطوات مبسطة وعملية ومناسبة لموظفي الاستقبال والمبيعات والمستودعات.",
      },
    ],
    relatedSlugs: ["zatca-e-invoicing-erp", "accounting-vat-support", "website-design-development"],
  },
];
