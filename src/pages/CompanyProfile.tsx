import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { 
  Building2, 
  FileCheck, 
  Shield, 
  Award, 
  Heart,
  Mail,
  MapPin,
  ExternalLink,
  Rocket,
  TrendingUp
} from "lucide-react";
import InteractiveTimeline from "@/components/sections/InteractiveTimeline";
import AnimatedCounter from "@/components/sections/AnimatedCounter";

// Company Details Data
const companyDetails = [
  { label: "Legal Name", value: "CropXon Innovations Private Limited" },
  { label: "CIN", value: "U62010OD2025PTC051089" },
  { label: "GSTIN", value: "21AANCC1954F1ZW" },
  { label: "PAN", value: "AANCC1954F" },
  { label: "Udyam Registration", value: "UDYAM-OD-03-0076858" },
  { label: "DPIIT Recognition", value: "DIPP230789" },
  { label: "Incorporation Date", value: "16 October 2025" },
  { label: "Company Type", value: "Private Limited" },
  { label: "Registered Office", value: "Odisha, India" },
];

// Divisions Data
const divisions = [
  {
    name: "TRACEFLOW",
    tagline: "Digital Cognition Infrastructure",
    description: "Enterprise observability and experience intelligence",
    industries: "Banking, Healthcare, Insurance, Telecom",
    status: "Beta / Early Access",
    statusColor: "bg-accent/20 text-accent",
    link: "/traceflow",
  },
  {
    name: "ATLAS",
    tagline: "Workforce Operating System",
    description: "AI-enabled workforce management and productivity platform",
    industries: null,
    status: "Beta / Early Access",
    statusColor: "bg-accent/20 text-accent",
    link: "/atlas",
  },
  {
    name: "OriginX Labs",
    tagline: "Research & Product Innovation Division",
    description: "Focus: AI/ML, advanced computing, emerging technologies",
    industries: null,
    status: "Beta / Early Access",
    statusColor: "bg-accent/20 text-accent",
    link: "/originx-labs",
  },
  {
    name: "CropXon Cloud",
    tagline: "Infrastructure as a Service (IaaS)",
    description: "Target: Individuals, startups, and SMBs",
    industries: null,
    status: "Beta / Early Access",
    statusColor: "bg-accent/20 text-accent",
    link: "/cropxon-cloud",
  },
  {
    name: "CropXon Robotics",
    tagline: "Advanced Robotics Division",
    description: "Focus: Autonomous systems, industrial automation",
    industries: null,
    status: "Planned (Future)",
    statusColor: "bg-muted text-muted-foreground",
    link: "/robotics",
  },
];

// Timeline Data
const timeline = [
  { date: "Oct 2025", event: "Company Incorporation" },
  { date: "Q4 2025", event: "Traceflow Launch" },
  { date: "Q1 2026", event: "ATLAS Beta" },
  { date: "Q2 2026", event: "CropXon Cloud Expansion" },
  { date: "2026+", event: "Robotics Division Development" },
  { date: "2027", event: "Enterprise Cloud Roadmap" },
];

// Values Data
const values = [
  { title: "Ethical AI", description: "Building responsible and transparent artificial intelligence systems" },
  { title: "Data Privacy First", description: "Zero-compromise approach to user data protection and sovereignty" },
  { title: "Zero Tolerance for Corruption", description: "Maintaining the highest standards of corporate integrity" },
  { title: "Transparent Partnerships", description: "Open, honest, and mutually beneficial collaborations" },
  { title: "Sustainable Operations", description: "Long-term thinking in all technology and business decisions" },
];

// Certifications Data
const certifications = [
  { name: "DPIIT Startup India Recognition", validity: "Valid till 2035" },
  { name: "MCA Registered Company", validity: null },
  { name: "Udyam MSME Certified", validity: null },
  { name: "Registered Trademark: CropXon™", validity: null },
  { name: "Technology Innovation Award", validity: "2025" },
];

// Compliance Data
const corporateCompliance = [
  "Companies Act, 2013",
  "MCA Reporting",
  "MSME Act",
  "GST & IT Act compliance",
  "DPDP-aligned data protection practices",
];

const techCompliance = [
  "OWASP security standards",
  "Secure SDLC",
  "API security governance",
  "Encrypted data flows",
  "Audit trails for enterprise clients",
];

// Contact Data
const contacts = [
  { label: "General Inquiries", email: "office@cropxon.com" },
  { label: "Legal", email: "legal@cropxon.com" },
  { label: "Compliance", email: "compliance@cropxon.com" },
  { label: "Support", email: "support@cropxon.com" },
];

