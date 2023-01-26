import React from "react";
import styles from "./Overview.module.css";
import overview from "../assets/Overview.webp";

const Overview = () => {
  return (
    <div className={styles.overview}>
      <div className={styles.overview_data}>
        <h2>
          <span className={styles.overview_span}>Over</span>view
        </h2>
        <p>
          <strong>A pen test </strong>(also known as a penetration test) is a
          security assessment of an IT system, where potential vulnerabilities
          are identified by attempting to exploit them. It can be done using
          human or automated methods and may include testing servers, web apps,
          wireless networks, and other areas of potential exposure. The{" "}
          <strong> NIST SP 800-115 guide </strong>is often used to develop
          appropriate security processes and procedures and can be a helpful
          resource for pen testers when assessing organizational vulnerabilities
        </p>
      </div>
      <div className={styles.overview_image}>
        <img src={overview} alt="OverviewImage" />
      </div>
    </div>
  );
};

export default Overview;
