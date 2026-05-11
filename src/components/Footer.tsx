import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";
import bellgooLogo from "@/assets/bellgoo-logo.png";

export const Footer = () => {
  return (
    <footer className="relative border-t border-gold/15 mt-32 bg-onyx">
      <div className="gold-divider" />
      <div className="container py-16 grid md:grid-cols-4 gap-12">
        <div>
          <Link to="/" className="flex items-center gap-3 mb-4">
            <img src={bellgooLogo} alt="Bellgoo logo" className="h-10 w-auto" />
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The future of fragrance. Pay per spray. Experience luxury instantly.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold mb-5">Explore</h4>
          <ul className="space-y-3 text-sm text-foreground/70">
            <li><Link to="/machines" className="hover:text-gold transition">Machines</Link></li>
            <li><Link to="/shop" className="hover:text-gold transition">Shop Perfumes</Link></li>
            <li><Link to="/about" className="hover:text-gold transition">About Bellgoo</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition">Contact</Link></li>
            <li><Link to="/fragrance-guide" className="hover:text-gold transition">Fragrance Guide</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold mb-5">Legal & Safety</h4>
          <ul className="space-y-3 text-sm text-foreground/70">
            <li><Link to="/privacy" className="hover:text-gold transition">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-gold transition">Terms of Service</Link></li>
            <li><Link to="/global-compliance" className="hover:text-gold transition">Global Compliance</Link></li>
            <li><Link to="/safety" className="hover:text-gold transition">Safety</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold mb-5">Connect</h4>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/bellgooinc?igsh=MTYydHZ1MHlmeDBkcQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition"><Instagram size={16} /></a>
            <a href="https://www.facebook.com/people/Bellgoo/61579836805683/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition"><Facebook size={16} /></a>
            <a href="https://youtube.com/@bellgooinc?si=UJ8vywMzxTrlx3Uu" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition"><Youtube size={16} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gold/10 py-6 text-center text-xs text-muted-foreground tracking-wider">
        © {new Date().getFullYear()}-Bellgoo, Inc. | Anywhere. Always. Infinite.
      </div>
    </footer>
  );
};
