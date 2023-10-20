import React from 'react';
import './Navbar.css'; // You can create a CSS file for styling

function Navbar() {
  return (
    <div className="navbar">
      <div className='flex justify-center items-center font-bold'>
        <div className='w-10'>
          <a className="navbar-logo" href="/"><img src="./photos/logo.jpg" alt="logo" className='bg-cover rounded-full' /></a>
        </div>
        <span className='ml-2'>Quizzi</span>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </div>
    </div>
  );
}

export default Navbar;
