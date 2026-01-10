import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TimelineEvent {
  quarter: string;
  year: string;
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming";
}

const timelineEvents: TimelineEvent[] = [
  {
    quarter: "Q1",
    year: "2026",
    title: "Huminex Public Beta",
    description: "Workforce Intelligence OS opens to early enterprise adopters with AI-powered HR insights",
    status: "current"
  },
  {
    quarter: "Q1",
    year: "2026",
    title: "TraceFlow v2.0",
    description: "Major platform update with enhanced observability and supply chain traceability features",
    status: "upcoming"
  },
  {
    quarter: "Q1",
    year: "2026",
    title: "Proxinex Launch",
    description: "AI Model Routing & Cost Transparency platform for intelligent LLM orchestration",
    status: "upcoming"
  },
  {
    quarter: "Q2",
    year: "2026",
    title: "CropXon Cloud Expansion",
    description: "Enterprise-grade cloud infrastructure rollout with multi-region support",
    status: "upcoming"
  },
  {
    quarter: "Q2",
    year: "2026",
    title: "Chronyx Beta",
    description: "Personal Quiet Space (PQS) app launch for life management and digital wellbeing",
    status: "upcoming"
  },
  {
    quarter: "Q2",
    year: "2026",
    title: "Convertix Studio",
    description: "Conversion Operating Studio with 150+ format support and developer utilities",
    status: "upcoming"
  },
  {
    quarter: "Q3",
    year: "2026",
    title: "Finioraa Platform",
    description: "Personal Finance OS with AI-powered investment insights and tax optimization",
    status: "upcoming"
  },
  {
    quarter: "Q3",
    year: "2026",
    title: "StackCraft Academy",
    description: "Engineering Knowledge Platform with certification programs and mentorship",
    status: "upcoming"
  },
  {
    quarter: "Q3",
    year: "2026",
    title: "Global Data Centers",
    description: "Multi-region infrastructure deployment for low-latency services across continents",
    status: "upcoming"
  },
  {
    quarter: "Q4",
    year: "2026",
    title: "Cognix Enterprise",
    description: "Advanced AI cognition platform with custom model training for enterprises",
    status: "upcoming"
  },
  {
    quarter: "Q4",
    year: "2026",
    title: "OpZeniX v3.0",
    description: "Next-gen operations automation with predictive workflow optimization",
    status: "upcoming"
  },
  {
    quarter: "Q1",
    year: "2027",
    title: "Robotics R&D Launch",
    description: "Formal establishment of autonomous systems and industrial automation division",
    status: "upcoming"
  },
  {
    quarter: "Q2",
    year: "2027",
    title: "Government Contracts",
    description: "Public sector infrastructure deployment and digital transformation initiatives",
    status: "upcoming"
  },
  {
    quarter: "Q3",
    year: "2027",
    title: "Zenith Studio Pro",
    description: "Advanced design-to-code platform with AI-assisted component generation",
    status: "upcoming"
  },
  {
    quarter: "Q4",
    year: "2027",
    title: "Unified Ecosystem",
    description: "Complete platform integration connecting all 12 CropXon divisions seamlessly",
    status: "upcoming"
  },
];

const InteractiveTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", checkScroll);
      return () => ref.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const getStatusColor = (status: TimelineEvent["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "current":
        return "bg-accent animate-pulse";
      case "upcoming":
        return "bg-muted-foreground/30";
    }
  };

  const getStatusLabel = (status: TimelineEvent["status"]) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "current":
        return "In Progress";
      case "upcoming":
        return "Upcoming";
    }
  };

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <button
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-card border border-border rounded-lg transition-all ${
          canScrollLeft ? "opacity-100 hover:bg-muted hover:scale-105" : "opacity-30 cursor-not-allowed"
        }`}
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>

      <button
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-card border border-border rounded-lg transition-all ${
          canScrollRight ? "opacity-100 hover:bg-muted hover:scale-105" : "opacity-30 cursor-not-allowed"
        }`}
        aria-label="Scroll right"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>

      {/* Timeline Container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide px-14 py-8"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex gap-4 min-w-max">
          {timelineEvents.map((event, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative flex-shrink-0 w-56 p-5 rounded-xl border transition-all duration-300 text-left group ${
                activeIndex === index
                  ? "bg-card border-accent shadow-lg shadow-accent/10"
                  : "bg-background border-border hover:border-muted-foreground/50 hover:bg-card/50"
              }`}
            >
              {/* Status Indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${getStatusColor(event.status)}`} />
                <span className={`text-[9px] uppercase tracking-wide ${
                  event.status === 'current' ? 'text-accent' : 'text-muted-foreground/60'
                }`}>
                  {getStatusLabel(event.status)}
                </span>
              </div>

              {/* Quarter/Year */}
              <div className="mb-3">
                <span className="font-mono text-sm font-bold text-accent">{event.quarter}</span>
                <span className="font-mono text-sm text-muted-foreground ml-1.5">{event.year}</span>
              </div>

              {/* Title */}
              <h4 className={`font-display text-sm font-bold mb-2 transition-colors ${
                activeIndex === index ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
              }`}>
                {event.title}
              </h4>

              {/* Description */}
              <p className={`text-xs text-muted-foreground leading-relaxed transition-opacity duration-300 ${
                activeIndex === index ? "opacity-100" : "opacity-60"
              }`}>
                {event.description}
              </p>

              {/* Active indicator line */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-xl transition-all duration-300 ${
                activeIndex === index ? 'bg-accent' : 'bg-transparent'
              }`} />
            </button>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex justify-center gap-1.5 mt-4">
        {timelineEvents.map((event, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === index 
                ? "bg-accent w-8" 
                : event.status === 'current'
                  ? "bg-accent/50 w-3"
                  : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to ${event.title}`}
          />
        ))}
      </div>

      {/* Timeline Legend */}
      <div className="flex justify-center gap-6 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-xs text-muted-foreground">Completed</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs text-muted-foreground">In Progress</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
          <span className="text-xs text-muted-foreground">Upcoming</span>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTimeline;