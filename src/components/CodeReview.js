import React from "react";
import styles from "./CodeReview.module.css";
import codeReview from "../assets/CodeReview.webp";

const CodeReview = () => {
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <div className={styles.overview}>
        <div className={styles.overview_data}>
          <h2>
            <span className={styles.overview_span}>Code</span> Review
          </h2>
          <p>
            Code review examines source code directly and reveals flaws that
            were missed during the first development stage. It is the procedure
            of auditing an application's source code to make sure the necessary
            security measures are present, performing as intended, and having
            been activated appropriately.
            <br /> They are methodical evaluations of the code made to find
            defects, improve the quality of the code, and assist developers in
            learning the source code
          </p>
        </div>
        <div className={styles.overview_image}>
          <img src={codeReview} alt="OverviewImage" />
        </div>
      </div>
    </div>
  );
};

export default CodeReview;
