export interface PackageItem {
  id: string;
  nameEn: string;
  nameAr: string;
  badgeEn: string;
  badgeAr: string;
  taglineEn: string;
  taglineAr: string;
  targetAudienceEn: string;
  targetAudienceAr: string;
  includesEn: string[];
  includesAr: string[];
  idealForEn: string;
  idealForAr: string;
  turnaroundEn: string;
  turnaroundAr: string;
}

export const POPULAR_PACKAGES: PackageItem[] = [
  {
    id: "new-company-setup",
    nameEn: "New Company Setup",
    nameAr: "باقة تأسيس الشركات والمؤسسات",
    badgeEn: "Most Popular for New CRs",
    badgeAr: "الأكثر طلباً للسجلات التجارية الجديدة",
    taglineEn: "Everything required to launch your commercial brand and digital identity in Saudi Arabia.",
    taglineAr: "الحزمة المتكاملة لإطلاق الهوية التجارية والرقمية لمؤسستك في المملكة من اليوم الأول.",
    targetAudienceEn: "New commercial registrations, MISA foreign investors, branch expansions",
    targetAudienceAr: "السجلات التجارية الجديدة، استثمارات وزارة الاستثمار، وتأسيس الفروع الحديثة",
    includesEn: [
      "Custom Vector Corporate Logo Design + Full Vector Source Files",
      "Bilingual Company Profile (PDF + Print Ready CMYK) with professional copywriting",
      "Modern Bilingual (EN/AR) Mobile-Responsive Corporate Website",
      "Professional Business Email setup (Google Workspace / Microsoft 365 / Zoho)",
      "Google Business Profile setup for local map discovery in your Saudi city",
      "Official Stationery Suite: Letterheads, Business Cards, Quotation Templates",
    ],
    includesAr: [
      "تصميم شعار مبتكر مع تسليم كافة الملفات المصدرية المفتوحة والملكية الفكرية",
      "ملف تعريفي للمنشأة (Company Profile) ثنائي اللغة بصياغة تسويقية للمناقصات",
      "موقع إلكتروني رسمي ثنائي اللغة متوافق تماماً مع الجوال ومحركات البحث",
      "إعداد وتفعيل البريد الإلكتروني الرسمي باسم نطاق الشركة وحمايته",
      "توثيق وتهيئة ملف المنشأة في خرائط جوجل في مدينتكم للظهور المحلي",
      "تصميم المطبوعات الرسمية: الأوراق المروسة، بطاقات العمل، ونماذج السندات",
    ],
    idealForEn: "Entrepreneurs and companies newly registered with the Ministry of Commerce.",
    idealForAr: "رواد الأعمال والمستثمرون الذين أصدروا سجلاً تجارياً ويرغبون في انطلاقة متكاملة.",
    turnaroundEn: "10 to 14 business days",
    turnaroundAr: "من 10 إلى 14 يوم عمل",
  },
  {
    id: "business-run",
    nameEn: "Business Run",
    nameAr: "باقة تشغيل الأعمال والإدارة المالية",
    badgeEn: "Core Operational Suite",
    badgeAr: "الحزمة الأساسية للإدارة والامتثال",
    taglineEn: "Unify your commercial invoicing, VAT compliance, and day-to-day books under one partner.",
    taglineAr: "دمج الفوترة الإلكترونية والامتثال الضريبي ومسك الدفاتر المالية تحت مظلة شريك تقني واحد.",
    targetAudienceEn: "Trading companies, contractors, wholesale distributors, retail chains",
    targetAudienceAr: "شركات التجارة، مقاولو التشييد، مستودعات التوزيع، والمؤسسات الخدمية",
    includesEn: [
      "ZATCA Phase 2 Compliant Cloud ERP (TGL ERP or Zoho ERP configuration)",
      "Dynamic B2B Standard & B2C Simplified Tax Invoicing with verified QR codes",
      "Professional Business Email on your corporate domain with SPF/DKIM security",
      "Monthly Remote Accounting & Bookkeeping ledger maintenance",
      "15% VAT Return preparation and reconciliation support for ZATCA filing",
      "Dedicated remote onboarding and team training during Saudi working hours (Sun–Thu)",
    ],
    includesAr: [
      "نظام ERP سحابي متوافق مع متطلبات المرحلة الثانية من الفوترة الإلكترونية (فاتورة)",
      "إصدار الفواتير الضريبية والمبسطة برموز الاستجابة السريعة (QR) والختم المشفر",
      "بريد إلكتروني رسمي للشركة مع ضبط أمان وحماية الرسائل من الحظر",
      "خدمات مسك الدفاتر المحاسبية والمطابقة البنكية الشهرية لحركات الشركة",
      "تجهيز مسودات إقرار ضريبة القيمة المضافة (15%) قبل مواعيد التقديم الرسمية",
      "تدريب كامل لفريق العمل عبر الاتصال المرئي طوال أسبوع العمل السعودي",
    ],
    idealForEn: "Established Saudi SMEs seeking automated invoicing and accurate monthly financial records.",
    idealForAr: "الشركات القائمة الباحثة عن أتمتة الفواتير ومسك دفاتر منظمة دون تحمل رواتب محاسبين دائمين.",
    turnaroundEn: "7 to 10 business days",
    turnaroundAr: "من 7 إلى 10 أيام عمل",
  },
  {
    id: "smart-fleet",
    nameEn: "Smart Fleet",
    nameAr: "باقة الأسطول الذكي والسلامة",
    badgeEn: "Logistics & Transport",
    badgeAr: "الأفضل لشركات النقل والخدمات الميدانية",
    taglineEn: "Total visibility, driver accountability, and WASL-ready telematics for commercial vehicles.",
    taglineAr: "رؤية شاملة لحركة المركبات، وحماية السائقين، وتكامل جاهز للربط مع منصة وصل لأسطولك.",
    targetAudienceEn: "Logistics, delivery fleets, equipment rental, contracting machinery, field service",
    targetAudienceAr: "شركات الشحن، مركبات التوصيل والتوزيع، تأجير المعدات، وحافلات النقل",
    includesEn: [
      "4G High-Precision GPS Telematics hardware suitable for Saudi climate conditions",
      "Cloud Fleet Tracking Dashboard with real-time location and 90-day route history",
      "Intelligent AI Dual-Facing Dashcams with Driver Monitoring (fatigue/phone alerts)",
      "WASL-ready telematics platform integration architecture for regulatory licensing",
      "Instant Geofencing, Speed Violation, and Engine Idling SMS / App alerts",
      "Full remote dispatcher platform training and vehicle telemetry configuration",
    ],
    includesAr: [
      "أجهزة تتبع متطورة 4G مصممة لتحمل درجات الحرارة العالية لبيئة المملكة",
      "منصة تتبع سحابية تدعم متابعة المسارات وسجل الرحلات لـ 90 يوماً مضت",
      "كاميرات ذكاء اصطناعي ثنائية العدسة لمراقبة السائق (تنبيهات النوم والجوال)",
      "بنية تقنية مهيأة للربط مع منصة وصل التابعة للهيئة العامة للنقل",
      "سياج جغرافي ذكي، وتنبيهات السرعة الزائدة، ومراقبة التوقف غير المبرر",
      "تدريب كامل لمسؤولي الحركة والتشغيل بالشركة على لوحة التحكم",
    ],
    idealForEn: "Fleet managers and logistics companies operating 3 to 100+ commercial vehicles across KSA.",
    idealForAr: "مديرو الأساطيل ومسؤولو الحركة الذين يديرون من 3 إلى 100+ مركبة تجارية في المملكة.",
    turnaroundEn: "3 to 5 business days for cloud provisioning",
    turnaroundAr: "من 3 إلى 5 أيام عمل للتهيئة السحابية",
  },
];
