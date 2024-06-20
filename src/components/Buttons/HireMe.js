import React from "react";
import styles from "./Buttons.module.css";

export default function HireMe({ scrollToHireMe }) {
  return (
    <button className={styles["btn"]} onClick={() => scrollToHireMe()}>
      Hire Me
    </button>
  );
}
