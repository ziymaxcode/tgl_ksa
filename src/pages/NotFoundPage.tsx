import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowRight, Search, FileQuestion } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { SEOHead } from "../components/SEOHead";

export const NotFoundPage: React.FC = () => {
  const { language, getLocalizedPath } = useLanguage();
  const isAr = language === "ar";

  return (
    <>
      <SEOHead
        title={isAr ? "الصفحة غير موجودة 404 | TGL Technologies" : "Page Not Found 404 | TGL Technologies"}
        description="The requested page could not be found. Explore our Saudi business software and fleet tracking solutions."
      />

      <section className="py-24 md:py-32 bg-white text-center">
        <div className="max-w-md mx-auto px-4 space-y-6">
          <div className="w-16 h-16 rounded-3xl bg-blue-50 text-blue-700 mx-auto flex items-center justify-center">
            <FileQuestion className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <div className="font-mono text-sm font-bold text-blue-700">404 ERROR</div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {isAr ? "الصفحة المطلوبة غير موجودة" : "Page Not Found"}
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              {isAr
                ? "عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها. قد تم نقلها أو تحديث رابطها."
                : "Sorry, the page you are looking for doesn't exist or has been relocated."}
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to={getLocalizedPath("/")}
              className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>{isAr ? "العودة للرئيسية" : "Return to Homepage"}</span>
            </Link>

            <Link
              to={getLocalizedPath("/#services")}
              className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold text-slate-700 hover:text-blue-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <span>{isAr ? "استعراض الخدمات" : "View Services"}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
