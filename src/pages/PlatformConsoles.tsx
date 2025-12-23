import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BackToTop";
import { useScrollReveal, getStaggerDelay } from "@/hooks/useScrollReveal";
import ProductTransition from "@/components/ProductTransition";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles, Brain, ShieldCheck, Users, Settings, Boxes, Building2, GraduationCap, FlaskConical } from "lucide-react";

interface Platform {
  id: string;
  name: string;
  tagline: string;
  description: string;
  capabilities: string[];
  status: string;
  statusColor: string;
  borderColor: string;
  link: string;
  externalUrl: string;
  icon: React.ElementType;
  color: string;
}

const platforms: Platform[] = [
  {
    id: "cognix",
    name: "COGNIX",
    tagline: "Software Cognition & Architecture Intelligence",
    description: "AI-powered platform that understands codebases, architectures, and business workflows at a system level.",
    capabilities: ["Codebase Analysis", "Architecture Maps", "Risk Detection", "Migration Guide"],
    status: "Idea & Locked",
    statusColor: "hsl(220, 15%, 50%)",
    borderColor: "hsl(220, 15%, 40%)",
    link: "/cognix",
    externalUrl: "https://getcognix.io",
    icon: Brain,
    color: "hsl(220, 70%, 55%)",
  },
  {
    id: "qualyx",
    name: "QUALYX",
    tagline: "QA Automation & Quality Intelligence",
    description: "Intelligent QA automation platform that transforms testing into a continuous quality feedback system.",
    capabilities: ["Test Generation", "Regression Detection", "Pattern Learning", "CI/CD Integration"],
    status: "Idea & Locked",
    statusColor: "hsl(220, 15%, 50%)",
    borderColor: "hsl(220, 15%, 40%)",
    link: "/qualyx",
    externalUrl: "https://getqualyx.com",
    icon: ShieldCheck,
    color: "hsl(175, 60%, 45%)",
  },
  {
    id: "huminex",
    name: "HUMINEX",
    tagline: "Workforce OS & Human Intelligence",
    description: "Modern workforce operating system that manages people, roles, skills, and organizational intelligence.",
    capabilities: ["HRMS & Payroll", "Org Structure", "Skill Mapping", "Workforce Analytics"],
    status: "Idea & Locked",
    statusColor: "hsl(220, 15%, 50%)",
    borderColor: "hsl(220, 15%, 40%)",
    link: "/huminex",
    externalUrl: "https://gethuminex.com",
    icon: Users,
    color: "hsl(340, 65%, 55%)",
  },
  {
    id: "opzenix",
    name: "OPZENIX",
    tagline: "DevOps · DevSecOps · MLOps · AIOps · LLMOps",
    description: "Intelligent operations and execution platform for modern software and AI systems.",
    capabilities: ["CI/CD Orchestration", "Infra Management", "Security Automation", "ML Lifecycle"],
    status: "Development",
    statusColor: "hsl(45, 90%, 50%)",
    borderColor: "hsl(45, 90%, 45%)",
    link: "/opzenix",
    externalUrl: "https://opzenix.com",
    icon: Settings,
    color: "hsl(260, 60%, 58%)",
  },
  {
    id: "traceflow",
    name: "TRACEFLOW",
    tagline: "Digital Cognition & Infrastructure Intelligence",
    description: "Unifies every digital signal into a single, trusted intelligence layer for mission-critical systems.",
    capabilities: ["Signal Ingestion", "Cross-Layer Correlation", "Zero-Trust Access", "Hybrid Cloud"],
    status: "LIVE",
    statusColor: "hsl(145, 70%, 45%)",
    borderColor: "hsl(145, 70%, 40%)",
    link: "/traceflow",
    externalUrl: "https://traceflow.cropxon.com",
    icon: Boxes,
    color: "hsl(200, 70%, 50%)",
  },
  {
    id: "zenith-studio",
    name: "ZENITH STUDIO",
    tagline: "Business & Content Creation Platform",
    description: "Multi-tenant creation platform for building digital business experiences with CMS, LMS, and canvas builders.",
    capabilities: ["CMS & LMS", "Canvas Builders", "Workflow Automation", "API Extensible"],
    status: "LIVE · MVP",
    statusColor: "hsl(145, 70%, 45%)",
    borderColor: "hsl(145, 70%, 40%)",
    link: "/zenith-studio",
    externalUrl: "https://getzenith.io",
    icon: Building2,
    color: "hsl(280, 55%, 55%)",
  },
  {
    id: "zenith-institute",
    name: "ZENITH INSTITUTE",
    tagline: "Learning, Enablement & Certification",
    description: "Learning and development arm focused on upskilling professionals and organizations with certified programs.",
    capabilities: ["Learning Paths", "Certifications", "Labs & Projects", "Mentorship"],
    status: "LIVE · MVP",
    statusColor: "hsl(145, 70%, 45%)",
    borderColor: "hsl(145, 70%, 40%)",
    link: "/zenith-institute",
    externalUrl: "https://zenithinstitute.in",
    icon: GraduationCap,
    color: "hsl(145, 55%, 45%)",
  },
  {
    id: "originx-labs",
    name: "ORIGINX LABS",
    tagline: "Research & Advanced Innovation Division",
    description: "Deep-tech research and innovation lab for AI agents, system cognition, and future technology incubation.",
    capabilities: ["AI Agent Research", "System Cognition", "Experimentation", "Tech Incubation"],
    status: "LIVE",
    statusColor: "hsl(145, 70%, 45%)",
    borderColor: "hsl(145, 70%, 40%)",
    link: "/originx-labs",
    externalUrl: "https://originxlabs.com",
    icon: FlaskConical,
    color: "hsl(25, 75%, 52%)",
  },
];

