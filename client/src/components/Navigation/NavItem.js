import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavItem extends Component {
  render() {
    const { to, title, icon, iconsJSX } = this.props;

    return (
      <li className="nav-item">
        <Link className="nav-link" to={to}>
          {iconsJSX.map(({ name, iconSVG }) => {
            if (icon === name) {
              return iconSVG;
            }

            return null;
          })}
          {title}
        </Link>
      </li>
    );
  }
}
       
export default NavItem;