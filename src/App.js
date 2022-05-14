import logo from './assets/images/logo.png';
import logosmall from './assets/images/logo-small.png';
import heroVideo from './assets/video/hero.mp4';
import ladder from './assets/images/ladder.jpeg';
import dollar from './assets/images/dollar.svg';
import handshake from './assets/images/handshake.svg';
import paintbrush from './assets/images/paintbrush.svg';
import invoice from './assets/images/invoice.svg';
import arrowright from './assets/images/arrow-right.svg';
import interior from "./assets/images/interior.jpeg";
import interior1 from "./assets/images/interior1.jpeg";
import interior2 from "./assets/images/interior2.jpeg";

import exterior from "./assets/images/exterior.jpeg";
import exterior1 from "./assets/images/exterior1.jpeg";
import exterior2 from "./assets/images/exterior2.jpeg";

import commercial1 from "./assets/images/commercial1.jpeg";
import commercial2 from "./assets/images/commercial2.jpeg";
import commercial3 from "./assets/images/commercial3.jpeg";





import './App.css';

function App() {
  return (  
    <div className="App">
      <nav>
        <img src={logo} className="App-logo" alt="ThieLot Painting Logo" />
        {/* <p className="nav-slogan">Doing the Project Properly the <span className="nav-emphasis">First Time</span></p> */}
        <div className="nav-tel">
          {/* <div className="contact-mobile-span">
            <button className="button">Contact Us</button>
          </div> */}
          <p>(519) 859-9458</p>
          <p>Call Now for a <span className="nav-emphasis">Free</span> Estimate</p>
        </div>
      </nav>
      <div className="contact-mobile-bar">
        <p>Call Now for a <span className="nav-emphasis">Free</span> Estimate</p>
      </div>

      <header className="App-header">

        <div className="video-overlay">
          <div>
            <h1>ThieLot Painting<span>.</span></h1>
            <p>Premiere Residential and Commercial Painting Services</p>
            <div className="contact-desktop-span">
              <button className="button1">Get a Free Estimate</button>
            </div>
          </div>
        </div>
          <video src={heroVideo} type="video/mp4" autoPlay muted loop playsInline ></video>
      </header>
      <main>
          <section>
              <h2 className="subheading">Our Mission</h2>
              <div className="mission-statement">
                  <div>
                  <h3 className="slogan">Doing the Project Properly the <span className="nav-emphasis">First Time</span></h3>
                  <p>At ThieLot Painting, we take pride in every project - that is why we bring top quality workmanship and meticulous attention to detail to every job - large or small.</p>
                  <p>We remain dedicated to delivering the <span className="nav-emphasis">best quality</span> at the most <span className="nav-emphasis">competitive price</span> by combining current technology with old fashioned values and service.</p>
                  <p>We are a family run business with over x years of industry experience and knowledge. Let us help make your home or business look its best! </p>
                  <button className="button1">Contact Us Today</button>
                  </div>

                  <img src={ladder} alt="a bedroom is being painted white"/>
            </div>
          
          </section>

          <section className="feature">
          <h2 className="subheading-2">ThieLot Painting</h2>
          <h4>Offers You</h4>
            <div className="feature-inner">
              <div>
                <div className="feature-container">
                  <img src={invoice} alt=""/>
                  <h3>Free Estimates</h3>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante lobortis, vulputate lectus quis, commodo diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque eget lorem vestibulum, faucibus odio et, maximus orci. Curabitur nec tellus feugiat, semper ex vel, dictum leo.</p>
              </div>
              <div>
                <div className="feature-container">
                  <img src={handshake} alt=""/>
                  <h3>Superior Customer Service</h3>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante lobortis, vulputate lectus quis, commodo diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque eget lorem vestibulum, faucibus odio et, maximus orci. Curabitur nec tellus feugiat, semper ex vel, dictum leo.</p>
              </div>
              <div>
                <div className="feature-container">
                  <img src={dollar} alt=""/>
                  <h3>Competitive Pricing</h3>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante lobortis, vulputate lectus quis, commodo diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque eget lorem vestibulum, faucibus odio et, maximus orci. Curabitur nec tellus feugiat, semper ex vel, dictum leo.</p>
              </div>
              <div>
                <div className="feature-container">
                  <img src={paintbrush} alt=""/>
                  <h3>Top Quality Workmanship</h3>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante lobortis, vulputate lectus quis, commodo diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque eget lorem vestibulum, faucibus odio et, maximus orci. Curabitur nec tellus feugiat, semper ex vel, dictum leo.</p>
              </div>
            </div>
          </section>
        
          <section className="services-section">
            <div className="services-top-bar">
              <div>
                <img src={logosmall} alt=""/>
                <h2 className="subheading"><span className="nav-emphasis-dark">Residential</span> Painting Services</h2>
              </div>
       
            </div>
            <h4>The <span className="nav-emphasis-dark">ThieLot Painting </span>Difference</h4>
              <div className="services-list-wide">
                <div className="services-list-item">
                  <img src={paintbrush} alt=""/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante lobortis, vulputate lectus quis, commodo diam.</p>
                </div>
                <div className="services-list-item">
                  <img src={paintbrush} alt=""/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante lobortis, vulputate lectus quis, commodo diam.</p>
                </div>
                <div className="services-list-item">
                  <img src={paintbrush} alt=""/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante lobortis, vulputate lectus quis, commodo diam.</p>
                </div>
                <div className="services-list-item">
                  <img src={paintbrush} alt=""/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante lobortis, vulputate lectus quis, commodo diam.</p>
                </div>   
              </div>
            <div className="services-overlay">
              <div className="services-img">
                  <div className="services-img-overlay">
                      <h4>Residential Painting Services</h4>
                      <button className="button1">Free Quote</button>
                  </div>
                  <img src={interior} alt=""/>
              </div>
              <div className="services-img">
                  <div className="services-img-overlay">
                    <h4>Residential Painting Services</h4>
                    <button className="button1">Free Quote</button>
                  </div>
                  <img src={exterior1} alt=""/>
              </div>
              <div className="services-img">
                <div className="services-img-overlay">
                    <h4>Residential Painting Services</h4>
                    <button className="button1">Free Quote</button>
                </div>
                <img src={exterior} alt=""/>
              </div>
            </div>
             
            {/* Interior Painting */}
             
            <div className="services-sub-text">
              <h3><span className="nav-emphasis-dark">Interior</span> Painting</h3>   
              <h4>Our Services Include:</h4>
              <div className="services-list-container">
                <div className="services-list-item">
                  <img src={paintbrush} alt=""/>
                  <p>Interior Wall Painting</p>
                </div>
                <div className="services-list-item">
                  <img src={paintbrush} alt=""/>
                  <p>Interior Wall Painting</p>
                </div>
                <div className="services-list-item">
                  <img src={paintbrush} alt=""/>
                  <p>Interior Wall Painting</p>
                </div>
                <div className="services-list-item">
                  <img src={paintbrush} alt=""/>
                  <p>Interior Wall Painting</p>
                </div>
                <div className="services-list-item">
                  <img src={paintbrush} alt=""/>
                  <p>Interior Wall Painting</p>
                </div>
                <div className="services-list-item">
                  <img src={paintbrush} alt=""/>
                  <p>Interior Wall Painting</p>
                </div>
                <div className="services-list-item">
                  <img src={paintbrush} alt=""/>
                  <p>Interior Wall Painting</p>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante lobortis, vulputate lectus quis, commodo diam. </p>
              <button className="button1">Free Interior Painting Quote</button>
            </div>

            {/* Exterior Painting */}
            <div className="services-sub-text">
              <h3><span className="nav-emphasis-dark">Exterior</span> Painting</h3>   
              <h4>Our Services Include:</h4>
              <div className="services-list-container">
                <div className="services-list-item">
                  <img src={paintbrush} alt=""/>
                  <p>Interior Wall Painting</p>
                </div>
                <div className="services-list-item">
                  <img src={paintbrush} alt=""/>
                  <p>Interior Wall Painting</p>
                </div>
                <div className="services-list-item">
                  <img src={paintbrush} alt=""/>
                  <p>Interior Wall Painting</p>
                </div>
                <div className="services-list-item">
                  <img src={paintbrush} alt=""/>
                  <p>Interior Wall Painting</p>
                </div>
                <div className="services-list-item">
                  <img src={paintbrush} alt=""/>
                  <p>Interior Wall Painting</p>
                </div>
                <div className="services-list-item">
                  <img src={paintbrush} alt=""/>
                  <p>Interior Wall Painting</p>
                </div>
                <div className="services-list-item">
                  <img src={paintbrush} alt=""/>
                  <p>Interior Wall Painting</p>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante lobortis, vulputate lectus quis, commodo diam. </p>
              <button className="button1">Free Exterior Painting Quote</button>
            </div>
                  
          </section>
          {/* <section className="estimate-section">
            <div className="estimate-overlay">
              <h2>Book Your Free Estimate Today!</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante lobortis, vulputate lectus quis, commodo diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque eget lorem vestibulum, faucibus odio et, maximus orci. Curabitur nec tellus feugiat, semper ex vel, dictum leo.</p>
              <button className="icon-button">Get a Free Estimate<img src={arrowright} alt=""/></button>
            </div>
          </section> */}
           <section className="services-section">
           <div className="services-top-bar">
              <div>
                <img src={logosmall} alt=""/>
                <h2 className="subheading"><span className="nav-emphasis-dark">Commercial</span> Painting Services</h2>
              </div>
       
            </div>
            <div className="services-overlay">
              <div className="services-img">
                  <div className="services-img-overlay">
                      <h4>Commercial Painting Services</h4>
                      <button className="button1">Free Quote</button>
                  </div>
                  <img src={commercial1} alt=""/>
              </div>
              <div className="services-img">
                  <div className="services-img-overlay">
                    <h4>Commercial Painting Services</h4>
                    <button className="button1">Free Quote</button>
                  </div>
                  <img src={commercial2} alt=""/>
              </div>
              <div className="services-img">
                <div className="services-img-overlay">
                    <h4>Commercial Painting Services</h4>
                    <button className="button1">Free Quote</button>
                </div>
                <img src={commercial3} alt=""/>
              </div>
            </div>
            {/* Commercial Painting Services */}
            <div className="services-sub-text">
              <h3><span className="nav-emphasis-dark">Commercial</span> Painting</h3>   
              <h4>Our Services Include:</h4>
              <div className="services-list-container">
                <div className="services-list-item">
                  <img src={paintbrush} alt=""/>
                  <p>Interior Wall Painting</p>
                </div>
                <div className="services-list-item">
                  <img src={paintbrush} alt=""/>
                  <p>Interior Wall Painting</p>
                </div>
                <div className="services-list-item">
                  <img src={paintbrush} alt=""/>
                  <p>Interior Wall Painting</p>
                </div>
                <div className="services-list-item">
                  <img src={paintbrush} alt=""/>
                  <p>Interior Wall Painting</p>
                </div>
                <div className="services-list-item">
                  <img src={paintbrush} alt=""/>
                  <p>Interior Wall Painting</p>
                </div>
                <div className="services-list-item">
                  <img src={paintbrush} alt=""/>
                  <p>Interior Wall Painting</p>
                </div>
                <div className="services-list-item">
                  <img src={paintbrush} alt=""/>
                  <p>Interior Wall Painting</p>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante lobortis, vulputate lectus quis, commodo diam. </p>
              <button className="button1">Free Commercial Painting Quote</button>
            </div>
           </section>
      </main>
    </div>
  );
}

export default App;
