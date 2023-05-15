import logo from './logo.svg';
import './App.css';
import PortfolioContainer from './components/PortfolioContainer/PortfolioContainer';
import WebFont from 'webfontloader';
import { useEffect } from 'react';

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
     <PortfolioContainer/>
    </div>
  );
}

export default App;
