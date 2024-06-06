import React from "react";
import { Link } from "react-router-dom";
const Speakers = () => {
  return (
    <section className="speakers">
      <div className="content">
        <div className="text">
          <div className="d-day">SPEAKERS</div>
          <h2>meet our seasoned speakers</h2>
          <p>
            We have carefully selected speakers from different career paths in
            the tech ecosystem to come and cut soap for you at TECHFEST’24. Dem
            Sabi 100 Percent!
          </p>
        </div>
        <Link
          className="reg"
          target="_blank"
          to="https://bit.ly/gdsckwasu-techfest24"
        >
          Register Now
        </Link>
      </div>
      <div className="image-holder" dir="ltr">
        <div className="image-container">
          <img src="/Jekayin-OluwaOlabemiwo.webp" alt="" />
          <div className="icontent">
            <div className="img-textt jk">
              <h3>Jekayin-Oluwa Olabemiwo</h3>
              <p>Software Engineer</p>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src="/DavidOwolabi.webp" alt="" />
          <div className="icontent">
            <div className="img-textt">
              <h3>David Owolabi</h3>
              <p>Lead designer</p>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src="/CytobizMedics.jpeg" alt="" />
          <div className="icontent">
            <div className="img-textt">
              <h3>jimoh Habibullahi</h3>
              <p>Medtech Expert</p>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src="/FathiBabayeju.webp" alt="" />
          <div className="icontent">
            <div className="img-textt">
              <h3>Fathi Babayeju</h3>
              <p>integration engineer</p>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src="/olajideoluwatoyin.webp" alt="" />
          <div className="icontent">
            <div className="img-textt">
              <h3>Olajide Oluwatoyin</h3>
              <p>Community Manager</p>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src="/AdamAbdullahi.webp" alt="" />
          <div className="icontent">
            <div className="img-textt">
              <h3>Adam Abdullahi</h3>
              <p>AI/Machine learning Engineer</p>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src="/CalebOlojo.webp" alt="" />
          <div className="icontent">
            <div className="img-textt">
              <h3>Caleb Olojo</h3>
              <p>Lead designer</p>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src="/AjijolaAdemola.webp" alt="" />
          <div className="icontent">
            <div className="img-textt">
              <h3>Ademola Ajijola</h3>
              <p>Lead Product Manager</p>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src="/Fola.webp" alt="" />
          <div className="icontent">
            <div className="img-textt">
              <h3>Alaran Khaerat</h3>
              <p>Social Media Manager</p>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src="/DeolaMercy.jpg" alt="" />
          <div className="icontent">
            <div className="img-textt">
              <h3>Mercy Adeola</h3>
              <p>Product Designer</p>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src="/TimiJoel.webp" alt="" />
          <div className="icontent">
            <div className="img-textt">
              <h3>Timi Joel</h3>
              <p>growth associate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
