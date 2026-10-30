import React, { createContext, useContext, useEffect, useState, useTransition } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  direction: "ltr" | "rtl";
  isRTL: boolean;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  getLocalizedPath: (path: string, targetLang?: Language) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [, startTransition] = useTransition();

  // Detect language from URL pathname: starts with /ar or /ar/
  const isArabicRoute = location.pathname === "/ar" || location.pathname.startsWith("/ar/");
  const [language, setLanguageState] = useState<Language>(isArabicRoute ? "ar" : "en");

  useEffect(() => {
    const isAr = location.pathname === "/ar" || location.pathname.startsWith("/ar/");
    const detectedLang: Language = isAr ? "ar" : "en";
    setLanguageState(detectedLang);

    // Update document HTML lang and dir attributes
    if (detectedLang === "ar") {
      document.documentElement.lang = "ar-SA";
      document.documentElement.dir = "rtl";
      document.body.classList.add("rtl");
      document.body.classList.remove("ltr");
    } else {
      document.documentElement.lang = "en-SA";
      document.documentElement.dir = "ltr";
      document.body.classList.add("ltr");
      document.body.classList.remove("rtl");
    }
  }, [location.pathname]);

  const getLocalizedPath = (path: string, targetLang?: Language): string => {
    const target = targetLang || language;
    // Strip leading /ar if present
    let cleanPath = path;
    if (cleanPath === "/ar") {
      cleanPath = "/";
    } else if (cleanPath.startsWith("/ar/")) {
      cleanPath = cleanPath.slice(3);
    }
    if (!cleanPath.startsWith("/")) {
      cleanPath = `/${cleanPath}`;
    }

    if (target === "ar") {
      return cleanPath === "/" ? "/ar" : `/ar${cleanPath}`;
    }
    return cleanPath;
  };

  const setLanguage = (newLang: Language) => {
    if (newLang === language) return;
    const newPath = getLocalizedPath(location.pathname, newLang) + location.search + location.hash;
    startTransition(() => {
      navigate(newPath);
    });
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  const direction = language === "ar" ? "rtl" : "ltr";
  const isRTL = direction === "rtl";

  return (
    <LanguageContext.Provider
      value={{
        language,
        direction,
        isRTL,
        setLanguage,
        toggleLanguage,
        getLocalizedPath,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
