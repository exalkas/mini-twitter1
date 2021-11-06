import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

/* 
message page
users page
add message page
login page
register page
wrap main component */
const Header = () => {
  return (
    <React.Fragment>
      <div className="nav-link">
      Mini Twitter
            <NavLink className='navLinkText' to="/MessagePage" activeClassName="active">
            Message |
            </NavLink>
            <NavLink className='navLinkText' to="/UsersPage" activeClassName="active">
            User |
            </NavLink>
            <NavLink className='navLinkText' to="/AddMessage" activeClassName="active">
            Add Message |
            </NavLink>
            <NavLink className='navLinkText' to="/Login" activeClassName="active">
            Login |
            </NavLink>
            <NavLink className='navLinkText' to="/Register" activeClassName="active">
            Register |
            </NavLink>         
      </div>
    </React.Fragment>
  );
};

export default Header;