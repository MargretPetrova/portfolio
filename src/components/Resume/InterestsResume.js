import React from 'react';
import { interestsDetails } from '../../utilities/resumeData';
import { ResumeHeading } from './ResumeHeading';


function InterestsResume(props) {
    return (
       /* Interests */
    <div className="resume-screen-container" key="interests">
    {interestsDetails.map((interest) => (
      <ResumeHeading
        heading={interest.heading}
        description={interest.description}
      />
    ))}
  </div>
    );
}

export default InterestsResume;