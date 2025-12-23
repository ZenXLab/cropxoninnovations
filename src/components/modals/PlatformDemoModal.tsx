import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle2, 
  Brain, 
  Workflow, 
  Shield, 
  Users, 
  Boxes, 
  Sparkles,
  GraduationCap,
  FlaskConical,
  ChevronLeft,
  ChevronRight,
  ExternalLink
} from "lucide-react";

interface PlatformDemo {
  id: string;
  name: string;
  tagline: string;
  description: string;
  iconType: string;
  color: string;
  href: string;
  features: { title: string; description: string }[];
  metrics: { label: string; value: string }[];
  useCases: string[];
}

const platformDemos: PlatformDemo[] = [
  {
    id: 'cognix',
    name: 'Cognix',
    tagline: 'Software Cognition Platform',
    description: 'Enterprise cognition and AI decision systems that understand, analyze, and optimize your software architecture.',
    iconType: 'brain',
    color: 'hsl(220, 70%, 55%)',
    href: '/cognix',
    features: [
      { title: 'Architecture Intelligence', description: 'Auto-discover system dependencies and relationships' },
      { title: 'AI-Powered Analysis', description: 'Deep learning models for code comprehension' },
      { title: 'Real-time Insights', description: 'Live system health and performance monitoring' }
    ],
    metrics: [
      { label: 'Code Coverage', value: '94%' },
      { label: 'Dependencies Mapped', value: '2,847' },
      { label: 'Tech Debt Score', value: 'A+' }
    ],
    useCases: ['Microservices Architecture', 'Legacy Modernization', 'DevOps Optimization']
  },
  {
    id: 'opzenix',
    name: 'OpZeniX',
    tagline: 'Intelligent Operations Platform',
    description: 'Unified operations management with AI-driven automation for modern enterprises.',
    iconType: 'workflow',
    color: 'hsl(260, 60%, 58%)',
    href: '/opzenix',
    features: [
      { title: 'Pipeline Orchestration', description: 'End-to-end CI/CD automation' },
      { title: 'Incident Response', description: 'AI-powered alert correlation and resolution' },
      { title: 'Resource Optimization', description: 'Smart infrastructure scaling' }
    ],
    metrics: [
      { label: 'Deploy Frequency', value: '50/day' },
      { label: 'MTTR', value: '<5min' },
      { label: 'Automation Rate', value: '87%' }
    ],
    useCases: ['Cloud Operations', 'DevSecOps', 'SRE Practices']
  },
  {
    id: 'qualyx',
    name: 'Qualyx',
    tagline: 'Quality Engineering Suite',
    description: 'Comprehensive quality assurance and compliance engine for enterprise-grade software.',
    iconType: 'shield',
    color: 'hsl(175, 60%, 45%)',
    href: '/qualyx',
    features: [
      { title: 'Test Intelligence', description: 'Smart test selection and prioritization' },
      { title: 'Quality Gates', description: 'Automated compliance checkpoints' },
      { title: 'Coverage Analytics', description: 'Multi-dimensional coverage insights' }
    ],
    metrics: [
      { label: 'Test Coverage', value: '96%' },
      { label: 'Bug Detection', value: '99.2%' },
      { label: 'Compliance Score', value: '100%' }
    ],
    useCases: ['Regulatory Compliance', 'Enterprise Testing', 'Security Validation']
  },
  {
    id: 'huminex',
    name: 'Huminex',
    tagline: 'Workforce Intelligence OS',
    description: 'Human-centric workforce management with AI-driven talent optimization.',
    iconType: 'users',
    color: 'hsl(340, 65%, 55%)',
    href: '/huminex',
    features: [
      { title: 'Talent Analytics', description: 'Skill mapping and gap analysis' },
      { title: 'Team Dynamics', description: 'Collaboration pattern insights' },
      { title: 'Growth Pathways', description: 'Personalized development plans' }
    ],
    metrics: [
      { label: 'Team Efficiency', value: '+34%' },
      { label: 'Retention Rate', value: '94%' },
      { label: 'Skill Coverage', value: '89%' }
    ],
    useCases: ['HR Transformation', 'Talent Management', 'Team Optimization']
  },
  {
    id: 'traceflow',
    name: 'TraceFlow',
    tagline: 'Supply Chain Intelligence',
    description: 'End-to-end traceability and supply chain visibility platform.',
    iconType: 'boxes',
    color: 'hsl(200, 70%, 50%)',
    href: '/traceflow',
    features: [
      { title: 'Full Traceability', description: 'Origin to consumer tracking' },
      { title: 'Smart Logistics', description: 'Route optimization and forecasting' },
      { title: 'Compliance Tracking', description: 'Regulatory documentation automation' }
    ],
    metrics: [
      { label: 'Visibility', value: '100%' },
      { label: 'Efficiency Gain', value: '+45%' },
      { label: 'Compliance', value: 'Certified' }
    ],
    useCases: ['Food Safety', 'Pharmaceutical', 'Manufacturing']
  },
  {
    id: 'zenith-core',
    name: 'Zenith Studio',
    tagline: 'Foundation Platform',
    description: 'Core infrastructure and platform services for enterprise deployments.',
    iconType: 'sparkles',
    color: 'hsl(280, 55%, 55%)',
    href: '/zenith-studio',
    features: [
      { title: 'Unified Platform', description: 'Single pane of glass for all services' },
      { title: 'Enterprise Security', description: 'SOC2 compliant infrastructure' },
      { title: 'Scalable Architecture', description: 'Auto-scaling microservices' }
    ],
    metrics: [
      { label: 'Uptime', value: '99.99%' },
      { label: 'Response Time', value: '<50ms' },
      { label: 'Scale', value: 'Infinite' }
    ],
    useCases: ['Enterprise Deployment', 'Platform Modernization', 'Cloud Migration']
  },
  {
    id: 'zenith-institute',
    name: 'Zenith Institute',
    tagline: 'Industry-Backed Education',
    description: 'Professional engineering education with real-world project experience.',
    iconType: 'graduation',
    color: 'hsl(145, 55%, 45%)',
    href: '/zenith-institute',
    features: [
      { title: 'Live Projects', description: 'Real enterprise project experience' },
      { title: 'Expert Mentorship', description: 'Industry professional guidance' },
      { title: 'Certification', description: 'Industry-recognized credentials' }
    ],
    metrics: [
      { label: 'Placement Rate', value: '95%' },
      { label: 'Avg Salary Hike', value: '+67%' },
      { label: 'Alumni Network', value: '10K+' }
    ],
    useCases: ['Career Transition', 'Skill Upgrade', 'Corporate Training']
  },
  {
    id: 'originx-labs',
    name: 'OriginX Labs',
    tagline: 'Research & Innovation',
    description: 'Experimental research lab pushing the boundaries of technology.',
    iconType: 'flask',
    color: 'hsl(25, 75%, 52%)',
    href: '/originx-labs',
    features: [
      { title: 'R&D Pipeline', description: 'Cutting-edge technology research' },
      { title: 'Innovation Sprints', description: 'Rapid prototyping and validation' },
      { title: 'Open Source', description: 'Community-driven development' }
    ],
    metrics: [
      { label: 'Patents Filed', value: '47' },
      { label: 'Research Papers', value: '120+' },
      { label: 'Open Source Projects', value: '28' }
    ],
    useCases: ['Technology Research', 'Innovation Labs', 'Future Products']
  }
];

