import React from "react";

import logo from "./assets/images/logo.png";
import logosmall from "./assets/images/logo-small.png";
import heroVideo from "./assets/video/hero.mp4";
import dollar from "./assets/images/dollar.svg";
import handshake from "./assets/images/handshake.svg";
import paintbrush from "./assets/images/paintbrush.svg";
import invoice from "./assets/images/invoice.svg";
import phone from "./assets/images/phone.svg";
import email from "./assets/images/email.svg";
import pin from "./assets/images/pin.svg";
import totop from "./assets/images/totop.svg";

import interiorfeature from "./assets/images/site/interior_feature.jpeg";
import exteriorfeature from "./assets/images/site/exterior.jpeg";
import commfeature from "./assets/images/site/commercial_feature.jpeg";

import interiorbeige from "./assets/images/site/interior_beige.jpeg";
import interiorblue from "./assets/images/site/interior_blue.jpeg";
import exteriorhouse from "./assets/images/site/exterior_house.jpeg";

import commercialtools from "./assets/images/site/commercial_tools.jpeg";
import commercialwall from "./assets/images/site/commercial_wall.jpeg";
import commercialhouse from "./assets/images/site/commercial_house.jpeg";

import "./App.css";

import Contact from "./components/Contact.js";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

var myScrollFunc = function() {
  const myID = document.getElementById("dynamic-call");
  var y = window.scrollY;

  if (y >= 100) {
    myID.className = "dynamic-call-show";
  } else {
    myID.className = "dynamic-call-hide";
  }
};

window.addEventListener("scroll", myScrollFunc);

