import React, { useEffect, useState } from "react";
import { getFaqs } from "../lib/sanity";
import type { FAQItem } from "../types";
import styles from "./FAQ.module.css";
import BannerSearch from "./BannerSearch";

interface SearchResultsProps {
  query?: string;
  from?: string;
  onNavigate?: (url: string) => void;
  onSearch?: (query: string) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  query: queryProp,
  from: fromProp,
  onNavigate,
  onSearch,
}) => {
  // Fallback to window.location for query/from if not provided
  let query = queryProp;
  let from = fromProp;
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    if (!query) query = params.get("query") || "";
    if (!from) from = params.get("from") || "/";
  }
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState(query || "");

  useEffect(() => {
    setSearchValue(query || "");
  }, [query]);

  useEffect(() => {
    getFaqs().then((data) => {
      setFaqs(data);
      setLoading(false);
    });
  }, []);

  const filteredFaqs = React.useMemo(() => {
    if (!searchValue.trim()) return [];
    const lower = searchValue.toLowerCase();
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(lower) ||
        faq.answer.toLowerCase().includes(lower)
    );
  }, [faqs, searchValue]);

  const handleClearSearch = () => {
    setSearchValue("");
    if (onNavigate) {
      onNavigate(from || "/");
    } else {
      window.location.assign(from || "/");
    }
  };

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (searchValue.trim()) {
      if (onSearch) {
        onSearch(searchValue.trim());
      } else {
        window.location.assign(
          `/search?query=${encodeURIComponent(
            searchValue.trim()
          )}&from=${encodeURIComponent(from || "/")}`
        );
      }
    }
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
        <BannerSearch
          title="Advice and answers from the team"
          description="Guides to configuring and using the platform, troubleshooting common issues, and more."
          inputValue={searchValue}
          onInputChange={setSearchValue}
          onSearchSubmit={handleSearchSubmit}
          basePath="/search"
        />
        <div className={styles.faqContent}>
          <button
            onClick={handleClearSearch}
            className={styles.clearSearch}
            type="button"
          >
            Clear search
          </button>
          {searchValue.trim() && !loading && (
            <div className={styles.searchResults}>
              Search for "{searchValue}" has {filteredFaqs.length} result
              {filteredFaqs.length !== 1 ? "s" : ""}
            </div>
          )}
          {loading ? (
            <div>Loading...</div>
          ) : filteredFaqs.length === 0 ? (
            <div>No results found.</div>
          ) : (
            <div className={styles.faqItems}>
              {filteredFaqs.map((faq) => (
                <a
                  key={faq._id}
                  href={
                    faq.page
                      ? `/docs/${faq.page.slug.current}`
                      : `/faq/${faq._id}`
                  }
                  className={styles.faqItem}
                  style={{ textDecoration: "none" }}
                >
                  <div className={styles.faqItemContent}>
                    <div className={styles.faqItemMain}>
                      <h3 className={styles.faqQuestion}>{faq.question}</h3>
                      <p className={styles.faqDescription}>
                        {faq.answer.substring(0, 120)}
                        {faq.answer.length > 120 ? "..." : ""}
                      </p>
                    </div>
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
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
