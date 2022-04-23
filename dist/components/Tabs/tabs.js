import React, { useState } from 'react';
import classNames from 'classnames';
var Tabs = function (_a) {
    var defaultIndex = _a.defaultIndex, onSelect = _a.onSelect, children = _a.children, className = _a.className, styleType = _a.styleType;
    var _b = useState(defaultIndex), currentActive = _b[0], setActive = _b[1];
    var classes = classNames('tabs-nav', className, {
        'tabs-underline': styleType === 'underline',
        'tabs-outline': styleType === 'outline'
    });
    var handleClick = function (index, disabled) {
        if (disabled)
            return;
        setActive(index);
        if (typeof onSelect === 'function') {
            onSelect(index);
        }
    };
    var childrenComponent = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            var isLabelDisabled = childElement.props.disabled ? childElement.props.disabled : false;
            var tabsLabelClasses = classNames('tabs-label', {
                'tabs-label-active': currentActive === index,
                'tabs-label-disabled': childElement.props.disabled
            });
            var handleChildClick = function () {
                handleClick(index, isLabelDisabled);
            };
            return (React.createElement("li", { key: index, className: tabsLabelClasses, onClick: handleChildClick }, childElement.props.label));
        });
    };
    var renderChildren = function () {
        return React.Children.map(children, function (child, i) {
            var childElement = child;
            if (childElement.type.displayName === 'TabItem') {
                return React.cloneElement(childElement, {
                    isActive: currentActive === i
                });
            }
            else {
                console.error('warning: tabs has a child, which is not tabitem componet');
            }
        });
    };
    return (React.createElement("div", null,
        React.createElement("nav", { className: classes },
            React.createElement("ul", { className: "tabs-ul" }, childrenComponent()),
            renderChildren())));
};
Tabs.defaultProps = {
    defaultIndex: 0,
    styleType: 'underline',
};
export default Tabs;
