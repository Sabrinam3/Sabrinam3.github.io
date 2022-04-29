import logo from './assets/images/logo.png';
import logosmall from './assets/images/logo-small.png';
import heroVideo from './assets/video/hero.mp4';
import phone from './assets/images/phone.svg';
import ladder from './assets/images/ladder.jpeg';




import './App.css';

function App() {
  return (
    
    <div className="App">
      <nav>
        <img src={logo} className="App-logo" alt="ThieLot Painting Logo" />
        {/* <p className="nav-slogan">Doing the Project Properly the <span className="nav-emphasis">First Time</span></p> */}
        <div className="nav-tel">
          <div className="contact-mobile-span">
            <button className="button1">Contact Us</button>
          </div>
          <p>(519) 859-9458</p>
          <p>Call Now for a <span className="nav-emphasis">Free</span> Estimate</p>
        </div>
        <div className="contact-mobile-bar">
          <p>Call Now for a <span className="nav-emphasis">Free</span> Estimate</p>
      </div>
      </nav>

      <header className="App-header">
        <div className="video-overlay">
          <div>
            <h1>ThieLot Painting<span>.</span></h1>
            <p>Premiere Residential and Commercial Painting Services</p>
            <div className="contact-desktop-span">
              <button className="button1">Contact Us</button>
            </div>
          </div>
        </div>
          <video src={heroVideo} type="video/mp4" autoPlay muted loop playsInline ></video>
      </header>
      <main>
        <div className="inner-content">
         
            <div className="subheading-bar">
              <h2>Our Mission</h2>
            </div>
          <div className='mission-section'>
            <div className="mission-statement">
              <div>
                 <h3 className="slogan">Doing the Project <span className="nav-emphasis">Properly</span> the <span className="nav-emphasis">First Time</span></h3>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem lacus, finibus eget ligula id, accumsan volutpat tortor. Suspendisse id odio congue nisi pretium fringilla sed et lorem. Vestibulum quis dolor libero. Vivamus et auctor felis, quis scelerisque quam. Duis nec sem lacinia, pretium dolor in, tristique metus. Proin suscipit, elit non egestas ullamcorper, mauris ipsum pellentesque tortor, eget luctus enim erat in nisl. Sed ex ante, feugiat non orci eu, posuere iaculis dui. </p>
              </div>
            </div>
           
            <img src={ladder} alt="a bedroom is being painted white"/>
            
          </div>

        </div>

      </main>
    </div>
  );
}

export default App;
