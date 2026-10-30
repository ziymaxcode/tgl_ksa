import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { SEOHead } from "../components/SEOHead";
import { BLOG_ARTICLES } from "../data/blogData";
import { getBreadcrumbSchema } from "../data/seoSchemas";

export const BlogIndexPage: React.FC = () => {
  const { language, getLocalizedPath } = useLanguage();
  const isAr = language === "ar";

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: isAr ? "الرئيسية" : "Home", url: isAr ? "/ar/" : "/" },
    { name: isAr ? "المدونة المعرفية" : "Blog", url: isAr ? "/ar/blog" : "/blog" },
  ]);

  return (
    <>
      <SEOHead
        title={
          isAr
            ? "المدونة المعرفية: الفوترة الإلكترونية ZATCA، وأنظمة ERP، وتتبع الأسطول بالسعودية | TGL"
            : "Saudi SME Knowledge Base: ZATCA ERP, VAT & Fleet Telematics Guides | TGL Technologies"
        }
        description={
          isAr
            ? "أدلة إرشادية عملية حول المرحلة الثانية من الفوترة الإلكترونية (فاتورة)، وإقرارات ضريبة القيمة المضافة، والربط مع منصة وصل."
            : "Practical guides and checklists for Saudi SMEs: ZATCA Phase 2 Fatoora integration, 15% VAT filing, WASL fleet tracking, and IT setups."
        }
        canonicalPath="/blog"
        structuredData={[breadcrumbSchema]}
      />

      <section className="py-16 md:py-24 2xl:py-32 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200">
        <div className="site-container text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs xl:text-sm font-semibold">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span>{isAr ? "دليل المعرفة والامتثال للشركات" : "SME Insights & Compliance Guides"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight">
            {isAr
              ? "المدونة المعرفية لقطاع الأعمال في السعودية"
              : "Saudi Business & Technology Knowledge Base"}
          </h1>

          <p className="text-slate-600 max-w-2xl xl:max-w-3xl mx-auto text-sm sm:text-base xl:text-lg leading-relaxed">
            {isAr
              ? "مقالات وأدلة عملية كتبها مهندسو TGL لمساعدة الشركات في الامتثال للأنظمة، واختيار البرمجيات، وحماية أساطيل النقل."
              : "Practical checklists and regulatory analysis authored by TGL engineers to guide Saudi businesses through digital compliance."}
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24 2xl:py-32 bg-white">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 2xl:gap-12">
            {BLOG_ARTICLES.map((article) => (
              <article
                key={article.slug}
                className="group rounded-3xl bg-slate-50 hover:bg-white p-7 border border-slate-200/80 hover:border-blue-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-start"
              >
                <div className="space-y-4">
                  {/* Clean unboxed metadata with separators (Anti-Pill Rule) */}
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-blue-700">
                      {isAr ? article.categoryAr : article.categoryEn}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 font-mono text-[11px]">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {isAr ? article.readTimeAr : article.readTimeEn}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                    <Link to={getLocalizedPath(`/blog/${article.slug}`)}>
                      {isAr ? article.titleAr : article.titleEn}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {isAr ? article.excerptAr : article.excerptEn}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono text-[11px] flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>

                  <Link
                    to={getLocalizedPath(`/blog/${article.slug}`)}
                    className="font-bold text-blue-700 group-hover:text-blue-800 flex items-center gap-1 transition-colors"
                  >
                    <span>{isAr ? "اقرأ المقال كاملة" : "Read Guide"}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
