import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./FAQ.module.css";
import BannerSearch from "./BannerSearch";
import { getFaqs } from "../lib/sanity";
import type { FAQItem } from "../types";

const BANNER_IMAGE =
  "url('https://images.unsplash.com/photo-1507812984078-917a274065be?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0')";
const FAQ_BANNER_TITLE = "Advice and answers from the team";
const FAQ_BANNER_DESCRIPTION =
  "Guides to configuring and using the platform, troubleshooting common issues, and more.";

const GeneralIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#1a1a1a"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      ry="2"
      stroke="#1a1a1a"
      fill="#f3f4f6"
    />
    <path d="M3 9h18M9 21V9" />
  </svg>
);

const FAQCard: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  // Sync search input with URL search param
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get("search") || "";
    setSearchValue(search);
  }, [location.search]);

  useEffect(() => {
    getFaqs().then((data) => {
      setFaqs(data);
      setLoading(false);
    });
  }, []);

  // Group FAQs by category
  const categories = React.useMemo(() => {
    const map = new Map();
    faqs.forEach((faq) => {
      const cat = faq.category?.title || "General";
      if (!map.has(cat)) {
        map.set(cat, {
          title: cat,
          description: faq.category?.description || "",
          count: 1,
        });
      } else {
        map.get(cat).count++;
      }
    });
    return Array.from(map.values());
  }, [faqs]);

  // Capitalize each word in the category title
  function capitalizeWords(str: string) {
    return str.replace(/\b\w/g, (c) => c.toUpperCase());
  }

  const handleClick = (category: string) => {
    navigate(`/collection/${encodeURIComponent(category.toLowerCase())}`);
  };

  const handleSearchSubmit = () => {
    if (searchValue.trim()) {
      navigate(
        `/search?query=${encodeURIComponent(searchValue.trim())}&from=/`
      );
    }
  };

  return (
    <div>
      <div
        className={styles.faqWrapper}
        style={
          {
            "--banner-image": BANNER_IMAGE,
            padding: 0,
            minHeight: 0,
          } as React.CSSProperties
        }
      >
        <BannerSearch
          title={FAQ_BANNER_TITLE}
          description={FAQ_BANNER_DESCRIPTION}
          inputValue={searchValue}
          onInputChange={setSearchValue}
          onSearchSubmit={handleSearchSubmit}
          basePath="/"
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(340px, 1fr))",
          gap: "2rem",
          marginTop: 32,
          maxWidth: 900,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {loading ? (
          <div>Loading...</div>
        ) : (
          categories.map((cat) => (
            <div
              key={cat.title}
              className={styles.faqCategory}
              onClick={() => handleClick(cat.title)}
            >
              <div style={{ marginBottom: 16 }}>
                <GeneralIcon />
              </div>
              <h2 className={styles.faqCategoryTitle} style={{ margin: 0 }}>
                {capitalizeWords(cat.title)}
              </h2>
              <p
                className={styles.faqCategoryDescription}
                style={{ margin: "8px 0 16px 0" }}
              >
                {cat.description || "All articles in this category."}
              </p>
              <div className={styles.faqCategoryCount}>
                {cat.count} articles
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FAQCard;
