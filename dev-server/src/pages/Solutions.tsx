import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingBag, Cpu, Building2, Globe, Sparkles, Leaf, BarChart3 } from "lucide-react";
import { useEffect } from "react";

const suite = [
  { icon: ShoppingBag, title: "Online Collection", desc: "Shop Bellgoo's exclusive fragrances from anywhere, with seamless delivery and personalized recommendations." },
  { icon: Cpu, title: "ASPSMs", desc: "Experience instant access to luxury perfumes through smart, interactive machines in high-traffic venues." },
  { icon: Building2, title: "Luxury Retail Boutiques", desc: "Immerse yourself in curated fragrance journeys in elegant retail spaces." },
];

const why = [
  { icon: Globe, title: "Omnichannel Convenience", desc: "Connect online and offline for a unified shopping experience." },
  { icon: Sparkles, title: "Personalization", desc: "AI-driven scent suggestions tailored to your mood and occasion." },
  { icon: Leaf, title: "Sustainability", desc: "Eco-friendly machines with refillable cartridges and reduced packaging waste." },
  { icon: BarChart3, title: "Data Insights for Partners", desc: "Actionable analytics to optimize engagement and sales." },
];

const Solutions = () => {
  useEffect(() => { document.title = "Our Solutions · Bellgoo Signature Fragrance Experiences"; }, []);
  return (
    <Layout>
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
        <div className="container relative max-w-4xl text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">Our Solutions</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1] mb-8">
            Fragrance, <span className="text-gradient-gold italic">Reimagined</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From instant perfume access to immersive brand experiences, our solutions bring fragrance to life. Explore Bellgoo's Signature Fragrance Experiences. Bellgoo brings luxury perfumes to your fingertips!
          </p>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Whether you're at home, on the go, or in curated lifestyle spaces, our solutions redefine how you discover and enjoy premium scents.
          </p>
        </div>
      </section>

      <section className="container py-20">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-14">
          Our Complete <span className="text-gradient-gold italic">Solution Suite</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {suite.map((s) => (
            <div key={s.title} className="glass-panel rounded-2xl p-8 hover:border-gold/40 transition group">
              <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <s.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-20">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-4">
          Why <span className="text-gradient-gold italic">Bellgoo?</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
          Bellgoo transforms fragrance shopping into an experience that's smart, sustainable, and unforgettable.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {why.map((w) => (
            <div key={w.title} className="glass-panel rounded-2xl p-6 hover:border-gold/40 transition">
              <w.icon className="text-gold mb-4" size={26} />
              <h3 className="font-display text-xl mb-2">{w.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="glass-gold rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Bring Bellgoo to <span className="text-gradient-gold italic">Your World</span>
            </h2>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
