import React from "react";
import styles from "./Buttons.module.css";
import load1 from "../../../src/assets/load2.gif";

export default function SendForm({ bool }) {
  return (
    <div className="send-btn">
      <button className={styles["btn"]} type="submit">
        Send <i className="fa fa-paper-plane"></i>
        {bool ? (
          <b className="load">
            <img src={load1} alt="load1" />
          </b>
        ) : (
          ""
        )}
      </button>
    </div>
  );
}
