"use client"
import React from "react";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSession";
import HeroBanner from "./components/HeroBanner";
import EngagementModels from "./components/EngagementModal";

const HireMePage = () => (
  <main className="container mx-auto py-12 px-4">
    <HeroBanner />
    <EngagementModels />
    <ContactSection />
    <Footer />
  </main>
);

export default HireMePage; 