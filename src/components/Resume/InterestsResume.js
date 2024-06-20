import React from "react";
import { interestsDetails } from "../../utilities/resumeData";
import { ResumeHeading } from "./ResumeHeading";

export default function InterestsResume(props) {
  return (
    <div className="resume-screen-container" key="interests">
      {interestsDetails.map((interest) => (
        <ResumeHeading
          heading={interest.heading}
          description={interest.description}
        />
      ))}
    </div>
  );
};
