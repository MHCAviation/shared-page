import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface NotFoundProps {
  message?: string;
  styles?: {
    primaryColor?: string; // for button background
    secondaryColor?: string; // for secondary buttons
    textColor?: string;
    backgroundColor?: string;
    borderColor?: string;
    inputFocusColor?: string;
  };
}

const NotFound: React.FC<NotFoundProps> = ({
  message = "Page not found",
  styles = {},
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    primaryColor = "#0055FF",
    secondaryColor = "#E0EBFF",
    textColor = "white",
    backgroundColor = "#ffffff",
    borderColor = "#cbd5e0",
    inputFocusColor = "#0055FF",
  } = styles;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `/find-jobs?search=${encodeURIComponent(
        searchTerm
      )}`;
    }
  };

  return (
    <div
      style={{
        ...containerStyle,
        backgroundColor,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <DotLottieReact
        style={animationStyle}
        autoplay
        loop
        src="https://lottie.host/d1f4afd3-53fc-429b-838e-93f7070b4c62/hQBV6RREpn.lottie"
      />
      <h1 style={{ ...titleStyle, color: primaryColor }}>404</h1>
      <p style={textStyle}>{message}</p>

      <form style={searchContainerStyle} onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for jobs..."
          style={{
            ...inputStyle,
            borderColor,
          }}
        />
        <button
          type="submit"
          style={{
            ...searchButtonStyle,
            backgroundColor: secondaryColor,
            color: primaryColor,
          }}
        >
          Search
        </button>
      </form>

      <button
        style={{
          ...homeButtonStyle,
          backgroundColor: primaryColor,
          color: textColor,
        }}
        onClick={() => (window.location.href = "/")}
      >
        Return Home
      </button>

      <style>{`
        input:focus-visible {
          outline: 2px solid ${inputFocusColor} !important;
          border-color: ${inputFocusColor};
        }
      `}</style>
    </div>
  );
};

// Shared styles
const searchContainerStyle: React.CSSProperties = {
  display: "flex",
  position: "relative",
  gap: "0.5rem",
  marginTop: "1rem",
  maxWidth: "320px",
  width: "100%",
};

const inputStyle: React.CSSProperties = {
  flex: 1,
  padding: "0.75rem",
  borderRadius: "4px",
  border: "1px solid",
  fontSize: "1rem",
};

const searchButtonStyle: React.CSSProperties = {
  position: "absolute",
  height: "100%",
  right: "0",
  padding: "0.75rem 1.5rem",
  border: "none",
  borderRadius: "0 4px 4px 0",
  cursor: "pointer",
  fontSize: "1rem",
  transition: "background-color 0.2s",
};

const homeButtonStyle: React.CSSProperties = {
  marginTop: "2rem",
  padding: "0.75rem 1.5rem",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  textAlign: "center",
};

const animationStyle: React.CSSProperties = {
  height: "320px",
  width: "320px",
};

const titleStyle: React.CSSProperties = {
  fontSize: "3rem",
  fontWeight: "bold",
  margin: "0",
};

const textStyle: React.CSSProperties = {
  fontSize: "1.25rem",
  color: "#4a5568",
  marginTop: "1rem",
};

export default NotFound;
