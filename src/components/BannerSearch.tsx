import React from "react";
import styles from "./BannerSearch.module.css";

interface BannerSearchProps {
  title: string;
  description?: string;
  searchTerm: string;
  onSearchChange?: (value: string) => void;
  placeholder?: string;
  redirectToFaq?: boolean;
  basePath?: string;
}

const BannerSearch: React.FC<BannerSearchProps> = ({
  title,
  description,
  searchTerm,
  onSearchChange,
  placeholder = "Search answer or question",
  redirectToFaq = false,
  basePath = "/",
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (redirectToFaq && searchTerm.trim()) {
      window.location.assign(`${basePath}?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && redirectToFaq && searchTerm.trim()) {
      e.preventDefault();
      window.location.assign(`${basePath}?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div className={styles.banner}>
      <div className={styles.bannerOverlay} />
      <div className={styles.bannerContent}>
        <h1 className={styles.bannerTitle}>{title}</h1>
        {description && <p className={styles.bannerDescription}>{description}</p>}
        {/* Search Bar */}
        <form onSubmit={handleSubmit} className={styles.searchBar}>
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
            onChange={onSearchChange ? (e) => onSearchChange(e.target.value) : undefined}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
          />
        </form>
      </div>
    </div>
  );
};

export default BannerSearch; 