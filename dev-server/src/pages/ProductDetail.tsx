import { Layout } from "@/components/Layout";
import { products } from "@/components/Products";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Clock, Calendar } from "lucide-react";
import { useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  useEffect(() => {
    if (product) document.title = `${product.name} · Bellgoo Luxury Perfume`;
  }, [product]);

  if (!product) {
    return (
      <Layout>
        <div className="container pt-40 pb-20 text-center">
          <h1 className="font-display text-4xl mb-4">Fragrance not found</h1>
          <Button variant="luxe" asChild><Link to="/shop">Back to Shop</Link></Button>
        </div>
      </Layout>
    );
  }

  const ld = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.story,
    brand: { "@type": "Brand", name: "Bellgoo" },
    offers: { "@type": "Offer", priceCurrency: "USD", price: product.price, availability: "https://schema.org/InStock" }
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <section className="pt-32 pb-20">
        <div className="container grid lg:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-gold opacity-20 blur-3xl rounded-full" />
            <img src={product.img} alt={product.name} className="relative rounded-2xl border border-gold/20 shadow-luxe w-full" />
          </div>
          <div>
            <div className="glass-gold inline-flex rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold mb-5">
              <Sparkles size={12} className="mr-1" /> Available in Bellgoo Machines
            </div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">{product.family}</p>
            <h1 className="font-display text-5xl md:text-7xl leading-[1] mb-3">{product.name}</h1>
            <p className="text-muted-foreground text-lg mb-8">{product.tagline}</p>
            <p className="leading-relaxed text-foreground/85 mb-10">{product.story}</p>

            <div className="space-y-5 mb-10">
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-2">Top Notes</div>
                <div className="text-sm">{product.notes.top}</div>
              </div>
              <div className="gold-divider" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-2">Heart Notes</div>
                <div className="text-sm">{product.notes.middle}</div>
              </div>
              <div className="gold-divider" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-2">Base Notes</div>
                <div className="text-sm">{product.notes.base}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="glass-panel rounded-xl p-4">
                <Clock className="text-gold mb-2" size={18} />
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Longevity</div>
                <div className="text-sm">{product.longevity}</div>
              </div>
              <div className="glass-panel rounded-xl p-4">
                <Calendar className="text-gold mb-2" size={18} />
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Occasion</div>
                <div className="text-sm">{product.occasion}</div>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Per Spray</div>
                <div className="font-display text-4xl text-gradient-gold">${product.price.toFixed(2)}</div>
              </div>
              <Button variant="hero" size="xl" asChild>
                <Link to="/machines">Find a Machine</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
