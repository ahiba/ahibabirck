import { FC } from 'react';
import { ITabs } from './tabs';
import { ItabItems } from './tabItem';
export declare type TransTabsComponent = FC<ITabs> & {
    TabItem: FC<ItabItems>;
};
declare const TransTabs: TransTabsComponent;
export default TransTabs;
