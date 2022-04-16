import React from 'react';
import { Button } from './build/index';
// import Menu from './components/Menu/menu'
// import MenuItem from './components/Menu/menuItem'
// import SubMenu from './components/Menu/subMenu'
// import Icon from './components/Icon/icon'
// import Button from './components/Button/button'
import { Menu } from './build/index';
// import './styles/index.scss'
import './build/index.css';
// @ts-ignore
var MenuItem = Menu.Item;
// @ts-ignore
var SubMenu = Menu.SubMenu;
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement(Button, { disabled: true }, "Hello"),
        React.createElement(Button, null, "Hello"),
        React.createElement(Button, { href: "http://baidu.com" }, "baidu link"),
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
