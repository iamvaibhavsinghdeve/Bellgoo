import { Layout } from "@/components/Layout";
import { ProductGrid, products } from "@/components/Products";
import { useEffect, useState } from "react";

const Shop = () => {
  const [filter, setFilter] = useState<string>("All");
  const families = ["All", ...new Set(products.map((p) => p.family))];
  const visible = filter === "All" ? products : products.filter((p) => p.family === filter);

  useEffect(() => {
    document.title = "Shop Luxury Perfumes | Bellgoo Collection";
  }, []);

  return (
    <Layout>
      <section className="pt-40 pb-12 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">The Bellgoo Atelier</p>
        <h1 className="font-display text-5xl md:text-7xl">Shop the <span className="text-gradient-gold italic">Collection</span></h1>
        <div className="gold-divider w-24 mx-auto mt-6" />
      </section>
      <section className="container">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {families.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-[11px] uppercase tracking-[0.2em] px-5 py-2 rounded-full border transition ${
                filter === f
                  ? "bg-gradient-gold text-primary-foreground border-transparent shadow-gold"
                  : "border-gold/30 text-foreground/70 hover:border-gold hover:text-gold"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <ProductGrid />
      </section>
      <div className="h-20" />
    </Layout>
  );
};

export default Shop;
