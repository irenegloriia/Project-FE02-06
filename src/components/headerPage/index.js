import React from 'react';
import { Link } from 'react-router-dom';
import { isUserAuthenticated } from '../../utils/cookie';

const Header = () => {
  const listMenu = ['Home', 'Login', 'Register'];
  return (
    <div className="header">
      {listMenu.map((name) => {
        return (
          <Link to={`/${name.toLowerCase()}`} key={name.toLowerCase()}>
            <div className="menu">{name}</div>
          </Link>
        );
      })}

      {isUserAuthenticated() ? <div className="menu">Logout</div> : <div />}
    </div>
  );
};
export default Header;
