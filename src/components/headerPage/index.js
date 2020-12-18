import React from 'react';
import { Link } from 'react-router-dom';
import { isUserAuthenticated, deleteCookie } from '../../utils/cookie';

const Header = () => {
  const listMenu = ['Home'];
  return (
    <div className="header">
      {listMenu.map((name) => {
        return (
          <Link to={`/${name.toLowerCase()}`} key={name.toLowerCase()}>
            <div className="menu">{name}</div>
          </Link>
        );
      })}

      {isUserAuthenticated() ? (
        <>
          <Link to="/allcourse" key="allcourse">
            <div className="menu">All Courses</div>
          </Link>
          <Link to="/mycourse" key="mycourse">
            <div className="menu">My Course</div>
          </Link>
          <Link to="/profile" key="profile">
            <div className="menu">Profile</div>
          </Link>
          <div
            className="menu"
            role="button"
            onKeyPress={() => {}}
            tabIndex={0}
            onClick={() => {
              deleteCookie('userData');
              deleteCookie('token');
              window.location.replace('/');
            }}
          >
            Logout
          </div>
        </>
      ) : (
        <>
          <Link to="/login" key="login">
            <div className="menu">Login</div>
          </Link>
          <Link to="/register" key="register">
            <div className="menu">Register</div>
          </Link>
        </>
      )}
    </div>
  );
};
export default Header;
