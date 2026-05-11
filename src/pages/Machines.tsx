import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Sparkles, Cpu, Monitor, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";
import { VideoPlayer } from "@/components/VideoPlayer";
import machineVideo from "@/assets/bellgoo-machine-2.mp4";

import { useEffect } from "react";

const pillars = [
  {
    icon: Cpu,
    title: "Connected Advanced Smart Perfume Spraying Machines (ASPSMs)",
    desc: "Our touchless, self-service ASPSMs let users enjoy premium fragrances instantly in seconds—fresh and completely hands-free. Elegant, hygienic, and playful — every interaction leaves a lasting impression.",
  },
  {
    icon: Monitor,
    title: "Integrated Visual Advertising",
    desc: "Your brand deserves attention. Each Bellgoo machine comes with a high-definition screen that entertains, informs, and engages customers while they explore your scents.",
  },
  {
    icon: LayoutDashboard,
    title: "Smart Management Platform",
    desc: "Campaigns made simple. Track, update, and optimize your advertising remotely with our intuitive digital platform—flexible, fast, and stress-free.",
  },
];

const Machines = () => {
  useEffect(() => {
    document.title = "ASPSMs · Smart Perfume Vending Machines | Bellgoo";
  }, []);
  return (
    <Layout>
      {/* HERO */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
        <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4 flex items-center gap-2">
              <Sparkles size={14} /> Advanced Smart Perfume Spraying Machine
            </p>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-6">
              Where Fragrance Meets <span className="text-gradient-gold italic">Innovation</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Instant elegance, anytime, anywhere. Our touchless Advanced Smart Perfume Spraying Machines (ASPSMs) let users enjoy luxury fragrances in seconds—fresh, playful, and completely hands-free.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Bring Bellgoo to Your Venue</Link>
            </Button>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-gold opacity-25 blur-3xl rounded-full animate-glow-pulse" />
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-gold/20 shadow-luxe">
              <VideoPlayer
                src={machineVideo}
                title="Bellgoo ASPSM smart perfume vending machine"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFORMING */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">Our Vision</p>
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Transforming Scent and <span className="text-gradient-gold italic">Brand Experiences</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            At Bellgoo, we bring luxury fragrance to life with style, technology, and a touch of fun. Every interaction becomes an experience, every scent a memory.
          </p>
        </div>
      </section>

      {/* PILLARS */}
      <section className="container py-16">
        <div className="grid lg:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="glass-panel rounded-2xl p-8 hover:border-gold/40 transition group">
              <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <p.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl mb-3 leading-snug">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <div className="glass-gold rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              Bring Bellgoo to <span className="text-gradient-gold italic">Your Venue</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stadiums, airports, luxury hotels, premium malls — partner with Bellgoo and turn every passing moment into an unforgettable scent memory.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Request a Partnership</Link>
            </Button>
            <p className="text-foreground/80 mt-10 max-w-3xl mx-auto leading-relaxed text-base md:text-lg border-t border-gold/20 pt-8">
              Bellgoo delivers on-demand luxury fragrance experiences through Advanced Smart Perfume Spraying Machines — combining instant sampling, seamless purchase, and high-impact digital engagement in premium locations worldwide.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Machines;
