import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BackToTop";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, Filter, X, ArrowRight, FileText, Box, Users, Building2, BookOpen } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

// All searchable content
const platforms = [
  { type: "platform", title: "Cognix", description: "AI-powered software cognition and architecture intelligence platform", href: "/cognix", category: "AI Platform" },
  { type: "platform", title: "OpZeniX", description: "DevOps, DevSecOps, MLOps, AIOps, and LLMOps operations platform", href: "/opzenix", category: "Operations" },
  { type: "platform", title: "TraceFlow", description: "Digital cognition and infrastructure intelligence for mission-critical systems", href: "/traceflow", category: "Infrastructure" },
  { type: "platform", title: "Qualyx", description: "QA automation and quality intelligence platform", href: "/qualyx", category: "Quality" },
  { type: "platform", title: "Huminex", description: "Modern workforce operating system for people and organizational intelligence", href: "/huminex", category: "Workforce" },
  { type: "platform", title: "Atlas", description: "Enterprise data infrastructure and analytics platform", href: "/atlas", category: "Data" },
  { type: "platform", title: "Cropxon Cloud", description: "Unified cloud platform for enterprise deployment", href: "/cropxon-cloud", category: "Cloud" },
  { type: "platform", title: "Robotics", description: "Autonomous systems and robotics solutions", href: "/robotics", category: "Robotics" },
  { type: "platform", title: "Zenith Studio", description: "Business and content creation platform", href: "/zenith-studio", category: "Creation" },
  { type: "platform", title: "Zenith Institute", description: "Learning, enablement and certification programs", href: "/zenith-institute", category: "Education" },
  { type: "platform", title: "OriginX Labs", description: "Deep-tech research and innovation division", href: "/originx-labs", category: "Research" },
];

const pages = [
  { type: "page", title: "About Us", description: "Learn about Cropxon Innovations and our mission", href: "/company", category: "Company" },
  { type: "page", title: "How We Think", description: "Our philosophy and approach to building technology", href: "/how-we-think", category: "Company" },
  { type: "page", title: "Architecture", description: "Technical architecture and system design principles", href: "/architecture", category: "Technical" },
  { type: "page", title: "Careers", description: "Join our team and build the future of enterprise technology", href: "/careers", category: "Company" },
  { type: "page", title: "Contact", description: "Get in touch with our team", href: "/contact", category: "Company" },
  { type: "page", title: "Design Principles", description: "Our design philosophy and principles", href: "/design-principles", category: "Technical" },
  { type: "page", title: "Systems Philosophy", description: "Why we build systems, not just products", href: "/systems-not-products", category: "Technical" },
  { type: "page", title: "Platform Consoles", description: "Access all platform dashboards", href: "/platforms", category: "Platforms" },
];

const contentTypes = [
  { id: "all", label: "All", icon: SearchIcon },
  { id: "platform", label: "Platforms", icon: Box },
  { id: "page", label: "Pages", icon: FileText },
  { id: "blog", label: "Articles", icon: BookOpen },
];

const Search = () => {
  const [query, setQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Combine all content
  const allContent = useMemo(() => {
    const blogContent = blogPosts.map(post => ({
      type: "blog" as const,
      title: post.title,
      description: post.excerpt,
      href: `/blog/${post.slug}`,
      category: post.category,
      tags: post.tags,
      date: post.date,
    }));

    return [...platforms, ...pages, ...blogContent];
  }, []);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set(allContent.map(item => item.category));
    return Array.from(cats).sort();
  }, [allContent]);

  // Filter results
  const results = useMemo(() => {
    let filtered = allContent;

    // Filter by type
    if (selectedType !== "all") {
      filtered = filtered.filter(item => item.type === selectedType);
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by search query
    if (query.trim()) {
      const searchTerms = query.toLowerCase().split(" ");
      filtered = filtered.filter(item => {
        const tags = "tags" in item && Array.isArray(item.tags) ? (item.tags as string[]).join(" ") : "";
        const searchText = `${item.title} ${item.description} ${item.category} ${tags}`.toLowerCase();
        return searchTerms.every(term => searchText.includes(term));
      });
    }

    return filtered;
  }, [allContent, query, selectedType, selectedCategory]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "platform": return Box;
      case "page": return FileText;
      case "blog": return BookOpen;
      default: return FileText;
    }
  };

  return (
    <>
      <SEOHead
        title="Search — Find Platforms, Articles & Resources"
        description="Search across all Cropxon platforms, documentation, blog articles, and resources."
        keywords="search, Cropxon platforms, documentation, resources"
        url="https://cropxon.com/search"
        type="website"
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-20">
          {/* Search Header */}
          <section className="py-12 sm:py-16 lg:py-20 border-b border-border/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
              <div className="max-w-3xl mx-auto">
                <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-center mb-8 text-foreground">
                  Search Everything
                </h1>
                
                {/* Search Input */}
                <div className="relative">
                  <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search platforms, articles, pages..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full h-14 pl-12 pr-4 text-base bg-background border-border/50 rounded-xl focus:ring-2 focus:ring-primary/20"
                    autoFocus
                  />
                  {query && (
                    <button
                      onClick={() => setQuery("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded-full transition-colors"
                    >
                      <X className="w-4 h-4 text-muted-foreground" />
                    </button>
                  )}
                </div>

                {/* Content Type Filters */}
                <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                  {contentTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <button
                        key={type.id}
                        onClick={() => setSelectedType(type.id)}
                        className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all ${
                          selectedType === type.id
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {type.label}
                      </button>
                    );
                  })}
                </div>

                {/* Category Filters */}
                {selectedCategory && (
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <span className="text-sm text-muted-foreground">Filtered by:</span>
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {selectedCategory}
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
              <div className="max-w-4xl mx-auto">
                {/* Results Count */}
                <div className="flex items-center justify-between mb-6">
                  <p className="text-sm text-muted-foreground">
                    {results.length} {results.length === 1 ? "result" : "results"} found
                  </p>
                  {categories.length > 0 && (
                    <div className="flex items-center gap-2">
                      <Filter className="w-4 h-4 text-muted-foreground" />
                      <select
                        value={selectedCategory || ""}
                        onChange={(e) => setSelectedCategory(e.target.value || null)}
                        className="text-sm bg-transparent border-none text-muted-foreground focus:outline-none cursor-pointer"
                      >
                        <option value="">All Categories</option>
                        {categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>

                {/* Results List */}
                {results.length > 0 ? (
                  <div className="space-y-4">
                    {results.map((item, index) => {
                      const Icon = getTypeIcon(item.type);
                      return (
                        <Link
                          key={`${item.type}-${index}`}
                          to={item.href}
                          className="group block p-5 bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/30 transition-all duration-300"
                        >
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-[10px] font-medium text-primary uppercase tracking-wider">
                                  {item.type}
                                </span>
                                <span className="text-muted-foreground/30">•</span>
                                <span className="text-[10px] text-muted-foreground">
                                  {item.category}
                                </span>
                              </div>
                              <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                                {item.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                                {item.description}
                              </p>
                              {"tags" in item && Array.isArray(item.tags) && (
                                <div className="flex flex-wrap gap-1.5 mt-2">
                                  {(item.tags as string[]).slice(0, 3).map(tag => (
                                    <span key={tag} className="text-[10px] px-2 py-0.5 bg-muted/50 text-muted-foreground rounded-full">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                            <ArrowRight className="w-5 h-5 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <SearchIcon className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">No results found</h3>
                    <p className="text-sm text-muted-foreground">
                      Try adjusting your search terms or filters
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Search;
