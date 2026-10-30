import React from "react";
import { MessageSquare, Phone, Calendar, Instagram } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { buildWhatsAppUrl, buildCallUrl } from "../data/constants";

interface FloatingActionsProps {
  onOpenDemoModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenDemoModal }) => {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const waUrl = buildWhatsAppUrl("Floating quick action", language);
  const callUrl = buildCallUrl();

  return (
    <>
      {/* 1. Desktop Vertical Floating Stack at Screen Edge */}
      <aside
        aria-label="Quick Contact Actions"
        className={`hidden md:flex fixed top-1/2 -translate-y-1/2 z-40 flex-col gap-3 ${
          isAr ? "left-4" : "right-4"
        }`}
      >
        {/* WhatsApp */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:shadow-emerald-500/30 hover:scale-105 transition-all group relative"
          aria-label={isAr ? "محادثة واتساب" : "Chat on WhatsApp"}
        >
          <MessageSquare className="w-5 h-5" />
          <span
            className={`absolute top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md ${
              isAr ? "left-14" : "right-14"
            }`}
          >
            {isAr ? "واتساب سريع" : "WhatsApp"}
          </span>
        </a>

        {/* Phone Call */}
        <a
          href={callUrl}
          className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all group relative"
          aria-label={isAr ? "اتصال هاتفي" : "Direct Phone Call"}
        >
          <Phone className="w-5 h-5" />
          <span
            className={`absolute top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md ${
              isAr ? "left-14" : "right-14"
            }`}
          >
            {isAr ? "اتصال هاتفي" : "Direct Call"}
          </span>
        </a>

        {/* Book Demo Modal */}
        <button
          onClick={onOpenDemoModal}
          className="w-12 h-12 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center shadow-lg hover:shadow-indigo-500/30 hover:scale-105 transition-all group relative cursor-pointer"
          aria-label={isAr ? "حجز عرض تجريبي" : "Book Free Demo"}
        >
          <Calendar className="w-5 h-5" />
          <span
            className={`absolute top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md ${
              isAr ? "left-14" : "right-14"
            }`}
          >
            {isAr ? "حجز عرض تجريبي" : "Book Demo"}
          </span>
        </button>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/tgltechnologies"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-slate-800 hover:bg-slate-900 text-white flex items-center justify-center shadow-md hover:scale-105 transition-all group relative"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" />
          <span
            className={`absolute top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md ${
              isAr ? "left-14" : "right-14"
            }`}
          >
            Instagram
          </span>
        </a>
      </aside>

      {/* 2. Mobile Sticky Bottom Bar (Within 15% Viewport Cap) */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-4 py-2.5 shadow-xl">
        <div className="grid grid-cols-3 gap-2">
          {/* WhatsApp */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-emerald-600 text-white font-semibold text-xs shadow-xs"
          >
            <MessageSquare className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{isAr ? "واتساب" : "WhatsApp"}</span>
          </a>

          {/* Call */}
          <a
            href={callUrl}
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-blue-600 text-white font-semibold text-xs shadow-xs"
          >
            <Phone className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{isAr ? "اتصال" : "Call"}</span>
          </a>

          {/* Book Demo */}
          <button
            onClick={onOpenDemoModal}
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-slate-900 text-white font-semibold text-xs shadow-xs cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{isAr ? "عرض تجريبي" : "Demo"}</span>
          </button>
        </div>
      </div>
    </>
  );
};
