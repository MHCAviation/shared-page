// src/components/FAQ.tsx
import React, { useMemo } from "react";
import BannerSearch from "./BannerSearch";
import styles from "./FAQ.module.css";
import { getFaqs } from "../lib/sanity";
import type { FAQItem, FAQProps } from "../types";

const defaultFaqs: FAQItem[] = [
  {
    _id: "default-1",
    question: "How do I get started?",
    answer: "We'll load the real FAQs from Sanity shortly...",
    order: 1,
    category: {
      _id: "default-cat",
      title: "General",
    },
  },
];

const ArrowIcon = () => (
  <svg
    className={styles.arrowIcon}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12H19M19 12L12 5M19 12L12 19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export { getFaqs };

const FAQ: React.FC<FAQProps & {
  inputValue: string;
  onInputChange?: (value: string) => void;
  onSearchSubmit?: () => void;
}> = ({
  title = "Advice and answers from the team",
  faqs,
  initialFaqs = defaultFaqs,
  description,
  basePath = "/",
  searchTerm,
  onSearchChange,
  inputValue,
  onInputChange,
  onSearchSubmit,
}) => {
  // Use faqs prop if provided, otherwise fallback to initialFaqs
  const faqList = faqs && faqs.length > 0 ? faqs : initialFaqs;

  // Use controlled searchTerm if provided, otherwise default to empty string
  const search = searchTerm ?? "";

  // Filter FAQs by search term
  const filteredFaqs = useMemo(() => {
    if (!search.trim()) return faqList;
    const lower = search.toLowerCase();
    return faqList.filter(
      (faq: FAQItem) =>
        faq.question.toLowerCase().includes(lower) ||
        faq.answer.toLowerCase().includes(lower)
    );
  }, [faqList, search]);

  // Group FAQs by category
  const groupedFaqs = useMemo(() => {
    if (!filteredFaqs.length) return new Map<string, { faqs: FAQItem[]; description: string }>();
    return filteredFaqs.reduce((groups: Map<string, { faqs: FAQItem[]; description: string }>, faq: FAQItem) => {
      const category = faq.category || { title: "Other", _id: "other" };
      const categoryTitle =
        category.title.charAt(0).toUpperCase() + category.title.slice(1);
      if (!groups.has(categoryTitle)) {
        groups.set(categoryTitle, {
          faqs: [],
          description: category.description || "",
        });
      }
      groups.get(categoryTitle)?.faqs.push(faq);
      return groups;
    }, new Map<string, { faqs: FAQItem[]; description: string }>());
  }, [filteredFaqs]);

  // Generate FAQ link based on page and table of contents
  const getFaqLink = (faq: FAQItem): string => {
    if (!faq.page) {
      return `/faq/${faq._id}`;
    }
    const pageSlug = faq.page.slug.current;
    const basePath = `/docs/${pageSlug}`;
    if (faq.page.tableOfContents && faq.page.tableOfContents.length > 0) {
      const raw = faq.page.tableOfContents[0].slug;
      const cleanSlug = raw.replace(/^#+/, "");
      return `${basePath}#${cleanSlug}`;
    }
    return basePath;
  };

  // Get description text for FAQ link
  const getFaqLinkText = (faq: FAQItem): string => {
    return faq.answer.substring(0, 120) + (faq.answer.length > 120 ? "..." : "");
  };

  return (
    <div className={styles.faqRoot}>
      <div
        className={styles.faqWrapper}
        style={{
          "--banner-image":
            "url('https://images.unsplash.com/photo-1507812984078-917a274065be?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0')",
        } as React.CSSProperties}
      >
        {/* Banner */}
        <BannerSearch
          title={title}
          description={description}
          inputValue={inputValue}
          onInputChange={onInputChange}
          onSearchSubmit={onSearchSubmit}
          basePath={basePath}
        />
        {/* FAQ Content */}
        <div className={styles.faqContent}>
          {search.trim() && (
            <div className={styles.searchResults}>
              <span>
                {filteredFaqs.length === 0
                  ? `No results for "${search}"`
                  : `Found ${filteredFaqs.length} result${
                      filteredFaqs.length === 1 ? "" : "s"
                    } for "${search}"`}
              </span>
              {onSearchChange && (
                <button
                  onClick={() => onSearchChange("")}
                  className={styles.clearSearch}
                >
                  Clear search
                </button>
              )}
            </div>
          )}
          <div className={styles.faqItems}>
            {filteredFaqs.length === 0 && search.trim() ? (
              <div className={styles.noResults}>
                No matching questions found. Try adjusting your search terms.
              </div>
            ) : (
              Array.from(groupedFaqs.entries()).map(
                ([category, value]: [string, { faqs: FAQItem[]; description: string }]) => (
                  <div key={category} className={styles.faqCategory}>
                    <h2 className={styles.faqCategoryTitle}>{category}</h2>
                    {value.description && (
                      <p className={styles.faqCategoryDescription}>
                        {value.description}
                      </p>
                    )}
                    {value.faqs.map((faq: FAQItem) => (
                      <a
                        key={faq._id}
                        href={getFaqLink(faq)}
                        className={styles.faqItem}
                      >
                        <div className={styles.faqItemContent}>
                          <div className={styles.faqItemMain}>
                            <h3 className={styles.faqQuestion}>
                              {faq.question}
                            </h3>
                            <p className={styles.faqDescription}>
                              {getFaqLinkText(faq)}
                            </p>
                          </div>
                          <ArrowIcon />
                        </div>
                      </a>
                    ))}
                  </div>
                )
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
