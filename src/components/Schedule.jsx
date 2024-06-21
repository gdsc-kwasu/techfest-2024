import React from "react";
import { Link } from "react-router-dom";

const Schedule = () => {
  return (
    <div className="schedule">
      <div className="content">
        <div className="flex">
          <div className="left">
            <div className="d-day">schedule</div>
            <h2>List of Programmes Planned for this Event</h2>
            <p>
              We want you to come prepared with questions for TECHFEST’24.
              Download the event agenda now to stay updated throughout the
              event.
            </p>
            <Link target="_blank" to="https://docs.google.com/document/d/1NB05DUX-_R0eGi6e1q8Ckj8TsoiLfLCNCxPXnk-E05s/edit?usp=sharing">
              Download Schedule
            </Link>
            <img src="/schedule.webp" alt="" />
          </div>
          <div className="right">
            <div className="list-title">
              <ul>
                <li>09:00 - 11:00</li>
                <li>11:00 - 12:00</li>
                <li>12:00 - 14:00</li>
                <li>14:00 - 15:00</li>
                <li>15:00 - 17:00</li>
              </ul>
              <ul className="list-style-ico">
                <div className="s"></div>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
              </ul>
              <ul className="bitgap">
                <li>
                  <div>
                    Programme 1
                    <p style={{ fontWeight: "500", color: "#B6B6B6" }}>
                      Switch things up by embracing the buzz of tech events or
                      become part of a vibrant community of kindred spirits.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    Programme 2 <br />
                    <p style={{ fontWeight: "500" }}>
                      Switch things up by embracing the buzz of tech events or
                      become part of a vibrant community of kindred spirits.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    Programme 3 <br />
                    <p style={{ fontWeight: "500" }}>
                      Switch things up by embracing the buzz of tech events or
                      become part of a vibrant community of kindred spirits.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    Programme 4 <br />
                    <p style={{ fontWeight: "500" }}>
                      Switch things up by embracing the buzz of tech events or
                      become part of a vibrant community of kindred spirits.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    Programme 5 <br />
                    <p style={{ fontWeight: "500" }}>
                      Switch things up by embracing the buzz of tech events or
                      become part of a vibrant community of kindred spirits.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="list-title-two">
              <div className="row">
                <ul className="list-style-ico-two">
                  <div className="ss"></div>
                  <li>1</li>
                </ul>
                <div className="text">
                  <h4>Programme 1</h4>
                  <p style={{ fontWeight: "500", color: "#B6B6B6" }}>
                    Switch things up by embracing the buzz of tech events or
                    become part of a vibrant community of kindred spirits.
                  </p>
                  <p className="time">09:00 - 11:00</p>
                </div>
              </div>
              <div className="row">
                <ul className="list-style-ico-two">
                  <div className="ss"></div>
                  <li>2</li>
                </ul>
                <div className="text">
                  <h4>Programme 2</h4>
                  <p style={{ fontWeight: "500", color: "#B6B6B6" }}>
                    Switch things up by embracing the buzz of tech events or
                    become part of a vibrant community of kindred spirits.
                  </p>
                  <p className="time">11:00 - 12:00</p>
                </div>
              </div>
              <div className="row">
                <ul className="list-style-ico-two">
                  <div className="ss"></div>
                  <li>3</li>
                </ul>
                <div className="text">
                  <h4>Programme 3</h4>
                  <p style={{ fontWeight: "500", color: "#B6B6B6" }}>
                    Switch things up by embracing the buzz of tech events or
                    become part of a vibrant community of kindred spirits.
                  </p>
                  <p className="time">12:00 - 14:00</p>
                </div>
              </div>
              <div className="row">
                <ul className="list-style-ico-two">
                  <div className="ss"></div>
                  <li>4</li>
                </ul>
                <div className="text">
                  <h4>Programme 4</h4>
                  <p style={{ fontWeight: "500", color: "#B6B6B6" }}>
                    Switch things up by embracing the buzz of tech events or
                    become part of a vibrant community of kindred spirits.
                  </p>
                  <p className="time">14:00 - 15:00</p>
                </div>
              </div>
              <div className="row">
                <ul className="list-style-ico-two">
                  <div className="ss"></div>
                  <li>5</li>
                </ul>
                <div className="text">
                  <h4>Programme 5</h4>
                  <p style={{ fontWeight: "500", color: "#B6B6B6" }}>
                    Switch things up by embracing the buzz of tech events or
                    become part of a vibrant community of kindred spirits.
                  </p>
                  <p className="time">15:00 - 17:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
