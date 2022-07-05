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
import Gel from './pages/Gel';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
       <Route index element={<Home />} />
       <Route path="rule" element={<Rule />} />
       <Route path="gel" element={<Gel />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
