import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-parent"]}>
        <img
          src={require("../../../assets/shape-bg.png")}
          alt="Your Browser doesn't supports SVG"
        />
      </div>
    </div>
  );
}
