import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function AppLayout() {
  return (
    <>
      <Navbar />

      <section className="main">
        <Outlet />
      </section>
    </>
  );
}

export default AppLayout;
