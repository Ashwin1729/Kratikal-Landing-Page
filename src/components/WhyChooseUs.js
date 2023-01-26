import React from "react";
import styles from "./WhyChooseUs.module.css";
import whychooseus from "../assets/WhyChooseUs.webp";
import check from "../assets/check.png";

const WhyChooseUs = () => {
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <div className={styles.overview}>
        <div className={styles.overview_data}>
          <h2>
            <span className={styles.overview_span}>Why C</span>hoose Us?
          </h2>
          <div className={styles.overview_list}>
            <div>
              <img src={check} alt="greenCheckIcon" />
              <p>Creating Compliance Policies and IT Security Strategies</p>
            </div>
            <div>
              <img src={check} alt="greenCheckIcon" />
              <p>
                Sound record of delivering excellent cyber security solutions
              </p>
            </div>
            <div>
              <img src={check} alt="greenCheckIcon" />
              <p>Precise Gap Analysis by our expert Pentesters</p>
            </div>
            <div>
              <img src={check} alt="greenCheckIcon" />
              <p>Thorough Security Assessment</p>
            </div>
            <div>
              <img src={check} alt="greenCheckIcon" />
              <p>Safehuard of people, processes, and technologies</p>
            </div>
          </div>
        </div>
        <div className={styles.overview_image}>
          <img src={whychooseus} alt="WhyChooseUsImage" />
        </div>
      </div>
      <div className={styles.footer}>
        <button>
          <h4>Book a Call</h4>
        </button>
      </div>
    </div>
  );
};

export default WhyChooseUs;
