const reviews = [
  { name: "Amira K.", role: "Dubai · UAE", quote: "I tested 6 fragrances at the airport before my flight. By the time I landed I had ordered my new signature scent. Genius." },
  { name: "Marcus L.", role: "MetLife Stadium · NJ", quote: "Sprayed Noir Royale at half-time. Got compliments the entire second half. Bellgoo is the future." },
  { name: "Sofia R.", role: "Mexico City", quote: "Pure luxury, no commitment. The machine itself feels like a spaceship — beautifully designed." },
];

export const Testimonials = () => (
  <section className="py-28 relative">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">Voices</p>
        <h2 className="font-display text-4xl md:text-6xl">The <span className="text-gradient-gold italic">Experience</span></h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <figure key={r.name} className="glass-panel rounded-2xl p-8 relative">
            <div className="text-6xl font-display text-gold/30 leading-none mb-4">"</div>
            <blockquote className="text-foreground/85 leading-relaxed mb-6 -mt-6 relative">{r.quote}</blockquote>
            <figcaption>
              <div className="font-medium">{r.name}</div>
              <div className="text-xs text-gold tracking-wider uppercase mt-1">{r.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
