import React, { useState } from 'react'
import classNames from 'classnames'
import { ItabItems } from './tabItem'

type selectCallback = (selectIndex: number, disabled?:boolean) => void
type TabStyle = "underline" | "outline"
export interface ITabs {
    defaultIndex?: number;
    onSelect?: selectCallback;
    className?: string;
    styleType?: TabStyle;
}

const Tabs:React.FC<ITabs> = ({ defaultIndex, onSelect, children, className, styleType }) => {
    const [ currentActive, setActive ] = useState(defaultIndex)
    const classes = classNames('tabs-nav', className, {
        'tabs-underline': styleType === 'underline',
        'tabs-outline': styleType === 'outline'
    })

    const handleClick = (index:number, disabled: boolean) => {
        if (disabled) return
        setActive(index)
        if (typeof onSelect === 'function') {
            onSelect(index)
        }
    }

    const childrenComponent = () => {
        return React.Children.map(children, (child, index) => {
          const childElement = child as React.FunctionComponentElement<ItabItems>
          const isLabelDisabled = childElement.props.disabled ? childElement.props.disabled : false
          const tabsLabelClasses = classNames('tabs-label', {
            'tabs-label-active':  currentActive === index,
            'tabs-label-disabled': childElement.props.disabled
          })
          const handleChildClick = () => {
            handleClick(index, isLabelDisabled)
          }
          return (
            <li
              key={index}
              className={tabsLabelClasses}
              onClick={handleChildClick}
            >
              {childElement.props.label}
            </li>
          )
        })
      }
    const renderChildren = () => {
        return React.Children.map(children, (child, i) => {
            const childElement = child as React.FunctionComponentElement<ItabItems>
       
            if (childElement.type.displayName === 'TabItem') {
                return React.cloneElement(
                    childElement,
                    {
                        isActive: currentActive === i
                    })
            } else {
                console.error('warning: tabs has a child, which is not tabitem componet')
            }
         
        })
    }
    return (
        <div>
            <nav className={classes}>
                <ul className="tabs-ul">
                    {childrenComponent()}
                </ul>
                {renderChildren()}
            </nav>
        </div>
    )
}

Tabs.defaultProps = {
    defaultIndex: 0,
    styleType: 'underline',
}
export default Tabs