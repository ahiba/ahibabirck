import React from 'react';
import classNames from 'classnames';
var TabItem = function (_a) {
    var children = _a.children, isActive = _a.isActive, label = _a.label, className = _a.className;
    var classes = classNames('tabs-content', className, {
        'tabs-content-active': isActive
    });
    return (React.createElement("div", { key: label, className: classes }, children));
};
TabItem.defaultProps = {
    isActive: false,
};
TabItem.displayName = 'TabItem';
export default TabItem;
