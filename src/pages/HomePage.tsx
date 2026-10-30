import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileCode,
  Building2,
  Globe,
  Mail,
  Palette,
  Share2,
  Calculator,
  Navigation,
  Video,
  Headphones,
  ChevronDown,
  Sparkles,
  MapPin,
  ExternalLink,
  Clock,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { SEOHead } from "../components/SEOHead";
import { BRAND, COMPLIANCE, SAUDI_CITIES, buildWhatsAppUrl, buildCallUrl } from "../data/constants";
import { SERVICES_DATA } from "../data/servicesData";
import { POPULAR_PACKAGES } from "../data/packagesData";
import { RiyadhSkylineVisual } from "../components/visuals/RiyadhSkylineVisual";
import { HeroSlideshow } from "../components/HeroSlideshow";
import { ZatcaInvoiceVisual } from "../components/visuals/ZatcaInvoiceVisual";
import { FleetTelematicsVisual } from "../components/visuals/FleetTelematicsVisual";
import { getOrganizationSchema, getWebSiteSchema, getProfessionalServiceSchema, getFAQPageSchema } from "../data/seoSchemas";

interface HomePageProps {
  onOpenDemoModal: (service?: string, pkg?: string) => void;
}

const SERVICE_ICONS: Record<string, React.ElementType> = {
  "01": FileCode,
  "02": Building2,
  "03": Globe,
  "04": Mail,
  "05": Palette,
  "06": Share2,
  "07": Calculator,
  "08": Navigation,
  "09": Video,
  "10": Headphones,
};

