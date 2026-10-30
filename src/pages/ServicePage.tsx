import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  HelpCircle,
  Building,
  Laptop,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { SEOHead } from "../components/SEOHead";
import { LeadForm } from "../components/LeadForm";
import { SERVICES_DATA } from "../data/servicesData";
import { ZatcaInvoiceVisual } from "../components/visuals/ZatcaInvoiceVisual";
import { FleetTelematicsVisual } from "../components/visuals/FleetTelematicsVisual";
import { RiyadhSkylineVisual } from "../components/visuals/RiyadhSkylineVisual";
import { BRAND, COMPLIANCE, buildWhatsAppUrl } from "../data/constants";
import { getServiceSchema, getFAQPageSchema, getBreadcrumbSchema } from "../data/seoSchemas";

interface ServicePageProps {
  slugOverride?: string;
  subIndustry?: "manpower-supply" | "equipment-rental" | "material-trading";
  onOpenDemoModal: (service?: string) => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({
  slugOverride,
  subIndustry,
  onOpenDemoModal,
}) => {
  const params = useParams<{ slug?: string }>();
  const { language, getLocalizedPath } = useLanguage();
  const isAr = language === "ar";

  const targetSlug = slugOverride || params.slug || "zatca-e-invoicing-erp";
  const service = SERVICES_DATA.find((s) => s.slug === targetSlug) || SERVICES_DATA[0];

  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Schema.org Structured Data
  const serviceUrl = `${BRAND.canonicalUrl}${isAr ? "/ar" : ""}/${service.slug}`;
  const serviceSchema = getServiceSchema(
    isAr ? service.titleAr : service.titleEn,
    isAr ? service.shortDescAr : service.shortDescEn,
    serviceUrl,
    "B2B Enterprise Software & Telematics"
  );
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: isAr ? "الرئيسية" : "Home", url: isAr ? "/ar/" : "/" },
    { name: isAr ? "الخدمات" : "Services", url: isAr ? "/ar/#services" : "/#services" },
    { name: isAr ? service.titleAr : service.titleEn, url: serviceUrl },
  ]);
  const faqSchema = getFAQPageSchema(
    service.faqs.map((f) => ({
      q: isAr ? f.qAr : f.qEn,
      a: isAr ? f.aAr : f.aEn,
    }))
  );

  return (
    <>
      <SEOHead
        title={
          isAr
            ? `${service.titleAr} في السعودية | TGL Technologies`
            : `${service.titleEn} in Saudi Arabia | TGL Technologies`
        }
        description={
          isAr
            ? `${service.shortDescAr} احجز عرضاً توضيحياً مجانياً.`
            : `${service.shortDescEn} Book a free demo and consultation.`
        }
        canonicalPath={`/${service.slug}`}
        structuredData={[serviceSchema, breadcrumbSchema, faqSchema]}
      />

      {/* 1. Service Hero */}
      <section className="py-16 md:py-24 2xl:py-32 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200/80">
        <div className="site-container">
          {/* Breadcrumb Bar */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li>
                <Link to={getLocalizedPath("/")} className="hover:text-blue-700">
                  {isAr ? "الرئيسية" : "Home"}
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link to={getLocalizedPath("/#services")} className="hover:text-blue-700">
                  {isAr ? "الخدمات" : "Services"}
                </Link>
              </li>
              <li>/</li>
              <li className="font-semibold text-slate-800 truncate">
                {isAr ? service.titleAr : service.titleEn}
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 2xl:gap-20 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 2xl:col-span-7 space-y-5 xl:space-y-7 text-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs xl:text-sm font-semibold">
                <span className="font-mono text-blue-600 font-bold">{service.number}</span>
                <span>{isAr ? "حلول الأعمال المتوافقة بالسعودية" : "Saudi Commercial Solutions"}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
                {isAr ? service.heroHeadlineAr : service.heroHeadlineEn}
              </h1>

              <p className="text-base xl:text-lg text-slate-600 leading-relaxed max-w-2xl xl:max-w-3xl">
                {isAr ? service.overviewAr : service.overviewEn}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 xl:gap-4 pt-2">
                <button
                  onClick={() => onOpenDemoModal(service.slug)}
                  className="w-full sm:w-auto px-6 sm:px-7 xl:px-9 py-3.5 xl:py-4 rounded-full text-xs sm:text-sm xl:text-base font-bold text-white bg-blue-700 hover:bg-blue-800 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 xl:w-5 xl:h-5 shrink-0" />
                  <span className="text-center">
                    {isAr
                      ? `احجز عرضاً توضيحياً لـ ${service.titleAr}`
                      : `Book Free Demo for ${service.titleEn}`}
                  </span>
                </button>

                <a
                  href={buildWhatsAppUrl(isAr ? service.titleAr : service.titleEn, language)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 xl:px-8 py-3.5 xl:py-4 rounded-full text-xs sm:text-sm xl:text-base font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <MessageSquare className="w-4 h-4 xl:w-5 xl:h-5 text-emerald-600 shrink-0" />
                  <span>{isAr ? "محادثة واتساب سريعة" : "WhatsApp Inquiry"}</span>
                </a>
              </div>
            </div>

            {/* Right Column Visual Slot */}
            <div className="lg:col-span-5 2xl:col-span-5 w-full overflow-hidden">
              {service.id === "zatca-erp" ? (
                <ZatcaInvoiceVisual />
              ) : service.id === "gps-fleet" || service.id === "ai-dashcam" ? (
                <FleetTelematicsVisual />
              ) : (
                <RiyadhSkylineVisual />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. What You Get (Deliverables Checklist) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="site-container">
          <div className="max-w-3xl mb-12 text-start space-y-2">
            <span className="text-xs font-bold tracking-widest text-blue-700 uppercase">
              {isAr ? "المخرجات المعتمدة" : "Deliverables & Scope"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {isAr
                ? "ما الذي تحصل عليه عند الاشتراك في هذه الخدمة؟"
                : "What You Get with this Service"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(isAr ? service.whatYouGetAr : service.whatYouGetEn).map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 text-start hover:border-blue-200 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-slate-800 leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Deep Features Grid */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200/80">
        <div className="site-container">
          <div className="max-w-3xl mb-12 text-start space-y-2">
            <span className="text-xs font-bold tracking-widest text-blue-700 uppercase">
              {isAr ? "المزايا والمواصفات" : "Architectural Capabilities"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {isAr ? "خصائص تقنية مصممة لتحديات التشغيل اليومي" : "Key Operational Features"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(isAr ? service.featuresAr : service.featuresEn).map((feat, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xs text-start space-y-2.5"
              >
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-mono font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{feat.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Who It's For & Remote Delivery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Who It's For */}
            <div className="space-y-6 text-start p-8 rounded-3xl bg-slate-50 border border-slate-200/90">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
                <Building className="w-4 h-4" />
                <span>{isAr ? "الشركات المستهدفة" : "Who It's For"}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                {isAr ? "هل تناسب هذه الخدمة نشاط شركتك؟" : "Ideal for These Saudi Businesses"}
              </h3>
              <ul className="space-y-3">
                {(isAr ? service.whoItsForAr : service.whoItsForEn).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How Remote Delivery Works */}
            <div className="space-y-6 text-start p-8 rounded-3xl bg-slate-900 text-white">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
                <Laptop className="w-4 h-4" />
                <span>{isAr ? "آلية التنفيذ والتدريب" : "Remote Delivery Model"}</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                {isAr ? "تنفيذ رقمي سريع بدون أي تعقيد" : "Turnkey Remote Implementation"}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {isAr ? service.deliveryMethodAr : service.deliveryMethodEn}
              </p>
              <div className="pt-2 border-t border-slate-800 text-xs text-slate-400">
                <span className="font-semibold text-slate-200">
                  {isAr ? "مواعيد الدعم: " : "Support Schedule: "}
                </span>
                {isAr ? BRAND.supportHoursAr : BRAND.supportHours}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Saudi Compliance Notes Box */}
      <section className="py-8 bg-blue-50/60 border-y border-blue-100">
        <div className="site-container">
          <div className="flex items-start gap-3 text-start">
            <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
            <div className="text-xs text-blue-900 leading-relaxed">
              <span className="font-bold">
                {isAr ? "ملاحظات الامتثال في السوق السعودي: " : "Saudi Compliance & Legal Guidelines: "}
              </span>
              <span>{isAr ? service.complianceNotesAr : service.complianceNotesEn}</span>
              <span className="block text-blue-700 mt-1 font-mono text-[11px]">
                {isAr ? COMPLIANCE.zatcaFootnoteAr : COMPLIANCE.zatcaFootnote}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Service FAQ Accordion */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-bold tracking-widest text-blue-700 uppercase">
              {isAr ? "استفسارات الخدمة" : "Service Questions"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {isAr ? "الأسئلة الشائعة حول هذه الخدمة" : "Frequently Asked Questions"}
            </h2>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden text-start shadow-2xs"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-700 transition-colors cursor-pointer"
                  >
                    <span className="text-sm">{isAr ? faq.qAr : faq.qEn}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
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
        </div>
      </section>

      {/* 7. Inline Lead Capture Section */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-200">
        <div className="max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-blue-700 uppercase">
              {isAr ? "احجز استشارتك" : "Start Today"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {isAr
                ? `طلب عرض سعر أو استشارة لـ ${service.titleAr}`
                : `Request a Demo & Quote for ${service.titleEn}`}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              {isAr
                ? "املأ النموذج التالي وسيقوم مستشارنا بالتواصل معك لتحديد موعد العرض عبر الشاشة."
                : "Fill out the quick form below and our enterprise desk will schedule your live walkthrough."}
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm text-start">
            <LeadForm initialService={service.slug} formId={`service-lead-${service.id}`} />
          </div>
        </div>
      </section>
    </>
  );
};
