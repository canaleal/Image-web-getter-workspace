import React from 'react';
import './styles/style.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './pages/Home';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rule">Rule</Link>
          </li>
        </ul>
      </nav>

      <Route path="/"  element={<Home />} />

    </Router>
  );
}

export default App;
