import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Beaker, Cpu, Sparkles, Code2, GitBranch, Microscope } from "lucide-react";

const researchAreas = [
  {
    icon: Sparkles,
    title: "Artificial Intelligence",
    description: "Developing next-generation AI models for enterprise applications with focus on explainability and reliability."
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    description: "Building ML pipelines and frameworks that scale from prototype to production seamlessly."
  },
  {
    icon: Code2,
    title: "Advanced Computing",
    description: "Exploring edge computing, distributed systems, and high-performance computing architectures."
  },
  {
    icon: GitBranch,
    title: "Platform Engineering",
    description: "Creating developer tools and platforms that accelerate innovation across all CropXon divisions."
  },
  {
    icon: Microscope,
    title: "Emerging Technologies",
    description: "Researching quantum computing, blockchain, and other frontier technologies for future applications."
  },
  {
    icon: Beaker,
    title: "Applied Research",
    description: "Translating academic research into practical, market-ready solutions for enterprise customers."
  }
];

const OriginxLabs = () => {
  return (
    <>
      <SEOHead
        title="OriginX Labs — Research & Product Innovation Division"
        description="OriginX Labs is Cropxon's research and development division focused on AI/ML, advanced computing, emerging technologies, and applied research."
        keywords="AI research, ML research, R&D, product innovation, advanced computing, emerging technologies, applied research, Cropxon OriginX Labs"
        url="https://cropxon.com/originx-labs"
        type="website"
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-20">
          {/* Hero */}
          <section className="py-24 lg:py-32 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="labs-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
                    <circle cx="40" cy="40" r="2" fill="currentColor" opacity="0.5" />
                    <circle cx="0" cy="0" r="1" fill="currentColor" />
                    <circle cx="80" cy="0" r="1" fill="currentColor" />
                    <circle cx="0" cy="80" r="1" fill="currentColor" />
                    <circle cx="80" cy="80" r="1" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#labs-pattern)" />
              </svg>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
              <div className="max-w-4xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs px-3 py-1 rounded-sm bg-blue-500/20 text-blue-400 font-mono uppercase tracking-wider">
                    Active R&D
                  </span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-wide mb-6">
                  OriginX Labs
                </h1>
                <p className="font-mono text-lg text-accent uppercase tracking-wider mb-6">
                  Research & Product Innovation Division
                </p>
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
                  Our research and development division focused on pioneering new technologies and bringing innovations to market. Where ideas become infrastructure.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="heroPrimary" size="xl" asChild>
                    <a href="https://labs.cropxon.com" target="_blank" rel="noopener noreferrer">
                      Explore Research
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/#ecosystem">Back to Ecosystem</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Research Areas */}
          <section className="py-20 bg-card/50 border-y border-border">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="text-center mb-16">
                <span className="font-mono text-sm text-accent uppercase tracking-widest mb-4 block">
                  Focus Areas
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wider">
                  Research & Development
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {researchAreas.map((area, index) => (
                  <div
                    key={index}
                    className="p-8 bg-background border border-border rounded-sm hover:border-muted-foreground/30 transition-colors duration-300"
                  >
                    <area.icon className="w-8 h-8 text-accent mb-4" />
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mission */}
          <section className="py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mx-auto text-center">
                <span className="font-mono text-sm text-accent uppercase tracking-widest mb-6 block">
                  Our Mission
                </span>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-wide mb-8">
                  From Research to Reality
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  OriginX Labs bridges the gap between academic research and enterprise-ready solutions. We invest in long-term research that powers the next generation of CropXon products.
                </p>
                <Button variant="heroPrimary" size="xl" asChild>
                  <a href="https://labs.cropxon.com" target="_blank" rel="noopener noreferrer">
                    View Publications
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default OriginxLabs;
