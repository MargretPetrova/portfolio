import React from 'react';
import '../Profile/Profile.css';
import ReactTypingEffect from 'react-typing-effect';

function Profile(props) {
    
    const scrollToHireMe = () => {
        let screenComponent = document.getElementById('Contact Me');
        if (!screenComponent){ 
            return
        }else{
                screenComponent.scrollIntoView({ behavior: "smooth" });
               
            }
    
       
      };
    return (
        <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
        
            <div className="profile-details-name">
              <span className="primary-text">
                {" "}
                Hello, I'm <span className="highlighted-text"> Margret</span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                {" "}
                <h1>
                  <ReactTypingEffect
                    text={[
                      "Enthusiastic Dev",
                      "React JS",
                      "Full stack Developer ",
                      "Mern stack Dev ",
                    ]}
                  />
                </h1>
              </span>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end operations.
              </span>
            </div>
  
            <div className="profile-options">
              <button className="btn primary-btn"
              onClick={() => scrollToHireMe()}
              > Hire Me </button>
              <a href="MargretResume.pdf" download="MargretResume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
  
    );
}

export default Profile;