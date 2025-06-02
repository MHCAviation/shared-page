import React from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  faqs?: FAQItem[];
  styles?: {
    primaryColor?: string;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
  };
}

const defaultFaqs: FAQItem[] = [
  {
    question: "What is this website?",
    answer: "This website provides useful information and resources for users.",
  },
  {
    question: "How do I contact support?",
    answer: "You can contact support via the contact form or email provided on the website.",
  },
  {
    question: "Can I share this FAQ page?",
    answer: "Yes, this FAQ component is designed to be reusable across multiple websites.",
  },
];

const FAQ: React.FC<FAQProps> = ({
  title = "Frequently Asked Questions",
  faqs = defaultFaqs,
  styles = {},
}) => {
  const {
    primaryColor = "#0055FF",
    backgroundColor = "#fff",
    textColor = "#222",
    borderColor = "#e2e8f0",
  } = styles;

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "3rem auto",
        backgroundColor,
        borderRadius: 12,
        boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
        padding: "2rem 2.5rem",
        fontFamily: "Arial, sans-serif",
        color: textColor,
        border: `1px solid ${borderColor}`,
      }}
    >
      <h2 style={{ color: primaryColor, marginBottom: "2rem", fontSize: "2rem" }}>{title}</h2>
      <div>
        {faqs.map((faq, idx) => (
          <div key={idx} style={{ marginBottom: "1.5rem" }}>
            <div style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: 6 }}>{faq.question}</div>
            <div style={{ color: "#444", fontSize: "1rem" }}>{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
