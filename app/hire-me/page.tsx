"use client"
import React from "react";
import ContactSection from "../components/ContactSession";
import HeroBanner from "./components/HeroBanner";
import EngagementModels from "./components/EngagementModal";

const HireMePage = () => (
  <main className="min-h-screen">
    <HeroBanner />
    <EngagementModels />
    <ContactSection />
  </main>
);

export default HireMePage; 