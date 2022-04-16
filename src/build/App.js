import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
// import Button from './components/Button/button'
import './styles/index.scss';
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement(Button, { disabled: true }, "Hello"),
        React.createElement(Button, { btnType: ButtonType.Primary, size: ButtonSize.Large }, "Hello"),
        React.createElement(Button, { btnType: ButtonType.Link, href: "http://baidu.com" }, "baidu link"),
        React.createElement(Menu, { defaultIndex: '0', onSelect: function (index) { alert(index); }, defaultOpenSubMenus: ['2'] },
            React.createElement(MenuItem, null, "cool link"),
            React.createElement(MenuItem, { disabled: true }, "cool link 2"),
            React.createElement(SubMenu, { title: "dropdown" },
                React.createElement(MenuItem, null, "dropdown 1"),
                React.createElement(MenuItem, null, "dropdown 2")),
            React.createElement(MenuItem, null, "cool link 3")),
        React.createElement("header", { className: "App-header" },
            React.createElement("p", null,
                "Edit ",
                React.createElement("code", null, "src/App.js"),
                " and save to reload."),
            React.createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"))));
}
export default App;
