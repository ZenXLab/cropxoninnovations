import { useState } from "react";
import { Link } from "react-router-dom";
import { Send, Twitter, Linkedin, Github, Youtube, Instagram, Facebook } from "lucide-react";
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
      { label: "Architecture", href: "/architecture" },
    ],
    resources: [
      { label: "StackCraft Blog", href: "/stackcraft/blog" },
      { label: "Platform Consoles", href: "/consoles" },
      { label: "Platform Showcase", href: "/platforms" },
      { label: "How We Think", href: "/how-we-think" },
    ],
    media: [
      { label: "NewStack", href: "/newstack", isNew: true },
      { label: "Open Source News", href: "https://www.newstack.live/", external: true },
    ],
    legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Cookies", href: "/cookies" },
      { label: "Security", href: "/security" },
      { label: "Refund Policy", href: "/refund" },
      { label: "SLA", href: "/sla" },
    ],
  };

  const socialLinks = [
    { label: "X", href: "https://x.com/CropxonAI", icon: Twitter },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/cropxon", icon: Linkedin },
    { label: "GitHub", href: "https://github.com/cropxon", icon: Github },
    { label: "YouTube", href: "https://www.youtube.com/@CropXon", icon: Youtube },
    { label: "Instagram", href: "https://instagram.com/cropxon", icon: Instagram },
    { label: "Facebook", href: "https://facebook.com/cropxon", icon: Facebook },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/30 border-t border-border/50">
      {/* Newsletter Section */}
      <div className="border-b border-border/50 bg-gradient-to-r from-primary/5 via-transparent to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                Stay in the loop
              </h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-md">
                Get updates on platforms, research breakthroughs, and announcements directly in your inbox.
              </p>
            </div>
            
            <form onSubmit={handleNewsletterSubmit} className="w-full lg:w-auto flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 lg:w-72 h-11 bg-background/80 backdrop-blur-sm border-border/50 text-sm"
                required
              />
              <Button 
                type="submit" 
                disabled={isSubscribing}
                className="h-11 px-5 font-medium"
              >
                {isSubscribing ? "..." : <><Send className="w-4 h-4 mr-2" /> Subscribe</>}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8 lg:gap-5">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
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
                <span className="text-muted-foreground text-[9px] tracking-[0.12em] uppercase">
                  Innovations Pvt. Ltd.
                </span>
              </div>
            </Link>
            
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Deep-tech SaaS company building foundational systems for cognition, operations, and enterprise infrastructure. Trusted by innovative organizations worldwide.
            </p>

            {/* Glassmorphism Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-10 h-10 rounded-xl flex items-center justify-center bg-card/50 backdrop-blur-md border border-border/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                    aria-label={link.label}
                  >
                    <IconComponent className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                );
              })}
            </div>

            {/* Company Stats */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center p-3 rounded-lg bg-card/30 border border-border/20">
                <p className="font-display text-lg font-bold text-foreground">12+</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Platforms</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-card/30 border border-border/20">
                <p className="font-display text-lg font-bold text-foreground">25+</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Team</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-card/30 border border-border/20">
                <p className="font-display text-lg font-bold text-foreground">99.9%</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Uptime</p>
              </div>
            </div>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="font-display text-[10px] font-semibold text-foreground/80 tracking-[0.15em] uppercase mb-4">
              Platforms
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.platforms.slice(0, 8).map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/30 group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/platforms"
                  className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  View All →
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display text-[10px] font-semibold text-foreground/80 tracking-[0.15em] uppercase mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/30 group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Media */}
          <div>
            <h4 className="font-display text-[10px] font-semibold text-foreground/80 tracking-[0.15em] uppercase mb-4">
              Media
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.media.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/30 group-hover:bg-primary transition-colors" />
                      {link.label}
                      {link.isNew && (
                        <span className="ml-1.5 px-1.5 py-0.5 text-[8px] font-bold bg-primary/20 text-primary rounded-full uppercase tracking-wide">New</span>
                      )}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/30 group-hover:bg-primary transition-colors" />
                      {link.label}
                      {link.isNew && (
                        <span className="ml-1.5 px-1.5 py-0.5 text-[8px] font-bold bg-primary/20 text-primary rounded-full uppercase tracking-wide">New</span>
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-[10px] font-semibold text-foreground/80 tracking-[0.15em] uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/30 group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-[10px] font-semibold text-foreground/80 tracking-[0.15em] uppercase mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/30 group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1">
              <span className="text-xs text-muted-foreground">
                CropXon Innovations Pvt. Ltd.
              </span>
              <span className="hidden sm:inline text-muted-foreground/30">·</span>
              <span className="font-mono text-[10px] text-muted-foreground/70">
                CIN: U62010OD2025PTC051089
              </span>
              <span className="hidden sm:inline text-muted-foreground/30">·</span>
              <span className="text-[10px] text-muted-foreground/70">
                DPIIT Recognized Startup
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-muted-foreground">All systems operational</span>
              </span>
              <p className="text-xs text-muted-foreground/70">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;