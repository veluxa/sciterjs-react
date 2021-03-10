import React from "sciterjs-react";
import App from './App';
import "./index.scss";

// for aardio
window.jsFunction = function () {
    return "Functions in sciterjs are called by aardio";
}

React.render(
    <App />,
    document.querySelector("#root")
);

if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => console.log("close"));
}