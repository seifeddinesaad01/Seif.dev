import Head from "next/head";
import Hero from "./components/Hero";
import Header from "./components/Header";
import ServicesSection from "./components/Services";
import WhyChooseMe from "./components/WhyChooseMe";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Build Your MVP - Future Pro</title>
        <meta
          name="description"
          content="Expert full-stack developer specializing in rapid MVP development and AI integration."
        />
      </Head>

      {/* 
        Container for the entire page with a gradient background.
        I've used a subtle lilac-to-blue gradient, 
        and a cool accent color (#7C3AED, which is a nice purple).
        Feel free to choose any gradient or color palette you like.
      */}
      <main
        className="min-h-screen bg-gradient-to-br from-white to-[#eef2ff] flex flex-col"
      >
        {/* Navbar */}
        <Header />
        {/* Hero Section */}
        <Hero />
        <ServicesSection />
        <WhyChooseMe />
      </main>
    </div>
  );
}
