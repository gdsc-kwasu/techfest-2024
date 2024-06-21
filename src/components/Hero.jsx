import React, { useState, useEffect } from "react";

const Hero = () => {
  const [expiryTime, setExpiryTime] = useState("29 jun 2024 09:00:00");
  const [countdownTime, setCountdownTime] = useState({
    countdownDays: "",
    countdownHours: "",
    countdownMinutes: "",
    countdownSeconds: "",
  });

  const countdownTimer = () => {
    const timeInterval = setInterval(() => {
      const countdownDateTime = new Date(expiryTime).getTime();
      const currentTime = new Date().getTime();
      const remainingDayTime = countdownDateTime - currentTime;
      const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor(
        (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const totalMinutes = Math.floor(
        (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

      const runningCountdownTime = {
        countdownDays: totalDays,
        countdownHours: totalHours,
        countdownMinutes: totalMinutes,
        countdownSeconds: totalSeconds,
      };

      setCountdownTime(runningCountdownTime);

      if (remainingDayTime < 0) {
        clearInterval(timeInterval);
        setExpiryTime(false);
      }
    }, 1000);
  };

  useEffect(() => {
    countdownTimer();
  });
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
                <h2>{countdownTime.countdownDays}</h2>
                <h3>Days</h3>
              </div>
              <div className="timer">
                <h2>{countdownTime.countdownHours}</h2>
                <h3>Hours</h3>
              </div>
              <div className="timer">
                <h2>{countdownTime.countdownMinutes}</h2>
                <h3>minutes</h3>
              </div>
              <div className="timer">
                <h2>{countdownTime.countdownSeconds}</h2>
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
