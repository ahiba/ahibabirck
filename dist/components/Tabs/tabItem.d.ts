import React from 'react';
export interface ItabItems {
    label: any;
    isActive?: boolean;
    className?: string;
    disabled?: boolean;
    children?: React.ReactNode;
}
declare const TabItem: React.FC<ItabItems>;
export default TabItem;
