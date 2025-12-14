import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { ArrowUpRight } from "lucide-react";

interface PlatformConsole {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: string;
  statusType: "live" | "beta" | "internal" | "planned";
  consoleUrl: string;
  overviewUrl: string;
  features: string[];
}

const platformConsoles: PlatformConsole[] = [
  {
    id: "atlas",
    name: "ATLAS",
    tagline: "Workforce Operating System",
    description: "AI-enabled workforce management and productivity platform designed for enterprise teams requiring operational precision and scalable coordination.",
    status: "Live / Beta",
    statusType: "beta",
    consoleUrl: "https://atlas.cropxon.com",
    overviewUrl: "/atlas",
    features: ["Workforce Analytics", "Task Orchestration", "Performance Intelligence", "Team Coordination"],
  },
  {
    id: "traceflow",
    name: "TRACEFLOW",
    tagline: "Digital Cognition Infrastructure",
    description: "Enterprise observability and experience intelligence platform for banking, healthcare, insurance, and telecommunications sectors.",
    status: "Live",
    statusType: "live",
    consoleUrl: "https://traceflow.cropxon.com",
    overviewUrl: "/traceflow",
    features: ["Session Intelligence", "Error Tracking", "Performance Monitoring", "User Journey Analysis"],
  },
  {
    id: "cloud",
    name: "CROPXON CLOUD",
    tagline: "Infrastructure for Builders",
    description: "Scalable cloud infrastructure platform designed for individuals, startups, and SMBs with enterprise-grade reliability and security.",
    status: "Live (SMB)",
    statusType: "live",
    consoleUrl: "https://cloud.cropxon.com",
    overviewUrl: "/cropxon-cloud",
    features: ["Compute Instances", "Managed Databases", "Object Storage", "Edge Functions"],
  },
  {
    id: "originx",
    name: "ORIGINX LABS",
    tagline: "Research & Product Innovation",
    description: "Advanced research division focused on AI/ML, emerging technologies, and foundational computing research with partnership access.",
    status: "Internal Access",
    statusType: "internal",
    consoleUrl: "https://originxlabs.com",
    overviewUrl: "/originx-labs",
    features: ["Research Publications", "Experimental APIs", "Dataset Access", "Collaboration Portal"],
  },
  {
    id: "robotics",
    name: "CROPXON ROBOTICS",
    tagline: "Advanced Robotics Systems",
    description: "Next-generation robotics and autonomous systems division focused on industrial automation and intelligent machine systems.",
    status: "R&D / Planning",
    statusType: "planned",
    consoleUrl: "https://robotics.cropxon.com",
    overviewUrl: "/robotics",
    features: ["Autonomous Navigation", "Industrial Automation", "Machine Intelligence", "Sensor Fusion"],
  },
];

const getStatusStyles = (type: PlatformConsole["statusType"]) => {
  switch (type) {
    case "live":
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    case "beta":
      return "bg-accent/10 text-accent border-accent/20";
    case "internal":
      return "bg-amber-500/10 text-amber-400 border-amber-500/20";
    case "planned":
      return "bg-muted text-muted-foreground border-border";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

const PlatformCard = ({ platform, index }: { platform: PlatformConsole; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="h-full p-6 lg:p-8 bg-card border border-border rounded-sm hover:border-muted-foreground/30 transition-colors duration-300">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3
              className="text-foreground mb-1"
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "18px",
                letterSpacing: "0.02em",
              }}
            >
              {platform.name}
            </h3>
            <p
              className="text-accent"
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              {platform.tagline}
            </p>
          </div>
          <span
            className={`px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider rounded-sm border ${getStatusStyles(
              platform.statusType
            )}`}
          >
            {platform.status}
          </span>
        </div>

        {/* Description */}
        <p
          className="text-muted-foreground mb-6 leading-relaxed"
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "13px",
          }}
        >
          {platform.description}
        </p>

        {/* Features */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {platform.features.map((feature) => (
              <span
                key={feature}
                className="px-2.5 py-1 bg-muted/50 text-muted-foreground rounded-sm"
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.02em",
                }}
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
          <a
            href={platform.consoleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-foreground text-background hover:bg-foreground/90 transition-colors duration-150 rounded-sm"
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontWeight: 500,
              fontSize: "12px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Open Console
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <Link
            to={platform.overviewUrl}
            className="inline-flex items-center justify-center px-4 py-2.5 border border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground/50 transition-colors duration-150 rounded-sm"
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

const PlatformConsoles = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <>
      <Helmet>
        <title>Platform Consoles — CropXon Innovations</title>
        <meta
          name="description"
          content="Access CropXon platform consoles. Enterprise-grade systems for workforce management, digital cognition, cloud infrastructure, and advanced research."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-20">
          {/* Hero Section */}
          <section
            ref={heroRef}
            className="py-16 lg:py-24 relative overflow-hidden"
          >
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="consoles-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#consoles-grid)" />
              </svg>
            </div>

            <div
              className={`container mx-auto px-6 lg:px-12 relative z-10 transition-all duration-1000 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div className="max-w-3xl mx-auto text-center">
                <span
                  className="text-accent mb-4 block"
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  Operational Access
                </span>
                <h1
                  className="text-foreground mb-6"
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(2rem, 5vw, 3rem)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                  }}
                >
                  Platform Consoles
                </h1>
                <p
                  className="text-muted-foreground max-w-2xl mx-auto"
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: "16px",
                    lineHeight: 1.7,
                  }}
                >
                  Access CropXon's operational platforms. Each console provides dedicated
                  infrastructure for enterprise workflows, digital intelligence, and
                  cloud-native development.
                </p>
              </div>
            </div>
          </section>

          {/* Consoles Grid */}
          <section className="py-14 bg-card/30 border-y border-border">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {platformConsoles.map((platform, index) => (
                  <PlatformCard key={platform.id} platform={platform} index={index} />
                ))}
              </div>
            </div>
          </section>

          {/* Enterprise Access Section */}
          <section className="py-14">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mx-auto">
                <div className="p-8 bg-card border border-border rounded-sm">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div>
                      <h2
                        className="text-foreground mb-2"
                        style={{
                          fontFamily: "Inter, system-ui, sans-serif",
                          fontWeight: 600,
                          fontSize: "18px",
                        }}
                      >
                        Enterprise Access
                      </h2>
                      <p
                        className="text-muted-foreground"
                        style={{
                          fontFamily: "Inter, system-ui, sans-serif",
                          fontSize: "14px",
                        }}
                      >
                        For dedicated infrastructure, custom SLAs, and enterprise integrations,
                        contact our enterprise team.
                      </p>
                    </div>
                    <a
                      href="mailto:enterprise@cropxon.com"
                      className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background hover:bg-foreground/90 transition-colors duration-150 rounded-sm whitespace-nowrap"
                      style={{
                        fontFamily: "Inter, system-ui, sans-serif",
                        fontWeight: 500,
                        fontSize: "12px",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      Contact Enterprise
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Support Section */}
          <section className="py-14 bg-card/30 border-t border-border">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-2xl mx-auto text-center">
                <h3
                  className="text-foreground mb-3"
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: "16px",
                  }}
                >
                  Need Assistance?
                </h3>
                <p
                  className="text-muted-foreground mb-6"
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: "14px",
                  }}
                >
                  For platform access, account issues, or technical support.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <a
                    href="mailto:support@cropxon.com"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-150"
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      fontSize: "13px",
                    }}
                  >
                    support@cropxon.com
                  </a>
                  <a
                    href="mailto:access@cropxon.com"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-150"
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      fontSize: "13px",
                    }}
                  >
                    access@cropxon.com
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PlatformConsoles;
