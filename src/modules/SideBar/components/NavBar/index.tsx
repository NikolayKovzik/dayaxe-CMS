import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./style.module.scss";
import { NavBarProps } from "./models/index";

function NavBar({ items }: NavBarProps) {
  return (
    <nav className="navbar">
      <ul className="menu-list">
        {items.map((item) => {
          return (
            <li className="menu-item" key={item.link}>
              <NavLink
                to={item.link}
                className="menu-link"
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