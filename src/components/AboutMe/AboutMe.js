import React from "react";
import "./AboutMe.css";
import ScreenHeading from "../ScreenHeading/ScreenHeading";
import { SCREEN_CONSTANTS } from "../../utilities/aboutMeData";

function AboutMe(props) {
  const renderHighlights = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me container" id={props.id}>
      <div className="about-content"></div>
      <ScreenHeading title="About me" />
      <div className="about-me-card">
        <div className="about-me-profile"></div>
        <div className="about-me-details">
          <span className="about-me-description">
            {SCREEN_CONSTANTS.description}
          </span>
          <div className="about-me-highlights">
            <div className="highlight-heading">
              <span>{SCREEN_CONSTANTS.highlights.heading}</span>
            </div>
            {renderHighlights()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
