import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";
import BonusBanner from "@/components/BonusBanner";
import QuickAnswer from "@/components/QuickAnswer";
import PainSolution from "@/components/PainSolution";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ServicesSection id="services" />
      <Testimonials />
      <BonusBanner />
      <QuickAnswer />
      <PainSolution />
      <Faq />
      <ServicesSection />
      <Footer />
    </main>
  );
}
