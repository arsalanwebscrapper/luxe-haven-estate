import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#properties", label: "Properties" },
  { href: "#story", label: "Our Story" },
  { href: "#agents", label: "Agents" },
  { href: "#services", label: "Client Services" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label="Aurelia Estates home">
          <div className="rounded-md bg-secondary px-2 py-1 text-sm font-medium text-secondary-foreground">AE</div>
          <span className="font-display text-xl tracking-wide">Aurelia Estates</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="relative inline-block text-sm text-foreground/80 hover:text-foreground story-link">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <button aria-label="Search" className="rounded-md p-2 text-foreground/70 hover:bg-secondary hover:text-foreground">
              <Search className="size-5" />
            </button>
            <button aria-label="Profile" className="rounded-md p-2 text-foreground/70 hover:bg-secondary hover:text-foreground">
              <User className="size-5" />
            </button>
            <Button variant="premium" size="sm" className="hover-scale">
              Schedule Consultation
            </Button>
          </div>
        </div>

        <button
          className="md:hidden rounded-md p-2 text-foreground/70 hover:bg-secondary hover:text-foreground"
          aria-label="Open Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="size-6" />
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t bg-background">
          <ul className="container grid gap-3 py-4">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 text-foreground/80 hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button variant="premium" className="w-full">Schedule Consultation</Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
