import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Auth from '../../utils/auth';
import './style.css'

const Header = () => {
  const location = useLocation()
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  if (location.pathname === "/") {
    return null
  }
  return (
    <header className="">
      <div id="nav-container">
        <div id="title">
        <Link to="/">
          <h1>Stacked</h1>
        </Link>
        </div>

        
        <div id="nav-entry">
        <nav  className="">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">My Workouts</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
        </div>
        </div>
    </header>
  );
};

export default Header;

