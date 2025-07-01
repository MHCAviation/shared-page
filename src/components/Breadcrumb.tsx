import React from "react";
import { Link } from "react-router-dom";

export interface BreadcrumbItem {
  label: string;
  to: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" style={{ margin: "16px 0" }}>
      <ol style={{ display: "flex", listStyle: "none", padding: 0, margin: 0, fontSize: 14, color: "#666" }}>
        {items.map((item, idx) => (
          <li key={item.to} style={{ display: "flex", alignItems: "center" }}>
            {idx > 0 && <span style={{ margin: "0 8px" }}>/</span>}
            {idx < items.length - 1 ? (
              <Link to={item.to} style={{ color: "#2563eb", textDecoration: "none" }}>{item.label}</Link>
            ) : (
              <span style={{ color: "#111" }}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb; 