import { Sparkles, CreditCard, Wind } from "lucide-react";

const steps = [
  { icon: Sparkles, num: "01", title: "Choose Fragrance", desc: "Browse a curated library of global luxury perfumes on the touch screen." },
  { icon: CreditCard, num: "02", title: "Pay Per Spray", desc: "Tap, scan, or pay contactlessly. One spray, one micro-payment. No commitment." },
  { icon: Wind, num: "03", title: "Enjoy Instantly", desc: "A precision micro-mist of luxury — clean, hygienic, and delivered in seconds." },
];

export const HowItWorks = () => (
  <section className="py-28 relative">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">The Bellgoo Experience</p>
        <h2 className="font-display text-4xl md:text-6xl">How It <span className="text-gradient-gold italic">Works</span></h2>
        <div className="gold-divider w-24 mx-auto mt-6" />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <div key={s.num} className="group relative glass-panel rounded-2xl p-8 hover:border-gold/50 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
            <div className="text-7xl font-display text-gold/15 absolute top-4 right-6 group-hover:text-gold/30 transition">{s.num}</div>
            <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 shadow-gold group-hover:animate-glow-pulse">
              <s.icon className="text-primary-foreground" size={24} />
            </div>
            <h3 className="font-display text-2xl mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
