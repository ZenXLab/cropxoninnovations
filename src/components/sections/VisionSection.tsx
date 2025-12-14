import useScrollAnimation from "@/hooks/useScrollAnimation";

const VisionSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const statements = [
    {
      text: "We build primitives, not products.",
      emphasis: "primitives",
    },
    {
      text: "Infrastructure designed to outlast market cycles.",
      emphasis: "outlast",
    },
    {
      text: "Systems thinking at the foundation of everything.",
      emphasis: "Systems thinking",
    },
  ];

  return (
    <section id="vision" className="py-32 lg:py-48 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-pattern"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-muted-foreground"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div ref={ref} className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          {statements.map((statement, index) => (
            <p
              key={index}
              className={`text-2xl md:text-3xl lg:text-4xl font-display font-medium text-foreground leading-relaxed transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {statement.text.split(statement.emphasis).map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}
                    <span className="text-gradient">{statement.emphasis}</span>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
