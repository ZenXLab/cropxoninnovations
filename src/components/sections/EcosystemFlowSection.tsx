import { useState, useEffect, useRef } from 'react';
import { Play, Pause, ChevronRight, Cpu, Settings, ShieldCheck, Users, Boxes, GraduationCap, FlaskConical, Building2 } from 'lucide-react';
import { useScrollReveal, getStaggerDelay } from '@/hooks/useScrollReveal';

interface PlatformFeature {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  description: string;
  features: string[];
  dataFlow: string[];
}

const platforms: PlatformFeature[] = [
  {
    id: 'cognix',
    name: 'Cognix',
    icon: Cpu,
    color: 'hsl(220, 70%, 55%)',
    description: 'Enterprise cognition and AI decision systems',
    features: ['Neural Processing', 'Predictive Analytics', 'Decision Automation', 'Knowledge Graphs'],
    dataFlow: ['Raw Data', 'Pattern Recognition', 'Insight Generation', 'Decision Output']
  },
  {
    id: 'opzenix',
    name: 'OpZeniX',
    icon: Settings,
    color: 'hsl(260, 60%, 58%)',
    description: 'Intelligent operations management platform',
    features: ['Workflow Automation', 'Resource Optimization', 'Process Mining', 'Operational Intelligence'],
    dataFlow: ['Process Input', 'Analysis Engine', 'Optimization Layer', 'Execution']
  },
  {
    id: 'qualyx',
    name: 'Qualyx',
    icon: ShieldCheck,
    color: 'hsl(175, 60%, 45%)',
    description: 'Quality assurance and compliance engine',
    features: ['Compliance Monitoring', 'Quality Gates', 'Audit Trails', 'Risk Assessment'],
    dataFlow: ['Standards Input', 'Validation Check', 'Compliance Score', 'Report Generation']
  },
  {
    id: 'huminex',
    name: 'Huminex',
    icon: Users,
    color: 'hsl(340, 65%, 55%)',
    description: 'Workforce intelligence and talent management',
    features: ['Talent Analytics', 'Performance Tracking', 'Skill Mapping', 'Workforce Planning'],
    dataFlow: ['HR Data', 'Behavioral Analysis', 'Insights', 'Action Plans']
  },
  {
    id: 'traceflow',
    name: 'TraceFlow',
    icon: Boxes,
    color: 'hsl(200, 70%, 50%)',
    description: 'End-to-end supply chain traceability',
    features: ['Chain Visibility', 'Origin Tracking', 'Logistics Intelligence', 'Provenance Verification'],
    dataFlow: ['Source Data', 'Chain Mapping', 'Track Points', 'Verification']
  },
  {
    id: 'zenith-core',
    name: 'Zenith Core',
    icon: Building2,
    color: 'hsl(280, 55%, 55%)',
    description: 'Core infrastructure and platform services',
    features: ['Cloud Infrastructure', 'API Gateway', 'Security Layer', 'Data Mesh'],
    dataFlow: ['Request', 'Authentication', 'Processing', 'Response']
  },
  {
    id: 'zenith-institute',
    name: 'Zenith Institute',
    icon: GraduationCap,
    color: 'hsl(145, 55%, 45%)',
    description: 'Industry-backed engineering education',
    features: ['Learning Paths', 'Certifications', 'Labs & Projects', 'Mentorship'],
    dataFlow: ['Curriculum', 'Learning', 'Assessment', 'Certification']
  },
  {
    id: 'originx-labs',
    name: 'OriginX Labs',
    icon: FlaskConical,
    color: 'hsl(25, 75%, 52%)',
    description: 'Experimental research and innovation lab',
    features: ['R&D Projects', 'Innovation Pipeline', 'Tech Incubation', 'Patent Development'],
    dataFlow: ['Research', 'Prototype', 'Testing', 'Innovation']
  }
];

