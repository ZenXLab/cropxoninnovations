import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, ShieldCheck, Users, Settings, Boxes, Building2, GraduationCap, FlaskConical, 
  Zap, Clock, RefreshCw, Wallet, ArrowRight, Play, ExternalLink, Star, CheckCircle2,
  Sparkles, Target, TrendingUp, Globe
} from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FullscreenDashboardModal from '@/components/modals/FullscreenDashboardModal';

interface Platform {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  color: string;
  status: 'live' | 'development' | 'new';
  category: string;
  useCases: string[];
  keyFeatures: string[];
  targetAudience: string[];
  route: string;
}

const platforms: Platform[] = [
  {
    id: 'cognix',
    name: 'Cognix',
    tagline: 'Software Cognition & Architecture Intelligence',
    description: 'AI-powered platform that understands existing codebases, architectures, and business workflows at a system level. Perfect for CTOs and architects planning migrations or modernization.',
    icon: Brain,
    color: 'hsl(220, 70%, 55%)',
    status: 'live',
    category: 'Engineering',
    useCases: ['Codebase Analysis', 'Architecture Mapping', 'Technical Debt Assessment', 'Migration Planning'],
    keyFeatures: ['System Understanding', 'Pattern Recognition', 'Risk Detection', 'Migration Guides'],
    targetAudience: ['CTOs', 'Architects', 'Senior Developers', 'Platform Teams'],
    route: '/cognix',
  },
  {
    id: 'qualyx',
    name: 'Qualyx',
    tagline: 'QA Automation & Quality Intelligence',
    description: 'Intelligent QA automation platform that transforms testing into a continuous quality feedback system with AI-powered test generation and smart regression detection.',
    icon: ShieldCheck,
    color: 'hsl(175, 60%, 45%)',
    status: 'live',
    category: 'Engineering',
    useCases: ['Test Automation', 'Regression Testing', 'CI/CD Integration', 'Quality Metrics'],
    keyFeatures: ['Auto Test Generation', 'Flaky Test Detection', 'Pattern Learning', 'Quality Dashboard'],
    targetAudience: ['QA Teams', 'SDETs', 'Engineering Teams', 'DevOps'],
    route: '/qualyx',
  },
  {
    id: 'huminex',
    name: 'Huminex',
    tagline: 'Workforce OS & Human Intelligence',
    description: 'Modern workforce operating system that manages people, roles, skills, and organizational intelligence with AI-powered insights for better workforce decisions.',
    icon: Users,
    color: 'hsl(340, 65%, 55%)',
    status: 'live',
    category: 'Operations',
    useCases: ['HRMS', 'Skill Mapping', 'Org Structure', 'Workforce Analytics'],
    keyFeatures: ['People Management', 'Skill Graphs', 'Team Analytics', 'Retention Insights'],
    targetAudience: ['HR Teams', 'Founders', 'Operations Leaders', 'Enterprises'],
    route: '/huminex',
  },
  {
    id: 'opzenix',
    name: 'OpZeniX',
    tagline: 'DevOps · DevSecOps · MLOps · AIOps · LLMOps',
    description: 'Intelligent operations and execution platform for modern software and AI systems, unifying all *Ops disciplines into a single coherent platform.',
    icon: Settings,
    color: 'hsl(260, 60%, 58%)',
    status: 'live',
    category: 'Engineering',
    useCases: ['CI/CD Orchestration', 'Infrastructure Management', 'Security Automation', 'ML Pipeline'],
    keyFeatures: ['Multi-Ops Support', 'AI-Powered Insights', 'Security First', 'Unified Dashboard'],
    targetAudience: ['Platform Engineers', 'DevOps Teams', 'ML Engineers', 'Enterprise IT'],
    route: '/opzenix',
  },
  {
    id: 'traceflow',
    name: 'TraceFlow',
    tagline: 'Digital Cognition & Infrastructure Intelligence',
    description: 'Unifies every digital signal into a single, trusted intelligence layer for mission-critical systems with cross-layer correlation and zero-trust security.',
    icon: Boxes,
    color: 'hsl(200, 70%, 50%)',
    status: 'live',
    category: 'Infrastructure',
    useCases: ['Signal Correlation', 'Zero-Trust Access', 'Incident Detection', 'Hybrid Cloud'],
    keyFeatures: ['4.2M Signals/sec', 'Cross-Layer Correlation', 'Zero-Trust', 'Real-Time Intelligence'],
    targetAudience: ['Banks', 'Insurance', 'Telecom', 'Government'],
    route: '/traceflow',
  },
  {
    id: 'zenith-studio',
    name: 'Zenith Studio',
    tagline: 'Business & Content Creation Platform',
    description: 'Multi-tenant creation platform for building digital business experiences with drag-and-drop builders, automation workflows, and API extensibility.',
    icon: Building2,
    color: 'hsl(280, 55%, 55%)',
    status: 'live',
    category: 'Business',
    useCases: ['Website Building', 'CMS', 'LMS', 'Workflow Automation'],
    keyFeatures: ['Canvas Builders', 'Multi-Tenant', 'API First', '99.99% Uptime'],
    targetAudience: ['Businesses', 'Creators', 'Product Teams', 'Non-Technical Users'],
    route: '/zenith-studio',
  },
  {
    id: 'zenith-institute',
    name: 'Zenith Institute',
    tagline: 'Learning, Enablement & Certification',
    description: 'Learning and development arm focused on upskilling professionals and organizations with hands-on labs, mentorship, and industry-recognized certifications.',
    icon: GraduationCap,
    color: 'hsl(145, 55%, 45%)',
    status: 'live',
    category: 'Education',
    useCases: ['Professional Training', 'Certifications', 'Corporate Learning', 'Career Development'],
    keyFeatures: ['287+ Courses', 'Hands-On Labs', 'Mentorship', '94.2% Placement'],
    targetAudience: ['Students', 'Professionals', 'Enterprises', 'Partners'],
    route: '/zenith-institute',
  },
  {
    id: 'originx-labs',
    name: 'OriginX Labs',
    tagline: 'Research & Advanced Innovation Division',
    description: 'Deep-tech research and innovation lab for AI agents, system cognition, and future technology incubation with early access to experimental features.',
    icon: FlaskConical,
    color: 'hsl(25, 75%, 52%)',
    status: 'live',
    category: 'Research',
    useCases: ['AI Research', 'Tech Incubation', 'Experimental Features', 'Innovation Partnerships'],
    keyFeatures: ['23 Patents', '68 Papers', '47 Active Projects', 'Early Access'],
    targetAudience: ['Researchers', 'Advanced Engineers', 'Partners', 'Future-Facing Enterprises'],
    route: '/originx-labs',
  },
  {
    id: 'proxinex',
    name: 'Proxinex',
    tagline: 'Control Intelligence · AI Model Routing',
    description: 'Route queries to the best AI models with full cost transparency and answer verification. Save up to 68% on AI costs while maintaining accuracy.',
    icon: Zap,
    color: 'hsl(45, 85%, 50%)',
    status: 'new',
    category: 'AI',
    useCases: ['AI Model Routing', 'Cost Optimization', 'Answer Verification', 'Multi-Model Management'],
    keyFeatures: ['47+ Models', '68% Cost Savings', 'Real-Time Routing', 'Answer Verification'],
    targetAudience: ['AI Teams', 'Developers', 'Enterprises', 'Cost-Conscious Teams'],
    route: '/proxinex',
  },
  {
    id: 'chronyx',
    name: 'Chronyx',
    tagline: 'Personal Quiet Space (PQS)',
    description: 'All personal details at one place including todos, finance, study, note taking, grocery lists, net worth, and personal memories.',
    icon: Clock,
    color: 'hsl(190, 70%, 50%)',
    status: 'development',
    category: 'Personal',
    useCases: ['Task Management', 'Personal Finance', 'Note Taking', 'Memory Keeping'],
    keyFeatures: ['Unified Dashboard', 'Finance Tracking', 'Smart Notes', 'Memory Journal'],
    targetAudience: ['Individuals', 'Professionals', 'Students', 'Families'],
    route: '/chronyx',
  },
  {
    id: 'convertix',
    name: 'Convertix',
    tagline: 'Conversion Operating Studio (COS)',
    description: 'All conversion tools for PDF/documents, images, media, and developer utilities in one unified platform with 156+ format support.',
    icon: RefreshCw,
    color: 'hsl(320, 70%, 55%)',
    status: 'development',
    category: 'Tools',
    useCases: ['PDF Conversion', 'Image Processing', 'Media Conversion', 'Developer Utils'],
    keyFeatures: ['156+ Formats', '2.4s Average', '99.7% Success', 'Batch Processing'],
    targetAudience: ['Developers', 'Designers', 'Content Creators', 'Businesses'],
    route: '/convertix',
  },
  {
    id: 'finioraa',
    name: 'Finioraa',
    tagline: 'Smart Money · Budget Intelligence',
    description: 'Unified finance platform for managing money across all life stages with AI-powered budgeting, investment tracking, and financial planning.',
    icon: Wallet,
    color: 'hsl(155, 65%, 42%)',
    status: 'development',
    category: 'Finance',
    useCases: ['Budget Management', 'Investment Tracking', 'Financial Planning', 'Net Worth Analysis'],
    keyFeatures: ['Multi-Account', 'AI Insights', 'Goal Planning', 'Smart Alerts'],
    targetAudience: ['Individuals', 'Families', 'Freelancers', 'Small Businesses'],
    route: '/finioraa',
  },
];

