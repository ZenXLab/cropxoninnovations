import { Helmet } from "react-helmet-async";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { ExternalLink, Lock } from "lucide-react";

const platforms = [
  {
    name: "ATLAS",
    tagline: "Workforce Operating System",
    description: "AI-enabled workforce management and productivity platform for enterprise teams.",
    status: "Beta",
    statusColor: "bg-accent/20 text-accent",
    consoleUrl: "https://atlas.cropxon.com",
    internalUrl: "/atlas",
    available: true,
  },
  {
    name: "TRACEFLOW",
    tagline: "Digital Cognition Infrastructure",
    description: "Enterprise observability and experience intelligence for BFSI, healthcare, and telecom.",
    status: "Beta",
    statusColor: "bg-accent/20 text-accent",
    consoleUrl: "https://traceflow.cropxon.com",
    internalUrl: "/traceflow",
    available: true,
  },
  {
    name: "CropXon Cloud",
    tagline: "Infrastructure as a Service",
    description: "Scalable cloud infrastructure for individuals, startups, and SMBs.",
    status: "Live",
    statusColor: "bg-green-500/20 text-green-500",
    consoleUrl: "https://cloud.cropxon.com",
    internalUrl: "/cropxon-cloud",
    available: true,
  },
  {
    name: "OriginX Labs",
    tagline: "Research Portal",
    description: "Access research publications, datasets, and experimental projects.",
    status: "Internal",
    statusColor: "bg-muted text-muted-foreground",
    consoleUrl: null,
    internalUrl: "/originx-labs",
    available: false,
  },
];

const Platforms = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <>
      <Helmet>
        <title>Platforms — CropXon Innovations</title>
        <meta
          name="description"
          content="Access CropXon platform consoles. ATLAS workforce management, TRACEFLOW observability, and CropXon Cloud infrastructure."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-20">
          {/* Hero */}
          <section
            ref={heroRef}
            className="py-16 lg:py-24 relative overflow-hidden"
          >
            <div
              className={`container mx-auto px-6 lg:px-12 relative z-10 transition-all duration-1000 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div className="max-w-3xl mx-auto text-center">
                <span className="font-mono text-sm text-accent uppercase tracking-widest mb-4 block">
                  Console Access
                </span>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-wide mb-6">
                  Platforms
                </h1>
                <p className="text-lg text-muted-foreground">
                  Access your CropXon platform consoles. Select a platform to continue to the dashboard.
                </p>
              </div>
            </div>
          </section>

          {/* Platform Cards */}
          <section className="py-14 bg-card/50 border-y border-border">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {platforms.map((platform) => (
                  <div
                    key={platform.name}
                    className="p-6 lg:p-8 bg-background border border-border rounded-sm"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground">
                          {platform.name}
                        </h3>
                        <p className="font-mono text-xs text-accent">{platform.tagline}</p>
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded-sm font-mono ${platform.statusColor}`}
                      >
                        {platform.status}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-6">
                      {platform.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      {platform.available && platform.consoleUrl ? (
                        <a
                          href={platform.consoleUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-white text-sm font-medium rounded-sm transition-colors"
                          style={{ backgroundColor: "#0B1A3A" }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0F2557")}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0B1A3A")}
                        >
                          Open Console
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        <button
                          disabled
                          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-muted text-muted-foreground text-sm font-medium rounded-sm cursor-not-allowed"
                        >
                          <Lock className="w-4 h-4" />
                          Coming Soon
                        </button>
                      )}

                      <Link
                        to={platform.internalUrl}
                        className="inline-flex items-center justify-center px-4 py-2.5 border border-border text-foreground text-sm font-medium rounded-sm hover:bg-muted/50 transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Support */}
          <section className="py-14">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-display text-xl font-bold text-foreground mb-4">
                  Need Help?
                </h2>
                <p className="text-muted-foreground mb-6">
                  For platform access, account issues, or technical support, contact our team.
                </p>
                <a
                  href="mailto:support@cropxon.com"
                  className="font-mono text-sm text-accent hover:text-accent/80 transition-colors"
                >
                  support@cropxon.com
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Platforms;
