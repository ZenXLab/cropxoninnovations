import { useState, useEffect, useRef, useMemo } from 'react';
import { Play, Pause, Cpu, Settings, ShieldCheck, Users, Boxes, GraduationCap, FlaskConical, Building2, TrendingUp, BarChart3, PieChart, Activity, Zap, Database, Globe, Lock, ArrowRight, CheckCircle2, Clock, AlertCircle, Layers, Network, GitBranch, Workflow, FileSearch, Brain, Shield, Server, Cloud, Code, Target, Rocket, BookOpen, Award, Microscope, Lightbulb, ExternalLink, Maximize2, RefreshCw, Wallet, FileText, DollarSign, LineChart, Calculator, CreditCard, PiggyBank } from 'lucide-react';

interface PlatformData {
  id: string;
  name: string;
  domain: string;
  icon: React.ElementType;
  color: string;
  tagline: string;
  description: string;
  whoFor: string[];
  metrics: { label: string; value: string; trend?: 'up' | 'down' | 'neutral'; change?: string }[];
  capabilities: { icon: React.ElementType; label: string; status: 'active' | 'processing' | 'streaming' }[];
  liveData: { label: string; value: number; max: number; unit?: string }[];
  flowSteps: { label: string; icon: React.ElementType; active: boolean }[];
}