export const HomePage: React.FC<HomePageProps> = ({ onOpenDemoModal }) => {
  const { language, getLocalizedPath } = useLanguage();
  const isAr = language === "ar";

  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const homeFaqs = [
    {
      qEn: "How does TGL Technologies serve Saudi clients from India remotely?",
      qAr: "كيف تقدم TGL Technologies خدماتها للشركات في السعودية عن بعد من الهند؟",
      aEn: "Our cloud-native delivery model utilizes high-speed video conferences (Google Meet/Zoom), direct WhatsApp channels, and remote screen sharing. We work according to the official Saudi business week (Sunday to Thursday, 8 AM – 6 PM AST) to deliver turnkey software, training, and ongoing support without overhead.",
      aAr: "يعتمد نموذج عملنا السحابي على اللقاءات المرئية المباشرة وقنوات الواتساب والمشاركة التفاعلية للشاشات. نعمل وفق أسبوع وساعات العمل الرسمية بالمملكة (من الأحد إلى الخميس من 8 صباحاً إلى 6 مساءً بتوقيت مكة) لتهيئة الأنظمة وتدريب الكوادر وتقديم الدعم الفني دون تكاليف إضافية.",
    },
    {
      qEn: "Is your ERP solution compliant with ZATCA Phase 2 (FATOORA)?",
      qAr: "هل نظام ERP لديكم متوافق مع المرحلة الثانية من الفوترة الإلكترونية (فاتورة)؟",
      aEn: "Yes, our ERP solutions are ZATCA-compliant and ready for Phase 2 API integration, including XML/UBL 2.1 formatting, cryptographic CSID stamping, UUID generation, and real-time clearance/reporting.",
      aAr: "نعم، أنظمتنا متوافقة مع متطلبات هيئة الزكاة والضريبة والجمارك وجاهزة للربط مع المرحلة الثانية عبر واجهات برمجة التطبيقات (APIs)، وإصدار الفواتير بصيغة XML المشفرة وأختام QR المعتمدة.",
    },
    {
      qEn: "Are your GPS fleet devices and software WASL-ready?",
      qAr: "هل أجهزة وبرامج تتبع الأسطول مهيأة للتكامل مع منصة وصل؟",
      aEn: "Yes, our telematics platform features a WASL-ready integration architecture engineered to transmit location, speed, and telemetry data in accordance with Saudi Transport General Authority (TGA) specifications.",
      aAr: "نعم، تمتاز منصتنا التقنية بوجود تكامل برمجي جاهز للربط مع منصة وصل لنقل الإحداثيات والسرعة وبيانات السائقين طبقاً للوائح الهيئة العامة للنقل.",
    },
    {
      qEn: "How do we receive proposals and make payments in Saudi Riyals (SAR)?",
      qAr: "كيف نستلم عروض الأسعار ونقوم بالسداد بالريال السعودي (SAR)؟",
      aEn: "All commercial proposals, packages, and invoices are officially priced and contracted in Saudi Riyals (SAR) for transparent corporate procurement.",
      aAr: "كافة عروض الأسعار والعقود الرسمية تصدر بالريال السعودي (SAR) وتُسدد بكل سهولة وفق أنظمة التحويل المعتمدة للشركات.",
    },
    {
      qEn: "Can you assist with newly registered Commercial Registrations (CR)?",
      qAr: "هل تساعدون المؤسسات والشركات ذات السجلات التجارية الحديثة؟",
      aEn: "Yes, our 'New Company Setup' package equips new Saudi CRs with logo branding, bilingual company profiles for tenders, a modern corporate website, professional email, and Google Maps listing in under two weeks.",
      aAr: "نعم، باقة 'تأسيس الشركات' مخصصة للسجلات التجارية الجديدة لتجهيز الشعار، والملف التعريفي، والموقع الإلكتروني، والبريد المهني، وتوثيق خرائط جوجل خلال أقل من أسبوعين.",
    },
  ];

  const structuredData = [
    getOrganizationSchema(language),
    getWebSiteSchema(language),
    getProfessionalServiceSchema(),
    getFAQPageSchema(
      homeFaqs.map((f) => ({
        q: isAr ? f.qAr : f.qEn,
        a: isAr ? f.aAr : f.aEn,
      }))
    ),
  ];

  return (
    <>
      <SEOHead
        title={
          isAr
            ? "نظام ERP متوافق مع هيئة الزكاة والضريبة والجمارك وحلول رقمية وتتبع الأسطول في السعودية | TGL"
            : "ZATCA E-Invoicing ERP, Websites & Fleet Tracking in Saudi Arabia | TGL Technologies"
        }
        description={
          isAr
            ? "شريكك التقني الموحد في السعودية: نظام ERP متوافق مع فاتورة، مواقع إلكترونية، هوية شركات، تتبع المركبات GPS، وكاميرات الذكاء الاصطناعي. احجز عرضك المجاني."
            : "Complete software, ZATCA Phase 2 e-invoicing ERP, web development, branding, GPS fleet tracking and AI dashcams for Saudi SMEs. Book a free demo."
        }
        canonicalPath="/"
        structuredData={structuredData}
      />

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20 md:py-24 2xl:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-center">
            {/* Left Column (Hero Content) */}
            <div className="lg:col-span-7 2xl:col-span-7 space-y-5 sm:space-y-6 2xl:space-y-8 text-start">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-[11px] sm:text-xs xl:text-sm font-semibold shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 shrink-0" />
                <span className="truncate">
                  {isAr
                    ? "شريكك التقني للنمو في المملكة العربية السعودية"
                    : "Your Technology Partner for Growth in Saudi Arabia"}
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.2] sm:leading-[1.15] xl:leading-[1.1] text-balance">
                {isAr ? (
                  <>
                    حلول البرمجيات، والتقنية الرقمية،{" "}
                    <span className="text-blue-700">وإدارة الأساطيل</span> للشركات في السعودية
                  </>
                ) : (
                  <>
                    Complete Software, Digital &amp;{" "}
                    <span className="text-blue-700">Fleet Solutions</span> for Saudi Businesses
                  </>
                )}
              </h1>

              {/* Subtext */}
              <p className="text-sm sm:text-base md:text-lg xl:text-xl text-slate-600 leading-relaxed max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
                {isAr
                  ? "هل تؤسس شركة جديدة أو تطور أعمالك القائمة؟ نمنح المنشآت الصغيرة والمتوسطة في المملكة شريكاً تقنياً موحداً لأنظمة الأعمال السحابية، والفوترة الإلكترونية، والمواقع، والهوية المؤسسية، وتتبع المركبات: تنفذ عن بعد، تدعم سريعاً، وبأسعار تناسب الشركات."
                  : "Starting a new company or growing an established one? We give small and medium enterprises in Saudi Arabia one partner for business software, online presence, IT and fleet technology: delivered remotely, supported fast, priced for SMEs."}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 xl:gap-4 pt-1 sm:pt-2">
                <button
                  onClick={() => onOpenDemoModal()}
                  className="w-full sm:w-auto px-6 sm:px-7 xl:px-9 py-3.5 sm:py-4 xl:py-4.5 rounded-full text-xs sm:text-sm xl:text-base font-bold text-white bg-blue-700 hover:bg-blue-800 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 xl:w-5 xl:h-5 shrink-0" />
                  <span>
                    {isAr
                      ? "احجز استشارة وعرضاً توضيحياً مجاناً"
                      : "Book a FREE Online Demo & Consultation"}
                  </span>
                  <ArrowRight className="w-4 h-4 xl:w-5 xl:h-5 rtl:rotate-180 shrink-0" />
                </button>

                <a
                  href="#services"
                  className="w-full sm:w-auto px-5 sm:px-6 xl:px-8 py-3.5 sm:py-4 xl:py-4.5 rounded-full text-xs sm:text-sm xl:text-base font-semibold text-slate-700 hover:text-blue-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-all text-center"
                >
                  {isAr ? "استكشف الخدمات العشرة" : "View Services"}
                </a>
              </div>

              {/* Quick Assurance */}
              <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 sm:gap-x-6 xl:gap-x-8 text-[11px] sm:text-xs xl:text-sm text-slate-500 pt-1 sm:pt-2">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                  {isAr ? "عروض أسعار بالريال (SAR)" : "SME Proposals in SAR"}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                  {isAr ? "دعم طوال أسبوع العمل السعودي" : "Sun–Thu Saudi Business Support"}
                </span>
              </div>
            </div>

            {/* Right Column (Hero Visual Anchor: Dual-Resolution Photo Slideshow) */}
            <div className="lg:col-span-5 2xl:col-span-5 w-full overflow-hidden">
              <HeroSlideshow />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Strip */}
      <section className="bg-slate-900 text-slate-200 py-3.5 sm:py-4 xl:py-5 border-y border-slate-800">
        <div className="site-container flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-x-8 xl:gap-x-12 2xl:gap-x-16 text-xs sm:text-sm xl:text-base font-medium">
          <span className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            {isAr ? "جاهز لربط ZATCA" : "ZATCA Ready"}
          </span>
          <span className="text-slate-600 hidden sm:inline">·</span>
          <span className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            {isAr ? "تتبع جاهز لمنصة وصل" : "WASL-ready Fleet"}
          </span>
          <span className="text-slate-600 hidden sm:inline">·</span>
          <span className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            {isAr ? "متوافق مع المرحلة الثانية (فاتورة)" : "FATOORA-compliant"}
          </span>
          <span className="text-slate-600 hidden sm:inline">·</span>
          <span className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            {isAr ? "أسعار للمنشآت" : "SME Pricing"}
          </span>
          <span className="text-slate-600 hidden sm:inline">·</span>
          <span className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            {isAr ? "دعم فني (الأحد–الخميس)" : "Remote Support Sun–Thu"}
          </span>
        </div>
      </section>

      {/* 3. The 10 Core Services Grid */}
      <section id="services" className="py-20 md:py-28 2xl:py-32 bg-white">
        <div className="site-container">
          {/* Section Intro Pattern */}
          <div className="text-center max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-blue-700 uppercase">
              {isAr ? "منظومة الحلول المتكاملة" : "Complete Technology Suite"}
            </span>
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight">
              {isAr
                ? "10 خدمات متكاملة لتشغيل ونمو شركتك في السعودية"
                : "10 Unified Services Built for the Saudi Commercial Market"}
            </h2>
            <p className="text-base xl:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              {isAr
                ? "كل ما تحتاجه مؤسستك من برمجيات الفوترة، وحلول الويب، والبريد المهني، وتتبع المركبات تحت عقد وشريك تقني واحد."
                : "From regulatory e-invoicing to digital web presences and intelligent fleet dashcams, scale your operations with one trusted technology team."}
            </p>
          </div>

          {/* Feature Card Grid (5 Columns 2xl, 4 Columns xl, 3 Columns lg, 1-2 Columns Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 sm:gap-8 xl:gap-7 2xl:gap-6">
            {SERVICES_DATA.map((srv) => {
              const IconComp = SERVICE_ICONS[srv.number] || FileCode;
              return (
                <div
                  key={srv.id}
                  className="group relative rounded-3xl bg-slate-50/70 hover:bg-white p-7 border border-slate-200/80 hover:border-blue-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Top Row: Tinted Icon Square + Number Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-2xs">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-sm font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                        {srv.number}
                      </span>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {isAr ? srv.titleAr : srv.titleEn}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {isAr ? srv.shortDescAr : srv.shortDescEn}
                    </p>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between">
                    <Link
                      to={getLocalizedPath(`/${srv.slug}`)}
                      className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1.5 transition-colors"
                    >
                      <span>{isAr ? "تفاصيل الخدمة" : "Learn more"}</span>
                      <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </Link>

                    <button
                      onClick={() => onOpenDemoModal(srv.slug)}
                      className="text-[11px] font-semibold text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                    >
                      {isAr ? "طلب عرض تجريبي" : "Book Demo"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Split Section: Why Choose Us */}
      <section className="py-14 sm:py-20 md:py-28 2xl:py-32 bg-slate-50 border-y border-slate-200/80">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-center">
            {/* Left Content (Checklist) */}
            <div className="lg:col-span-6 xl:col-span-6 2xl:col-span-6 space-y-5 sm:space-y-6 2xl:space-y-8 text-start">
              <span className="text-xs font-bold tracking-widest text-blue-700 uppercase">
                {isAr ? "لماذا يختارنا أصحاب الأعمال؟" : "Why Choose TGL"}
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight">
                {isAr
                  ? "شريك تقني موحد يفهم خصوصية السوق السعودي"
                  : "One Partner for Complete Commercial Technology & Compliance"}
              </h2>

              <p className="text-sm sm:text-base xl:text-lg text-slate-600 leading-relaxed">
                {isAr
                  ? "بدلاً من تشتيت جهودك مع عدة شركات ومستقلين للموقع، والبريد، والبرنامج المحاسبي، وكاميرات السيارات؛ توفر لك TGL حلاً شاملاً بعقد واحد، ودعم سريع، وميزانيات تناسب المنشآت الصاعدة."
                  : "Eliminate vendor fragmentation. Contracting separate agencies for websites, email hosts, accounting ERP, and fleet cameras leads to blame games and inflated costs. TGL Technologies unifies your entire tech stack under one accountable SLA."}
              </p>

              {/* 4 Key Pillars */}
              <div className="space-y-3.5 sm:space-y-4 xl:space-y-5 pt-1 sm:pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 xl:w-7 xl:h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 xl:w-4.5 xl:h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm xl:text-base font-bold text-slate-900">
                      {isAr ? "شريك تقني واحد لكافة احتياجاتك" : "One Unified Technology Partner"}
                    </h4>
                    <p className="text-[11px] sm:text-xs xl:text-sm text-slate-600 mt-0.5">
                      {isAr
                        ? "البرمجيات، وتصميم المواقع، والبريد، والتسويق، والأسطول تحت عقد رسمي واحد."
                        : "Software, website, business email, marketing and fleet tracking under a single managed contract."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 xl:w-7 xl:h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 xl:w-4.5 xl:h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm xl:text-base font-bold text-slate-900">
                      {isAr ? "جاهزية تامة لأنظمة ZATCA و WASL" : "ZATCA & WASL Regulatory Architecture"}
                    </h4>
                    <p className="text-[11px] sm:text-xs xl:text-sm text-slate-600 mt-0.5">
                      {isAr
                        ? "نظام فوترة مهيأ للمرحلة الثانية وبوابة تتبع أسطول جاهزة لمتطلبات منصة وصل."
                        : "E-invoicing compliant with Saudi VAT rules and telematics built for Transport General Authority gateways."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 xl:w-7 xl:h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 xl:w-4.5 xl:h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm xl:text-base font-bold text-slate-900">
                      {isAr ? "أسعار مصممة للشركات الصغيرة والمتوسطة" : "SME-Friendly Predictable Pricing"}
                    </h4>
                    <p className="text-[11px] sm:text-xs xl:text-sm text-slate-600 mt-0.5">
                      {isAr
                        ? "باقات مرنة وتكاليف تشغيلية واضحة بالريال السعودي بدون رسوم خفية."
                        : "Affordable implementation packages with monthly or annual plans structured for growing firms."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 xl:w-7 xl:h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 xl:w-4.5 xl:h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm xl:text-base font-bold text-slate-900">
                      {isAr ? "دعم فني سريع طوال أسبوع العمل السعودي" : "Fast Remote Support Across Saudi Business Hours"}
                    </h4>
                    <p className="text-[11px] sm:text-xs xl:text-sm text-slate-600 mt-0.5">
                      {isAr
                        ? "مكتب مساعدة يعمل من الأحد إلى الخميس مع تواصل فوري عبر الواتساب والمكالمات المرئية."
                        : "Online onboarding, user training, and direct VIP WhatsApp helpdesk operating Sunday through Thursday."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 sm:pt-4">
                <button
                  onClick={() => onOpenDemoModal()}
                  className="w-full sm:w-auto px-6 xl:px-8 py-3.5 xl:py-4 rounded-full text-xs sm:text-sm xl:text-base font-bold text-white bg-blue-700 hover:bg-blue-800 transition-colors shadow-sm"
                >
                  {isAr ? "احجز استشارتك المجانية الآن" : "Schedule a Discovery Session"}
                </button>
              </div>
            </div>

            {/* Right Interactive Mockup (ZATCA Invoice Live UI) */}
            <div className="lg:col-span-6 xl:col-span-6 2xl:col-span-6 w-full overflow-hidden">
              <ZatcaInvoiceVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Popular Packages Strip (Gold / Amber Accent Banner Pattern) */}
      <section className="py-20 md:py-28 2xl:py-32 bg-white">
        <div className="site-container">
          {/* Header */}
          <div className="text-center max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-amber-700 uppercase bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              {isAr ? "الباقات الأكثر طلباً" : "Popular SME Packages"}
            </span>
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight">
              {isAr
                ? "حزم متكاملة مصممة لانطلاقة ونمو سريع في السعودية"
                : "Curated Turnkey Bundles for Saudi Enterprises"}
            </h2>
            <p className="text-base xl:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              {isAr
                ? "اختر الباقة الأنسب لمرحلة نشاطك الحالية، واطلب عرض سعر مخصص بالريال السعودي."
                : "Select the package matching your immediate growth milestone and request a tailored quote in SAR."}
            </p>
          </div>

          {/* 3 Package Cards Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10 2xl:gap-12 items-stretch">
            {POPULAR_PACKAGES.map((pkg, idx) => {
              const isHighlight = idx === 0;
              return (
                <div
                  key={pkg.id}
                  className={`relative rounded-3xl p-5 sm:p-7 lg:p-8 2xl:p-10 flex flex-col justify-between border transition-all duration-300 ${
                    isHighlight
                      ? "bg-gradient-to-b from-slate-900 to-blue-950 text-white border-blue-900 shadow-xl"
                      : "bg-slate-50/70 hover:bg-white text-slate-900 border-slate-200/90 hover:border-blue-200 shadow-xs hover:shadow-lg"
                  }`}
                >
                  {/* Top Badge & Turnaround Duration */}
                  <div className="space-y-4 sm:space-y-5">
                    <div className="flex flex-col xs:flex-row sm:flex-row sm:items-center justify-between gap-2.5 pb-1">
                      <span
                        className={`inline-flex items-center self-start text-xs font-bold px-3 py-1 rounded-full ${
                          isHighlight
                            ? "bg-amber-400 text-slate-950 font-bold shadow-xs"
                            : "bg-blue-100 text-blue-800 font-semibold"
                        }`}
                      >
                        {isAr ? pkg.badgeAr : pkg.badgeEn}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 self-start sm:self-auto text-xs font-mono px-2.5 py-1 rounded-lg border ${
                          isHighlight
                            ? "text-amber-200/90 bg-white/10 border-white/15"
                            : "text-slate-600 bg-white border-slate-200/90 shadow-2xs"
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5 shrink-0 opacity-80" />
                        <span>{isAr ? pkg.turnaroundAr : pkg.turnaroundEn}</span>
                      </span>
                    </div>

                    {/* Heading and Tagline with proper breathing room */}
                    <div className="space-y-2 pt-1">
                      <h3
                        className={`text-xl sm:text-2xl font-extrabold tracking-tight leading-snug ${
                          isHighlight ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {isAr ? pkg.nameAr : pkg.nameEn}
                      </h3>

                      <p
                        className={`text-xs sm:text-sm leading-relaxed ${
                          isHighlight ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {isAr ? pkg.taglineAr : pkg.taglineEn}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="pt-4 border-t border-slate-200/30 space-y-2.5">
                      <div
                        className={`text-xs font-bold uppercase tracking-wider ${
                          isHighlight ? "text-amber-300" : "text-slate-500"
                        }`}
                      >
                        {isAr ? "محتويات الباقة:" : "What's Included:"}
                      </div>
                      <ul className="space-y-2 text-xs">
                        {(isAr ? pkg.includesAr : pkg.includesEn).map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2
                              className={`w-4 h-4 shrink-0 mt-0.5 ${
                                isHighlight ? "text-amber-400" : "text-emerald-600"
                              }`}
                            />
                            <span
                              className={isHighlight ? "text-slate-200" : "text-slate-700"}
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-8 mt-6 border-t border-slate-200/30 space-y-3">
                    <div className="text-center text-xs text-slate-400">
                      {isAr
                        ? "عرض سعر مخصص بالريال السعودي (SAR)"
                        : "Custom Quotation in Saudi Riyals (SAR)"}
                    </div>
                    <button
                      onClick={() => onOpenDemoModal(undefined, pkg.nameEn)}
                      className={`w-full py-3.5 rounded-full text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer ${
                        isHighlight
                          ? "bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold shadow-amber-500/20"
                          : "bg-blue-700 hover:bg-blue-800 text-white"
                      }`}
                    >
                      <span>{isAr ? "طلب عرض سعر لهذه الباقة" : "Request a Quote"}</span>
                      <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. How It Works (Numbered Rows 01 - 05) */}
      <section className="py-20 md:py-28 2xl:py-32 bg-slate-900 text-white">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 2xl:gap-20 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-5 2xl:col-span-5 space-y-4 xl:space-y-6 text-start">
              <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">
                {isAr ? "خطوات العمل البسيطة" : "How It Works"}
              </span>
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-white tracking-tight">
                {isAr
                  ? "من الاستشارة إلى التشغيل في 5 خطوات واضحة"
                  : "From Free Consultation to Live Operations in 5 Steps"}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {isAr
                  ? "نعتمد مسار عمل رقمياً شفافاً ومختبراً يضمن سرعة التنفيذ، والتدريب الكامل للموظفين، والالتزام بالقوانين السعودية دون أي تعطيل لأعمالكم."
                  : "Our battle-tested remote delivery lifecycle guarantees transparent execution, thorough staff training, and zero operational downtime."}
              </p>
              <div className="pt-4">
                <button
                  onClick={() => onOpenDemoModal()}
                  className="px-6 xl:px-8 py-3.5 xl:py-4 rounded-full text-xs sm:text-sm xl:text-base font-bold text-slate-950 bg-white hover:bg-slate-100 transition-colors shadow-md"
                >
                  {isAr ? "ابدأ بالخطوة الأولى: احجز العرض" : "Start Step 01: Book Free Demo"}
                </button>
              </div>
            </div>

            {/* Right Numbered Steps List */}
            <div className="lg:col-span-7 2xl:col-span-7 space-y-4 xl:space-y-5">
              {[
                {
                  step: "01",
                  titleEn: "Free Online Demo & Discovery",
                  titleAr: "عرض توضيحي واستكشاف المتطلبات مجاناً",
                  descEn: "We demonstrate the software live on Google Meet and audit your specific invoicing or fleet tracking needs.",
                  descAr: "نعقد جلسة اتصال مرئي مباشرة لاستعراض النظام وتحديد متطلبات الفوترة أو إدارة الأسطول لديكم بدقة.",
                },
                {
                  step: "02",
                  titleEn: "Requirement Review & Architecture",
                  titleAr: "مراجعة المتطلبات وهندسة الحل",
                  descEn: "Our enterprise consultants structure your Chart of Accounts, branches, and user permission hierarchies.",
                  descAr: "يقوم مهندسونا بضبط دليل الحسابات، وهيكل الفروع، والصلاحيات لتلائم نشاطكم تماماً.",
                },
                {
                  step: "03",
                  titleEn: "Fixed Proposal in Saudi Riyals (SAR)",
                  titleAr: "عرض سعر رسمي بالريال السعودي (SAR)",
                  descEn: "Transparent proposal with deliverables, timelines, and no unexpected hidden charges.",
                  descAr: "عرض تجاري واضح ومفصل يحدد مراحل الإنجاز والضمانات دون أي رسوم إضافية مخفية.",
                },
                {
                  step: "04",
                  titleEn: "Remote Cloud Setup & Live Staff Training",
                  titleAr: "التهيئة السحابية وتدريب الموظفين",
                  descEn: "We import master data, configure ZATCA/WASL connectors, and train your staff in Saudi hours.",
                  descAr: "رفع البيانات الافتتاحية، وربط المنافذ التقنية، وتدريب فريقكم خطوة بخطوة باللغتين.",
                },
                {
                  step: "05",
                  titleEn: "Continuous Sun–Thu Helpdesk & SLA",
                  titleAr: "دعم فني مستمر طوال أسبوع العمل",
                  descEn: "Dedicated VIP WhatsApp and screen-share support across the Saudi working week.",
                  descAr: "مكتب مساعدة متاح عبر الواتساب والمشاركة المباشرة لحل أي استفسار فوراً.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="p-5 xl:p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-4 hover:border-blue-400 transition-colors text-start"
                >
                  <span className="font-mono text-xl xl:text-2xl font-bold text-blue-400 shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="text-base xl:text-lg font-bold text-white">
                      {isAr ? item.titleAr : item.titleEn}
                    </h4>
                    <p className="text-xs xl:text-sm text-slate-300 mt-1 leading-relaxed">
                      {isAr ? item.descAr : item.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Fleet Telematics Highlight Row */}
      <section className="py-20 md:py-28 bg-slate-900 border-t border-slate-800">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 2xl:gap-20 items-center">
            <div className="lg:col-span-6 2xl:col-span-6">
              <FleetTelematicsVisual />
            </div>
            <div className="lg:col-span-6 2xl:col-span-6 space-y-5 xl:space-y-6 text-start text-white">
              <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
                {isAr ? "تتبع الأساطيل وكاميرات الذكاء الاصطناعي" : "Fleet Telematics & AI Vision"}
              </span>
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight">
                {isAr
                  ? "حماية مركباتك وربطها مع منصة وصل بأحدث التقنيات"
                  : "Protect Your Commercial Fleet & Streamline WASL Compliance"}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {isAr
                  ? "سواء كنت تدير 5 شاحنات توزيع في الرياض أو أسطولاً من 100 معدة ثقيلة في الشرقية، تقدم TGL أجهزة تتبع GPS متينة تتحمل حرارة الصيف وكاميرات ذكاء اصطناعي تراقب سلوك السائقين لمنع الحوادث وحسم نزاعات التأمين."
                  : "Whether managing 5 courier vans in Riyadh or 100 heavy transport trucks in the Eastern Province, TGL provides ruggedized GPS trackers and intelligent edge AI dashcams built to withstand extreme desert heat."}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to={getLocalizedPath("/gps-fleet-tracking")}
                  className="px-5 xl:px-7 py-3 xl:py-3.5 rounded-full text-xs xl:text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
                >
                  {isAr ? "تفاصيل تتبع GPS" : "Explore GPS Tracking"}
                </Link>
                <Link
                  to={getLocalizedPath("/ai-dashcam-monitoring")}
                  className="px-5 xl:px-7 py-3 xl:py-3.5 rounded-full text-xs xl:text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                >
                  {isAr ? "كاميرات AI Dashcam" : "AI Dashcam Systems"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Industries We Serve */}
      <section className="py-20 md:py-24 2xl:py-28 bg-slate-50 border-y border-slate-200/80">
        <div className="site-container">
          <div className="text-center max-w-3xl xl:max-w-4xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold tracking-widest text-blue-700 uppercase">
              {isAr ? "القطاعات المتخصصة" : "Industries We Serve"}
            </span>
            <h2 className="text-3xl xl:text-4xl font-extrabold text-slate-900 tracking-tight">
              {isAr ? "برمجيات مهيأة لقطاعات الأعمال الرئيسية بالمملكة" : "Engineered for Core Saudi Economic Sectors"}
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-6 2xl:gap-8">
            {[
              { titleEn: "Manpower Supply", titleAr: "توريد وإعارة العمالة", slug: "industry-software/manpower-supply" },
              { titleEn: "Equipment Rental", titleAr: "تأجير المعدات والآليات", slug: "industry-software/equipment-rental" },
              { titleEn: "Material Trading", titleAr: "تجارة وتوريد المواد", slug: "industry-software/material-trading" },
              { titleEn: "Logistics & Transport", titleAr: "النقل والشحن والخدمات اللوجستية", slug: "gps-fleet-tracking" },
              { titleEn: "General Contracting", titleAr: "المقاولات العامة والإنشاءات", slug: "zatca-e-invoicing-erp" },
              { titleEn: "Wholesale & Retail", titleAr: "تجارة الجملة والتجزئة", slug: "website-design-development" },
              { titleEn: "Startups & New CRs", titleAr: "الشركات الناشئة والسجلات الجديدة", slug: "packages" },
              { titleEn: "Corporate Services", titleAr: "الخدمات المهنية والاستشارية", slug: "accounting-vat-support" },
            ].map((ind, i) => (
              <Link
                key={i}
                to={getLocalizedPath(`/${ind.slug}`)}
                className="p-5 xl:p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all text-start group"
              >
                <div className="text-sm xl:text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {isAr ? ind.titleAr : ind.titleEn}
                </div>
                <div className="text-xs xl:text-sm text-blue-600 flex items-center gap-1 mt-2">
                  <span>{isAr ? "استعراض النظام" : "View solutions"}</span>
                  <ArrowRight className="w-3 h-3 rtl:rotate-180" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Saudi Locations Served */}
      <section className="py-20 md:py-24 bg-white">
        <div className="site-container">
          <div className="text-center max-w-2xl xl:max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold tracking-widest text-blue-700 uppercase">
              {isAr ? "التغطية الجغرافية" : "Saudi Service Footprint"}
            </span>
            <h2 className="text-3xl xl:text-4xl font-extrabold text-slate-900 tracking-tight">
              {isAr ? "نخدم منشآت الأعمال في كافة مدن ومناطق المملكة" : "Serving Enterprises Across the Kingdom"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 xl:gap-6 2xl:gap-8">
            {SAUDI_CITIES.map((c) => (
              <Link
                key={c.id}
                to={getLocalizedPath(`/locations/${c.slug}`)}
                className="p-5 xl:p-6 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 hover:border-blue-300 transition-all text-start group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 xl:w-5 xl:h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                  <span className="text-base xl:text-lg font-bold text-slate-900 group-hover:text-blue-700">
                    {isAr ? c.nameAr : c.nameEn}
                  </span>
                </div>
                <span className="text-xs xl:text-sm text-slate-500 block">
                  {isAr ? "حلول الفوترة والأسطول المحلية" : "Dedicated Regional IT & Telematics"}
                </span>
                <span className="text-xs xl:text-sm font-semibold text-blue-700 mt-2 inline-flex items-center gap-1">
                  {isAr ? "استكشف خدمات المدينة ←" : "Explore City Hub →"}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ Accordion */}
      <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="text-center mb-14 space-y-2">
            <span className="text-xs font-bold tracking-widest text-blue-700 uppercase">
              {isAr ? "الأسئلة المتكررة" : "Frequently Asked Questions"}
            </span>
            <h2 className="text-3xl xl:text-4xl font-extrabold text-slate-900 tracking-tight">
              {isAr ? "إجابات واضحة لاستفساراتكم التقنية والنظامية" : "Clear Answers to Common Commercial Questions"}
            </h2>
          </div>

          <div className="space-y-3">
            {homeFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-start flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-700 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base">{isAr ? faq.qAr : faq.qEn}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                        isOpen ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {isAr ? faq.aAr : faq.aEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center pt-8">
            <Link
              to={getLocalizedPath("/faq")}
              className="text-xs font-bold text-blue-700 hover:underline inline-flex items-center gap-1"
            >
              <span>{isAr ? "عرض جميع الأسئلة الشائعة ←" : "View Complete FAQ Knowledge Base →"}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 11. Final CTA Banner (Dark Navy Section with Pill Buttons) */}
      <section className="py-20 md:py-28 2xl:py-36 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
        <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 xl:space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs xl:text-sm font-semibold">
            <Sparkles className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
            <span>{isAr ? "استشارة مجانية بدون أي التزام" : "Free Consultation · Zero Obligation"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-balance">
            {isAr
              ? "احجز عرضاً توضيحياً مجانياً واستشارة تقنية لمنشأتك اليوم"
              : "Book a FREE Online Demo & Consultation Today"}
          </h2>

          <p className="text-slate-300 max-w-2xl xl:max-w-4xl mx-auto text-sm sm:text-base xl:text-lg leading-relaxed">
            {isAr
              ? "تحدث مباشرة مع مهندسينا لاستعراض نظام الفوترة أو إدارة الأسطول، وتعرف على كيفية خفض تكاليفك التشغيلية وتطوير أعمالك."
              : "Walk through our live ERP or telematics software on Google Meet. Learn how we simplify ZATCA compliance and cut vehicle overhead for Saudi businesses."}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 xl:gap-6 pt-4">
            <button
              onClick={() => onOpenDemoModal()}
              className="px-8 xl:px-10 py-4 xl:py-5 rounded-full text-sm xl:text-base font-bold text-slate-950 bg-white hover:bg-slate-100 shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              {isAr ? "احجز العرض التجريبي أونلاين" : "Book FREE Online Demo"}
            </button>

            <a
              href={buildWhatsAppUrl("Final CTA banner", language)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{isAr ? "محادثة واتساب فورية" : "Instant WhatsApp"}</span>
            </a>

            <a
              href={buildCallUrl()}
              className="px-6 py-4 rounded-full text-sm font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-colors"
            >
              <span>{BRAND.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
