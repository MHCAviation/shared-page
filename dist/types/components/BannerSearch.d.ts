import { default as React } from 'react';
interface BannerSearchProps {
    title: string;
    description?: string;
    searchTerm: string;
    onSearchChange: (value: string) => void;
    placeholder?: string;
    redirectToFaq?: boolean;
}
declare const BannerSearch: React.FC<BannerSearchProps>;
export default BannerSearch;
