import React from "react";
import Logo from "../logo/Logo";
import Nav from "../nav/Nav";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.navBar}>
      <Logo />
      <Nav />
    </div>
  );
}

export default Header;
