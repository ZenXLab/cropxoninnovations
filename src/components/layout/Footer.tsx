import { Link } from "react-router-dom";
import cropxonLogo from "@/assets/cropxon-logo.svg";

const Footer = () => {
  const footerLinks = {
    company: [
      { label: "About", href: "/company" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
    ecosystem: [
      { label: "ATLAS", href: "/atlas" },
      { label: "TRACEFLOW", href: "/traceflow" },
      { label: "OriginX Labs", href: "/originx-labs" },
      { label: "Cropxon Cloud", href: "/cropxon-cloud" },
      { label: "Robotics", href: "/robotics" },
    ],
    resources: [
      { label: "Philosophy", href: "/how-we-think" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
    governance: [
      { label: "Compliance", href: "/company#compliance" },
      { label: "Trust Center", href: "#" },
    ],
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src={cropxonLogo} alt="Cropxon" className="h-8 w-auto" />
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Building foundational technology for work, intelligence, and infrastructure.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display text-xs font-bold text-foreground uppercase tracking-wider mb-3">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") && !link.href.includes("#") ? (
                      <Link
                        to={link.href}
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground text-center md:text-left">
              Cropxon Innovations Pvt. Ltd. — Building Foundational Technology.
            </p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
