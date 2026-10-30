import React from "react";
import { Phone, Mail, Clock, MapPin, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { SEOHead } from "../components/SEOHead";
import { LeadForm } from "../components/LeadForm";
import { BRAND, COMPLIANCE, SAUDI_CITIES, buildWhatsAppUrl, buildCallUrl, buildEmailUrl } from "../data/constants";
import { getBreadcrumbSchema, getProfessionalServiceSchema } from "../data/seoSchemas";

export const ContactPage: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: isAr ? "الرئيسية" : "Home", url: isAr ? "/ar/" : "/" },
    { name: isAr ? "تواصل معنا" : "Contact", url: isAr ? "/ar/contact" : "/contact" },
  ]);

  return (
    <>
      <SEOHead
        title={
          isAr
            ? "تواصل معنا وحجز عرض تجريبي | TGL Technologies السعودية"
            : "Contact Us & Book Free Demo | TGL Technologies Saudi Arabia"
        }
        description={
          isAr
            ? "احجز استشارة وعرضاً توضيحياً مجانياً لأنظمة ZATCA والأسطول. تواصل عبر الواتساب أو الهاتف مباشرة طوال أسبوع العمل السعودي."
            : "Book a free online demo & consultation for ZATCA ERP or fleet tracking. Reach our Saudi enterprise desk via WhatsApp, phone or email."
        }
        canonicalPath="/contact"
        structuredData={[getProfessionalServiceSchema(), breadcrumbSchema]}
      />

      <section className="py-16 md:py-24 2xl:py-32 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200">
        <div className="site-container text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs xl:text-sm font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{isAr ? "دعم مباشر طوال أسبوع العمل" : "Direct Sun–Thu Support"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight">
            {isAr ? "احجز استشارة وعرضاً توضيحياً مجانياً" : "Book a FREE Online Demo & Consultation"}
          </h1>

          <p className="text-slate-600 max-w-2xl xl:max-w-3xl mx-auto text-sm sm:text-base xl:text-lg leading-relaxed">
            {isAr
              ? "فريقنا الهندسي جاهز لعقد جلسة عمل مرئية وتوضيح مزايا برامجنا السحابية وتقديم مقترح رسمي بالريال السعودي."
              : "Connect directly with our engineering team to inspect our live ERP or fleet tracking systems and receive an SME proposal in SAR."}
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Details & Lead Form */}
      <section className="py-16 md:py-24 2xl:py-32 bg-white">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
            {/* Contact Details Card (Left 5 Cols) */}
            <div className="lg:col-span-5 space-y-6 text-start p-8 xl:p-10 rounded-3xl bg-slate-900 text-white shadow-xl">
              <h2 className="text-2xl font-bold tracking-tight text-white">
                {isAr ? "بيانات التواصل الرسمية" : "Contact Information"}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {isAr
                  ? "نسعد بتواصلكم عبر القناة الأنسب لكم، ونحرص على الرد السريع خلال أوقات الدوام الرسمية بالمملكة."
                  : "We respond promptly to business inquiries across the Saudi commercial work week."}
              </p>

              <div className="space-y-4 pt-2 text-xs sm:text-sm">
                {/* WhatsApp */}
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60">
                  <div className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{isAr ? "الواتساب المباشر" : "Direct WhatsApp"}</span>
                  </div>
                  <a
                    href={buildWhatsAppUrl("Contact page inquiry", language)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-base font-bold text-white hover:text-emerald-300 transition-colors block"
                  >
                    {BRAND.phone}
                  </a>
                  <span className="text-[11px] text-slate-400 mt-0.5 block">
                    {isAr ? "رد سريع خلال ساعات العمل" : "Fast WhatsApp reply Sun–Thu"}
                  </span>
                </div>

                {/* Phone Call */}
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60">
                  <div className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    <span>{isAr ? "الهاتف المباشر" : "Phone Call"}</span>
                  </div>
                  <a
                    href={buildCallUrl()}
                    className="font-mono text-base font-bold text-white hover:text-blue-300 transition-colors block"
                  >
                    {BRAND.phoneFormatted}
                  </a>
                </div>

                {/* Email */}
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                    <span>{isAr ? "البريد الإلكتروني" : "Official Email"}</span>
                  </div>
                  <a
                    href={buildEmailUrl()}
                    className="text-base font-bold text-white hover:text-blue-300 transition-colors block truncate"
                  >
                    {BRAND.email}
                  </a>
                </div>

                {/* Support Hours */}
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      {isAr ? "ساعات وأيام العمل" : "Operating Hours"}
                    </div>
                    <div className="text-xs text-slate-200 mt-0.5">
                      {isAr ? BRAND.supportHoursAr : BRAND.supportHours}
                    </div>
                  </div>
                </div>

                {/* Service Area */}
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      {isAr ? "نطاق التغطية" : "Service Area"}
                    </div>
                    <div className="text-xs text-slate-200 mt-0.5">
                      {isAr
                        ? "الرياض، جدة، الدمام، الجبيل، وكافة مناطق المملكة العربية السعودية"
                        : "Riyadh, Jeddah, Dammam, Al Jubail & All 13 Saudi Provinces (Remote)"}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lead Booking Form (Right 7 Cols) */}
            <div className="lg:col-span-7 p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm text-start space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                  {isAr ? "نموذج حجز العرض التوضيحي" : "Book Online Demo & Consultation"}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {isAr
                    ? "اختر الخدمات المطلوبة وسنقوم بتجهيز العرض وتنسيق الموعد المناسب معكم فوراً."
                    : "Fill in your company details to schedule a live Google Meet walkthrough with our engineers."}
                </p>
              </div>

              <LeadForm formId="contact-page-lead" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
