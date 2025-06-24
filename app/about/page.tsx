import React from "react";
import Hero from "./components/Hero";
import TechnicalArsenal from "./components/TechnicalArsenal";
import StayConnected from "./components/StayConnected";

const AboutPage = () => (
  <div className="flex flex-col min-h-screen bg-gray-50">
    <Hero />
    <TechnicalArsenal />
    <StayConnected />
  </div>
);

export default AboutPage;