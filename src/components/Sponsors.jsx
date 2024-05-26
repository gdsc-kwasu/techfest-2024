import React from "react";
import { Link } from "react-router-dom";
const Sponsors = () => {
  return (
    <section className="sponsors">
      <div className="content">
        <div className="upper_content">
          <div className="text">
            <div className="dday">sponsors</div>
            <h2>Last Edition was good, This will be better, LOL</h2>
            <p>Meet our Sponsors from last edition</p>
          </div>
          <Link className="reg" target="_blank" to="https://bit.ly/techfest24-CFP">
Be a Sponsor
        </Link>

        </div>
        <div className="lower_content">
          <div className="row">
            <div className="column nf">
              <img src="/nexford.png" alt="" />
            </div>
            <div className="column cw">
              <img src="/cowrywise.png" alt="" />
            </div>
            <div className="column nf">
              <img src="/nexford.png" alt="" />
            </div>
            <div className="column cw">
              <img src="/cowrywise.png" alt="" />
            </div>
            {/* </div>
          <div className="row"> */}{" "}
            <div className="column cw">
              <img src="/cowrywise.png" alt="" />
            </div>
            <div className="column nf">
              <img src="/nexford.png" alt="" />
            </div>
            <div className="column cw">
              <img src="/cowrywise.png" alt="" />
            </div>
            <div className="column nf">
              <img src="/nexford.png" alt="" />
            </div>
            {/* </div>
          <div className="row"> */}
            <div className="column nf">
              <img src="/nexford.png" alt="" />
            </div>
            <div className="column cw">
              <img src="/cowrywise.png" alt="" />
            </div>
            <div className="column nf">
              <img src="/nexford.png" alt="" />
            </div>
            <div className="column cw">
              <img src="/cowrywise.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
