import React from 'react';
import styles from './Buttons.module.css'
function GetResume(props) {
    return (
        <a href={`${process.env.PUBLIC_URL}/downloads/MargretPetrova.pdf`} download='MargretPetrova.pdf'>

              <button className={styles["btn"]} 
             
              >Get Resume</button>
            </a>
    );
}

export default GetResume;