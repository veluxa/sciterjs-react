import React from "sciterjs-react";
import reactLogo from './logo.svg';
import sciterLogo from "./logo.png";
import Clock from "./component/clock";
import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="flex c-align">
          <img src={reactLogo} className="app-logo" alt="logo" />
          <img src={sciterLogo} className="app-logo" alt="logo" />
        </div>
        <Clock id="clock" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload browser.
        </p>
        <div className="flex c-align">
          <a
            style={{ behavior: "clickable" }} // for sciterjs
            className="app-link"
            href="https://reactjs.org"
            onClick={
              e => {
                if (window.platform) {
                  window.env.launch("https://reactjs.org")
                }
              }
            }
          >
            Learn React
          </a>
          <a
            style={{ behavior: "customEvent clickable" }} // for sciterjs
            className="app-link aardio-link"
            href="http://bbs.aardio.com/"
            onClick={
              e => {
                if (window.platform) {
                  e.currentTarget.xcall("testJs", "hello", "aardio")
                }
              }
            }
          >
            aardio 交互
          </a>
          <a
            style={{ behavior: "clickable" }}
            className="app-link"
            href="https://github.com/veluxa/sciterjs-react"
            onClick={
              e => {
                if (window.platform) {
                  window.env.launch("https://github.com/veluxa/sciterjs-react")
                }
              }
            }
          >
            github
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
