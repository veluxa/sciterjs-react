import React, { useState } from "./react";
import reactLogo from './logo.svg';
import sciterLogo from "./logo.png";
import Clock from "./component/clock";
import './App.scss';

const App = () => {

  let [count, SetCount] = useState(0)

  return (
    <div class="app">
      <header class="app-header">
        <div class="flex c-align">
          <img src={reactLogo} class="app-logo" alt="logo" />
          <img src={sciterLogo} class="app-logo" alt="logo" />
        </div>
        <Clock id="clock" />
        <div>
          <label>Hook：</label>
          <button onClick={e => SetCount(count -= 1)}>-</button>
          {count}
          <button onClick={e => SetCount(count += 1)}>+</button>
        </div>
        <p>
          Edit <code>src/App.jsx</code> and save to reload browser.
        </p>
        <div class="flex c-align">
          <a
            style={{ behavior: "clickable" }} // for sciterjs
            class="app-link"
            href="https://reactjs.org"
            onClick={
              e => {
                if (window.platform) {
                  window.env.launch("https://reactjs.org")
                }
              }
            }
          >
            Learn Preact
          </a>
          <a
            style={{ behavior: "customEvent clickable" }} // for sciterjs
            class="app-link aardio-link"
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
            class="app-link"
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
