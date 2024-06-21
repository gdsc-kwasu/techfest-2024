import { Link } from "react-router-dom";
import React from "react";
import scrollToSection from "./scrollToSection";
import { FaArrowUp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <div className="footercontent">
          <img src="/Logo.webp" alt="" />

          <div className="footerlinks">
            <Link to="/#about" onClick={() => scrollToSection("about")}>
              About
            </Link>
            <Link to="/#speakers" onClick={() => scrollToSection("speakers")}>
              Speakers
            </Link>
            <Link to="/#community" onClick={() => scrollToSection("community")}>
              Join the Community
            </Link>
            <Link to="/#venue" onClick={() => scrollToSection("venue")}>
              Venue
            </Link>
            <Link to="/#partners" onClick={() => scrollToSection("faq")}>
              FAQ
            </Link>
          </div>
        </div>
        <button onClick={() => scrollToSection("home")}>
          Back to top
          <FaArrowUp />
        </button>
      </div>
    </div>
  );
};

export default Footer;
