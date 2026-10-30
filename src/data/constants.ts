/**
 * Central Brand, Contact and Legal Compliance Constants
 * TGL Technologies — Saudi Arabia Vertical (ksa.tgltechnologies.com)
 *
 * NOTE: All compliance, certification claims, contact details and NAP data
 * must be sourced from this file to ensure legal accuracy and consistency.
 */

export const BRAND = {
  name: "TGL Technologies",
  fullName: "TGL Technologies (Tech Graylogix)",
  tagline: "Innovate. Connect. Inspire.",
  parentWebsite: "https://tgltechnologies.com",
  canonicalUrl: "https://ksa.tgltechnologies.com",
  phone: "+91 99868 73312",
  phoneFormatted: "+91 99868 73312",
  email: "info@tgltechnologies.com",
  supportHours: "Sunday – Thursday (Saudi Working Week), 8:00 AM – 6:00 PM AST (UTC+3)",
  supportHoursAr: "الأحد – الخميس (أسبوع العمل السعودي)، 8:00 ص – 6:00 م بتوقيت مكة (UTC+3)",
  headquarters: "Mangaluru, Karnataka, India",
  serviceModel: "Delivered remotely from India, supported fast across Saudi Arabia",
  serviceModelAr: "تنفيذ وتقديم تقني عن بعد مع دعم سريع مخصص لشركات المملكة",
} as const;

export const COMPLIANCE = {
  // Required compliance disclaimer strings
  zatcaBadge: "ZATCA-compliant / Ready for ZATCA Phase 2 integration",
  zatcaBadgeAr: "متوافق مع هيئة الزكاة والضريبة والجمارك / جاهز للربط مع المرحلة الثانية (فاتورة)",
  zatcaFootnote:
    "Compliance depends on the selected ERP edition and specific ZATCA solution-provider integration requirements for Phase 2.",
  zatcaFootnoteAr:
    "يعتمد الالتزام بالفوترة على إصدار نظام ERP المختار ومتطلبات مزود حلول هيئة الزكاة والضريبة والجمارك (ZATCA) للربط مع المرحلة الثانية.",
  waslBadge: "WASL-ready Fleet Integration",
  waslBadgeAr: "تكامل جاهز للربط مع منصة وصل (الهيئة العامة للنقل)",
  waslFootnote:
    "WASL-ready integration applies to supported tracking devices and telematics middleware in line with Transport General Authority guidelines.",
  waslFootnoteAr:
    "التكامل الجاهز مع منصة وصل ينطبق على أجهزة التتبع المتوافقة وفق لوائح الهيئة العامة للنقل بالمملكة.",
  pdplNotice:
    "In accordance with Saudi Personal Data Protection Law (PDPL), your information is collected solely for consultation and demo scheduling.",
  pdplNoticeAr:
    "وفقاً لنظام حماية البيانات الشخصية السعودي (PDPL)، تُجمع بياناتك فقط لغرض تقديم الاستشارة وحجز العرض التوضيحي ولا تُشارك مع أي طرف ثالث.",
  noInventedPrices:
    "Custom SME quotation provided in Saudi Riyals (SAR) upon scope assessment.",
  noInventedPricesAr:
    "عروض أسعار مخصصة للشركات بالريال السعودي (SAR) بعد تقييم متطلبات المشروع بدقة.",
} as const;

export const SAUDI_CITIES = [
  { id: "riyadh", nameEn: "Riyadh", nameAr: "الرياض", slug: "riyadh" },
  { id: "jeddah", nameEn: "Jeddah", nameAr: "جدة", slug: "jeddah" },
  { id: "dammam", nameEn: "Dammam", nameAr: "الدمام", slug: "dammam" },
  { id: "al-jubail", nameEn: "Al Jubail", nameAr: "الجبيل", slug: "al-jubail" },
  { id: "saudi-arabia", nameEn: "Kingdom-wide (KSA)", nameAr: "كافة أنحاء المملكة", slug: "saudi-arabia" },
] as const;

export const DEMO_DAYS = [
  { id: "sunday", nameEn: "Sunday", nameAr: "الأحد" },
  { id: "monday", nameEn: "Monday", nameAr: "الاثنين" },
  { id: "tuesday", nameEn: "Tuesday", nameAr: "الثلاثاء" },
  { id: "wednesday", nameEn: "Wednesday", nameAr: "الأربعاء" },
  { id: "thursday", nameEn: "Thursday", nameAr: "الخميس" },
] as const;

export function buildWhatsAppUrl(serviceOrTopic = "General Inquiry", lang: "en" | "ar" = "en"): string {
  const cleanNumber = "919986873312";
  const text =
    lang === "ar"
      ? `مرحباً TGL Technologies، أرغب في حجز عرض توضيحي واستشارة مجانية لـ: ${serviceOrTopic}.`
      : `Hello TGL Technologies, I'd like to book a free demo and consultation for: ${serviceOrTopic}.`;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
}

export function buildCallUrl(): string {
  return "tel:+919986873312";
}

export function buildEmailUrl(subject = "Inquiry: TGL Technologies KSA"): string {
  return `mailto:info@tgltechnologies.com?subject=${encodeURIComponent(subject)}`;
}
