import { useState, useEffect, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import arena from "@/assets/bellgoo-arena.jpg";
import corporate from "@/assets/bellgoo-corporate.jpg";
import campus from "@/assets/bellgoo-campus.jpg";
import venues from "@/assets/bellgoo-venues.jpg";
import anyplace from "@/assets/bellgoo-anyplace.jpg";

const slides = [
  { img: anyplace, title: "Any Moment. Any Place.", caption: "From airports to arenas, Bellgoo transforms ordinary spaces into unforgettable moments." },
  { img: arena, title: "Arenas & Stadiums", caption: "Where champions rise — Bellgoo turns the roar into a memory you wear." },
  { img: corporate, title: "Corporate & Hotels", caption: "Confidence before meetings that matter. Elegance before every encounter." },
  { img: campus, title: "Public & Lifestyle", caption: "Discovery in motion — luxury woven into the rhythm of daily life." },
  { img: venues, title: "Hospitality, Retail & Galas", caption: "Lobbies, boutiques, lounges and ballrooms — Bellgoo lives where luxury happens." },
];

export const LuxurySlideshow = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [index, setIndex] = useState(0);
  const touchStart = useRef<number | null>(null);

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (!open) return;
    const t = setInterval(next, 4000);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      clearInterval(t);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, next, prev, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 animate-fade-in"
      onTouchStart={(e) => (touchStart.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStart.current == null) return;
        const dx = e.changedTouches[0].clientX - touchStart.current;
        if (dx > 50) prev();
        else if (dx < -50) next();
        touchStart.current = null;
      }}
    >
      <div className="absolute inset-0 bg-black/85 backdrop-blur-xl" onClick={onClose} />

      <div className="relative w-full max-w-6xl rounded-3xl overflow-hidden border border-gold/20 shadow-luxe bg-onyx">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/60 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition"
        >
          <X size={18} />
        </button>

        <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
          {slides.map((s, i) => (
            <div
              key={s.title}
              className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${i === index ? "opacity-100" : "opacity-0"}`}
              aria-hidden={i !== index}
            >
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                className={`w-full h-full object-cover ${i === index ? "animate-slow-zoom" : ""}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 160px 30px rgba(184,134,11,0.18), inset 0 0 220px 60px rgba(30,64,175,0.18)" }} />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold mb-3">Bellgoo · Luxury Anywhere</p>
                <h3 className="font-display text-3xl md:text-6xl text-white leading-[1.05] mb-3">{s.title}</h3>
                <p className="text-sm md:text-base text-foreground/80 max-w-2xl">{s.caption}</p>
              </div>
            </div>
          ))}

          <button onClick={prev} aria-label="Previous" className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/50 border border-gold/30 text-gold flex items-center justify-center hover:bg-gold hover:text-primary-foreground transition">
            <ChevronLeft size={20} />
          </button>
          <button onClick={next} aria-label="Next" className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/50 border border-gold/30 text-gold flex items-center justify-center hover:bg-gold hover:text-primary-foreground transition">
            <ChevronRight size={20} />
          </button>

          <div className="absolute top-4 left-4 z-20 flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1 rounded-full transition-all duration-500 ${i === index ? "w-8 bg-gold" : "w-4 bg-white/30 hover:bg-white/60"}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }
        .animate-slow-zoom { animation: slow-zoom 5s ease-out forwards; }
      `}</style>
    </div>
  );
};
