import React from "react";
import PlatStore from "../assets/playstore.svg";
import iStore from "../assets/istore.svg";
import Facebook from "../assets/facebook.svg";
import LinkedIn from "../assets/linkedin.svg";
import Twitter from "../assets/twitter.svg";
import Blog from "../assets/blog.svg";

const Footer = () => {
  return (
    <>
      <div className="bg-[url('../../src/assets/footerBG.svg)]">
        <div className="flex justify-center">
          <div>
            <h5>Health</h5>
            <p>Medibuddy Gold</p>
            <p>Book Medicine</p>
            <p>Doctor Consultation</p>
            <p>Book a Lab test</p>
            <p>Covid Essential Items</p>
            <p>Dental</p>
            <p>Cancer Care</p>
          </div>
          <div>
            <h5>Hospitalization</h5>
            <p>Plan Hospitalization</p>
            <p>Locate hospital</p>
            <p>
              <span>Download:</span> eCard <span>|</span> Claim forms
            </p>
            <p>Track claim</p>
            <p>FAQs</p>
          </div>
          <div>
            <h5>ABOUT</h5>
            <p>Overview</p>
            <p>Testimonials</p>
            <p>Contact</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Security</p>
          </div>
          <div>
            <p>DOWNLOAD APP</p>
            <div>
              <img src={PlatStore} alt="play-store" />
              <img src={iStore} alt="iStore" />
            </div>
            <p>FOLLOW US</p>
            <div>
              <img src={Facebook} alt="facebook" />
              <img src={LinkedIn} alt="linkedin" />
              <img src={Twitter} alt="twitter" />
              <img src={Blog} alt="blog" />
            </div>
            <div>
              <button>Terms of use</button>
              <button>Privacy Policy</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
