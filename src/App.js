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
import interiornew from "./assets/images/site/interior_new.jpeg";
import exteriorfeature from "./assets/images/site/exterior_feature.jpeg";
import commfeature from "./assets/images/site/commercial_feature.jpeg";

import interiorbeige from "./assets/images/site/interior_beige.jpeg";
import interiorblue from "./assets/images/site/interior_blue.jpeg";
import exteriordeck from "./assets/images/site/exterior_deck.jpeg";
import exteriorhouse from "./assets/images/site/exterior_house.jpeg";

import commercialtools from "./assets/images/site/commercial_tools.jpeg";
import commercialwall from "./assets/images/site/commercial_wall.jpeg";
import commercialhouse from "./assets/images/site/commercial_house.jpeg";

import estimate from "./assets/images/site/estimate.jpeg";
import prep from "./assets/images/site/prep.jpeg";
import painting from "./assets/images/site/painting.jpeg";


import collage from "./assets/images/site/collage.png";

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
        <img src={logo} className="App-logo" alt="Thielot Painting Logo" />
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
        <div className="video-overlay">
          <div>
            <h1>
              ThieLot Painting<span>.</span>
            </h1>
            <p>Professional Residential and Commercial Painting Services</p>
            <div className="contact-desktop-span">
              <a href="#contact">
                <button className="button1">Get a Free Estimate</button>
              </a>
            </div>
          </div>
        </div>
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
            Doing the Project Properly the <span className="nav-emphasis-dark">First Time</span>
          </h3>
          <div className="mission-statement">
            <div>
              <p>
                At ThieLot Painting, we take pride in <b>every project</b>. That is why
                we bring top quality workmanship and meticulous attention to
                detail to every job - large or small. We remain dedicated to
                delivering the best quality at the most competitive price by
                combining current technology with old fashioned values and
                service. We are a family run business with extensive industry
                experience and knowledge.
              </p>
              <p>ThieLot Painting provides a variety of residential and commercial painting services to <b>London, Ontario</b> and the surrounding area.</p>
            </div>
          </div>
          {/* Services Preview */}
          <div className="services-preview">
            <div className="services-preview-inner">
              <div className="img-hover-zoom img-hover-zoom--blur">
                <img src={interiorbeige} alt="" />
              </div>
              <div className="services-preview-inner-text">
                <h3>Interior Painting</h3>
                <p>
                  Whether you need to repaint your entire home, refresh a couple of rooms, or create a stunning accent wall - our reliable interior painting services will help you create the perfect space to call home
                </p>
              </div>

              <a href="#interior">
                <button className="button1">Learn More</button>
              </a>
            </div>
            <div className="services-preview-inner">
              <div className="img-hover-zoom img-hover-zoom--blur">
                <img src={exteriordeck} alt="" />
              </div>
              <div className="services-preview-inner-text">
                <h3>Exterior Painting</h3>
                <p>
                  The outside of your home should look as great as the inside. Enhance your curb appeal and watch our custom exterior painting services create the vision you have for your home
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
                A fresh coat of paint can create a welcoming environment for your customers. We have the industry experience and product knowledge to handle a variety of commercial painting projects
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
                <h3>No Cost, Zero Obligation Estimates</h3>
              </div>
              <p>
               ThieLot Painting understands the importance of finding the right team of painters to bring your vision for your home or business to life. We are always happy to discuss the details of your project including product choices and cost estimates with zero obligation. Call us today and we will be happy to discuss the value we can bring to your project.
              </p>
            </div>
            <div>
              <div className="feature-container">
                <img src={handshake} alt="" />
                <h3>Friendly Customer Service</h3>
              </div>
              <p>
                ThieLot Painting's mission is to combine unsurpassed customer service with top-quality workmanship. We are a local, family-owned and operated business and we bring these values to the job from start to finish. We go above and beyond to ensure you are satisfied with the quality of our work and we are pleased to offer a satisfaction guarantee on all of our services.
              </p>
            </div>
            <div>
              <div className="feature-container">
                <img src={paintbrush} alt="" />
                <h3>Top Quality Workmanship</h3>
              </div>
              <p>
                Our small team of professional painters have both expert product knowledge and extensive industry experience. By tailoring the best products and tools for each project, we ensure a top quality result each and every time. From start to finish, we provide trustworthy and efficient service that you can count on.
              </p>
            </div>
            <div>
              <div className="feature-container">
                <img src={dollar} alt="" />
                <h3>Competitive Pricing</h3>
              </div>
              <p>
                ThieLot Painting offers prices that are extremely competitive with other painting companies in the area. We are happy to discuss product options to ensure the best possible result while staying within your budget. To find out more, request a free quote using the contact form below or call us today.
              </p>
            </div>
            
          </div>
        </section>

        {/* Estimate Bar */}
        <div className="free-estimate-bar">
          <div>
            <h3>
              ThieLot Painting Offers the Highest Standard of <span className="free-estimate-emphasis">Professionalism</span> and
              <span className="free-estimate-emphasis"> Quality</span>
            </h3>
            <h4>
              Doing the project properly the first time, every time.
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
            ThieLot Painting helps your home look its best - both inside and out!
          </p>
          <div className="services-overlay">
            <div className="services-img">
              <div className="services-img-overlay">
                <h4>Residential Painting Services</h4>
                <a href="#contact"><button className="button1">Free Quote</button></a>
              </div>
              <img src={exteriorfeature} alt="" />
            </div>
            <div className="services-img">
              <div className="services-img-overlay">
                <h4>Residential Painting Services</h4>
                <a href="#contact"><button className="button1">Free Quote</button></a>
              </div>
              <img src={exteriorhouse} alt="" />
            </div>
            <div className="services-img">
              <div className="services-img-overlay">
                <h4>Residential Painting Services</h4>
                <a href="#contact"><button className="button1">Free Quote</button></a>
              </div>
              <img src={interiornew} alt="" />
            </div>
          </div>
          <div className="spacer-link" id="interior"></div>
          {/* Interior Painting */}
          <div className="services-sub-text">
            <h3>
              <span className="nav-emphasis-dark">Interior</span> Painting
            </h3>
            <h5>
              ThieLot Painting provides custom painting services from interior or accent walls, to trims, and everything in between.
            </h5>

            <p>
              Your home should be a place where you can unwind after a long day, a place where you can make memories for years to come and a place that inspires you. We understand that a fresh coat of paint can help make a house feel like home. Our interior painting services deliver a professional and seamless experience from start to finish. Unsure what color to choose? We provide color consultation to help you choose a color that will complement your space.
            </p>
            <h4>
              Interior Painting{" "}
              <span className="nav-emphasis-dark">Services</span> Include:
            </h4>
            <div className="services-list-container">
            <div className="services-list-item">
                <img src={paintbrush} alt="" />
                <p>Colour Consultation</p>
              </div>
              <div className="services-list-item">
                <img src={paintbrush} alt="" />
                <p>Kitchens</p>
              </div>
              <div className="services-list-item">
                <img src={paintbrush} alt="" />
                <p>Bathrooms</p>
              </div>
              <div className="services-list-item">
                <img src={paintbrush} alt="" />
                <p>Interior Wall Painting</p>
              </div>
              <div className="services-list-item">
                <img src={paintbrush} alt="" />
                <p>Accent Walls</p>
              </div>
              <div className="services-list-item">
                <img src={paintbrush} alt="" />
                <p>Trims</p>
              </div>
              <div className="services-list-item">
                <img src={paintbrush} alt="" />
                <p>Cabinet Painting</p>
              </div>
            </div>
            <h5>Have something else in mind? Ask us about it!</h5>
            <a href="#contact">
              <button className="button1-dark">Get a Free Estimate</button>
            </a>
          </div>

          {/* Exterior Painting */}
          <div className="spacer-link" id="exterior"></div>
          <div className="services-sub-text">
            <h3>
              <span className="nav-emphasis-dark">Exterior</span> Painting
            </h3>
            <h5>
              ThieLot Painting provides detail-oriented exterior painting services that can enhance the curb appeal of your home. 
            </h5>

            <p>
              When it comes to exterior painting, we understand the importance of choosing quality products that can withstand the elements. We apply our expert product knowledge and meticulous attention to detail to paint your deck, sidings, doors, and other surfaces outside of your home
            </p>
            <h4>
              Exterior Painting{" "}
              <span className="nav-emphasis-dark">Services</span> Include:
            </h4>
            <div className="services-list-container">
              <div className="services-list-item">
                <img src={paintbrush} alt="" />
                <p>Deck Painting</p>
              </div>
              <div className="services-list-item">
                <img src={paintbrush} alt="" />
                <p>Sidings</p>
              </div>
              <div className="services-list-item">
                <img src={paintbrush} alt="" />
                <p>Doors</p>
              </div>
              <div className="services-list-item">
                <img src={paintbrush} alt="" />
                <p>Garages</p>
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
            <button className="button1-dark">Get a Free Estimate</button>
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
              ThieLot Paining can help you create a warm and welcoming environment for your business or commercial property!
            </p>

            <div className="services-overlay">
              <div className="services-img">
                <div className="services-img-overlay">
                  <h4>Commercial Painting Services</h4>
                  <a href="#contact"><button className="button1">Free Quote</button></a>
                </div>
                <img src={commercialtools} alt="" />
              </div>
              <div className="services-img">
                <div className="services-img-overlay">
                  <h4>Commercial Painting Services</h4>
                  <a href="#contact"><button className="button1">Free Quote</button></a>
                </div>
                <img src={commercialwall} alt="" />
              </div>
              <div className="services-img">
                <div className="services-img-overlay">
                  <h4>Commercial Painting Services</h4>
                  <a href="#contact"><button className="button1">Free Quote</button></a>
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
                ThieLot Painting has the product knowledge and industry experience to handle a variety of commercial painting projects. Our meticulous attention to detail and friendly service will provide an efficient and worry-free experience.
              </h5>

              <p>
               No matter the type of business you own and operate, our commercial painting services can help create a welcoming environment for your customers or clients. We will work efficiently to minimize disruption to your business, while providing the reliable service and high quality of work that ThieLot Painting is known for.
              </p>
              <h4>
                Commercial Painting{" "}
                <span className="nav-emphasis-dark">Services</span> Include:
              </h4>
              <div className="services-list-container">
              <div className="services-list-item">
                  <img src={paintbrush} alt="" />
                  <p>Interior and Exterior Painting</p>
                </div>
                <div className="services-list-item">
                  <img src={paintbrush} alt="" />
                  <p>Office Spaces</p>
                </div>
                <div className="services-list-item">
                  <img src={paintbrush} alt="" />
                  <p>Schools and Universities</p>
                </div>
                <div className="services-list-item">
                  <img src={paintbrush} alt="" />
                  <p>Medical Facilities</p>
                </div>
                <div className="services-list-item">
                  <img src={paintbrush} alt="" />
                  <p>Restaurants and Hospitality</p>
                </div>
              </div>
              <h5>Have something else in mind? Ask us about it!</h5>
              <a href="#contact">
                <button className="button1-dark">Get a Free Estimate</button>
              </a>
            </div>
          </div>
        </section>
        {/* Process Intro Section */}
        <section id="process-intro">
          <div className="process-intro-text">
          <img src={logosmall} alt=""/>
              <h2>Our Painting Process </h2>
              <p>Our company values are evident in our painting process. From estimate to cleanup, ThieLot Painting prioritizes the needs of our customers.</p>
              <h4>Want to Hear More?</h4>
              <a href="tel:5198599458">
                <button className="button1-dark">Call Us Now</button>
              </a>
          </div>
          <div>
          <img src={collage} alt=""/>
          </div>
          
        </section>
        {/* Process Section 1*/}
        <section className="process process1">
          <div className="process-sub">
            <div className="process-sub-img">
              <img src={estimate} alt=""/>
            </div>
            <div>
              <h3>Service Estimate</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non faucibus sapien, nec commodo risus. Praesent venenatis cursus justo, vitae molestie nibh accumsan sollicitudin. Vestibulum faucibus eget ex ut fringilla. Quisque vulputate rhoncus nisl et consectetur. In iaculis scelerisque auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur eros ante, tempus ut eleifend sit amet, eleifend at quam. Maecenas ornare pulvinar tellus, id pharetra mi pellentesque in.</p>
            </div>
          </div>
        </section>

        {/* Process Section 2*/}
        <section className="process process2">
          <div className="process-sub2">
            <div>
              <h3>Preparing to Paint</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non faucibus sapien, nec commodo risus. Praesent venenatis cursus justo, vitae molestie nibh accumsan sollicitudin. Vestibulum faucibus eget ex ut fringilla. Quisque vulputate rhoncus nisl et consectetur. In iaculis scelerisque auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur eros ante, tempus ut eleifend sit amet, eleifend at quam. Maecenas ornare pulvinar tellus, id pharetra mi pellentesque in.</p>
            </div>
            <div className="process-sub-img">
              <img src={prep} alt=""/>
            </div>
          </div>
        </section>

        {/* Process Section 3*/}
        <section className="process process1">
          <div className="process-sub">
            <div className="process-sub-img">
              <img src={painting} alt=""/>
            </div>
            <div>
              <h3>Painting</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non faucibus sapien, nec commodo risus. Praesent venenatis cursus justo, vitae molestie nibh accumsan sollicitudin. Vestibulum faucibus eget ex ut fringilla. Quisque vulputate rhoncus nisl et consectetur. In iaculis scelerisque auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur eros ante, tempus ut eleifend sit amet, eleifend at quam. Maecenas ornare pulvinar tellus, id pharetra mi pellentesque in.</p>
            </div>
          </div>
        </section>

         {/* Process Section 4*/}
         <section className="process process2">
          <div className="process-sub2">
            <div>
              <h3>Cleaning Up</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non faucibus sapien, nec commodo risus. Praesent venenatis cursus justo, vitae molestie nibh accumsan sollicitudin. Vestibulum faucibus eget ex ut fringilla. Quisque vulputate rhoncus nisl et consectetur. In iaculis scelerisque auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur eros ante, tempus ut eleifend sit amet, eleifend at quam. Maecenas ornare pulvinar tellus, id pharetra mi pellentesque in.</p>
            </div>
            <div className="process-sub-img">
              <img src={prep} alt=""/>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="contact-section" id="contact">
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
                  <a href="mailto:thielotpainting@gmail.com">
                    <p>thielotpainting@gmail.com</p>
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
                ThieLot Painting is proud to offer professional residential and commercial painting services to London, Ontario and surrounding area. We are a local, family operated business and combine industry standard technology with old fashioned values and friendly customer service.
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
