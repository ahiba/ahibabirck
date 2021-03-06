import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Button from './components/Button/button';
import Icon from './components/Icon/icon';
import Transition from './components/Transition/transition';
import Input from './components/Input/input';
import Upload from './components/upload/upload';
import './styles/index.scss';
library.add(fas);
function App() {
    var _a = useState(false), inProp = _a[0], setInProp = _a[1];
    var _b = useState(false), show = _b[0], setShow = _b[1];
    return (React.createElement("div", { className: "App" },
        React.createElement(Upload, { drag: true, action: "https://jsonplaceholder.typicode.com/posts", onProgress: function (percentage) {
                console.log('当前的percentage', percentage);
            } }),
        React.createElement(Input, { icon: "coffee", prepend: "www" }),
        React.createElement(Icon, { icon: "coffee", theme: "primary", size: "lg" }),
        React.createElement(Icon, { icon: "arrow-down", theme: "info", size: "lg" }),
        React.createElement(Button, { disabled: true }, "Hello"),
        React.createElement(Button, null, "Hello"),
        React.createElement(Button, { href: "http://baidu.com" }, "baidu link"),
        React.createElement(Button, { onClick: function () { return setShow(!show); } }, "toggle"),
        React.createElement(Transition, { in: show, timeout: 300, animation: "zoom-in-right" },
            React.createElement("div", null,
                React.createElement("p", null,
                    "Edit ",
                    React.createElement("code", null, "src/App.js"),
                    " and save to reload."),
                React.createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"),
                React.createElement("p", null,
                    "Edit ",
                    React.createElement("code", null, "src/App.js"),
                    " and save to reload."),
                React.createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"))),
        React.createElement(Transition, { in: show, timeout: 300, animation: "zoom-in-right", wrapper: true },
            React.createElement(Button, null, "a large button")),
        React.createElement("header", { className: "App-header" },
            React.createElement("p", null,
                "Edit ",
                React.createElement("code", null, "src/App.js"),
                " and save to reload."),
            React.createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"))));
}
export default App;
