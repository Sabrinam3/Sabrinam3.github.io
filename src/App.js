import logo from './assets/images/logo.png';
import logosmall from './assets/images/logo-small.png';
import heroVideo from './assets/video/hero.mp4';
import phone from './assets/images/phone.svg';


import './App.css';

document.addEventListener("scroll", stickyNav);
function stickyNav() {
  const element = document.getElementById("secondary-nav");
  if (window.pageYOffset > 125)
  {
    element.style.display = "block";
    element.style.position = "fixed";
    element.style.top = "0";
    element.style.left = "0";
  }
  else
  {
    element.style.display = "none";
  }
}
function App() {
  return (
    
    <div className="App">
      <nav>
      <img src={logo} className="App-logo" alt="ThieLot Painting Logo" />
      <p className="nav-slogan">Doing the Project Properly the <span className="nav-emphasis">First Time</span></p>
      <div className="nav-tel">
        <div className="contact-mobile-span">
          <button className="button1">Contact Us</button>
        </div>
        <p>(519) 859-9458</p>
        <p>Call Now for a <span className="nav-emphasis">Free</span> Estimate</p>
      </div>
      </nav>
      <div className="contact-mobile-bar">
        <img src={phone} alt="Call Now Icon"/>
        <p>Call Now for a <span className="nav-emphasis">Free</span> Estimate</p>
      </div>
      <div id="secondary-nav">
      <img src={logo} className="App-logo" alt="ThieLot Painting Logo" />
    </div>
      <header className="App-header">
        <div className="video-overlay">
          <div>
            <h1>ThieLot Painting<span>.</span></h1>
            <p>Premiere Residential and Commercial Painting Services</p>
          </div>
        </div>
          <video src={heroVideo} type="video/mp4" autoPlay muted loop playsInline ></video>
        <main>
          
        </main>

  



        

  
    
         
      </header>
    </div>
  );
}

export default App;
