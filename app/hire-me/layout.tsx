import React from "react";
import Header from "../components/Header";

export default function HireMeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
} 