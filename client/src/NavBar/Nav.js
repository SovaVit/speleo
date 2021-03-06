import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = props => {
  return (
    <nav className={styles.header}>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <NavLink to="/">
            <span>Домашня</span>
          </NavLink>
        </li>
        <li className={styles.list__item}>
          <NavLink to="/cave">
            <span>Печери</span>
          </NavLink>
        </li>
        <li className={styles.list__item}>
          <NavLink to="/expedition">
            <span>Експедиції </span>
          </NavLink>
        </li>
        <li className={styles.list__item}>
          <NavLink to="/aboutus">
            <span>Про нас </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
