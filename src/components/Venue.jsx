import React from "react";

const Venue = () => {
  return (
    <section className="venue">
      <div className="content">
        <div className="flex">
          <div className="left">
            <div className="d-day">event venue</div>
            <h2>
              Grab your 
              Seat Before 
              it’s too Late
            </h2>
            <p className="d-daytxt">
              Switch things up by embracing the buzz of tech events or become
              part of a vibrant community of kindred spirits. Your next
              adventure awaits.
            </p>
            <div className="aboutli">
              <img src="/darklocat.png" alt="" />
              <p>
                ICT Auditorium,
                <br /> Kwara State University, Malete
              </p>
            </div>
          </div>
          <div className="right">
            <img src="/SeatArrangement.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