const EcosystemFlowSection = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [flowStep, setFlowStep] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout>();
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.2 });

  // Auto-advance platform
  useEffect(() => {
    if (isAutoPlay && isVisible) {
      autoPlayRef.current = setInterval(() => {
        setSelectedPlatform(prev => (prev + 1) % platforms.length);
        setFlowStep(0);
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlay, isVisible]);

  // Animate flow steps
  useEffect(() => {
    if (!isVisible) return;
    const flowInterval = setInterval(() => {
      setFlowStep(prev => (prev + 1) % 4);
    }, 1200);
    return () => clearInterval(flowInterval);
  }, [selectedPlatform, isVisible]);

  const currentPlatform = platforms[selectedPlatform];
  const Icon = currentPlatform.icon;

  return (
    <section 
      ref={sectionRef}
      id="ecosystem-flow" 
      className="relative py-20 sm:py-28 bg-background overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 transition-colors duration-700"
          style={{
            background: `radial-gradient(ellipse 80% 50% at 50% 50%, ${currentPlatform.color.replace(')', ' / 0.06)')}, transparent 70%)`
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-display text-[10px] sm:text-[11px] font-medium text-muted-foreground tracking-[0.25em] uppercase mb-4">
            Live Ecosystem Flow
          </p>
          <h2 className="font-display font-bold text-foreground leading-tight" style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", letterSpacing: "-0.02em" }}>
            <span className="block">How Each Platform</span>
            <span className="block text-primary">Powers the Ecosystem</span>
          </h2>
        </div>

        {/* Platform Selector */}
        <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {platforms.map((platform, index) => {
            const PlatformIcon = platform.icon;
            const isActive = selectedPlatform === index;
            return (
              <button
                key={platform.id}
                onClick={() => {
                  setSelectedPlatform(index);
                  setFlowStep(0);
                  setIsAutoPlay(false);
                }}
                className={`group flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border transition-all duration-300 ${
                  isActive 
                    ? 'bg-card border-primary/40 shadow-lg' 
                    : 'bg-card/50 border-border/30 hover:border-border/60 hover:bg-card/80'
                }`}
                style={{
                  transitionDelay: getStaggerDelay(index, 50)
                }}
              >
                <div 
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-all ${
                    isActive ? 'scale-110' : 'group-hover:scale-105'
                  }`}
                  style={{ 
                    backgroundColor: isActive ? platform.color : `${platform.color.replace(')', ' / 0.15)')}`,
                    boxShadow: isActive ? `0 0 20px ${platform.color.replace(')', ' / 0.4)')}` : 'none'
                  }}
                >
                  <PlatformIcon className={`w-4 h-4 sm:w-4.5 sm:h-4.5 ${isActive ? 'text-white' : 'text-foreground'}`} />
                </div>
                <span className={`font-display text-xs sm:text-sm font-medium hidden sm:inline ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {platform.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Flow Visualization */}
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Left: Platform Info */}
          <div className="order-2 lg:order-1">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border/30 p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center"
                  style={{ 
                    backgroundColor: currentPlatform.color,
                    boxShadow: `0 8px 32px ${currentPlatform.color.replace(')', ' / 0.35)')}`
                  }}
                >
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                    {currentPlatform.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {currentPlatform.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {currentPlatform.features.map((feature, index) => (
                  <div 
                    key={feature}
                    className="flex items-center gap-2 px-3 py-2 bg-muted/30 rounded-lg border border-border/20 transition-all duration-500"
                    style={{
                      transitionDelay: `${index * 100}ms`,
                      transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                      opacity: isVisible ? 1 : 0
                    }}
                  >
                    <div 
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: currentPlatform.color }}
                    />
                    <span className="text-xs sm:text-sm text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Auto-play toggle */}
              <div className="flex items-center justify-between pt-4 border-t border-border/30">
                <span className="text-xs text-muted-foreground">Auto-play walkthrough</span>
                <button
                  onClick={() => setIsAutoPlay(prev => !prev)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${
                    isAutoPlay 
                      ? 'bg-primary/10 border-primary/30 text-primary' 
                      : 'bg-muted/30 border-border/30 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {isAutoPlay ? (
                    <>
                      <Pause className="w-3.5 h-3.5" />
                      <span className="text-xs font-medium">Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5" />
                      <span className="text-xs font-medium">Play</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right: Data Flow Animation */}
          <div className="order-1 lg:order-2">
            <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border/30 p-6 sm:p-8 min-h-[320px]">
              {/* Flow title */}
              <p className="text-[10px] font-medium text-muted-foreground tracking-[0.15em] uppercase mb-6">
                Data Flow Pipeline
              </p>

              {/* Flow steps */}
              <div className="flex flex-col gap-4">
                {currentPlatform.dataFlow.map((step, index) => (
                  <div 
                    key={step} 
                    className="flex items-center gap-4 group"
                  >
                    {/* Step indicator */}
                    <div 
                      className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                        flowStep >= index ? 'scale-100' : 'scale-90 opacity-50'
                      }`}
                      style={{
                        backgroundColor: flowStep >= index ? currentPlatform.color : 'transparent',
                        border: flowStep >= index ? 'none' : `1px solid ${currentPlatform.color.replace(')', ' / 0.3)')}`,
                        boxShadow: flowStep === index ? `0 0 30px ${currentPlatform.color.replace(')', ' / 0.5)')}` : 'none'
                      }}
                    >
                      <span className={`font-display text-sm font-bold transition-colors ${flowStep >= index ? 'text-white' : 'text-muted-foreground'}`}>
                        {index + 1}
                      </span>
                      
                      {/* Pulse animation for active step */}
                      {flowStep === index && (
                        <div 
                          className="absolute inset-0 rounded-xl animate-ping opacity-30"
                          style={{ backgroundColor: currentPlatform.color }}
                        />
                      )}
                    </div>

                    {/* Step content */}
                    <div className="flex-1">
                      <p className={`font-display text-sm sm:text-base font-semibold transition-colors ${flowStep >= index ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {step}
                      </p>
                      {flowStep === index && (
                        <div className="h-1 mt-2 rounded-full overflow-hidden bg-muted/50">
                          <div 
                            className="h-full rounded-full animate-flowProgress"
                            style={{ backgroundColor: currentPlatform.color }}
                          />
                        </div>
                      )}
                    </div>

                    {/* Arrow connector */}
                    {index < 3 && (
                      <ChevronRight 
                        className={`w-5 h-5 transition-all duration-500 ${
                          flowStep > index ? 'opacity-80' : 'opacity-30'
                        }`}
                        style={{ color: flowStep > index ? currentPlatform.color : undefined }}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Decorative particles */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 rounded-full animate-float"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 3) * 20}%`,
                      backgroundColor: currentPlatform.color,
                      opacity: 0.4,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${3 + i * 0.5}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes flowProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-flowProgress {
          animation: flowProgress 1.2s ease-out forwards;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default EcosystemFlowSection;