const PlatformConsoles = () => {
  const [activeProduct, setActiveProduct] = useState<Platform | null>(null);
  const [transitionProduct, setTransitionProduct] = useState<Platform | null>(null);
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  const handleAccessClick = (product: Platform) => {
    setTransitionProduct(product);
  };

  const getStatusStyles = (product: Platform, isActive: boolean) => {
    const isLive = product.status.includes('LIVE');
    const isDevelopment = product.status === 'Development';
    const isLocked = product.status === 'Idea & Locked';
    
    if (isActive) {
      return {
        borderColor: product.borderColor,
        boxShadow: `0 0 20px ${product.borderColor.replace(')', ' / 0.3)')}`
      };
    }
    
    if (isLive) {
      return { borderColor: 'hsl(145, 70%, 40% / 0.5)' };
    }
    if (isDevelopment) {
      return { borderColor: 'hsl(45, 90%, 45% / 0.4)' };
    }
    if (isLocked) {
      return { borderColor: 'hsl(220, 15%, 40% / 0.3)' };
    }
    
    return {};
  };

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
          <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 pointer-events-none">
              <div 
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(ellipse 60% 40% at 50% 0%, hsl(var(--primary) / 0.04) 0%, transparent 60%)`
                }}
              />
            </div>

            <div
              ref={heroRef}
              className={`container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 transition-all duration-1000 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <p className="font-display text-[10px] sm:text-[11px] font-medium text-muted-foreground tracking-[0.25em] uppercase mb-3 sm:mb-4">
                  Operational Access
                </p>
                <h1 className="font-display text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight mb-3 sm:mb-4 text-foreground">
                  PLATFORM CONSOLES
                </h1>
                <p className="text-xs sm:text-sm lg:text-base max-w-2xl mx-auto text-muted-foreground px-4">
                  Access CropXon's operational platforms. Each console provides dedicated
                  infrastructure for enterprise workflows and digital intelligence.
                </p>
              </div>
            </div>
          </section>

          {/* Platforms Grid */}
          <section className="py-10 bg-muted/20 border-y border-border/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
              <div 
                ref={contentRef}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
              >
                {platforms.map((product, index) => {
                  const Icon = product.icon;
                  const isActive = activeProduct?.id === product.id;
                  const statusStyles = getStatusStyles(product, isActive);
                  const isLive = product.status.includes('LIVE');
                  
                  return (
                    <div
                      key={product.id}
                      className={`group relative transition-all duration-500 ${
                        contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                      style={{ transitionDelay: getStaggerDelay(index, 80) }}
                      onMouseEnter={() => setActiveProduct(product)}
                      onMouseLeave={() => setActiveProduct(null)}
                    >
                      <div
                        className={`relative p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border-2 bg-card/80 backdrop-blur-sm transition-all duration-500 h-full overflow-hidden ${
                          isActive 
                            ? "shadow-2xl scale-[1.02]" 
                            : "hover:shadow-lg"
                        }`}
                        style={{
                          borderColor: statusStyles.borderColor || 'hsl(var(--border) / 0.5)',
                          boxShadow: statusStyles.boxShadow || undefined,
                        }}
                      >
                        {/* Animated background glow */}
                        <div 
                          className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl transition-all duration-700 ${
                            isActive ? 'opacity-30' : 'opacity-0'
                          }`}
                          style={{ backgroundColor: product.color }}
                        />

                        {/* Header */}
                        <div className="relative flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                          <div 
                            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-500 shrink-0 backdrop-blur-xl border border-border/30 ${
                              isActive ? 'scale-110' : 'group-hover:scale-105'
                            }`}
                            style={{ 
                              background: isActive 
                                ? product.color 
                                : `linear-gradient(135deg, ${product.color.replace(')', ' / 0.2)')}, transparent)`,
                              boxShadow: isActive ? `0 8px 24px ${product.color.replace(')', ' / 0.35)')}` : 'none'
                            }}
                          >
                            <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-white' : ''}`} style={{ color: isActive ? 'white' : product.color }} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-display text-xs sm:text-sm font-bold text-foreground truncate">
                              {product.name}
                            </h3>
                            <p className="font-mono text-[8px] sm:text-[9px] text-muted-foreground leading-tight line-clamp-2">
                              {product.tagline}
                            </p>
                          </div>
                        </div>

                        {/* Status Badge */}
                        <div className="relative flex items-center gap-2 mb-3">
                          {isLive && (
                            <span 
                              className="w-2 h-2 rounded-full animate-pulse"
                              style={{ backgroundColor: product.statusColor }}
                            />
                          )}
                          <span 
                            className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full font-mono font-medium transition-all duration-300"
                            style={{
                              backgroundColor: `${product.statusColor.replace(')', ' / 0.15)')}`,
                              color: product.statusColor,
                              border: `1px solid ${product.statusColor.replace(')', ' / 0.3)')}`
                            }}
                          >
                            {product.status}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="relative text-[10px] sm:text-xs text-muted-foreground mb-3 sm:mb-4 leading-relaxed line-clamp-2">
                          {product.description}
                        </p>

                        {/* Capabilities */}
                        <ul className="relative space-y-1 sm:space-y-1.5 mb-4 sm:mb-5">
                          {product.capabilities.slice(0, 3).map((cap, i) => (
                            <li 
                              key={i} 
                              className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[11px] transition-all duration-300"
                              style={{
                                transitionDelay: isActive ? `${i * 50}ms` : '0ms',
                                transform: isActive ? 'translateX(4px)' : 'translateX(0)'
                              }}
                            >
                              <Sparkles 
                                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 shrink-0 transition-all duration-300 ${
                                  isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                                }`}
                                style={{ color: product.color, transitionDelay: `${i * 50}ms` }}
                              />
                              <span 
                                className={`w-1 h-1 rounded-full shrink-0 transition-all duration-300 ${
                                  isActive ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                                }`}
                                style={{ backgroundColor: product.color }}
                              />
                              <span className={`transition-colors duration-300 ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                                {cap}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* Actions */}
                        <div className="relative flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className={`text-[9px] sm:text-[10px] flex-1 h-7 sm:h-8 group/btn transition-all duration-300 ${
                              isActive ? 'border-primary/30 hover:bg-primary/5' : ''
                            }`} 
                            asChild
                          >
                            <Link to={product.link}>
                              Learn More
                              <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 ml-1 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                            </Link>
                          </Button>
                          <Button 
                            variant="default"
                            size="sm"
                            className="text-[9px] sm:text-[10px] flex-1 h-7 sm:h-8 group/btn"
                            onClick={() => handleAccessClick(product)}
                          >
                            Open Console
                            <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 ml-1 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Enterprise Access Section */}
          <section className="py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
              <div className="max-w-3xl mx-auto">
                <div className="p-6 sm:p-8 bg-card/60 backdrop-blur-xl rounded-2xl border border-border/40">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div>
                      <h2 className="font-display text-lg sm:text-xl font-bold text-foreground mb-2">
                        Enterprise Access
                      </h2>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        For dedicated infrastructure, custom SLAs, and enterprise integrations,
                        contact our enterprise team.
                      </p>
                    </div>
                    <Button size="lg" className="group shrink-0" asChild>
                      <a href="mailto:enterprise@cropxon.com">
                        Contact Enterprise
                        <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Support Section */}
          <section className="py-10 bg-muted/20 border-t border-border/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="font-display text-sm sm:text-base font-semibold text-foreground mb-3">
                  Need Assistance?
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-6">
                  For platform access, account issues, or technical support.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <a
                    href="mailto:support@cropxon.com"
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    support@cropxon.com
                  </a>
                  <a
                    href="mailto:access@cropxon.com"
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    access@cropxon.com
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <BackToTop />
      </div>

      {/* Product Transition Overlay */}
      <ProductTransition
        isOpen={!!transitionProduct}
        productName={transitionProduct?.name || ""}
        externalUrl={transitionProduct?.externalUrl || ""}
        onClose={() => setTransitionProduct(null)}
      />
    </>
  );
};

export default PlatformConsoles;
