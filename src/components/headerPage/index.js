import React from 'react';
import { Link } from 'react-router-dom';
import { isUserAuthenticated } from '../../utils/cookie';

const Header = () => {
  const listMenu = ['LogIn', 'For Teacher', 'For Student'];
  return (
    <div className="header">
      {listMenu.map((name) => {
        return (
          <Link to={`/${name}`} key={name}>
            <div className="menu">{name}</div>
          </Link>
        );
      })}

      {isUserAuthenticated() ? <span>Logout</span> : <div />}
    </div>
  );
};
export default Header;
