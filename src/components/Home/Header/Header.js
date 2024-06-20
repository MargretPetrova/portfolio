import React, { useState } from "react";
import styles from "../Header/Header.module.css";
import { TOTAL_SCREENS } from "../../../utilities/screensUtils";

export default function Header(props) {
  const [selectedScreen, setSelectedScreen] = useState(0);

  const getHeaderOptions = () => {
    return TOTAL_SCREENS.map((Screen, i) => (
      <div
        key={Screen.screen_name}
        className={
          selectedScreen === i
            ? styles["selected-header-option"]
            : styles["header-option"]
        }
        onClick={() => switchScreen(i, Screen)}
      >
        <span>{Screen.screen_name}</span>
      </div>
    ));
  };

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) {
      return;
    } else {
      screenComponent.scrollIntoView({ behavior: "smooth" });
      setSelectedScreen(index);
    }
  };

  return (
    <div className={styles["header-container"]}>
      <div className={styles["header-parent"]}>
        <div className={styles["header-logo"]}>
          <span>~Margret~</span>
        </div>
        <div className={styles["header-options"]}>{getHeaderOptions()}</div>
      </div>
    </div>
  );
}
