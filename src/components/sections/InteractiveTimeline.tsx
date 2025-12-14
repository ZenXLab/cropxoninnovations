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
    title: "ATLAS Public Beta",
    description: "Workforce Operating System opens to early enterprise adopters",
    status: "upcoming"
  },
  {
    quarter: "Q1",
    year: "2026",
    title: "Traceflow v2.0",
    description: "Major platform update with enhanced observability features",
    status: "upcoming"
  },
  {
    quarter: "Q2",
    year: "2026",
    title: "CropXon Cloud Expansion",
    description: "Enterprise-grade cloud infrastructure rollout",
    status: "upcoming"
  },
  {
    quarter: "Q2",
    year: "2026",
    title: "OriginX Labs AI Suite",
    description: "First commercial AI/ML products from research division",
    status: "upcoming"
  },
  {
    quarter: "Q3",
    year: "2026",
    title: "Global Data Centers",
    description: "Multi-region infrastructure deployment for low-latency services",
    status: "upcoming"
  },
  {
    quarter: "Q4",
    year: "2026",
    title: "Enterprise Partnerships",
    description: "Strategic alliances with Fortune 500 organizations",
    status: "upcoming"
  },
  {
    quarter: "Q1",
    year: "2027",
    title: "Robotics R&D Launch",
    description: "Formal establishment of autonomous systems division",
    status: "upcoming"
  },
  {
    quarter: "Q2",
    year: "2027",
    title: "Government Contracts",
    description: "Public sector infrastructure deployment begins",
    status: "upcoming"
  },
  {
    quarter: "Q3",
    year: "2027",
    title: "Robotics Prototypes",
    description: "First autonomous system prototypes for industrial testing",
    status: "upcoming"
  },
  {
    quarter: "Q4",
    year: "2027",
    title: "Platform Integration",
    description: "Unified ecosystem connecting all CropXon divisions",
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
        return "bg-accent";
      case "current":
        return "bg-accent animate-pulse";
      case "upcoming":
        return "bg-muted-foreground/30";
    }
  };

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <button
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-card border border-border rounded-sm transition-opacity ${
          canScrollLeft ? "opacity-100 hover:bg-muted" : "opacity-30 cursor-not-allowed"
        }`}
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>

      <button
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-card border border-border rounded-sm transition-opacity ${
          canScrollRight ? "opacity-100 hover:bg-muted" : "opacity-30 cursor-not-allowed"
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
              className={`relative flex-shrink-0 w-48 p-4 rounded-sm border transition-all duration-300 text-left ${
                activeIndex === index
                  ? "bg-card border-accent"
                  : "bg-background border-border hover:border-muted-foreground/50"
              }`}
            >
              {/* Status Indicator */}
              <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${getStatusColor(event.status)}`} />

              {/* Quarter/Year */}
              <div className="mb-3">
                <span className="font-mono text-xs text-accent">{event.quarter}</span>
                <span className="font-mono text-xs text-muted-foreground ml-1">{event.year}</span>
              </div>

              {/* Title */}
              <h4 className={`font-display text-sm font-bold mb-2 transition-colors ${
                activeIndex === index ? "text-foreground" : "text-muted-foreground"
              }`}>
                {event.title}
              </h4>

              {/* Description - Only visible when active */}
              <p className={`text-xs text-muted-foreground leading-relaxed transition-opacity duration-300 ${
                activeIndex === index ? "opacity-100" : "opacity-60"
              }`}>
                {event.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex justify-center gap-1 mt-4">
        {timelineEvents.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeIndex === index ? "bg-accent w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to event ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default InteractiveTimeline;
