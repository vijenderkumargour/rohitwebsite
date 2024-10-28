import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {

    const [showButton, setShowButton] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollCurrent = window.scrollY;
        const scrollPercentage = (scrollCurrent / scrollTotal) * 100;
        setScrollProgress(scrollPercentage);
        if (scrollCurrent > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };


  return (
    <>
   <footer className="footer-ten">
    <div className="container">
        <div className="footer-content pt-5 pb-5">
            <div className="row">
                <div className="col-xl-4 col-lg-4 mb-50">
                    <div className="footer-widget">
                        <div className="footer-logo">
                            <Link to="/"> React Website</Link>
                        </div>
                        <div className="footer-text">
                            <p>
                                Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <div className="footer-social-icon">
                            <span>Follow us</span>
                            <Link to="/"><i className="fa-brands fa-facebook-f"></i></Link>
                            <Link to="/"><i className="fa-brands fa-twitter"></i></Link>
                            <Link to="/"><i className="fa-brands fa-google-plus-g"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                    <div className="footer-widget">
                        <div className="footer-widget-heading">
                            <h3>SERVICES</h3>
                        </div>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/service">Services</Link></li>
                            <li><Link to="/news">News</Link></li>
                            <li><Link to="/donation">Donation</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                        <hr />
                        <br />
                        <div className="contact-info divider-line ">
                            <div className="contact-heading">Phone:</div>
                            <div className="contact-details"> 8595816380</div>
                            <div className="contact-heading">Email:</div>
                            <div className="contact-details color-primary"><Link to="mailto:shivamsharma1684@gmail.com">contactrohit419@gmail.com</Link></div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                    <div className="footer-widget">
                        <div className="footer-widget-heading">
                            <h3>OPEN TIME</h3>
                        </div>
                        <div className="textwidget">
                            <div className="contact-info divider-line">
                                <div className="contact-heading">Address:</div>
                                <div className="contact-details">Canal Colony Okhla Jamia Nager New Delhi </div>
                            </div>

                            <div className="contact-info">
                                <div className="contact-heading">Hours:</div>
                                <div className="contact-details">Mon - Tue (10:30 - 21:30)</div>
                                <div className="contact-heading">Hours:</div>
                                <div className="contact-details">Wed - Thu (10:30 - 21:30)</div>
                                <div className="contact-heading">Hours:</div>
                                <div className="contact-details">Fri -  (10:30 - 22:30)</div>
                                <div className="contact-heading">Hours:</div>
                                <div className="contact-details">Sat - (11:30 - 22:30)</div>
                                <div className="contact-heading">Hours:</div>
                                <div className="contact-details">Sun - (11:30 - 22:30)</div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div> 
    </div> 
</footer>    

<div className="container-fluid bg-dark text-white-50 py-4">
        <div className="container">
            <div className="row g-5">
                <div className="col-md-12 text-center text-align-center">
                    <p className="mb-0 text-white footlast"> 
                       <span> Copyright © 2024 All rights reserved  By </span>  | <Link to="Rohit" target="_blank" style={{fontWeight: "700"}}>ROHIT </Link>
                    </p>
                </div> 
            </div>
        </div>
    </div>


    <div className="back-to-top-container">
      {showButton && (
        <button className="back-to-top-button" onClick={scrollToTop} title="Go to top">
          <i className="fa-solid fa-arrow-up-long"></i> Top
        </button>
      )}
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>
    </div>

      
    </>
  )
}

export default Footer
