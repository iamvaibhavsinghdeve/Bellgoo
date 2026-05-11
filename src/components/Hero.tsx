import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trophy, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-stadium.png";
import heroVideo1 from "@/assets/hero-video-1.mp4";
import heroVideo2 from "@/assets/hero-video-2.mp4";

type Slide =
  | { kind: "image"; src: string; alt: string }
  | { kind: "video"; src: string; title: string };

const slides: Slide[] = [
  {
    kind: "image",
    src: heroImg,
    alt: "Bellgoo smart perfume machine in FIFA World Cup 2026 stadium",
  },
  {
    kind: "video",
    src: heroVideo1,
    title: "Bellgoo experience video 1",
  },
  {
    kind: "video",
    src: heroVideo2,
    title: "Bellgoo experience video 2",
  },
];

export const Hero = () => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  const go = (i: number) => setIndex((i + slides.length) % slides.length);
  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  // Auto-advance
  useEffect(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    // Image: 6s, Videos: 12s
    const delay = slides[index].kind === "image" ? 6000 : 12000;
    timerRef.current = window.setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, delay);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [index]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background slides */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            aria-hidden={i !== index}
          >
            {slide.kind === "image" ? (
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
                fetchPriority={i === 0 ? "high" : "low"}
              />
            ) : (
              <div className="w-full h-full">
                {i === index && (
                  <video
                    src={slide.src}
                    title={slide.title}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    playsInline
                    loop
                  />
                )}
              </div>
            )}
          </div>
        ))}

        {/* Overlays sit above slides */}
        <div
          className="absolute inset-0 z-20"
          style={{ background: "var(--gradient-hero-overlay)" }}
        />
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-onyx/40 via-transparent to-onyx" />
      </div>

      {/* Floating mist particles */}
      <div className="absolute right-[8%] top-[35%] w-72 h-72 rounded-full bg-gold/10 blur-3xl animate-mist pointer-events-none z-20" />
      <div
        className="absolute right-[20%] top-[55%] w-48 h-48 rounded-full bg-gold-bright/15 blur-3xl animate-mist pointer-events-none z-20"
        style={{ animationDelay: "2s" }}
      />

      {/* Content */}
      <div className="relative z-30 container min-h-screen flex flex-col justify-center pt-32 pb-20">
        <div className="max-w-2xl animate-fade-up">
          <div className="inline-flex items-center gap-3 glass-gold rounded-full pl-2 pr-5 py-2 mb-8">
            <span className="w-7 h-7 rounded-full bg-gradient-gold flex items-center justify-center">
              <Trophy size={14} className="text-primary-foreground" />
            </span>
            <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-medium">
              Anywhere. Always. Infinite.
            </span>
          </div>

    <h1 className="font-display text-[calc(3rem-2px)] sm:text-[calc(3.75rem-2px)] lg:text-[calc(4.5rem-2px)] xl:text-[calc(6rem-2px)] leading-[0.95] text-foreground">
  Experience <span className="italic text-gradient-gold">Luxury.</span>
  <br />
  One <span className="text-gradient-gold">Spray</span> at a Time.
</h1>

          <p className="mt-8 text-base md:text-lg text-foreground/75 max-w-xl leading-relaxed">
            Introducing Bellgoo <span className="text-gold">ASPSMs</span> - Advanced Smart Perfume Spraying Machines.
            Pay per spray. Discover global luxury perfumes instantly, soon we will be in 16 stadiums worldwide and stores near you.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/machines">Explore Machines</Link>
            </Button>
            <Button variant="luxe" size="xl" asChild>
              <Link to="/shop">Shop Perfumes</Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {[
              { icon: Sparkles, label: "Pay Per Spray" },
              { icon: Sparkles, label: "Smart Tech" },
              { icon: Sparkles, label: "Luxury Access" },
            ].map((t, i) => (
              <span
                key={t.label}
                className="glass-panel rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-foreground/80 flex items-center gap-2 animate-float"
                style={{ animationDelay: `${i * 0.6}s` }}
              >
                <t.icon size={12} className="text-gold" />
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Slider controls */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full glass-gold flex items-center justify-center text-gold hover:bg-gold/20 transition-colors"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full glass-gold flex items-center justify-center text-gold hover:bg-gold/20 transition-colors"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-gold" : "w-3 bg-gold/30 hover:bg-gold/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
