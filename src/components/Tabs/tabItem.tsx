import React from 'react'
import classNames from 'classnames'

export interface ItabItems {
    label: any,
    isActive?: boolean;
    className?: string;
    disabled?: boolean;
}

const TabItem:React.FC<ItabItems> = ({ children, isActive, label, className }) => {
    const classes = classNames('tabs-content', className, {
        'tabs-content-active': isActive
    })

    return (
        <div
            key={label}
            className={classes}
        >
            {children}
        </div>
    )
}

TabItem.defaultProps = {
    isActive: false,
}
TabItem.displayName = 'TabItem'
export default TabItem
