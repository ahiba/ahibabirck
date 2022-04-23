import React from 'react';
declare type selectCallback = (selectIndex: number, disabled?: boolean) => void;
declare type TabStyle = "underline" | "outline";
export interface ITabs {
    defaultIndex?: number;
    onSelect?: selectCallback;
    className?: string;
    styleType?: TabStyle;
    children?: React.ReactNode;
}
declare const Tabs: React.FC<ITabs>;
export default Tabs;
