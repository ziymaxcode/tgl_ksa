import React from "react";
import { X, Sparkles } from "lucide-react";
import { LeadForm } from "./LeadForm";
import { useLanguage } from "../context/LanguageContext";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialPackage?: string;
  titleOverride?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  initialService = "",
  initialPackage = "",
  titleOverride,
}) => {
  const { language } = useLanguage();
  const isAr = language === "ar";

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-600/30 text-blue-400 flex items-center justify-center border border-blue-500/30">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                {titleOverride ||
                  (isAr
                    ? "طلب استشارة وعرض توضيحي مجاني"
                    : "Book a FREE Online Demo & Consultation")}
              </h3>
              <p className="text-xs text-slate-300">
                {isAr
                  ? "فريقنا متواجد لخدمتكم طوال أسبوع العمل السعودي (الأحد إلى الخميس)"
                  : "Serving Saudi SMEs with remote precision · Sunday–Thursday"}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content Scrollable Area */}
        <div className="p-6 overflow-y-auto">
          <LeadForm
            initialService={initialService}
            initialPackage={initialPackage}
            onSuccess={() => {
              // auto close after short delay or let user view confirmation
            }}
          />
        </div>
      </div>
    </div>
  );
};
