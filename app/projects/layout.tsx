import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProjectsLaout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
} 