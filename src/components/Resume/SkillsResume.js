import React from 'react';
import { programmingSkillsDetails } from '../../utilities/resumeData';

function SkillsResume(props) {
    return (
        <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills"
      >
        {programmingSkillsDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
        
          </div>
        ))}
      </div>
    );
}

export default SkillsResume;