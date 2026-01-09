import { useState } from "react";
import { Link } from "react-router-dom";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import officialLogo from "@/assets/cropxon-logo-official.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribing(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success("Successfully subscribed to our newsletter!");
    setEmail("");
    setIsSubscribing(false);
  };

  const footerLinks = {
    platforms: [
      { label: "Cognix", href: "/cognix" },
      { label: "OpZeniX", href: "/opzenix" },
      { label: "TraceFlow", href: "/traceflow" },
      { label: "Qualyx", href: "/qualyx" },
      { label: "Huminex", href: "/huminex" },
      { label: "Zenith Studio", href: "/zenith-studio" },
      { label: "StackCraft", href: "/stackcraft" },
      { label: "OriginX Labs", href: "/originx-labs" },
      { label: "Proxinex", href: "/proxinex" },
      { label: "Chronyx", href: "/chronyx" },
      { label: "Convertix", href: "/convertix" },
      { label: "Finioraa", href: "/finioraa" },
    ],
    company: [
      { label: "About", href: "/company" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
    legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Cookies", href: "/cookies" },
      { label: "Security", href: "/security" },
    ],
  };

  const socialLinks = [
    { label: "X", href: "https://x.com/CropxonAI" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/cropxon" },
    { label: "GitHub", href: "https://github.com/cropxon" },
    { label: "YouTube", href: "https://www.youtube.com/@CropXon" },
  ];

  return (
    <footer className="relative bg-muted/30 border-t border-border/50">
      {/* Newsletter Section */}
      <div className="border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-10 lg:py-12">
          <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-md">
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground tracking-tight">
                Stay in the loop
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Updates on platforms, research, and announcements.
              </p>
            </div>
            
            <form onSubmit={handleNewsletterSubmit} className="w-full lg:w-auto flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 lg:w-64 h-10 bg-background border-border/50 text-sm"
                required
              />
              <Button 
                type="submit" 
                disabled={isSubscribing}
                className="h-10 px-4 font-medium"
              >
                {isSubscribing ? "..." : <><Send className="w-4 h-4" /></>}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-10 lg:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <img 
                src={officialLogo} 
                alt="CropXon" 
                className="h-8 w-auto dark:brightness-0 dark:invert transition-opacity group-hover:opacity-80"
              />
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-foreground text-sm tracking-wide">
                  CropXon
                </span>
                <span className="text-muted-foreground text-[8px] tracking-[0.1em] uppercase">
                  Innovations Pvt. Ltd.
                </span>
              </div>
            </Link>
            
            <p className="mt-4 text-xs text-muted-foreground leading-relaxed max-w-xs">
              Deep-tech SaaS company building foundational systems for cognition, operations, and enterprise infrastructure.
            </p>

            {/* Social Links */}
            <div className="mt-4 flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="font-display text-[10px] font-semibold text-foreground/80 tracking-[0.15em] uppercase mb-3">
              Platforms
            </h4>
            <ul className="space-y-2">
              {footerLinks.platforms.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-[10px] font-semibold text-foreground/80 tracking-[0.15em] uppercase mb-3">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-[10px] font-semibold text-foreground/80 tracking-[0.15em] uppercase mb-3">
              Legal
            </h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1">
              <span className="text-[10px] text-muted-foreground/60">
                CropXon Innovations Pvt. Ltd.
              </span>
              <span className="hidden sm:inline text-muted-foreground/30">·</span>
              <span className="font-mono text-[9px] text-muted-foreground/50">
                CIN: U62010OD2025PTC051089
              </span>
            </div>
            
            <p className="text-[10px] text-muted-foreground/50">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
