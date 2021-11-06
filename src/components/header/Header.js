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
      <div className="body">
      <div className="nav-link">
      <img src="https://cdn.pixabay.com/photo/2014/04/03/11/53/twitter-312464_960_720.png" alt="Twitter Bird" style={{width: 50}}/>    
      </div>
      <div className="main-body">
        <h1><NavLink to="/" className="NavLink">Mini-Twitter</NavLink></h1>
      </div>
      <div className="sidebar">
      <div className="searchField">
      <img src="https://cdn.pixabay.com/photo/2017/10/08/19/55/magnifying-glass-2831367_960_720.png" style={{width: 30}}/>
      <input type="text" className="searchBar"/>
      </div>
      </div>
      </div>
    </React.Fragment>
  );
};

export default Header;