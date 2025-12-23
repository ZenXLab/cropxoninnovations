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
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success("Successfully subscribed to our newsletter!");
    setEmail("");
    setIsSubscribing(false);
  };

  const ecosystemPlatforms = [
    { 
      label: "Cognix", 
      href: "/cognix",
      description: "Cognitive AI Platform"
    },
    { 
      label: "OpZeniX", 
      href: "/opzenix",
      description: "Operations Intelligence"
    },
    { 
      label: "TraceFlow", 
      href: "/traceflow",
      description: "Supply Chain Traceability"
    },
    { 
      label: "Qualyx", 
      href: "/qualyx",
      description: "Quality Management"
    },
    { 
      label: "Huminex", 
      href: "/huminex",
      description: "Human Capital Platform"
    },
    { 
      label: "Atlas", 
      href: "/atlas",
      description: "Enterprise Data Infrastructure"
    },
    { 
      label: "Cropxon Cloud", 
      href: "/cropxon-cloud",
      description: "Unified Cloud Platform"
    },
    { 
      label: "Robotics", 
      href: "/robotics",
      description: "Autonomous Systems"
    },
  ];

  const researchDivisions = [
    { 
      label: "OriginX Labs", 
      href: "/originx-labs",
      description: "Deep Tech R&D"
    },
    { 
      label: "Zenith Studio", 
      href: "/zenith-studio",
      description: "Design & Experience"
    },
    { 
      label: "Zenith Institute", 
      href: "/zenith-institute",
      description: "Education & Training"
    },
  ];

  const footerLinks = {
    company: [
      { label: "About Us", href: "/company" },
      { label: "How We Think", href: "/how-we-think" },
      { label: "Architecture", href: "/architecture" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
    resources: [
      { label: "Blog", href: "/blog" },
      { label: "Design Principles", href: "/design-principles" },
      { label: "Systems Philosophy", href: "/systems-not-products" },
      { label: "Platform Consoles", href: "/platforms" },
    ],
    legal: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Security", href: "/security" },
      { label: "Data Processing", href: "/data-processing" },
      { label: "Acceptable Use", href: "/acceptable-use" },
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-10">
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

          {/* Ecosystem Platforms Column */}
          <div className="col-span-1">
            <h4 className="font-display text-[11px] font-semibold text-foreground/80 tracking-[0.15em] uppercase mb-4">
              Ecosystem
            </h4>
            <ul className="space-y-2">
              {ecosystemPlatforms.slice(0, 4).map((platform) => (
                <li key={platform.label}>
                  <Link
                    to={platform.href}
                    className="group block"
                  >
                    <span className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">
                      {platform.label}
                    </span>
                    <span className="block text-[10px] text-muted-foreground/60 group-hover:text-muted-foreground/80 transition-colors">
                      {platform.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Platforms + Research */}
          <div className="col-span-1">
            <h4 className="font-display text-[11px] font-semibold text-foreground/80 tracking-[0.15em] uppercase mb-4">
              Platforms
            </h4>
            <ul className="space-y-2">
              {ecosystemPlatforms.slice(4).map((platform) => (
                <li key={platform.label}>
                  <Link
                    to={platform.href}
                    className="group block"
                  >
                    <span className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">
                      {platform.label}
                    </span>
                    <span className="block text-[10px] text-muted-foreground/60 group-hover:text-muted-foreground/80 transition-colors">
                      {platform.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="font-display text-[11px] font-semibold text-foreground/80 tracking-[0.15em] uppercase mt-6 mb-4">
              Research
            </h4>
            <ul className="space-y-2">
              {researchDivisions.map((division) => (
                <li key={division.label}>
                  <Link
                    to={division.href}
                    className="group block"
                  >
                    <span className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">
                      {division.label}
                    </span>
                    <span className="block text-[10px] text-muted-foreground/60 group-hover:text-muted-foreground/80 transition-colors">
                      {division.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div className="col-span-1">
            <h4 className="font-display text-[11px] font-semibold text-foreground/80 tracking-[0.15em] uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="font-display text-[11px] font-semibold text-foreground/80 tracking-[0.15em] uppercase mt-6 mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h4 className="font-display text-[11px] font-semibold text-foreground/80 tracking-[0.15em] uppercase mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
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
