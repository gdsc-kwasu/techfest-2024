import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Featuring from "./components/Featuring";
import Speakers from "./components/Speakers";
import Venue from "./components/Venue";
import Sponsors from "./components/Sponsors";
import Community from "./components/Community";
import Schedule from "./components/Schedule";
import Faq from "./components/Faq";
import Idan from "./components/Idan";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>
      <Featuring />
      <section id="speakers">
        <Speakers />
      </section>
      <section id="schedule">
        <Schedule />
      </section>
      <section id="venue">
        <Venue />
      </section>
      <section id="partners">
        <Sponsors />
      </section>
      <section id="community">
        <Community />
      </section>
      <section id="faq">
        <Faq />
      </section>
      <Idan />
      <Footer />
    </>
  );
}

export default App;
