import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  MapPin, 
  Clock, 
  Briefcase,
  Users,
  Lightbulb,
  Heart,
  Target,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from "lucide-react";

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

const openPositions: JobPosition[] = [
  {
    id: "swe-backend-01",
    title: "Senior Backend Engineer",
    department: "Engineering",
    location: "Remote / India",
    type: "Full-time",
    experience: "4+ years",
    description: "Join our core engineering team to build scalable backend systems that power enterprise platforms.",
    responsibilities: [
      "Design and implement high-performance APIs and microservices",
      "Optimize database queries and system architecture",
      "Collaborate with frontend and DevOps teams",
      "Mentor junior engineers and conduct code reviews",
    ],
    requirements: [
      "4+ years of experience with Node.js, Python, or Go",
      "Strong understanding of distributed systems",
      "Experience with PostgreSQL, Redis, and message queues",
      "Familiarity with cloud platforms (AWS, GCP, or Azure)",
    ],
  },
  {
    id: "swe-frontend-01",
    title: "Frontend Engineer",
    department: "Engineering",
    location: "Remote / India",
    type: "Full-time",
    experience: "2+ years",
    description: "Build beautiful, performant user interfaces for our enterprise products.",
    responsibilities: [
      "Develop responsive web applications using React/TypeScript",
      "Implement complex UI components and interactions",
      "Optimize frontend performance and accessibility",
      "Work closely with designers and product managers",
    ],
    requirements: [
      "2+ years of experience with React and TypeScript",
      "Strong CSS skills including Tailwind CSS",
      "Experience with state management (Redux, Zustand)",
      "Understanding of web accessibility standards",
    ],
  },
  {
    id: "ml-engineer-01",
    title: "Machine Learning Engineer",
    department: "OriginX Labs",
    location: "Remote / India",
    type: "Full-time",
    experience: "3+ years",
    description: "Research and develop AI/ML solutions for our cognitive platforms.",
    responsibilities: [
      "Design and implement machine learning models",
      "Build data pipelines for model training and inference",
      "Collaborate with research scientists on novel approaches",
      "Deploy models to production environments",
    ],
    requirements: [
      "3+ years of experience in ML/AI development",
      "Proficiency in Python, PyTorch, or TensorFlow",
      "Experience with NLP, computer vision, or time series",
      "Strong mathematical foundations in statistics and linear algebra",
    ],
  },
  {
    id: "product-manager-01",
    title: "Product Manager",
    department: "Product",
    location: "Remote / India",
    type: "Full-time",
    experience: "4+ years",
    description: "Lead product strategy and execution for our enterprise platforms.",
    responsibilities: [
      "Define product roadmap and prioritize features",
      "Conduct user research and competitive analysis",
      "Work with engineering and design teams",
      "Communicate product vision to stakeholders",
    ],
    requirements: [
      "4+ years of product management experience",
      "Experience with B2B/enterprise products",
      "Strong analytical and communication skills",
      "Technical background preferred",
    ],
  },
  {
    id: "devops-01",
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote / India",
    type: "Full-time",
    experience: "3+ years",
    description: "Build and maintain our cloud infrastructure and CI/CD pipelines.",
    responsibilities: [
      "Design and implement cloud infrastructure (AWS/GCP)",
      "Manage Kubernetes clusters and containerized workloads",
      "Build and maintain CI/CD pipelines",
      "Implement monitoring, logging, and alerting systems",
    ],
    requirements: [
      "3+ years of DevOps/SRE experience",
      "Strong experience with Kubernetes and Docker",
      "Proficiency in Infrastructure as Code (Terraform)",
      "Experience with monitoring tools (Prometheus, Grafana)",
    ],
  },
];

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're building technology that will matter for decades, not months.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We encourage experimentation and learning from failure.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "We believe the best work comes from diverse, cross-functional teams.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Remote-first culture with flexible schedules and unlimited PTO.",
  },
];

const benefits = [
  "Competitive salary and equity",
  "Remote-first work culture",
  "Health insurance coverage",
  "Learning & development budget",
  "Flexible working hours",
  "Annual team retreats",
  "Latest hardware and tools",
  "Conference attendance support",
];

const Careers = () => {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const toggleJob = (jobId: string) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <>
      <Helmet>
        <title>Careers — Join CropXon Innovations</title>
        <meta
          name="description"
          content="Join CropXon Innovations and help build foundational technology platforms. Explore open positions in engineering, product, design, and more."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-20">
          {/* Hero */}
          <section className="py-24 lg:py-32 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02]">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="careers-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#careers-grid)" />
              </svg>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <span className="font-mono text-sm text-accent uppercase tracking-widest mb-4 block">
                  Join Our Team
                </span>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-wide mb-6">
                  Build the Future With Us
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  We're looking for exceptional people who want to work on hard problems 
                  and build technology that will stand the test of time.
                </p>
                <Button variant="heroPrimary" size="xl" asChild>
                  <a href="#positions">
                    View Open Positions
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Culture & Values */}
          <section className="py-20 bg-card/50 border-y border-border">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="text-center mb-16">
                <span className="font-mono text-sm text-accent uppercase tracking-widest mb-4 block">
                  Our Culture
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wider">
                  What We Value
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="p-6 bg-background border border-border rounded-sm text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-20">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <span className="font-mono text-sm text-accent uppercase tracking-widest mb-4 block">
                    Perks & Benefits
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wider">
                    What We Offer
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="p-4 bg-card border border-border rounded-sm flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Open Positions */}
          <section id="positions" className="py-20 bg-card/50 border-y border-border">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="text-center mb-16">
                <span className="font-mono text-sm text-accent uppercase tracking-widest mb-4 block">
                  Open Positions
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wider mb-4">
                  Join Our Team
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We're always looking for talented individuals. If you don't see a role that fits, 
                  send your resume to{" "}
                  <a href="mailto:careers@cropxon.com" className="text-accent hover:underline">
                    careers@cropxon.com
                  </a>
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-4">
                {openPositions.map((job) => (
                  <div
                    key={job.id}
                    className="bg-background border border-border rounded-sm overflow-hidden"
                  >
                    {/* Job Header */}
                    <button
                      onClick={() => toggleJob(job.id)}
                      className="w-full p-6 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="font-display text-lg font-bold text-foreground mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Briefcase className="w-4 h-4" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="hidden sm:block text-xs px-3 py-1 rounded-sm bg-accent/20 text-accent font-mono">
                          {job.experience}
                        </span>
                        {expandedJob === job.id ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        )}
                      </div>
                    </button>

                    {/* Job Details */}
                    {expandedJob === job.id && (
                      <div className="px-6 pb-6 border-t border-border pt-6">
                        <p className="text-muted-foreground mb-6">{job.description}</p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="font-display font-bold text-foreground mb-3">
                              Responsibilities
                            </h4>
                            <ul className="space-y-2">
                              {job.responsibilities.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-display font-bold text-foreground mb-3">
                              Requirements
                            </h4>
                            <ul className="space-y-2">
                              {job.requirements.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <Button variant="heroPrimary" size="lg" asChild>
                          <a href={`mailto:careers@cropxon.com?subject=Application: ${job.title}`}>
                            Apply Now
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12 text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-wide mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-10">
                We're always looking for exceptional talent. Send us your resume and tell us 
                how you'd like to contribute to our mission.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href="mailto:careers@cropxon.com">
                  Send Your Resume
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Careers;
