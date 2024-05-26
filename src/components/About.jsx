import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section className="about">
      <div className="content">
        <div className="flex">
          <div className="left">
            <img src="/aboutimg.png" alt="" />
          </div>
          <div className="right">
            <div className="dday">About TechFest’24</div>
            <h2>Elevate your Experience at TechFest’24</h2>
            <p>
              TECHFEST’24 is a yearly tech event organized by GDSC KWASU. This
              event seeks to host over a thousand students, tech enthusiasts,
              industry experts, and policy makers, on the Kwara State University
              Campus, Malete.
            </p>
            <div className="list">
              <ul>
                <h3>Date & Time</h3>
                <li>
                  <img src="/Vector.png" alt="" />
                  Saturday June 29, 2024
                </li>
                <li>
                  <img src="/Vector-1.png" alt="" />
                  9:00 AM WAT
                </li>
              </ul>
              <ul>
                <h3>Location</h3>
                <li>
                  <img src="/Vector-2.png" alt="" />
                  ICT Auditorium, Kwara State <br />
                  University, Malete
                </li>
              </ul>
            </div>
            <Link
              className="reg"
              target="_blank"
              to="https://bit.ly/gdsckwasu-techfest24"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
