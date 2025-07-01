import { default as React } from 'react';
import { PortableTextBlock } from '@portabletext/types';
import { BreadcrumbItem } from './Breadcrumb';
interface DocPageProps {
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
declare const DocPage: React.FC<Omit<DocPageProps, "searchTerm"> & {
    inputValue: string;
    onInputChange?: (value: string) => void;
    onSearchSubmit?: () => void;
    breadcrumbItems?: BreadcrumbItem[];
}>;
export default DocPage;
