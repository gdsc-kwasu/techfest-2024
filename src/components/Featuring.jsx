import React from "react";

const Featuring = () => {
  return (
    <div className="featuring">
      <div className="content">
        <div className="flex">
          <div className="left">
            <div className="dday">featuring</div>
            <h2>Unique Experience at TechFest’24</h2>
            <p>
              This event encompasses a series of talks, workshops, panel
              sessions, and exhibitions, aimed at educating techies on various
              technologies, providing access to resources, industry experts, an
              opportunity to connect with like-minded individuals, and so much
              more.
            </p>
          </div>
          <div className="right">
            <div className="column">
              <div className="img">
                <img src="public/network.png" alt="" />
              </div>
              <div className="text">
                <h3>Networking</h3>
                <p>
                  Come and network with some of the best minds from various
                  fields in the tech ecosystem.
                </p>
              </div>
            </div>
            <div className="column">
              <div className="img">
                <img src="public/speak.png" alt="" />
              </div>
              <div className="text">
                <h3>Great Speakers</h3>
                <p>
                  Our speakers are experienced in their various fields, and they
                  are ready to cut soap for you!
                </p>
              </div>
            </div>
            <div className="column">
              <div className="img">
                <img src="public/learn.png" alt="" />
              </div>
              <div className="text">
                <h3>Insightful Learning</h3>
                <p>
                  Through workshops, panel sessions, and more, we will be
                  offering insights into what the possibilities are for you in
                  the tech ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featuring;
