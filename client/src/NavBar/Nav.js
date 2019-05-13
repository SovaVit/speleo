import React from "react";
import { NavLink } from "react-router-dom";
//import { connect } from "react-redux";
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
          <NavLink to="/">
            <span>Печера Озерна</span>
          </NavLink>
        </li>
        <li className={styles.list__item}>
          <NavLink to="/">
            <span>Про нас </span>
          </NavLink>
        </li>
        <li className={styles.list__item}>
          <NavLink to="/">
            <span>Експедиції </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
// function mapStateToProps(state) {
//   return {
//     isLogged: state.user.isLogged,
//     name: state.user.name
//   };
// }

export default NavBar//connect(mapStateToProps)(NavBar);
