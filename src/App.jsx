import React, { useEffect } from "sciterjs-react";
import { Router, route } from 'preact-router';
import Home from "./pages/home";
import Example from './pages/example';
import Space from './component/space';
import Link from './component/link'
import './App.scss';

const App = () => {

  useEffect(() => {
    route('/')
  }, [])

  return (
    <div class="app">
      <nav>
        <Space>
          <Link href="/">Home</Link>
          <Link href="/example">Example</Link>
        </Space>
      </nav>
      <Router>
        <Home path="/" />
        <Example path="/example" />
      </Router>
    </div>
  );
}

export default App;
