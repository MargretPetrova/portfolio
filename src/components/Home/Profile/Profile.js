import React from "react";
import styles from "../Profile/Profile.module.css";
import ReactTypingEffect from "react-typing-effect";
import HireMe from "../../Buttons/HireMe";
import GetResume from "../../Buttons/GetResume";


function Profile(props) {
  const scrollToHireMe = () => {
    let screenComponent = document.getElementById("Contact Me");
    if (!screenComponent) {
      return;
    } else {
      screenComponent.scrollIntoView({ behavior: "smooth" });
    }
  };
  
 
   return (
    <div className={styles["profile-container"]}>
      <div className={styles["profile-parent"]}>
        <div className={styles["profile-details"]}>
          <div className={styles["profile-details-name"]}>
            <span className={styles["primary-text"]}>
              Hello, I'm <span className={styles["highlighted-text"]}> Margret</span>
            </span>
          </div>
          <div className={styles["profile-details-role"]}>
            <span className={styles["primary-text"]}>
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
            <span className={styles["profile-role-tagline"]}>
              Knack of building applications with front and back end operations.
            </span>
          </div>

          <div className={styles["profile-options"]}>
            <HireMe scrollToHireMe={scrollToHireMe}></HireMe>
            <GetResume></GetResume>
          </div>
        </div>
        <div className={styles["profile-picture"]}>
          <div className={styles["profile-picture-background"]}></div>
        </div>
      </div>
    </div>
  );
}


export default Profile;
