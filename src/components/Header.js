import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../img/logo-ag-imp.svg';
import HamburgerMenuBars from '../img/hamburger-menu-bars.svg';

const Header = ({ showModal, setShowModal }) => {
  return (
    <div className="header-div">
      <NavLink to="/" className="a-no-underline">
        <div className="logo-div">
          <img src={Logo} alt="Logo" />
          <p className="logo-paragraph">FILMS</p>
        </div>
      </NavLink>
      <div className="navbar">
        <NavLink to="/" className="btn btn-add a-no-underline btn-nav">
          Home
        </NavLink>
        <NavLink to="/search_film" className="btn btn-add a-no-underline btn-nav">
          Serach in OMDb
        </NavLink>
        <NavLink to="/add_film" className="btn btn-add a-no-underline btn-nav">
          Add manually
        </NavLink>
        <NavLink to="/register" className="btn btn-add a-no-underline btn-nav">
          Register
        </NavLink>
        <NavLink to="/login" className="btn btn-add a-no-underline btn-nav">
          Login
        </NavLink>
      </div>
      <div className="hamburger-menu">
        {!showModal && (
          <img
            src={HamburgerMenuBars}
            onClick={() => {
              setShowModal(true);
            }}
            alt="hamburger-menu"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
