import React from "react";
import styles from "./Footer.module.css";
import usa from "../assets/usa.png";
import india from "../assets/india.png";
import mail from "../assets/mail.png";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#1a1919" }}>
      <div className={styles.bg_text}>
        <p>CONTACT US</p>
      </div>
      <div className={styles.footer_container}>
        <h4>
          <span> </span>
          <span className={styles.span_grey}> CO</span>
          <span className={styles.span_red}>NTACT</span>
          <span className={styles.span_grey}> US</span>
          <span> </span>
        </h4>
        <div className={styles.footer_cards}>
          <div>
            <div className={styles.head}>
              <img src={usa} alt="" />
              <h4>UNITED STATES</h4>
            </div>
            <p>
              400 W Peachtree St NW Atlanta,
              <br /> GA, 30308, USA
            </p>
          </div>

          <div>
            <div className={styles.head}>
              <img src={india} alt="" />
              <h4>INDIA</h4>
            </div>
            <p>
              B-70, Second Floor-67,
              <br /> Noida - 201301
            </p>
          </div>

          <div>
            <div className={styles.head}>
              <img src={mail} alt="" />
              <h4>For Sales:</h4>
            </div>
            <p>Email: sales@kratikal.com</p>
            <div className={styles.foot}>
              <img src={india} alt="" />
              <p>(+91) 9289192210</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
