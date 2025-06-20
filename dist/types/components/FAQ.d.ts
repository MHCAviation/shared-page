import { default as React } from 'react';
import { getFaqs } from '../lib/sanity';
import { FAQProps } from '../types';
export { getFaqs };
declare const FAQ: React.FC<FAQProps & {
    inputValue: string;
    onInputChange?: (value: string) => void;
    onSearchSubmit?: () => void;
}>;
export default FAQ;
