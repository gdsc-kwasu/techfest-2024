import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import scrollToSection from "./scrollToSection";
const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  return (
    <nav>
      <img src="/Logonav.png" alt="" />
      <div
        className={!Mobile ? `navlinks` : `mobileview`}
        onClick={() => setMobile(false)}
      >
        <Link to="/#about" onClick={() => scrollToSection("about")}>
          About
        </Link>
        <Link to="/#speakers" onClick={() => scrollToSection("speakers")}>
          Speakers
        </Link>
        <Link to="/#schedule" onClick={() => scrollToSection("schedule")}>
          Schedule
        </Link>
        <Link to="/#venue" onClick={() => scrollToSection("venue")}>
          Venue
        </Link>
        <Link to="/#partners" onClick={() => scrollToSection("partners")}>
          Partners
        </Link>
        <Link to="/#community" onClick={() => scrollToSection("community")}>
          Community
        </Link>
        <Link className="reg" target="_blank" to="https://bit.ly/gdsckwasu-techfest24">
          Register Now
        </Link>
      </div>
      <button className="mobile" onClick={() => setMobile(!Mobile)}>
        {Mobile ? <FaTimes /> : <RxHamburgerMenu />}
      </button>
    </nav>
  );
};

export default Navbar;
