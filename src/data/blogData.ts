export interface BlogFaq {
  qEn: string;
  qAr: string;
  aEn: string;
  aAr: string;
}

export interface BlogArticle {
  slug: string;
  titleEn: string;
  titleAr: string;
  excerptEn: string;
  excerptAr: string;
  authorEn: string;
  authorAr: string;
  date: string;
  readTimeEn: string;
  readTimeAr: string;
  categoryEn: string;
  categoryAr: string;
  targetServiceSlug: string;
  tocEn: { id: string; title: string }[];
  tocAr: { id: string; title: string }[];
  contentEn: string;
  contentAr: string;
  faqs: BlogFaq[];
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "zatca-e-invoicing-phase-2-sme-checklist",
    titleEn: "ZATCA E-Invoicing Phase 2: What Saudi SMEs Must Do (Step-by-Step Checklist)",
    titleAr: "المرحلة الثانية من الفوترة الإلكترونية (فاتورة): الدليل العملي وقائمة التحقق لشركات السعودية",
    excerptEn:
      "A complete guide to navigating ZATCA Fatoora Phase 2 integration waves, cryptographic onboarding, XML/UBL requirements, and avoiding non-compliance penalties.",
    excerptAr:
      "دليل شامل لكيفية الاستعداد لمجموعات ربط المرحلة الثانية من الفوترة الإلكترونية بهيئة الزكاة، وإصدار الفواتير المشفرة، وتفادي الغرامات النظامية.",
    authorEn: "TGL Enterprise Tech Desk",
    authorAr: "فريق TGL للاستشارات التقنية",
    date: "2026-08-15",
    readTimeEn: "7 min read",
    readTimeAr: "7 دقائق قراءة",
    categoryEn: "ZATCA & ERP",
    categoryAr: "الفوترة الإلكترونية و ERP",
    targetServiceSlug: "zatca-e-invoicing-erp",
    tocEn: [
      { id: "understanding-phase-2", title: "1. Understanding ZATCA Phase 2 (Integration)" },
      { id: "standard-vs-simplified", title: "2. Standard Tax Invoice vs Simplified Tax Invoice" },
      { id: "technical-prerequisites", title: "3. Technical Prerequisites (CSID, Cryptography, UUID)" },
      { id: "sme-action-checklist", title: "4. The 6-Step SME Action Checklist" },
      { id: "common-pitfalls", title: "5. Common Pitfalls to Avoid" },
    ],
    tocAr: [
      { id: "understanding-phase-2", title: "1. فهم متطلبات المرحلة الثانية من مشروع فاتورة" },
      { id: "standard-vs-simplified", title: "2. الفرق بين الفاتورة الضريبية والفاتورة المبسطة" },
      { id: "technical-prerequisites", title: "3. المتطلبات التقنية (الرمز السري، التشفير الرقمي، المعرف الفريد)" },
      { id: "sme-action-checklist", title: "4. قائمة الإجراءات العملية للشركات (6 خطوات)" },
      { id: "common-pitfalls", title: "5. الأخطاء الشائعة وطرق تجنبها" },
    ],
    contentEn: `
## 1. Understanding ZATCA Phase 2 (Integration)
The Zakat, Tax and Customs Authority (ZATCA) introduced the e-invoicing initiative (FATOORA) to curb the shadow economy, protect consumer rights, and automate commercial oversight across the Kingdom.

While Phase 1 required generating and storing electronic invoices on compliant software (and prohibited manual invoicing or modifying generated invoices), **Phase 2 (The Integration Phase)** mandates direct API connectivity between your billing system and the ZATCA Fatoora portal.

Phase 2 is rolled out in progressive "waves" based on annual revenue thresholds. Once your business falls within a designated wave, you receive official notification from ZATCA and typically have 6 months to achieve live API integration.

## 2. Standard Tax Invoice vs Simplified Tax Invoice
Under ZATCA regulations, invoices are divided into two distinct categories:

- **B2B Standard Tax Invoices**: Issued for business-to-business transactions exceeding statutory thresholds. In Phase 2, standard tax invoices require **Clearance** before being shared with the buyer. Your ERP transmits the XML file to the ZATCA portal, which validates and cryptographically signs it, returning an approved clearance stamp. Only then can the invoice be legally handed to the customer.
- **B2C Simplified Tax Invoices**: Issued for cash retail transactions and consumers. In Phase 2, simplified invoices follow a **Reporting** model. The invoice is generated with a compliant QR code and handed to the buyer immediately, and your system reports the batch to ZATCA within 24 hours.

## 3. Technical Prerequisites (CSID, Cryptography, UUID)
To comply with Phase 2, your ERP or e-invoicing software must support:
- **Cryptographic Stamp Identifier (CSID)**: A digital security certificate issued via the ZATCA Fatoora developer portal.
- **Universally Unique Identifier (UUID)**: A tamper-proof 128-bit identifier assigned to every single invoice document.
- **Sequential Counter & Previous Invoice Hash (PIH)**: A cryptographic blockchain-like chain linking each invoice to the hash of the preceding invoice, preventing retroactive insertion or deletion.
- **UBL 2.1 XML Format**: Invoices must be structured in strict accordance with the OASIS UBL standard.

## 4. The 6-Step SME Action Checklist
1. **Audit Your Current Accounting Software**: Verify whether your existing accounting system is certified for Phase 2 API integration or if you need to upgrade to a modern cloud ERP like TGL ERP or Zoho Books.
2. **Obtain Your One-Time Password (OTP)**: Access the ZATCA portal via your company credentials and generate an onboarding OTP for each invoicing unit.
3. **Register Solution E-Invoicing Units (EGS)**: Link each branch billing terminal with its respective CSID certificate.
4. **Standardize Master Data**: Ensure all your customers' Tax Identification Numbers (TIN), Arabic addresses, and commercial registration (CR) numbers are accurately mapped in your database.
5. **Run Test Clearance Transmissions**: Conduct sandbox simulation tests to ensure zero XML syntax or tax calculation errors.
6. **Train Billing Staff**: Ensure cashiers and accountants understand how to interpret clearance confirmations and handle credit/debit notes.

## 5. Common Pitfalls to Avoid
- Waiting until the final month of your wave deadline.
- Using unverified third-party scripts that fail cryptographic hashing.
- Neglecting to back up signed XML archives for the mandatory 5-year statutory retention period.
    `,
    contentAr: `
## 1. فهم متطلبات المرحلة الثانية من مشروع فاتورة
أطلقت هيئة الزكاة والضريبة والجمارك (ZATCA) مشروع الفوترة الإلكترونية (فاتورة) لتعزيز الشفافية، ومكافحة التستر التجاري، وحماية التعاملات التجارية في جميع أنحاء المملكة.

في حين ركزت المرحلة الأولى على إصدار وحفظ الفواتير إلكترونياً ومنع التعديل اليدوي، فإن **المرحلة الثانية (مرحلة الربط والتكامل)** تلزم المنشآت بالربط التقني المباشر بين أنظمتها المحاسبية وبوابة هيئة الزكاة عبر واجهات برمجة التطبيقات (APIs).

تُطبق هذه المرحلة تدريجياً عبر "مجموعات إلزام" تُحدد بناءً على حجم الإيرادات السنوية، وتمنح الهيئة المنشأة مهلة كافية لإنهاء متطلبات التكامل الفني.

## 2. الفرق بين الفاتورة الضريبية والفاتورة المبسطة
تنقسم الفواتير في النظام الضريبي السعودي إلى نوعين رئيسيين:

- **الفاتورة الضريبية (B2B)**: تصدر للمبيعات بين المنشآت والشركات. في المرحلة الثانية تتطلب هذه الفواتير **المصادقة والاعتماد المسبق (Clearance)**؛ حيث يرسل نظام الـ ERP ملف الفاتورة بصيغة XML إلى منصة فاتورة، وتقوم المنصة بالتحقق منها وختمها رقمياً وإعادتها، ولا يُعتد بها قانونياً إلا بعد اكتمال هذه الخطوة.
- **الفاتورة الضريبية المبسطة (B2C)**: تصدر للمستهلكين والعملاء الأفراد في محلات التجزئة ونقاط البيع. تتبع هذه الفواتير نموذج **الإبلاغ (Reporting)**؛ حيث تُطبع الفاتورة للعميل مباشرة وتتضمن رمز الاستجابة السريعة (QR)، ويقوم النظام بإرسال بياناتها لمنصة الهيئة خلال 24 ساعة.

## 3. المتطلبات التقنية (الرمز السري، التشفير الرقمي، المعرف الفريد)
يتعين على نظام الـ ERP لديك دعم ما يلي:
- **معرف الختم التشفيري (CSID)**: شهادة أمان رقمية تُستخرج عبر بوابة الهيئة لكل وحدة فوترة.
- **المعرف الفريد عالمياً (UUID)**: كود تسلسلي مميز لكل فاتورة يمنع التكرار نهائياً.
- **تشفير الفواتير التسلسلي (Invoice Hash Chain)**: ربط كل فاتورة جديدة بـ Hash الفاتورة السابقة لمنع أي تلاعب بالتسلسل الزمني.
- **تنسيق UBL 2.1 XML**: تصدير الفواتير وفق المعيار الدولي المعتمد من الهيئة.

## 4. قائمة الإجراءات العملية للشركات (6 خطوات)
1. **فحص جاهزية النظام الحالي**: التحقق من قدرة برنامجك المحاسبي على الربط التقني أو الترقية لنظام ERP حديث مثل TGL ERP أو Zoho Books.
2. **استخراج الرمز السري المؤقت (OTP)**: الدخول لبوابة الهيئة وإنشاء رمز التفعيل لكل جهاز أو فرع.
3. **تسجيل أجهزة إصدار الفواتير (EGS)**: ربط وحدات البيع واستخراج شهادات الأمان الرقمية.
4. **تحديث بيانات العملاء والموردين**: التأكد من دقة الأرقام الضريبية والعناوين الوطنية والسجلات التجارية للعملاء.
5. **إجراء الاختبارات التجريبية**: إرسال عينات فواتير لبيئة الفحص للتأكد من خلوها من الأخطاء الحسابية.
6. **تدريب المحاسبين والموظفين**: تدريب الفريق المالي على التعامل مع حالات الاعتماد وإصدار الإشعارات الدائنة والمدينة.
    `,
    faqs: [
      {
        qEn: "Can an SME connect to ZATCA Phase 2 voluntarily before their wave deadline?",
        qAr: "هل يحق للمنشأة الربط مع المرحلة الثانية طوعياً قبل حلول موعد مجموعتها الإلزامية؟",
        aEn: "Yes, ZATCA permits voluntary early integration, which many proactive SMEs adopt to ensure smooth operations well in advance.",
        aAr: "نعم، تتيح الهيئة إمكانية الربط المبكر طوعياً، وتفضله العديد من الشركات لضمان استقرار أنظمتها قبل حلول الموعد الإلزامي.",
      },
      {
        qEn: "What happens if an invoice is rejected by the ZATCA portal during clearance?",
        qAr: "ماذا يحدث إذا تم رفض الفاتورة من قبل منصة فاتورة أثناء طلب المصادقة؟",
        aEn: "The portal returns specific error codes (e.g., incorrect VAT calculation or missing mandatory tags). The ERP allows you to correct the issue and retransmit instantly.",
        aAr: "تُرجع المنصة رمز خطأ محدد (مثل خطأ في رقم ضريبي أو احتساب النسبة)، ويتيح النظام تصحيح الخطأ وإعادة الإرسال فوراً.",
      },
    ],
  },
  {
    slug: "how-to-choose-erp-saudi-arabia-zoho-vs-tgl",
    titleEn: "How to Choose an ERP in Saudi Arabia: Zoho ERP vs TGL Custom ERP",
    titleAr: "كيف تختار نظام ERP المناسب لشركتك في السعودية: مقارنة بين Zoho و TGL ERP",
    excerptEn:
      "A pragmatic comparison of global SaaS platforms versus customized SME ERPs for Saudi trading, contracting, and service companies.",
    excerptAr:
      "مقارنة عملية شاملة بين الأنظمة السحابية العالمية وحلول الـ ERP المخصصة لشركات التجارة والمقاولات والخدمات بالمملكة.",
    authorEn: "TGL Solutions Architecture",
    authorAr: "فريق بنية الحلول في TGL",
    date: "2026-08-28",
    readTimeEn: "6 min read",
    readTimeAr: "6 دقائق قراءة",
    categoryEn: "ZATCA & ERP",
    categoryAr: "الفوترة الإلكترونية و ERP",
    targetServiceSlug: "zatca-e-invoicing-erp",
    tocEn: [
      { id: "the-erp-dilemma", title: "1. The ERP Dilemma for Saudi SMEs" },
      { id: "evaluating-zoho", title: "2. Evaluating Zoho ERP (Books / One)" },
      { id: "evaluating-tgl", title: "3. Evaluating TGL Custom ERP" },
      { id: "head-to-head", title: "4. Head-to-Head Comparison Table" },
      { id: "recommendation", title: "5. Which Should Your Business Choose?" },
    ],
    tocAr: [
      { id: "the-erp-dilemma", title: "1. تحديات اختيار نظام ERP للشركات المتوسطة والصغيرة" },
      { id: "evaluating-zoho", title: "2. تقييم نظام Zoho ERP (Books / One)" },
      { id: "evaluating-tgl", title: "3. تقييم نظام TGL ERP المخصص" },
      { id: "head-to-head", title: "4. جدول المقارنة الشامل" },
      { id: "recommendation", title: "5. أي النظامين هو الأنسب لنشاطك؟" },
    ],
    contentEn: `
## 1. The ERP Dilemma for Saudi SMEs
Selecting enterprise resource planning (ERP) software in Saudi Arabia is no longer just about internal efficiency. It is directly tied to regulatory compliance: ZATCA Phase 2 Fatoora rules, Saudi 15% VAT, bilingual Arabic-English reporting, and local labor integrations.

Many SMEs find themselves stuck between oversized corporate systems (like SAP or Oracle) that cost hundreds of thousands of SAR, and rudimentary accounting apps that cannot scale.

At TGL Technologies, we deliver both **Zoho ERP (Zoho Books / Zoho One)** and **TGL Proprietary Cloud ERP**. Here is how to decide which matches your business.

## 2. Evaluating Zoho ERP (Books / One)
Zoho is a globally recognized SaaS powerhouse with robust GCC presence:
- **Strengths**: Polished user interface, vast ecosystem of native apps (CRM, Inventory, Expense, Projects), mature iOS/Android mobile apps, standard ZATCA Phase 2 readiness.
- **Best Suited For**: Companies with standard commercial workflows, multi-currency trading, consulting firms, marketing agencies, and businesses that already use Zoho CRM or mail suites.
- **Considerations**: Deep custom operational modifications can be constrained by Zoho's standard platform architecture.

## 3. Evaluating TGL Custom ERP
TGL ERP is engineered specifically for Saudi industrial contracting, equipment rental, and manpower logistics:
- **Strengths**: Fully customisable workflows, dedicated modules for site timesheets, equipment mobilization dispatch, Iqama/GOSI tracking, lower ongoing total cost of ownership.
- **Best Suited For**: Manpower suppliers, heavy equipment rental companies, building material distributors, and contractors with non-standard billing equations.
- **Considerations**: Modular deployment tailored specifically to your defined processes.

## 4. Head-to-Head Comparison Table
- **ZATCA Phase 2 Integration**: Both systems support Phase 2 XML/UBL clearance & QR codes.
- **Arabic Language**: Both offer native Arabic RTL user interfaces.
- **Custom Workflow Flexibility**: TGL Custom ERP excels in specialized contracting rules; Zoho excels in standard commercial pipelines.
- **Implementation Speed**: Both can be configured and deployed remotely within 7 to 14 business days.

## 5. Which Should Your Business Choose?
- Choose **Zoho ERP** if you want an internationally established platform with turnkey integrations to global marketing and CRM tools.
- Choose **TGL Custom ERP** if your business involves manpower deployment, equipment rental fleet dispatch, or unique trade contracting workflows.
    `,
    contentAr: `
## 1. تحديات اختيار نظام ERP للشركات المتوسطة والصغيرة
لم يعد اختيار نظام تخطيط الموارد المؤسسية (ERP) في السعودية مجرد أداة لتنظيم الحسابات، بل أصبح مرتبطاً بالالتزام الصارم بالأنظمة الحكومية: متطلبات الفوترة الإلكترونية، وضريبة القيمة المضافة 15%، والتقارير ثنائية اللغة، ومتابعة العمالة.

تجد الكثير من المنشآت نفسها في حيرة بين الأنظمة العالمية العملاقة (مثل SAP و Oracle) ذات التكاليف الخيالية، وبين البرامج البسيطة التي لا تلبي متطلبات التوسع.

تقدم شركة TGL حلين متقدمين: **Zoho ERP** و **TGL ERP المخصص**. إليك معايير الاختيار الدقيقة بينهما.

## 2. تقييم نظام Zoho ERP (Books / One)
يعد نظام زوهو من أشهر الحلول السحابية المعتمدة عالمياً وفي منطقة الخليج:
- **المميزات**: واجهات استخدام أنيقة، منظومة متكاملة من التطبيقات (CRM، المخزون، إدارة المشاريع)، تطبيقات ممتازة للهواتف الذكية، وجاهزية لمتطلبات الفوترة الإلكترونية.
- **الأنسب لـ**: الشركات التجارية التقليدية، المكاتب الاستشارية، وكالات التسويق، والشركات التي تعتمد على دورات مبيعات قياسية.

## 3. تقييم نظام TGL ERP المخصص
تم تطوير نظام TGL ليخدم بصورة مباشرة قطاعات المقاولات والتشغيل في السوق السعودي:
- **المميزات**: مرونة كاملة في تعديل دورات العمل، شاشات مخصصة لتأجير المعدات، متابعة دوام وإقامات العمالة الميدانية، وتكلفة تشغيلية اقتصادية.
- **الأنسب لـ**: شركات توريد العمالة، مؤسسات تأجير الرافعات والمعدات، وموزعي مواد البناء والمقاولين.

## 4. كيف تتخذ القرار المناسب؟
- اختر **Zoho ERP** إذا كنت تبحث عن نظام عالمي قياسي سريع التدشين لعمليات التجارة والخدمات العامة.
- اختر **TGL ERP** إذا كانت طبيعة عملك تعتمد على تشغيل المعدات في المواقع أو عقود إعارة الكوادر والعمالة.
    `,
    faqs: [
      {
        qEn: "Can we switch between Zoho and TGL ERP in the future?",
        qAr: "هل يمكننا التحويل من نظام إلى آخر مستقبلاً في حال تغير نشاطنا؟",
        aEn: "Yes, our engineering team manages full database migrations between both platforms to preserve your transaction history.",
        aAr: "نعم، يقدم فريقنا الهندسي خدمات نقل وترحيل قواعد البيانات بين المنصتين لضمان استمرارية سجلاتكم دون انقطاع.",
      },
    ],
  },
  {
    slug: "vat-return-filing-saudi-arabia-monthly-routine",
    titleEn: "VAT Return Filing in Saudi Arabia: A Simple Monthly Routine for SMEs",
    titleAr: "إقرار ضريبة القيمة المضافة في السعودية: خطوات شهرية منتظمة لتجنب الغرامات",
    excerptEn:
      "Master the standard Saudi 15% VAT filing cycle: input vs output tax calculation, compliant invoice verification, and avoiding audit disallowances.",
    excerptAr:
      "تعرف على الدورة الشهرية المنظمة لاحتساب ضريبة القيمة المضافة 15% ومطابقة المدخلات والمخرجات لتقديم إقرار خالٍ من الأخطاء.",
    authorEn: "TGL Tax & Accounting Desk",
    authorAr: "فريق الضرائب والمحاسبة في TGL",
    date: "2026-09-05",
    readTimeEn: "5 min read",
    readTimeAr: "5 دقائق قراءة",
    categoryEn: "Accounting & VAT",
    categoryAr: "المحاسبة والضريبة",
    targetServiceSlug: "accounting-vat-support",
    tocEn: [
      { id: "the-saudi-vat-framework", title: "1. The Saudi 15% VAT Framework" },
      { id: "filing-frequency", title: "2. Monthly vs Quarterly Filing Frequency" },
      { id: "five-step-routine", title: "3. The 5-Step Routine to Reconcile Your Return" },
      { id: "deductible-input-rules", title: "4. Strict Rules for Deductible Input VAT" },
      { id: "remote-accounting-edge", title: "5. How Remote Accounting Support Protects You" },
    ],
    tocAr: [
      { id: "the-saudi-vat-framework", title: "1. الإطار العام لضريبة القيمة المضافة (15%) بالمملكة" },
      { id: "filing-frequency", title: "2. مواعيد التقديم الشهرية والربع سنوية" },
      { id: "five-step-routine", title: "3. الروتين الشهري في 5 خطوات لمطابقة الإقرار" },
      { id: "deductible-input-rules", title: "4. شروط خصم ضريبة المدخلات على فواتير المشتريات" },
      { id: "remote-accounting-edge", title: "5. كيف تحميك خدمات المحاسبة عن بعد من الغرامات" },
    ],
    contentEn: `
## 1. The Saudi 15% VAT Framework
Since July 2020, the standard Value Added Tax (VAT) rate in Saudi Arabia has been 15%. Administered by ZATCA, the tax applies to most taxable supplies of goods and services with limited exceptions (such as zero-rated exports and specified financial services).

## 2. Monthly vs Quarterly Filing Frequency
- **Monthly Filing**: Mandatory for taxable persons with annual taxable supplies exceeding SAR 40,000,000.
- **Quarterly Filing**: Applies to small and medium enterprises with annual taxable supplies equal to or less than SAR 40,000,000 (unless they opt for monthly filing).

Filing must be completed and tax paid no later than the final day of the month following the end of the tax period.

## 3. The 5-Step Routine to Reconcile Your Return
1. **Sales Register Audit**: Total all standard tax invoices issued during the period, verifying that 15% output VAT matches your general ledger.
2. **Purchase Invoice Verification**: Confirm that all supplier invoices claimed have valid supplier TINs, proper dates within the period, and compliant QR codes.
3. **Credit & Debit Note Adjustments**: Account for returned goods or canceled contracts during the period.
4. **Net VAT Calculation**: Subtract Total Deductible Input VAT from Total Output VAT collected to establish the net payable amount to ZATCA.
5. **Pre-Filing Review & Sign-Off**: Run an internal audit checklist before entering figures into the official ZATCA portal.

## 4. Strict Rules for Deductible Input VAT
ZATCA disallows input VAT deduction on:
- Invoices missing the seller's valid VAT number.
- Invoices not issued in the name of your commercial entity.
- Blocked expenditures such as personal entertainment, private vehicle expenses, or sporting club memberships.

## 5. How Remote Accounting Support Protects You
TGL Technologies provides remote accounting hygiene, reconciling every bank movement in SAR against invoices so your VAT filings are submitted on time with zero audit surprises.
    `,
    contentAr: `
## 1. الإطار العام لضريبة القيمة المضافة (15%) بالمملكة
تطبق المملكة العربية السعودية نسبة ضريبة القيمة المضافة الأساسية البالغة 15% على أغلب السلع والخدمات التجارية الخاضعة للضريبة بإشراف هيئة الزكاة والضريبة والجمارك.

## 2. مواعيد التقديم الشهرية والربع سنوية
- **الإقرار الشهري**: إلزامي للمنشآت التي تتجاوز توريداتها السنوية الخاضعة للضريبة 40 مليون ريال سعودي.
- **الإقرار الربع سنوي**: للمنشآت الصغيرة والمتوسطة التي تقل توريداتها عن 40 مليون ريال (ما لم تطلب التقديم الشهري).

يجب تقديم الإقرار وسداد الضريبة المستحقة في موعد أقصاه اليوم الأخير من الشهر الذي يلي انتهاء الفترة الضريبية.

## 3. الروتين الشهري في 5 خطوات لمطابقة الإقرار
1. **مراجعة سجل المبيعات**: حصر كافة الفواتير المصدرة والتأكد من مطابقة ضريبة المخرجات مع الدفاتر.
2. **فحص فواتير المشتريات**: التأكد من صحة الأرقام الضريبية للموردين واكتمال الفواتير النظامية.
3. **تسوية الإشعارات الدائنة والمدينة**: خصم المرتجعات أو الفواتير المعدلة خلال الفترة.
4. **احتساب صافي الضريبة**: خصم ضريبة المدخلات من ضريبة المخرجات لتحديد المبلغ المستحق للهيئة.
5. **المراجعة النهائية والاعتماد**: تدقيق الأرقام قبل إدخالها في بوابة الهيئة تجنباً للغرامات.
    `,
    faqs: [
      {
        qEn: "What is the penalty for late VAT return filing in Saudi Arabia?",
        qAr: "ما هي غرامة التأخر في تقديم الإقرار الضريبي لهيئة الزكاة؟",
        aEn: "Late filing penalties range between 5% and 25% of the tax due, plus additional monthly penalties on overdue tax amounts.",
        aAr: "تتراوح غرامة التأخر في تقديم الإقرار بين 5% إلى 25% من قيمة الضريبة المستحقة، إضافة لغرامات التأخر في السداد عن كل شهر.",
      },
    ],
  },
  {
    slug: "gps-fleet-tracking-wasl-integration-explained",
    titleEn: "GPS Fleet Tracking and WASL Integration: Explained for Saudi Fleet Owners",
    titleAr: "تتبع المركبات بنظام GPS والتكامل مع منصة وصل: دليل ملاك الأساطيل بالمملكة",
    excerptEn:
      "Everything transport and contracting managers need to know about Transport General Authority (TGA) regulations, WASL platform requirements, and telematics benefits.",
    excerptAr:
      "كل ما يحتاجه مديرو الحركة والنقل لمعرفته حول لوائح الهيئة العامة للنقل وشروط الربط مع منصة وصل ومزايا التتبع المتقدم.",
    authorEn: "TGL Telematics Engineering",
    authorAr: "فريق هندسة التتبع والأساطيل في TGL",
    date: "2026-09-18",
    readTimeEn: "6 min read",
    readTimeAr: "6 دقائق قراءة",
    categoryEn: "Fleet & Dashcam",
    categoryAr: "تتبع الأسطول والكاميرات",
    targetServiceSlug: "gps-fleet-tracking",
    tocEn: [
      { id: "what-is-wasl", title: "1. What is WASL and Who Must Comply?" },
      { id: "how-wasl-data-flows", title: "2. How Vehicle Telemetry Flows to the Platform" },
      { id: "commercial-benefits", title: "3. Tangible Commercial Benefits Beyond Compliance" },
      { id: "hardware-durability", title: "4. Hardware Durability in Saudi Weather" },
      { id: "tgl-wasl-ready-path", title: "5. The TGL WASL-Ready Approach" },
    ],
    tocAr: [
      { id: "what-is-wasl", title: "1. ما هي منصة وصل وما هي القطاعات الملزمة بها؟" },
      { id: "how-wasl-data-flows", title: "2. آلية بث ونقل بيانات المركبات للمنصة" },
      { id: "commercial-benefits", title: "3. العوائد التشغيلية للتتبع بعيداً عن مجرد الالتزام" },
      { id: "hardware-durability", title: "4. معايير متانة أجهزة التتبع في حرارة الصيف" },
      { id: "tgl-wasl-ready-path", title: "5. حلول TGL المهيأة للتكامل مع منصة وصل" },
    ],
    contentEn: `
## 1. What is WASL and Who Must Comply?
WASL (منصة وصل) is the electronic platform established by the Saudi Transport General Authority (TGA) to monitor and govern commercial transport across the Kingdom.

Commercial transport sectors mandated to interface with WASL include:
- Cargo transport and heavy freight haulers
- Bus and passenger transit operators
- Car rental and vehicle leasing companies
- Cold-chain food and pharmaceutical transport
- Towing and specialized recovery vehicles

## 2. How Vehicle Telemetry Flows to the Platform
To comply with regulatory standards, an onboard tracking device transmits telemetry data:
- Exact GPS coordinates and timestamp
- Vehicle speed and heading
- Operating status (engine on/off/idling)
- Driver identification (where applicable)
- Cargo temperature sensor values (for refrigerated freight)

This data flows securely via cellular 4G networks to your cloud tracking software and forwards specified fields to the regulatory gateway.

## 3. Tangible Commercial Benefits Beyond Compliance
Savvy Saudi fleet operators utilize telematics not just for regulatory compliance, but to unlock substantial bottom-line savings:
- **Fuel Theft & Excessive Idling**: Reducing non-productive AC idling during Saudi summers saves up to 20% on fuel bills.
- **Unauthorized Side Jobs**: Instant alerts when company vans travel outside designated geofenced operating zones after business hours.
- **Accident Reduction**: Monitoring speeding and harsh braking curbs vehicle wear and tear.

## 4. Hardware Durability in Saudi Weather
Inferior GPS trackers with cheap internal lithium batteries frequently malfunction or overheat under ambient temperatures exceeding 50°C. Professional fleets require automotive-grade trackers with high heat thresholds and internal supercapacitors.
    `,
    contentAr: `
## 1. ما هي منصة وصل وما هي القطاعات الملزمة بها؟
منصة "وصل" هي المنظومة الإلكترونية التي طورتها الهيئة العامة للنقل في المملكة لربط وتتبع المركبات التجارية وإدارة عمليات النقل وفق أعلى معايير السلامة والتنظيم.

تشمل الأنشطة الملزمة بالربط:
- شاحنات النقل الثقيل ونقل البضائع والمهمات
- حافلات نقل الركاب والوفود
- شركات تأجير السيارات والمركبات
- مركبات التبريد ونقل الأغذية والمستلزمات الطبية
- سطحات نقل السيارات ومركبات الطوارئ

## 2. آلية بث ونقل بيانات المركبات للمنصة
يرسل جهاز التتبع المثبت في الشاحنة حزم بيانات دورية تشمل:
- إحداثيات الموقع الدقيقة والوقت
- سرعة المركبة واتجاه سيرها
- حالة تشغيل المحرك (تشغيل، توقف، خمول)
- قراءات حساسات الحرارة في شاحنات التبريد

## 3. العوائد التشغيلية للتتبع بعيداً عن مجرد الالتزام
- **تقليل هدر الوقود**: الحد من ترك المحرك والمكيف يعملان لساعات طويلة أثناء الانتظار.
- **منع استخدام السيارات خارج الدوام**: تنبيهات فورية عند تحرك المركبة بعد ساعات العمل الرسمية.
- **المحافظة على عمر المحركات**: تقليل السرعات الزائدة والفرملة العنيفة.
    `,
    faqs: [
      {
        qEn: "Can refrigerated trucks transmit live temperatures to our dispatchers?",
        qAr: "هل تدعم الأجهزة بث درجات حرارة ثلاجة الشاحنة لغرفة العمليات مباشرة؟",
        aEn: "Yes, calibrated BLE or wired digital temperature sensors stream real-time cabin readings and trigger alerts if thresholds deviate.",
        aAr: "نعم، تتيح حساسات الحرارة الرقمية المعتمدة مراقبة مستمرة للبرودة وإطلاق تنبيهات فورية في حال حدوث أي خلل في التبريد.",
      },
    ],
  },
  {
    slug: "ai-dashcams-reducing-accidents-insurance-disputes",
    titleEn: "AI Dashcams: Reducing Fleet Accidents and Insurance Disputes in KSA",
    titleAr: "كاميرات الذكاء الاصطناعي (AI Dashcam): خفض حوادث الأساطيل وحسم نزاعات التأمين بالسعودية",
    excerptEn:
      "How dual-facing edge AI cameras detect driver fatigue, prevent collisions on Saudi highways, and deliver undeniable evidence for Najm and insurance claims.",
    excerptAr:
      "كيف تساهم كاميرات الذكاء الاصطناعي في رصد تشتت وانشغال السائقين، ومنع الحوادث على الطرق السريعة، وتوفير أدلة قاطعة لتقارير نجم والتأمين.",
    authorEn: "TGL Telematics Engineering",
    authorAr: "فريق هندسة التتبع والأساطيل في TGL",
    date: "2026-10-02",
    readTimeEn: "5 min read",
    readTimeAr: "5 دقائق قراءة",
    categoryEn: "Fleet & Dashcam",
    categoryAr: "تتبع الأسطول والكاميرات",
    targetServiceSlug: "ai-dashcam-monitoring",
    tocEn: [
      { id: "the-rising-cost-of-fleet-incidents", title: "1. The Rising Cost of Fleet Incidents in Saudi Arabia" },
      { id: "how-edge-ai-works", title: "2. How Edge AI Dashcams Operate in Real Time" },
      { id: "dms-vs-adas", title: "3. DMS vs ADAS: Dual-Zone Protection" },
      { id: "evidence-for-najm", title: "4. Instant Evidence for Najm and Insurance Disallowances" },
      { id: "implementation-best-practices", title: "5. Implementation Best Practices" },
    ],
    tocAr: [
      { id: "the-rising-cost-of-fleet-incidents", title: "1. التكاليف المرتفعة لحوادث الأساطيل في المملكة" },
      { id: "how-edge-ai-works", title: "2. كيف تعمل كاميرات الذكاء الاصطناعي في الوقت الفعلي" },
      { id: "dms-vs-adas", title: "3. الفرق بين حماية الطريق (ADAS) ومراقبة السائق (DMS)" },
      { id: "evidence-for-najm", title: "4. توثيق رسمي قاطع لتقارير نجم وشركات التأمين" },
      { id: "implementation-best-practices", title: "5. أفضل الممارسات لتركيب وتشغيل الكاميرات" },
    ],
    contentEn: `
## 1. The Rising Cost of Fleet Incidents in Saudi Arabia
Operating commercial vehicles across extensive highway corridors like Riyadh–Dammam, Makkah–Madinah, or the Northern borders entails serious risk. Distracted driving—particularly mobile phone usage and driver fatigue—remains the leading cause of heavy vehicle collisions.

When an incident occurs, commercial vehicles frequently face disputed liability, prolonged insurance settlement delays, and severe operational disruption.

## 2. How Edge AI Dashcams Operate in Real Time
Unlike passive legacy dashboard cameras that merely record video to an SD card for post-incident review, modern **Edge AI Dashcams** analyze visual feeds directly inside the device processor at 30 frames per second.

When an unsafe condition is detected, the device executes two immediate actions:
1. **In-Cabin Spoken Alert**: An immediate voice prompts the driver (e.g., *"Please keep your eyes on the road"* or *"Maintain safe distance"*).
2. **Cloud Event Upload**: A short 15–20 second HD video clip capturing 10 seconds before and after the event is uploaded to the fleet manager's dashboard.

## 3. DMS vs ADAS: Dual-Zone Protection
- **Driver Monitoring System (DMS)**: The cabin-facing camera detects eye closure (fatigue/micro-sleeps), yawning, mobile phone handling, smoking, and seatbelt neglect.
- **Advanced Driver Assistance System (ADAS)**: The road-facing camera measures following distance to vehicles ahead, warns of rapid tailgating, lane drift, and pedestrian proximity.

## 4. Instant Evidence for Najm and Insurance Disallowances
When commercial drivers are falsely blamed for accidents, high-definition time-stamped video evidence with GPS coordinates and recorded vehicle speed resolves disputes instantly. Najm adjusters and corporate insurance underwriters cannot dispute synchronized front-and-cabin video evidence.
    `,
    contentAr: `
## 1. التكاليف المرتفعة لحوادث الأساطيل في المملكة
إن تسيير شاحنات وسيارات الشركات عبر الطرق السريعة الطويلة يواجه تحديات حقيقية، حيث يُعد انشغال السائق بالهاتف المحمول أو الإرهاق والنعاس من أبرز أسباب الحوادث المرورية.

وعند وقوع أي حادث، تتعرض الشركة لنزاعات حول نسبة الخطأ، وتأخر مطالبات التأمين، وتوقف المركبة عن العمل.

## 2. كيف تعمل كاميرات الذكاء الاصطناعي في الوقت الفعلي
على عكس الكاميرات التقليدية التي تكتفي بالتسجيل في الذاكرة، تقوم كاميرات الذكاء الاصطناعي (Edge AI) بمعالجة الصورة وتحليل سلوك القيادة لحظة بلحظة:
- تنبيه صوتي فوري ينبه السائق داخل السيارة للتركيز في الطريق فور رصد إغماض العينين أو مسك الجوال.
- رفع فوري لمقطع فيديو مدته 20 ثانية إلى السحابة لإشعار مدير الحركة فور وقوع فرملة عنيفة أو اصطدام.

## 3. حماية الطريق ومراقبة مقصورة القيادة
- **مراقبة السائق (DMS)**: عدسة داخلية ترصد النعاس، التشتت، التحدث في الهاتف، وعدم ارتداء حزام الأمان.
- **مساعدة السائق (ADAS)**: عدسة خارجية تقيس مسافة الأمان مع السيارات الأمامية وتحذر من خطر الاصطدام.

## 4. حسم النزاعات مع نجم وشركات التأمين
يوفر التسجيل المصور عالي الدقة والمقترن بالسرعة وإحداثيات الموقع دليلاً مادياً قاطعاً يثبت براءة سائق شركتك في الحوادث، مما يسرع إنهاء الإجراءات والحصول على التعويضات.
    `,
    faqs: [
      {
        qEn: "Can drivers disable or unplug the AI dashcam?",
        qAr: "هل يستطيع السائق فصل الكاميرا أو تعطيل التسجيل؟",
        aEn: "No. The system connects directly to the vehicle's fuse box with tamper-resistant wiring and lockable memory card compartments, triggering instant alerts if disconnected.",
        aAr: "لا، يتم توصيل الكاميرا مباشرة بأسلاك مخفية ومحكمة ومفتاح قفل لصندوق الذاكرة، ويرسل النظام تنبيهاً لغرفة العمليات فوراً في حال محاولة فصلها.",
      },
    ],
  },
  {
    slug: "starting-company-saudi-arabia-it-setup-checklist",
    titleEn: "Starting a Company in Saudi Arabia: The Complete IT Setup Checklist",
    titleAr: "تأسيس شركة في السعودية: قائمة التحقق الشاملة للبنية التقنية والرقمية",
    excerptEn:
      "A pragmatic IT checklist for new Saudi CRs and MISA investors: Commercial Registration, domain registration, professional email, ZATCA ERP, and web presence.",
    excerptAr:
      "الدليل العملي لتأسيس البنية الرقمية للسجلات التجارية الجديدة واستثمارات وزارة الاستثمار: النطاقات، البريد، الفوترة، والموقع الإلكتروني.",
    authorEn: "TGL Enterprise Tech Desk",
    authorAr: "فريق TGL للاستشارات التقنية",
    date: "2026-10-15",
    readTimeEn: "8 min read",
    readTimeAr: "8 دقائق قراءة",
    categoryEn: "Company Setup",
    categoryAr: "تأسيس الشركات",
    targetServiceSlug: "company-profile-branding",
    tocEn: [
      { id: "saudi-business-landscape", title: "1. The Modern Saudi Business Landscape" },
      { id: "phase-1-brand-identity", title: "2. Phase 1: Brand Identity & Commercial Presentation" },
      { id: "phase-2-digital-presence", title: "3. Phase 2: Domain, Website & Professional Email" },
      { id: "phase-3-zatca-compliance", title: "4. Phase 3: ZATCA Phase 2 E-Invoicing & Accounting" },
      { id: "phase-4-fleet-it", title: "5. Phase 4: Fleet & Operational Mobility" },
      { id: "the-one-partner-advantage", title: "6. The One-Partner Advantage for Saudi SMEs" },
    ],
    tocAr: [
      { id: "saudi-business-landscape", title: "1. بيئة الأعمال الحديثة في المملكة العربية السعودية" },
      { id: "phase-1-brand-identity", title: "2. المرحلة الأولى: الهوية البصرية والملف التعريفي" },
      { id: "phase-2-digital-presence", title: "3. المرحلة الثانية: النطاق والبريد والموقع الإلكتروني" },
      { id: "phase-3-zatca-compliance", title: "4. المرحلة الثالثة: نظام الفوترة والمحاسبة ZATCA" },
      { id: "phase-4-fleet-it", title: "5. المرحلة الرابعة: حركة المركبات والأسطول" },
      { id: "the-one-partner-advantage", title: "6. ميزة الاعتماد على شريك تقني واحد لمؤسستك" },
    ],
    contentEn: `
## 1. The Modern Saudi Business Landscape
Setting up a new commercial establishment or foreign-invested subsidiary (MISA) in Saudi Arabia is faster and more streamlined than ever before. However, operating smoothly in the Kingdom requires immediate adherence to digital governance frameworks: the Ministry of Commerce, ZATCA electronic invoicing, the Ministry of Human Resources (Qiwa), and government procurement on Etimad.

Here is the structured IT and digital checklist required to launch with full commercial credibility.

## 2. Phase 1: Brand Identity & Commercial Presentation
- **Corporate Logo**: High-resolution vector identity compliant with Saudi cultural guidelines and intellectual property standards.
- **Bilingual Company Profile**: A 12–20 page executive presentation outlining your capabilities, executive leadership, safety policies, and service scope, structured to pass corporate prequalification.
- **Official Stationery Suite**: Standardized letterheads, quotation templates, and employee business cards displaying your Commercial Registration (CR) and Tax Identification Number (TIN).

## 3. Phase 2: Domain, Website & Professional Email
- **Domain Strategy**: Securing your .sa / .com.sa (via SaudiNIC accredited registrars) alongside your global .com.
- **Professional Cloud Email**: Google Workspace or Microsoft 365 setup on your domain with SPF, DKIM, and DMARC DNS verification to guarantee inbox delivery for proposals.
- **Bilingual Corporate Website**: High-speed, mobile-optimized website in Arabic and English, featuring click-to-WhatsApp capabilities and structured schema markup.
- **Google Business Profile**: Verified presence on Google Maps in your commercial district (Riyadh, Jeddah, Dammam, etc.).

## 4. Phase 3: ZATCA Phase 2 E-Invoicing & Accounting
- **ZATCA-Ready ERP System**: A cloud billing system capable of generating Phase 2 compliant XML/UBL invoices with cryptographic signatures and QR codes from day one.
- **Saudi Chart of Accounts**: Standardized ledger configured for Saudi Arabia's 15% VAT filing periods.
- **Remote Bookkeeping Cadence**: A monthly workflow to reconcile bank deposits against invoices.

## 5. Phase 4: Fleet & Operational Mobility
- If operating delivery or service vehicles: deploy 4G GPS telematics ready for WASL platform integration, preventing vehicle misuse and monitoring driver safety.

## 6. The One-Partner Advantage for Saudi SMEs
Contracting separate vendors for web design, email hosting, accounting software, and vehicle tracking creates finger-pointing and administrative headaches. TGL Technologies unifies all these requirements under one predictable, SME-friendly partner.
    `,
    contentAr: `
## 1. بيئة الأعمال الحديثة في المملكة العربية السعودية
أصبح تأسيس الشركات في المملكة بفضل الأنظمة الحديثة أسرع وأكثر مرونة، لكن النجاح التجاري يتطلب الجاهزية الفورية للمتطلبات الرقمية: منصات وزارة التجارة، والفوترة الإلكترونية لهيئة الزكاة، وقوى، ومنصة اعتماد للمناقصات.

إليك قائمة التحقق الأساسية لبناء منظومتك التقنية باحترافية:

## 2. المرحلة الأولى: الهوية البصرية والملف التعريفي
- **الشعار الرسمي**: تصميم متجهي عالي الجودة يعكس احترافية شركتك ويحفظ حقوقك الفكرية.
- **الملف التعريفي (Company Profile)**: ملف متكامل (عربي/إنجليزي) يوضح خدماتك وسياستك التشغيلية للمناقصات.
- **المطبوعات والمراسلات**: أوراق المراسلات الرسمية التي تتضمن رقم السجل التجاري والرقم الضريبي.

## 3. المرحلة الثانية: النطاق والبريد والموقع الإلكتروني
- **حجز النطاق الرسمي**: تسجيل نطاقك السعودي (.sa أو .com.sa) أو النطاقات الدولية.
- **البريد الإلكتروني المهني**: تفعيل حسابات بريد رسمية للموظفين لتعزيز الموثوقية أمام العملاء والشركاء.
- **موقع إلكتروني ثنائي اللغة**: متوافق تماماً مع الجوال ومجهز للظهور في محركات البحث.
- **خرائط جوجل (Google Business)**: توثيق موقع المنشأة الجغرافي ليسهل على العملاء الوصول إليك.

## 4. المرحلة الثالثة: نظام الفوترة والمحاسبة ZATCA
- **نظام ERP جاهز للفوترة**: برنامج سحابي يصدر فواتير متوافقة مع المرحلة الثانية من فاتورة.
- **دليل الحسابات السعودي**: تهيئة القيود وفق نسبة ضريبة القيمة المضافة 15%.
- **مسك الدفاتر**: تنظيم المستندات المحاسبية الشهرية لتفادي تراكم الفواتير.

## 5. المرحلة الرابعة: حركة المركبات والأسطول
- تجهيز مركبات التوزيع أو الميدان بأجهزة تتبع GPS متوافقة ومجهزة للربط مع منصة وصل.

## 6. ميزة الاعتماد على شريك تقني واحد
تشتت التعامل بين مصمم للموقع ومزود للبريد وشركة لبرنامج الفواتير يضيع الوقت ويزيد التكاليف. تقدم TGL كافة هذه الحلول بحزمة واحدة ميسرة ومصممة خصيصاً للشركات الصاعدة.
    `,
    faqs: [
      {
        qEn: "Can TGL handle all these setup steps before our physical office is open?",
        qAr: "هل يمكن لـ TGL تجهيز كل هذه المتطلبات قبل افتتاح مقرنا الفعلي؟",
        aEn: "Yes! Since all services are cloud-based, your branding, website, email, and ERP can be 100% operational before you even occupy a physical office.",
        aAr: "نعم بالتأكيد! نظراً لأن كافة الحلول سحابية ورقمية، يمكن إطلاق الهوية والموقع والبريد والـ ERP بالكامل قبل استلام المقر المكتبي.",
      },
    ],
  },
];
