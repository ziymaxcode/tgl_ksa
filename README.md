# TGL Technologies — Saudi Arabia Vertical (ksa.tgltechnologies.com)

A high-performance bilingual (English + Arabic, full RTL) marketing and lead-generation platform for **TGL Technologies** in Saudi Arabia. Engineered for Google Saudi Arabia (`google.com.sa`) search dominance across ZATCA Phase 2 e-invoicing ERP, web design, corporate branding, accounting & 15% VAT, GPS fleet telematics, and AI dashcams.

---

## 1. Domain & DNS Configuration for `ksa.tgltechnologies.com`

To point the `ksa` subdomain to your hosting provider (e.g. Cloudflare, Cloud Run, Vercel, AWS):

1. **DNS Record Type**: `CNAME`
   - **Name / Host**: `ksa`
   - **Target / Value**: Point to your hosting deployment target (e.g., `<your-cloud-run-service>.a.run.app` or `<cname.vercel-dns.com>`)
   - **Proxy Status**: Proxied (Orange Cloud) on Cloudflare recommended to enable Middle East Edge PoPs (Riyadh, Jeddah, Dammam).
2. **Canonical Host Enforcement**:
   - `https://ksa.tgltechnologies.com` is canonical.
   - Configure a Cloudflare Page Rule or Redirect Rule to 301-redirect `www.ksa.tgltechnologies.com` to `https://ksa.tgltechnologies.com/$1`.
   - Force HTTPS and HTTP Strict Transport Security (HSTS).

---

## 2. Key Architecture & Features Built

- **Bilingual & Full RTL Mirroring**:
  - English at `/` and Arabic at `/ar/`.
  - Direction switches dynamically via `<html lang="ar-SA" dir="rtl">` and `<html lang="en-SA" dir="ltr">`.
  - Typography using **IBM Plex Sans Arabic** / **Tajawal** for Arabic and **Plus Jakarta Sans** for English.
  - Floating action buttons (WhatsApp, Call, Demo) auto-flip to the left edge in Arabic RTL.
  - Mobile bottom action bar adheres to the 15% viewport height budget.
- **Top Bar Contract**:
  - Follows strict 3-zone contract (`[Brand Wordmark] — [Nav Links] — [Language Switcher + Book Free Demo CTA]`).
- **Comprehensive SEO & Structured Data**:
  - Dynamic `<title>`, `<meta name="description">`, reciprocal `hreflang` tags (`en-SA`, `ar-SA`, `x-default`), and self-referencing canonicals.
  - JSON-LD schemas embedded: `Organization`, `WebSite`, `ProfessionalService` (with `areaServed: SA` and no invented street addresses), `Service` (on all service pages), `FAQPage` (on home, services, packages, and FAQ), `BreadcrumbList`, and `BlogPosting` (on blog articles).
  - Pre-generated static `public/sitemap.xml` with `xhtml:link` alternates and `public/robots.txt`.
- **10 Services & Custom Workflows**:
  1. `01` ZATCA E-Invoicing ERP (`/zatca-e-invoicing-erp`)
  2. `02` Industry Software (`/industry-software`, `/industry-software/manpower-supply`, `/industry-software/equipment-rental`, `/industry-software/material-trading`)
  3. `03` Website Design & Development (`/website-design-development`)
  4. `04` Professional Business Email (`/business-email`)
  5. `05` Company Profile & Branding (`/company-profile-branding`)
  6. `06` Digital Marketing & Social Media (`/digital-marketing`)
  7. `07` Accounting & VAT Support (`/accounting-vat-support`)
  8. `08` GPS Fleet Tracking (`/gps-fleet-tracking`)
  9. `09` AI Dashcam Monitoring (`/ai-dashcam-monitoring`)
  10. `10` Remote Support & Training (`/remote-support-training`)
- **3 Popular SME Packages**:
  - New Company Setup (Logo + Company Profile + Website + Business Email)
  - Business Run (ZATCA ERP + Business Email + Accounting Support)
  - Smart Fleet (GPS Tracking + AI Dashcam + WASL-ready Monitoring Platform)
  - Interactive "Request a Quote" modal pre-fills with package details.
- **5 Localized City Hubs**:
  - Riyadh (Government procurement, Etimad, Vision 2030 corporate headquarters)
  - Jeddah (Red Sea port trade, logistics, wholesale distribution)
  - Dammam (Eastern Province industrial corridor, oil & gas contracting)
  - Al Jubail (Petrochemical plants, turnaround maintenance, heavy equipment)
  - Kingdom-wide (Remote software delivery across all 13 provinces)
- **Blog & Technical Knowledge Base**:
  - 6 outline-ready in-depth articles in English and Arabic covering ZATCA Phase 2, Zoho vs TGL ERP, monthly VAT filing routine, WASL integration, AI dashcam accident mitigation, and startup IT checklists.
- **Lead Capture & PDPL Privacy**:
  - Full lead capture with validation, Saudi city selector, country code picker (+966), multi-select service selector, preferred demo day (Sun–Thu), honeypot anti-spam, and Saudi Personal Data Protection Law (PDPL) consent checkbox.
  - Instant WhatsApp follow-up action upon submission.

---

## 3. Checklist for Owner / Stakeholder Decisions & Real Assets

Before launching commercial campaigns on `ksa.tgltechnologies.com`, provide/confirm the following:

1. **Photographs & Brand Imagery**:
   - Provide high-resolution corporate team photos or authentic photography of your Saudi clients and installations if desired to replace placeholder vector illustrations.
2. **Pricing Transparency**:
   - As per the prompt's instruction, no invented prices were added; the site displays "Request a Quote in SAR" and "Custom SME Quote in SAR". If you wish to publish fixed starting tiers (e.g. Starting from X SAR/month), update `src/data/packagesData.ts`.
3. **Official Social Media Links**:
   - Update Instagram, LinkedIn, and YouTube profile URLs in `src/data/constants.ts` and `src/components/Footer.tsx`.
4. **ZATCA Solution Provider & WASL Status**:
   - The site strictly uses the substantiated compliance disclaimer: *"ZATCA-compliant / ready for ZATCA Phase 2 integration"* and *"WASL-ready integration"*. If TGL Technologies obtains formal certified partner certificates, update `COMPLIANCE` in `src/data/constants.ts`.
5. **Google Analytics 4 & Search Console**:
   - Connect your GA4 Measurement ID and verify `ksa.tgltechnologies.com` domain property in Google Search Console.
