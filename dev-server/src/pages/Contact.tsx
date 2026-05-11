import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => { document.title = "Contact Bellgoo · Partnerships & Support"; }, []);
  return (
    <Layout>
      <section className="pt-40 pb-20">
        <div className="container max-w-5xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4 text-center">Get in Touch</p>
          <h1 className="font-display text-5xl md:text-7xl text-center mb-6">
            Let's <span className="text-gradient-gold italic">Talk</span>
          </h1>
          <p className="text-center text-foreground/75 max-w-2xl mx-auto mb-16 leading-relaxed">
            Reach out to us for support, fragrance requests, or vending machine placements.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "info@bellgoo.com" },
                { icon: Phone, label: "Phone", value: "+1 (555) 0123 234" },
                { icon: MapPin, label: "Headquarters", value: "Dubai · New York · Paris" },
              ].map((c) => (
                <div key={c.label} className="glass-panel rounded-xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center shrink-0">
                    <c.icon size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-gold mb-1">{c.label}</div>
                    <div className="text-sm">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); toast.success("Message sent. Our team will respond within 24 hours."); }}
              className="lg:col-span-2 glass-gold rounded-2xl p-8 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Full name" required className="bg-input border-gold/20" />
                <Input type="email" placeholder="Email address" required className="bg-input border-gold/20" />
              </div>
              <Input placeholder="Subject" required className="bg-input border-gold/20" />
              <Textarea placeholder="Tell us about your project, venue or interest…" rows={6} required className="bg-input border-gold/20" />
              <Button type="submit" variant="hero" size="lg" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
