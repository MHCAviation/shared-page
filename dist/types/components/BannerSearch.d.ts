import { default as React } from 'react';
interface BannerSearchProps {
    title: string;
    description?: string;
    inputValue: string;
    onInputChange?: (value: string) => void;
    onSearchSubmit?: () => void;
    placeholder?: string;
    redirectToFaq?: boolean;
    basePath?: string;
}
declare const BannerSearch: React.FC<BannerSearchProps>;
export default BannerSearch;
