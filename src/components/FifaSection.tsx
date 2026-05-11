import { Trophy, Globe2 } from "lucide-react";

const stadiums = [
  "MetLife · NJ", "SoFi · LA", "AT&T · Dallas", "Mercedes-Benz · Atlanta",
  "Hard Rock · Miami", "BMO · Toronto", "Azteca · Mexico City", "Akron · Guadalajara",
  "Levi's · SF", "Lincoln · Philly", "Lumen · Seattle", "GEHA · KC",
  "Gillette · Boston", "NRG · Houston", "BC Place · Vancouver", "Monterrey · MX",
];

export const FifaSection = () => (
  <section className="py-28 relative overflow-hidden bg-gradient-to-b from-onyx via-onyx-light to-onyx">
    <div className="absolute inset-0 opacity-30">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/20 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gold-bright/10 blur-[120px]" />
    </div>
    <div className="container relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-2 mb-6">
          <Trophy size={14} className="text-gold" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-gold">FIFA World Cup 2026</span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl">
          Global <span className="text-gradient-gold italic">Stadium</span> Presence
        </h2>
        <p className="text-muted-foreground mt-6 leading-relaxed">
          Bellgoo brings luxury fragrance to the 2026 World Cup - soon we will be in 16 host stadiums across the United States, Canada, and Mexico.
        </p>
      </div>

      <div className="glass-panel rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Globe2 className="text-gold" size={20} />
          <span className="text-xs uppercase tracking-[0.3em] text-gold">16 Host Cities</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stadiums.map((s, i) => (
            <div
              key={s}
              className="text-center text-xs sm:text-sm py-4 px-3 border border-gold/15 rounded-lg hover:bg-gold/5 hover:border-gold/40 transition animate-fade-up"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              {s}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-6 mt-12 text-center">
          <div><div className="font-display text-4xl text-gradient-gold">16</div><div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Stadiums</div></div>
          <div><div className="font-display text-4xl text-gradient-gold">3</div><div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Countries</div></div>
          <div><div className="font-display text-4xl text-gradient-gold">5M+</div><div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Fans Reached</div></div>
        </div>
      </div>
    </div>
  </section>
);
