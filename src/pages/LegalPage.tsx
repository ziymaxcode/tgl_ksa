import React from "react";
import { Link } from "react-router-dom";
import { Shield, FileText, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { SEOHead } from "../components/SEOHead";
import { BRAND, COMPLIANCE } from "../data/constants";

interface LegalPageProps {
  type: "privacy" | "terms";
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const { language, getLocalizedPath } = useLanguage();
  const isAr = language === "ar";

  const isPrivacy = type === "privacy";

  return (
    <>
      <SEOHead
        title={
          isPrivacy
            ? isAr
              ? "سياسة الخصوصية ونظام حماية البيانات الشخصية (PDPL) | TGL Technologies"
              : "Privacy Policy & Saudi PDPL Compliance | TGL Technologies"
            : isAr
              ? "الشروط والأحكام والاتفاقية التجارية | TGL Technologies"
              : "Terms & Conditions of Service | TGL Technologies"
        }
        description={
          isPrivacy
            ? "سياسة الخصوصية وحماية البيانات الشخصية لـ TGL Technologies المتوافقة مع نظام حماية البيانات الشخصية (PDPL) بالمملكة."
            : "Commercial terms of service, intellectual property, SLAs and remote delivery policies of TGL Technologies."
        }
        canonicalPath={isPrivacy ? "/privacy-policy" : "/terms"}
      />

      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold">
            {isPrivacy ? <Shield className="w-3.5 h-3.5 text-blue-600" /> : <FileText className="w-3.5 h-3.5 text-blue-600" />}
            <span>{isPrivacy ? (isAr ? "الخصوصية وحماية البيانات" : "Data Protection") : (isAr ? "الاتفاقية التجارية" : "Commercial Terms")}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isPrivacy
              ? isAr
                ? "سياسة الخصوصية ونظام حماية البيانات (PDPL)"
                : "Privacy Policy (Saudi PDPL Compliance)"
              : isAr
                ? "الشروط والأحكام العامة للخدمات"
                : "Terms & Conditions of Service"}
          </h1>

          <p className="text-xs sm:text-sm text-slate-500 font-mono">
            {isAr ? "آخر تحديث: أكتوبر 2026" : "Last Updated: October 2026"}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white text-start">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate text-sm sm:text-base leading-relaxed space-y-8">
          {isPrivacy ? (
            isAr ? (
              <div className="space-y-6 text-slate-700">
                <h2 className="text-xl font-bold text-slate-900">1. الالتزام بنظام حماية البيانات الشخصية السعودي (PDPL)</h2>
                <p>
                  تلتزم TGL Technologies (المشار إليها بـ "الشركة" أو "نحن") باحترام خصوصية زوار ومستخدمي موقعنا ksa.tgltechnologies.com وعملائنا في المملكة العربية السعودية، وفقاً لأحكام نظام حماية البيانات الشخصية الصادر بالمرسوم الملكي الكريم رقم (م/19) ولوائحه التنفيذية.
                </p>

                <h2 className="text-xl font-bold text-slate-900">2. البيانات التي نجمعها</h2>
                <p>
                  نجمع فقط البيانات الضرورية لتقديم الاستشارات، وعروض الأسعار، وحجز العروض التوضيحية:
                </p>
                <ul className="list-disc ps-5 space-y-1">
                  <li>الاسم الكامل ومسمى الوظيفة</li>
                  <li>اسم المؤسسة أو الشركة ورقم السجل التجاري (إن وجد)</li>
                  <li>رقم الجوال أو الواتساب والبريد الإلكتروني المهني</li>
                  <li>المدينة أو المنطقة داخل المملكة</li>
                  <li>الخدمات أو الأنظمة المطلوب استشارتها</li>
                </ul>

                <h2 className="text-xl font-bold text-slate-900">3. الغرض من معالجة البيانات</h2>
                <p>
                  تُستخدم البيانات التي تقدمها بموافقتك الصريحة فقط للتواصل معك، وتنسيق موعد العرض التجريبي، وتقديم عروض الأسعار والدعم الفني. لا نقوم ببيع أو مشاركة أو تأجير بياناتك لأي طرف ثالث لأغراض تسويقية.
                </p>

                <h2 className="text-xl font-bold text-slate-900">4. حقوق صاحب البيانات</h2>
                <p>
                  يحق لك بموجب النظام الاطلاع على بياناتك الشخصية المحفوظة لدينا، أو طلب تصحيحها، أو طلب إتلافها في أي وقت عبر التواصل معنا على البريد: <span className="font-mono text-blue-700">info@tgltechnologies.com</span>.
                </p>
              </div>
            ) : (
              <div className="space-y-6 text-slate-700">
                <h2 className="text-xl font-bold text-slate-900">1. Commitment to Saudi PDPL Regulations</h2>
                <p>
                  TGL Technologies ("Company", "we", "us") is dedicated to protecting the privacy and personal data of our users and enterprise clients across the Kingdom of Saudi Arabia in accordance with the Saudi Personal Data Protection Law (PDPL) enacted by Royal Decree No. (M/19).
                </p>

                <h2 className="text-xl font-bold text-slate-900">2. Categories of Information Collected</h2>
                <p>We collect only the business information necessary to arrange online demos, deliver quotations, and provide software onboarding:</p>
                <ul className="list-disc ps-5 space-y-1">
                  <li>Full name and corporate title</li>
                  <li>Company or establishment name, and Commercial Registration (CR) details</li>
                  <li>Contact phone/WhatsApp number and professional email address</li>
                  <li>City or operational jurisdiction within Saudi Arabia</li>
                  <li>Selected services of interest and fleet/user parameters</li>
                </ul>

                <h2 className="text-xl font-bold text-slate-900">3. Purpose of Processing</h2>
                <p>
                  Data provided through our web forms is processed strictly to fulfill your requested consultation, schedule Google Meet screen shares, and deliver formal proposals in Saudi Riyals. We do not sell or monetize client records to third parties.
                </p>

                <h2 className="text-xl font-bold text-slate-900">4. Your Statutory Rights</h2>
                <p>
                  Under the PDPL, you retain the right to request access to, rectification of, or erasure of your submitted corporate contact records. Contact our privacy officer at <span className="font-mono text-blue-700">info@tgltechnologies.com</span>.
                </p>
              </div>
            )
          ) : (
            isAr ? (
              <div className="space-y-6 text-slate-700">
                <h2 className="text-xl font-bold text-slate-900">1. نطاق الاتفاقية ونموذج تقديم الخدمة</h2>
                <p>
                  توضح هذه الشروط الأحكام الحاكمة لتقديم الخدمات البرمجية والتقنية وتتبع الأسطول من قِبل TGL Technologies لعملائنا في المملكة العربية السعودية. تُقدم الخدمات وتُدار سحابياً عن بعد وفق أسبوع العمل وساعات الدوام الرسمية في المملكة (من الأحد إلى الخميس).
                </p>

                <h2 className="text-xl font-bold text-slate-900">2. عروض الأسعار والسداد بالريال السعودي (SAR)</h2>
                <p>
                  كافة عروض الأسعار والاتفاقيات تصدر وتسدد بالريال السعودي (SAR). تخضع التكاليف لنطاق العمل وعدد المستخدمين أو المركبات المحددة في عرض السعر الرسمي المعتمد.
                </p>

                <h2 className="text-xl font-bold text-slate-900">3. حقوق الملكية الفكرية</h2>
                <p>
                  يحصل العميل على الملكية الكاملة لكافة ملفات الشعار والتصاميم المعتمدة والموقع الإلكتروني والمحتوى الخاص بشركته فور سداد الدفعة النهائية. تظل البرمجيات السحابية وأنظمة ERP مرخصة للاستخدام وفق شروط الاشتراك المتفق عليها.
                </p>

                <h2 className="text-xl font-bold text-slate-900">4. إشعار الالتزام بأنظمة ZATCA و WASL</h2>
                <p>
                  {COMPLIANCE.zatcaFootnoteAr} {COMPLIANCE.waslFootnoteAr}
                </p>
              </div>
            ) : (
              <div className="space-y-6 text-slate-700">
                <h2 className="text-xl font-bold text-slate-900">1. Scope of Service & Delivery Model</h2>
                <p>
                  These Terms govern the provision of cloud software, website development, branding, and telematics services by TGL Technologies to commercial enterprises operating within Saudi Arabia. All services are deployed and supported remotely across the Saudi working week (Sunday through Thursday).
                </p>

                <h2 className="text-xl font-bold text-slate-900">2. Commercial Proposals & Invoicing in SAR</h2>
                <p>
                  Proposals and service contracts are officially denominated and settled in Saudi Riyals (SAR). Subscription fees depend on active user seats, fleet vehicle counts, and defined scope milestones agreed upon in writing.
                </p>

                <h2 className="text-xl font-bold text-slate-900">3. Intellectual Property Rights</h2>
                <p>
                  Clients receive 100% ownership of approved vector brand identities, company profiles, website code, and corporate assets upon settlement of agreed project milestones. Cloud software subscriptions are licensed under continuous service agreements.
                </p>

                <h2 className="text-xl font-bold text-slate-900">4. Regulatory & Compliance Notice</h2>
                <p>
                  {COMPLIANCE.zatcaFootnote} {COMPLIANCE.waslFootnote}
                </p>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
};
