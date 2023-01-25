import React from "react";
import { TextField } from "@mui/material";
import styles from "./ConsultForm.module.css";

const ConsultForm = () => {
  return (
    <div className={styles.form_container}>
      <div className={styles.form_heading}>
        Enhance your{" "}
        <span>
          <u styles={{ color: "#e95f22" }}>SECURITY</u>
        </span>
      </div>
      <form>
        <div className={styles.form_field}>
          <TextField
            id="standard-basic"
            label="Full Name"
            variant="standard"
            fullWidth
            size="small"
            color="warning"
          />
        </div>
        <div className={styles.form_field}>
          <TextField
            id="standard-basic"
            label="Business Email"
            variant="standard"
            fullWidth
            size="small"
            color="warning"
          />
        </div>
        <div className={styles.form_field}>
          <TextField
            id="standard-basic"
            label="Phone Number"
            variant="standard"
            fullWidth
            size="small"
            color="warning"
          />
        </div>
        <div className={styles.form_field}>
          <TextField
            id="standard-basic"
            label="Company Name"
            variant="standard"
            fullWidth
            size="small"
            color="warning"
          />
        </div>
        <div className={styles.form_field}>
          <TextField
            id="standard-basic"
            label="Other Compliances Required"
            variant="standard"
            fullWidth
            size="small"
            color="warning"
          />
        </div>
        <button className={styles.submit_button} type="submit">
          Request{" "}
          <strong>
            <u>FREE</u>
          </strong>{" "}
          Consultation
        </button>
      </form>
    </div>
  );
};

export default ConsultForm;