const categories = ['All', 'Engineering', 'Operations', 'Infrastructure', 'Business', 'Education', 'Research', 'AI', 'Personal', 'Tools', 'Finance'];

export default function PlatformShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoPlatform, setDemoPlatform] = useState<string | undefined>();

  const filteredPlatforms = selectedCategory === 'All' 
    ? platforms 
    : platforms.filter(p => p.category === selectedCategory);

  const openDemo = (platformId: string) => {
    setDemoPlatform(platformId);
    setDemoModalOpen(true);
  };

  return (
    <>
      <SEOHead 
        title="Platform Showcase | CropXon Ecosystem"
        description="Explore all 12 CropXon ecosystem platforms. Find the perfect solution for engineering, operations, AI, finance, and more."
        keywords="CropXon, platforms, ecosystem, software, SaaS, AI, DevOps, HRMS"
        url="https://cropxon.com/showcase"
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto px-6 relative">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-4 gap-2">
                <Sparkles className="w-3 h-3" />
                12 Integrated Platforms
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                The Complete CropXon
                <span className="block text-primary mt-2">Ecosystem</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover our unified suite of platforms designed to power every aspect of modern business 
                - from engineering to operations to personal productivity.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="gap-2" onClick={() => openDemo('cognix')}>
                  <Play className="w-4 h-4" />
                  Try Interactive Demo
                </Button>
                <Button size="lg" variant="outline" className="gap-2" onClick={() => (window as any).openPlatformWizard?.()}>
                  <Target className="w-4 h-4" />
                  Find Your Platform
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-y border-border bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPlatforms.map((platform) => {
                const Icon = platform.icon;
                return (
                  <Card 
                    key={platform.id}
                    className="group relative overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                  >
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <Badge 
                        variant={platform.status === 'live' ? 'default' : platform.status === 'new' ? 'secondary' : 'outline'}
                        className="text-xs"
                      >
                        {platform.status === 'live' ? 'LIVE' : platform.status === 'new' ? 'NEW' : 'Development'}
                      </Badge>
                    </div>

                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div 
                          className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                          style={{ backgroundColor: `${platform.color}20` }}
                        >
                          <Icon className="w-7 h-7" style={{ color: platform.color }} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{platform.name}</h3>
                          <p className="text-sm text-muted-foreground">{platform.tagline}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {platform.description}
                      </p>

                      {/* Target Audience */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {platform.targetAudience.slice(0, 3).map((audience, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {audience}
                          </Badge>
                        ))}
                        {platform.targetAudience.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{platform.targetAudience.length - 3}
                          </Badge>
                        )}
                      </div>

                      {/* Use Cases */}
                      <div className="space-y-1 mb-6">
                        {platform.useCases.slice(0, 3).map((useCase, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{useCase}</span>
                          </div>
                        ))}
                      </div>

                      {/* Key Features Pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {platform.keyFeatures.slice(0, 2).map((feature, i) => (
                          <span 
                            key={i}
                            className="text-xs px-2 py-1 rounded-full"
                            style={{ 
                              backgroundColor: `${platform.color}15`,
                              color: platform.color
                            }}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1 gap-1"
                          onClick={() => openDemo(platform.id)}
                        >
                          <Play className="w-3 h-3" />
                          Demo
                        </Button>
                        <Button 
                          size="sm" 
                          className="flex-1 gap-1"
                          style={{ backgroundColor: platform.color }}
                          asChild
                        >
                          <Link to={platform.route}>
                            Explore
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">12</div>
                <div className="text-muted-foreground">Integrated Platforms</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">8</div>
                <div className="text-muted-foreground">Live & Production</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Industries Served</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime SLA</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Not Sure Which Platform to Start With?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our interactive wizard will ask you a few questions and recommend the perfect 
                CropXon platform based on your specific needs and goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="gap-2" onClick={() => (window as any).openPlatformWizard?.()}>
                  <Sparkles className="w-5 h-5" />
                  Take the Platform Quiz
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">
                    <Globe className="w-5 h-5 mr-2" />
                    Contact Sales
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <FullscreenDashboardModal 
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        initialPlatform={demoPlatform}
      />
    </>
  );
}
