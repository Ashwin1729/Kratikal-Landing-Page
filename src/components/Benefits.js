import React from "react";
import styles from "./Benefits.module.css";
import icon1 from "../assets/icon01.webp";
import icon2 from "../assets/icon02.webp";
import icon3 from "../assets/icon03.webp";
import icon4 from "../assets/icon04.webp";
import icon5 from "../assets/icon05.webp";

const Benefits = () => {
  return (
    <div className={styles.benefits_container}>
      <h2>
        Benefits Associa<span className={styles.benefits_span}>ted wi</span>th
        Code Review
      </h2>
      <div className={styles.benefits_icons}>
        <div>
          <div className={styles.icons}>
            <img src={icon1} alt="icon1" />
          </div>
          <h4>Cost Saving</h4>
        </div>
        <div>
          <div className={styles.icons}>
            <img src={icon2} alt="icon2" />
          </div>
          <h4>Improve Code Quality</h4>
        </div>
        <div>
          <div className={styles.icons}>
            <img src={icon3} alt="icon3" />
          </div>
          <h4>Identify and fix vulnerabilities</h4>
        </div>
        <div>
          <div className={styles.icons}>
            <img src={icon4} alt="icon4" />
          </div>
          <h4>Maintaining Consistency</h4>
        </div>
        <div>
          <div className={styles.icons}>
            <img src={icon5} alt="icon5" />
          </div>
          <h4>Detection of Errors</h4>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
