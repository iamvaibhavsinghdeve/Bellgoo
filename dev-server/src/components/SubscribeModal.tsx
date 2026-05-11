import { useState } from "react";
import { X, User, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { z } from "zod";


const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(80),
  age: z.coerce.number().int().min(1, "Invalid age").max(120),
  gender: z.string().min(1, "Select gender"),
  email: z.string().trim().email("Invalid email").max(255),
});

export const SubscribeModal = () => {
  const [open, setOpen] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem("bellgoo_modal_seen") !== "1";
  });
  const [form, setForm] = useState({ name: "", age: "", gender: "", email: "" });

  const close = () => { setOpen(false); sessionStorage.setItem("bellgoo_modal_seen", "1"); };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    toast.success("Welcome to Bellgoo. We'll be in touch soon.");
    close();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={close} />
      <div className="relative w-full max-w-3xl glass-gold rounded-2xl overflow-hidden shadow-luxe grid md:grid-cols-2">
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition"
        >
          <X size={16} />
        </button>

        <div className="relative h-56 md:h-auto min-h-[300px] overflow-hidden bg-onyx">
          <iframe
            src="https://www.youtube.com/embed/axL7yAlKJi0?autoplay=1&mute=1&loop=1&playlist=axL7yAlKJi0&controls=0&modestbranding=1&playsinline=1&rel=0"
            title="Bellgoo Smart Perfume Machine"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ border: 0 }}
          />
          <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold z-10">
            <Sparkles size={14} /> Smart Spray Tech
          </div>
        </div>

        <div className="p-8 md:p-10">
          <h3 className="font-display text-3xl md:text-4xl text-gradient-gold leading-tight">
            Try Luxury Perfumes Instantly
          </h3>
          <p className="text-sm text-muted-foreground mt-3 mb-6">
            Tell us a little about yourself to unlock your personalized Bellgoo experience.
          </p>

          <form onSubmit={submit} className="space-y-3">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gold/60" size={16} />
              <Input
                placeholder="Full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={80}
                required
                className="pl-10 bg-input border-gold/20 focus-visible:ring-gold"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Input
                type="number"
                placeholder="Age"
                value={form.age}
                onChange={(e) => setForm({ ...form, age: e.target.value })}
                min={1}
                max={120}
                required
                className="bg-input border-gold/20 focus-visible:ring-gold"
              />
              <select
                value={form.gender}
                onChange={(e) => setForm({ ...form, gender: e.target.value })}
                required
                className="w-full h-10 px-3 rounded-md bg-input border border-gold/20 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <option value="">Gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="non-binary">Non-binary</option>
                <option value="prefer-not">Prefer not to say</option>
              </select>
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gold/60" size={16} />
              <Input
                type="email"
                placeholder="Email address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                required
                className="pl-10 bg-input border-gold/20 focus-visible:ring-gold"
              />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full mt-2">
              Join Bellgoo
            </Button>
          </form>
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-4 text-center">
            Soon will be in 16 Stadiums · Anywhere. Always. Infinite.
          </p>
        </div>
      </div>
    </div>
  );
};
