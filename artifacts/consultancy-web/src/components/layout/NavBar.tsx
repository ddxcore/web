import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Terminal, Menu, X } from "lucide-react";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const links = [
    { name: "Services", href: "#services" },
    { name: "Expertise", href: "#stack" },
    { name: "Process", href: "#process" },
    { name: "Work", href: "#work" },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3" : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2 text-primary cursor-pointer" onClick={() => scrollTo("#hero")}>
          <Terminal size={24} />
          <span className="font-bold text-xl tracking-tight text-foreground">NexaBuild.</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </button>
          ))}
          <Button variant="default" onClick={() => scrollTo("#contact")} className="font-mono text-xs uppercase tracking-wider">
            Initiate Project
          </Button>
        </nav>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-border flex flex-col items-start p-6 gap-6 shadow-xl md:hidden">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-lg font-medium text-foreground w-full text-left"
            >
              {link.name}
            </button>
          ))}
          <Button variant="default" onClick={() => scrollTo("#contact")} className="w-full font-mono text-xs uppercase tracking-wider">
            Initiate Project
          </Button>
        </div>
      )}
    </motion.header>
  );
}
