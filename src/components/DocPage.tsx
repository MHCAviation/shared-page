// src/components/DocPage.tsx
import React from "react";
import BannerSearch from "./BannerSearch";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { urlFor } from "../lib/sanity";
import styles from "./DocPage.module.css";
import Breadcrumb, { BreadcrumbItem } from "./Breadcrumb";

// ───────────────────────────────────────────────────
// Table Data Types
// ───────────────────────────────────────────────────
interface TableCell {
  column: string;
  content: PortableTextBlock[];
  width?: string;
}

interface TableRowData {
  cells: TableCell[];
}

interface TableValue {
  rows: TableRowData[];
  layoutOrientation?: "top" | "left";
}

interface DocPageProps {
  slug?: string;
  basePath?: string;
  pageData?: {
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
  };
  searchTerm?: string;
  onSearchChange?: (value: string) => void;
  breadcrumbItems?: BreadcrumbItem[];
}

const DocPage: React.FC<
  Omit<DocPageProps, "searchTerm"> & {
    inputValue: string;
    onInputChange?: (value: string) => void;
    onSearchSubmit?: () => void;
    breadcrumbItems?: BreadcrumbItem[];
  }
> = ({
  basePath = "/",
  pageData,
  inputValue,
  onInputChange,
  onSearchSubmit,
  breadcrumbItems,
}) => {
  const data = pageData;

  // If no data, show error (SSR/SSG: always pass pageData)
  if (!data) {
    return <div className={styles.error}>No data found.</div>;
  }

  const { title, authorName, authorImage, publishedAt, tableOfContents, body } =
    data;
  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const sortedToc = [...tableOfContents].sort((a, b) => a.order - b.order);
  const tocLookup = new Map(
    sortedToc.map((item) => [
      item._id,
      { title: item.title, slug: item.slug.replace(/^#+/, "") },
    ])
  );

  const portableComponents: PortableTextComponents = {
    block: {
      h2: ({ children }) => {
        const slugId = String(children).toLowerCase().replace(/\s+/g, "-");
        return <h2 id={slugId}>{children}</h2>;
      },
      h3: ({ children }) => {
        const slugId = String(children).toLowerCase().replace(/\s+/g, "-");
        return <h3 id={slugId}>{children}</h3>;
      },
      blockquote: ({ children }) => (
        <blockquote
          style={{
            borderLeft: "4px solid #ccc",
            margin: "1em 0",
            padding: "0.5em 1em",
            color: "#555",
            background: "#f9f9f9",
          }}
        >
          {children}
        </blockquote>
      ),
      normal: ({ children }) => <p>{children}</p>,
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc list-inside pl-4">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal list-inside pl-4">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li>{children}</li>,
      number: ({ children }) => <li>{children}</li>,
    },
    marks: {
      strong: ({ children }) => <strong>{children}</strong>,
      em: ({ children }) => <em>{children}</em>,
      underline: ({ children }) => <u>{children}</u>,
      code: ({ children }) => (
        <code
          style={{
            background: "#f4f4f4",
            padding: "0.2em 0.4em",
            borderRadius: "4px",
            fontSize: "0.95em",
          }}
        >
          {children}
        </code>
      ),
      link: ({ value, children }) => {
        const href = value?.href || "";
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#2563eb", textDecoration: "underline" }}
          >
            {children}
          </a>
        );
      },
    },
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) return null;
        const src320 = urlFor(value).width(320).auto("format").url();
        const src640 = urlFor(value).width(640).auto("format").url();
        const src800 = urlFor(value).width(800).auto("format").url();
        const src1200 = urlFor(value).width(1200).auto("format").url();
        return (
          <img
            src={src800}
            srcSet={`${src320} 320w, ${src640} 640w, ${src800} 800w, ${src1200} 1200w`}
            sizes="(max-width: 600px) 90vw, (max-width: 1200px) 60vw, 50vw"
            alt={value.alt || value.caption || "Image"}
            className={styles.portableImage}
          />
        );
      },
      reference: ({ value }) => {
        if (!value._ref) return null;
        const found = tocLookup.get(value._ref);
        return found ? (
          <h3 className={styles.sectionReferenceLink} id={found.slug}>
            {found.title}
          </h3>
        ) : null;
      },
      table: ({ value }: { value?: TableValue }) => {
        if (!value?.rows?.length) return null;

        const layout = value.layoutOrientation === "left" ? "left" : "top";
        const cols = value.rows[0].cells.map((c) => c.column);
        const widths = value.rows[0].cells.map((c) => c.width || "auto");

        if (layout === "top") {
          return (
            <div className="overflow-x-auto my-6">
              <table className="min-w-full table-auto border-collapse">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    {cols.map((head: string, i: number) => (
                      <th
                        key={head + i}
                        className="px-4 py-2 border border-gray-300 text-left"
                        style={{ width: widths[i] }}
                      >
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {value.rows.map((row, r) => (
                    <tr key={r} className="even:bg-gray-50">
                      {cols.map((col: string, ci: number) => {
                        const cell = row.cells.find((c) => c.column === col);
                        return (
                          <td
                            key={col + ci}
                            className="px-4 py-2 border border-gray-300 align-top break-words"
                            style={{ width: widths[ci], minWidth: widths[ci] }}
                          >
                            {cell?.content ? (
                              <PortableText
                                value={cell.content}
                                components={portableComponents}
                              />
                            ) : (
                              <span className="text-gray-400">—</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        // LEFT LAYOUT
        return (
          <div className="overflow-x-auto my-6">
            <table className="w-full table-auto border-collapse">
              <tbody>
                {value.rows.map((row, r) => {
                  const firstCell = row.cells[0];
                  return (
                    <tr key={r} className="even:bg-gray-50">
                      <th
                        className="px-4 py-2 border border-gray-300 text-left align-top break-words"
                        style={{ width: widths[0] }}
                      >
                        {firstCell?.column || "—"}
                      </th>
                      {cols.map((col, ci) => {
                        const cell = row.cells.find((c) => c.column === col);
                        if (ci === 0) return null; // already rendered as header
                        return (
                          <td
                            key={col + ci}
                            className="px-4 py-2 border border-gray-300 align-top break-words"
                            style={{ width: widths[ci], minWidth: widths[ci] }}
                          >
                            {cell?.content ? (
                              <PortableText
                                value={cell.content}
                                components={portableComponents}
                              />
                            ) : (
                              <span className="text-gray-400">—</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      },
    },
  };

  return (
    <div className={styles.docPageRoot}>
      <div
        className={styles.bannerWrapper}
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
          inputValue={inputValue}
          onInputChange={onInputChange}
          onSearchSubmit={onSearchSubmit}
          basePath={basePath}
        />
      </div>
      <div className={styles.container}>
        <aside className={styles.stickySidebar}>
          <div className={styles.sidebarInner}>
            <h3>Table Of Content</h3>
            <ul>
              {sortedToc.map((itm) => (
                <li key={itm._id}>
                  <a href={`#${itm.slug.replace(/^#+/, "")}`}>{itm.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <article className={styles.mainContent}>
          <div className={styles.breadcrumbs}>
            {breadcrumbItems && <Breadcrumb items={breadcrumbItems} />}
          </div>
          <h1 className={styles.pageTitle}>{title}</h1>
          <div className={styles.metaInfo}>
            {authorImage ? (
              <img
                src={authorImage}
                alt={authorName || "Author"}
                className={styles.authorImage}
              />
            ) : (
              <div className={styles.authorPlaceholder} />
            )}
            <div>
              {authorName && (
                <div className={styles.authorName}>Written by {authorName}</div>
              )}
              {formattedDate && (
                <div className={styles.publishedDate}>
                  Updated {formattedDate}
                </div>
              )}
            </div>
          </div>
          {sortedToc.length > 0 && (
            <section className={styles.tocInContent}>
              <h2>Table Of Content</h2>
              <ul>
                {sortedToc.map((itm) => (
                  <li key={itm._id} className={styles.tocItem}>
                    <a href={`#${itm.slug.replace(/^#+/, "")}`}>{itm.title}</a>
                  </li>
                ))}
              </ul>
            </section>
          )}
          <section className={styles.bodyContent}>
            <PortableText value={body} components={portableComponents} />
          </section>
        </article>
      </div>
    </div>
  );
};

export default DocPage;
