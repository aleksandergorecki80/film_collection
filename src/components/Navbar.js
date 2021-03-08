import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>The collection of my films.</h1>
      <Link to="/">Home</Link>
      <NavLink to="/add_film">Add new film</NavLink>
    </div>
  );
};

export default Navbar;
