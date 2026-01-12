import { useEffect, useState, useRef } from "react";
import { Globe, TrendingUp, Radio } from "lucide-react";

interface NewsItem {
  id: string;
  headline: string;
  region: string;
  category: string;
  timestamp: string;
}

const mockNewsData: NewsItem[] = [
  { id: "1", headline: "Global climate summit reaches historic agreement on carbon reduction targets", region: "World", category: "Environment", timestamp: "2 min ago" },
  { id: "2", headline: "Asian markets surge as tech sector leads regional recovery", region: "Asia", category: "Finance", timestamp: "5 min ago" },
  { id: "3", headline: "European Union announces new digital infrastructure initiative", region: "Europe", category: "Technology", timestamp: "8 min ago" },
  { id: "4", headline: "African nations launch continental free trade zone expansion", region: "Africa", category: "Economy", timestamp: "12 min ago" },
  { id: "5", headline: "North American renewable energy production hits record high", region: "Americas", category: "Energy", timestamp: "15 min ago" },
  { id: "6", headline: "South Pacific island nations unite on ocean conservation policy", region: "Oceania", category: "Environment", timestamp: "18 min ago" },
  { id: "7", headline: "India's tech sector sees unprecedented growth in Q4", region: "Asia", category: "Technology", timestamp: "22 min ago" },
  { id: "8", headline: "UK Parliament passes landmark AI regulation bill", region: "Europe", category: "Politics", timestamp: "25 min ago" },
  { id: "9", headline: "Brazil rainforest conservation efforts show positive results", region: "Americas", category: "Environment", timestamp: "28 min ago" },
  { id: "10", headline: "Japan unveils next-generation quantum computing breakthrough", region: "Asia", category: "Science", timestamp: "32 min ago" },
  { id: "11", headline: "Germany accelerates transition to green hydrogen economy", region: "Europe", category: "Energy", timestamp: "35 min ago" },
  { id: "12", headline: "Nigeria leads African fintech revolution with mobile banking growth", region: "Africa", category: "Finance", timestamp: "38 min ago" },
];

const regionColors: Record<string, string> = {
  World: "bg-primary/20 text-primary",
  Asia: "bg-amber-500/20 text-amber-600 dark:text-amber-400",
  Europe: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
  Africa: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  Americas: "bg-rose-500/20 text-rose-600 dark:text-rose-400",
  Oceania: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
};

const NewsTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockNewsData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const currentNews = mockNewsData[currentIndex];
  const nextNews = mockNewsData[(currentIndex + 1) % mockNewsData.length];

  return (
    <div className="w-full bg-gradient-to-r from-card/80 via-card to-card/80 backdrop-blur-sm border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div 
          ref={tickerRef}
          className="flex items-center gap-4 py-3 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Live indicator */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-destructive/10 rounded-full">
              <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
              <span className="text-xs font-semibold text-destructive uppercase tracking-wide">Live</span>
            </div>
            <Radio className="w-4 h-4 text-muted-foreground" />
          </div>

          {/* News content with animation */}
          <div className="flex-1 relative h-6 overflow-hidden">
            <div 
              className="absolute inset-0 flex items-center transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateY(0)`,
              }}
              key={currentNews.id}
            >
              <div className="flex items-center gap-3 animate-fade-in">
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide shrink-0 ${regionColors[currentNews.region]}`}>
                  {currentNews.region}
                </span>
                <span className="text-sm text-foreground font-medium truncate">
                  {currentNews.headline}
                </span>
                <span className="text-xs text-muted-foreground shrink-0 hidden sm:inline">
                  {currentNews.timestamp}
                </span>
              </div>
            </div>
          </div>

          {/* Trending indicator */}
          <div className="flex items-center gap-2 shrink-0 hidden md:flex">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted-foreground">
              {mockNewsData.length} stories
            </span>
          </div>

          {/* Navigation dots */}
          <div className="flex items-center gap-1 shrink-0">
            {mockNewsData.slice(0, 5).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex % 5 
                    ? 'bg-primary w-4' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scrolling headlines bar */}
      <div className="border-t border-border/30 bg-muted/30 overflow-hidden">
        <div className="relative flex">
          <div className="animate-marquee flex items-center gap-8 py-2 whitespace-nowrap">
            {mockNewsData.map((news) => (
              <div key={news.id} className="flex items-center gap-2 px-4">
                <Globe className="w-3 h-3 text-muted-foreground shrink-0" />
                <span className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground/80">{news.region}:</span> {news.headline}
                </span>
              </div>
            ))}
          </div>
          <div className="animate-marquee2 flex items-center gap-8 py-2 whitespace-nowrap absolute top-0">
            {mockNewsData.map((news) => (
              <div key={`dup-${news.id}`} className="flex items-center gap-2 px-4">
                <Globe className="w-3 h-3 text-muted-foreground shrink-0" />
                <span className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground/80">{news.region}:</span> {news.headline}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 60s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default NewsTicker;
