// src/components/FAQ.tsx
import React, { useState, useMemo, useEffect } from "react";
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

const FAQ: React.FC<FAQProps> = ({
  title = "Advice and answers from the team",
  initialFaqs = defaultFaqs,
  description,
}) => {
  // Initialize search term from URL parameter
  const [searchTerm, setSearchTerm] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("search") || "";
  });
  const [faqs, setFaqs] = useState<FAQItem[]>(initialFaqs);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Update URL when search term changes
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (searchTerm) {
      params.set("search", searchTerm);
    } else {
      params.delete("search");
    }
    const newUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ""}`;
    window.history.replaceState({}, "", newUrl);
  }, [searchTerm]);

  useEffect(() => {
    const loadFaqs = async () => {
      try {
        setIsLoading(true);
        const sanityFaqs = await getFaqs();
        setFaqs(sanityFaqs || []);
      } catch (err) {
        setError("Failed to load Contents. Please try again later.");
        console.error("Error loading:", err);
      } finally {
        setIsLoading(false);
      }
    };
    loadFaqs();
  }, []);

  // Filter FAQs by search term
  const filteredFaqs = useMemo(() => {
    if (!searchTerm.trim()) return faqs;
    const lower = searchTerm.toLowerCase();
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(lower) ||
        faq.answer.toLowerCase().includes(lower)
    );
  }, [faqs, searchTerm]);

  // Group FAQs by category
  const groupedFaqs = useMemo(() => {
    if (!filteredFaqs.length) return new Map();
    return filteredFaqs.reduce((groups, faq) => {
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

    const pageSlug = faq.page.slug.current; // e.g. "getting-started"
    const basePath = `/docs/${pageSlug}`; // e.g. "/docs/getting-started"

    if (faq.page.tableOfContents && faq.page.tableOfContents.length > 0) {
      const raw = faq.page.tableOfContents[0].slug;
      // Remove any leading "#" characters:
      const cleanSlug = raw.replace(/^#+/, ""); // e.g. "#installation" → "installation"
      return `${basePath}#${cleanSlug}`; // now → "/docs/getting-started#installation"
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
        style={
          {
            "--banner-image":
              "url('https://images.unsplash.com/photo-1507812984078-917a274065be?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0')",
          } as React.CSSProperties
        }
      >
        {/* Banner */}
        <BannerSearch
          title={title}
          description={description}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {/* FAQ Content */}
        <div className={styles.faqContent}>
          {searchTerm.trim() && (
            <div className={styles.searchResults}>
              <span>
                {filteredFaqs.length === 0
                  ? `No results for "${searchTerm}"`
                  : `Found ${filteredFaqs.length} result${
                      filteredFaqs.length === 1 ? "" : "s"
                    } for "${searchTerm}"`}
              </span>
              <button
                onClick={() => setSearchTerm("")}
                className={styles.clearSearch}
              >
                Clear search
              </button>
            </div>
          )}

          <div className={styles.faqItems}>
            {isLoading ? (
              <div className={styles.loading}>Loading Contents...</div>
            ) : error ? (
              <div className={styles.error}>{error}</div>
            ) : filteredFaqs.length === 0 && searchTerm.trim() ? (
              <div className={styles.noResults}>
                No matching questions found. Try adjusting your search terms.
              </div>
            ) : (
              Array.from(groupedFaqs.entries()).map(
                ([category, { faqs, description }]) => (
                  <div key={category} className={styles.faqCategory}>
                    <h2 className={styles.faqCategoryTitle}>{category}</h2>
                    {description && (
                      <p className={styles.faqCategoryDescription}>
                        {description}
                      </p>
                    )}
                    {faqs.map((faq: FAQItem) => (
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
