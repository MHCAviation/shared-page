import React, { useState, useEffect } from "react";
import DocPage, { getPageData } from "./DocPage";
import type { PortableTextBlock } from "@portabletext/types";

interface DocPageLocalWrapperProps {
  slug: string;
  basePath?: string | "/";
}

const DocPageLocalWrapper: React.FC<DocPageLocalWrapperProps> = ({
  slug,
  basePath = "/",
}) => {
  const [inputValue, setInputValue] = useState("");
  const [pageData, setPageData] = useState<{
    title: string;
    authorName?: string;
    authorImage?: string;
    publishedAt?: string;
    tableOfContents: {
      _id: string;
      title: string;
      slug: string;
      order: number;
      subsections?: { title: string; slug: string }[];
    }[];
    body: PortableTextBlock[];
  } | null>(null);

  useEffect(() => {
    getPageData(slug).then(setPageData);
  }, [slug]);

  const handleSearchSubmit = () => {
    if (inputValue.trim()) {
      window.location.assign(
        `${basePath}?search=${encodeURIComponent(inputValue.trim())}`
      );
    }
  };

  if (!pageData) return <div>Loading…</div>;
  return (
    <DocPage
      basePath={basePath}
      pageData={pageData}
      inputValue={inputValue}
      onInputChange={setInputValue}
      onSearchSubmit={handleSearchSubmit}
    />
  );
};

export default DocPageLocalWrapper;
