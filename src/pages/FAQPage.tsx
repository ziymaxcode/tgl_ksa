import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, HelpCircle, Search, MessageSquare, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { SEOHead } from "../components/SEOHead";
import { BRAND, buildWhatsAppUrl } from "../data/constants";
import { getBreadcrumbSchema, getFAQPageSchema } from "../data/seoSchemas";

export const FAQPage: React.FC = () => {
  const { language, getLocalizedPath } = useLanguage();
  const isAr = language === "ar";

  const [searchTerm, setSearchTerm] = useState("");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const allFaqs = [
    {
      catEn: "ZATCA & ERP",
      catAr: "الفوترة الإلكترونية و ERP",
      qEn: "What is ZATCA Phase 2 (FATOORA) and when is my company required to comply?",
      qAr: "ما هي المرحلة الثانية من الفوترة الإلكترونية (فاتورة) ومتى تصبح شركتي ملزمة بها؟",
      aEn: "Phase 2 requires direct API integration of your billing system with ZATCA's Fatoora platform. It is rolled out in sequential waves based on annual taxable revenues. Once your business falls into an announced wave, ZATCA grants a 6-month preparation window to connect your ERP.",
      aAr: "المرحلة الثانية تلزم المنشآت بالربط التقني المباشر بين برامجها المحاسبية وبوابة فاتورة لإصدار فواتير مشفرة بصيغة XML. تُطبق تدريجياً عبر مجموعات إلزامية تحددها الهيئة بناءً على حجم المبيعات السنوية.",
    },
    {
      catEn: "ZATCA & ERP",
      catAr: "الفوترة الإلكترونية و ERP",
      qEn: "Can TGL configure Zoho ERP to comply with ZATCA Phase 2?",
      qAr: "هل تقوم TGL بتهيئة نظام Zoho ERP ليتوافق مع هيئة الزكاة؟",
      aEn: "Yes. We configure Zoho Books and Zoho One with bilingual templates, proper VAT tax rate accounts, cryptographic CSID onboarding, and API clearance mechanisms.",
      aAr: "نعم، نقوم بتهيئة وتخصيص Zoho Books و Zoho One لتتوافق تماماً مع متطلبات ضريبة القيمة المضافة والفواتير ثنائية اللغة والربط التقني المعتمد.",
    },
    {
      catEn: "Fleet & Dashcam",
      catAr: "تتبع الأسطول والكاميرات",
      qEn: "What does WASL-ready fleet tracking mean?",
      qAr: "ماذا يعني تكامل تتبع الأسطول الجاهز لمنصة وصل؟",
      aEn: "Our telematics platform is engineered to transmit the specific data fields (vehicle plate, speed, location coordinates, driver ID) required by the Saudi Transport General Authority's WASL gateway when integrated with an authorized service provider.",
      aAr: "يعني ذلك أن نظامنا البرمجي مهيأ ومبرمج لنقل وبث الحقول والبيانات المطلوبة من منصة وصل (الموقع، السرعة، رقم اللوحة، بيانات السائق) وفق الضوابط المعتمدة لدى الهيئة العامة للنقل.",
    },
    {
      catEn: "Fleet & Dashcam",
      catAr: "تتبع الأسطول والكاميرات",
      qEn: "How do AI dashcams prevent fleet accidents in Saudi Arabia?",
      qAr: "كيف تساهم كاميرات الذكاء الاصطناعي في منع حوادث الشاحنات بالمملكة؟",
      aEn: "The cabin-facing camera detects driver drowsiness, fatigue, and mobile phone usage in real time, sounding an immediate in-cabin audio alert before an accident occurs, while road-facing ADAS warns of tailgating and collision risks.",
      aAr: "ترصد العدسة الداخلية بالذكاء الاصطناعي حالات النعاس والتشتت واستخدام الهاتف لحظة بلحظة، وتطلق تنبيهاً صوتياً فورياً داخل السيارة لتنبيه السائق قبل وقوع الحادث.",
    },
    {
      catEn: "Remote Delivery",
      catAr: "التنفيذ السحابي والدعم",
      qEn: "How can TGL provide support and training without a local Saudi branch?",
      qAr: "كيف تقدم TGL التدريب والدعم الفني دون وجود فرع فعلي في السعودية؟",
      aEn: "Because our software and telematics infrastructure are 100% cloud-hosted, we conduct screen-share onboarding workshops on Google Meet/Zoom and provide dedicated WhatsApp helpdesk support throughout the official Saudi business week (Sunday to Thursday, 8 AM – 6 PM AST).",
      aAr: "نظراً لأن جميع حلولنا سحابية، فإننا نعتمد على جلسات التدريب التفاعلية عبر الاتصال المرئي ومكتب مساعدة فوري بالواتساب يعمل طوال أسبوع العمل السعودي (الأحد إلى الخميس من 8 صباحاً إلى 6 مساءً بتوقيت مكة).",
    },
    {
      catEn: "Pricing & Proposals",
      catAr: "الأسعار والعقود",
      qEn: "Are service proposals and contracts issued in Saudi Riyals (SAR)?",
      qAr: "هل تصدر عروض الأسعار والعقود بالريال السعودي (SAR)؟",
      aEn: "Yes, every quote and proposal is officially denominated in Saudi Riyals (SAR) for transparent corporate expense accounting.",
      aAr: "نعم، كافة عروض الأسعار والاتفاقيات الرسمية تصدر بالريال السعودي (SAR) لضمان سهولة الإجراءات المالية والمحاسبية لشركتكم.",
    },
  ];

  const filteredFaqs = allFaqs.filter((f) => {
    const q = isAr ? f.qAr : f.qEn;
    const a = isAr ? f.aAr : f.aEn;
    return (
      q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: isAr ? "الرئيسية" : "Home", url: isAr ? "/ar/" : "/" },
    { name: isAr ? "الأسئلة الشائعة" : "FAQ", url: isAr ? "/ar/faq" : "/faq" },
  ]);

  const faqSchema = getFAQPageSchema(
    allFaqs.map((f) => ({
      q: isAr ? f.qAr : f.qEn,
      a: isAr ? f.aAr : f.aEn,
    }))
  );

  return (
    <>
      <SEOHead
        title={
          isAr
            ? "الأسئلة الشائعة حول الفوترة الإلكترونية وتتبع الأساطيل | TGL Technologies"
            : "Frequently Asked Questions: ZATCA ERP & Fleet Tracking KSA | TGL Technologies"
        }
        description={
          isAr
            ? "إجابات واضحة وموثوقة حول ربط المرحلة الثانية من فاتورة، وأنظمة تتبع الأسطول WASL، والدعم الفني عن بعد في السعودية."
            : "Answers to questions on ZATCA Phase 2 Fatoora integration, WASL fleet tracking, pricing in SAR, and remote IT delivery in Saudi Arabia."
        }
        canonicalPath="/faq"
        structuredData={[breadcrumbSchema, faqSchema]}
      />

      <section className="py-16 md:py-24 2xl:py-32 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200">
        <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>{isAr ? "مركز الإجابات المعتمدة" : "Verified Answers"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {isAr ? "الأسئلة المتكررة والمعرفية" : "Frequently Asked Questions"}
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {isAr
              ? "دليل شامل للإجابة على أهم الاستفسارات التقنية والتنظيمية لخدماتنا في المملكة العربية السعودية."
              : "Everything you need to know about our Saudi business software, fleet telematics, and remote support model."}
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto pt-4">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 start-3.5" />
              <input
                type="text"
                placeholder={isAr ? "ابحث في الأسئلة الشائعة..." : "Search questions or keywords..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full ps-10 pe-4 py-3 rounded-full border border-slate-300 bg-white text-slate-900 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 shadow-2xs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accordion List */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="space-y-4 text-start">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-700 transition-colors cursor-pointer"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 block mb-1">
                        {isAr ? faq.catAr : faq.catEn}
                      </span>
                      <span className="text-sm sm:text-base">{isAr ? faq.qAr : faq.qEn}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                        isOpen ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                      {isAr ? faq.aAr : faq.aEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 p-8 rounded-3xl bg-slate-900 text-white text-center space-y-4">
            <h3 className="text-xl font-bold">
              {isAr ? "لديك سؤال محدد لم تجد إجابته هنا؟" : "Have a specific question not covered here?"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
              {isAr
                ? "تواصل مباشرة مع فريقنا الاستشاري عبر الواتساب وسنكون سعداء بالرد على كافة تفاصيل مشروعكم."
                : "Chat directly with our enterprise support engineers on WhatsApp for immediate guidance."}
            </p>
            <div className="pt-2">
              <a
                href={buildWhatsAppUrl("FAQ unanswered inquiry", language)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isAr ? "محادثة فورية عبر الواتساب" : "Instant WhatsApp Inquiry"}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
