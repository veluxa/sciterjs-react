import React, { useState, useEffect } from "sciterjs-react";
import reactLogo from '../../logo.svg';
import sciterLogo from "../../logo.png";
import Clock from "../../component/clock";

const Home = () => {
    let [count, SetCount] = useState(0)

    return (
        <div class="app-content">
            <div class="flex c-align">
                <img src={reactLogo} class="app-logo" alt="logo" />
                <img src={sciterLogo} class="app-logo" alt="logo" />
            </div>
            <Clock id="clock" />
            <div>
                <span>Hook：</span>
                <span>{count}</span>
            </div>
            <div>
                <button onClick={e => {
                    e.stopPropagation();
                    SetCount(count - 1)
                }}>-</button>
                <button onClick={e => {
                    e.stopPropagation();
                    SetCount(count + 1)
                }}>+</button>
            </div>
            <p>
                Edit <code>src/App.jsx</code> and save to reload browser.
            </p>
            <div class="flex c-align">
                <a
                    style={{ behavior: "customEvent clickable" }} // for sciterjs
                    class="app-link"
                    href="https://reactjs.com/"
                    onClick={
                        e => {
                            window.env && window.env.launch("https://reactjs.com/")
                        }
                    }
                >
                    Learn React
                </a>
                <a
                    style={{ behavior: "customEvent clickable" }} // for sciterjs
                    class="app-link aardio-link"
                    href="http://www.aardio.com/"
                    onClick={
                        e => {
                            window.env && e.currentTarget.xcall("testJs", "hello", "aardio")
                        }
                    }
                >
                    aardio 交互
                </a>
                <a
                    style={{ behavior: "customEvent clickable" }}
                    class="app-link"
                    href="https://github.com/veluxa/sciterjs-react"
                    onClick={
                        e => {
                            window.env && window.env.launch("https://github.com/veluxa/sciterjs-react")
                        }
                    }
                >
                    github
                </a>
            </div>
        </div>
    )
}

export default Home;