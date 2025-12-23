import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Send } from "lucide-react";
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
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success("Successfully subscribed to our newsletter!");
    setEmail("");
    setIsSubscribing(false);
  };

  const footerLinks = {
    ecosystem: [
      { label: "Cognix", href: "https://cognix.cropxon.com", external: true },
      { label: "OpZeniX", href: "https://opzenix.com", external: true },
      { label: "TraceFlow", href: "https://traceflow.cropxon.com", external: true },
      { label: "Zenith Core", href: "https://zenith.cropxon.com", external: true },
      { label: "Zenith Institute", href: "/zenith-institute" },
      { label: "OriginX Labs", href: "https://originxlabs.com", external: true },
    ],
    company: [
      { label: "About Us", href: "/company" },
      { label: "How We Think", href: "/how-we-think" },
      { label: "Architecture", href: "/architecture" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
    resources: [
      { label: "Design Principles", href: "/design-principles" },
      { label: "Systems Philosophy", href: "/systems-not-products" },
      { label: "Platform Consoles", href: "/platforms" },
    ],
    legal: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookies" },
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
        <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-16">
          <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                Stay in the loop
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Subscribe to receive updates on new platforms, research publications, and company announcements.
              </p>
            </div>
            
            <form onSubmit={handleNewsletterSubmit} className="w-full lg:w-auto flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 lg:w-72 h-11 bg-background border-border/50 text-sm"
                required
              />
              <Button 
                type="submit" 
                disabled={isSubscribing}
                className="h-11 px-5 font-medium"
              >
                {isSubscribing ? (
                  <span className="animate-pulse">...</span>
                ) : (
                  <>
                    Subscribe
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img 
                src={officialLogo} 
                alt="CropXon" 
                className="h-10 w-auto dark:brightness-0 dark:invert transition-opacity group-hover:opacity-80"
              />
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-foreground text-base tracking-wide">
                  CropXon
                </span>
                <span className="text-muted-foreground text-[9px] tracking-[0.12em] uppercase mt-0.5">
                  Innovations Pvt. Ltd.
                </span>
              </div>
            </Link>
            
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Building foundational technology systems for cognition, operations, and enterprise infrastructure.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-4">
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

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display text-[11px] font-semibold text-foreground/80 tracking-[0.15em] uppercase mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                      >
                        {link.label}
                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-50 group-hover:translate-x-0 transition-all" />
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img 
                src={officialLogo} 
                alt="CropXon" 
                className="h-5 w-auto opacity-50 dark:brightness-0 dark:invert"
              />
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span className="text-[11px] text-muted-foreground/60">
                  CropXon Innovations Pvt. Ltd.
                </span>
                <span className="hidden sm:inline text-muted-foreground/30">·</span>
                <span className="font-mono text-[10px] text-muted-foreground/50 tracking-wide">
                  CIN: U62010OD2025PTC051089
                </span>
              </div>
            </div>
            
            <p className="text-[11px] text-muted-foreground/50">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
