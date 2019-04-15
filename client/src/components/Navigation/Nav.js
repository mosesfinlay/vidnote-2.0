import React, { Component } from "react";
import { Link } from "react-router-dom";

// Import components
import NavItem from "./NavItem";

class Nav extends Component {
  render() {
    const { navItems } = this.props;
    const navItemsJSX = navItems.map(({ title, to }, index) => 
      <NavItem
        title={title}
        to={to}
        key={index}
      />
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top px-5">
        <Link className="text-reset text-decoration-none" to="/">
          <h2 className="d-inline mr-2">vidnote</h2>
        </Link>
        
        <button className="navbar-toggler mt-2" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarColor01">
          <span className="mt-2">Extremely simple note-taking for YouTube videos.</span>
          <ul className="navbar-nav ml-auto">
            {navItemsJSX}
          </ul>
        </div>   
      </nav>
    );
  }
}
       
export default Nav;