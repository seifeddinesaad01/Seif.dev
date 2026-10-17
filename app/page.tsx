import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedWork from "./components/FeaturedWork";
import Focus from "./components/Focus";
import ContactSection from "./components/ContactSession";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedWork />
      <Focus />
      <ContactSection />
      <Footer />
    </main>
  );
}
