import React from "react";
import { Link } from "react-router-dom";
const Idan = () => {
  return (
    <div className="idan">
      <div className="content">
        <div className="flex">
          <img src="/idan.png" alt="" />
          <div className="text">
            <h2>You like what you see, IDAN?</h2>
            <p>
              With all you’ve seen, Wouldn’t you still register for the event,
              Ehnn Idan?
            </p>
            <Link
              className="reg"
              target="_blank"
              to="https://bit.ly/gdsckwasu-techfest24"
            >
              Raise am!!! ASAP!!!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Idan;
