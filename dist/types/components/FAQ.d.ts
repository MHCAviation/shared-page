import { default as React } from 'react';
interface FAQItem {
    question: string;
    answer: string;
}
interface QuickLink {
    title: string;
    description: string;
}
interface FAQProps {
    title?: string;
    faqs?: FAQItem[];
    quickLinks?: QuickLink[];
    styles?: {
        primaryColor?: string;
        backgroundColor?: string;
        textColor?: string;
        borderColor?: string;
    };
}
declare const FAQ: React.FC<FAQProps>;
export default FAQ;
