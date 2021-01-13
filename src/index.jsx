import React from "./react";
import render from "./react/ReactDOM";
import App from './App';
import "./index.scss";

render(
    <App />,
    document.querySelector("#root")
);

if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => console.log("close"));
}