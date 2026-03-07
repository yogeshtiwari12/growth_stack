"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "glass-dark border-b border-white/10 shadow-lg"
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 h-18 flex items-center justify-between py-4">
        <a href="#" className="font-display text-lg font-bold flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
            <span className="text-secondary-foreground font-bold text-sm">G</span>
          </div>
          <span className="text-primary-foreground">
            Growth Stack Labs
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors text-primary-foreground/70 hover:text-secondary"
            >
              {l.label}
            </a>
          ))}
          <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-6 shadow-lg shadow-secondary/20" asChild>
            <a href="#contact">Get Started</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-b border-border px-6 pb-6 pt-2 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-foreground hover:text-secondary transition-colors py-2"
            >
              {l.label}
            </a>
          ))}
          <Button size="sm" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full" asChild>
            <a href="#contact" onClick={() => setOpen(false)}>Get Started</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