function App() {
  return (
    <div className="App">
      <nav>
        <img src={logo} className="App-logo" alt="ThieLot Painting Logo" />
        <div className="nav-tel">
          <a href="tel:5198599458">
            <p>(519) 859-9458</p>
          </a>
          <a href="tel:5198599458">
            <p>
              Call Now for a <span className="nav-emphasis">Free</span> Estimate
            </p>
          </a>
        </div>
      </nav>
      <ResponsiveAppBar />
      <div className="contact-mobile-bar">
        <a href="tel:5198599458">
          <p>
            Call Now for a <span className="nav-emphasis">Free</span> Estimate
          </p>
        </a>
      </div>

      <header className="App-header">
        {/* <div className="video-overlay">
          <div>
            <h1>
              ThieLot Painting<span>.</span>
            </h1>
            <p>Premiere Residential and Commercial Painting Services</p>
            <div className="contact-desktop-span">
              <a href="#contact">
                <button className="button1">Get a Free Estimate</button>
              </a>
            </div>
          </div>
        </div> */}
        <video
          src={heroVideo}
          type="video/mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </header>
      <main>
        <section id="mission-section">
          <h2 className="subheading">Our Mission</h2>
          <h3 className="slogan">
            Doing the Project Properly the{" "}
            <span className="nav-emphasis-dark">First Time</span>
          </h3>
          <div className="mission-statement">
            <div>
              <p>
                At ThieLot Painting, we take pride in{" "}
                <span className="nav-emphasis">every project</span>. That is why
                we bring top quality workmanship and meticulous attention to
                detail to every job - large or small. We remain dedicated to
                delivering the{" "}
                <span className="nav-emphasis">best quality</span> at the most{" "}
                <span className="nav-emphasis">competitive price</span> by
                combining current technology with old fashioned values and
                service. We are a family run business with over{" "}
                <span className="nav-emphasis">x years </span>of industry
                experience and knowledge. Let us help make your home or business
                look its best!{" "}
              </p>
            </div>
          </div>
          <button className="button1">Contact Us Now</button>
          {/* Services Preview */}
          <div className="services-preview">
            <div className="services-preview-inner">
              <div className="img-hover-zoom img-hover-zoom--blur">
                <img src={interiorfeature} alt="" />
              </div>
              <div className="services-preview-inner-text">
                <h3>Interior Painting</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  ut ante lobortis, vulputate lectus quis, commodo diam. Orci
                  varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                </p>
              </div>

              <a href="#interior">
                <button className="button1">Learn More</button>
              </a>
            </div>
            <div className="services-preview-inner">
              <div className="img-hover-zoom img-hover-zoom--blur">
                <img src={exteriorfeature} alt="" />
              </div>
              <div className="services-preview-inner-text">
                <h3>Exterior Painting</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  ut ante lobortis, vulputate lectus quis, commodo diam. Orci
                  varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                </p>
              </div>
              <a href="#exterior">
                <button className="button1">Learn More</button>
              </a>
            </div>
            <div className="services-preview-inner">
              <div className="img-hover-zoom img-hover-zoom--blur">
                <img src={commfeature} alt="" />
              </div>
              <div className="services-preview-inner-text">
                <h3>Commercial Painting</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  ut ante lobortis, vulputate lectus quis, commodo diam. Orci
                  varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.vulputate lectus quis, commodo diam.
                </p>
              </div>
              <a href="#commercial">
                <button className="button1">Learn More</button>
              </a>
            </div>
          </div>
        </section>

        <section className="feature" id="difference">
          <h2 className="subheading-2">Why Choose ThieLot Painting?</h2>
          <div className="feature-inner">
            <div>
              <div className="feature-container">
                <img src={invoice} alt="" />
                <h3>Free Estimates</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
                ante lobortis, vulputate lectus quis, commodo diam. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Pellentesque eget lorem vestibulum, faucibus odio
                et, maximus orci. Curabitur nec tellus feugiat, semper ex vel,
                dictum leo.
              </p>
            </div>
            <div>
              <div className="feature-container">
                <img src={handshake} alt="" />
                <h3>Superior Customer Service</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
                ante lobortis, vulputate lectus quis, commodo diam. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Pellentesque eget lorem vestibulum, faucibus odio
                et, maximus orci. Curabitur nec tellus feugiat, semper ex vel,
                dictum leo.
              </p>
            </div>
            <div>
              <div className="feature-container">
                <img src={dollar} alt="" />
                <h3>Competitive Pricing</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
                ante lobortis, vulputate lectus quis, commodo diam. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Pellentesque eget lorem vestibulum, faucibus odio
                et, maximus orci. Curabitur nec tellus feugiat, semper ex vel,
                dictum leo.
              </p>
            </div>
            <div>
              <div className="feature-container">
                <img src={paintbrush} alt="" />
                <h3>Top Quality Workmanship</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
                ante lobortis, vulputate lectus quis, commodo diam. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Pellentesque eget lorem vestibulum, faucibus odio
                et, maximus orci. Curabitur nec tellus feugiat, semper ex vel,
                dictum leo.
              </p>
            </div>
          </div>
        </section>

        {/* Estimate Bar */}
        <div className="free-estimate-bar">
          <div>
            <h3>
              ThieLot Painting Delivers the Highest Level of Professionalism and
              Quality
            </h3>
            <h4>
              We provide our expert opinion at every stage of the project and
              are always willing to provide a free estimate
            </h4>
            <a href="#contact">
              <button className="button1">Get Started Today</button>
            </a>
          </div>
        </div>
        <section className="services-section" id="residential">
          <div className="services-top-bar">
            <div>
              <h2 className="subheading">
                <span className="nav-emphasis-dark">Residential</span> Painting
                Services
              </h2>
            </div>
          </div>
          <p>
            ThieLot Paining provides{" "}
            <span className="nav-emphasis-dark">top-quality </span>residential
            painting services in London, Ontario and surrounding area{" "}
          </p>
          <div className="services-overlay">
            <div className="services-img">
              <div className="services-img-overlay">
                <h4>Residential Painting Services</h4>
                <button className="button1">Free Quote</button>
              </div>
              <img src={interiorbeige} alt="" />
            </div>
            <div className="services-img">
              <div className="services-img-overlay">
                <h4>Residential Painting Services</h4>
                <button className="button1">Free Quote</button>
              </div>
              <img src={exteriorhouse} alt="" />
            </div>
            <div className="services-img">
              <div className="services-img-overlay">
                <h4>Residential Painting Services</h4>
                <button className="button1">Free Quote</button>
              </div>
              <img src={interiorblue} alt="" />
            </div>
          </div>
          <div className="spacer-link" id="interior"></div>
          {/* Interior Painting */}
          <div className="services-sub-text">
            <h3>
              <span className="nav-emphasis-dark">Interior</span> Painting
            </h3>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
              ante lobortis, vulputate lectus quis, commodo diam.
            </h5>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
              ante lobortis, vulputate lectus quis, commodo diam. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Pellentesque eget lorem vestibulum, faucibus odio
              et, maximus orci. Curabitur nec tellus feugiat, semper ex vel,
              dictum leo. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Duis ut ante lobortis, vulputate lectus quis, commodo diam.
            </p>
            <h4>
              Interior Painting{" "}
              <span className="nav-emphasis-dark">Services</span> Include:
            </h4>
            <div className="services-list-container">
              <div className="services-list-item">
                <img src={paintbrush} alt="" />
                <p>Interior Wall Painting</p>
              </div>
              <div className="services-list-item">
                <img src={paintbrush} alt="" />
                <p>Interior Wall Painting</p>
              </div>
              <div className="services-list-item">
                <img src={paintbrush} alt="" />
                <p>Interior Wall Painting</p>
              </div>
              <div className="services-list-item">
                <img src={paintbrush} alt="" />
                <p>Interior Wall Painting</p>
              </div>
              <div className="services-list-item">
                <img src={paintbrush} alt="" />
                <p>Interior Wall Painting</p>
              </div>
              <div className="services-list-item">
                <img src={paintbrush} alt="" />
                <p>Interior Wall Painting</p>
              </div>
              <div className="services-list-item">
                <img src={paintbrush} alt="" />
                <p>Interior Wall Painting</p>
              </div>
            </div>
            <h5>Have something else in mind? Ask us about it!</h5>
            <a href="#contact">
              <button className="button1">Interior Painting Quote</button>
            </a>
          </div>

          {/* Exterior Painting */}
          <div className="spacer-link" id="exterior"></div>
          <div className="services-sub-text">
            <h3>
              <span className="nav-emphasis-dark">Exterior</span> Painting
            </h3>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
              ante lobortis, vulputate lectus quis, commodo diam.
            </h5>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
              ante lobortis, vulputate lectus quis, commodo diam. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Pellentesque eget lorem vestibulum, faucibus odio
              et, maximus orci. Curabitur nec tellus feugiat, semper ex vel,
              dictum leo. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Duis ut ante lobortis, vulputate lectus quis, commodo diam.
            </p>
            <h4>
              Exterior Painting{" "}
              <span className="nav-emphasis-dark">Services</span> Include:
            </h4>
            <div className="services-list-container">
              <div className="services-list-item">
                <img src={paintbrush} alt="" />
                <p>Interior Wall Painting</p>
              </div>
              <div className="services-list-item">
                <img src={paintbrush} alt="" />
                <p>Interior Wall Painting</p>
              </div>
              <div className="services-list-item">
                <img src={paintbrush} alt="" />
                <p>Interior Wall Painting</p>
              </div>
              <div className="services-list-item">
                <img src={paintbrush} alt="" />
                <p>Interior Wall Painting</p>
              </div>
              <div className="services-list-item">
                <img src={paintbrush} alt="" />
                <p>Interior Wall Painting</p>
              </div>
              <div className="services-list-item">
                <img src={paintbrush} alt="" />
                <p>Interior Wall Painting</p>
              </div>
              <div className="services-list-item">
                <img src={paintbrush} alt="" />
                <p>Interior Wall Painting</p>
              </div>
            </div>
            <h5>Have something else in mind? Ask us about it!</h5>
            <a href="#contact">
              <button className="button1">Exterior Painting Quote</button>
            </a>
          </div>
          <div className="commercial-section" id="commercial">
            <div className="services-top-bar">
              <div>
                <h2 className="subheading">
                  <span className="nav-emphasis-dark">Commercial</span> Painting
                  Services
                </h2>
              </div>
            </div>
            <p>
              ThieLot Paining provides{" "}
              <span className="nav-emphasis-dark">top-quality </span>commercial
              painting services to businesses in London, Ontario and surrounding
              area{" "}
            </p>

            <div className="services-overlay">
              <div className="services-img">
                <div className="services-img-overlay">
                  <h4>Commercial Painting Services</h4>
                  <button className="button1">Free Quote</button>
                </div>
                <img src={commercialtools} alt="" />
              </div>
              <div className="services-img">
                <div className="services-img-overlay">
                  <h4>Commercial Painting Services</h4>
                  <button className="button1">Free Quote</button>
                </div>
                <img src={commercialwall} alt="" />
              </div>
              <div className="services-img">
                <div className="services-img-overlay">
                  <h4>Commercial Painting Services</h4>
                  <button className="button1">Free Quote</button>
                </div>
                <img src={commercialhouse} alt="" />
              </div>
            </div>
            {/* Commercial Painting Services */}
            <div className="services-sub-text">
              <h3>
                <span className="nav-emphasis-dark">Commercial</span> Painting
              </h3>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
                ante lobortis, vulputate lectus quis, commodo diam.
              </h5>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
                ante lobortis, vulputate lectus quis, commodo diam. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Pellentesque eget lorem vestibulum, faucibus odio
                et, maximus orci. Curabitur nec tellus feugiat, semper ex vel,
                dictum leo. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Duis ut ante lobortis, vulputate lectus quis, commodo
                diam.
              </p>
              <h4>
                Commercial Painting{" "}
                <span className="nav-emphasis-dark">Services</span> Include:
              </h4>
              <div className="services-list-container">
                <div className="services-list-item">
                  <img src={paintbrush} alt="" />
                  <p>Interior Wall Painting</p>
                </div>
                <div className="services-list-item">
                  <img src={paintbrush} alt="" />
                  <p>Interior Wall Painting</p>
                </div>
                <div className="services-list-item">
                  <img src={paintbrush} alt="" />
                  <p>Interior Wall Painting</p>
                </div>
                <div className="services-list-item">
                  <img src={paintbrush} alt="" />
                  <p>Interior Wall Painting</p>
                </div>
                <div className="services-list-item">
                  <img src={paintbrush} alt="" />
                  <p>Interior Wall Painting</p>
                </div>
                <div className="services-list-item">
                  <img src={paintbrush} alt="" />
                  <p>Interior Wall Painting</p>
                </div>
                <div className="services-list-item">
                  <img src={paintbrush} alt="" />
                  <p>Interior Wall Painting</p>
                </div>
              </div>
              <h5>Have something else in mind? Ask us about it!</h5>
              <a href="#contact">
                <button className="button1">Commercial Painting Quote</button>
              </a>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="contact-section" id="contact">
          <h3>Submit a Service Inquiry</h3>
          <Contact />
        </section>
      </main>
      <footer>
        <div className="to-top">
       
          <a href="#mission-section">
            <h5>Back to Top</h5>
            <img src={totop} alt="up-arrow" />
          </a>
         

        </div>
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <img src={logosmall} alt="" className="logo-small"></img>
              <h3>
                ThieLot Painting <span className="nav-emphasis">.</span>
              </h3>
            </div>
            <div className="footer-icon-container">
              <div>
                <div className="footer-icon-grp">
                  <img src={phone} alt="Thielot Painting Phone Number" />
                  <a href="tel:5198599458">
                    <p>(519) 859-9458</p>
                  </a> 
                </div>
                <div className="footer-icon-grp">
                  <img src={email} alt="Thielot Painting Email Address" />
                  <a href="mailto:doug@thielotpainting.ca">
                    <p>doug@thielotpainting.ca</p>
                  </a>
               
                </div>
                <div className="footer-icon-grp">
                  <img src={pin} alt="Thielot Painting Location" />
                  <p>London, ON</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-vcenter">
            <div className="footer-subtext">
              <h4>About Us</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
                ante lobortis, vulputate lectus quis, commodo diam. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus.
              </p>
            </div>
          </div>
          <div className="footer-vcenter">
            <div className="footer-subtext">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#interior">Interior Painting</a>
                </li>
                <li>
                  <a href="#exterior">Exterior Painting</a>
                </li>
                <li>
                  <a href="#commercial">Commercial Painting</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p>	&copy;2022 ThieLot Painting</p>
      </footer>
    </div>
  );
}

export default App;
