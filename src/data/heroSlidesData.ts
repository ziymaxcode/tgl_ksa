/**
 * ============================================================================
 * HERO PHOTO SLIDESHOW CONFIGURATION & IMAGE MANAGEMENT
 * ============================================================================
 *
 * HOW TO ADD / EDIT PHOTOS:
 * ----------------------------------------------------------------------------
 * 1. Place your photo files into the `/public/assets/...` folder.
 * 2. Add or update items in the `HERO_SLIDES` array below.
 * 3. You can add as many photos as you want! The slideshow will automatically
 *    cycle through them, display navigation arrows, touch-swipe on phones,
 *    and show clickable dot indicators.
 *
 * RESOLUTION & DUAL-IMAGE CONFIGURATION:
 * ----------------------------------------------------------------------------
 * You can provide TWO DIFFERENT RESOLUTIONS / CROPS per slide for optimal display:
 *
 * A) `pcImage` (PC / Laptop View):
 *    - Used on laptops, desktops, and large screens (screen width >= 768px).
 *    - RECOMMENDED RESOLUTION: 1200 x 750 px (or 16:10 / 16:9 landscape aspect ratio).
 *    - Example: "/assets/aistudio/image_c3277afc.png" or "/assets/slideshow/my-laptop-photo.jpg"
 *
 * B) `phoneImage` (Phone / Mobile View):
 *    - Used on smartphones and narrow screens (screen width < 768px).
 *    - RECOMMENDED RESOLUTION: 750 x 650 px (or 4:3 / 1:1 mobile crop so key elements stay centered).
 *    - Example: "/assets/slideshow/slide1-hero-phone.svg" or "/assets/slideshow/my-mobile-photo.jpg"
 *    - NOTE: If `phoneImage` is omitted, it will automatically fall back to `pcImage`.
 *
 * SIZING BEHAVIOR:
 * ----------------------------------------------------------------------------
 * The slideshow container maintains the EXACT same height and footprint across
 * mobile phones and laptops as the original hero card, ensuring zero layout shift.
 * ============================================================================
 */

export interface HeroSlideItem {
  id: string;
  /**
   * Laptop & Desktop photo path (Recommended: 1200x750 or 16:10 ratio)
   */
  pcImage: string;
  /**
   * Mobile Phone photo path (Recommended: 750x650 or 4:3 / 1:1 ratio)
   * Falls back to pcImage if not provided.
   */
  phoneImage?: string;
  /**
   * Top pill badge text
   */
  badgeEn: string;
  badgeAr: string;
  /**
   * Slide title headline
   */
  titleEn: string;
  titleAr: string;
  /**
   * Subtitle / description
   */
  taglineEn?: string;
  taglineAr?: string;
  /**
   * Image accessibility alt text
   */
  altEn: string;
  altAr: string;
}

export const HERO_SLIDES: HeroSlideItem[] = [
  {
    id: "slide-hero-skyline",
    // PC / Laptop Resolution: 1070x674 / 1200x750
    pcImage: "/assets/aistudio/image_c3277afc.png",
    // Phone / Mobile Resolution: 750x650 mobile-centered crop
    phoneImage: "/assets/slideshow/slide1-hero-phone.svg",
    badgeEn: "Riyadh · Jeddah · Dammam",
    badgeAr: "الرياض · جدة · الدمام",
    titleEn: "100% Remote Delivery & ZATCA Ready",
    titleAr: "تنفيذ رقمي عن بُعد وجاهزية تامة لهيئة الزكاة",
    taglineEn: "Zero setup delays across all 13 provinces with rapid Sun–Thu support.",
    taglineAr: "بدون تأخير وبدعم فوري في كافة مناطق المملكة طوال أيام العمل.",
    altEn: "TGL Technologies Saudi Arabia commercial coverage and Riyadh skyline",
    altAr: "تغطية تي جي إل للتقنية في المملكة العربية السعودية وأفق مدينة الرياض",
  },
  {
    id: "slide-zatca-fatoora",
    // PC / Laptop Resolution: 1200x750
    pcImage: "/assets/slideshow/slide2-zatca-pc.svg",
    // Phone / Mobile Resolution: 750x650
    phoneImage: "/assets/slideshow/slide2-zatca-phone.svg",
    badgeEn: "Phase 2 FATOORA Integration",
    badgeAr: "ربط المرحلة الثانية (فاتورة)",
    titleEn: "Certified ZATCA Phase 2 Clearance Engine",
    titleAr: "محرك اعتماد وربط الفوترة الإلكترونية مع الزكاة",
    taglineEn: "UBL 2.1 XML clearance, cryptographic signing & live QR generation.",
    taglineAr: "اعتماد فوري لملفات XML وتوقيع رقمي مشفر ورموز استجابة سريعة QR.",
    altEn: "ZATCA Phase 2 Fatoora e-invoicing clearance dashboard",
    altAr: "لوحة تحكم اعتماد الفوترة الإلكترونية للمرحلة الثانية مع هيئة الزكاة",
  },
  {
    id: "slide-fleet-wasl",
    // PC / Laptop Resolution: 1200x750
    pcImage: "/assets/slideshow/slide3-fleet-pc.svg",
    // Phone / Mobile Resolution: 750x650
    phoneImage: "/assets/slideshow/slide3-fleet-phone.svg",
    badgeEn: "WASL Platform Certified",
    badgeAr: "معتمد من منصة وصل",
    titleEn: "Commercial GPS Fleet & AI Dashcam Hub",
    titleAr: "تتبع المركبات التجاري وكاميرات الذكاء الاصطناعي",
    taglineEn: "Live telematics, driver fatigue warning, and weight sensor calibration.",
    taglineAr: "تتبع حي للأسطول، وتنبيهات إجهاد السائق، وربط مستشعرات الوزن والسرعة.",
    altEn: "WASL-certified GPS fleet telematics and dual AI dashcam dashboard",
    altAr: "نظام تتبع الأسطول المعتمد من وصل وكاميرات القيادة الذكية",
  },
  {
    id: "slide-cloud-erp",
    // PC / Laptop Resolution: 1200x750
    pcImage: "/assets/slideshow/slide4-erp-pc.svg",
    // Phone / Mobile Resolution: 750x650
    phoneImage: "/assets/slideshow/slide4-erp-phone.svg",
    badgeEn: "Saudi Cloud ERP & POS",
    badgeAr: "سحابة تخطيط الموارد ونقاط البيع",
    titleEn: "Unified Cloud ERP & 15% VAT Accounting",
    titleAr: "نظام ERP سحابي متكامل ومحاسبة ضريبة القيمة المضافة 15%",
    taglineEn: "Multi-branch retail inventory, automated payroll WPS, and barcode sync.",
    taglineAr: "إدارة المخزون متعدد الفروع، وحماية الأجور (مدد)، ونقاط البيع السريعة.",
    altEn: "TGL Saudi Cloud ERP and financial accounting dashboard",
    altAr: "نظام إدارة الموارد السحابي والمحاسبة المالية للشركات السعودية",
  },
];
