import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Ecosystem", href: "/#ecosystem" },
  { label: "Vision", href: "/#vision" },
  { label: "Philosophy", href: "/how-we-think" },
  { label: "Company", href: "/company" },
];

const productLinks = [
  { label: "ATLAS", href: "/atlas" },
  { label: "TRACEFLOW", href: "/traceflow" },
  { label: "OriginX Labs", href: "/originx-labs" },
  { label: "Cropxon Cloud", href: "/cropxon-cloud" },
];

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const location = useLocation();

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return location.pathname === href;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] md:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Slide-out Menu */}
      <div className="absolute top-0 right-0 w-[85%] max-w-sm h-full bg-card border-l border-border animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <span className="font-display text-lg font-bold text-foreground tracking-wider">
            MENU
          </span>
          <button 
            onClick={onClose}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-6">
          <div className="mb-8">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4 block">
              Navigation
            </span>
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      onClick={onClose}
                      className="block py-3 px-4 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-sm transition-colors uppercase tracking-wider text-sm"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={onClose}
                      className={`block py-3 px-4 rounded-sm transition-colors uppercase tracking-wider text-sm ${
                        isActive(link.href)
                          ? "text-foreground bg-muted"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4 block">
              Products
            </span>
            <ul className="space-y-1">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    onClick={onClose}
                    className={`block py-3 px-4 rounded-sm transition-colors text-sm ${
                      isActive(link.href)
                        ? "text-foreground bg-muted"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {link.label}
                    <span className="ml-2 text-xs px-1.5 py-0.5 rounded bg-accent/20 text-accent font-mono">
                      Beta
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Theme Toggle */}
          <div className="pt-6 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
