import { Layout } from "@/components/Layout";
import { useEffect } from "react";

const GlobalCompliance = () => {
  useEffect(() => {
    document.title = "Global Compliance · Bellgoo";
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement("meta"); m.setAttribute("name", "description"); document.head.appendChild(m); }
    m.setAttribute("content", "Bellgoo Global Compliance — safety, legal, and allergic guidelines for ASPSM units worldwide.");
  }, []);

  return (
    <Layout>
      <section className="container pt-32 pb-16">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Global Compliance</p>
          <h1 className="font-display text-5xl md:text-7xl mb-6">
            Safety, Legal, and <span className="text-gradient-gold italic">Allergic Guidelines</span>
          </h1>
          <div className="gold-divider w-32 mx-auto mt-8" />
        </div>
      </section>

      <section className="container pb-24">
        <div className="max-w-4xl mx-auto space-y-10 text-foreground/80 leading-relaxed">
          <div className="glass-panel rounded-2xl p-8">
            <h2 className="font-display text-2xl text-gold mb-4">I. Age & Usage Requirements</h2>
            <p className="mb-4">To maintain a secure and premium operational environment, the following age-related mandates apply to all Bellgoo ASPSM units worldwide:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li><strong className="text-foreground">Age of Majority:</strong> Users must be 18 years of age or older to operate the machine independently.</li>
              <li><strong className="text-foreground">Adult Supervision:</strong> Any individual under the age of 18 must be accompanied and supervised by a parent or legal guardian during the ritual.</li>
              <li><strong className="text-foreground">Compliance:</strong> Unauthorized usage by minors is a breach of our Terms of Service and will be monitored via the Digital Gatekeeper.</li>
            </ul>
          </div>

          <div className="glass-panel rounded-2xl p-8">
            <h2 className="font-display text-2xl text-gold mb-4">II. Allergic & Sensitivity Guidelines</h2>
            <p className="mb-4">Every Bellgoo fragrance is engineered in alignment with IFRA standards. Sensory wellness, however, is a personalized journey requiring caution.</p>
            <h3 className="font-display text-lg text-gold/90 mb-2">Dermal Sensitivity Alert</h3>
            <p className="mb-4 text-sm">Fragrance components can occasionally cause skin irritation or allergic reactions in sensitive individuals. If you have a known history of severe dermal allergies, please consult a physician before engaging in the ritual.</p>
            <h3 className="font-display text-lg text-gold/90 mb-2">The Pulse-Point Test</h3>
            <p className="text-sm">We recommend a localized test before full application. Apply a microscopic amount to the inner wrist. If redness or itching occurs within 15 minutes, wash the area immediately with cool water and discontinue use.</p>
          </div>

          <div className="glass-panel rounded-2xl p-8">
            <h2 className="font-display text-2xl text-gold mb-4">III. North American Legal Standards</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li><strong className="text-foreground">MoCRA (2022):</strong> Full compliance with safety substantiation and labeling transparency as required by the Modernization of Cosmetics Regulation Act.</li>
              <li><strong className="text-foreground">ADA Compliance:</strong> All ASPSM hardware is deployed at accessibility heights and positions compliant with the Americans with Disabilities Act.</li>
            </ul>
          </div>

          <div className="glass-panel rounded-2xl p-8">
            <h2 className="font-display text-2xl text-gold mb-4">IV. European Legal Standards</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li><strong className="text-foreground">Regulation (EC) No 1223/2009:</strong> Full adherence to EU cosmetics laws, including ingredient safety assessment and CPNP notification.</li>
              <li><strong className="text-foreground">CLP & REACH:</strong> Scent canisters are classified and handled according to the strictest chemical safety and environmental protection laws in Europe.</li>
            </ul>
          </div>

          <div className="glass-gold rounded-2xl p-8">
            <h2 className="font-display text-2xl text-gold mb-4">V. The Chin-Line Law</h2>
            <p className="text-sm">The Chin-Line Law is our primary safety protocol. Application is strictly limited to the lower neck, chest, and wrists. <strong className="text-foreground">DO NOT SPRAY ON THE FACE OR EYES.</strong></p>
          </div>

          <p className="text-center text-xs text-muted-foreground tracking-wider pt-8">© 2026 Bellgoo, Inc. | Anywhere. Always. Infinite.</p>
        </div>
      </section>
    </Layout>
  );
};

export default GlobalCompliance;
