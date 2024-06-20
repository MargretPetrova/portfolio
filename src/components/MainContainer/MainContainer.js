import React from "react";
import styles from "../MainContainer/MainContainer.module.css";

export default function MainContainer(props) {
  return (
    <div className={styles.container} id={props.id}>
      {props.children}
    </div>
  );
}

