import React from 'react';
import './styles/style.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import Rule from './pages/Rule';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
       <Route index element={<Home />} />
       <Route path="rule" element={<Rule />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
