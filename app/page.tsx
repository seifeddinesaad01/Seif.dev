import Head from "next/head";
import Hero from "./components/Hero";
import Header from "./components/Header";
import ServicesSection from "./components/Services";
import WhyChooseMe from "./components/WhyChooseMe";
import ContactSection from "./components/ContactSession";
import Footer from "./components/Footer";

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
      <main
        className="min-h-screen  flex flex-col"
      >
        {/* Navbar */}
        <Header />
        {/* Hero Section */}
        <Hero />
        <ServicesSection />
        <WhyChooseMe />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
