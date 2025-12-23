import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { X, TrendingUp, BarChart3, Activity, Zap, Globe, ExternalLink, ChevronLeft, ChevronRight, Maximize2, Minimize2, Play, Pause, ArrowRight, CheckCircle2, Clock, AlertCircle, Download, Share2, Settings } from 'lucide-react';
import { PlatformData } from '@/components/sections/PlatformDashboard';

interface FullscreenDashboardModalProps {
  platform: PlatformData | null;
  isOpen: boolean;
  onClose: () => void;
}

const FullscreenDashboardModal = ({ platform, isOpen, onClose }: FullscreenDashboardModalProps) => {
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0]);
  const [chartProgress, setChartProgress] = useState(0);
  const [flowIndex, setFlowIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'metrics' | 'flow'>('overview');
  const [isLiveMode, setIsLiveMode] = useState(true);
  
  const chartData = [40, 55, 45, 60, 75, 65, 80, 85, 78, 90, 88, 95, 92, 98, 94, 97];
  
  useEffect(() => {
    if (!platform || !isOpen) return;
    
    setAnimatedValues([0, 0, 0]);
    setChartProgress(0);
    setFlowIndex(0);

    const duration = 1500;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);

      setAnimatedValues(platform.liveData.map(stat =>
        Math.round(stat.value * eased)
      ));
      setChartProgress(eased);

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [platform, isOpen]);

  // Animate flow steps
  useEffect(() => {
    if (!platform || !isOpen) return;
    
    const timer = setInterval(() => {
      setFlowIndex(prev => (prev + 1) % (platform.flowSteps.length + 1));
    }, 1500);
    return () => clearInterval(timer);
  }, [platform, isOpen]);

  if (!platform) return null;

  const Icon = platform.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] w-full max-h-[95vh] h-full p-0 gap-0 overflow-hidden bg-background/95 backdrop-blur-2xl border-border/50">
        <DialogTitle className="sr-only">{platform.name} Dashboard</DialogTitle>
        
        {/* Custom Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border/30 bg-card/50">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{
                backgroundColor: platform.color,
                boxShadow: `0 8px 32px ${platform.color.replace(')', ' / 0.4)')}`,
              }}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-foreground">{platform.name}</h2>
              <p className="text-sm text-muted-foreground">{platform.tagline}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Live indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-green-500 font-medium">LIVE DATA</span>
            </div>

            {/* Action buttons */}
            <button className="p-2 hover:bg-muted/50 rounded-lg transition-colors">
              <Download className="w-4 h-4 text-muted-foreground" />
            </button>
            <button className="p-2 hover:bg-muted/50 rounded-lg transition-colors">
              <Share2 className="w-4 h-4 text-muted-foreground" />
            </button>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-muted/50 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 px-6 py-3 border-b border-border/30 bg-muted/20">
          {['overview', 'metrics', 'flow'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as typeof activeTab)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                activeTab === tab 
                  ? 'bg-card text-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-card/50'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
          
          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={() => setIsLiveMode(!isLiveMode)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                isLiveMode 
                  ? 'bg-primary/10 text-primary border border-primary/30' 
                  : 'bg-muted/30 text-muted-foreground border border-border/30'
              }`}
            >
              {isLiveMode ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              {isLiveMode ? 'Pause' : 'Resume'}
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Left Column - Metrics */}
              <div className="lg:col-span-2 space-y-6">
                {/* Main Metrics Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {platform.metrics.map((metric, index) => (
                    <div
                      key={metric.label}
                      className="relative p-5 bg-card/80 rounded-2xl border border-border/40 overflow-hidden group hover:border-primary/40 transition-all duration-300"
                      style={{
                        animation: `fadeSlideUp 0.5s ease-out ${index * 80}ms forwards`,
                        opacity: 0,
                        transform: 'translateY(12px)',
                      }}
                    >
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{metric.label}</p>
                      <p className="font-display text-3xl font-bold text-foreground">{metric.value}</p>
                      {metric.change && (
                        <div className={`flex items-center gap-1 mt-2 text-sm ${
                          metric.trend === 'up' ? 'text-green-500' :
                          metric.trend === 'down' ? 'text-red-500' : 'text-muted-foreground'
                        }`}>
                          <TrendingUp className={`w-4 h-4 ${metric.trend === 'down' ? 'rotate-180' : ''}`} />
                          <span>{metric.change}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                    </div>
                  ))}
                </div>

                {/* Performance Chart */}
                <div className="p-6 bg-card/80 rounded-2xl border border-border/40">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Performance Analytics</h3>
                      <p className="text-sm text-muted-foreground">Real-time system performance monitoring</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: platform.color }} />
                        <span className="text-xs text-muted-foreground">Current Period</span>
                      </div>
                    </div>
                  </div>

                  {/* Animated Chart */}
                  <div className="relative h-48">
                    <div className="absolute inset-0 flex items-end gap-1">
                      {chartData.map((value, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-sm transition-all duration-500 relative group"
                          style={{
                            height: `${value * chartProgress}%`,
                            backgroundColor: platform.color,
                            opacity: 0.3 + (index / chartData.length) * 0.7,
                            transitionDelay: `${index * 30}ms`,
                          }}
                        >
                          {/* Tooltip on hover */}
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            <div className="px-2 py-1 bg-card border border-border rounded text-[10px] font-medium whitespace-nowrap">
                              {value}%
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Line overlay */}
                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                      <polyline
                        fill="none"
                        stroke={platform.color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points={chartData.map((value, index) =>
                          `${(index / (chartData.length - 1)) * 100}%,${100 - value * chartProgress}%`
                        ).join(' ')}
                        style={{
                          strokeDasharray: 1000,
                          strokeDashoffset: 1000 - (1000 * chartProgress),
                          transition: 'stroke-dashoffset 1.5s ease-out',
                        }}
                      />
                    </svg>
                  </div>
                </div>

                {/* Data Flow Pipeline */}
                <div className="p-6 bg-card/80 rounded-2xl border border-border/40">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Live Data Pipeline</h3>
                      <p className="text-sm text-muted-foreground">{platform.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    {platform.flowSteps.map((step, index) => {
                      const StepIcon = step.icon;
                      const isActive = index <= flowIndex;
                      const isCurrent = index === flowIndex;

                      return (
                        <div key={step.label} className="flex items-center flex-1">
                          <div className="flex flex-col items-center flex-1">
                            <div
                              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                                isCurrent ? 'scale-110' : isActive ? 'scale-100' : 'scale-95'
                              }`}
                              style={{
                                backgroundColor: isActive ? platform.color : 'hsl(var(--muted))',
                                boxShadow: isCurrent ? `0 8px 32px ${platform.color.replace(')', ' / 0.5)')}` : 'none',
                              }}
                            >
                              <StepIcon className={`w-6 h-6 transition-colors ${isActive ? 'text-white' : 'text-muted-foreground'}`} />
                            </div>
                            <p className={`text-sm mt-3 text-center font-medium transition-colors ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                              {step.label}
                            </p>
                          </div>
                          {index < platform.flowSteps.length - 1 && (
                            <div className="flex-shrink-0 w-16 h-1 bg-border/50 relative overflow-hidden rounded-full">
                              <div
                                className="absolute inset-y-0 left-0 rounded-full transition-all duration-500"
                                style={{
                                  width: index < flowIndex ? '100%' : '0%',
                                  backgroundColor: platform.color,
                                }}
                              />
                              {index === flowIndex - 1 && (
                                <div
                                  className="absolute w-3 h-3 rounded-full -top-1 animate-pulse"
                                  style={{
                                    backgroundColor: platform.color,
                                    right: 0,
                                    boxShadow: `0 0 12px ${platform.color}`,
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

              {/* Right Column */}
              <div className="space-y-6">
                {/* System Health */}
                <div className="p-6 bg-card/80 rounded-2xl border border-border/40">
                  <h3 className="text-lg font-semibold text-foreground mb-4">System Health</h3>
                  <div className="space-y-4">
                    {platform.liveData.map((stat, index) => (
                      <div key={stat.label}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">{stat.label}</span>
                          <span className="text-sm font-mono font-bold text-foreground">
                            {animatedValues[index]}{stat.unit}
                          </span>
                        </div>
                        <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: `${animatedValues[index]}%`,
                              backgroundColor: platform.color,
                              boxShadow: `0 0 12px ${platform.color.replace(')', ' / 0.5)')}`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Capabilities */}
                <div className="p-6 bg-card/80 rounded-2xl border border-border/40">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Active Capabilities</h3>
                  <div className="space-y-3">
                    {platform.capabilities.map((cap, index) => {
                      const CapIcon = cap.icon;
                      return (
                        <div
                          key={cap.label}
                          className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl border border-border/20 transition-all hover:border-primary/30"
                        >
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                            style={{ backgroundColor: `${platform.color.replace(')', ' / 0.15)')}` }}
                          >
                            <CapIcon className="w-5 h-5" style={{ color: platform.color }} />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-foreground">{cap.label}</p>
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <div className={`w-1.5 h-1.5 rounded-full ${
                                cap.status === 'active' ? 'bg-green-500' :
                                cap.status === 'streaming' ? 'bg-blue-500 animate-pulse' :
                                'bg-amber-500 animate-pulse'
                              }`} />
                              <span className="text-xs text-muted-foreground capitalize">{cap.status}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Who It's For */}
                <div className="p-6 bg-card/80 rounded-2xl border border-border/40">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Built For</h3>
                  <div className="flex flex-wrap gap-2">
                    {platform.whoFor.map((who) => (
                      <span
                        key={who}
                        className="px-3 py-1.5 text-xs font-medium rounded-full border"
                        style={{
                          backgroundColor: `${platform.color.replace(')', ' / 0.1)')}`,
                          borderColor: `${platform.color.replace(')', ' / 0.3)')}`,
                          color: platform.color,
                        }}
                      >
                        {who}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visit Platform */}
                <a
                  href={`https://${platform.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl border transition-all group"
                  style={{
                    backgroundColor: `${platform.color.replace(')', ' / 0.08)')}`,
                    borderColor: `${platform.color.replace(')', ' / 0.3)')}`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5" style={{ color: platform.color }} />
                    <div>
                      <p className="text-sm font-medium text-foreground">Visit Platform</p>
                      <p className="text-xs text-muted-foreground">{platform.domain}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" style={{ color: platform.color }} />
                </a>
              </div>
            </div>
          )}

          {activeTab === 'metrics' && (
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Detailed metrics view */}
              <div className="p-6 bg-card/80 rounded-2xl border border-border/40">
                <h3 className="text-lg font-semibold text-foreground mb-6">Detailed Metrics</h3>
                <div className="space-y-4">
                  {platform.metrics.map((metric, index) => (
                    <div
                      key={metric.label}
                      className="flex items-center justify-between p-4 bg-muted/30 rounded-xl"
                    >
                      <div>
                        <p className="text-sm font-medium text-foreground">{metric.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">Last updated: 2 min ago</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                        {metric.change && (
                          <p className={`text-xs ${
                            metric.trend === 'up' ? 'text-green-500' :
                            metric.trend === 'down' ? 'text-red-500' : 'text-muted-foreground'
                          }`}>
                            {metric.change}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-card/80 rounded-2xl border border-border/40">
                <h3 className="text-lg font-semibold text-foreground mb-6">Performance Over Time</h3>
                <div className="relative h-64 flex items-end gap-2">
                  {chartData.map((value, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t transition-all duration-500"
                      style={{
                        height: `${value * chartProgress}%`,
                        backgroundColor: platform.color,
                        opacity: 0.4 + (index / chartData.length) * 0.6,
                        transitionDelay: `${index * 30}ms`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'flow' && (
            <div className="max-w-4xl mx-auto">
              <div className="p-8 bg-card/80 rounded-2xl border border-border/40">
                <h3 className="text-xl font-semibold text-foreground mb-2">Data Flow Architecture</h3>
                <p className="text-muted-foreground mb-8">{platform.description}</p>

                <div className="space-y-8">
                  {platform.flowSteps.map((step, index) => {
                    const StepIcon = step.icon;
                    const isActive = index <= flowIndex;

                    return (
                      <div key={step.label} className="flex items-start gap-6">
                        <div
                          className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500`}
                          style={{
                            backgroundColor: isActive ? platform.color : 'hsl(var(--muted))',
                            boxShadow: isActive ? `0 8px 32px ${platform.color.replace(')', ' / 0.4)')}` : 'none',
                          }}
                        >
                          <StepIcon className={`w-8 h-8 ${isActive ? 'text-white' : 'text-muted-foreground'}`} />
                        </div>
                        <div className="flex-1 pt-2">
                          <h4 className="text-lg font-semibold text-foreground">{step.label}</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {index === 0 && 'Ingest and process incoming data streams'}
                            {index === 1 && 'Build relationships and correlations'}
                            {index === 2 && 'Apply intelligent analysis and reasoning'}
                            {index === 3 && 'Generate actionable insights and outputs'}
                          </p>
                          <div className="mt-3 h-1 bg-muted/50 rounded-full overflow-hidden w-full">
                            <div
                              className="h-full rounded-full transition-all duration-1000"
                              style={{
                                width: isActive ? '100%' : '0%',
                                backgroundColor: platform.color,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
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
      </DialogContent>
    </Dialog>
  );
};

export default FullscreenDashboardModal;
