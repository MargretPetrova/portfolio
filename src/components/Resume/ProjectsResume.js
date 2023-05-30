import React from 'react';
import { projectsDetails } from '../../utilities/resumeData';
import { ResumeHeading } from './ResumeHeading';
function ProjectsResume(props) {
    return (
        <div className="resume-screen-container" key="projects">
        {projectsDetails.map((projectsDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectsDetails.title}
            subHeading={projectsDetails.subHeading}
            description={projectsDetails.description}
            fromDate={projectsDetails.duration.fromDate}
            toDate={projectsDetails.duration.toDate}
            link={projectsDetails.link}
          />
        ))}
      </div>
    );
}

export default ProjectsResume;