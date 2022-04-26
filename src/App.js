import logo from './assets/images/logo.png';
import heroVideo from './assets/video/hero.mp4';

import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
      <img src={logo} className="App-logo" alt="ThieLot Painting Logo" />
      <p className="nav-slogan">Getting the Job Done <span className="nav-emphasis">Right</span> the <span className="nav-emphasis">First Time</span></p>
      <div className="nav-tel">
        <p>(519) 859-9458</p>
        <p>Call Now for a <span className="nav-emphasis">Free</span> Estimate</p>
      </div>
      </nav>
      <header className="App-header">
        <div className="video-overlay">
          <div>
            <h1>ThieLot Painting<span>.</span></h1>
            <p>Premiere Residential and Commercial Painting Services</p>
          </div>

        </div>
        <video src={heroVideo} autoPlay muted></video>

  



        

  
    
         
      </header>
    </div>
  );
}

export default App;
