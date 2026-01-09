import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";
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
  FileText,
  BookOpen,
  Building2,
  Code,
  Briefcase,
  Mail,
  Search,
  ArrowRight
} from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const platforms = [
  { name: "Cognix", description: "AI-powered software cognition platform", href: "/cognix", icon: Brain, category: "AI Platform" },
  { name: "OpZeniX", description: "DevOps, DevSecOps, MLOps operations", href: "/opzenix", icon: Settings, category: "Operations" },
  { name: "TraceFlow", description: "Digital infrastructure intelligence", href: "/traceflow", icon: Activity, category: "Infrastructure" },
  { name: "Qualyx", description: "QA automation and quality intelligence", href: "/qualyx", icon: Shield, category: "Quality" },
  { name: "Huminex", description: "Modern workforce operating system", href: "/huminex", icon: Users, category: "Workforce" },
  { name: "Atlas", description: "Enterprise data infrastructure", href: "/atlas", icon: Database, category: "Data" },
  { name: "Cropxon Cloud", description: "Unified cloud platform", href: "/cropxon-cloud", icon: Cloud, category: "Cloud" },
  { name: "Robotics", description: "Autonomous systems and robotics", href: "/robotics", icon: Bot, category: "Robotics" },
  { name: "Zenith Studio", description: "Business and content creation", href: "/zenith-studio", icon: Palette, category: "Creation" },
  { name: "StackCraft", description: "Engineering knowledge platform", href: "/stackcraft", icon: GraduationCap, category: "Learning" },
  { name: "OriginX Labs", description: "Deep-tech research and innovation", href: "/originx-labs", icon: FlaskConical, category: "Research" },
  { name: "Proxinex", description: "Control Intelligence - AI routing", href: "/proxinex", icon: Zap, category: "AI Platform" },
  { name: "Chronyx", description: "Personal Quiet Space (PQS)", href: "/chronyx", icon: Clock, category: "Productivity" },
  { name: "Convertix", description: "Conversion Operating Studio (COS)", href: "/convertix", icon: RefreshCw, category: "Tools" },
  { name: "Finioraa", description: "Personal Finance Operating System", href: "/finioraa", icon: Wallet, category: "Finance" },
];

const pages = [
  { name: "Home", href: "/", icon: Building2 },
  { name: "Company Overview", href: "/company", icon: Building2 },
  { name: "How We Think", href: "/how-we-think", icon: Brain },
  { name: "Design Principles", href: "/design-principles", icon: Palette },
  { name: "Systems Philosophy", href: "/systems-not-products", icon: Code },
  { name: "Architecture", href: "/architecture", icon: Code },
  { name: "Platform Consoles", href: "/platforms", icon: Settings },
  { name: "Careers", href: "/careers", icon: Briefcase },
  { name: "Contact", href: "/contact", icon: Mail },
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "Search", href: "/search", icon: Search },
];

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Keyboard shortcut to open
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (href: string) => {
    setOpen(false);
    navigate(href);
  };

  const recentArticles = useMemo(() => blogPosts.slice(0, 5), []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search platforms, pages, articles..." />
      <CommandList className="max-h-[400px]">
        <CommandEmpty>No results found.</CommandEmpty>
        
        <CommandGroup heading="Platforms">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <CommandItem
                key={platform.href}
                value={`${platform.name} ${platform.description} ${platform.category}`}
                onSelect={() => handleSelect(platform.href)}
                className="flex items-center gap-3 py-3"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-foreground">{platform.name}</div>
                  <div className="text-xs text-muted-foreground">{platform.description}</div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                  {platform.category}
                </span>
              </CommandItem>
            );
          })}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Pages">
          {pages.map((page) => {
            const Icon = page.icon;
            return (
              <CommandItem
                key={page.href}
                value={page.name}
                onSelect={() => handleSelect(page.href)}
                className="flex items-center gap-3 py-2"
              >
                <Icon className="w-4 h-4 text-muted-foreground" />
                <span>{page.name}</span>
                <ArrowRight className="w-3 h-3 ml-auto text-muted-foreground/50" />
              </CommandItem>
            );
          })}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Recent Articles">
          {recentArticles.map((article) => (
            <CommandItem
              key={article.slug}
              value={`${article.title} ${article.category} ${article.tags?.join(" ")}`}
              onSelect={() => handleSelect(`/blog/${article.slug}`)}
              className="flex items-center gap-3 py-2"
            >
              <BookOpen className="w-4 h-4 text-muted-foreground" />
              <div className="flex-1">
                <div className="text-sm">{article.title}</div>
                <div className="text-[10px] text-muted-foreground">{article.category}</div>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
      
      <div className="border-t border-border/50 p-2 flex items-center justify-between text-[10px] text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono">↵</span>
          <span>to select</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono">esc</span>
          <span>to close</span>
        </div>
      </div>
    </CommandDialog>
  );
};

export default CommandPalette;
