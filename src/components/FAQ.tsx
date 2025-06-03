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
    style={{
      transform: isOpen ? "rotate(180deg)" : "rotate(0)",
      transition: "transform 0.2s ease",
      minWidth: "20px",
    }}
    width="20"
    height="20"
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
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginLeft: "4px" }}
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

  // Quick Links section (always rendered first in DOM)
  const QuickLinksSection = () => (
    <div className="quick-links">
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        Quick Links
      </h2>
      <div className="quick-links-container">
        {quickLinks.map((link, idx) => (
          <div
            key={idx}
            className="quick-link-item"
            onClick={() => console.log(`Clicked: ${link.title}`)}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                {link.title}
              </h3>
              <ExternalLinkIcon />
            </div>
            <p style={{ color: "#666", fontSize: "0.85rem", margin: 0 }}>
              {link.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div
      style={{
        backgroundColor,
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        margin: 0,
        padding: 0,
      }}
    >
      {/* Banner */}
      <div
        style={{
          position: "relative",
          width: "100%",
          background: "#0f172a",
          padding: "4rem 0",
          marginBottom: "2rem",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507812984078-917a274065be?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.7,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: 1200,
            margin: "0 auto",
            textAlign: "center",
            padding: "0 1rem",
          }}
        >
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "bold",
              marginBottom: "2rem",
              color: "white",
              textShadow: "0 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            {title}
          </h1>

          {/* Search Bar */}
          <div
            style={{
              maxWidth: 800,
              margin: "0 auto",
              padding: "0.75rem 1.25rem",
              backgroundColor: "white",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              style={{ width: 20, height: 20, color: "#666", flexShrink: 0 }}
            >
              <path
                fill="currentColor"
                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
              />
            </svg>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="FAQs, Videos, Documentation and Forum Posts"
              style={{
                width: "100%",
                border: "none",
                backgroundColor: "transparent",
                fontSize: "1rem",
                color: textColor,
                outline: "none",
              }}
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1.5rem",
            }}
          >
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: 0 }}>
              General
            </h2>
            {searchTerm.trim() && (
              <div
                style={{
                  fontSize: "0.95rem",
                  color: "#666",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  {filteredFaqs.length === 0
                    ? `No results for "${searchTerm}"`
                    : `Found ${filteredFaqs.length} result${
                        filteredFaqs.length === 1 ? "" : "s"
                      } for "${searchTerm}"`}
                </span>
                <button
                  onClick={() => setSearchTerm("")}
                  style={{
                    background: "none",
                    border: "none",
                    padding: "4px 8px",
                    cursor: "pointer",
                    color: primaryColor,
                    fontSize: "0.9rem",
                    borderRadius: "4px",
                    backgroundColor: "transparent",
                    transition: "background-color 0.2s ease",
                  }}
                  onMouseOver={(e) => {
                    (e.target as HTMLButtonElement).style.backgroundColor =
                      "#f1f3f9";
                  }}
                  onMouseOut={(e) => {
                    (e.target as HTMLButtonElement).style.backgroundColor =
                      "transparent";
                  }}
                >
                  Clear search
                </button>
              </div>
            )}
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            {filteredFaqs.length === 0 && searchTerm.trim() ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "2rem",
                  color: "#666",
                  backgroundColor: "white",
                  borderRadius: "8px",
                }}
              >
                No matching questions found. Try adjusting your search terms.
              </div>
            ) : (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openItems.includes(idx);
                return (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: "white",
                      borderRadius: 8,
                      padding: "0.75rem 1rem",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                    onClick={() => toggleAccordion(idx)}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                      }}
                    >
                      <h3
                        style={{
                          fontWeight: 500,
                          fontSize: "1rem",
                          color: isOpen ? primaryColor : textColor,
                          margin: 0,
                        }}
                      >
                        {faq.question}
                      </h3>
                      <ChevronIcon isOpen={isOpen} />
                    </div>
                    <div
                      style={{
                        height: isOpen ? "auto" : "0",
                        overflow: "hidden",
                        opacity: isOpen ? 1 : 0,
                        transition: "all 0.3s ease",
                        marginTop: isOpen ? "0.75rem" : 0,
                        color: "#666",
                      }}
                    >
                      <p style={{ marginLeft: "0.5rem", lineHeight: 1.5 }}>
                        {faq.answer}
                      </p>
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
