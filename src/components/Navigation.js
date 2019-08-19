import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div class="navLink">
          <NavLink exact to="/">Home</NavLink>
        </div>
        <div class="navLink">
          <NavLink to="/about">About</NavLink>
        </div>
        <div class="navLink">
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
