import React from 'react';
import './Navbar.css'; // You can create a CSS file for styling

function Navbar() {
  return (
    <div className="navbar">
      <a className="navbar-logo" href="/">Your Logo</a>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
