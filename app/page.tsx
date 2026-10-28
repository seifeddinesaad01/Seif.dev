import Hero from "./components/Hero";
import Header from "./components/Header";
import FeaturedWork from "./components/FeaturedWork";
import ServicesSection from "./components/Services";
import WhyChooseMe from "./components/WhyChooseMe";
import ContactSection from "./components/ContactSession";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <FeaturedWork />
        <ServicesSection />
        <WhyChooseMe />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
