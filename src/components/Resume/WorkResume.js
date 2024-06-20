import React from "react";
import  ResumeHeading  from "../Resume/ResumeHeading"
import { workDetails } from "../../utilities/resumeData";

export default function WorkResume(props) {
  return (
    <div className="resume-screen-container" key="work">
      {workDetails.map((item) => (
        <ResumeHeading
          heading={item.heading}
          subHeading={item.subHeading}
          fromDate={item.fromDate}
          toDate={item.toDate}
        />
      ))}
    </div>
  );
}
