// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FAQ from "./components/FAQ";
import DocPage from "./components/DocPage";

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
        <Route path="/docs/:slug" element={<DocPage />} />

        {/* Catch-all → redirect back to FAQ (or render a 404 component) */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