// SVG Logo Mark Component
const CropxonMark = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg
    viewBox="0 0 60 60"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 15L30 30M30 30L45 45M45 15L30 30M30 30L15 45"
      stroke="url(#profileGradient)"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <circle cx="15" cy="15" r="3" fill="hsl(234, 55%, 50%)" />
    <circle cx="45" cy="15" r="3" fill="hsl(234, 55%, 50%)" />
    <circle cx="15" cy="45" r="3" fill="hsl(249, 90%, 68%)" />
    <circle cx="45" cy="45" r="3" fill="hsl(249, 90%, 68%)" />
    <circle cx="30" cy="30" r="5" fill="hsl(234, 55%, 50%)" />
    <path
      d="M48 12L55 5M55 5L55 12M55 5L48 5"
      stroke="hsl(249, 90%, 68%)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="55" cy="5" r="2" fill="hsl(249, 90%, 68%)" />
    <defs>
      <linearGradient id="profileGradient" x1="15" y1="15" x2="45" y2="45" gradientUnits="userSpaceOnUse">
        <stop stopColor="hsl(234, 55%, 50%)" />
        <stop offset="1" stopColor="hsl(249, 90%, 68%)" />
      </linearGradient>
    </defs>
  </svg>
);

const CompanyProfile = () => {
  return (
    <>
      <Helmet>
        <title>Company Profile — CropXon Innovations Private Limited</title>
        <meta
          name="description"
          content="CropXon Innovations Private Limited is a multi-division technology company building foundational platforms across digital cognition, workforce systems, cloud infrastructure, and advanced research."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-16 lg:py-20 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="profile-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#profile-grid)" />
              </svg>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center mb-8">
                  <CropxonMark className="w-20 h-20 md:w-24 md:h-24" />
                </div>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-wide mb-6">
                  CropXon Innovations Private Limited
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  A multi-division technology company building foundational platforms across digital cognition, workforce systems, cloud infrastructure, and advanced research.
                </p>
              </div>
            </div>
          </section>

          {/* Company Metrics */}
          <section className="py-12 bg-card/30 border-b border-border">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex items-center justify-center gap-3 mb-10">
                <TrendingUp className="w-6 h-6 text-accent" />
                <h2 className="font-display text-2xl font-bold text-foreground uppercase tracking-wider">
                  Company Metrics
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <AnimatedCounter 
                  end={5}
                  suffix="+"
                  label="Products"
                  description="Platforms in development"
                />
                <AnimatedCounter 
                  end={15}
                  suffix="+"
                  label="Team Members"
                  description="Engineers & specialists"
                />
                <AnimatedCounter 
                  end={50}
                  suffix="+"
                  label="Enterprise Clients"
                  description="Organizations served"
                />
                <AnimatedCounter 
                  end={99}
                  suffix=".9%"
                  label="Uptime SLA"
                  description="Platform reliability"
                />
              </div>
            </div>
          </section>

          {/* Official Company Details */}
          <section className="py-14 bg-card/50 border-y border-border">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex items-center gap-3 mb-10">
                <Building2 className="w-6 h-6 text-accent" />
                <h2 className="font-display text-2xl font-bold text-foreground uppercase tracking-wider">
                  Official Company Details
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {companyDetails.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 bg-background border border-border rounded-sm"
                  >
                    <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-2">
                      {item.label}
                    </span>
                    <span className="text-foreground font-medium">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Company Overview */}
          <section className="py-14">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-display text-2xl font-bold text-foreground uppercase tracking-wider mb-8">
                  Company Overview
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    CropXon Innovations Private Limited is a legally registered Indian deep-technology company operating multiple technology divisions across SaaS, cloud infrastructure, research & development, and future robotics initiatives.
                  </p>
                  <p>
                    Unlike point-solution providers, CropXon operates as a parent technology institution building foundational systems designed to serve as infrastructure layers for enterprise, government, and regulated industries. Our multi-division structure enables focused execution while maintaining architectural consistency across all platforms.
                  </p>
                  <p>
                    We are committed to building technology that outlasts market cycles—platforms designed for permanence, not pivots. Our approach combines rigorous engineering discipline with long-term strategic thinking, positioning CropXon as a trusted infrastructure partner for organizations requiring stability, security, and scale.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Divisional Structure */}
          <section className="py-14 bg-gradient-subtle">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="text-center mb-16">
                <span className="font-mono text-sm text-accent uppercase tracking-widest mb-4 block">
                  Ecosystem
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wider">
                  Divisional Structure
                </h2>
              </div>

              <div className="max-w-5xl mx-auto">
                {/* Central Node */}
                <div className="flex justify-center mb-12">
                  <div className="px-8 py-4 bg-card border border-border rounded-sm inline-flex items-center gap-4">
                    <CropxonMark className="w-10 h-10" />
                    <div>
                      <h3 className="font-display font-bold text-foreground">CropXon Innovations</h3>
                      <span className="font-mono text-xs text-muted-foreground">Parent Company</span>
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                <div className="flex justify-center mb-8">
                  <div className="w-px h-12 bg-border" />
                </div>

                {/* Divisions Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {divisions.map((division, index) => {
                    const content = (
                      <>
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="font-display text-base sm:text-lg font-bold text-foreground">
                            {division.name}
                          </h3>
                          <span className={`text-[10px] sm:text-xs px-2 py-1 rounded-sm font-mono ${division.statusColor}`}>
                            {division.status}
                          </span>
                        </div>
                        <p className="font-mono text-xs text-accent mb-2">{division.tagline}</p>
                        <p className="text-sm text-muted-foreground mb-3">{division.description}</p>
                        {division.industries && (
                          <p className="text-xs text-muted-foreground/70">
                            <span className="font-medium">Industries:</span> {division.industries}
                          </p>
                        )}
                      </>
                    );
                    
                    return division.link ? (
                      <Link
                        key={index}
                        to={division.link}
                        className="block p-4 sm:p-6 bg-card border border-border rounded-sm hover:border-muted-foreground/30 transition-colors duration-300"
                      >
                        {content}
                      </Link>
                    ) : (
                      <div
                        key={index}
                        className="p-4 sm:p-6 bg-card border border-border rounded-sm"
                      >
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Compliance & Governance */}
          <section className="py-14">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex items-center gap-3 mb-10">
                <Shield className="w-6 h-6 text-accent" />
                <h2 className="font-display text-2xl font-bold text-foreground uppercase tracking-wider">
                  Compliance & Governance
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
                {/* Corporate Compliance */}
                <div className="p-8 bg-card border border-border rounded-sm">
                  <h3 className="font-display text-lg font-bold text-foreground mb-6">
                    Corporate Compliance
                  </h3>
                  <ul className="space-y-3">
                    {corporateCompliance.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Compliance */}
                <div className="p-8 bg-card border border-border rounded-sm">
                  <h3 className="font-display text-lg font-bold text-foreground mb-6">
                    Technology & Software Compliance
                  </h3>
                  <ul className="space-y-3">
                    {techCompliance.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="py-14 bg-card/50 border-y border-border">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex items-center gap-3 mb-10">
                <Award className="w-6 h-6 text-accent" />
                <h2 className="font-display text-2xl font-bold text-foreground uppercase tracking-wider">
                  Certifications & Recognitions
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-6 bg-background border border-border rounded-sm flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <FileCheck className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm">{cert.name}</h4>
                      {cert.validity && (
                        <span className="font-mono text-xs text-muted-foreground">{cert.validity}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Innovation Roadmap */}
          <section className="py-14">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex items-center gap-3 mb-10">
                <Rocket className="w-6 h-6 text-accent" />
                <h2 className="font-display text-2xl font-bold text-foreground uppercase tracking-wider">
                  Innovation Roadmap
                </h2>
              </div>

              <div className="max-w-6xl">
                <p className="text-muted-foreground mb-8 max-w-2xl">
                  Our strategic roadmap outlines key milestones from Q1 2026 onwards, 
                  charting the growth trajectory across all CropXon divisions.
                </p>
                <InteractiveTimeline />
              </div>
            </div>
          </section>

          {/* Ethics & Values */}
          <section className="py-14 bg-gradient-subtle">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex items-center gap-3 mb-10">
                <Heart className="w-6 h-6 text-accent" />
                <h2 className="font-display text-2xl font-bold text-foreground uppercase tracking-wider">
                  Ethics & Values
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
                {values.map((value, index) => (
                  <div key={index} className="p-6 bg-card border border-border rounded-sm">
                    <h3 className="font-display text-lg font-bold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="py-14">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex items-center gap-3 mb-10">
                <Mail className="w-6 h-6 text-accent" />
                <h2 className="font-display text-2xl font-bold text-foreground uppercase tracking-wider">
                  Contact & Official Channels
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
                {/* Email Contacts */}
                <div className="space-y-4">
                  {contacts.map((contact, index) => (
                    <div key={index} className="p-4 bg-card border border-border rounded-sm flex items-center justify-between">
                      <span className="text-muted-foreground">{contact.label}</span>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-foreground hover:text-accent transition-colors duration-300 flex items-center gap-2"
                      >
                        {contact.email}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  ))}
                </div>

                {/* Registered Office */}
                <div className="p-6 bg-card border border-border rounded-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-accent" />
                    <h3 className="font-display font-bold text-foreground">Registered Office</h3>
                  </div>
                  <p className="text-muted-foreground">
                    CropXon Innovations Private Limited<br />
                    Odisha, India
                  </p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="font-mono text-xs text-muted-foreground">
                      CIN: U62010OD2025PTC051089
                    </p>
                  </div>
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

export default CompanyProfile;
