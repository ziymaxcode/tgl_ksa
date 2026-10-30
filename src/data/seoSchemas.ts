import { BRAND } from "./constants";

export const getOrganizationSchema = (lang: "en" | "ar" = "en") => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BRAND.name,
  legalName: BRAND.fullName,
  url: BRAND.canonicalUrl,
  logo: `${BRAND.canonicalUrl}/tgl-logo.png`,
  sameAs: [
    BRAND.parentWebsite,
    "https://www.linkedin.com/company/tgltechnologies",
    "https://www.instagram.com/tgltechnologies",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: BRAND.phone,
      contactType: "customer service",
      email: BRAND.email,
      areaServed: "SA",
      availableLanguage: ["English", "Arabic"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "https://schema.org/Sunday",
          "https://schema.org/Monday",
          "https://schema.org/Tuesday",
          "https://schema.org/Wednesday",
          "https://schema.org/Thursday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    },
  ],
});

export const getWebSiteSchema = (lang: "en" | "ar" = "en") => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TGL Technologies KSA",
  url: BRAND.canonicalUrl,
  inLanguage: lang === "ar" ? "ar-SA" : "en-SA",
  description:
    lang === "ar"
      ? "حلول الفوترة الإلكترونية ZATCA، وأنظمة ERP، وتطوير المواقع، وتتبع الأساطيل في السعودية"
      : "ZATCA E-Invoicing ERP, web development, branding, GPS fleet tracking and AI dashcams in Saudi Arabia.",
  publisher: {
    "@type": "Organization",
    name: BRAND.name,
    url: BRAND.canonicalUrl,
  },
});

export const getProfessionalServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${BRAND.name} – Saudi Arabia Operations`,
  image: `${BRAND.canonicalUrl}/tgl-logo.png`,
  url: BRAND.canonicalUrl,
  telephone: BRAND.phone,
  email: BRAND.email,
  priceRange: "SAR (Custom SME Quote)",
  areaServed: [
    {
      "@type": "Country",
      name: "Saudi Arabia",
    },
    {
      "@type": "City",
      name: "Riyadh",
    },
    {
      "@type": "City",
      name: "Jeddah",
    },
    {
      "@type": "City",
      name: "Dammam",
    },
    {
      "@type": "City",
      name: "Al Jubail",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
});

export const getServiceSchema = (
  serviceName: string,
  description: string,
  serviceUrl: string,
  serviceType: string
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: serviceName,
  description,
  url: serviceUrl,
  serviceType,
  provider: {
    "@type": "Organization",
    name: BRAND.name,
    url: BRAND.canonicalUrl,
  },
  areaServed: {
    "@type": "Country",
    name: "Saudi Arabia",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Saudi SME Business Solutions",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: serviceName,
        },
        priceCurrency: "SAR",
        price: "Contact for Quote",
      },
    ],
  },
});

export const getFAQPageSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
});

export const getBreadcrumbSchema = (
  items: { name: string; url: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: item.name,
    item: item.url.startsWith("http") ? item.url : `${BRAND.canonicalUrl}${item.url}`,
  })),
});

export const getArticleSchema = (
  title: string,
  description: string,
  slug: string,
  datePublished: string,
  author: string,
  lang: "en" | "ar" = "en"
) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  url: `${BRAND.canonicalUrl}${lang === "ar" ? "/ar" : ""}/blog/${slug}`,
  datePublished,
  dateModified: datePublished,
  inLanguage: lang === "ar" ? "ar-SA" : "en-SA",
  author: {
    "@type": "Organization",
    name: author,
    url: BRAND.canonicalUrl,
  },
  publisher: {
    "@type": "Organization",
    name: BRAND.name,
    logo: {
      "@type": "ImageObject",
      url: `${BRAND.canonicalUrl}/tgl-logo.png`,
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${BRAND.canonicalUrl}${lang === "ar" ? "/ar" : ""}/blog/${slug}`,
  },
});
