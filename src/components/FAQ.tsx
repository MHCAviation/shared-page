// src/components/FAQ.tsx
import React, { useState, useMemo } from "react";
import "../faqs.css";

interface FAQItem {
  question: string;
  answer: string;
}

interface QuickLink {
  title: string;
  description: string;
}

interface FAQProps {
  title?: string;
  faqs?: FAQItem[];
  quickLinks?: QuickLink[];
  styles?: {
    primaryColor?: string;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
  };
}

const defaultQuickLinks: QuickLink[] = [
  {
    title: "Join the Community",
    description:
      "Post in our lively forum for quick help with apps, or just share your app!",
  },
  {
    title: "Read Documentation & Guides",
    description: "Learn at your own pace with our comprehensive guides.",
  },
  {
    title: "Hire an Expert",
    description:
      "Need a professional app fast and willing to pay? Certified experts & agencies are standing by.",
  },
];

const defaultFaqs: FAQItem[] = [
  {
    question: "How do I delete a Team folder?",
    answer:
      "You can delete a team folder from your dashboard by navigating to the folder settings.",
  },
  {
    question: "Why did you change the design of the app builder?",
    answer:
      "We updated the design to improve usability and add new features based on user feedback.",
  },
  {
    question: "When does my app update with changes?",
    answer:
      "Your app updates automatically when you publish changes from the builder.",
  },
  {
    question: "Will you help me build my app?",
    answer:
      "Yes! We offer various support options including documentation, community forums, and expert assistance.",
  },
];

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    className={`chevron-icon ${isOpen ? 'open' : ''}`}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    className="external-link-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FAQ: React.FC<FAQProps> = ({
  title = "Get Help",
  faqs = defaultFaqs,
  quickLinks = defaultQuickLinks,
  styles = {},
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const {
    primaryColor = "#000",
    backgroundColor = "#f8f9ff",
    textColor = "#222",
  } = styles;

  // Filter FAQs by searchTerm (case‐insensitive)
  const filteredFaqs = useMemo(() => {
    if (!searchTerm.trim()) return faqs;
    const lower = searchTerm.toLowerCase();
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(lower) ||
        faq.answer.toLowerCase().includes(lower)
    );
  }, [faqs, searchTerm]);

  const toggleAccordion = (idx: number) => {
    setOpenItems((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };
  const QuickLinksSection = () => (
    <div className="quick-links">
      <h2 className="quick-links-title">Quick Links</h2>
      <div className="quick-links-container">
        {quickLinks.map((link, idx) => (
          <div
            key={idx}
            className="quick-link-item"
            onClick={() => console.log(`Clicked: ${link.title}`)}
          >
            <div className="quick-link-header">
              <h3 className="quick-link-title">{link.title}</h3>
              <ExternalLinkIcon />
            </div>
            <p className="quick-link-description">{link.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (    <div 
      className="faq-wrapper"
      style={{ 
        "--bg-color": backgroundColor,
        "--text-color": textColor,
        "--primary-color": primaryColor
      } as React.CSSProperties}
    >
      {/* Banner */}
      <div className="faq-banner">
        <div className="banner-overlay" />
        <div className="banner-content">
          <h1 className="banner-title">{title}</h1>

          {/* Search Bar */}
          <div className="search-bar">            <svg className="search-icon" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
              />
            </svg>
            <input
              type="text"
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="FAQs, Videos, Documentation and Forum Posts"
            />
          </div>
        </div>
      </div>

      {/* Main container: Quick Links + FAQ side-by-side (desktop) or stacked (mobile) */}
      <div className="faq-container">
        {/* Quick Links (always first in DOM) */}
        <QuickLinksSection />

        {/* FAQs Section */}
        <div className="faq-list">
          <div className="faq-header">
            <h2 className="faq-title">General</h2>
            {searchTerm.trim() && (
              <div className="search-results">
                <span>
                  {filteredFaqs.length === 0
                    ? `No results for "${searchTerm}"`
                    : `Found ${filteredFaqs.length} result${
                        filteredFaqs.length === 1 ? "" : "s"
                      } for "${searchTerm}"`}
                </span>
                <button
                  onClick={() => setSearchTerm("")}
                  className="clear-search"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>

          <div className="faq-items">
            {filteredFaqs.length === 0 && searchTerm.trim() ? (
              <div className="no-results">
                No matching questions found. Try adjusting your search terms.
              </div>
            ) : (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openItems.includes(idx);
                return (
                  <div
                    key={idx}
                    className="faq-item"
                    onClick={() => toggleAccordion(idx)}
                  >
                    <div className="faq-item-header">
                      <h3 className={`faq-question ${isOpen ? "open" : ""}`}>
                        {faq.question}
                      </h3>
                      <ChevronIcon isOpen={isOpen} />
                    </div>
                    <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
