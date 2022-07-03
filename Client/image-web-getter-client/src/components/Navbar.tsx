import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-item" aria-label="Portfolio">
        <div className="nav-link logo">
          <i className="fa fa-circle fa-2x" aria-hidden="true" />
          <span className="link-text">Image Processor</span>
        </div>
      </Link>

      <Link to="/rule" className="nav-item" aria-label="Rule">
        <div className="nav-link">
          <i className="fa fa-paint-brush fa-2x" aria-hidden="true" />
          <span className="link-text">Rule</span>
        </div>
      </Link>

      <Link to="/gallery" className="nav-item" aria-label="Gallery">
        <div className="nav-link">
          <i className="fa fa-download fa-2x" aria-hidden="true" />
          <span className="link-text">Download All</span>
        </div>
      </Link>

    </nav>
  );
}

export default Navbar;
