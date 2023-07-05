import React from "react";
import styles from "./AboutMe.module.css";
import ScreenHeading from "../ScreenHeading/ScreenHeading";
import { SCREEN_CONSTANTS } from "../../utilities/aboutMeData";
import MainContainer from "../MainContainer/MainContainer";

function AboutMe(props) {
  const renderHighlights = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className={styles["highlight"]} key={i}>
        <div className={styles["highlight-blob"]}></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <MainContainer  id={props.id}>
      <ScreenHeading title="About me" />
      <div className={styles["about-me-card"]}>
        <div className={styles["about-me-profile"]}></div>
        <div className={styles["about-me-details"]}>
          <span className={styles["about-me-description"]}>
            {SCREEN_CONSTANTS.description}
          </span>
          <div className={styles["about-me-highlights"]}>
          
            {renderHighlights()}
          </div>
        </div>
      </div>
      </MainContainer>
  );
}

export default AboutMe;
