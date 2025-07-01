import { default as default_2 } from 'react';
import { PortableTextBlock } from '@portabletext/types';

export declare const BannerSearch: default_2.FC<BannerSearchProps>;

declare interface BannerSearchProps {
    title: string;
    description?: string;
    inputValue: string;
    onInputChange?: (value: string) => void;
    onSearchSubmit?: () => void;
    placeholder?: string;
    redirectToFaq?: boolean;
    basePath?: string;
}

export declare const Breadcrumb: default_2.FC<BreadcrumbProps>;

declare interface BreadcrumbItem {
    label: string;
    to: string;
}

declare interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

declare interface Category {
    _id: string;
    title: string;
    description?: string;
    slug?: {
        current: string;
    };
}

export declare const DocPage: default_2.FC<Omit<DocPageProps, "searchTerm"> & {
    inputValue: string;
    onInputChange?: (value: string) => void;
    onSearchSubmit?: () => void;
    breadcrumbItems?: BreadcrumbItem[];
}>;

export declare const DocPageLocalWrapper: default_2.FC<DocPageLocalWrapperProps>;

declare interface DocPageLocalWrapperProps {
    slug: string;
    basePath?: string | "/";
}

declare interface DocPageProps {
    slug?: string;
    basePath?: string;
    pageData?: {
        title: string;
        authorName?: string;
        authorImage?: string;
        publishedAt?: string;
        tableOfContents: {
            _id: string;
            title: string;
            slug: string;
            order: number;
            subsections?: {
                title: string;
                slug: string;
            }[];
        }[];
        body: PortableTextBlock[];
    };
    searchTerm?: string;
    onSearchChange?: (value: string) => void;
    breadcrumbItems?: BreadcrumbItem[];
}

export declare const FAQ: default_2.FC<FAQComponentProps>;

export declare const FAQCard: default_2.FC<FAQCardProps>;

declare interface FAQCardProps {
    onNavigate?: (url: string) => void;
    onSearch?: (query: string) => void;
    searchValue?: string;
}

declare interface FAQComponentProps extends FAQProps {
    inputValue: string;
    onInputChange?: (value: string) => void;
    onSearchSubmit?: () => void;
    breadcrumbItems?: BreadcrumbItem[];
    onNavigate?: (url: string) => void;
    onSearch?: (query: string) => void;
}

declare interface FAQItem {
    _id: string;
    question: string;
    answer: string;
    order: number;
    category?: Category;
    page?: Page;
}

export declare const FAQLocalWrapper: default_2.FC<Omit<FAQProps, "faqs" | "searchTerm" | "onSearchChange">>;

declare interface FAQProps {
    title?: string;
    description?: string;
    initialFaqs?: FAQItem[];
    basePath?: string;
    faqs?: FAQItem[];
    searchTerm?: string;
    onSearchChange?: (value: string) => void;
}

export declare const NotFound: default_2.FC<NotFoundProps>;

declare interface NotFoundProps {
    message?: string;
    styles?: {
        primaryColor?: string;
        secondaryColor?: string;
        textColor?: string;
        backgroundColor?: string;
        borderColor?: string;
        inputFocusColor?: string;
    };
}

declare interface Page {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    tableOfContents?: TableOfContentsSection[];
}

export declare const SearchResults: default_2.FC;

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
