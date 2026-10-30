import React, { useState } from "react";
import { MessageSquare, CheckCircle, Send, ShieldCheck, ArrowRight } from "lucide-react";
import { SAUDI_CITIES, DEMO_DAYS, COMPLIANCE, buildWhatsAppUrl } from "../data/constants";
import { SERVICES_DATA } from "../data/servicesData";
import { useLanguage } from "../context/LanguageContext";

export interface LeadFormProps {
  initialService?: string;
  initialPackage?: string;
  onSuccess?: () => void;
  formId?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  initialService = "",
  initialPackage = "",
  onSuccess,
  formId = "main-lead-form",
}) => {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [countryCode, setCountryCode] = useState("+966");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("riyadh");
  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialService ? [initialService] : []
  );
  const [preferredDay, setPreferredDay] = useState("sunday");
  const [message, setMessage] = useState(
    initialPackage ? `Interested in ${initialPackage} package.` : ""
  );
  const [consent, setConsent] = useState(true);
  const [honeypot, setHoneypot] = useState(""); // Anti-bot field

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (slug: string) => {
    if (selectedServices.includes(slug)) {
      setSelectedServices(selectedServices.filter((s) => s !== slug));
    } else {
      setSelectedServices([...selectedServices, slug]);
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) {
      errs.name = isAr ? "يرجى كتابة الاسم الكريم" : "Please enter your full name.";
    }
    if (!company.trim()) {
      errs.company = isAr ? "يرجى إدخال اسم الشركة أو المؤسسة" : "Please enter your company or establishment name.";
    }
    const cleanPhone = phone.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 8) {
      errs.phone = isAr ? "يرجى إدخال رقم جوال أو واتساب صحيح" : "Please enter a valid phone/WhatsApp number.";
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      errs.email = isAr ? "يرجى إدخال بريد إلكتروني صحيح" : "Please enter a valid business email address.";
    }
    if (!consent) {
      errs.consent = isAr ? "يجب الموافقة على شروط الخصوصية للمتابعة" : "You must consent to proceed.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Spam submission
    if (!validate()) return;

    setSubmitting(true);

    const leadPayload = {
      id: `lead_${Date.now()}`,
      created_at: new Date().toISOString(),
      name,
      company,
      phone: `${countryCode} ${phone}`,
      email,
      city,
      service_interest: selectedServices,
      package: initialPackage || null,
      preferred_day: preferredDay,
      message,
      language,
      consent,
      source_page: window.location.pathname,
    };

    // Store in local storage to simulate persistent Supabase table
    try {
      const existingLeads = JSON.parse(localStorage.getItem("tgl_leads") || "[]");
      existingLeads.unshift(leadPayload);
      localStorage.setItem("tgl_leads", JSON.stringify(existingLeads));
    } catch {
      // ignore localstorage error
    }

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      if (onSuccess) onSuccess();
    }, 700);
  };

  if (submitted) {
    const serviceLabels = selectedServices.length > 0 ? selectedServices.join(", ") : initialPackage || "Demo Booking";
    const waUrl = buildWhatsAppUrl(`${serviceLabels} for ${company} (${name})`, language);

    return (
      <div className="p-8 text-center bg-white rounded-3xl border border-slate-200 shadow-lg space-y-5 animate-in fade-in">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">
          {isAr ? "تم استلام طلبكم بنجاح!" : "Demo Request Received!"}
        </h3>
        <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
          {isAr
            ? `شكراً لك أستاذ ${name}. سنقوم بمراجعة متطلبات مؤسستكم والتواصل معكم عبر الواتساب والبريد خلال ساعات العمل لتأكيد موعد العرض التوضيحي.`
            : `Thank you, ${name}. Our enterprise team will review your requirements and reach out via WhatsApp and email to schedule your live walkthrough.`}
        </p>

        <div className="pt-2">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md hover:shadow-lg transition-all text-sm w-full sm:w-auto"
          >
            <MessageSquare className="w-4 h-4" />
            <span>
              {isAr ? "محادثة فورية بالواتساب لتسريع الحجز" : "Instant WhatsApp Fast-Track"}
            </span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <form id={formId} onSubmit={handleSubmit} className="space-y-4 text-start">
      {/* Honeypot for spam bots */}
      <input
        type="text"
        name="website_feedback"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Row 1: Name and Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {isAr ? "الاسم الكامل *" : "Your Full Name *"}
          </label>
          <input
            type="text"
            required
            placeholder={isAr ? "مثال: عبدالله الشمري" : "e.g. Faisal Al-Otaibi"}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full px-4 py-2.5 rounded-xl border bg-white text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 ${
              errors.name ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {isAr ? "اسم الشركة / المؤسسة *" : "Company / Establishment Name *"}
          </label>
          <input
            type="text"
            required
            placeholder={isAr ? "مثال: مؤسسة النور للمقاولات" : "e.g. Al Noor Contracting Est."}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className={`w-full px-4 py-2.5 rounded-xl border bg-white text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 ${
              errors.company ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
        </div>
      </div>

      {/* Row 2: Phone/WhatsApp and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {isAr ? "رقم الجوال أو الواتساب *" : "Phone / WhatsApp Number *"}
          </label>
          <div className="flex gap-2">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="px-2.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 text-xs font-mono shrink-0 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
            >
              <option value="+966">+966 (KSA)</option>
              <option value="+971">+971 (UAE)</option>
              <option value="+973">+973 (BH)</option>
              <option value="+965">+965 (KW)</option>
              <option value="+91">+91 (IN)</option>
            </select>
            <input
              type="tel"
              required
              placeholder="50 123 4567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`flex-1 px-4 py-2.5 rounded-xl border bg-white text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 ${
                errors.phone ? "border-red-500" : "border-slate-300"
              }`}
            />
          </div>
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {isAr ? "البريد الإلكتروني المهني *" : "Business Email Address *"}
          </label>
          <input
            type="email"
            required
            placeholder="faisal@company.sa"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-2.5 rounded-xl border bg-white text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 ${
              errors.email ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Row 3: City and Preferred Demo Day */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {isAr ? "المدينة / المقر الرئيسي *" : "City / Primary Operations *"}
          </label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600"
          >
            {SAUDI_CITIES.map((c) => (
              <option key={c.id} value={c.slug}>
                {isAr ? c.nameAr : c.nameEn}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {isAr ? "اليوم المفضل للعرض (الأحد–الخميس)" : "Preferred Demo Day (Sun–Thu)"}
          </label>
          <select
            value={preferredDay}
            onChange={(e) => setPreferredDay(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600"
          >
            {DEMO_DAYS.map((d) => (
              <option key={d.id} value={d.id}>
                {isAr ? d.nameAr : d.nameEn}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Services Multi-Select Grid */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
          {isAr
            ? "الخدمات المطلوب استشارتها أو تجربتها (يمكنك اختيار أكثر من خدمة)"
            : "Solutions of Interest (Select all that apply)"}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-44 overflow-y-auto p-2 bg-slate-50 rounded-xl border border-slate-200">
          {SERVICES_DATA.map((srv) => {
            const isChecked = selectedServices.includes(srv.slug);
            return (
              <button
                type="button"
                key={srv.id}
                onClick={() => toggleService(srv.slug)}
                className={`flex items-center gap-2 p-2 rounded-lg text-xs text-start transition-all ${
                  isChecked
                    ? "bg-blue-600 text-white font-medium shadow-xs"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/60"
                }`}
              >
                <span className="font-mono text-[10px] opacity-70 shrink-0">{srv.number}</span>
                <span className="truncate">{isAr ? srv.titleAr : srv.titleEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Message textarea */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">
          {isAr ? "تفاصيل إضافية أو حجم الأسطول / الموظفين (اختياري)" : "Additional Requirements / Fleet Size (Optional)"}
        </label>
        <textarea
          rows={2}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={
            isAr
              ? "أخبرنا باختصار عن عدد المستخدمين أو عدد الشاحنات أو موعد التأسيس..."
              : "Briefly tell us about your team size, number of vehicles, or current challenges..."
          }
          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600"
        />
      </div>

      {/* PDPL Privacy Consent */}
      <div className="pt-1">
        <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 rounded-md border-slate-300 text-blue-600 focus:ring-blue-600 w-4 h-4"
          />
          <span>
            {isAr ? COMPLIANCE.pdplNoticeAr : COMPLIANCE.pdplNotice}
          </span>
        </label>
        {errors.consent && <p className="text-red-500 text-xs mt-1">{errors.consent}</p>}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white bg-blue-700 hover:bg-blue-800 disabled:opacity-70 shadow-md hover:shadow-lg transition-all text-sm"
        >
          {submitting ? (
            <span className="inline-flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>{isAr ? "جارٍ الإرسال..." : "Submitting..."}</span>
            </span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>
                {isAr
                  ? "احجز العرض التوضيحي والاستشارة المجانية الآن"
                  : "Book FREE Online Demo & Consultation"}
              </span>
            </>
          )}
        </button>
      </div>

      {/* Footnote */}
      <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center pt-1">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
        <span>
          {isAr
            ? "استجابة سريعة عبر الواتساب والبريد · عروض أسعار بالريال السعودي (SAR)"
            : "Fast WhatsApp response · SME Proposals in Saudi Riyals (SAR)"}
        </span>
      </div>
    </form>
  );
};
