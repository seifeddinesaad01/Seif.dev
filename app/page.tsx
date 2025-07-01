import Hero from "./components/Hero";
import Header from "./components/Header";
import ServicesSection from "./components/Services";
import WhyChooseMe from "./components/WhyChooseMe";
import ContactSection from "./components/ContactSession";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <main
        className="min-h-screen  flex flex-col"
      >
        <Header />
        <Hero />
        <ServicesSection />
        <WhyChooseMe />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
