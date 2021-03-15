import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>The collection of my films.</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/add_film">Add new film</NavLink>
    </div>
  );
};

export default Navbar;
