import { useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  MapPin,
  ChevronRight,
  ChevronLeft,
  Languages,
  TrendingUp,
  Newspaper,
  ExternalLink,
} from "lucide-react";

interface Region {
  id: string;
  name: string;
  countries?: number;
  sources?: number;
  children?: Region[];
  languages?: string[];
  trending?: string[];
}

const worldData: Region = {
  id: "world",
  name: "World",
  countries: 195,
  sources: 50000,
  languages: ["English", "中文", "हिन्दी", "Español", "العربية"],
  trending: ["Global Markets", "Climate Action", "Tech Innovation"],
  children: [
    {
      id: "asia",
      name: "Asia",
      countries: 48,
      sources: 15000,
      languages: ["中文", "हिन्दी", "日本語", "한국어", "বাংলা"],
      trending: ["Tech Boom", "Regional Trade", "Climate Policy"],
      children: [
        {
          id: "india",
          name: "India",
          countries: 1,
          sources: 3000,
          languages: ["हिन्दी", "English", "தமிழ்", "తెలుగు", "मराठी"],
          trending: ["Economic Growth", "Tech Hub", "Elections"],
          children: [
            {
              id: "maharashtra",
              name: "Maharashtra",
              sources: 500,
              languages: ["मराठी", "हिन्दी", "English"],
              trending: ["Mumbai Finance", "IT Sector", "Agriculture"],
              children: [
                {
                  id: "mumbai",
                  name: "Mumbai",
                  sources: 200,
                  languages: ["मराठी", "हिन्दी", "English"],
                  trending: ["Stock Market", "Bollywood", "Infrastructure"],
                },
                {
                  id: "pune",
                  name: "Pune",
                  sources: 100,
                  languages: ["मराठी", "English"],
                  trending: ["IT Parks", "Education", "Real Estate"],
                },
              ],
            },
            {
              id: "karnataka",
              name: "Karnataka",
              sources: 400,
              languages: ["ಕನ್ನಡ", "English", "हिन्दी"],
              trending: ["Bangalore Tech", "Startups", "Tourism"],
              children: [
                {
                  id: "bangalore",
                  name: "Bangalore",
                  sources: 180,
                  languages: ["ಕನ್ನಡ", "English"],
                  trending: ["Tech Startups", "AI Innovation", "Traffic"],
                },
              ],
            },
          ],
        },
        {
          id: "china",
          name: "China",
          countries: 1,
          sources: 4000,
          languages: ["中文", "粤语", "English"],
          trending: ["Economy", "Technology", "Trade"],
        },
        {
          id: "japan",
          name: "Japan",
          countries: 1,
          sources: 2500,
          languages: ["日本語", "English"],
          trending: ["Innovation", "Culture", "Economy"],
        },
      ],
    },
    {
      id: "europe",
      name: "Europe",
      countries: 44,
      sources: 12000,
      languages: ["English", "Deutsch", "Français", "Español", "Italiano"],
      trending: ["EU Policy", "Energy Crisis", "Tech Regulation"],
      children: [
        {
          id: "germany",
          name: "Germany",
          countries: 1,
          sources: 2000,
          languages: ["Deutsch", "English"],
          trending: ["Industry 4.0", "Green Energy", "EU Leadership"],
        },
        {
          id: "france",
          name: "France",
          countries: 1,
          sources: 1800,
          languages: ["Français", "English"],
          trending: ["Culture", "Politics", "Business"],
        },
        {
          id: "uk",
          name: "United Kingdom",
          countries: 1,
          sources: 2500,
          languages: ["English"],
          trending: ["Brexit Impact", "Finance", "Healthcare"],
        },
      ],
    },
    {
      id: "americas",
      name: "Americas",
      countries: 35,
      sources: 14000,
      languages: ["English", "Español", "Português", "Français"],
      trending: ["Elections", "Economy", "Tech Giants"],
      children: [
        {
          id: "usa",
          name: "United States",
          countries: 1,
          sources: 8000,
          languages: ["English", "Español"],
          trending: ["Politics", "Tech", "Markets"],
          children: [
            {
              id: "california",
              name: "California",
              sources: 1500,
              languages: ["English", "Español"],
              trending: ["Silicon Valley", "Climate", "Hollywood"],
              children: [
                {
                  id: "sf",
                  name: "San Francisco",
                  sources: 400,
                  languages: ["English"],
                  trending: ["AI Startups", "Housing", "Tech Culture"],
                },
                {
                  id: "la",
                  name: "Los Angeles",
                  sources: 500,
                  languages: ["English", "Español"],
                  trending: ["Entertainment", "Sports", "Traffic"],
                },
              ],
            },
            {
              id: "newyork",
              name: "New York",
              sources: 2000,
              languages: ["English"],
              trending: ["Wall Street", "Culture", "Politics"],
              children: [
                {
                  id: "nyc",
                  name: "New York City",
                  sources: 1200,
                  languages: ["English"],
                  trending: ["Finance", "Broadway", "Real Estate"],
                },
              ],
            },
          ],
        },
        {
          id: "brazil",
          name: "Brazil",
          countries: 1,
          sources: 2000,
          languages: ["Português", "English"],
          trending: ["Economy", "Environment", "Politics"],
        },
      ],
    },
    {
      id: "africa",
      name: "Africa",
      countries: 54,
      sources: 5000,
      languages: ["English", "Français", "العربية", "Kiswahili", "Português"],
      trending: ["Development", "Tech Growth", "Climate"],
      children: [
        {
          id: "nigeria",
          name: "Nigeria",
          countries: 1,
          sources: 800,
          languages: ["English", "Hausa", "Yoruba", "Igbo"],
          trending: ["Fintech", "Entertainment", "Oil"],
        },
        {
          id: "southafrica",
          name: "South Africa",
          countries: 1,
          sources: 700,
          languages: ["English", "Afrikaans", "isiZulu"],
          trending: ["Economy", "Mining", "Politics"],
        },
      ],
    },
    {
      id: "oceania",
      name: "Oceania",
      countries: 14,
      sources: 3000,
      languages: ["English", "Māori", "French"],
      trending: ["Climate", "Tourism", "Trade"],
      children: [
        {
          id: "australia",
          name: "Australia",
          countries: 1,
          sources: 2000,
          languages: ["English"],
          trending: ["Climate Policy", "Mining", "Immigration"],
        },
        {
          id: "newzealand",
          name: "New Zealand",
          countries: 1,
          sources: 600,
          languages: ["English", "Māori"],
          trending: ["Environment", "Tourism", "Tech"],
        },
      ],
    },
  ],
};

