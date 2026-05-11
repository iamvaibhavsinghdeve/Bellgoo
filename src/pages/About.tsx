import { Layout } from "@/components/Layout";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Globe, Zap, Leaf, Award, Users, Lightbulb, Heart } from "lucide-react";
import { VideoPlayer } from "@/components/VideoPlayer";
import visionVideo from "@/assets/bellgoo-vision.mp4";
import imgLuxurySmartRetail from "@/assets/about-luxury-smart-retail.png";
import imgThreeWays from "@/assets/about-three-ways.png";
import imgBellgooStory from "@/assets/about-bellgoo-story.png";
import imgFoundationExcellence from "@/assets/about-foundation-excellence.png";

const About = () => {
  useEffect(() => {
    document.title = "About Bellgoo · Luxury Fragrance Meets Smart Retail Technology";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Bellgoo, Inc. — pioneering luxury fragrance with Advanced Smart Perfume Spraying Machines (ASPSMs), Retail Luxury Boutiques, and a curated online platform.");
  }, []);

  return (
    <Layout>
      {/* HERO */}
      <section className="pt-40 pb-20">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">About Bellgoo, Inc.</p>
              <h1 className="font-display text-5xl md:text-7xl mb-8">
                Where <span className="text-gradient-gold italic">Luxury Fragrance</span> Meets <span className="text-gradient-gold italic">Smart Retail</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Bellgoo, Inc. is a pioneering force at the intersection of luxury fragrance and smart retail technology. Headquartered in Delaware, Bellgoo blends digital convenience with in-person elegance — offering a seamless fragrance discovery experience through our Advanced Smart Perfume Spraying Machines (ASPSMs) and robust online platform.
              </p>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="absolute -inset-8 bg-gradient-gold opacity-15 blur-3xl rounded-full" />
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-gold/20 shadow-luxe">
                <img
                  src={imgLuxurySmartRetail}
                  alt="Bellgoo — luxury fragrance meets smart retail"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW / SOLUTIONS */}
      <section className="py-20 border-t border-border/40">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-gold opacity-15 blur-3xl rounded-full" />
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-gold/20 shadow-luxe">
                <img
                  src={imgThreeWays}
                  alt="Bellgoo — unparalleled luxury, three ways"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">Our Approach</p>
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                Unparalleled Luxury, <span className="text-gradient-gold italic">Three Ways</span>
              </h2>
              <p className="text-foreground/75">
                We are committed to delivering luxury fragrance experiences through innovative solutions designed to make premium perfumes accessible and enjoyable for everyone — no matter where they are.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                icon: Globe,
                title: "Online",
                body: "Our meticulously curated fragrance collection is just a click away — providing seamless access to luxury perfumes from the comfort of your home. Explore and purchase your favorite scents effortlessly.",
              },
              {
                num: "02",
                icon: Sparkles,
                title: "Retail Luxury Boutiques (RLBs)",
                body: "Immersive in-person experiences where customers explore, sample, and discover fragrances that match their individuality. A sensory journey designed to make every visit a memorable adventure.",
              },
              {
                num: "03",
                icon: Zap,
                title: "Advanced Smart Perfume Spraying Machines (ASPSMs)",
                body: "Integrating ultramodern technology, our ASPSMs are strategically located in real-world environments — offering personalized scent experiences anytime, anywhere.",
              },
            ].map((s) => (
              <div key={s.num} className="glass-panel rounded-2xl p-8 hover:border-gold/40 transition-colors">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-3xl text-gradient-gold">{s.num}</span>
                  <s.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-2xl mb-4">{s.title}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE BELLGOO STORY */}
      <section className="py-20 border-t border-border/40">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4 text-center lg:text-left">Our Heritage</p>
              <h2 className="font-display text-4xl md:text-5xl text-center lg:text-left mb-10">
                The <span className="text-gradient-gold italic">Bellgoo</span> Story
              </h2>
              <div className="space-y-6 text-foreground/85 leading-relaxed text-lg">
                <p>
                  From traditional fragrance counters and online platforms to instant Advanced Smart Perfume Spraying Machines (ASPSMs) — we're modernizing how people discover and explore scent.
                </p>
                <p>
                  Founded in <strong className="text-gold">2002</strong>, Bellgoo evolved from a vision of making luxury fragrance accessible and interactive. The company quickly established partnerships with leading fragrance brands and upscale venues, expanding its footprint across North America and into select international markets.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-gold opacity-15 blur-3xl rounded-full" />
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-gold/20 shadow-luxe">
                <img
                  src={imgBellgooStory}
                  alt="The Bellgoo story — heritage and modern luxury"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 border-t border-border/40">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel rounded-2xl p-10">
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">Mission</p>
              <h3 className="font-display text-3xl md:text-4xl mb-6">
                Fragrance, <span className="text-gradient-gold italic">Reimagined</span>
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                To transform luxury fragrance retail by combining technology, sustainability, and elegance — delivering instant access to premium scents for discerning customers.
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-10">
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">Our Vision</p>
              <h3 className="font-display text-3xl md:text-4xl mb-6">
                A New <span className="text-gradient-gold italic">Global Standard</span>
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                We aspire to revolutionize the global market with smart luxury fragrance experiences — setting new benchmarks for innovation and customer engagement. Premium perfumes, delivered instantly, whether online, in our RLBs, or through ASPSMs in real-world locations.
              </p>
            </div>
          </div>

          {/* THE BELLGOO VISION — POETRY IN A PULSE */}
          <div className="glass-gold rounded-3xl p-10 md:p-14 mt-10 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold/20 blur-[120px] rounded-full" />
            <div className="relative">
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4 text-center">The Bellgoo Vision</p>
              <h3 className="font-display text-3xl md:text-5xl text-center mb-8">
                Poetry in a <span className="text-gradient-gold italic">Pulse</span>
              </h3>
              <p className="text-foreground/85 leading-relaxed text-lg max-w-3xl mx-auto text-center italic">
                At Bellgoo, we do not merely distribute fragrance; we liberate it through the alchemy of the ASPSM — the silent monolith where high-tech precision meets a high-fashion soul. Within this vessel, elite curation becomes poetry in a spray, breathing instant elegance onto the skin and transforming spontaneous sparks into eternal memories. We are the architects of accessible luxury, where digital innovation and sensory beauty breathe in beautifully luxurious and gorgeous harmony. <span className="text-gold not-italic">Simply Bellgoo. Be Bellgoo. Bellgoo to the world!</span>
              </p>
            </div>
          </div>

          {/* VISION VIDEO */}
          <div className="mt-10">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-gold/20 shadow-luxe max-w-4xl mx-auto">
              <VideoPlayer
                src={visionVideo}
                title="Bellgoo Vision — Poetry in a Pulse · Be Bellgoo"
              />
            </div>
          </div>

          {/* COMBINED BRAND + STRATEGIC VISION */}
          <div className="glass-panel rounded-2xl p-8 md:p-12 mt-10 border-gold/30">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4 text-center">Bellgoo Brand & Strategic Vision</p>
            <div className="grid md:grid-cols-2 gap-10 md:gap-14">
              <div>
                <p className="text-foreground/85 leading-relaxed">
                  Bellgoo is redefining luxury fragrance as a global ritual of identity — blending technology, beauty, and emotional transformation through Advanced Smart Perfume Spraying Machines, a robust online platform, and Retail Luxury Boutiques (RLBs).
                </p>
              </div>
              <div className="md:border-l md:border-gold/20 md:pl-10">
                <p className="text-foreground/85 leading-relaxed italic">
                  Bellgoo is the moment before becoming — a beautifully luxurious fragrance ritual powered by technology, designed for people everywhere to feel confident, radiant, and unforgettable. <span className="text-gold not-italic">Anytime. Anywhere. All the time!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 border-t border-border/40">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-gold opacity-15 blur-3xl rounded-full" />
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-gold/20 shadow-luxe">
                <img
                  src={imgFoundationExcellence}
                  alt="The Bellgoo ASPSM — foundation of excellence"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">Our Values</p>
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                The <span className="text-gradient-gold italic">Foundation</span> of Excellence
              </h2>
              <p className="text-foreground/75">
                At Bellgoo, Inc., our values drive our commitment to excellence, innovation, and customer satisfaction.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { icon: Lightbulb, title: "Innovation", body: "Continuously pushing the boundaries of technology and creativity to deliver cutting-edge fragrance solutions." },
              { icon: Globe, title: "Accessibility", body: "Making luxury fragrances available to all, regardless of location, through our diverse distribution channels." },
              { icon: Heart, title: "Customer-Centricity", body: "Placing customers at the heart of everything we do — ensuring personalized and memorable experiences." },
              { icon: Leaf, title: "Sustainability", body: "Committing to environmentally responsible practices that promote sustainability and ethical sourcing." },
              { icon: Award, title: "Excellence", body: "Striving for the highest standards in quality and service, reflecting our dedication to luxury fragrance." },
            ].map((v) => (
              <div key={v.title} className="glass-panel rounded-2xl p-6 hover:border-gold/40 transition-colors">
                <v.icon className="w-7 h-7 text-gold mb-4" />
                <h3 className="font-display text-xl mb-3">{v.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-foreground/75 max-w-3xl mx-auto mt-16 text-lg leading-relaxed">
            We invite you to join us in experiencing the future of fragrance. At Bellgoo, Inc., we are more than just a brand — we are a community of fragrance enthusiasts dedicated to making every moment special. Thank you for being part of our journey.
          </p>
        </div>
      </section>

      {/* CURATED BY YOU */}
      <section className="py-20 border-t border-border/40">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">Curated by You</p>
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                Shaped by <span className="text-gradient-gold italic">Our Community</span>
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                We listen to our community. Whether you want an Advanced Smart Perfume Spraying Machine (ASPSM) near you or a specific perfume available, your input helps guide Bellgoo's growing fragrance network.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-sm uppercase tracking-widest">
                <Users className="w-4 h-4" />
                Share Your Request
              </Link>
            </div>
            <div className="glass-panel rounded-2xl p-10">
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">Innovation Meets Elegance</p>
              <h3 className="font-display text-3xl mb-6">Shop Our Collection</h3>
              <p className="text-foreground/80 leading-relaxed mb-8">
                Combining technology with fragrance artistry, our machines make discovering new scents easy, fun, and sophisticated. From premium brands to niche finds, our curated lineup evolves with your requests.
              </p>
              <Link
                to="/shop"
                className="inline-block px-8 py-3 bg-gradient-gold text-background font-medium uppercase tracking-widest text-xs rounded-full hover:opacity-90 transition-opacity"
              >
                Explore the Collection
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
