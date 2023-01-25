import React from "react";
import HomePage from "./HomePage";
import background from "../assets/background.webp";
import styles from "./Initial.module.css";

const Initial = () => {
  return (
    <div className={styles.initial}>
      <img src={background} alt="backgroundImage" className={styles.img} />
      <div className={styles.comp}>
        <HomePage />
      </div>
    </div>
  );
};

export default Initial;
