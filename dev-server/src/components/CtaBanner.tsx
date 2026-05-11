import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export const CtaBanner = () => (
  <section className="py-24">
    <div className="container">
      <div className="relative overflow-hidden rounded-3xl glass-gold p-12 md:p-20 text-center">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/30 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-bright/20 blur-[120px] rounded-full" />
        </div>
        <div className="relative">
          <MapPin className="text-gold mx-auto mb-6" size={32} />
          <h2 className="font-display text-4xl md:text-6xl mb-4">
            Find a <span className="text-gradient-gold italic">Machine</span> Near You
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            16 stadiums. 100+ premium locations. One unforgettable spray away.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/machines">Locate Bellgoo</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);
