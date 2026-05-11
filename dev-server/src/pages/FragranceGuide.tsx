import { Layout } from "@/components/Layout";
import { useEffect } from "react";
import { Sparkles, Flower2, Trees, Flame, Droplets, Clock, Heart, Leaf } from "lucide-react";

const families = [
  { icon: Droplets, name: "Fresh", desc: "Bright, clean, energetic — citrus, green, aquatic." },
  { icon: Flower2, name: "Floral", desc: "Romantic, elegant — rose, jasmine, tuberose, peony." },
  { icon: Trees, name: "Woody / Aromatic", desc: "Grounded, sophisticated — cedar, sandalwood, vetiver, herbs." },
  { icon: Flame, name: "Amber / Gourmand", desc: "Warm, enveloping — vanilla, amber, spices, sweet edible notes." },
];

const pyramid = [
  { label: "Top notes", desc: "First impression (5–20 minutes)." },
  { label: "Heart notes", desc: "The character (1–2+ hours)." },
  { label: "Base notes", desc: "Depth and longevity (many hours)." },
];

const venues = [
  { name: "Airports & Duty-Free", desc: "Fresh profiles; QR codes for offers and reorders." },
  { name: "Hotels & Resorts", desc: "Spa-like daytime scents; richer evening scents." },
  { name: "Cigar Lounges & Nightlife", desc: "Woody, spicy, semi-sweet scents." },
  { name: "Megachurches & Events", desc: "Clean, respectful profiles." },
];

const FragranceGuide = () => {
  useEffect(() => {
    document.title = "Fragrance Guide · Bellgoo | Discover Your Signature Scent";
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement("meta"); m.setAttribute("name", "description"); document.head.appendChild(m); }
    m.setAttribute("content", "Navigate fragrance families and find the perfume that feels uniquely yours with Bellgoo's smart fragrance guide.");
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="container pt-32 pb-16">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Fragrance Guide</p>
          <h1 className="font-display text-5xl md:text-7xl mb-6">
            Your Guide to <span className="text-gradient-gold italic">Scent Discovery</span>
          </h1>
          <p className="text-lg text-foreground/75 leading-relaxed">
            Navigate fragrance families and find the perfume that feels uniquely yours.
          </p>
          <div className="gold-divider w-32 mx-auto mt-8" />
        </div>
      </section>

      {/* Three intro pillars */}
      <section className="container pb-20">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: Sparkles, title: "The Basics of Fragrance Families", desc: "Perfumes are grouped into categories — floral, woody, fresh, and spicy. Understanding these helps you choose scents that match your mood, style, or occasion." },
            { icon: Heart, title: "Making It Personal", desc: "Fragrance is more than scent — it's identity. Whether bold, elegant, or understated, our guide helps you connect with a fragrance that feels like an extension of yourself." },
            { icon: Sparkles, title: "Try, Test, and Explore", desc: "Our Advanced Smart Perfume Spraying Machines (ASPSMs) make it easy to sample and purchase perfumes instantly. Try different families, layer scents, and discover your signature fragrance in a fun, modern way." },
          ].map((p) => (
            <div key={p.title} className="glass-panel rounded-2xl p-8">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center mb-5">
                <p.icon size={20} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl text-gold mb-3">{p.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Families */}
      <section className="container pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl mb-4">Fragrance Families <span className="text-gradient-gold">— A Simple Map</span></h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Bellgoo's mission is to make luxury scent simple, intuitive, and beautiful — online, in our Retail Luxury Boutiques (RLBs), and through ASPSMs in real-world locations.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {families.map((f) => (
              <div key={f.name} className="glass-gold rounded-2xl p-6 hover:shadow-gold transition-shadow">
                <f.icon size={28} className="text-gold mb-4" />
                <h3 className="font-display text-2xl text-foreground mb-2">{f.name}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pyramid */}
      <section className="container pb-20">
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-10">
          <div className="flex items-center gap-3 mb-6">
            <Clock size={20} className="text-gold" />
            <h2 className="font-display text-3xl md:text-4xl">The Fragrance <span className="text-gradient-gold">Pyramid</span></h2>
          </div>
          <div className="space-y-5">
            {pyramid.map((p, i) => (
              <div key={p.label} className="flex gap-5 items-start">
                <span className="font-display text-3xl text-gold/60 w-10">0{i + 1}</span>
                <div>
                  <h4 className="font-display text-xl text-gold mb-1">{p.label}</h4>
                  <p className="text-sm text-foreground/70">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className="container pb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-center mb-12">How to Choose Your Scent <span className="text-gradient-gold">with Bellgoo</span></h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Context", desc: "Travel, business, worship, date, nightlife, or everyday wear." },
              { title: "Mood", desc: "Fresh, Elegant, Bold, Romantic, Cozy." },
              { title: "Sample smart with ASPSMs", desc: "Precise, hygienic, metered sprays." },
              { title: "Wear, then decide", desc: "Allow 30–90 minutes for development." },
            ].map((s) => (
              <div key={s.title} className="glass-panel rounded-2xl p-6">
                <h3 className="font-display text-xl text-gold mb-2">{s.title}</h3>
                <p className="text-sm text-foreground/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="container pb-20">
        <div className="max-w-4xl mx-auto glass-gold rounded-3xl p-10 text-center">
          <Leaf size={32} className="text-gold mx-auto mb-4" />
          <h2 className="font-display text-3xl md:text-4xl mb-4">Sustainable Fragrance Habits <span className="text-gradient-gold">with Bellgoo</span></h2>
          <p className="text-foreground/75 leading-relaxed">
            Bellgoo supports refillable formats and reduced packaging through metered micro-dosing, refillable ASPSM cartridges, and better education that reduces blind-buy returns and unused bottles.
          </p>
        </div>
      </section>

      {/* Venues */}
      <section className="container pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-center mb-12">Using Bellgoo ASPSMs in <span className="text-gradient-gold">Different Venues</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {venues.map((v) => (
              <div key={v.name} className="glass-panel rounded-2xl p-6">
                <h3 className="font-display text-lg text-gold mb-2">{v.name}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing line */}
      <section className="container pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display text-2xl md:text-3xl italic text-foreground/85 leading-relaxed">
            With Bellgoo — online and on the go — every spray is an invitation to{" "}
            <span className="text-gradient-gold not-italic">"Be Bellgoo — Be Beautifully Luxurious and Gorgeous."</span>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default FragranceGuide;
