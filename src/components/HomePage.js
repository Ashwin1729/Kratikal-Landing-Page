import React, { Fragment } from "react";
import Header from "./Header";
import ConsultForm from "./ConsultForm";
import styles from "./HomePage.module.css";
import ring from "../assets/ring.png";

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <div className={styles.homepage_container}>
        <div className={styles.homepage_para}>
          <p className={styles.upper_para}>Penetration Testing</p>
          <h1>
            Secure your IT Systems with our expert penetration testing services
          </h1>
          <p className={styles.lower_para}>
            Identify and address vulnerabilities before they <br /> become a
            threat
          </p>
          <div className={styles.homepage_para_cards}>
            <div className={styles.para_card}>
              <img src={ring} alt="ring logo" />

              <div className={styles.card_data}>
                <h3>600+</h3>
                <strong>Applications Tested</strong>
              </div>
            </div>
            <div className={styles.para_card} style={{ marginLeft: "30px" }}>
              <img src={ring} alt="ring logo" />
              <div className={styles.card_data}>
                <h3>100+</h3>
                <strong>Websites Secured</strong>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.homepage_form}>
          <ConsultForm />
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
