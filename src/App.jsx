import React from "./react";
import reactLogo from './logo.svg';
import sciterLogo from "./logo.png";
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex">
          <img src={reactLogo} className="App-logo" alt="logo" />
          <img src={sciterLogo} className="App-logo" alt="logo" />
        </div>
        <p>
          Edit <code>src/App.jsx</code> and save to reload browser.
        </p>
        <div className="flex c-align">
          <a
            style={{ behavior: "clickable" }} // for sciterjs
            className="App-link"
            href="https://reactjs.org"
            onClick={
              e => {
                if (window.platform) {
                  window.sciter.launch("https://reactjs.org")
                }
              }
            }
          >
            Learn React
          </a>
          <a
            style={{ behavior: "clickable" }}
            className="App-link"
            href="https://github.com/veluxa/sciterjs-react"
            onClick={
              e => {
                if (window.platform) {
                  console.log(sciter.VERSION);
                  // window.sciter.launch("https://github.com/veluxa/sciterjs-react")
                }
              }
            }
          >
            github
          </a>
          <a href=""></a>
        </div>
      </header>
    </div>
  );
}

export default App;
