import React from "react";
import styles from "./WhyKratikal.module.css";
import whyKratikal from "../assets/WhyKratikal.webp";

const WhyKratikal = () => {
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <div className={styles.overview}>
        <div className={styles.overview_image}>
          <img src={whyKratikal} alt="OverviewImage" />
        </div>
        <div className={styles.overview_data}>
          <h2>
            <span className={styles.overview_span}>Why K</span>ratikal
          </h2>
          <p>
            <strong>Kratikal Tech</strong> offers manual and automated
            penetration testing services to identify vulnerabilities in your
            system. Our manual testing team uses techniques like social
            engineering, phishing, and physical security testing for a more
            in-depth evaluation. Our automated testing approach uses software
            tools to simulate an attack, but may not detect all vulnerabilities.
            Together, both methods provide a comprehensive and thorough security
            assessment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyKratikal;
