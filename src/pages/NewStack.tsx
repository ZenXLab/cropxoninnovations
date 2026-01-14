import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import NewsTicker from "@/components/NewsTicker";
import InteractiveWorldMap from "@/components/InteractiveWorldMap";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import rssPipelineImage from "@/assets/rss-pipeline-flow.png";
import { 
  Globe, 
  MapPin, 
  Languages, 
  Shield, 
  Layers, 
  ChevronRight,
  Newspaper,
  Eye,
  CheckCircle2,
  Scale,
  Zap,
  Search,
  Radio,
  Database,
  Cpu,
  Map,
  TrendingUp,
  Filter,
  Wifi,
  ArrowRight,
  Users
} from "lucide-react";

const NewStack = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("world");

  const regions = [
    { id: "world", name: "World", icon: Globe, count: "195 Countries" },
    { id: "asia", name: "Asia", icon: MapPin, count: "48 Countries" },
    { id: "europe", name: "Europe", icon: MapPin, count: "44 Countries" },
    { id: "africa", name: "Africa", icon: MapPin, count: "54 Countries" },
    { id: "americas", name: "Americas", icon: MapPin, count: "35 Countries" },
    { id: "oceania", name: "Oceania", icon: MapPin, count: "14 Countries" },
  ];

  const drillDownLevels = [
    { level: "World", description: "Global news aggregation", icon: Globe },
    { level: "Continents", description: "Continental coverage", icon: Layers },
    { level: "Countries", description: "National news sources", icon: MapPin },
    { level: "States/Provinces", description: "Regional reporting", icon: MapPin },
    { level: "Districts", description: "Local journalism", icon: MapPin },
    { level: "Cities", description: "Hyperlocal updates", icon: Radio },
  ];

  const features = [
    {
      icon: Eye,
      title: "No Opinions",
      description: "Pure factual reporting without editorial bias or political slant.",
    },
    {
      icon: Shield,
      title: "No Paywalls",
      description: "Free access to verified information for everyone, everywhere.",
    },
    {
      icon: CheckCircle2,
      title: "Verified Facts",
      description: "Multi-source verification ensures accuracy and reliability.",
    },
    {
      icon: Scale,
      title: "Multiple Perspectives",
      description: "Same story from different sources for balanced understanding.",
    },
    {
      icon: Languages,
      title: "Multilingual",
      description: "Regional to global languages - news in your preferred language.",
    },
    {
      icon: Zap,
      title: "Real-time",
      description: "Live updates aggregated from thousands of trusted sources.",
    },
  ];

  const stats = [
    { value: "195+", label: "Countries Covered" },
    { value: "50K+", label: "News Sources" },
    { value: "100+", label: "Languages" },
    { value: "24/7", label: "Live Updates" },
  ];

  return (
    <>
      <Helmet>
        <title>NewStack - Open Source News Intelligence | CropXon</title>
        <meta name="description" content="An open, neutral intelligence layer built from public sources. No opinions. No paywalls. Just verified facts from multiple perspectives." />
        <meta property="og:title" content="NewStack - Open Source News Intelligence" />
        <meta property="og:description" content="Drill down from world to cities with regional to global language support." />
        <link rel="canonical" href="https://cropxon.com/newstack" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* News Ticker */}
        <div className="pt-16">
          <NewsTicker />
        </div>
        
        {/* Hero Section */}
        <section className="relative pt-12 pb-16 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div 
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse 80% 50% at 50% 0%, hsl(var(--primary) / 0.08) 0%, transparent 60%),
                  radial-gradient(ellipse 60% 40% at 100% 50%, hsl(var(--accent) / 0.05) 0%, transparent 50%)
                `,
              }}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 px-4 py-2 border-primary/30 bg-primary/5">
                <Newspaper className="w-3.5 h-3.5 mr-2" />
                Open Source Intelligence
              </Badge>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
                <span className="text-primary">New</span>Stack
              </h1>

              <p className="text-xl sm:text-2xl text-muted-foreground font-light mb-4">
                An open, neutral intelligence layer built from public sources.
              </p>

              <p className="text-lg text-foreground/80 font-medium mb-8">
                No opinions. No paywalls. Just verified facts from multiple perspectives.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                <Button size="lg" className="px-8" asChild>
                  <a href="https://www.newstack.live/" target="_blank" rel="noopener noreferrer">
                    <Globe className="w-4 h-4 mr-2" />
                    Explore NewStack
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  <Search className="w-4 h-4 mr-2" />
                  Search News
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-display text-2xl sm:text-3xl font-bold text-primary">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Drill-Down Hierarchy */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Drill Down to Any Level
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Navigate from global headlines to hyperlocal news in your city, all in your preferred language.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Connection line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden md:block" />

                <div className="space-y-4">
                  {drillDownLevels.map((level, index) => (
                    <div 
                      key={level.level}
                      className="relative flex items-center gap-6 group"
                    >
                      <div className="relative z-10 w-12 h-12 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                        <level.icon className="w-5 h-5 text-primary" />
                      </div>
                      
                      <div className="flex-1 p-4 rounded-xl bg-card border border-border/50 group-hover:border-primary/30 group-hover:bg-card/80 transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-foreground">{level.level}</h3>
                            <p className="text-sm text-muted-foreground">{level.description}</p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive World Map */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <Map className="w-3 h-3 mr-2" />
                Interactive Explorer
              </Badge>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Navigate the World's News
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Click through regions to drill down from global headlines to hyperlocal stories. 
                Explore news at any level with full multilingual support.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <InteractiveWorldMap />
            </div>
          </div>
        </section>

        {/* Region Selector */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Select Your Region
              </h2>
              <p className="text-muted-foreground">
                Start exploring from any continent
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id)}
                  className={`p-6 rounded-xl border text-center transition-all duration-300 ${
                    selectedRegion === region.id 
                      ? 'bg-primary/10 border-primary shadow-lg shadow-primary/20' 
                      : 'bg-card border-border/50 hover:border-primary/30 hover:bg-card/80'
                  }`}
                >
                  <region.icon className={`w-8 h-8 mx-auto mb-3 ${
                    selectedRegion === region.id ? 'text-primary' : 'text-muted-foreground'
                  }`} />
                  <h3 className="font-semibold text-foreground text-sm">{region.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{region.count}</p>
                </button>
              ))}
            </div>

            {/* Selected region preview */}
            <div className="mt-12 max-w-3xl mx-auto">
              <Card className="overflow-hidden border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Globe className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {regions.find(r => r.id === selectedRegion)?.name} News
                      </h3>
                      <p className="text-muted-foreground">
                        {regions.find(r => r.id === selectedRegion)?.count}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="p-4 rounded-lg bg-muted/50 text-center">
                      <TrendingUp className="w-5 h-5 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium text-foreground">Trending</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 text-center">
                      <Filter className="w-5 h-5 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium text-foreground">Categories</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 text-center">
                      <Languages className="w-5 h-5 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium text-foreground">Languages</p>
                    </div>
                  </div>

                  <Button className="w-full" asChild>
                    <a href="https://www.newstack.live/" target="_blank" rel="noopener noreferrer">
                      <Wifi className="w-4 h-4 mr-2" />
                      View Live Feed
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Core Principles
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Built on the foundation of truth, accessibility, and neutrality
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {features.map((feature) => (
                <Card key={feature.title} className="group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 border-border/50 hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Language Support */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge variant="outline" className="mb-4">
                    <Languages className="w-3 h-3 mr-2" />
                    Multilingual Support
                  </Badge>
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                    From Regional to Global Languages
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Access news in your native language while exploring global perspectives. 
                    NewStack supports 100+ languages from regional dialects to major world languages.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Auto-translation with context preservation",
                      "Original source language access",
                      "Cross-language fact verification",
                      "Regional dialect support",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {["English", "हिन्दी", "中文", "Español", "العربية", "Français", "Deutsch", "日本語", "한국어", "Русский", "Português", "বাংলা"].map((lang) => (
                    <div 
                      key={lang}
                      className="p-3 rounded-lg bg-card border border-border/50 text-center hover:border-primary/30 hover:bg-primary/5 transition-all cursor-pointer"
                    >
                      <span className="text-sm font-medium text-foreground">{lang}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RSS Processing Pipeline - Architecture */}
        <section className="py-16 bg-muted/30 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <Database className="w-3 h-3 mr-2" />
                Data Architecture
              </Badge>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                From Raw Feed to Refined Story
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our intelligent RSS processing pipeline transforms raw news feeds into verified, structured stories through 12 sophisticated stages.
              </p>
            </div>

            {/* Pipeline Image */}
            <div className="max-w-5xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                <img 
                  src={rssPipelineImage} 
                  alt="RSS Processing Pipeline - From Raw Feed to Refined Story" 
                  className="w-full h-auto relative z-10"
                />
              </div>

              {/* Pipeline Steps Summary */}
              <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: Radio, title: "Ingest", description: "RSS feeds from 50K+ sources" },
                  { icon: Cpu, title: "Process", description: "Extract, clean, validate content" },
                  { icon: Database, title: "Analyze", description: "Cluster, dedupe, score confidence" },
                  { icon: Globe, title: "Deliver", description: "Render structured stories" },
                ].map((step, idx) => (
                  <div 
                    key={step.title}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 group hover:border-primary/30 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground text-sm">{step.title}</p>
                      <p className="text-xs text-muted-foreground">{step.description}</p>
                    </div>
                    {idx < 3 && (
                      <ArrowRight className="w-4 h-4 text-muted-foreground/50 hidden lg:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Join the Open Information Movement
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Be part of a global community committed to accessible, verified, and unbiased news.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <a href="https://www.newstack.live/" target="_blank" rel="noopener noreferrer">
                    <Globe className="w-4 h-4 mr-2" />
                    Visit NewStack.live
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://github.com/cropxon" target="_blank" rel="noopener noreferrer">
                    Contribute on GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default NewStack;
