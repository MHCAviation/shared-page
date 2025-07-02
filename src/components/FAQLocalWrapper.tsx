import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getFaqs } from "../lib/sanity";
import type { FAQItem, FAQProps } from "../types";
import FAQ from "./FAQ";

const FAQLocalWrapper: React.FC<FAQProps> = ({ basePath = "collection" }) => {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const category = query.get("category") || location.pathname.split("/").pop();

  useEffect(() => {
    getFaqs().then(setFaqs);
  }, []);

  const handleSearchSubmit = () => {
    if (inputValue.trim()) {
      navigate(
        `/search?query=${encodeURIComponent(
          inputValue.trim()
        )}&from=${basePath}/${encodeURIComponent((category || "").toLowerCase())}`
      );
    }
  };

  return (
    <FAQ
      faqs={faqs}
      inputValue={inputValue}
      onInputChange={setInputValue}
      onSearchSubmit={handleSearchSubmit}
      breadcrumbItems={[
        { label: "All Collections", to: "/collection" },
        ...(category
          ? [
              {
                label: category.charAt(0).toUpperCase() + category.slice(1),
                to: location.pathname + location.search,
              },
            ]
          : []),
      ]}
    />
  );
};

export default FAQLocalWrapper;
