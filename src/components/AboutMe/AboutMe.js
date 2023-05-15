import React from 'react';
import './AboutMe.css'
import ScreenHeading from '../ScreenHeading/ScreenHeading';

function AboutMe(props) {
    const SCREEN_CONSTANTS = { 
        description: "Positive, organized and hard working person, looking for a JS position and opportunity to grow my skills , either in frontend or in backend . Able to work well under pressure.",
        highlights: {
            bullets: [
                "Full Stack web development",
                "JavaScript",
                "HTML",
                "CSS",
                "Front End",
                "React ",
                "MongoDB",
                "Building REST API",         
               
           ],
           heading: "Here are a Few Highlights:"
        }
    }

    const renderHighlights = () => {
        return (
            SCREEN_CONSTANTS.highlights.bullets.map((value,i) => (
                <div className="highlight" key={i}>
                    <div className="highlight-blob"></div>
                    <span>{ value }</span>
                </div>
            ))
        )
    }

    return (
        <div className='about-me container' id='About Me'>
            <div className='about-content'></div>
            <ScreenHeading title='About me' />
            <div className='about-me-card'>
                <div className='about-me-profile'></div>
                <div className='about-me-details'> 
                <span className="about-me-description">{SCREEN_CONSTANTS.description}</span>
                    <div className="about-me-highlights">
                        <div className="highlight-heading">
                            <span>{ SCREEN_CONSTANTS.highlights.heading }</span>
                        </div>
                        { renderHighlights() }
                    </div>

                 </div>
            </div>
        </div>
    );
}

export default AboutMe;