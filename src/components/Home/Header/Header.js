import React,{useState} from 'react';
import '../Header/Header.css'
import { TOTAL_SCREENS } from '../../../utilities/screensUtils';


function Header(props) {
    const [selectedScreen, setSelectedScreen] = useState(0);
  
  
    const getHeaderOptions = () => {
        return TOTAL_SCREENS.map((Screen, i) => (
          <div
            key={Screen.screen_name}
            className={getHeaderOptionsClasses(i)}
            onClick={() => switchScreen(i, Screen)}
          >
            <span>{Screen.screen_name}</span>
          </div>
        ));
      };
      const getHeaderOptionsClasses = (index) => {
        let classes = "header-option ";
        if (index < TOTAL_SCREENS.length - 1){
            classes += "header-option-seperator ";}
    
        if (selectedScreen === index){
            classes += "selected-header-option "};
    
        return classes;
      };
      const switchScreen = (index, screen) => {
        let screenComponent = document.getElementById(screen.screen_name);
        if (!screenComponent){ 
            return
        }else{
                screenComponent.scrollIntoView({ behavior: "smooth" });
                setSelectedScreen(index);
                
            }
    
       
      };
    
    
    
    return (
        <div className="header-container" >
        <div className="header-parent">
         
          <div className="header-logo">
            <span>~Margret~</span>
          </div>
          <div className="header-options">
            {getHeaderOptions()}
          </div>
        </div>
      </div>
  
    );
}

export default Header;