import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, MessageSquare, ChevronDown, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { SEOHead } from "../components/SEOHead";
import { LeadForm } from "../components/LeadForm";
import { POPULAR_PACKAGES } from "../data/packagesData";
import { COMPLIANCE, buildWhatsAppUrl } from "../data/constants";
import { getBreadcrumbSchema, getFAQPageSchema } from "../data/seoSchemas";

interface PackagesPageProps {
  onOpenDemoModal: (service?: string, pkg?: string) => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({ onOpenDemoModal }) => {
  const { language, getLocalizedPath } = useLanguage();
  const isAr = language === "ar";

  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const packageFaqs = [
    {
      qEn: "How are the package prices quoted?",
      qAr: "كيف يتم تحديد وتسعير هذه الباقات؟",
      aEn: "All proposals are custom-quoted in Saudi Riyals (SAR) based on your user headcount, number of fleet vehicles, or company profile page requirements. We provide predictable monthly or annual plans without hidden licensing charges.",
      aAr: "تُحدد الأسعار بدقة بالريال السعودي (SAR) بناءً على عدد المستخدمين في النظام، أو عدد مركبات الأسطول، أو مواصفات الملف التعريفي المطلوب، ونوفر خيارات سداد شهرية أو سنوية ميسرة.",
    },
    {
      qEn: "Can we customize or combine services from multiple packages?",
      qAr: "هل يمكننا دمج خدمات أو تعديل عناصر الباقة وفق رغبتنا؟",
      aEn: "Yes! While our 3 standard packages cover the most frequent SME milestones, our team routinely crafts custom combined scopes (e.g. ERP + GPS Fleet + Website).",
      aAr: "نعم بالتأكيد! على الرغم من أن الباقات الثلاث تغطي أهم مراحل الشركات، إلا أنه يمكنك بسهولة تخصيص حزمة تجمع بين برامج المحاسبة وتتبع المركبات وتصميم الموقع الإلكتروني.",
    },
    {
      qEn: "What is the turnaround time from approval to go-live?",
      qAr: "ما هو الوقت المستغرق من توقيع العقد وحتى إطلاق النظام؟",
      aEn: "Turnaround typically ranges from 5 to 14 business days depending on master data migration and review feedback.",
      aAr: "يتراوح وقت الإنجاز والتدريب عادة بين 5 إلى 14 يوم عمل فقط، ويشمل ذلك رفع البيانات الأولية وتدريب الفريق التقني.",
    },
  ];

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: isAr ? "الرئيسية" : "Home", url: isAr ? "/ar/" : "/" },
    { name: isAr ? "الباقات" : "Packages", url: isAr ? "/ar/packages" : "/packages" },
  ]);

  const faqSchema = getFAQPageSchema(
    packageFaqs.map((f) => ({
      q: isAr ? f.qAr : f.qEn,
      a: isAr ? f.aAr : f.aEn,
    }))
  );

  return (
    <>
      <SEOHead
        title={
          isAr
            ? "باقات تأسيس وتشغيل الشركات والأساطيل في السعودية | TGL Technologies"
            : "Popular Business Software & Fleet Packages in Saudi Arabia | TGL Technologies"
        }
        description={
          isAr
            ? "باقات شاملة لتأسيس الشركات الجديدة، وإدارة الفوترة الإلكترونية ZATCA، وتتبع الأساطيل. عروض أسعار بالريال السعودي."
            : "Turnkey bundles for new company setup, ZATCA e-invoicing ERP, and smart fleet tracking in Saudi Arabia. Request a quote in SAR."
        }
        canonicalPath="/packages"
        structuredData={[breadcrumbSchema, faqSchema]}
      />

      {/* Hero */}
      <section className="py-16 md:py-24 2xl:py-32 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200">
        <div className="site-container text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs xl:text-sm font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{isAr ? "حلول متكاملة للمنشآت السعودية" : "Turnkey Packages for Saudi SMEs"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight">
            {isAr
              ? "باقات تقنية موحدة مصممة لانطلاقة ونمو أسرع"
              : "Unified Business Software & Fleet Packages"}
          </h1>

          <p className="text-slate-600 max-w-2xl xl:max-w-3xl mx-auto text-sm sm:text-base xl:text-lg leading-relaxed">
            {isAr
              ? "وفر الوقت والمال بالاعتماد على باقاتنا المتكاملة التي تجمع البرمجيات والهوية وتتبع الأسطول تحت اشتراك واحد شفاف."
              : "Save administrative overhead and ensure full regulatory compliance with our curated technology suites."}
          </p>

          <div className="flex items-center justify-center gap-2 pt-2 text-xs xl:text-sm text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{isAr ? COMPLIANCE.noInventedPricesAr : COMPLIANCE.noInventedPrices}</span>
          </div>
        </div>
      </section>

      {/* Package Cards */}
      <section className="py-16 md:py-24 2xl:py-32 bg-white">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10 2xl:gap-12 items-stretch">
            {POPULAR_PACKAGES.map((pkg, idx) => {
              const isDark = idx === 0;
              return (
                <div
                  key={pkg.id}
                  className={`rounded-3xl p-5 sm:p-7 lg:p-8 2xl:p-10 flex flex-col justify-between border transition-all duration-300 ${
                    isDark
                      ? "bg-slate-900 text-white border-blue-900 shadow-xl"
                      : "bg-slate-50/70 text-slate-900 border-slate-200/90 hover:border-blue-200 shadow-xs"
                  }`}
                >
                  <div className="space-y-4 sm:space-y-5 text-start">
                    <div className="flex flex-col xs:flex-row sm:flex-row sm:items-center justify-between gap-2.5 pb-1">
                      <span
                        className={`inline-flex items-center self-start text-xs font-bold px-3 py-1 rounded-full ${
                          isDark ? "bg-amber-400 text-slate-950 font-bold shadow-xs" : "bg-blue-100 text-blue-800 font-semibold"
                        }`}
                      >
                        {isAr ? pkg.badgeAr : pkg.badgeEn}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 self-start sm:self-auto text-xs font-mono px-2.5 py-1 rounded-lg border ${
                          isDark
                            ? "text-amber-200/90 bg-white/10 border-white/15"
                            : "text-slate-600 bg-white border-slate-200/90 shadow-2xs"
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5 shrink-0 opacity-80" />
                        <span>{isAr ? pkg.turnaroundAr : pkg.turnaroundEn}</span>
                      </span>
                    </div>

                    <div className="space-y-2 pt-1">
                      <h2 className={`text-xl sm:text-2xl font-extrabold tracking-tight leading-snug ${isDark ? "text-white" : "text-slate-900"}`}>
                        {isAr ? pkg.nameAr : pkg.nameEn}
                      </h2>

                      <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                        {isAr ? pkg.taglineAr : pkg.taglineEn}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-200/30 space-y-2.5">
                      <div className={`text-xs font-bold uppercase tracking-wider ${isDark ? "text-amber-300" : "text-slate-500"}`}>
                        {isAr ? "محتويات الباقة بالتفصيل:" : "Package Inclusions:"}
                      </div>
                      <ul className="space-y-2.5 text-xs">
                        {(isAr ? pkg.includesAr : pkg.includesEn).map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle2
                              className={`w-4 h-4 shrink-0 mt-0.5 ${
                                isDark ? "text-amber-400" : "text-emerald-600"
                              }`}
                            />
                            <span className={isDark ? "text-slate-200" : "text-slate-700"}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8 mt-6 border-t border-slate-200/30 space-y-3">
                    <button
                      onClick={() => onOpenDemoModal(undefined, pkg.nameEn)}
                      className={`w-full py-3.5 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        isDark
                          ? "bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold"
                          : "bg-blue-700 hover:bg-blue-800 text-white"
                      }`}
                    >
                      <span>{isAr ? "طلب عرض سعر مخصص" : "Get a Quote"}</span>
                      <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Package FAQ */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-2xl xl:text-3xl font-extrabold text-slate-900 tracking-tight">
              {isAr ? "الأسئلة الشائعة حول الباقات والتعاقد" : "Frequently Asked Questions"}
            </h2>
          </div>

          <div className="space-y-3">
            {packageFaqs.map((faq, idx) => {
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

      {/* Embedded Quote Request Form */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-200">
        <div className="max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isAr ? "احصل على عرض سعر رسمي بالريال السعودي" : "Request a Formal Quotation in SAR"}
          </h2>
          <div className="p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm text-start">
            <LeadForm initialPackage="Custom Package Inquiry" formId="package-page-lead" />
          </div>
        </div>
      </section>
    </>
  );
};
