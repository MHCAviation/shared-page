// src/components/FAQ.tsx
import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom"; // ← import Link
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
  title = "Get Help",
  initialFaqs = defaultFaqs,
  description,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [faqs, setFaqs] = useState<FAQItem[]>(initialFaqs);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFaqs = async () => {
      try {
        setIsLoading(true);
        const sanityFaqs = await getFaqs();
        setFaqs(sanityFaqs || []);
      } catch (err) {
        setError("Failed to load FAQs. Please try again later.");
        console.error("Error loading FAQs:", err);
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
      // Remove any leading “#” characters:
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
        <div className={styles.banner}>
          <div className={styles.bannerOverlay} />
          <div className={styles.bannerContent}>
            <h1 className={styles.bannerTitle}>{title}</h1>
            {description && (
              <p className={styles.bannerDescription}>{description}</p>
            )}
            {/* Search Bar */}
            <div className={styles.searchBar}>
              <svg
                className={styles.searchIcon}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="text"
                className={styles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search answer or question"
              />
            </div>
          </div>
        </div>

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
              <div className={styles.loading}>Loading FAQs...</div>
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
                      <Link
                        key={faq._id}
                        to={getFaqLink(faq)} // ← use 'to' instead of 'href'
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
                      </Link>
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
