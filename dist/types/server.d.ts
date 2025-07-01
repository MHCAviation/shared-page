declare interface Category {
    _id: string;
    title: string;
    description?: string;
    slug?: {
        current: string;
    };
}

declare interface FAQItem {
    _id: string;
    question: string;
    answer: string;
    order: number;
    category?: Category;
    page?: Page;
}

export declare const getFaqs: () => Promise<FAQItem[]>;

export declare const getPageData: (slug: string) => Promise<any>;

declare interface Page {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    tableOfContents?: TableOfContentsSection[];
}

declare interface TableOfContentsSection {
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

export { }
