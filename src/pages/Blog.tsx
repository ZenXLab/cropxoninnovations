import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User, Search, TrendingUp, Sparkles } from "lucide-react";
import { blogPosts, categories } from "@/data/blogPosts";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <SEOHead
        title="Blog — Deep Tech Insights & Thought Leadership"
        description="Explore deep technology insights, AI research, cloud infrastructure trends, and enterprise software best practices from Cropxon's engineering and research teams."
        keywords="deep tech blog, AI insights, enterprise software, cloud infrastructure, MLOps, software architecture, technology trends, Cropxon blog"
        url="https://cropxon.com/blog"
        type="website"
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0" style={{
                background: "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(var(--primary) / 0.15) 0%, transparent 60%)"
              }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium text-primary">Deep Tech Insights</span>
                </div>

                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 sm:mb-6 text-foreground">
                  Blog & Insights
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                  Explore deep technology insights, research publications, and thought leadership from our engineering and research teams.
                </p>
              </div>
            </div>
          </section>

          {/* Categories Filter */}
          <section className="py-6 border-b border-border/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
              <div className="flex flex-wrap items-center gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                      category === selectedCategory
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <section className="py-12 sm:py-16 lg:py-20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex items-center gap-3 mb-8">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h2 className="font-display text-xl font-bold text-foreground">Featured Articles</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                  {featuredPosts.map((post) => {
                    const PostIcon = post.icon;
                    return (
                      <article
                        key={post.id}
                        className="group relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
                      >
                        {/* Gradient Header */}
                        <div className="h-48 relative overflow-hidden" style={{
                          background: "linear-gradient(135deg, hsl(var(--primary) / 0.2) 0%, hsl(var(--accent) / 0.1) 100%)"
                        }}>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <PostIcon className="w-20 h-20 text-primary/30" />
                          </div>
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full">
                              Featured
                            </span>
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-xs font-medium text-primary">{post.category}</span>
                            <span className="text-muted-foreground/50">•</span>
                            <span className="text-xs text-muted-foreground">{post.readTime}</span>
                          </div>

                          <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>

                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <User className="w-3.5 h-3.5" />
                              <span>{post.author}</span>
                              <span className="text-muted-foreground/50">•</span>
                              <Calendar className="w-3.5 h-3.5" />
                              <span>{post.date}</span>
                            </div>
                          </div>
                        </div>

                        <Link to={`/blog/${post.slug}`} className="absolute inset-0" aria-label={`Read ${post.title}`} />
                      </article>
                    );
                  })}
                </div>
              </div>
            </section>
          )}

          {/* All Posts */}
          <section className="py-12 sm:py-16 lg:py-20 bg-muted/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-display text-xl font-bold text-foreground">Latest Articles</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 text-sm bg-background border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
                  />
                </div>
              </div>

              {regularPosts.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regularPosts.map((post) => {
                    const PostIcon = post.icon;
                    return (
                      <article
                        key={post.id}
                        className="group relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300"
                      >
                        {/* Icon Header */}
                        <div className="h-32 relative overflow-hidden bg-muted/30">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <PostIcon className="w-12 h-12 text-muted-foreground/30" />
                          </div>
                        </div>

                        <div className="p-5">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs font-medium text-primary">{post.category}</span>
                            <span className="text-muted-foreground/50">•</span>
                            <span className="text-xs text-muted-foreground">{post.readTime}</span>
                          </div>

                          <h3 className="font-display text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>

                          <p className="text-xs text-muted-foreground mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{post.date}</span>
                          </div>
                        </div>

                        <Link to={`/blog/${post.slug}`} className="absolute inset-0" aria-label={`Read ${post.title}`} />
                      </article>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No articles found matching your criteria.</p>
                </div>
              )}

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Stay Updated with Deep Tech Insights
                </h2>
                <p className="text-muted-foreground mb-8">
                  Subscribe to our newsletter for the latest research, product updates, and industry insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-background border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50"
                  />
                  <Button size="lg">
                    Subscribe
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
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

export default Blog;
