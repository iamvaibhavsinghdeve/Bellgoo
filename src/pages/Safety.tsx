import { Layout } from "@/components/Layout";
import { useEffect } from "react";

const Safety = () => {
  useEffect(() => {
    document.title = "Safety · Bellgoo";
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement("meta"); m.setAttribute("name", "description"); document.head.appendChild(m); }
    m.setAttribute("content", "Bellgoo Safety — official standards for global resonance, age requirements, allergies, and the Chin-Line Law.");
  }, []);

  return (
    <Layout>
      <section className="container pt-32 pb-16">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Safety</p>
          <h1 className="font-display text-5xl md:text-7xl mb-6">
            Official Standards for <span className="text-gradient-gold italic">Global Resonance</span>
          </h1>
          <div className="gold-divider w-32 mx-auto mt-8" />
        </div>
      </section>

      <section className="container pb-24">
        <div className="max-w-4xl mx-auto space-y-10 text-foreground/80 leading-relaxed">
          <div className="glass-panel rounded-2xl p-8">
            <h2 className="font-display text-2xl text-gold mb-4">1. Age & Usage Requirements</h2>
            <p className="mb-4">To ensure a safe and premium experience, Bellgoo, Inc. enforces the following age protocols:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>Users must be 18 years of age or older to operate the ASPSM independently.</li>
              <li>Users under 18 must be accompanied and supervised by an adult at all times.</li>
              <li>Bellgoo, Inc. reserves the right to disable hardware interaction if a minor is detected without adult supervision.</li>
            </ul>
          </div>

          <div className="glass-panel rounded-2xl p-8">
            <h2 className="font-display text-2xl text-gold mb-4">2. Allergic & Sensitivity Guidelines</h2>
            <p className="mb-4">Bellgoo fragrances are curated using the highest quality ingredients, following IFRA (International Fragrance Association) standards. However, chemical sensitivities may occur.</p>
            <h3 className="font-display text-lg text-gold/90 mb-2">Precautions</h3>
            <p className="mb-4 text-sm">If you have a known history of skin allergies, we recommend a small application to the inner wrist before proceeding with a full ritual. If irritation occurs, wash the area immediately with cool water and discontinue use.</p>
            <p className="text-sm">Common fragrance components that may cause sensitivity include: Linalool, Limonene, Citral, and Geraniol. Full ingredient lists for specific machines can be viewed by scanning the machine's local QR code.</p>
          </div>

          <div className="glass-gold rounded-2xl p-8">
            <h2 className="font-display text-2xl text-gold mb-4">3. The Chin-Line Law (Safety Standard)</h2>
            <p className="mb-4 text-sm">For your protection, all Bellgoo machines are calibrated to a fixed spray arc. This is an engineering mandate designed to comply with ocular safety laws in the EU and North America.</p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li><strong className="text-foreground">Target Areas:</strong> Neck (below jawline), Chest, and Wrists.</li>
              <li><strong className="text-foreground">Strict Exclusion:</strong> Fragrance must NEVER be applied to the face or eyes.</li>
            </ul>
            <p className="mt-4 text-sm">Any attempt to bypass hardware safety locks is a violation of the Terms of Service.</p>
          </div>

          <div className="glass-panel rounded-2xl p-8">
            <h2 className="font-display text-2xl text-gold mb-4">4. Global Regulatory Compliance</h2>
            <p className="mb-4">Bellgoo, Inc. is committed to operating within the legal frameworks of our host nations:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li><strong className="text-foreground">North America:</strong> Compliance with the Modernization of Cosmetics Regulation Act (MoCRA) for safety substantiation and adverse event reporting.</li>
              <li><strong className="text-foreground">Europe:</strong> Alignment with EU Regulation (EC) No 1223/2009, ensuring all products are listed on the CPNP (Cosmetic Products Notification Portal).</li>
              <li><strong className="text-foreground">Sustainability:</strong> In accordance with FIFA Objective EN3, our automated system eliminates the need for single-use plastic sample vials.</li>
            </ul>
          </div>

          <p className="text-center text-xs text-muted-foreground tracking-wider pt-8">© 2026 Bellgoo, Inc. | Anywhere. Always. Infinite.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Safety;
