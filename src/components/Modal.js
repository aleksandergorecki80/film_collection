import React from 'react';
import { NavLink } from 'react-router-dom';

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-background">
        <div className="modal-body">
        <NavLink to="/" className="btn btn-add a-no-underline btn-nav">
          Home
        </NavLink>
        <NavLink to="/add_film" className="btn btn-add a-no-underline btn-nav">
          Add new film
        </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Modal;
