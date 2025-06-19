export interface Category {
    _id: string;
    title: string;
    description?: string;
    slug?: {
        current: string;
    };
}
export interface TableOfContentsSection {
    _id: string;
    title: string;
    slug: {
        replace(arg0: RegExp, arg1: string): unknown;
        current: string;
    };
    content?: Record<string, unknown>[];
    subsections?: {
        title: string;
        slug: {
            current: string;
        };
    }[];
}
export interface Page {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    tableOfContents?: TableOfContentsSection[];
}
export interface FAQItem {
    _id: string;
    question: string;
    answer: string;
    order: number;
    category?: Category;
    page?: Page;
}
export interface FAQProps {
    title?: string;
    description?: string;
    initialFaqs?: FAQItem[];
    basePath?: string;
}
