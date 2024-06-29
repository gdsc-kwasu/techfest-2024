import React from "react";

const Hero = () => {
  
  return (
    <div className="hero">
      <div className="content">
        <div className="flex">
          <div className="left">
            <div className="dday">Saturday June 29, 2024 | 9:00 AM WAT</div>
            <h1>
              Google Developer Students Clubs, KWASU <br />
              <span>TechFest’24</span>
            </h1>
            <div className="countdown">
              <div className="timer">
                <h2>0</h2>
                <h3>Days</h3>
              </div>
              <div className="timer">
                <h2>0</h2>
                <h3>Hours</h3>
              </div>
              <div className="timer">
                <h2>0</h2>
                <h3>minutes</h3>
              </div>
              <div className="timer">
                <h2>0</h2>
                <h3>seconds</h3>
              </div>
            </div>
          </div>
          <div className="right">
            <img src="/TechFest'24Logo.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
