import React from "react";
import Hero from "./components/Hero";
import TechnicalArsenal from "./components/TechnicalArsenal";
import StayConnected from "./components/StayConnected";
import PersonalPhilosophy from "./components/PersonalPhilosophy";
import CallToAction from "./components/CallToAction";
import Footer from "../components/Footer";

const AboutPage = () => (
  <div className="flex flex-col min-h-screen">
    <Hero />
    <PersonalPhilosophy />
    <TechnicalArsenal />
    <StayConnected />
    <CallToAction />
    <Footer />
  </div>
);

export default AboutPage;