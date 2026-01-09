import { useState, useEffect, useRef } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, Cpu, Settings, ShieldCheck, Users, Boxes, GraduationCap, FlaskConical, Building2, TrendingUp, BarChart3, PieChart, Activity, Zap, Database, Globe, Lock, ArrowRight, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface PlatformDashboard {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  tagline: string;
  metrics: { label: string; value: string; trend?: 'up' | 'down' | 'neutral'; change?: string }[];
  features: { icon: React.ElementType; label: string; status: 'active' | 'processing' | 'pending' }[];
  chartData: number[];
  liveStats: { label: string; value: number; max: number }[];
}

const platforms: PlatformDashboard[] = [
  {
    id: 'cognix',
    name: 'Cognix',
    icon: Cpu,
    color: 'hsl(220, 70%, 55%)',
    tagline: 'Enterprise AI & Cognition',
    metrics: [
      { label: 'Active Models', value: '24', trend: 'up', change: '+3' },
      { label: 'Predictions/hr', value: '1.2M', trend: 'up', change: '+18%' },
      { label: 'Accuracy', value: '99.7%', trend: 'neutral' },
      { label: 'Latency', value: '12ms', trend: 'down', change: '-5ms' },
    ],
    features: [
      { icon: Activity, label: 'Neural Processing', status: 'active' },
      { icon: Database, label: 'Knowledge Graph', status: 'active' },
      { icon: TrendingUp, label: 'Predictive Engine', status: 'processing' },
      { icon: Zap, label: 'Real-time Inference', status: 'active' },
    ],
    chartData: [40, 55, 45, 60, 75, 65, 80, 85, 78, 90, 88, 95],
    liveStats: [
      { label: 'CPU Utilization', value: 67, max: 100 },
      { label: 'Memory Usage', value: 82, max: 100 },
      { label: 'Model Performance', value: 94, max: 100 },
    ],
  },
  {
    id: 'opzenix',
    name: 'OpZeniX',
    icon: Settings,
    color: 'hsl(260, 60%, 58%)',
    tagline: 'Intelligent Operations',
    metrics: [
      { label: 'Active Workflows', value: '156', trend: 'up', change: '+12' },
      { label: 'Tasks Automated', value: '8.4K', trend: 'up', change: '+24%' },
      { label: 'Efficiency', value: '94.2%', trend: 'up', change: '+2.1%' },
      { label: 'SLA Compliance', value: '99.9%', trend: 'neutral' },
    ],
    features: [
      { icon: Settings, label: 'Process Automation', status: 'active' },
      { icon: BarChart3, label: 'Resource Planning', status: 'active' },
      { icon: Clock, label: 'Task Scheduling', status: 'processing' },
      { icon: Globe, label: 'Multi-region Ops', status: 'active' },
    ],
    chartData: [30, 42, 55, 48, 62, 58, 72, 68, 80, 75, 85, 92],
    liveStats: [
      { label: 'Active Processes', value: 89, max: 100 },
      { label: 'Queue Health', value: 95, max: 100 },
      { label: 'System Load', value: 54, max: 100 },
    ],
  },
  {
    id: 'qualyx',
    name: 'Qualyx',
    icon: ShieldCheck,
    color: 'hsl(175, 60%, 45%)',
    tagline: 'Quality & Compliance',
    metrics: [
      { label: 'Audits Passed', value: '847', trend: 'up', change: '+32' },
      { label: 'Compliance Score', value: '98.4%', trend: 'up', change: '+0.8%' },
      { label: 'Open Issues', value: '12', trend: 'down', change: '-8' },
      { label: 'Risk Level', value: 'Low', trend: 'neutral' },
    ],
    features: [
      { icon: ShieldCheck, label: 'Compliance Monitor', status: 'active' },
      { icon: AlertCircle, label: 'Risk Assessment', status: 'active' },
      { icon: CheckCircle2, label: 'Audit Trails', status: 'active' },
      { icon: Lock, label: 'Security Gates', status: 'processing' },
    ],
    chartData: [85, 82, 88, 90, 87, 92, 89, 94, 91, 96, 93, 98],
    liveStats: [
      { label: 'Compliance Rate', value: 98, max: 100 },
      { label: 'Security Score', value: 96, max: 100 },
      { label: 'Audit Coverage', value: 91, max: 100 },
    ],
  },
  {
    id: 'huminex',
    name: 'Huminex',
    icon: Users,
    color: 'hsl(340, 65%, 55%)',
    tagline: 'Workforce Intelligence',
    metrics: [
      { label: 'Active Users', value: '12.4K', trend: 'up', change: '+847' },
      { label: 'Engagement', value: '87.3%', trend: 'up', change: '+4.2%' },
      { label: 'Skill Match', value: '92.1%', trend: 'up', change: '+1.8%' },
      { label: 'Retention', value: '94.7%', trend: 'neutral' },
    ],
    features: [
      { icon: Users, label: 'Talent Analytics', status: 'active' },
      { icon: TrendingUp, label: 'Performance Track', status: 'active' },
      { icon: PieChart, label: 'Skill Mapping', status: 'processing' },
      { icon: Activity, label: 'Workforce Planning', status: 'active' },
    ],
    chartData: [45, 52, 48, 58, 62, 55, 68, 72, 65, 78, 82, 87],
    liveStats: [
      { label: 'Team Productivity', value: 86, max: 100 },
      { label: 'Skill Coverage', value: 78, max: 100 },
      { label: 'Goal Completion', value: 92, max: 100 },
    ],
  },
  {
    id: 'traceflow',
    name: 'TraceFlow',
    icon: Boxes,
    color: 'hsl(200, 70%, 50%)',
    tagline: 'Supply Chain Traceability',
    metrics: [
      { label: 'Active Chains', value: '2,847', trend: 'up', change: '+156' },
      { label: 'Items Tracked', value: '4.2M', trend: 'up', change: '+12%' },
      { label: 'Visibility', value: '99.2%', trend: 'up', change: '+0.4%' },
      { label: 'Avg Response', value: '1.8s', trend: 'down', change: '-0.3s' },
    ],
    features: [
      { icon: Boxes, label: 'Chain Visibility', status: 'active' },
      { icon: Globe, label: 'Origin Tracking', status: 'active' },
      { icon: Database, label: 'Provenance DB', status: 'active' },
      { icon: Activity, label: 'Live Monitoring', status: 'processing' },
    ],
    chartData: [55, 62, 58, 70, 75, 68, 82, 78, 88, 85, 92, 96],
    liveStats: [
      { label: 'Chain Coverage', value: 94, max: 100 },
      { label: 'Data Accuracy', value: 99, max: 100 },
      { label: 'Sync Status', value: 87, max: 100 },
    ],
  },
  {
    id: 'zenith-core',
    name: 'Zenith Core',
    icon: Building2,
    color: 'hsl(280, 55%, 55%)',
    tagline: 'Platform Infrastructure',
    metrics: [
      { label: 'Uptime', value: '99.99%', trend: 'neutral' },
      { label: 'API Calls/sec', value: '45K', trend: 'up', change: '+8K' },
      { label: 'Regions', value: '12', trend: 'up', change: '+2' },
      { label: 'Latency P99', value: '23ms', trend: 'down', change: '-4ms' },
    ],
    features: [
      { icon: Building2, label: 'Cloud Infra', status: 'active' },
      { icon: Lock, label: 'Security Layer', status: 'active' },
      { icon: Database, label: 'Data Mesh', status: 'active' },
      { icon: Globe, label: 'Global CDN', status: 'active' },
    ],
    chartData: [92, 94, 93, 95, 94, 96, 95, 97, 96, 98, 97, 99],
    liveStats: [
      { label: 'Service Health', value: 99, max: 100 },
      { label: 'Resource Usage', value: 62, max: 100 },
      { label: 'Network Perf', value: 97, max: 100 },
    ],
  },
  {
    id: 'stackcraft',
    name: 'StackCraft',
    icon: GraduationCap,
    color: 'hsl(145, 55%, 45%)',
    tagline: 'Engineering Knowledge Platform',
    metrics: [
      { label: 'Active Engineers', value: '8,420', trend: 'up', change: '+524' },
      { label: 'Playbooks', value: '156', trend: 'up', change: '+12' },
      { label: 'Completion', value: '78.4%', trend: 'up', change: '+3.2%' },
      { label: 'Skill Mastery', value: '94.2%', trend: 'up', change: '+1.8%' },
    ],
    features: [
      { icon: GraduationCap, label: 'Learning Paths', status: 'active' },
      { icon: CheckCircle2, label: 'Certifications', status: 'active' },
      { icon: Activity, label: 'Labs & Projects', status: 'processing' },
      { icon: Users, label: 'Mentorship', status: 'active' },
    ],
    chartData: [35, 42, 48, 55, 52, 62, 68, 72, 65, 78, 82, 84],
    liveStats: [
      { label: 'Engagement Rate', value: 82, max: 100 },
      { label: 'Skill Progress', value: 76, max: 100 },
      { label: 'Satisfaction', value: 94, max: 100 },
    ],
  },
  {
    id: 'originx-labs',
    name: 'OriginX Labs',
    icon: FlaskConical,
    color: 'hsl(25, 75%, 52%)',
    tagline: 'Research & Innovation',
    metrics: [
      { label: 'Active Projects', value: '34', trend: 'up', change: '+5' },
      { label: 'Patents Filed', value: '18', trend: 'up', change: '+3' },
      { label: 'Papers Published', value: '47', trend: 'up', change: '+8' },
      { label: 'Innovation Score', value: '9.2/10', trend: 'up', change: '+0.4' },
    ],
    features: [
      { icon: FlaskConical, label: 'R&D Pipeline', status: 'active' },
      { icon: Zap, label: 'Tech Incubation', status: 'processing' },
      { icon: TrendingUp, label: 'Innovation Track', status: 'active' },
      { icon: Database, label: 'Research DB', status: 'active' },
    ],
    chartData: [25, 32, 38, 45, 52, 48, 58, 62, 55, 68, 72, 78],
    liveStats: [
      { label: 'Project Progress', value: 68, max: 100 },
      { label: 'Resource Alloc', value: 84, max: 100 },
      { label: 'Impact Score', value: 91, max: 100 },
    ],
  }
];

