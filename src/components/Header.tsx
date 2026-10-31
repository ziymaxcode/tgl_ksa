import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, Sparkles, ArrowRight, Phone, MessageSquare } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { BRAND, buildWhatsAppUrl, buildCallUrl } from "../data/constants";

interface HeaderProps {
  onOpenDemoModal: (service?: string, pkg?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDemoModal }) => {
  const { language, toggleLanguage, getLocalizedPath } = useLanguage();
  const location = useLocation();
  const isAr = language === "ar";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { nameEn: "Services", nameAr: "الخدمات", path: "/#services" },
    { nameEn: "Industries", nameAr: "القطاعات", path: "/industry-software" },
    { nameEn: "Packages", nameAr: "الباقات", path: "/packages" },
    { nameEn: "Locations", nameAr: "المدن", path: "/locations/saudi-arabia" },
    { nameEn: "Blog", nameAr: "المدونة", path: "/blog" },
    { nameEn: "Contact", nameAr: "تواصل معنا", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      {/* 1. Top Announcement Bar */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white text-xs px-3 sm:px-4 py-1.5 sm:py-2">
        <div className="site-container flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <span className="inline-flex items-center gap-1 sm:gap-1.5 font-bold bg-white/20 px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] shrink-0">
              <Sparkles className="w-3 h-3 text-amber-300 shrink-0" />
              <span>{isAr ? "ZATCA" : "ZATCA Ready"}</span>
            </span>
            {/* Desktop Message */}
            <span className="hidden sm:inline truncate xl:text-sm">
              {isAr
                ? "احجز عرضاً توضيحياً مجانياً لربط المرحلة الثانية وحلول تتبع الأسطول"
                : "Book a FREE online demo for Saudi businesses · ZATCA Phase 2 & Fleet Ready"}
            </span>
            {/* Mobile Message without ellipsis or clipping */}
            <span className="sm:hidden text-[11px] font-medium truncate">
              {isAr ? "عرض تجريبي مجاني للشركات" : "Free Demo for Saudi SMEs"}
            </span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
            <button
              onClick={() => onOpenDemoModal()}
              className="font-semibold underline underline-offset-4 hover:text-blue-100 flex items-center gap-1 transition-colors text-[11px] sm:text-xs xl:text-sm shrink-0 cursor-pointer"
            >
              <span>{isAr ? "احجز الآن ←" : "Book Demo →"}</span>
            </button>
            <div className="hidden sm:flex items-center gap-2 border-s border-white/30 ps-3">
              <a
                href={buildWhatsAppUrl("Header announcement", language)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-300 transition-colors flex items-center gap-1"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span className="font-mono text-[11px] xl:text-xs">{BRAND.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar (3-Zone Contract) */}
      <div className="site-container">
        <div className="flex items-center justify-between gap-2 sm:gap-6 lg:gap-8 h-16 sm:h-18 xl:h-22">
          {/* Zone 1: Single Brand Wordmark element */}
          <Link
            to={getLocalizedPath("/")}
            className="flex items-center gap-2 sm:gap-3 min-w-0 shrink group focus:outline-hidden"
          >
            <div className="w-10 h-10 sm:w-10 sm:h-10 xl:w-12 xl:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0 overflow-hidden">
  <img
    src="/favicon.png"
    alt="TGL Technologies Logo"
    className="w-full h-full object-contain p-1"
  />
</div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm sm:text-lg xl:text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors truncate">
                TGL Technologies
              </span>
              <span className="text-[9px] sm:text-[10px] xl:text-[11px] font-semibold text-slate-500 uppercase tracking-wider truncate">
                {isAr ? "فرع المملكة العربية السعودية" : "Saudi Arabia Vertical"}
              </span>
            </div>
          </Link>

          {/* Zone 2: Navigation Links (Clean single-line prose) */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9 2xl:gap-11 text-sm xl:text-base font-medium text-slate-600">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={getLocalizedPath(link.path)}
                  className={`whitespace-nowrap shrink-0 transition-colors hover:text-blue-700 ${
                    active ? "text-blue-700 font-semibold" : ""
                  }`}
                >
                  {isAr ? link.nameAr : link.nameEn}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Language switch & 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-4 xl:gap-5 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-3.5 xl:px-4 py-1.5 xl:py-2 rounded-full text-xs xl:text-sm font-semibold text-slate-700 hover:text-blue-700 bg-slate-100 hover:bg-slate-200/80 transition-all cursor-pointer"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-slate-500" />
              <span>{isAr ? "English" : "العربية"}</span>
            </button>

            {/* Primary CTA */}
            <button
              onClick={() => onOpenDemoModal()}
              className="px-5 xl:px-7 py-2.5 xl:py-3.5 rounded-full text-xs xl:text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 shadow-sm hover:shadow-md transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              {isAr ? "احجز عرضاً تجريبياً" : "Book Free Demo"}
            </button>
          </div>

          {/* Mobile Action Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 sm:hidden shrink-0">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 active:scale-95 transition-all flex items-center gap-1 cursor-pointer"
              aria-label="Switch Language"
            >
              <Globe className="w-3 h-3 text-slate-500" />
              <span>{isAr ? "EN" : "عربي"}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 active:scale-95 transition-colors cursor-pointer"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={getLocalizedPath(link.path)}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                {isAr ? link.nameAr : link.nameEn}
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal();
              }}
              className="w-full py-3 rounded-full text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 shadow-sm text-center"
            >
              {isAr ? "احجز عرضاً توضيحياً مجانياً" : "Book Free Demo & Consultation"}
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={buildWhatsAppUrl("Mobile menu inquiry", language)}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 rounded-xl border border-emerald-500/30 bg-emerald-50 text-emerald-800 font-semibold text-xs flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
              <a
                href={buildCallUrl()}
                className="py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 font-semibold text-xs flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-slate-600" />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