const getIcon = (iconType: string) => {
  switch (iconType) {
    case 'brain': return Brain;
    case 'workflow': return Workflow;
    case 'shield': return Shield;
    case 'users': return Users;
    case 'boxes': return Boxes;
    case 'sparkles': return Sparkles;
    case 'graduation': return GraduationCap;
    case 'flask': return FlaskConical;
    default: return Brain;
  }
};

interface PlatformDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  platformId: string | null;
}

const PlatformDemoModal = ({ isOpen, onClose, platformId }: PlatformDemoModalProps) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [animatedMetrics, setAnimatedMetrics] = useState<number[]>([]);
  
  const platform = platformDemos.find(p => p.id === platformId);
  
  useEffect(() => {
    if (isOpen && platform) {
      setCurrentStep(0);
      // Animate metrics
      const values = platform.metrics.map(() => 0);
      setAnimatedMetrics(values);
      
      const interval = setInterval(() => {
        setAnimatedMetrics(prev => 
          prev.map((v) => Math.min(v + 5, 100))
        );
      }, 30);
      
      setTimeout(() => clearInterval(interval), 600);
    }
  }, [isOpen, platformId, platform]);

  if (!platform) return null;

  const Icon = getIcon(platform.iconType);
  const steps = ['Overview', 'Features', 'Metrics', 'Use Cases'];

  const handleVisitPage = () => {
    onClose();
    navigate(platform.href);
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-hidden p-0">
        {/* Header with gradient */}
        <div 
          className="p-6 pb-4"
          style={{ 
            background: `linear-gradient(135deg, ${platform.color}15 0%, transparent 60%)` 
          }}
        >
          <DialogHeader>
            <div className="flex items-center gap-4">
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${platform.color}20` }}
              >
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <DialogTitle className="text-xl font-display font-bold">
                  {platform.name}
                </DialogTitle>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {platform.tagline}
                </p>
              </div>
            </div>
          </DialogHeader>

          {/* Step indicators */}
          <div className="flex items-center gap-2 mt-6">
            {steps.map((step, index) => (
              <button
                key={step}
                onClick={() => setCurrentStep(index)}
                className={`flex-1 text-xs py-2 px-3 rounded-lg transition-all ${
                  currentStep === index 
                    ? 'bg-primary text-primary-foreground font-medium' 
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                }`}
              >
                {step}
              </button>
            ))}
          </div>
        </div>

        {/* Content area */}
        <div className="p-6 pt-4 space-y-6 overflow-y-auto max-h-[50vh]">
          {/* Step 0: Overview */}
          {currentStep === 0 && (
            <div className="space-y-4 animate-fade-in">
              <p className="text-muted-foreground leading-relaxed">
                {platform.description}
              </p>
              <div className="grid grid-cols-3 gap-4">
                {platform.metrics.map((metric) => (
                  <div 
                    key={metric.label}
                    className="p-4 rounded-xl bg-muted/30 border border-border/50 text-center"
                  >
                    <p 
                      className="text-2xl font-bold font-display text-primary"
                    >
                      {metric.value}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 1: Features */}
          {currentStep === 1 && (
            <div className="space-y-4 animate-fade-in">
              {platform.features.map((feature, i) => (
                <div 
                  key={feature.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted/20 border border-border/50"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 bg-primary/20"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Step 2: Metrics Dashboard */}
          {currentStep === 2 && (
            <div className="space-y-4 animate-fade-in">
              <p className="text-sm text-muted-foreground mb-4">
                Real-time performance metrics from live deployments
              </p>
              {platform.metrics.map((metric, i) => (
                <div key={metric.label} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{metric.label}</span>
                    <span className="font-semibold text-primary">
                      {metric.value}
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-muted/50 overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-700 bg-primary"
                      style={{ 
                        width: `${animatedMetrics[i] || 0}%`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Step 3: Use Cases */}
          {currentStep === 3 && (
            <div className="space-y-4 animate-fade-in">
              <p className="text-sm text-muted-foreground mb-4">
                Common use cases and industry applications
              </p>
              <div className="grid grid-cols-1 gap-3">
                {platform.useCases.map((useCase) => (
                  <div 
                    key={useCase}
                    className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-gradient-to-r from-muted/30 to-transparent"
                  >
                    <div 
                      className="w-2 h-2 rounded-full shrink-0 bg-primary"
                    />
                    <span className="font-medium">{useCase}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA */}
              <div className="pt-4">
                <Button 
                  onClick={handleVisitPage}
                  className="w-full"
                >
                  Explore Full {platform.name} Experience
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Footer navigation */}
        <div className="p-4 border-t border-border/50 flex justify-between items-center bg-muted/20">
          <Button
            variant="ghost"
            size="sm"
            onClick={prevStep}
            disabled={currentStep === 0}
            className="gap-1"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          <div className="flex gap-1.5">
            {steps.map((_, i) => (
              <div 
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === currentStep ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>

          {currentStep < steps.length - 1 ? (
            <Button
              variant="ghost"
              size="sm"
              onClick={nextStep}
              className="gap-1"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              size="sm"
              onClick={handleVisitPage}
              className="gap-1"
            >
              Visit Page
              <ArrowRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PlatformDemoModal;
