import { default as React } from 'react';
import { PortableTextBlock } from '@portabletext/types';
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
}
export declare function getPageData(slug: string): Promise<any>;
declare const DocPage: React.FC<DocPageProps>;
export default DocPage;
