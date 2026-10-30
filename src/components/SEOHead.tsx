import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { BRAND } from "../data/constants";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
  ogType?: "website" | "article";
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath,
  keywords,
  ogType = "website",
  structuredData,
}) => {
  const { language } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    // 1. Set Title
    document.title = title;

    // 2. Set or Update Meta Tag Helper
    const setMeta = (nameOrProperty: "name" | "property", key: string, content: string) => {
      let tag = document.querySelector(`meta[${nameOrProperty}="${key}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(nameOrProperty, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // 3. Set or Update Link Tag Helper
    const setLink = (rel: string, href: string, extraAttrs?: Record<string, string>) => {
      let selector = `link[rel="${rel}"]`;
      if (extraAttrs) {
        Object.entries(extraAttrs).forEach(([k, v]) => {
          selector += `[${k}="${v}"]`;
        });
      }
      let linkTag = document.querySelector(selector) as HTMLLinkElement | null;
      if (!linkTag) {
        linkTag = document.createElement("link");
        linkTag.rel = rel;
        if (extraAttrs) {
          Object.entries(extraAttrs).forEach(([k, v]) => linkTag?.setAttribute(k, v));
        }
        document.head.appendChild(linkTag);
      }
      linkTag.href = href;
    };

    // Description & Keywords
    setMeta("name", "description", description);
    if (keywords) {
      setMeta("name", "keywords", keywords);
    }

    // Determine clean path without /ar
    let cleanPath = canonicalPath || location.pathname;
    if (cleanPath === "/ar") {
      cleanPath = "/";
    } else if (cleanPath.startsWith("/ar/")) {
      cleanPath = cleanPath.slice(3);
    }
    if (!cleanPath.startsWith("/")) {
      cleanPath = `/${cleanPath}`;
    }

    const currentUrl = `${BRAND.canonicalUrl}${language === "ar" ? (cleanPath === "/" ? "/ar/" : `/ar${cleanPath}`) : cleanPath}`;
    const enUrl = `${BRAND.canonicalUrl}${cleanPath === "/" ? "/" : cleanPath}`;
    const arUrl = `${BRAND.canonicalUrl}${cleanPath === "/" ? "/ar/" : `/ar${cleanPath}`}`;

    // Canonical link
    setLink("canonical", currentUrl);

    // Hreflang alternates
    setLink("alternate", enUrl, { hreflang: "en-SA" });
    setLink("alternate", arUrl, { hreflang: "ar-SA" });
    setLink("alternate", enUrl, { hreflang: "x-default" });

    // OpenGraph
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", currentUrl);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:locale", language === "ar" ? "ar_SA" : "en_SA");
    setMeta("property", "og:locale:alternate", language === "ar" ? "en_SA" : "ar_SA");
    setMeta("property", "og:site_name", "TGL Technologies KSA");

    // Twitter Card
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    // JSON-LD Structured Data
    const existingScript = document.getElementById("structured-data-json-ld");
    if (existingScript) {
      existingScript.remove();
    }

    if (structuredData) {
      const script = document.createElement("script");
      script.id = "structured-data-json-ld";
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      const s = document.getElementById("structured-data-json-ld");
      if (s) s.remove();
    };
  }, [title, description, canonicalPath, keywords, ogType, structuredData, language, location.pathname]);

  return null;
};
