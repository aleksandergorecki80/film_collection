import { connect } from 'react-redux';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../img/logo-ag-imp.svg';
import HamburgerMenuBars from '../img/hamburger-menu-bars.svg';
import { fetchUserData, logOutUser } from '../actions/userActions';

class Header extends React.Component {
  logOut = () => {
    localStorage.setItem('token', '');
    this.props.logOutUser();
  }

  componentDidMount() {
    const localToken = () => {
      const localData = localStorage.getItem('token');
      return localData ? localData : ''
  };
    const userToken = localToken();
    if(userToken){
      this.props.fetchUserData(userToken);
    }
    
  }
  render() { 
    const logInNavigation = !this.props.user ? (
      <div>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/Login">Log in</NavLink>
      </div>
    ) : (
      <div>
          <p>{`You are log in as: ${this.props.user.name}`}</p>
        <button className="log-out" onClick={this.logOut}>Log out</button>
      </div>
    );

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
          {logInNavigation}
        </div>
        <div className="hamburger-menu">
          {!this.props.showModal && (
            <img
              src={HamburgerMenuBars}
              onClick={() => {
                this.props.setShowModal(true);
              }}
              alt="hamburger-menu"
            />
          )}
        </div>
      </div>
    );
  }
}
 
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserData: (userToken) => {
      dispatch(fetchUserData(userToken));
    },
    logOutUser: () => {
      dispatch(logOutUser());
    }
  };
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);