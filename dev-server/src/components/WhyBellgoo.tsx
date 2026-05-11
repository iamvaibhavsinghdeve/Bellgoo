import { Wallet, Sparkles, ShieldCheck, Leaf } from "lucide-react";

const reasons = [
  { icon: Wallet, title: "Affordable Luxury", desc: "Skip the $400 bottle. Experience the same fragrance from $2 a spray." },
  { icon: Sparkles, title: "Try Before Buying", desc: "Test global perfumes on your skin — make confident purchases, every time." },
  { icon: ShieldCheck, title: "Smart & Hygienic", desc: "Self-cleaning nozzles, contactless payments, zero cross-contamination." },
  { icon: Leaf, title: "Zero Waste", desc: "Refillable cartridges, recyclable bottles, sustainable luxury reimagined." },
];

export const WhyBellgoo = () => (
  <section className="py-28">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">Why Bellgoo</p>
        <h2 className="font-display text-4xl md:text-6xl">A Smarter Way to <span className="text-gradient-gold italic">Wear Luxury</span></h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r) => (
          <div key={r.title} className="glass-panel rounded-2xl p-7 hover:border-gold/40 transition group">
            <r.icon className="text-gold mb-5 group-hover:scale-110 transition" size={28} />
            <h3 className="font-display text-xl mb-2">{r.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
