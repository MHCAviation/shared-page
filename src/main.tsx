import ReactDOM from "react-dom/client";
import FAQ from "./components/FAQ";

// Example FAQ items for testing
const testFaqs = [
  {
    question: "How do I delete a Team folder?",
    answer:
      "You can delete a team folder by navigating to the folder settings and clicking the delete button. This action cannot be undone.",
  },
  {
    question: "Why did you change the design of the Glide app builder?",
    answer:
      "We updated the design to improve usability and incorporate new features based on user feedback. The new design offers better organization and workflow.",
  },
  {
    question: "When does my app update with changes?",
    answer:
      "Your app updates automatically when you publish changes. This usually takes a few seconds, but can take longer for complex updates.",
  },
  {
    question: "Does Glide support other data sources, like Excel or Airtable?",
    answer:
      "Yes, Glide supports multiple data sources including Excel, Google Sheets, Airtable, and more. You can connect and sync your data easily.",
  },
  {
    question: "How do I install a Glide app?",
    answer:
      "You can install a Glide app by opening it on your device and following the 'Add to Home Screen' instructions. The process may vary slightly between iOS and Android.",
  },
];

// Example Quick Links for testing
const testQuickLinks = [
  {
    title: "Join the Community",
    description:
      "Post in our lively forum for quick help with apps, or just share your app!",
  },
  {
    title: "Read Documentation & Guides",
    description:
      "Learn at your own pace with our comprehensive guides and documentation.",
  },
  {
    title: "Hire an Expert",
    description:
      "Need a professional app fast and willing to pay? Certified experts & agencies are standing by.",
  },
];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <FAQ
    faqs={testFaqs}
    quickLinks={testQuickLinks}
    styles={{
      primaryColor: "#000",
      backgroundColor: "#f8f9ff",
      textColor: "#222",
    }}
  />
);
