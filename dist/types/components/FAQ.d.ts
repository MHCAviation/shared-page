import { default as React } from 'react';
import { FAQProps } from '../types';
import { BreadcrumbItem } from './Breadcrumb';
declare const FAQ: React.FC<FAQProps & {
    inputValue: string;
    onInputChange?: (value: string) => void;
    onSearchSubmit?: () => void;
    breadcrumbItems?: BreadcrumbItem[];
}>;
export default FAQ;
