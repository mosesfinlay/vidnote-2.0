import React, { Component } from "react";
import { Link } from "react-router-dom";

// Import components
import NavItem from "./NavItem";

class Nav extends Component {
  render() {
    const { navItems } = this.props;

    const iconsJSX = [
      { name: "home",
        iconSVG: <svg key="0" xmlns="http://www.w3.org/2000/svg" className="small-icon feather feather-home mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
      },
      { name: "new",
        iconSVG: <svg key="1" xmlns="http://www.w3.org/2000/svg" className="small-icon feather feather-plus-circle mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
      },
      { name: "document",
        iconSVG: <svg key="2" xmlns="http://www.w3.org/2000/svg" className="small-icon feather feather-file mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
      },
      { name: "account",
        iconSVG: <svg key="3" xmlns="http://www.w3.org/2000/svg" className="small-icon feather feather-users mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      }
    ];

    const navItemsJSX = navItems.map(({ title, to, icon }, index) => 
      <NavItem
        title={title}
        to={to}
        icon={icon}
        key={index}
        iconsJSX={iconsJSX}
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
          <span className="mt-2">A simple note-taking app for YouTube videos.</span>
          <ul className="navbar-nav ml-auto">
            {navItemsJSX}
          </ul>
        </div>   
      </nav>
    );
  }
}
       
export default Nav;