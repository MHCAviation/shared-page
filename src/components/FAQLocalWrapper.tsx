import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FAQ, { getFaqs } from "./FAQ";
import type { FAQItem, FAQProps } from "../types";

const FAQLocalWrapper: React.FC<Omit<FAQProps, "faqs" | "searchTerm" | "onSearchChange">> = (props) => {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(() => query.get("search") || "");
  const [inputValue, setInputValue] = useState(() => query.get("search") || "");

  // Keep state in sync with URL
  useEffect(() => {
    setSearchTerm(query.get("search") || "");
    setInputValue(query.get("search") || "");
    // eslint-disable-next-line
  }, [location.search]);

  useEffect(() => {
    getFaqs().then(setFaqs);
  }, []);

  // Update URL when searchTerm changes
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (searchTerm) {
      params.set("search", searchTerm);
    } else {
      params.delete("search");
    }
    navigate({ search: params.toString() }, { replace: true });
    // eslint-disable-next-line
  }, [searchTerm]);

  const handleSearchSubmit = () => {
    setSearchTerm(inputValue);
  };

  return (
    <FAQ
      {...props}
      faqs={faqs}
      searchTerm={searchTerm}
      onSearchChange={setSearchTerm}
      inputValue={inputValue}
      onInputChange={setInputValue}
      onSearchSubmit={handleSearchSubmit}
    />
  );
};

export default FAQLocalWrapper; 