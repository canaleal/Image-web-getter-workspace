import React from 'react';
import './styles/style.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
       <Route index element={<Home />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
