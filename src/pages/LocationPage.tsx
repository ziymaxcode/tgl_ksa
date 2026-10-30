import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MapPin, CheckCircle2, MessageSquare, ChevronDown, Building, ArrowRight, ShieldCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { SEOHead } from "../components/SEOHead";
import { LeadForm } from "../components/LeadForm";
import { LOCATIONS_DATA } from "../data/locationsData";
import { BRAND, buildWhatsAppUrl } from "../data/constants";
import { getBreadcrumbSchema, getFAQPageSchema, getProfessionalServiceSchema } from "../data/seoSchemas";

interface LocationPageProps {
  onOpenDemoModal: (service?: string) => void;
}

export const LocationPage: React.FC<LocationPageProps> = ({ onOpenDemoModal }) => {
  const { city: citySlug } = useParams<{ city?: string }>();
  const { language, getLocalizedPath } = useLanguage();
  const isAr = language === "ar";

  const location =
    LOCATIONS_DATA.find((l) => l.slug === (citySlug || "riyadh")) || LOCATIONS_DATA[0];

  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: isAr ? "الرئيسية" : "Home", url: isAr ? "/ar/" : "/" },
    { name: isAr ? "المدن" : "Locations", url: isAr ? "/ar/locations/saudi-arabia" : "/locations/saudi-arabia" },
    { name: isAr ? location.cityAr : location.cityEn, url: `/locations/${location.slug}` },
  ]);

  const faqSchema = getFAQPageSchema(
    location.faqs.map((f) => ({
      q: isAr ? f.qAr : f.qEn,
      a: isAr ? f.aAr : f.aEn,
    }))
  );

  return (
    <>
      <SEOHead
        title={isAr ? location.titleAr : location.titleEn}
        description={
          isAr
            ? `${location.leadAr.slice(0, 150)}... احجز عرضاً توضيحياً مجاناً.`
            : `${location.leadEn.slice(0, 150)}... Book a free demo and consultation.`
        }
        canonicalPath={`/locations/${location.slug}`}
        structuredData={[getProfessionalServiceSchema(), breadcrumbSchema, faqSchema]}
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24 2xl:py-32 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200">
        <div className="site-container">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li>
                <Link to={getLocalizedPath("/")} className="hover:text-blue-700">
                  {isAr ? "الرئيسية" : "Home"}
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link to={getLocalizedPath("/locations/saudi-arabia")} className="hover:text-blue-700">
                  {isAr ? "المدن" : "Locations"}
                </Link>
              </li>
              <li>/</li>
              <li className="font-semibold text-slate-800">
                {isAr ? location.cityAr : location.cityEn}
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl text-start space-y-5 xl:space-y-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs xl:text-sm font-semibold">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>{isAr ? location.regionAr : location.regionEn}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
              {isAr ? location.heroHeadlineAr : location.heroHeadlineEn}
            </h1>

            <p className="text-base sm:text-lg xl:text-xl text-slate-600 leading-relaxed">
              {isAr ? location.leadAr : location.leadEn}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenDemoModal()}
                className="px-7 xl:px-9 py-3.5 xl:py-4 rounded-full text-sm xl:text-base font-bold text-white bg-blue-700 hover:bg-blue-800 shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 xl:w-5 xl:h-5" />
                <span>
                  {isAr
                    ? `طلب استشارة لشركات ${location.cityAr}`
                    : `Book Demo for ${location.cityEn} Businesses`}
                </span>
              </button>

              <a
                href={buildWhatsAppUrl(isAr ? `فرع ${location.cityAr}` : `${location.cityEn} branch inquiry`, language)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 xl:px-8 py-3.5 xl:py-4 rounded-full text-sm xl:text-base font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 xl:w-5 xl:h-5 text-emerald-600" />
                <span>{isAr ? "تواصل عبر الواتساب" : "WhatsApp Inquiry"}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Context & Key Sectors */}
      <section className="py-16 md:py-20 bg-white">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6 text-start">
              <span className="text-xs font-bold tracking-widest text-blue-700 uppercase">
                {isAr ? "الواقع الاقتصادي والتجاري" : "Local Commercial Context"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {isAr
                  ? `خصوصية الأعمال ومتطلبات التقنية في ${location.cityAr}`
                  : `Business Landscape & Technology Demands in ${location.cityEn}`}
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {isAr ? location.economicContextAr : location.economicContextEn}
              </p>

              {/* Priority Services */}
              <div className="pt-4 space-y-4">
                <h3 className="text-base font-bold text-slate-900">
                  {isAr ? "الخدمات التقنية ذات الأولوية بالمدينة:" : "Priority Solutions for Local Firms:"}
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {(isAr ? location.priorityServicesAr : location.priorityServicesEn).map(
                    (srv, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                          {idx + 1}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">{srv.title}</h4>
                          <p className="text-xs text-slate-600 mt-0.5">{srv.desc}</p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Key Sectors Sidebar */}
            <div className="lg:col-span-5 space-y-6 text-start p-7 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
                <Building className="w-4 h-4" />
                <span>{isAr ? "القطاعات الأكثر طلباً" : "Key Local Sectors"}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {isAr
                  ? `الأنشطة التي نخدمها في ${location.cityAr}`
                  : `Core Industries We Support in ${location.cityEn}`}
              </h3>
              <ul className="space-y-3">
                {(isAr ? location.keySectorsAr : location.keySectorsEn).map((sector, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{sector}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-200">
                <div className="text-xs text-slate-500 mb-2">
                  {isAr
                    ? "هل تعمل في قطاع مختلف؟ نقدم حلولاً برمجية مخصصة."
                    : "Operating in another trade? We tailor ERP & fleet setups to your exact workflows."}
                </div>
                <button
                  onClick={() => onOpenDemoModal()}
                  className="w-full py-3 rounded-xl text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 transition-colors"
                >
                  {isAr ? "احجز استشارة مخصصة" : "Request Custom Consultation"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local FAQs */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs font-bold tracking-widest text-blue-700 uppercase">
              {isAr ? "الأسئلة الشائعة" : "Local FAQ"}
            </span>
            <h2 className="text-2xl xl:text-3xl font-extrabold text-slate-900 tracking-tight">
              {isAr
                ? `استفسارات حول خدماتنا في ${location.cityAr}`
                : `Frequently Asked Questions in ${location.cityEn}`}
            </h2>
          </div>

          <div className="space-y-3">
            {location.faqs.map((faq, idx) => {
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
                    <span className="text-sm xl:text-base">{isAr ? faq.qAr : faq.qEn}</span>
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

      {/* Embedded Lead Form */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-200">
        <div className="max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {isAr
                ? `احجز عرضاً توضيحياً لشركتك في ${location.cityAr}`
                : `Connect with our Team for ${location.cityEn} Operations`}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              {isAr
                ? "حدد الخدمات المطلوبة وسنقوم بجدولة استعراض حي عبر الفيديو وتجهيز مقترح بالريال."
                : "Select the services you need. We'll schedule a live video demo and prepare a proposal in SAR."}
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm text-start">
            <LeadForm initialPackage={location.cityEn} formId={`location-lead-${location.id}`} />
          </div>
        </div>
      </section>
    </>
  );
};
