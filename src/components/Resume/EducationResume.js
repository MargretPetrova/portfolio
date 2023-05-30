import React from 'react';
import { ResumeHeading } from './ResumeHeading';
import { educationDetails } from '../../utilities/resumeData';

function EducationResume(props) {
    return (
        <div className="resume-screen-container" key="education">
      {educationDetails.map((item) => (
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

export default EducationResume;