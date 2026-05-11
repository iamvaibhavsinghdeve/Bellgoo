import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/bellgoo-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/machines", label: "Machines" },
  { to: "/solutions", label: "Our Solutions" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-panel py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" aria-label="Bellgoo home">
          <img src={logo} alt="Bellgoo logo" className="h-12 md:h-14 w-auto" />
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.to}>
              <RouterNavLink
                to={l.to}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.2em] transition-colors ${
                    isActive ? "text-gold" : "text-foreground/70 hover:text-gold"
                  }`
                }
              >
                {l.label}
              </RouterNavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button variant="luxe" size="sm" asChild>
            <Link to="/machines">Find a Machine</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-gold"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass-panel mt-3 mx-4 rounded-lg p-6 animate-fade-in">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.to}>
                <RouterNavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `block text-sm uppercase tracking-[0.2em] ${
                      isActive ? "text-gold" : "text-foreground/80"
                    }`
                  }
                >
                  {l.label}
                </RouterNavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
