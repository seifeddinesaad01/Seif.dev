import React from "react";
import Header from "../components/Header";

export default function ProjectsLaout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
} 