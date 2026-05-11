import perfume1 from "@/assets/perfume-1.jpg";
import perfume2 from "@/assets/perfume-2.jpg";
import perfume3 from "@/assets/perfume-3.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const products = [
  { id: "noir-royale", name: "Noir Royale", tagline: "Oud · Amber · Saffron", img: perfume1, price: 2.5, family: "Oriental",
    notes: { top: "Bergamot, Saffron", middle: "Bulgarian Rose, Oud", base: "Amber, Sandalwood, Musk" },
    longevity: "10–12 hrs", occasion: "Evening, Black Tie",
    story: "A regal symphony of darkness — Noir Royale opens with smoky bergamot before unfolding into the velvet depth of Bulgarian rose and aged oud."
  },
  { id: "ponant-rouge", name: "Ponant Rouge", tagline: "Rose · Leather · Spice", img: perfume2, price: 3.0, family: "Floral Leather",
    notes: { top: "Pink Pepper, Mandarin", middle: "Damask Rose, Iris", base: "Leather, Patchouli, Vanilla" },
    longevity: "8–10 hrs", occasion: "Romantic, Night Out",
    story: "Bottled passion — Ponant Rouge is a sensual interplay of crimson petals and supple leather, finished with a whisper of vanilla."
  },
  { id: "loxue-comete", name: "Loxue Comète", tagline: "Iris · Vetiver · Gold Musk", img: perfume3, price: 2.8, family: "Woody Aromatic",
    notes: { top: "Cardamom, Grapefruit", middle: "Iris, Black Tea", base: "Vetiver, Gold Musk, Cedar" },
    longevity: "9–11 hrs", occasion: "Daily Luxury, Office",
    story: "A modern signature for the cosmopolitan — Loxue Comète balances bright cardamom with grounded vetiver and a luminous musk."
  },
];

export const ProductGrid = ({ limit }: { limit?: number }) => {
  const list = limit ? products.slice(0, limit) : products;
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {list.map((p) => (
        <Link
          key={p.id}
          to={`/shop/${p.id}`}
          className="group block relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-onyx-light border border-gold/15 group-hover:border-gold/50 transition-all duration-700">
            <img
              src={p.img}
              alt={`${p.name} luxury perfume by Bellgoo`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/30 to-transparent opacity-80" />
            <div className="absolute top-4 left-4 glass-gold rounded-full px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-gold">
              In Bellgoo Machines
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-[10px] uppercase tracking-[0.25em] text-gold/80 mb-2">{p.family}</p>
              <h3 className="font-display text-3xl mb-1">{p.name}</h3>
              <p className="text-xs text-muted-foreground mb-4">{p.tagline}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground/80">From <span className="text-gold font-medium">${p.price.toFixed(2)}</span> / spray</span>
                <span className="text-[10px] uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition">Discover →</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export const FeaturedProducts = () => (
  <section className="py-28">
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">The Collection</p>
          <h2 className="font-display text-4xl md:text-6xl">Signature <span className="text-gradient-gold italic">Fragrances</span></h2>
        </div>
        <Button variant="luxe" asChild><Link to="/shop">View Full Collection</Link></Button>
      </div>
      <ProductGrid limit={3} />
    </div>
  </section>
);
