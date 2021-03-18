import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../img/logo-ag-imp.svg';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Logo} alt="Logo"/>
      <h1>The collection of my films.</h1>
      <NavLink to="/" className="btn btn-add a-no-underline">Home</NavLink>
      <NavLink to="/add_film" className="btn btn-add a-no-underline">Add new film</NavLink>
    </div>
  );
};

export default Navbar;
