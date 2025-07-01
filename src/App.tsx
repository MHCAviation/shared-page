// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
// import FAQ from "./components/FAQLocalWrapper";
import DocPage from "./components/DocPageLocalWrapper";
import FAQCard from "./components/FAQCard";
import FAQ from "./components/FAQLocalWrapper";
import SearchResults from "./components/SearchResults";

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
        {/* Root path ("/") → FAQCard only */}
        <Route
          path="/"
          element={
            <div>
              <FAQCard />
            </div>
          }
        />
        {/* FAQ page route */}
        <Route path="/faq" element={<FAQ />} />
        {/* FAQ collection page route */}
        <Route path="/collection/:faq" element={<FAQ />} />
        {/* Dynamic DocPage path: "/docs/:slug" */}
        <Route path="/docs/:slug" element={<DocPageWrapper />} />
        {/* Search results page route */}
        <Route path="/search" element={<SearchResults />} />
        {/* Catch-all → redirect back to FAQCard */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
