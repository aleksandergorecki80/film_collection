import React from 'react';
import { NavLink } from 'react-router-dom';
import HamburgerMenuCross from '../img/hamburger-menu-cross.svg';

const Modal = (props) => {
  return (
    <div
      className="modal"
      onClick={(e) => {
        e.target.className === 'modal' && props.setShowModal(false);
      }}
    >
      <div className="modal-background">
        <div className="modal-body">
          <div className="modal-header">
            <img
              src={HamburgerMenuCross}
              onClick={() => {
                props.setShowModal(false);
              }}
              alt="hamburger-menu"
            />
          </div>
          <NavLink 
            to="/" 
            className="btn btn-add a-no-underline btn-nav"
            onClick={() => {
              props.setShowModal(false);
            }}
            >
            Home
          </NavLink>
          <NavLink
            to="/add_film"
            className="btn btn-add a-no-underline btn-nav"
            onClick={() => {
              props.setShowModal(false);
            }}
          >
            Add new film
          </NavLink>
          <NavLink
            to="/wish_list"
            className="btn btn-add a-no-underline btn-nav"
            onClick={() => {
              props.setShowModal(false);
            }}
          >
            Wish list
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Modal;
