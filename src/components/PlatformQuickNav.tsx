import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Brain, 
  Settings, 
  Activity, 
  Shield, 
  Users, 
  Database, 
  Cloud, 
  Bot, 
  Palette, 
  GraduationCap, 
  FlaskConical,
  Zap,
  Clock,
  RefreshCw,
  Wallet,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const platforms = [
  { name: "Cognix", shortName: "COG", href: "/cognix", icon: Brain, color: "from-violet-500/20 to-purple-500/20" },
  { name: "OpZeniX", shortName: "OPZ", href: "/opzenix", icon: Settings, color: "from-blue-500/20 to-cyan-500/20" },
  { name: "TraceFlow", shortName: "TRF", href: "/traceflow", icon: Activity, color: "from-emerald-500/20 to-teal-500/20" },
  { name: "Qualyx", shortName: "QLX", href: "/qualyx", icon: Shield, color: "from-amber-500/20 to-orange-500/20" },
  { name: "Huminex", shortName: "HMX", href: "/huminex", icon: Users, color: "from-pink-500/20 to-rose-500/20" },
  { name: "Atlas", shortName: "ATL", href: "/atlas", icon: Database, color: "from-indigo-500/20 to-blue-500/20" },
  { name: "Cloud", shortName: "CLD", href: "/cropxon-cloud", icon: Cloud, color: "from-sky-500/20 to-blue-500/20" },
  { name: "Robotics", shortName: "RBT", href: "/robotics", icon: Bot, color: "from-slate-500/20 to-gray-500/20" },
  { name: "Proxinex", shortName: "PRX", href: "/proxinex", icon: Zap, color: "from-yellow-500/20 to-amber-500/20" },
  { name: "Chronyx", shortName: "CHX", href: "/chronyx", icon: Clock, color: "from-purple-500/20 to-fuchsia-500/20" },
  { name: "Convertix", shortName: "CVX", href: "/convertix", icon: RefreshCw, color: "from-green-500/20 to-emerald-500/20" },
  { name: "Finioraa", shortName: "FIN", href: "/finioraa", icon: Wallet, color: "from-teal-500/20 to-cyan-500/20" },
];

const PlatformQuickNav = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Check if on a product page
  const productPaths = platforms.map(p => p.href);
  const isProductPage = productPaths.some(path => location.pathname === path);

  useEffect(() => {
    if (!isProductPage) {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setHasScrolled(scrollY > 100);
      setIsVisible(scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isProductPage]);

  if (!isProductPage || !isVisible) return null;

  const currentPlatform = platforms.find(p => p.href === location.pathname);
  const currentIndex = platforms.findIndex(p => p.href === location.pathname);

  return (
    <div
      className={cn(
        "fixed left-0 top-1/2 -translate-y-1/2 z-50 transition-all duration-300",
        isCollapsed ? "translate-x-0" : "translate-x-0"
      )}
      style={{ animation: 'slideInLeft 0.3s ease-out' }}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={cn(
          "absolute -right-3 top-1/2 -translate-y-1/2 z-10",
          "w-6 h-12 bg-card/95 backdrop-blur-xl border border-border/50 rounded-r-lg",
          "flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors",
          "shadow-lg"
        )}
      >
        {isCollapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
      </button>

      {/* Nav Panel */}
      <div
        className={cn(
          "bg-card/95 backdrop-blur-xl border border-border/50 rounded-r-xl shadow-2xl",
          "transition-all duration-300 overflow-hidden",
          isCollapsed ? "w-0 opacity-0" : "w-14 opacity-100"
        )}
      >
        <div className="py-3 px-1.5 space-y-1">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            const isActive = location.pathname === platform.href;
            
            return (
              <Link
                key={platform.name}
                to={platform.href}
                className={cn(
                  "group relative flex items-center justify-center w-11 h-11 rounded-lg transition-all duration-200",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                )}
                title={platform.name}
              >
                <Icon className="w-4 h-4" />
                
                {/* Tooltip */}
                <div className="absolute left-full ml-3 px-2.5 py-1.5 bg-card border border-border/50 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                  <span className="text-xs font-medium text-foreground">{platform.name}</span>
                  {isActive && <span className="ml-1 text-[10px] text-primary">(Current)</span>}
                </div>

                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1 h-4 bg-primary rounded-l-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Quick navigation arrows */}
        <div className="border-t border-border/30 p-2 flex flex-col gap-1">
          <Link
            to={platforms[(currentIndex - 1 + platforms.length) % platforms.length].href}
            className="flex items-center justify-center w-full h-8 rounded-md bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            title="Previous Platform"
          >
            <ChevronLeft className="w-4 h-4" />
          </Link>
          <Link
            to={platforms[(currentIndex + 1) % platforms.length].href}
            className="flex items-center justify-center w-full h-8 rounded-md bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            title="Next Platform"
          >
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translate(-100%, -50%); }
          to { opacity: 1; transform: translate(0, -50%); }
        }
      `}</style>
    </div>
  );
};

export default PlatformQuickNav;
