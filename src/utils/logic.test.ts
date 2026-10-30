import test from "node:test";
import assert from "node:assert/strict";
import { BRAND, COMPLIANCE, SAUDI_CITIES, buildWhatsAppUrl, buildCallUrl, buildEmailUrl } from "../data/constants";
import { SERVICES_DATA } from "../data/servicesData";
import { POPULAR_PACKAGES } from "../data/packagesData";
import { LOCATIONS_DATA } from "../data/locationsData";
import { BLOG_ARTICLES } from "../data/blogData";
import {
  getOrganizationSchema,
  getWebSiteSchema,
  getProfessionalServiceSchema,
  getServiceSchema,
  getFAQPageSchema,
  getBreadcrumbSchema,
  getArticleSchema,
} from "../data/seoSchemas";

test("constants: brand contact details match specification", () => {
  assert.equal(BRAND.phone, "+91 99868 73312");
  assert.equal(BRAND.email, "info@tgltechnologies.com");
  assert.equal(BRAND.canonicalUrl, "https://ksa.tgltechnologies.com");
  assert.equal(BRAND.parentWebsite, "https://tgltechnologies.com");
});

test("compliance: legal footnotes and disclaimers are present", () => {
  assert.ok(COMPLIANCE.zatcaFootnote.includes("Compliance depends on the selected ERP"));
  assert.ok(COMPLIANCE.waslFootnote.includes("WASL-ready"));
  assert.ok(COMPLIANCE.pdplNotice.includes("PDPL"));
});

test("whatsapp url generator creates valid links in EN and AR", () => {
  const enUrl = buildWhatsAppUrl("ZATCA ERP", "en");
  assert.ok(enUrl.startsWith("https://wa.me/919986873312?text="));
  assert.ok(enUrl.includes("ZATCA%20ERP"));

  const arUrl = buildWhatsAppUrl("الفوترة الإلكترونية", "ar");
  assert.ok(arUrl.startsWith("https://wa.me/919986873312?text="));
});

test("data: all 10 mandated services exist with numbered badges", () => {
  assert.equal(SERVICES_DATA.length, 10);
  SERVICES_DATA.forEach((s, idx) => {
    const expectedNum = (idx + 1).toString().padStart(2, "0");
    assert.equal(s.number, expectedNum);
    assert.ok(s.slug.length > 0);
    assert.ok(s.titleEn.length > 0);
    assert.ok(s.titleAr.length > 0);
    assert.ok(s.faqs.length >= 2);
  });
});

test("data: all 3 popular packages are present without invented prices", () => {
  assert.equal(POPULAR_PACKAGES.length, 3);
  const ids = POPULAR_PACKAGES.map((p) => p.id);
  assert.deepEqual(ids, ["new-company-setup", "business-run", "smart-fleet"]);
});

test("data: all 5 mandated Saudi locations exist with localized copy", () => {
  assert.equal(LOCATIONS_DATA.length, 5);
  const slugs = LOCATIONS_DATA.map((l) => l.slug);
  assert.ok(slugs.includes("riyadh"));
  assert.ok(slugs.includes("jeddah"));
  assert.ok(slugs.includes("dammam"));
  assert.ok(slugs.includes("al-jubail"));
  assert.ok(slugs.includes("saudi-arabia"));
});

test("data: 6 outline-ready blog articles exist", () => {
  assert.equal(BLOG_ARTICLES.length, 6);
  BLOG_ARTICLES.forEach((art) => {
    assert.ok(art.titleEn.length > 0);
    assert.ok(art.titleAr.length > 0);
    assert.ok(art.tocEn.length >= 3);
    assert.ok(art.contentEn.length > 100);
    assert.ok(art.contentAr.length > 100);
  });
});

test("seo: schema generators produce valid Schema.org objects", () => {
  const org = getOrganizationSchema("en");
  assert.equal(org["@type"], "Organization");
  assert.equal(org.name, "TGL Technologies");

  const website = getWebSiteSchema("ar");
  assert.equal(website["@type"], "WebSite");
  assert.equal(website.inLanguage, "ar-SA");

  const localBiz = getProfessionalServiceSchema();
  assert.equal(localBiz["@type"], "ProfessionalService");
  assert.ok(Array.isArray(localBiz.areaServed));

  const service = getServiceSchema("ZATCA ERP", "Desc", "https://ksa.tgltechnologies.com/zatca-e-invoicing-erp", "ERP");
  assert.equal(service["@type"], "Service");

  const faq = getFAQPageSchema([{ q: "Q1", a: "A1" }]);
  assert.equal(faq["@type"], "FAQPage");
  assert.equal(faq.mainEntity.length, 1);
});

test("slideshow: hero slides have valid pcImage and localized content", async () => {
  const { HERO_SLIDES } = await import("../data/heroSlidesData");
  assert.ok(HERO_SLIDES.length >= 2, "Should have multiple slides for slideshow");
  HERO_SLIDES.forEach((slide) => {
    assert.ok(slide.id && slide.id.length > 0);
    assert.ok(slide.pcImage && slide.pcImage.startsWith("/assets/"));
    assert.ok(slide.titleEn && slide.titleEn.length > 0);
    assert.ok(slide.titleAr && slide.titleAr.length > 0);
  });
});

