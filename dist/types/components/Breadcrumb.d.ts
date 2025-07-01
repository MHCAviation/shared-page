import { default as React } from 'react';
export interface BreadcrumbItem {
    label: string;
    to: string;
}
interface BreadcrumbProps {
    items: BreadcrumbItem[];
}
declare const Breadcrumb: React.FC<BreadcrumbProps>;
export default Breadcrumb;
