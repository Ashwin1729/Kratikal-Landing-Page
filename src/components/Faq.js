import React, { useState } from "react";
import styles from "./Faq.module.css";
import { MyDropdown } from "./Dropdown";
import dropdown from "../assets/dropdown.png";
import dropup from "../assets/dropup.png";

const Faq = () => {
  const [firstOpen, setFirstOpen] = useState(false);
  const [secOpen, setSecOpen] = useState(false);
  const [thirdOpen, setThirdOpen] = useState(false);

  const firstClickHandler = () => {
    setFirstOpen(!firstOpen);
  };

  const secClickHandler = () => {
    setSecOpen(!secOpen);
  };

  const thirdClickHandler = () => {
    setThirdOpen(!thirdOpen);
  };

  return (
    <div className={styles.faq_container}>
      <h2>FAQ's</h2>
      <div className={styles.faq_dropdown}>
        <div className={styles.heading} onClick={firstClickHandler}>
          <h4>What are the benefits of penetration testing</h4>
          <img src={firstOpen ? dropup : dropdown} alt="dropdownArrow" />
        </div>
        <MyDropdown open={firstOpen}>
          <div className={styles.data}>
            <p>
              With the help of penetration testing you can quickly identify your
              security holes and take steps to close them before a hacker uses
              them against you. For companies of all sizes, penetration tesiting
              is very advantageous:
            </p>

            <div>
              <ul>
                <li>Prevent data breaches</li>
                <li>Follow the best security practices</li>
                <li>Enhance your reputation</li>
                <li>Meet Compluance</li>
              </ul>
            </div>
          </div>
        </MyDropdown>

        <div className={styles.heading} onClick={secClickHandler}>
          <h4>How does a penetration test work?</h4>
          <img src={secOpen ? dropup : dropdown} alt="dropdownArrow" />
        </div>
        <MyDropdown open={secOpen}>
          <div className={styles.data}>
            <p>
              With the help of penetration testing you can quickly identify your
              security holes and take steps to close them before a hacker uses
              them against you. For companies of all sizes, penetration tesiting
              is very advantageous:
            </p>

            <div>
              <ul>
                <li>Prevent data breaches</li>
                <li>Follow the best security practices</li>
                <li>Enhance your reputation</li>
                <li>Meet Compluance</li>
              </ul>
            </div>
          </div>
        </MyDropdown>

        <div className={styles.heading} onClick={thirdClickHandler}>
          <h4>What are the factors while performing pen testing?</h4>
          <img src={thirdOpen ? dropup : dropdown} alt="dropdownArrow" />
        </div>
        <MyDropdown open={thirdOpen}>
          <div className={styles.data}>
            <p>
              With the help of penetration testing you can quickly identify your
              security holes and take steps to close them before a hacker uses
              them against you. For companies of all sizes, penetration tesiting
              is very advantageous:
            </p>

            <div>
              <ul>
                <li>Prevent data breaches</li>
                <li>Follow the best security practices</li>
                <li>Enhance your reputation</li>
                <li>Meet Compluance</li>
              </ul>
            </div>
          </div>
        </MyDropdown>
      </div>
    </div>
  );
};

export default Faq;
