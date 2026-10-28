"use client"
import React from "react";
import ContactSection from "../components/ContactSession";
import HeroBanner from "./components/HeroBanner";
import EngagementModels from "./components/EngagementModal";

const HireMePage = () => (
  <main className="flex min-h-screen flex-col">
    <HeroBanner />
    <EngagementModels />
    <ContactSection index="02" />
  </main>
);

export default HireMePage;
