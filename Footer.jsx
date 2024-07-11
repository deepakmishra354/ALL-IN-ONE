import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section container-fluid container-fluid" >
      <div className="">
        <div className="footer-cta pt-5 pb-5">
          <div className="row p-5">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>
                  Yamraj Nagar, Swarglok - Pincode: 0001, Heaven's Lane, Cloud 9</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>+91 99999-HEAVEN</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>yamraj@swarglok.com
</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 p-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html"><img src="https://i.ibb.co/QDy827D/ak-logo.png" className="img-fluid" alt="logo"/></a>
                </div>
                <div className="footer-text">
                  <p>We could tell you our services are better, faster and more reliable. We believes in cultivating long term strategic relationships and committed to provide the best of services in the most competitive of prices.</p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                  <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                  <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/features">Features</a></li>
                  <li><a href="/contact-us">Portfolio</a></li>
                  <li><a href="/contact-us">Contact</a></li>
                  <li><a href="/about">About us</a></li>
                  <li><a href="#">Our Services</a></li>
                  <li><a href="#">Expert Team</a></li>
                  <li><a href="/contact-us">Contact us</a></li>
                  <li><a href="#">Latest News</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>Do you have question / query, feel free to contact us...   .</p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address"/>
                    <button><i className="fab fa-telegram-plane"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
