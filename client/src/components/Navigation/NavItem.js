import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavItem extends Component {
  render() {
    const { to, title } = this.props;

    return (
      <li className="nav-item">
        <Link className="nav-link" to={to}>{title}</Link>
      </li>
    );
  }
}
       
export default NavItem;