import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cpu, Droplets, Smartphone, Shield } from "lucide-react";
import { VideoPlayer } from "@/components/VideoPlayer";
import machineVideo from "@/assets/bellgoo-machine-1.mp4";


const features = [
  { icon: Smartphone, title: "Smart Touch Display", desc: "Interactive 21\" 4K screen with AI fragrance recommendations." },
  { icon: Droplets, title: "Multi-Fragrance", desc: "Up to 30 luxury perfumes housed in one machine." },
  { icon: Cpu, title: "Precision Spray", desc: "Patented micro-mist tech delivers exact dosage in 0.3 seconds." },
  { icon: Shield, title: "Hygienic & Contactless", desc: "Self-cleaning nozzles. Apple Pay, NFC, QR — fully touchless." },
];

export const MachineShowcase = () => (
  <section className="py-28 relative overflow-hidden">
    <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
    <div className="container relative grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="absolute -inset-8 bg-gradient-gold opacity-20 blur-3xl rounded-full" />
        <div className="relative aspect-video rounded-2xl shadow-luxe border border-gold/20 overflow-hidden">
          <VideoPlayer
            src={machineVideo}
            title="Bellgoo ASPSM Smart Perfume Vending Machine"
          />
        </div>
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">The Machine</p>
        <h2 className="font-display text-4xl md:text-6xl leading-tight mb-6">
          Engineered for <span className="text-gradient-gold italic">Indulgence</span>
        </h2>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          Bellgoo ASPSMs blend Italian craftsmanship, Swiss precision, and Silicon-Valley intelligence into a single luxury kiosk. The future of fragrance retail, ready for any stadium, mall, hotel or airport.
        </p>
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {features.map((f) => (
            <div key={f.title} className="flex gap-3">
              <div className="w-10 h-10 rounded-lg glass-gold flex items-center justify-center shrink-0">
                <f.icon size={18} className="text-gold" />
              </div>
              <div>
                <h4 className="font-medium text-sm mb-1">{f.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <Button variant="luxe" size="lg" asChild>
          <Link to="/machines">Discover the Technology</Link>
        </Button>
      </div>
    </div>
  </section>
);
