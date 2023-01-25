import React from "react";
import styles from "./Header.module.css";
import logo from "../assets/ktLogo.webp";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="Company Logo" />
    </div>
  );
};

export default Header;
