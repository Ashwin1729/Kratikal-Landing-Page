import React from "react";
import styles from "./Dropdown.module.css";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

export function MyDropdown(props) {
  return (
    <div className={styles.dropdown}>
      <SlideDown className={"my-dropdown-slidedown"}>
        {props.open ? props.children : null}
      </SlideDown>
    </div>
  );
}
