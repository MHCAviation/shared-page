// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import FAQ from "./components/FAQLocalWrapper";
import DocPage from "./components/DocPageLocalWrapper";

// Wrapper component to extract slug from URL params
const DocPageWrapper = () => {
  const { slug } = useParams<{ slug?: string }>();
  if (!slug) return <div>Missing slug</div>; // or render a 404 component
  return <DocPage slug={slug} />;
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root path ("/") → FAQ page */}
        <Route
          path="/"
          element={
            <FAQ
              title="Advice and answers from the team"
              description="Guides to configuring and using the platform, troubleshooting common issues, and more."
            />
          }
        />

        {/* Dynamic DocPage path: "/docs/:slug" */}
        <Route path="/docs/:slug" element={<DocPageWrapper />} />

        {/* Catch-all → redirect back to FAQ (or render a 404 component) */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
