import React from "react";
import { Link } from "react-router-dom";
import { MessageSquare, Phone, Mail, Clock, MapPin, Globe, ExternalLink, ShieldCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { BRAND, COMPLIANCE, SAUDI_CITIES, buildWhatsAppUrl, buildCallUrl, buildEmailUrl } from "../data/constants";
import { SERVICES_DATA } from "../data/servicesData";

export const Footer: React.FC = () => {
  const { language, getLocalizedPath } = useLanguage();
  const isAr = language === "ar";

  return (
    <footer className="bg-white border-t border-slate-200/90 text-slate-600 text-sm">
      {/* Upper Footer: Main Columns */}
      <div className="site-container py-16 xl:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 xl:gap-14 2xl:gap-18">
          {/* Column 1: Brand & Positioning (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to={getLocalizedPath("/")} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-700 to-blue-900 text-white flex items-center justify-center font-bold text-lg shadow-md">
                <span>TGL</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-slate-900">
                  TGL Technologies
                </span>
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                  {isAr ? "فرع المملكة العربية السعودية" : "Saudi Arabia Vertical"}
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              {isAr
                ? "الشريك التقني الموحد للشركات الصغيرة والمتوسطة في المملكة: الفوترة الإلكترونية ZATCA، وتطوير المواقع، والهوية المؤسسية، والتسويق، وتتبع المركبات بنظام GPS وكاميرات الذكاء الاصطناعي."
                : "One unified technology partner for Saudi SMEs: ZATCA-compliant ERP, websites, branding, digital marketing, accounting/VAT, GPS fleet tracking and AI dashcams. Delivered remotely, supported fast, priced for SMEs."}
            </p>

            {/* Direct WhatsApp Callout */}
            <div className="pt-2">
              <a
                href={buildWhatsAppUrl("Footer inquiry", language)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300/60 font-semibold text-xs transition-colors"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>
                  {isAr ? "استشارة فورية عبر الواتساب: " : "WhatsApp Inquiry: "}
                  <span className="font-mono">{BRAND.phone}</span>
                </span>
              </a>
            </div>

            {/* Support Hours */}
            <div className="flex items-start gap-2 text-xs text-slate-500 pt-1">
              <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>{isAr ? BRAND.supportHoursAr : BRAND.supportHours}</span>
            </div>
          </div>

          {/* Column 2: 10 Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              {isAr ? "الخدمات والحلول" : "Core Solutions"}
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <Link
                    to={getLocalizedPath(`/${srv.slug}`)}
                    className="hover:text-blue-700 transition-colors block truncate"
                  >
                    {isAr ? srv.titleAr : srv.titleEn}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to={getLocalizedPath("/#services")}
                  className="text-blue-700 font-semibold hover:underline block pt-1"
                >
                  {isAr ? "جميع الخدمات العشرة ←" : "View All 10 Services →"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Locations Served */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              {isAr ? "المدن والمناطق" : "Saudi Locations"}
            </h4>
            <ul className="space-y-2 text-xs">
              {SAUDI_CITIES.map((c) => (
                <li key={c.id}>
                  <Link
                    to={getLocalizedPath(`/locations/${c.slug}`)}
                    className="hover:text-blue-700 transition-colors flex items-center gap-1.5"
                  >
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{isAr ? c.nameAr : c.nameEn}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link
                to={getLocalizedPath("/packages")}
                className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60 inline-block hover:bg-amber-100 transition-colors"
              >
                {isAr ? "باقات تأسيس الشركات" : "Popular Packages"}
              </Link>
            </div>
          </div>

          {/* Column 4: Contact & Parent Brand */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              {isAr ? "التواصل والشركة" : "Contact & Company"}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <a
                  href={buildCallUrl()}
                  className="hover:text-blue-700 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span className="font-mono">{BRAND.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={buildEmailUrl()}
                  className="hover:text-blue-700 transition-colors flex items-center gap-2 truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  <span>{BRAND.email}</span>
                </a>
              </li>
              <li>
                <Link
                  to={getLocalizedPath("/about")}
                  className="hover:text-blue-700 transition-colors block"
                >
                  {isAr ? "عن TGL تكنولوجيز" : "About TGL Technologies"}
                </Link>
              </li>
              <li>
                <Link
                  to={getLocalizedPath("/blog")}
                  className="hover:text-blue-700 transition-colors block"
                >
                  {isAr ? "المدونة المعرفية" : "Knowledge Base & Blog"}
                </Link>
              </li>
              <li>
                <Link
                  to={getLocalizedPath("/faq")}
                  className="hover:text-blue-700 transition-colors block"
                >
                  {isAr ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-100">
                <a
                  href={BRAND.parentWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-blue-700 transition-colors flex items-center gap-1.5 font-medium"
                >
                  <Globe className="w-3.5 h-3.5 text-slate-400" />
                  <span>{isAr ? "الموقع العالمي: tgltechnologies.com" : "Global site: tgltechnologies.com"}</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Compliance Disclaimer Notice */}
      <div className="bg-slate-50 border-t border-slate-200/80 py-5 text-[11px] text-slate-500">
        <div className="site-container flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <span className="font-semibold text-slate-700">
              {isAr ? "إشعار الامتثال النظامي: " : "Regulatory Compliance Notice: "}
            </span>
            {isAr
              ? `${COMPLIANCE.zatcaFootnoteAr} ${COMPLIANCE.waslFootnoteAr} ${COMPLIANCE.noInventedPricesAr}`
              : `${COMPLIANCE.zatcaFootnote} ${COMPLIANCE.waslFootnote} ${COMPLIANCE.noInventedPrices}`}
          </p>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="border-t border-slate-200 py-6 text-xs text-slate-500">
        <div className="site-container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} {BRAND.fullName}.{" "}
            {isAr ? "جميع الحقوق محفوظة." : "All rights reserved."}
            <span className="ms-2 text-slate-400">
              {isAr
                ? "TGL Technologies، الهند · خدمة وتطوير تقني لشركات المملكة عن بعد"
                : "TGL Technologies, India · Serving Saudi Arabia remotely"}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              to={getLocalizedPath("/privacy-policy")}
              className="hover:text-blue-700 transition-colors"
            >
              {isAr ? "سياسة الخصوصية (PDPL)" : "Privacy Policy (PDPL)"}
            </Link>
            <Link
              to={getLocalizedPath("/terms")}
              className="hover:text-blue-700 transition-colors"
            >
              {isAr ? "الشروط والأحكام" : "Terms & Conditions"}
            </Link>
            <a
              href="/sitemap.xml"
              className="hover:text-blue-700 transition-colors font-mono text-[11px]"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
