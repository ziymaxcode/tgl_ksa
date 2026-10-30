import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight, ChevronDown, BookOpen, Share2, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { SEOHead } from "../components/SEOHead";
import { BLOG_ARTICLES } from "../data/blogData";
import { SERVICES_DATA } from "../data/servicesData";
import { BRAND, buildWhatsAppUrl } from "../data/constants";
import { getArticleSchema, getBreadcrumbSchema, getFAQPageSchema } from "../data/seoSchemas";

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, getLocalizedPath } = useLanguage();
  const isAr = language === "ar";

  const article = BLOG_ARTICLES.find((a) => a.slug === slug) || BLOG_ARTICLES[0];
  const relatedService = SERVICES_DATA.find((s) => s.slug === article.targetServiceSlug) || SERVICES_DATA[0];

  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: isAr ? "الرئيسية" : "Home", url: isAr ? "/ar/" : "/" },
    { name: isAr ? "المدونة" : "Blog", url: isAr ? "/ar/blog" : "/blog" },
    { name: isAr ? article.titleAr : article.titleEn, url: `/blog/${article.slug}` },
  ]);

  const articleSchema = getArticleSchema(
    isAr ? article.titleAr : article.titleEn,
    isAr ? article.excerptAr : article.excerptEn,
    article.slug,
    article.date,
    isAr ? article.authorAr : article.authorEn,
    language
  );

  const faqSchema = getFAQPageSchema(
    article.faqs.map((f) => ({
      q: isAr ? f.qAr : f.qEn,
      a: isAr ? f.aAr : f.aEn,
    }))
  );

  return (
    <>
      <SEOHead
        title={
          isAr
            ? `${article.titleAr} | TGL Technologies`
            : `${article.titleEn} | TGL Technologies`
        }
        description={isAr ? article.excerptAr : article.excerptEn}
        canonicalPath={`/blog/${article.slug}`}
        ogType="article"
        structuredData={[articleSchema, breadcrumbSchema, faqSchema]}
      />

      {/* Article Header */}
      <article className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-start">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li>
                <Link to={getLocalizedPath("/")} className="hover:text-blue-700">
                  {isAr ? "الرئيسية" : "Home"}
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link to={getLocalizedPath("/blog")} className="hover:text-blue-700">
                  {isAr ? "المدونة" : "Blog"}
                </Link>
              </li>
              <li>/</li>
              <li className="font-semibold text-slate-800 truncate">
                {isAr ? article.categoryAr : article.categoryEn}
              </li>
            </ol>
          </nav>

          {/* Clean Unboxed Metadata (Zero-Pill Rule) */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
            <span className="font-bold text-blue-700">
              {isAr ? article.categoryAr : article.categoryEn}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-slate-400" />
              {isAr ? article.authorAr : article.authorEn}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 font-mono">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {article.date}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 font-mono">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {isAr ? article.readTimeAr : article.readTimeEn}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            {isAr ? article.titleAr : article.titleEn}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pb-8 border-b border-slate-200">
            {isAr ? article.excerptAr : article.excerptEn}
          </p>

          {/* Table of Contents Box */}
          <div className="my-8 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              <BookOpen className="w-4 h-4 text-blue-700" />
              <span>{isAr ? "محتويات المقال / فهرس الدليل:" : "Table of Contents:"}</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {(isAr ? article.tocAr : article.tocEn).map((item) => (
                <li key={item.id} className="hover:text-blue-700 transition-colors">
                  <a href={`#${item.id}`} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Body Content with Formatted Headings */}
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base space-y-6">
            <div className="whitespace-pre-line">
              {isAr ? article.contentAr : article.contentEn}
            </div>
          </div>

          {/* Connected Service Box */}
          <div className="my-12 p-7 rounded-3xl bg-blue-50/70 border border-blue-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700">
                {isAr ? "حل تقني متصل بهذا الموضوع" : "Related Technology Solution"}
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {isAr ? relatedService.titleAr : relatedService.titleEn}
              </h3>
              <p className="text-xs text-slate-600 max-w-md">
                {isAr ? relatedService.shortDescAr : relatedService.shortDescEn}
              </p>
            </div>

            <Link
              to={getLocalizedPath(`/${relatedService.slug}`)}
              className="px-5 py-3 rounded-full text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 transition-all shrink-0 flex items-center gap-1.5 shadow-sm"
            >
              <span>{isAr ? "استكشف النظام" : "Explore Solution"}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </Link>
          </div>

          {/* FAQ Block */}
          {article.faqs.length > 0 && (
            <div className="my-12 pt-8 border-t border-slate-200 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                {isAr ? "الأسئلة الشائعة حول الموضوع:" : "Common Questions Regarding this Topic:"}
              </h3>

              <div className="space-y-3">
                {article.faqs.map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden"
                    >
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : idx)}
                        className="w-full p-4 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-700 transition-colors cursor-pointer text-xs sm:text-sm text-start"
                      >
                        <span>{isAr ? faq.qAr : faq.qEn}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                            isOpen ? "rotate-180 text-blue-600" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-2.5">
                          {isAr ? faq.aAr : faq.aEn}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
};
