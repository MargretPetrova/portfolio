
import './App.css';
import PortfolioContainer from './components/PortfolioContainer/PortfolioContainer';
import WebFont from 'webfontloader';
import { useEffect, useState } from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Chilanka']
      }
    });
   }, []);


  return (
   
    <div className="App">
        <ToastContainer/>
     <PortfolioContainer/>
   
    </div>
   
  );
}

export default App;