const levelLabels = ["World", "Continent", "Country", "State/Province", "District", "City"];

const InteractiveWorldMap = () => {
  const [path, setPath] = useState<Region[]>([worldData]);
  const [selectedChild, setSelectedChild] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentRegion = path[path.length - 1];
  const currentLevel = path.length - 1;

  const handleDrillDown = useCallback((child: Region) => {
    setIsAnimating(true);
    setSelectedChild(child.id);
    
    setTimeout(() => {
      setPath([...path, child]);
      setSelectedChild(null);
      setIsAnimating(false);
    }, 300);
  }, [path]);

  const handleDrillUp = useCallback((index: number) => {
    setIsAnimating(true);
    
    setTimeout(() => {
      setPath(path.slice(0, index + 1));
      setIsAnimating(false);
    }, 300);
  }, [path]);

  const getLevelColor = (level: number) => {
    const colors = [
      "from-primary/20 to-primary/5",
      "from-blue-500/20 to-blue-500/5",
      "from-emerald-500/20 to-emerald-500/5",
      "from-amber-500/20 to-amber-500/5",
      "from-purple-500/20 to-purple-500/5",
      "from-rose-500/20 to-rose-500/5",
    ];
    return colors[level] || colors[0];
  };

  return (
    <div className="w-full">
      {/* Breadcrumb Navigation */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {path.map((region, index) => (
          <div key={region.id} className="flex items-center">
            {index > 0 && <ChevronRight className="w-4 h-4 text-muted-foreground mx-1" />}
            <button
              onClick={() => handleDrillUp(index)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                index === path.length - 1
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
              }`}
            >
              {region.name}
            </button>
          </div>
        ))}
      </div>

      {/* Current Level Indicator */}
      <div className="flex items-center gap-3 mb-8">
        <Badge variant="outline" className="px-3 py-1">
          <MapPin className="w-3 h-3 mr-1.5" />
          {levelLabels[currentLevel]}
        </Badge>
        {currentRegion.countries && (
          <Badge variant="secondary" className="px-3 py-1">
            <Globe className="w-3 h-3 mr-1.5" />
            {currentRegion.countries} {currentRegion.countries === 1 ? "Country" : "Countries"}
          </Badge>
        )}
        <Badge variant="secondary" className="px-3 py-1">
          <Newspaper className="w-3 h-3 mr-1.5" />
          {currentRegion.sources?.toLocaleString()}+ Sources
        </Badge>
      </div>

      {/* Main Content Area */}
      <div className={`transition-all duration-300 ${isAnimating ? "opacity-50 scale-98" : "opacity-100 scale-100"}`}>
        <Card className={`overflow-hidden border-primary/20 bg-gradient-to-br ${getLevelColor(currentLevel)}`}>
          <CardContent className="p-6 sm:p-8">
            {/* Region Header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  {currentRegion.name}
                </h3>
                <p className="text-muted-foreground">
                  {currentRegion.children
                    ? `Explore ${currentRegion.children.length} sub-regions`
                    : "Hyperlocal news coverage"}
                </p>
              </div>
              {path.length > 1 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDrillUp(path.length - 2)}
                  className="shrink-0"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Back
                </Button>
              )}
            </div>

            {/* Languages */}
            {currentRegion.languages && (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Languages className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Available Languages</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentRegion.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1.5 text-xs font-medium bg-background/80 rounded-full border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all cursor-pointer"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Trending Topics */}
            {currentRegion.trending && (
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Trending Topics</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentRegion.trending.map((topic) => (
                    <Badge key={topic} variant="secondary" className="px-3 py-1.5">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Sub-regions Grid */}
            {currentRegion.children && currentRegion.children.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {currentRegion.children.map((child) => (
                  <button
                    key={child.id}
                    onClick={() => handleDrillDown(child)}
                    className={`group relative p-4 rounded-xl border text-left transition-all duration-300 ${
                      selectedChild === child.id
                        ? "bg-primary/20 border-primary scale-95"
                        : "bg-background/60 border-border/50 hover:border-primary/40 hover:bg-background/80 hover:shadow-lg hover:shadow-primary/10"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">{child.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {child.sources?.toLocaleString()}+ sources
                    </p>
                    {child.children && (
                      <p className="text-xs text-primary mt-1">
                        {child.children.length} sub-regions →
                      </p>
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Leaf Node - No more children */}
            {(!currentRegion.children || currentRegion.children.length === 0) && (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-display text-xl font-bold text-foreground mb-2">
                  {currentRegion.name} News Hub
                </h4>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Access hyperlocal news from {currentRegion.sources?.toLocaleString()}+ verified sources in{" "}
                  {currentRegion.languages?.length || 1} languages.
                </p>
                <Button asChild>
                  <a href="https://www.newstack.live/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Explore {currentRegion.name} News
                  </a>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Level Progress */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {levelLabels.map((label, index) => (
          <div
            key={label}
            className={`flex items-center gap-1.5 px-2 py-1 rounded-md text-xs transition-all ${
              index === currentLevel
                ? "bg-primary/10 text-primary font-medium"
                : index < currentLevel
                ? "text-muted-foreground"
                : "text-muted-foreground/50"
            }`}
          >
            {index > 0 && <span className="text-muted-foreground/30">→</span>}
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveWorldMap;
