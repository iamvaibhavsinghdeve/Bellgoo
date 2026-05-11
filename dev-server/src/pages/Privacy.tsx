import { Layout } from "@/components/Layout";
import { useEffect } from "react";

const Privacy = () => {
  useEffect(() => { document.title = "Privacy Policy · Bellgoo"; }, []);
  return (
    <Layout>
      <section className="pt-40 pb-20">
        <div className="container max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">Legal</p>
          <h1 className="font-display text-5xl md:text-6xl mb-10">Privacy <span className="text-gradient-gold italic">Policy</span></h1>
          <div className="space-y-6 text-foreground/80 leading-relaxed text-sm">
            <p>Last updated: 2026. Bellgoo respects your privacy and is committed to safeguarding your personal information.</p>

            <h2 className="font-display text-2xl text-gold pt-4">1. Information We Collect</h2>
            <p>We collect minimal data — email (when voluntarily provided), country, and anonymized usage patterns from our ASPSMs to improve your experience. We never store biometric scent profiles.</p>

            <h2 className="font-display text-2xl text-gold pt-4">2. How We Use It</h2>
            <p>To personalize fragrance recommendations, locate machines near you, and deliver occasional updates about new collections and partnerships.</p>

            <h2 className="font-display text-2xl text-gold pt-4">3. Payments</h2>
            <p>All payment data is processed via PCI-DSS certified providers. Bellgoo never stores card numbers on our servers or devices.</p>

            <h2 className="font-display text-2xl text-gold pt-4">4. Your Rights</h2>
            <p>You can request access, correction, or deletion of your data at any time by emailing privacy@bellgoo.com.</p>

            <h2 className="font-display text-2xl text-gold pt-4">5. Cookies</h2>
            <p>Our website uses essential cookies and anonymous analytics to improve performance. You may disable non-essential cookies in your browser.</p>

            <h2 className="font-display text-2xl text-gold pt-4">6. Data Retention</h2>
            <p>We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, including legal, accounting, or reporting requirements.</p>

            <h2 className="font-display text-2xl text-gold pt-4">7. International Data Transfers</h2>
            <p>As Bellgoo operates globally, your information may be transferred to and processed in countries outside your residence. By using our services, you consent to such transfers.</p>

            <h2 className="font-display text-2xl text-gold pt-4">8. Third-Party Services</h2>
            <p>We may use trusted third-party services including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Payment processors</li>
              <li>Analytics providers</li>
              <li>Hosting platforms</li>
            </ul>
            <p>These providers only access data necessary to perform their functions and are obligated to protect your data.</p>

            <h2 className="font-display text-2xl text-gold pt-4">9. Data Security</h2>
            <p>We implement industry-standard technical and organizational measures to protect your data. However, no system is completely secure, and we cannot guarantee absolute security.</p>

            <h2 className="font-display text-2xl text-gold pt-4">10. Your Global Privacy Rights</h2>
            <p>Depending on your location (including EU, UK, California), you may have rights to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access your personal data</li>
              <li>Request correction</li>
              <li>Request deletion</li>
              <li>Restrict or object to processing</li>
              <li>Withdraw consent</li>
            </ul>
            <p>To exercise these rights, contact: <a href="mailto:privacy@bellgoo.com" className="text-gold hover:underline">privacy@bellgoo.com</a></p>

            <h2 className="font-display text-2xl text-gold pt-4">11. Children's Privacy</h2>
            <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal data from minors.</p>

            <h2 className="font-display text-2xl text-gold pt-4">12. Product & Health Disclaimer (Important)</h2>
            <p>Bellgoo products are designed for personal and external use only.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Individual experiences may vary</li>
              <li>Some users may experience mild irritation or sensitivity</li>
              <li>Users are advised to perform a patch test before use</li>
              <li>Discontinue use immediately if irritation occurs</li>
            </ul>
            <p>Bellgoo shall not be held liable for adverse reactions resulting from misuse, improper application, or failure to follow usage instructions.</p>

            <h2 className="font-display text-2xl text-gold pt-4">13. Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law, Bellgoo shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or products.</p>

            <h2 className="font-display text-2xl text-gold pt-4">14. Updates to This Policy</h2>
            <p>We may update this Privacy Policy periodically. Continued use of the website constitutes acceptance of the updated policy.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
