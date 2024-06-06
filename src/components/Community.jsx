import React from "react";
import { Link } from "react-router-dom";
const Community = () => {
  return (
    <section className="community">
      <div className="content">
        <div className="flex">
          <div className="left">
            <div className="dday">the community</div>
            <h2>Would you like to become one of our favorite techies?</h2>
            <p>
              The Google Developer Student Clubs chapter at Kwara State
              University.  Fueling Kwara State University's tech community, the
              Google Developer Student Clubs chapter is a hub of innovation and
              collaboration. Through workshops, hackathons, and cutting-edge
              projects, we empower students to shape the future of tech.
            </p>
            <Link
              className="reg"
              target="_blank"
              to="https://gdsc.community.dev/kwara-state-university/"
            >
Join the Community
            </Link>
          </div>
          <div className="right">
            <img src="/Community.webp" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
