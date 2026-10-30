import React from "react";
import { Link } from "react-router-dom";
import { Building2, Globe, ShieldCheck, CheckCircle2, ArrowRight, MessageSquare, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { SEOHead } from "../components/SEOHead";
import { BRAND, COMPLIANCE, buildWhatsAppUrl } from "../data/constants";
import { getBreadcrumbSchema } from "../data/seoSchemas";

export const AboutPage: React.FC = () => {
  const { language, getLocalizedPath } = useLanguage();
  const isAr = language === "ar";

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: isAr ? "الرئيسية" : "Home", url: isAr ? "/ar/" : "/" },
    { name: isAr ? "عن الشركة" : "About Us", url: isAr ? "/ar/about" : "/about" },
  ]);

  return (
    <>
      <SEOHead
        title={
          isAr
            ? "عن TGL Technologies | الشريك التقني للشركات في المملكة العربية السعودية"
            : "About TGL Technologies | Saudi Arabia Business Software & Fleet Partner"
        }
        description={
          isAr
            ? "تعرف على TGL Technologies (Tech Graylogix): خدمات البرمجيات السحابية، والفوترة الإلكترونية، وتتبع الأساطيل لقطاع الأعمال السعودي."
            : "Learn about TGL Technologies (Tech Graylogix): Delivering ZATCA ERP, digital marketing, and fleet telematics to Saudi Arabia remotely."
        }
        canonicalPath="/about"
        structuredData={[breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="py-16 md:py-24 2xl:py-32 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200">
        <div className="site-container text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs xl:text-sm font-semibold">
            <Globe className="w-3.5 h-3.5 text-blue-600" />
            <span>{isAr ? "شريك نمو المنشآت في المملكة" : "Your SME Technology Growth Partner"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight">
            {isAr ? "عن TGL Technologies" : "About TGL Technologies"}
          </h1>

          <p className="text-slate-600 max-w-2xl xl:max-w-3xl mx-auto text-sm sm:text-base xl:text-lg leading-relaxed">
            {isAr
              ? "مقرنا في الهند، وخدماتنا تدعم وتواكب يومياً نمو المؤسسات والشركات في كافة مدن المملكة العربية السعودية بدقة رقمية عالية."
              : "Headquartered in India, engineered for the GCC. We deliver cloud-native ERP, websites, and fleet telematics to Saudi SMEs with zero domestic overhead."}
          </p>
        </div>
      </section>

      {/* Core Mission & Positioning */}
      <section className="py-16 md:py-24 2xl:py-32 bg-white">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-start">
              <span className="text-xs font-bold tracking-widest text-blue-700 uppercase">
                {isAr ? "رؤيتنا ورسالتنا" : "Our Mission & Strategy"}
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {isAr
                  ? "تمكين الشركات الصغيرة والمتوسطة بأعلى المعايير التقنية"
                  : "Empowering Saudi Small & Medium Enterprises"}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {isAr
                  ? "تأسست TGL Technologies (Tech Graylogix) في مانجالور، الهند، لتقديم خدمات تكنولوجية رفيعة المستوى لأسواق الشرق الأوسط. ندرك تماماً أن الشركات في المملكة تحتاج إلى سرعة في التنفيذ، وتكلفة تشغيلية متوازنة، والتزام صارم بمتطلبات هيئة الزكاة والضريبة والجمارك (ZATCA) ولوائح النقل (WASL)."
                  : "TGL Technologies (Tech Graylogix) was founded with a singular conviction: small and medium enterprises deserve access to enterprise-grade cloud systems without paying multi-million SAR consulting retainers. We combine deep software engineering with complete mastery of Saudi regulatory requirements."}
              </p>

              <div className="space-y-3 pt-2">
                {[
                  {
                    tEn: "Pure Remote Delivery Model",
                    tAr: "تنفيذ سحابي كامل عن بعد بدون تكاليف إضافية",
                    dEn: "Direct video onboarding, training, and database setup eliminating high local consulting overhead.",
                    dAr: "تهيئة سحابية وتدريب تفاعلي مباشر يوفر تكاليف المكاتب والمستشارين المحليين.",
                  },
                  {
                    tEn: "Aligned with Saudi Working Hours",
                    tAr: "ساعات عمل متوافقة مع أسبوع العمل في السعودية",
                    dEn: "Our team operates Sunday through Thursday, 8:00 AM to 6:00 PM AST, providing immediate WhatsApp helpdesk response.",
                    dAr: "فريقنا متواجد معك من الأحد إلى الخميس لدعم عملياتك اليومية دون انقطاع.",
                  },
                  {
                    tEn: "Saudi Commercial Rigor",
                    tAr: "فهم عميق لأنظمة السوق السعودي",
                    dEn: "Built around ZATCA Phase 2 Fatoora XML, 15% VAT, and Transport General Authority guidelines.",
                    dAr: "أنظمة مبنية خصيصاً لتوافق الفوترة الإلكترونية، وضريبة 15%، ولوائح منصة وصل.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{isAr ? item.tAr : item.tEn}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{isAr ? item.dAr : item.dEn}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card */}
            <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-6 text-start">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>{isAr ? "معلومات الشركة الرسمية" : "Corporate Profile"}</span>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">
                {BRAND.fullName}
              </h3>

              <div className="space-y-3 text-xs text-slate-300 divide-y divide-slate-800">
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-500">{isAr ? "المقر الرئيسي:" : "Global HQ:"}</span>
                  <span className="font-semibold text-slate-200">{BRAND.headquarters}</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-500">{isAr ? "الموقع العالمي:" : "Main Website:"}</span>
                  <a
                    href={BRAND.parentWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-blue-400 hover:underline"
                  >
                    tgltechnologies.com
                  </a>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-500">{isAr ? "منطقة الخدمة:" : "Service Area:"}</span>
                  <span className="text-slate-200">{isAr ? "كافة مناطق المملكة العربية السعودية" : "Kingdom of Saudi Arabia"}</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-500">{isAr ? "ساعات العمل:" : "Business Hours:"}</span>
                  <span className="text-slate-200">{isAr ? BRAND.supportHoursAr : BRAND.supportHours}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <a
                  href={buildWhatsAppUrl("About page inquiry", language)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>{isAr ? "تواصل مع فريق الإدارة عبر الواتساب" : "Connect with Leadership on WhatsApp"}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
