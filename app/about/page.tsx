import React from "react";
import Hero from "./components/Hero";
import TechnicalArsenal from "./components/TechnicalArsenal";
import StayConnected from "./components/StayConnected";
import PersonalPhilosophy from "./components/PersonalPhilosophy";
import CallToAction from "./components/CallToAction";

const AboutPage = () => (
  <main className="flex min-h-screen flex-col">
    <Hero />
    <PersonalPhilosophy />
    <TechnicalArsenal />
    <StayConnected />
    <CallToAction />
  </main>
);

export default AboutPage;
