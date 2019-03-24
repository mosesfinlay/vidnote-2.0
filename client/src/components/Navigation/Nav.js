import React, { Component } from "react";
import { Link } from "react-router-dom";

// Import components
import NavVideoList from "./NavVideoList";

class Nav extends Component {
  render() {
    const { isLoggedIn, videos } = this.props;

    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <div className="col-md-12">
            <h1 className="h2">vdNote</h1>
            <p>A simple note-taking app for videos</p>
          </div>
          <hr />
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link" to="/new">
                <svg xmlns="http://www.w3.org/2000/svg" className="small-icon feather feather-plus-circle mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                New video
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={isLoggedIn ? "/logout" : "/login"}>
                <svg xmlns="http://www.w3.org/2000/svg" className="small-icon feather feather-home mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                {isLoggedIn ? "Logout" : "Login"}
              </Link>
            </li>
            {!isLoggedIn ?
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  <svg xmlns="http://www.w3.org/2000/svg" className="small-icon feather feather-home mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                  Sign Up
                </Link>
              </li>
            : 
              <li className="nav-item">
                <Link className="nav-link" to="/account">
                  <svg xmlns="http://www.w3.org/2000/svg" className="small-icon feather feather-users mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  Account
                </Link>
              </li>
            }
          </ul>
          <hr />
          <NavVideoList videos={videos} />
        </div>
      </nav>
    );
  }
}

export default Nav;