// Live animated bar heights
const useLiveBarAnimation = (count: number) => {
  const [barHeights, setBarHeights] = useState<number[]>(() => 
    Array.from({ length: count }, () => 40 + Math.random() * 40)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setBarHeights(prev => prev.map((height, i) => {
        const base = 30 + Math.sin(Date.now() / 1000 + i * 0.5) * 20;
        const random = Math.random() * 25;
        return Math.min(95, Math.max(20, base + random));
      }));
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return barHeights;
};

const platformsData: PlatformData[] = [
  {
    id: 'cognix',
    name: 'Cognix',
    domain: 'getcognix.io',
    icon: Brain,
    color: 'hsl(220, 70%, 55%)',
    tagline: 'Software Cognition & Architecture Intelligence',
    description: 'AI-powered platform that understands existing codebases, architectures, and business workflows at a system level.',
    whoFor: ['CTOs', 'Architects', 'Senior Developers', 'Platform Teams'],
    metrics: [
      { label: 'Codebase Analyzed', value: '847K', trend: 'up', change: '+24K LOC' },
      { label: 'Architecture Maps', value: '156', trend: 'up', change: '+12' },
      { label: 'Risk Identified', value: '23', trend: 'down', change: '-8' },
      { label: 'Migration Score', value: '94.2%', trend: 'up', change: '+3.1%' },
    ],
    capabilities: [
      { icon: GitBranch, label: 'Codebase Analysis', status: 'active' },
      { icon: Network, label: 'Architecture Maps', status: 'streaming' },
      { icon: AlertCircle, label: 'Risk Detection', status: 'active' },
      { icon: Workflow, label: 'Migration Guide', status: 'processing' },
    ],
    liveData: [
      { label: 'System Understanding', value: 94, max: 100, unit: '%' },
      { label: 'Pattern Recognition', value: 87, max: 100, unit: '%' },
      { label: 'Architecture Health', value: 78, max: 100, unit: '%' },
    ],
    flowSteps: [
      { label: 'Code Ingest', icon: Code, active: true },
      { label: 'Graph Build', icon: Network, active: true },
      { label: 'Pattern Detect', icon: Brain, active: true },
      { label: 'Insight Generate', icon: Lightbulb, active: false },
    ],
  },
  {
    id: 'qualyx',
    name: 'Qualyx',
    domain: 'getqualyx.com',
    icon: ShieldCheck,
    color: 'hsl(175, 60%, 45%)',
    tagline: 'QA Automation & Quality Intelligence',
    description: 'Intelligent QA automation platform that transforms testing into a continuous quality feedback system.',
    whoFor: ['QA Teams', 'SDETs', 'Engineering Teams', 'DevOps Teams'],
    metrics: [
      { label: 'Tests Automated', value: '12.4K', trend: 'up', change: '+847' },
      { label: 'Regressions Caught', value: '234', trend: 'up', change: '+18' },
      { label: 'Flaky Tests Fixed', value: '89', trend: 'down', change: '-12' },
      { label: 'Quality Score', value: '98.7%', trend: 'up', change: '+1.2%' },
    ],
    capabilities: [
      { icon: Layers, label: 'Test Generation', status: 'streaming' },
      { icon: AlertCircle, label: 'Regression Detection', status: 'active' },
      { icon: TrendingUp, label: 'Pattern Learning', status: 'active' },
      { icon: Workflow, label: 'CI/CD Integration', status: 'active' },
    ],
    liveData: [
      { label: 'Test Coverage', value: 92, max: 100, unit: '%' },
      { label: 'Pipeline Health', value: 96, max: 100, unit: '%' },
      { label: 'Quality Index', value: 88, max: 100, unit: '%' },
    ],
    flowSteps: [
      { label: 'Test Suite', icon: Layers, active: true },
      { label: 'Run Pipeline', icon: Workflow, active: true },
      { label: 'Analyze Results', icon: BarChart3, active: true },
      { label: 'Quality Report', icon: FileSearch, active: false },
    ],
  },
  {
    id: 'huminex',
    name: 'Huminex',
    domain: 'gethuminex.com',
    icon: Users,
    color: 'hsl(340, 65%, 55%)',
    tagline: 'Workforce OS & Human Intelligence',
    description: 'Modern workforce operating system that manages people, roles, skills, and organizational intelligence.',
    whoFor: ['HR Teams', 'Founders', 'Operations Leaders', 'Enterprises'],
    metrics: [
      { label: 'Active Employees', value: '8,420', trend: 'up', change: '+156' },
      { label: 'Skills Mapped', value: '2,847', trend: 'up', change: '+234' },
      { label: 'Roles Optimized', value: '456', trend: 'up', change: '+28' },
      { label: 'Retention Rate', value: '94.8%', trend: 'up', change: '+2.1%' },
    ],
    capabilities: [
      { icon: Users, label: 'HRMS & Payroll', status: 'active' },
      { icon: Network, label: 'Org Structure', status: 'active' },
      { icon: Target, label: 'Skill Mapping', status: 'streaming' },
      { icon: BarChart3, label: 'Workforce Analytics', status: 'processing' },
    ],
    liveData: [
      { label: 'Team Productivity', value: 86, max: 100, unit: '%' },
      { label: 'Skill Coverage', value: 78, max: 100, unit: '%' },
      { label: 'Goal Completion', value: 92, max: 100, unit: '%' },
    ],
    flowSteps: [
      { label: 'People Data', icon: Users, active: true },
      { label: 'Org Map', icon: Network, active: true },
      { label: 'Skill Graph', icon: Brain, active: true },
      { label: 'Insights', icon: Lightbulb, active: false },
    ],
  },
  {
    id: 'opzenix',
    name: 'OpZeniX',
    domain: 'opzenix.com',
    icon: Settings,
    color: 'hsl(260, 60%, 58%)',
    tagline: 'DevOps · DevSecOps · MLOps · AIOps · LLMOps',
    description: 'Intelligent operations and execution platform for modern software and AI systems.',
    whoFor: ['Platform Engineers', 'DevOps Teams', 'ML Engineers', 'Enterprise IT'],
    metrics: [
      { label: 'Active Pipelines', value: '347', trend: 'up', change: '+28' },
      { label: 'Deployments/Day', value: '1,240', trend: 'up', change: '+18%' },
      { label: 'Infra Managed', value: '2.4K', trend: 'up', change: '+156' },
      { label: 'MTTR', value: '4.2m', trend: 'down', change: '-1.8m' },
    ],
    capabilities: [
      { icon: Workflow, label: 'CI/CD Orchestration', status: 'streaming' },
      { icon: Server, label: 'Infra Management', status: 'active' },
      { icon: Shield, label: 'Security Automation', status: 'active' },
      { icon: Brain, label: 'ML Lifecycle', status: 'processing' },
    ],
    liveData: [
      { label: 'Pipeline Health', value: 97, max: 100, unit: '%' },
      { label: 'Deployment Success', value: 99, max: 100, unit: '%' },
      { label: 'Security Score', value: 94, max: 100, unit: '%' },
    ],
    flowSteps: [
      { label: 'Code Commit', icon: Code, active: true },
      { label: 'Build & Test', icon: Layers, active: true },
      { label: 'Security Scan', icon: Shield, active: true },
      { label: 'Deploy', icon: Rocket, active: false },
    ],
  },
  {
    id: 'traceflow',
    name: 'TraceFlow',
    domain: 'traceflow.cropxon.com',
    icon: Boxes,
    color: 'hsl(200, 70%, 50%)',
    tagline: 'Digital Cognition & Infrastructure Intelligence',
    description: 'Unifies every digital signal into a single, trusted intelligence layer for mission-critical systems.',
    whoFor: ['Banks', 'Insurance', 'Telecom', 'Government', 'Critical Infrastructure'],
    metrics: [
      { label: 'Signals/sec', value: '4.2M', trend: 'up', change: '+12%' },
      { label: 'Data Correlated', value: '847TB', trend: 'up', change: '+24TB' },
      { label: 'Incidents Detected', value: '156', trend: 'down', change: '-23' },
      { label: 'Zero-Trust Score', value: '99.2%', trend: 'up', change: '+0.4%' },
    ],
    capabilities: [
      { icon: Activity, label: 'Signal Ingestion', status: 'streaming' },
      { icon: Network, label: 'Cross-Layer Correlation', status: 'active' },
      { icon: Lock, label: 'Zero-Trust Access', status: 'active' },
      { icon: Cloud, label: 'Hybrid Cloud', status: 'active' },
    ],
    liveData: [
      { label: 'Signal Coverage', value: 99, max: 100, unit: '%' },
      { label: 'Correlation Accuracy', value: 97, max: 100, unit: '%' },
      { label: 'System Health', value: 94, max: 100, unit: '%' },
    ],
    flowSteps: [
      { label: 'Signal Capture', icon: Activity, active: true },
      { label: 'Correlate', icon: Network, active: true },
      { label: 'Reason', icon: Brain, active: true },
      { label: 'Intelligence', icon: Lightbulb, active: false },
    ],
  },
  {
    id: 'zenith-core',
    name: 'Zenith Studio',
    domain: 'getzenith.io',
    icon: Building2,
    color: 'hsl(280, 55%, 55%)',
    tagline: 'Business & Content Creation Platform',
    description: 'Multi-tenant creation platform for building digital business experiences.',
    whoFor: ['Businesses', 'Creators', 'Product Teams', 'Technical & Non-Technical Users'],
    metrics: [
      { label: 'Sites Created', value: '12.4K', trend: 'up', change: '+847' },
      { label: 'Active Workflows', value: '3,240', trend: 'up', change: '+156' },
      { label: 'API Calls/hr', value: '8.4M', trend: 'up', change: '+18%' },
      { label: 'Uptime', value: '99.99%', trend: 'neutral' },
    ],
    capabilities: [
      { icon: Layers, label: 'CMS & LMS', status: 'active' },
      { icon: Code, label: 'Canvas Builders', status: 'active' },
      { icon: Workflow, label: 'Automation', status: 'streaming' },
      { icon: Globe, label: 'API Extensible', status: 'active' },
    ],
    liveData: [
      { label: 'Platform Load', value: 62, max: 100, unit: '%' },
      { label: 'API Health', value: 99, max: 100, unit: '%' },
      { label: 'User Satisfaction', value: 96, max: 100, unit: '%' },
    ],
    flowSteps: [
      { label: 'Design', icon: Layers, active: true },
      { label: 'Build', icon: Code, active: true },
      { label: 'Automate', icon: Workflow, active: true },
      { label: 'Publish', icon: Globe, active: false },
    ],
  },
  {
    id: 'zenith-institute',
    name: 'Zenith Institute',
    domain: 'zenithinstitute.in',
    icon: GraduationCap,
    color: 'hsl(145, 55%, 45%)',
    tagline: 'Learning, Enablement & Certification',
    description: 'Learning and development arm focused on upskilling professionals and organizations.',
    whoFor: ['Students', 'Professionals', 'Enterprises', 'Partners'],
    metrics: [
      { label: 'Active Learners', value: '24.8K', trend: 'up', change: '+1,240' },
      { label: 'Courses', value: '287', trend: 'up', change: '+18' },
      { label: 'Certifications', value: '8,420', trend: 'up', change: '+524' },
      { label: 'Placement Rate', value: '94.2%', trend: 'up', change: '+2.1%' },
    ],
    capabilities: [
      { icon: BookOpen, label: 'Learning Paths', status: 'active' },
      { icon: Award, label: 'Certifications', status: 'active' },
      { icon: Code, label: 'Labs & Projects', status: 'streaming' },
      { icon: Users, label: 'Mentorship', status: 'processing' },
    ],
    liveData: [
      { label: 'Engagement Rate', value: 82, max: 100, unit: '%' },
      { label: 'Course Completion', value: 76, max: 100, unit: '%' },
      { label: 'Satisfaction', value: 94, max: 100, unit: '%' },
    ],
    flowSteps: [
      { label: 'Enroll', icon: BookOpen, active: true },
      { label: 'Learn', icon: Brain, active: true },
      { label: 'Practice', icon: Code, active: true },
      { label: 'Certify', icon: Award, active: false },
    ],
  },
  {
    id: 'originx-labs',
    name: 'OriginX Labs',
    domain: 'originxlabs.com',
    icon: FlaskConical,
    color: 'hsl(25, 75%, 52%)',
    tagline: 'Research & Advanced Innovation Division',
    description: 'Deep-tech research and innovation lab for AI agents, system cognition, and future technology incubation.',
    whoFor: ['Researchers', 'Advanced Engineers', 'Partners', 'Future-Facing Enterprises'],
    metrics: [
      { label: 'Active Projects', value: '47', trend: 'up', change: '+8' },
      { label: 'Patents Filed', value: '23', trend: 'up', change: '+5' },
      { label: 'Papers Published', value: '68', trend: 'up', change: '+12' },
      { label: 'Innovation Index', value: '9.4/10', trend: 'up', change: '+0.3' },
    ],
    capabilities: [
      { icon: Brain, label: 'AI Agent Research', status: 'streaming' },
      { icon: Microscope, label: 'System Cognition', status: 'active' },
      { icon: FlaskConical, label: 'Experimentation', status: 'processing' },
      { icon: Rocket, label: 'Tech Incubation', status: 'active' },
    ],
    liveData: [
      { label: 'Research Progress', value: 68, max: 100, unit: '%' },
      { label: 'Resource Allocation', value: 84, max: 100, unit: '%' },
      { label: 'Impact Score', value: 91, max: 100, unit: '%' },
    ],
    flowSteps: [
      { label: 'Ideate', icon: Lightbulb, active: true },
      { label: 'Experiment', icon: FlaskConical, active: true },
      { label: 'Validate', icon: CheckCircle2, active: true },
      { label: 'Incubate', icon: Rocket, active: false },
    ],
  },
  {
    id: 'proxinex',
    name: 'Proxinex',
    domain: 'proxinex.com',
    icon: Zap,
    color: 'hsl(45, 85%, 50%)',
    tagline: 'Control Intelligence · AI Model Routing',
    description: 'Route queries to the best AI models. See exactly what you\'re paying. Verify every answer. All in one platform.',
    whoFor: ['AI Teams', 'Developers', 'Enterprises', 'Cost-Conscious Teams'],
    metrics: [
      { label: 'Models Routed', value: '47', trend: 'up', change: '+12' },
      { label: 'Cost Savings', value: '68%', trend: 'up', change: '+8%' },
      { label: 'Queries/Day', value: '2.4M', trend: 'up', change: '+18%' },
      { label: 'Accuracy', value: '99.2%', trend: 'up', change: '+0.3%' },
    ],
    capabilities: [
      { icon: Zap, label: 'AI Model Routing', status: 'streaming' },
      { icon: DollarSign, label: 'Cost Transparency', status: 'active' },
      { icon: CheckCircle2, label: 'Answer Verification', status: 'active' },
      { icon: Layers, label: 'Unified Platform', status: 'processing' },
    ],
    liveData: [
      { label: 'Routing Accuracy', value: 98, max: 100, unit: '%' },
      { label: 'Cost Efficiency', value: 92, max: 100, unit: '%' },
      { label: 'Model Coverage', value: 87, max: 100, unit: '%' },
    ],
    flowSteps: [
      { label: 'Query In', icon: Brain, active: true },
      { label: 'Route', icon: Zap, active: true },
      { label: 'Process', icon: Cpu, active: true },
      { label: 'Verify', icon: CheckCircle2, active: false },
    ],
  },
  {
    id: 'chronyx',
    name: 'Chronyx',
    domain: 'getchronyx.com',
    icon: Clock,
    color: 'hsl(190, 70%, 50%)',
    tagline: 'Personal Quiet Space (PQS)',
    description: 'All Personal details at one place including Todos, Finance, Study, Note Taking, Grocery Lists, Networth, Personal Memories.',
    whoFor: ['Individuals', 'Professionals', 'Students', 'Families'],
    metrics: [
      { label: 'Tasks Tracked', value: '12.4K', trend: 'up', change: '+847' },
      { label: 'Notes Created', value: '8,420', trend: 'up', change: '+524' },
      { label: 'Memories Saved', value: '3,240', trend: 'up', change: '+156' },
      { label: 'Life Score', value: '94.8%', trend: 'up', change: '+2.1%' },
    ],
    capabilities: [
      { icon: CheckCircle2, label: 'Todos & Notes', status: 'active' },
      { icon: DollarSign, label: 'Finance Tracking', status: 'streaming' },
      { icon: BookOpen, label: 'Study Management', status: 'active' },
      { icon: Clock, label: 'Personal Memories', status: 'processing' },
    ],
    liveData: [
      { label: 'Organization', value: 89, max: 100, unit: '%' },
      { label: 'Productivity', value: 82, max: 100, unit: '%' },
      { label: 'Memory Index', value: 94, max: 100, unit: '%' },
    ],
    flowSteps: [
      { label: 'Capture', icon: FileText, active: true },
      { label: 'Organize', icon: Layers, active: true },
      { label: 'Track', icon: Clock, active: true },
      { label: 'Remember', icon: Brain, active: false },
    ],
  },
  {
    id: 'convertix',
    name: 'Convertix',
    domain: 'getconvertix.com',
    icon: RefreshCw,
    color: 'hsl(320, 70%, 55%)',
    tagline: 'Conversion Operating Studio (COS)',
    description: 'All conversion tools for PDF/Documents, Image, Media, and Developer utilities in one unified platform.',
    whoFor: ['Developers', 'Designers', 'Content Creators', 'Businesses'],
    metrics: [
      { label: 'Files Converted', value: '847K', trend: 'up', change: '+24K' },
      { label: 'Formats Supported', value: '156', trend: 'up', change: '+12' },
      { label: 'Processing Speed', value: '2.4s', trend: 'down', change: '-0.8s' },
      { label: 'Success Rate', value: '99.7%', trend: 'up', change: '+0.2%' },
    ],
    capabilities: [
      { icon: FileText, label: 'PDF Conversion', status: 'streaming' },
      { icon: PieChart, label: 'Image Tools', status: 'active' },
      { icon: Activity, label: 'Media Processing', status: 'active' },
      { icon: Code, label: 'Developer Utils', status: 'processing' },
    ],
    liveData: [
      { label: 'Conversion Queue', value: 78, max: 100, unit: '%' },
      { label: 'Format Coverage', value: 96, max: 100, unit: '%' },
      { label: 'Quality Index', value: 99, max: 100, unit: '%' },
    ],
    flowSteps: [
      { label: 'Upload', icon: Layers, active: true },
      { label: 'Analyze', icon: FileSearch, active: true },
      { label: 'Convert', icon: RefreshCw, active: true },
      { label: 'Download', icon: ArrowRight, active: false },
    ],
  },
  {
    id: 'finioraa',
    name: 'Finioraa',
    domain: 'finioraa.com',
    icon: Wallet,
    color: 'hsl(130, 65%, 45%)',
    tagline: 'Personal Finance Operating System (PFOS)',
    description: 'Track, Understand, Optimize Finances, Insurances, Stocks, Tax, Loans, EMIs, AI Insights, Predictions, Investments.',
    whoFor: ['Individuals', 'Investors', 'Families', 'Financial Planners'],
    metrics: [
      { label: 'Assets Tracked', value: '$2.4M', trend: 'up', change: '+$156K' },
      { label: 'Investments', value: '347', trend: 'up', change: '+28' },
      { label: 'Tax Savings', value: '$24K', trend: 'up', change: '+$3.2K' },
      { label: 'Financial Score', value: '94.2%', trend: 'up', change: '+2.1%' },
    ],
    capabilities: [
      { icon: DollarSign, label: 'Finance Tracking', status: 'active' },
      { icon: LineChart, label: 'Investment Insights', status: 'streaming' },
      { icon: Calculator, label: 'Tax & Loans', status: 'active' },
      { icon: Brain, label: 'AI Predictions', status: 'processing' },
    ],
    liveData: [
      { label: 'Portfolio Health', value: 92, max: 100, unit: '%' },
      { label: 'Budget Adherence', value: 87, max: 100, unit: '%' },
      { label: 'Growth Trajectory', value: 94, max: 100, unit: '%' },
    ],
    flowSteps: [
      { label: 'Connect', icon: CreditCard, active: true },
      { label: 'Analyze', icon: PieChart, active: true },
      { label: 'Optimize', icon: TrendingUp, active: true },
      { label: 'Grow', icon: PiggyBank, active: false },
    ],
  },
];

interface PlatformDashboardProps {
  platformId: string | null;
  onOpenFullscreen?: (platform: PlatformData) => void;
  expanded?: boolean;
}

interface DataParticle {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  progress: number;
  speed: number;
  size: number;
}

const PlatformDashboard = ({ platformId, onOpenFullscreen, expanded = false }: PlatformDashboardProps) => {
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0]);
  const [chartProgress, setChartProgress] = useState(0);
  const [flowIndex, setFlowIndex] = useState(0);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; delay: number }[]>([]);
  const [dataParticles, setDataParticles] = useState<DataParticle[]>([]);
  const prevPlatformRef = useRef<string | null>(null);
  const particleAnimationRef = useRef<number>();
  
  // Live animated bar heights
  const liveBarHeights = useLiveBarAnimation(24);

  const currentPlatform = useMemo(() => 
    platformsData.find(p => p.id === platformId) || platformsData[0],
    [platformId]
  );

  const Icon = currentPlatform.icon;

  // Generate background particles
  useEffect(() => {
    const newParticles = Array.from({ length: expanded ? 15 : 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: i * 0.2,
    }));
    setParticles(newParticles);
  }, [platformId, expanded]);

  // Animated data flow particles between sections
  useEffect(() => {
    const createParticle = (): DataParticle => ({
      id: Math.random(),
      startX: 10 + Math.random() * 20,
      startY: 20 + Math.random() * 10,
      endX: 70 + Math.random() * 20,
      endY: 60 + Math.random() * 20,
      progress: 0,
      speed: 0.008 + Math.random() * 0.006,
      size: 2 + Math.random() * 3,
    });

    const initialParticles = Array.from({ length: expanded ? 8 : 4 }, createParticle);
    setDataParticles(initialParticles);

    const animate = () => {
      setDataParticles(prev => prev.map(p => {
        const newProgress = p.progress + p.speed;
        if (newProgress >= 1) {
          return createParticle();
        }
        return { ...p, progress: newProgress };
      }));
      particleAnimationRef.current = requestAnimationFrame(animate);
    };

    particleAnimationRef.current = requestAnimationFrame(animate);
    return () => {
      if (particleAnimationRef.current) {
        cancelAnimationFrame(particleAnimationRef.current);
      }
    };
  }, [platformId, expanded]);

  // Animate stats when platform changes
  useEffect(() => {
    if (platformId !== prevPlatformRef.current) {
      setAnimatedValues([0, 0, 0]);
      setChartProgress(0);
      setFlowIndex(0);
      prevPlatformRef.current = platformId;
    }

    const duration = 1200;
    const steps = 50;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);

      setAnimatedValues(currentPlatform.liveData.map(stat =>
        Math.round(stat.value * eased)
      ));
      setChartProgress(eased);

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [platformId, currentPlatform.liveData]);

  // Animate flow steps
  useEffect(() => {
    const timer = setInterval(() => {
      setFlowIndex(prev => (prev + 1) % (currentPlatform.flowSteps.length + 1));
    }, 1500);
    return () => clearInterval(timer);
  }, [currentPlatform.flowSteps.length]);

  return (
    <div className={`relative h-full flex flex-col bg-card/60 backdrop-blur-xl rounded-2xl border border-border/40 overflow-hidden ${expanded ? 'rounded-3xl' : ''}`}>
      {/* Animated data flow particles */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        {dataParticles.map(particle => {
          const x = particle.startX + (particle.endX - particle.startX) * particle.progress;
          const y = particle.startY + (particle.endY - particle.startY) * particle.progress;
          const opacity = Math.sin(particle.progress * Math.PI);
          return (
            <g key={particle.id}>
              {/* Trail */}
              <line
                x1={`${particle.startX + (particle.endX - particle.startX) * Math.max(0, particle.progress - 0.15)}%`}
                y1={`${particle.startY + (particle.endY - particle.startY) * Math.max(0, particle.progress - 0.15)}%`}
                x2={`${x}%`}
                y2={`${y}%`}
                stroke={currentPlatform.color}
                strokeWidth="1"
                opacity={opacity * 0.3}
              />
              {/* Particle */}
              <circle
                cx={`${x}%`}
                cy={`${y}%`}
                r={particle.size}
                fill={currentPlatform.color}
                opacity={opacity * 0.8}
                filter="url(#glow)"
              />
            </g>
          );
        })}
      </svg>

      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: expanded ? '3px' : '2px',
              height: expanded ? '3px' : '2px',
              backgroundColor: currentPlatform.color,
              opacity: 0.25,
              animationDelay: `${particle.delay}s`,
              animationDuration: '2s',
            }}
          />
        ))}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${currentPlatform.color.replace(')', ' / 0.4)')}, transparent 60%)`,
          }}
        />
      </div>

      {/* Dashboard Header */}
      <div className={`relative flex items-center justify-between border-b border-border/30 bg-muted/20 ${expanded ? 'px-6 py-4' : 'px-4 py-3'}`}>
        <div className="flex items-center gap-3">
          <div
            className={`rounded-xl flex items-center justify-center transition-all duration-500 ${expanded ? 'w-12 h-12' : 'w-9 h-9'}`}
            style={{
              backgroundColor: currentPlatform.color,
              boxShadow: `0 4px 16px ${currentPlatform.color.replace(')', ' / 0.4)')}`,
            }}
          >
            <Icon className={`text-white ${expanded ? 'w-6 h-6' : 'w-4 h-4'}`} />
          </div>
          <div>
            <h3 className={`font-display font-bold text-foreground ${expanded ? 'text-xl' : 'text-sm'}`}>{currentPlatform.name}</h3>
            <p className={`text-muted-foreground ${expanded ? 'text-sm max-w-none' : 'text-[10px] truncate max-w-[180px]'}`}>{currentPlatform.tagline}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className={`text-green-600 dark:text-green-400 font-medium ${expanded ? 'text-xs' : 'text-[9px]'}`}>LIVE</span>
          </div>
          {onOpenFullscreen && (
            <button
              onClick={() => onOpenFullscreen(currentPlatform)}
              className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <Maximize2 className={`text-muted-foreground ${expanded ? 'w-5 h-5' : 'w-3.5 h-3.5'}`} />
            </button>
          )}
        </div>
      </div>

      {/* Dashboard Content */}
      <div className={`relative flex-1 overflow-y-auto scrollbar-thin ${expanded ? 'p-6' : 'p-4'}`}>
        {expanded ? (
          /* Expanded Layout - Grid with Chart */
          <div className="grid grid-cols-3 gap-6 h-full">
            {/* Left Column - Metrics + Stats */}
            <div className="col-span-2 space-y-5">
              {/* Metrics Grid */}
              <div className="grid grid-cols-4 gap-3">
                {currentPlatform.metrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    className="relative p-4 bg-muted/30 rounded-xl border border-border/30 overflow-hidden group hover:border-primary/30 transition-all duration-300"
                    style={{
                      animation: `fadeSlideUp 0.4s ease-out ${index * 80}ms forwards`,
                      opacity: 0,
                      transform: 'translateY(8px)',
                    }}
                  >
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">{metric.label}</p>
                    <p className="font-display text-2xl font-bold text-foreground">{metric.value}</p>
                    {metric.change && (
                      <div className={`flex items-center gap-1 mt-1 text-xs ${
                        metric.trend === 'up' ? 'text-green-500' :
                        metric.trend === 'down' ? 'text-red-500' : 'text-muted-foreground'
                      }`}>
                        <TrendingUp className={`w-3 h-3 ${metric.trend === 'down' ? 'rotate-180' : ''}`} />
                        <span>{metric.change}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                  </div>
                ))}
              </div>

              {/* Live Data Visualization - Enhanced flowing animations */}
              <div className="p-5 bg-muted/20 rounded-xl border border-border/30 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-medium text-foreground">Real-time Analytics</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: currentPlatform.color }} />
                    <span className="text-xs text-muted-foreground">Live</span>
                  </div>
                </div>
                <div className="relative h-32 overflow-hidden rounded-lg bg-gradient-to-b from-muted/20 to-muted/40 border border-border/20">
                  {/* Grid overlay */}
                  <svg className="absolute inset-0 w-full h-full opacity-20">
                    {[...Array(5)].map((_, i) => (
                      <line key={`h-${i}`} x1="0" y1={`${20 * (i + 1)}%`} x2="100%" y2={`${20 * (i + 1)}%`} stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                    ))}
                    {[...Array(8)].map((_, i) => (
                      <line key={`v-${i}`} x1={`${12.5 * (i + 1)}%`} y1="0" x2={`${12.5 * (i + 1)}%`} y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                    ))}
                  </svg>

                  {/* Cognix - Neural Wave Pattern */}
                  {currentPlatform.id === 'cognix' && (
                    <svg className="absolute inset-0 w-full h-full">
                      <defs>
                        <linearGradient id="cognixGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor={currentPlatform.color} stopOpacity="0" />
                          <stop offset="50%" stopColor={currentPlatform.color} stopOpacity="0.8" />
                          <stop offset="100%" stopColor={currentPlatform.color} stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      {[...Array(3)].map((_, waveIdx) => (
                        <g key={waveIdx}>
                          <path
                            d={`M -100,${40 + waveIdx * 20} ${[...Array(30)].map((_, i) => `Q ${i * 20 + 10},${40 + waveIdx * 20 + Math.sin(i * 0.8 + waveIdx) * 25} ${i * 20 + 20},${40 + waveIdx * 20}`).join(' ')}`}
                            fill="none"
                            stroke={currentPlatform.color}
                            strokeWidth={2 - waveIdx * 0.3}
                            opacity={0.6 - waveIdx * 0.15}
                            style={{ 
                              animation: `flowRight ${6 + waveIdx}s linear infinite`,
                              animationDelay: `${waveIdx * 0.5}s`
                            }}
                          />
                        </g>
                      ))}
                      <style>{`
                        @keyframes flowRight { from { transform: translateX(-200px); } to { transform: translateX(100px); } }
                      `}</style>
                    </svg>
                  )}

                  {/* Qualyx - Enhanced Quality Area Chart with Grid */}
                  {currentPlatform.id === 'qualyx' && (
                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="qualyxGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor={currentPlatform.color} stopOpacity="0.6" />
                          <stop offset="100%" stopColor={currentPlatform.color} stopOpacity="0.05" />
                        </linearGradient>
                        <filter id="qualyxGlow">
                          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                        </filter>
                      </defs>
                      {/* Grid */}
                      {[...Array(4)].map((_, i) => (
                        <line key={`h${i}`} x1="0" y1={`${25 + i * 18}%`} x2="100%" y2={`${25 + i * 18}%`} stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.15" strokeDasharray="3 3" />
                      ))}
                      {/* Animated area */}
                      <path
                        d={`M 0,100 ${liveBarHeights.map((h, i) => `L ${(i / 23) * 100},${100 - h * 0.8}`).join(' ')} L 100,100 Z`}
                        fill="url(#qualyxGradient)"
                        style={{ animation: 'areaFloat 3s ease-in-out infinite' }}
                      />
                      {/* Main line with glow */}
                      <path
                        d={`M 0,${100 - liveBarHeights[0] * 0.8} ${liveBarHeights.map((h, i) => `L ${(i / 23) * 100},${100 - h * 0.8}`).join(' ')}`}
                        fill="none"
                        stroke={currentPlatform.color}
                        strokeWidth="3"
                        strokeLinecap="round"
                        filter="url(#qualyxGlow)"
                      />
                      {/* Animated data points */}
                      {liveBarHeights.filter((_, i) => i % 3 === 0).map((h, i) => (
                        <g key={i}>
                          <circle cx={`${(i * 3 / 23) * 100}%`} cy={`${100 - h * 0.8}%`} r="5" fill="hsl(var(--background))" stroke={currentPlatform.color} strokeWidth="2" />
                          <circle cx={`${(i * 3 / 23) * 100}%`} cy={`${100 - h * 0.8}%`} r="2.5" fill={currentPlatform.color} className="animate-pulse" style={{ animationDelay: `${i * 0.15}s` }} />
                        </g>
                      ))}
                      <style>{`@keyframes areaFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-1px); } }`}</style>
                    </svg>
                  )}

                  {/* Huminex - Enhanced Workforce Bubble Matrix */}
                  {currentPlatform.id === 'huminex' && (
                    <div className="absolute inset-0 overflow-hidden">
                      {liveBarHeights.slice(0, 20).map((h, i) => (
                        <div
                          key={i}
                          className="absolute rounded-full"
                          style={{
                            left: `${(i * 4.8) + ((h * 0.1) % 8)}%`,
                            bottom: `${12 + (h * 0.65)}%`,
                            width: `${10 + (h / 10)}px`,
                            height: `${10 + (h / 10)}px`,
                            background: `radial-gradient(circle at 30% 30%, ${currentPlatform.color}, ${currentPlatform.color.replace(')', ' / 0.4)')})`,
                            border: `1.5px solid ${currentPlatform.color}`,
                            opacity: 0.5 + (i % 5) * 0.1,
                            animation: `bubbleRise ${2.5 + (i % 4) * 0.4}s ease-in-out infinite, bubbleGlow ${2 + i * 0.15}s ease-in-out infinite`,
                            animationDelay: `${i * 0.12}s`,
                            boxShadow: `0 4px 16px ${currentPlatform.color.replace(')', ' / 0.3)')}`
                          }}
                        />
                      ))}
                      <style>{`
                        @keyframes bubbleRise { 
                          0%, 100% { transform: translateY(0) scale(1); opacity: 0.7; } 
                          50% { transform: translateY(-12px) scale(1.1); opacity: 1; } 
                        }
                        @keyframes bubbleGlow {
                          0%, 100% { filter: brightness(1); }
                          50% { filter: brightness(1.3); }
                        }
                      `}</style>
                    </div>
                  )}

                  {/* OpZeniX - Enhanced DevOps Pipeline with Progress */}
                  {currentPlatform.id === 'opzenix' && (
                    <div className="absolute inset-0 flex flex-col justify-center gap-3 px-4">
                      {[...Array(5)].map((_, rowIdx) => (
                        <div key={rowIdx} className="relative h-3 bg-muted/40 rounded-full overflow-hidden border border-border/20">
                          <div
                            className="absolute inset-y-0 left-0 rounded-full"
                            style={{
                              width: `${55 + liveBarHeights[rowIdx * 3] * 0.45}%`,
                              background: `linear-gradient(90deg, ${currentPlatform.color.replace(')', ' / 0.4)')}, ${currentPlatform.color}, ${currentPlatform.color.replace(')', ' / 0.6)')})`,
                              animation: `pipelinePulse ${2 + rowIdx * 0.4}s ease-in-out infinite`,
                              animationDelay: `${rowIdx * 0.25}s`,
                              boxShadow: `0 0 12px ${currentPlatform.color.replace(')', ' / 0.4)')}`
                            }}
                          />
                          {/* Moving indicator */}
                          <div
                            className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
                            style={{
                              left: `${50 + liveBarHeights[rowIdx * 3] * 0.45}%`,
                              backgroundColor: currentPlatform.color,
                              boxShadow: `0 0 10px ${currentPlatform.color}`,
                              animation: `indicatorPulse 0.8s ease-in-out infinite`,
                              animationDelay: `${rowIdx * 0.2}s`
                            }}
                          />
                          {/* Progress percentage */}
                          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[8px] font-mono text-muted-foreground/60">
                            {Math.round(55 + liveBarHeights[rowIdx * 3] * 0.45)}%
                          </span>
                        </div>
                      ))}
                      <style>{`
                        @keyframes pipelinePulse { 0%, 100% { opacity: 0.75; } 50% { opacity: 1; } }
                        @keyframes indicatorPulse { 0%, 100% { transform: translate(-50%, -50%) scale(1); } 50% { transform: translate(-50%, -50%) scale(1.3); } }
                      `}</style>
                    </div>
                  )}

                  {/* TraceFlow - Enhanced Network Intelligence Graph */}
                  {currentPlatform.id === 'traceflow' && (
                    <svg className="absolute inset-0 w-full h-full">
                      <defs>
                        <filter id="traceGlow">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                        </filter>
                        <radialGradient id="traceNodeGrad">
                          <stop offset="0%" stopColor={currentPlatform.color} stopOpacity="1" />
                          <stop offset="100%" stopColor={currentPlatform.color} stopOpacity="0.3" />
                        </radialGradient>
                      </defs>
                      {/* Animated mesh connections */}
                      {[...Array(8)].map((_, i) => {
                        const angle1 = (i / 8) * Math.PI * 2;
                        const angle2 = ((i + 2) / 8) * Math.PI * 2;
                        return (
                          <line
                            key={`mesh-${i}`}
                            x1={`${50 + Math.cos(angle1) * 36}%`}
                            y1={`${50 + Math.sin(angle1) * 36}%`}
                            x2={`${50 + Math.cos(angle2) * 36}%`}
                            y2={`${50 + Math.sin(angle2) * 36}%`}
                            stroke={currentPlatform.color}
                            strokeWidth="1"
                            opacity="0.25"
                            strokeDasharray="6 3"
                            style={{ animation: `dashFlow 2.5s linear infinite`, animationDelay: `${i * 0.2}s` }}
                          />
                        );
                      })}
                      {/* Hub connections with data packets */}
                      {[...Array(8)].map((_, i) => {
                        const angle = (i / 8) * Math.PI * 2;
                        return (
                          <g key={i}>
                            <line x1="50%" y1="50%" x2={`${50 + Math.cos(angle) * 36}%`} y2={`${50 + Math.sin(angle) * 36}%`} stroke={currentPlatform.color} strokeWidth="2" opacity="0.5" />
                            {/* Data packet animation */}
                            <circle r="3" fill={currentPlatform.color} filter="url(#traceGlow)">
                              <animateMotion
                                path={`M 50,50 L ${50 + Math.cos(angle) * 36},${50 + Math.sin(angle) * 36}`}
                                dur="2s"
                                repeatCount="indefinite"
                                begin={`${i * 0.25}s`}
                              />
                            </circle>
                            {/* Node */}
                            <circle cx={`${50 + Math.cos(angle) * 36}%`} cy={`${50 + Math.sin(angle) * 36}%`} r="8" fill="url(#traceNodeGrad)" filter="url(#traceGlow)" className="animate-pulse" style={{ animationDelay: `${i * 0.15}s` }} />
                          </g>
                        );
                      })}
                      <circle cx="50%" cy="50%" r="14" fill="url(#traceNodeGrad)" filter="url(#traceGlow)" className="animate-pulse" />
                      <style>{`@keyframes dashFlow { to { stroke-dashoffset: -18; } }`}</style>
                    </svg>
                  )}

                  {/* Zenith Core - Stacked Performance Bars */}
                  {currentPlatform.id === 'zenith-core' && (
                    <div className="absolute inset-0 flex items-end gap-1 px-3 pb-2">
                      {liveBarHeights.map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col-reverse gap-0.5" style={{ animation: `growUp 0.5s ease-out forwards`, animationDelay: `${i * 30}ms` }}>
                          {[...Array(4)].map((_, layer) => (
                            <div
                              key={layer}
                              className="w-full rounded-sm"
                              style={{
                                height: `${(h / 4.5) * chartProgress}%`,
                                background: `linear-gradient(180deg, ${currentPlatform.color}, ${currentPlatform.color.replace(')', ' / 0.6)')})`,
                                opacity: 0.4 + layer * 0.2,
                              }}
                            />
                          ))}
                        </div>
                      ))}
                      <style>{`@keyframes growUp { from { transform: scaleY(0); } to { transform: scaleY(1); } }`}</style>
                    </div>
                  )}

                  {/* Zenith Institute - Learning Progress */}
                  {currentPlatform.id === 'zenith-institute' && (
                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="instituteGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor={currentPlatform.color} stopOpacity="0.3" />
                          <stop offset="100%" stopColor={currentPlatform.color} stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      {/* Step chart area */}
                      <path
                        d={`M 0,100 ${liveBarHeights.slice(0, 12).map((h, i) => `L ${(i / 11) * 100},${100 - h * 0.8} L ${((i + 0.9) / 11) * 100},${100 - h * 0.8}`).join(' ')} L 100,100 Z`}
                        fill="url(#instituteGrad)"
                      />
                      {/* Step line */}
                      <path
                        d={`M 0,${100 - liveBarHeights[0] * 0.8} ${liveBarHeights.slice(0, 12).map((h, i) => `L ${(i / 11) * 100},${100 - h * 0.8} L ${((i + 0.9) / 11) * 100},${100 - h * 0.8}`).join(' ')}`}
                        fill="none"
                        stroke={currentPlatform.color}
                        strokeWidth="2.5"
                      />
                      {/* Milestone dots */}
                      {liveBarHeights.slice(0, 12).filter((_, i) => i % 3 === 0).map((h, i) => (
                        <g key={i}>
                          <circle cx={`${(i * 3 / 11) * 100}%`} cy={`${100 - h * 0.8}%`} r="6" fill="hsl(var(--background))" stroke={currentPlatform.color} strokeWidth="2" />
                          <circle cx={`${(i * 3 / 11) * 100}%`} cy={`${100 - h * 0.8}%`} r="3" fill={currentPlatform.color} className="animate-pulse" />
                        </g>
                      ))}
                    </svg>
                  )}

                  {/* OriginX Labs - Research Waveforms */}
                  {currentPlatform.id === 'originx-labs' && (
                    <svg className="absolute inset-0 w-full h-full">
                      <defs>
                        {[0, 1, 2].map(i => (
                          <linearGradient key={i} id={`labsGrad${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor={currentPlatform.color} stopOpacity="0" />
                            <stop offset="30%" stopColor={currentPlatform.color} stopOpacity={0.6 - i * 0.15} />
                            <stop offset="70%" stopColor={currentPlatform.color} stopOpacity={0.6 - i * 0.15} />
                            <stop offset="100%" stopColor={currentPlatform.color} stopOpacity="0" />
                          </linearGradient>
                        ))}
                      </defs>
                      {[...Array(3)].map((_, waveIdx) => (
                        <path
                          key={waveIdx}
                          d={`M 0,${50 + waveIdx * 15} ${[...Array(25)].map((_, i) => `Q ${i * 8 + 4},${50 + waveIdx * 15 + Math.sin(i * 0.6 + waveIdx * 2) * (15 - waveIdx * 3)} ${i * 8 + 8},${50 + waveIdx * 15}`).join(' ')}`}
                          fill="none"
                          stroke={`url(#labsGrad${waveIdx})`}
                          strokeWidth={2.5 - waveIdx * 0.5}
                          style={{ animation: `waveScroll ${5 + waveIdx}s linear infinite`, animationDelay: `${waveIdx * 0.5}s` }}
                        />
                      ))}
                      <style>{`@keyframes waveScroll { from { transform: translateX(-50px); } to { transform: translateX(50px); } }`}</style>
                    </svg>
                  )}
                </div>
              </div>
              {/* Flow Pipeline */}
              <div className="p-5 bg-muted/20 rounded-xl border border-border/30">
                <p className="text-sm font-medium text-foreground mb-4">Data Flow Pipeline</p>
                <div className="flex items-center justify-between gap-3">
                  {currentPlatform.flowSteps.map((step, index) => {
                    const StepIcon = step.icon;
                    const isActive = index <= flowIndex;
                    const isCurrent = index === flowIndex;
                    return (
                      <div key={step.label} className="flex items-center flex-1">
                        <div className="flex flex-col items-center flex-1">
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                              isCurrent ? 'scale-115' : isActive ? 'scale-100' : 'scale-95'
                            }`}
                            style={{
                              backgroundColor: isActive ? currentPlatform.color : 'hsl(var(--muted) / 0.5)',
                              boxShadow: isCurrent ? `0 6px 20px ${currentPlatform.color.replace(')', ' / 0.5)')}` : 'none',
                            }}
                          >
                            <StepIcon className={`w-5 h-5 transition-colors ${isActive ? 'text-white' : 'text-muted-foreground'}`} />
                          </div>
                          <p className={`text-xs mt-2 text-center font-medium transition-colors ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {step.label}
                          </p>
                        </div>
                        {index < currentPlatform.flowSteps.length - 1 && (
                          <div className="flex-shrink-0 w-12 h-1 bg-border/50 relative overflow-hidden rounded-full">
                            <div
                              className="absolute inset-y-0 left-0 rounded-full transition-all duration-500"
                              style={{
                                width: index < flowIndex ? '100%' : '0%',
                                backgroundColor: currentPlatform.color,
                              }}
                            />
                            {index === flowIndex - 1 && (
                              <div
                                className="absolute w-3 h-3 rounded-full -top-1 animate-pulse"
                                style={{
                                  backgroundColor: currentPlatform.color,
                                  right: 0,
                                  boxShadow: `0 0 12px ${currentPlatform.color}`,
                                }}
                              />
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column - Stats + Capabilities */}
            <div className="space-y-5">
              {/* System Stats */}
              <div className="p-5 bg-muted/20 rounded-xl border border-border/30">
                <p className="text-sm font-medium text-foreground mb-4">System Performance</p>
                <div className="space-y-4">
                  {currentPlatform.liveData.map((stat, index) => (
                    <div key={stat.label}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs text-muted-foreground">{stat.label}</span>
                        <span className="text-sm font-mono font-bold text-foreground">
                          {animatedValues[index]}{stat.unit}
                        </span>
                      </div>
                      <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700 ease-out"
                          style={{
                            width: `${animatedValues[index]}%`,
                            backgroundColor: currentPlatform.color,
                            boxShadow: `0 0 10px ${currentPlatform.color.replace(')', ' / 0.5)')}`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capabilities */}
              <div className="p-5 bg-muted/20 rounded-xl border border-border/30">
                <p className="text-sm font-medium text-foreground mb-4">Active Capabilities</p>
                <div className="space-y-2">
                  {currentPlatform.capabilities.map((cap, index) => {
                    const CapIcon = cap.icon;
                    return (
                      <div
                        key={cap.label}
                        className="flex items-center gap-3 p-3 bg-card/50 rounded-lg border border-border/20"
                        style={{
                          animation: `fadeSlideUp 0.4s ease-out ${200 + index * 80}ms forwards`,
                          opacity: 0,
                          transform: 'translateY(8px)',
                        }}
                      >
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                          style={{ backgroundColor: `${currentPlatform.color.replace(')', ' / 0.15)')}` }}
                        >
                          <CapIcon className="w-4 h-4" style={{ color: currentPlatform.color }} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-medium text-foreground">{cap.label}</p>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <div className={`w-1.5 h-1.5 rounded-full ${
                              cap.status === 'active' ? 'bg-green-500' :
                              cap.status === 'streaming' ? 'bg-blue-500 animate-pulse' :
                              'bg-amber-500 animate-pulse'
                            }`} />
                            <span className="text-[10px] text-muted-foreground capitalize">{cap.status}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Domain Link */}
              <a
                href={`https://${currentPlatform.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-muted/30 rounded-xl border border-border/30 hover:border-primary/40 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-sm text-foreground">{currentPlatform.domain}</span>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>
        ) : (
          /* Compact Layout */
          <div className="space-y-4">
            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-2">
              {currentPlatform.metrics.slice(0, 4).map((metric, index) => (
                <div
                  key={metric.label}
                  className="relative p-3 bg-muted/30 rounded-xl border border-border/30 overflow-hidden group hover:border-primary/30 transition-all duration-300"
                  style={{
                    animation: `fadeSlideUp 0.4s ease-out ${index * 80}ms forwards`,
                    opacity: 0,
                    transform: 'translateY(8px)',
                  }}
                >
                  <p className="text-[9px] text-muted-foreground uppercase tracking-wide mb-0.5">{metric.label}</p>
                  <p className="font-display text-lg font-bold text-foreground">{metric.value}</p>
                  {metric.change && (
                    <div className={`flex items-center gap-0.5 mt-0.5 text-[9px] ${
                      metric.trend === 'up' ? 'text-green-500' :
                      metric.trend === 'down' ? 'text-red-500' : 'text-muted-foreground'
                    }`}>
                      <TrendingUp className={`w-2.5 h-2.5 ${metric.trend === 'down' ? 'rotate-180' : ''}`} />
                      <span>{metric.change}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                </div>
              ))}
            </div>

            {/* Live Data Flow */}
            <div className="p-3 bg-muted/20 rounded-xl border border-border/30">
              <p className="text-[10px] font-medium text-foreground mb-3">Data Flow Pipeline</p>
              <div className="flex items-center justify-between gap-1">
                {currentPlatform.flowSteps.map((step, index) => {
                  const StepIcon = step.icon;
                  const isActive = index <= flowIndex;
                  return (
                    <div key={step.label} className="flex items-center flex-1">
                      <div className="flex flex-col items-center flex-1">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-500 ${
                            isActive ? 'scale-110' : 'scale-100'
                          }`}
                          style={{
                            backgroundColor: isActive ? currentPlatform.color : 'hsl(var(--muted) / 0.5)',
                            boxShadow: isActive ? `0 4px 12px ${currentPlatform.color.replace(')', ' / 0.4)')}` : 'none',
                          }}
                        >
                          <StepIcon className={`w-3.5 h-3.5 transition-colors ${isActive ? 'text-white' : 'text-muted-foreground'}`} />
                        </div>
                        <p className={`text-[8px] mt-1 text-center transition-colors ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {step.label}
                        </p>
                      </div>
                      {index < currentPlatform.flowSteps.length - 1 && (
                        <div className="flex-shrink-0 w-6 h-0.5 bg-border/50 relative overflow-hidden">
                          <div
                            className="absolute inset-y-0 left-0 transition-all duration-500"
                            style={{
                              width: index < flowIndex ? '100%' : '0%',
                              backgroundColor: currentPlatform.color,
                            }}
                          />
                          {index === flowIndex - 1 && (
                            <div
                              className="absolute w-2 h-2 rounded-full -top-0.5 animate-pulse"
                              style={{
                                backgroundColor: currentPlatform.color,
                                right: 0,
                                boxShadow: `0 0 8px ${currentPlatform.color}`,
                              }}
                            />
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* System Stats */}
            <div className="p-3 bg-muted/20 rounded-xl border border-border/30">
              <p className="text-[10px] font-medium text-foreground mb-3">System Performance</p>
              <div className="space-y-3">
                {currentPlatform.liveData.map((stat, index) => (
                  <div key={stat.label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] text-muted-foreground">{stat.label}</span>
                      <span className="text-[10px] font-mono font-medium text-foreground">
                        {animatedValues[index]}{stat.unit}
                      </span>
                    </div>
                    <div className="h-1.5 bg-muted/50 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700 ease-out"
                        style={{
                          width: `${animatedValues[index]}%`,
                          backgroundColor: currentPlatform.color,
                          boxShadow: `0 0 8px ${currentPlatform.color.replace(')', ' / 0.5)')}`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Capabilities */}
            <div className="grid grid-cols-2 gap-2">
              {currentPlatform.capabilities.map((cap, index) => {
                const CapIcon = cap.icon;
                return (
                  <div
                    key={cap.label}
                    className="flex items-center gap-2 p-2.5 bg-muted/20 rounded-lg border border-border/20"
                    style={{
                      animation: `fadeSlideUp 0.4s ease-out ${200 + index * 80}ms forwards`,
                      opacity: 0,
                      transform: 'translateY(8px)',
                    }}
                  >
                    <div
                      className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${currentPlatform.color.replace(')', ' / 0.15)')}` }}
                    >
                      <CapIcon className="w-3 h-3" style={{ color: currentPlatform.color }} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[9px] font-medium text-foreground truncate">{cap.label}</p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <div className={`w-1 h-1 rounded-full ${
                          cap.status === 'active' ? 'bg-green-500' :
                          cap.status === 'streaming' ? 'bg-blue-500 animate-pulse' :
                          'bg-amber-500 animate-pulse'
                        }`} />
                        <span className="text-[8px] text-muted-foreground capitalize">{cap.status}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Domain Link */}
            <a
              href={`https://${currentPlatform.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-muted/30 rounded-xl border border-border/30 hover:border-primary/40 transition-all group"
            >
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-xs text-foreground">{currentPlatform.domain}</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export { PlatformDashboard, platformsData };
export type { PlatformData };
