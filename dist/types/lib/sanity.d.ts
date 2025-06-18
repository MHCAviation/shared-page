import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { FAQItem } from '../types';
export declare const client: import('@sanity/client').SanityClient;
export declare const urlFor: (source: SanityImageSource) => import('@sanity/image-url/lib/types/builder').ImageUrlBuilder;
export declare const getFaqs: () => Promise<FAQItem[]>;
