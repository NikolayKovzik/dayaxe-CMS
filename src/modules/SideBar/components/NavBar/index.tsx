import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import { NavBarProps } from "./models/index";

function NavBar({ items }: NavBarProps) {
  return (
    <nav className="navbar">
      <ul className="navbar__menu-list">
        {items.map((item) => {
          return (
            <li className="navbar__menu-item" key={item.link}>
              <NavLink
                to={item.link}
                className="navbar__menu-link"
              >
                {item.content}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBar;