import React, { useState, useEffect } from "react";
import DocPage from "./DocPage";
import { getPageData } from "../lib/sanity";
import type { PortableTextBlock } from "@portabletext/types";
import { useLocation, useNavigate } from "react-router-dom";

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
    categories?: { title: string; slug?: { current: string } }[];
    tableOfContents: {
      _id: string;
      title: string;
      slug: string;
      order: number;
      subsections?: { title: string; slug: string }[];
    }[];
    body: PortableTextBlock[];
  } | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getPageData(slug).then(setPageData);
  }, [slug]);

  const handleSearchSubmit = () => {
    if (inputValue.trim()) {
      navigate(
        `/search?query=${encodeURIComponent(
          inputValue.trim()
        )}&from=/faqs/${slug}`
      );
    }
  };

  if (!pageData) return <div>Loading…</div>;
  // Prefer category from Sanity, fallback to category from URL
  let category = pageData.categories?.[0];
  if (!category) {
    // Try to extract from URL: e.g. /collection/:faq/...
    const match = location.pathname.match(/\/collection\/([^/]+)/);
    if (match) {
      const raw = decodeURIComponent(match[1]).replace(/-/g, " ");
      category = {
        title: raw.charAt(0).toUpperCase() + raw.slice(1),
        slug: { current: match[1] },
      };
    }
  } else if (category.title) {
    category.title =
      category.title.charAt(0).toUpperCase() + category.title.slice(1);
  }
  return (
    <>
      <DocPage
        basePath={basePath}
        pageData={pageData}
        inputValue={inputValue}
        onInputChange={setInputValue}
        onSearchSubmit={handleSearchSubmit}
        breadcrumbItems={[
          { label: "All Collections", to: "/collection" },
          ...(category
            ? [
                {
                  label: category.title,
                  to: `/collection/${category.slug?.current || ""}`,
                },
              ]
            : []),
          { label: pageData.title, to: `/faqs/${slug}` },
        ]}
      />
    </>
  );
};

export default DocPageLocalWrapper;
