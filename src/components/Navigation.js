import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div class="navLink">
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
        </div>
        <div class="navLink">
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </div>
        <div class="navLink">
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
