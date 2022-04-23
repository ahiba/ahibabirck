import { FC } from 'react'
import Tabs, { ITabs } from './tabs'
import TabItem, { ItabItems } from './tabItem'

export type TransTabsComponent = FC<ITabs> & {
    TabItem: FC<ItabItems>
}

const TransTabs = Tabs as TransTabsComponent
TransTabs.TabItem = TabItem

export default TransTabs