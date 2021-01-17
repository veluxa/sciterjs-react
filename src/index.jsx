import React from "./react";
import render from "./react/dom";
import App from './App';
import "./index.scss";

// for aardio
window.jsFunction = function () {
    return "Functions in sciterjs are called by aardio";
}

render(
    <App />,
    document.querySelector("#root")
);

if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => console.log("close"));
}