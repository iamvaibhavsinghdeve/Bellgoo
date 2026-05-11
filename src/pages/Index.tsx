import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { MachineShowcase } from "@/components/MachineShowcase";
import { FifaSection } from "@/components/FifaSection";
import { FeaturedProducts } from "@/components/Products";
import { WhyBellgoo } from "@/components/WhyBellgoo";
import { Testimonials } from "@/components/Testimonials";
import { CtaBanner } from "@/components/CtaBanner";
import { SubscribeModal } from "@/components/SubscribeModal";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Bellgoo · Smart Perfume Machines | Pay Per Spray Luxury Fragrance";
    const meta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute("name", name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    meta("description", "Bellgoo's Advanced Smart Perfume Spraying Machines let you pay per spray and experience luxury fragrances instantly. FIFA World Cup 2026.");
    meta("keywords", "smart perfume machine, pay per spray perfume, luxury fragrance experience, perfume vending machine, Bellgoo");

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Bellgoo",
      description: "Advanced Smart Perfume Spraying Machines — pay per spray luxury fragrance.",
      url: window.location.origin,
      sameAs: ["https://instagram.com/bellgoo"],
    });
    document.head.appendChild(ld);
    return () => { document.head.removeChild(ld); };
  }, []);

  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <MachineShowcase />
      <FifaSection />
      <FeaturedProducts />
      <WhyBellgoo />
      <Testimonials />
      <CtaBanner />
      <SubscribeModal />
    </Layout>
  );
};

export default Index;