const EcosystemFlowSection = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0]);
  const [chartProgress, setChartProgress] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout>();
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  const currentPlatform = platforms[selectedPlatform];
  const Icon = currentPlatform.icon;

  // Auto-advance platform
  useEffect(() => {
    if (isAutoPlay && isVisible) {
      autoPlayRef.current = setInterval(() => {
        setSelectedPlatform(prev => (prev + 1) % platforms.length);
      }, 6000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlay, isVisible]);

  // Animate stats when platform changes
  useEffect(() => {
    setAnimatedValues([0, 0, 0]);
    setChartProgress(0);
    
    const duration = 1500;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      
      setAnimatedValues(currentPlatform.liveStats.map(stat => 
        Math.round(stat.value * eased)
      ));
      setChartProgress(eased);
      
      if (step >= steps) clearInterval(timer);
    }, interval);
    
    return () => clearInterval(timer);
  }, [selectedPlatform, currentPlatform.liveStats]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setSelectedPlatform(prev => prev === 0 ? platforms.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setSelectedPlatform(prev => (prev + 1) % platforms.length);
  };

  return (
    <section 
      ref={sectionRef}
      id="ecosystem-preview" 
      className="relative py-20 sm:py-28 bg-background overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 transition-all duration-1000"
          style={{
            background: `radial-gradient(ellipse 100% 60% at 50% 100%, ${currentPlatform.color.replace(')', ' / 0.06)')}, transparent 70%)`
          }}
        />
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className={`text-center mb-10 sm:mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-display text-[10px] sm:text-[11px] font-medium text-muted-foreground tracking-[0.25em] uppercase mb-4">
            Live Platform Preview
          </p>
          <h2 className="font-display font-bold text-foreground leading-tight" style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", letterSpacing: "-0.02em" }}>
            <span className="block">See How Each Platform</span>
            <span className="block text-primary">Powers Your Enterprise</span>
          </h2>
        </div>

        {/* Platform Tabs */}
        <div className={`flex justify-center mb-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-1 p-1 bg-muted/30 rounded-full backdrop-blur-sm border border-border/30">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full hover:bg-card transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-muted-foreground" />
            </button>
            
            <div className="flex gap-1 px-2">
              {platforms.map((platform, index) => {
                const PlatformIcon = platform.icon;
                const isActive = selectedPlatform === index;
                return (
                  <button
                    key={platform.id}
                    onClick={() => {
                      setSelectedPlatform(index);
                      setIsAutoPlay(false);
                    }}
                    className={`relative p-2 sm:p-2.5 rounded-full transition-all duration-300 ${
                      isActive ? 'scale-110' : 'hover:bg-card/50'
                    }`}
                    style={{
                      backgroundColor: isActive ? platform.color : 'transparent',
                      boxShadow: isActive ? `0 4px 20px ${platform.color.replace(')', ' / 0.4)')}` : 'none'
                    }}
                  >
                    <PlatformIcon className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${isActive ? 'text-white' : 'text-muted-foreground'}`} />
                  </button>
                );
              })}
            </div>

            <button
              onClick={handleNext}
              className="p-2 rounded-full hover:bg-card transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative bg-card/80 backdrop-blur-xl rounded-3xl border border-border/50 overflow-hidden shadow-2xl">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border/30 bg-muted/20">
              <div className="flex items-center gap-4">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ 
                    backgroundColor: currentPlatform.color,
                    boxShadow: `0 4px 16px ${currentPlatform.color.replace(')', ' / 0.35)')}`
                  }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">{currentPlatform.name}</h3>
                  <p className="text-xs text-muted-foreground">{currentPlatform.tagline}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-muted-foreground hidden sm:inline">Live</span>
                </div>
                <button
                  onClick={() => setIsAutoPlay(prev => !prev)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs transition-all ${
                    isAutoPlay 
                      ? 'bg-primary/10 border-primary/30 text-primary' 
                      : 'bg-muted/30 border-border/30 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {isAutoPlay ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  <span className="hidden sm:inline">{isAutoPlay ? 'Pause' : 'Play'}</span>
                </button>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 sm:p-8">
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Left: Metrics Cards */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    {currentPlatform.metrics.map((metric, index) => (
                      <div 
                        key={metric.label}
                        className="relative p-4 bg-muted/30 rounded-xl border border-border/30 overflow-hidden group hover:border-primary/30 transition-all duration-300"
                        style={{ 
                          animationDelay: `${index * 100}ms`,
                          animation: 'fadeSlideUp 0.5s ease-out forwards',
                          opacity: 0,
                          transform: 'translateY(10px)'
                        }}
                      >
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">{metric.label}</p>
                        <p className="font-display text-xl sm:text-2xl font-bold text-foreground">{metric.value}</p>
                        {metric.change && (
                          <div className={`flex items-center gap-1 mt-1 text-[10px] ${
                            metric.trend === 'up' ? 'text-green-500' : 
                            metric.trend === 'down' ? 'text-red-500' : 'text-muted-foreground'
                          }`}>
                            <TrendingUp className={`w-3 h-3 ${metric.trend === 'down' ? 'rotate-180' : ''}`} />
                            <span>{metric.change}</span>
                          </div>
                        )}
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                      </div>
                    ))}
                  </div>

                  {/* Chart Area */}
                  <div className="p-5 bg-muted/20 rounded-xl border border-border/30">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-xs font-medium text-foreground">Performance Trend</p>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: currentPlatform.color }} />
                        <span className="text-[10px] text-muted-foreground">Last 12 periods</span>
                      </div>
                    </div>
                    
                    {/* Animated Chart */}
                    <div className="relative h-32 flex items-end gap-1.5">
                      {currentPlatform.chartData.map((value, index) => (
                        <div 
                          key={index}
                          className="flex-1 rounded-t-sm transition-all duration-500"
                          style={{
                            height: `${value * chartProgress}%`,
                            backgroundColor: currentPlatform.color,
                            opacity: 0.3 + (index / currentPlatform.chartData.length) * 0.7,
                            transitionDelay: `${index * 50}ms`
                          }}
                        />
                      ))}
                      {/* Animated line overlay */}
                      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                        <polyline
                          fill="none"
                          stroke={currentPlatform.color}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          points={currentPlatform.chartData.map((value, index) => 
                            `${(index / (currentPlatform.chartData.length - 1)) * 100}%,${100 - value * chartProgress}%`
                          ).join(' ')}
                          style={{
                            strokeDasharray: 1000,
                            strokeDashoffset: 1000 - (1000 * chartProgress),
                            transition: 'stroke-dashoffset 1.5s ease-out'
                          }}
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Feature Status */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {currentPlatform.features.map((feature, index) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div 
                          key={feature.label}
                          className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg border border-border/20"
                          style={{
                            animationDelay: `${300 + index * 100}ms`,
                            animation: 'fadeSlideUp 0.5s ease-out forwards',
                            opacity: 0,
                            transform: 'translateY(10px)'
                          }}
                        >
                          <div 
                            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                            style={{ backgroundColor: `${currentPlatform.color.replace(')', ' / 0.15)')}` }}
                          >
                            <FeatureIcon className="w-4 h-4" style={{ color: currentPlatform.color }} />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs font-medium text-foreground truncate">{feature.label}</p>
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <div className={`w-1.5 h-1.5 rounded-full ${
                                feature.status === 'active' ? 'bg-green-500' :
                                feature.status === 'processing' ? 'bg-amber-500 animate-pulse' :
                                'bg-muted-foreground'
                              }`} />
                              <span className="text-[9px] text-muted-foreground capitalize">{feature.status}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right: Live Stats */}
                <div className="space-y-5">
                  <div className="p-5 bg-muted/20 rounded-xl border border-border/30">
                    <p className="text-xs font-medium text-foreground mb-4">System Health</p>
                    
                    <div className="space-y-4">
                      {currentPlatform.liveStats.map((stat, index) => (
                        <div key={stat.label}>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xs text-muted-foreground">{stat.label}</span>
                            <span className="text-xs font-mono font-medium text-foreground">{animatedValues[index]}%</span>
                          </div>
                          <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                            <div 
                              className="h-full rounded-full transition-all duration-1000 ease-out"
                              style={{ 
                                width: `${animatedValues[index]}%`,
                                backgroundColor: currentPlatform.color,
                                boxShadow: `0 0 10px ${currentPlatform.color.replace(')', ' / 0.5)')}`
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="p-5 bg-muted/20 rounded-xl border border-border/30">
                    <p className="text-xs font-medium text-foreground mb-3">Quick Actions</p>
                    <div className="space-y-2">
                      {['View Dashboard', 'Run Analysis', 'Export Data'].map((action, index) => (
                        <button 
                          key={action}
                          className="w-full flex items-center justify-between px-3 py-2.5 bg-card/50 hover:bg-card rounded-lg border border-border/20 hover:border-primary/30 transition-all group"
                        >
                          <span className="text-xs text-foreground">{action}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div 
                    className="p-4 rounded-xl border"
                    style={{ 
                      backgroundColor: `${currentPlatform.color.replace(')', ' / 0.08)')}`,
                      borderColor: `${currentPlatform.color.replace(')', ' / 0.2)')}`
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10">
                        <CheckCircle2 className="w-5 h-5 text-white" style={{ color: currentPlatform.color }} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">All Systems Operational</p>
                        <p className="text-[10px] text-muted-foreground">Last checked 2 min ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="h-1 bg-muted/30">
              <div 
                className="h-full transition-all duration-100"
                style={{ 
                  backgroundColor: currentPlatform.color,
                  width: isAutoPlay ? '100%' : '0%',
                  animation: isAutoPlay ? 'progressBar 6s linear infinite' : 'none'
                }}
              />
            </div>
          </div>
        </div>

        {/* Platform name indicator */}
        <div className={`mt-6 text-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-sm text-muted-foreground">
            Viewing <span className="font-medium text-foreground">{currentPlatform.name}</span> • {selectedPlatform + 1} of {platforms.length}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes progressBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default EcosystemFlowSection;
