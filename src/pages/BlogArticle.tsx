import { useParams, Link, Navigate } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Linkedin, Twitter, Copy, ChevronRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { toast } from "sonner";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }
  
  const relatedPosts = blogPosts.filter(p => post.relatedSlugs.includes(p.slug));
  const PostIcon = post.icon;

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const text = post.title;
    
    switch (platform) {
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, "_blank");
        break;
      case "linkedin":
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank");
        break;
      case "copy":
        await navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard!");
        break;
    }
  };

  // Parse markdown-like content to JSX
  const renderContent = (content: string) => {
    const sections = content.split("\n\n").filter(Boolean);
    
    return sections.map((section, index) => {
      // Headers
      if (section.startsWith("## ")) {
        return (
          <h2 key={index} className="font-display text-2xl sm:text-3xl font-bold text-foreground mt-12 mb-6">
            {section.replace("## ", "")}
          </h2>
        );
      }
      if (section.startsWith("### ")) {
        return (
          <h3 key={index} className="font-display text-xl sm:text-2xl font-semibold text-foreground mt-8 mb-4">
            {section.replace("### ", "")}
          </h3>
        );
      }
      
      // Code blocks
      if (section.startsWith("```")) {
        const lines = section.split("\n");
        const language = lines[0].replace("```", "");
        const code = lines.slice(1, -1).join("\n");
        
        return (
          <div key={index} className="my-6 rounded-xl overflow-hidden border border-border/50">
            <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-border/50">
              <span className="text-xs font-mono text-muted-foreground">{language || "code"}</span>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(code);
                  toast.success("Code copied!");
                }}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <pre className="p-4 bg-muted/30 overflow-x-auto">
              <code className="text-sm font-mono text-foreground/90">{code}</code>
            </pre>
          </div>
        );
      }
      
      // Bullet lists
      if (section.includes("\n- ")) {
        const items = section.split("\n- ").filter(Boolean);
        const intro = items[0].startsWith("- ") ? null : items.shift();
        
        return (
          <div key={index} className="my-4">
            {intro && <p className="text-muted-foreground leading-relaxed mb-3">{intro}</p>}
            <ul className="space-y-2">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ 
                    __html: item.replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground font-medium'>$1</strong>") 
                  }} />
                </li>
              ))}
            </ul>
          </div>
        );
      }
      
      // Numbered lists
      if (section.match(/^\d+\./)) {
        const items = section.split(/\n\d+\.\s/).filter(Boolean);
        
        return (
          <ol key={index} className="my-4 space-y-3 list-none">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ 
                  __html: item.replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground font-medium'>$1</strong>") 
                }} />
              </li>
            ))}
          </ol>
        );
      }
      
      // Regular paragraphs
      return (
        <p key={index} className="text-muted-foreground leading-relaxed my-4" dangerouslySetInnerHTML={{ 
          __html: section.replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground font-medium'>$1</strong>")
            .replace(/`([^`]+)`/g, "<code class='px-1.5 py-0.5 rounded bg-muted text-sm font-mono text-foreground'>$1</code>")
        }} />
      );
    });
  };

  return (
    <>
      <SEOHead
        title={`${post.title} — Cropxon Blog`}
        description={post.excerpt}
        keywords={post.tags.join(", ")}
        url={`https://cropxon.com/blog/${post.slug}`}
        type="article"
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-20">
          {/* Article Header */}
          <article>
            <header className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0" style={{
                  background: "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(var(--primary) / 0.15) 0%, transparent 60%)"
                }} />
              </div>

              <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                  <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-foreground">{post.category}</span>
                </nav>

                <div className="max-w-4xl">
                  {/* Category & Read Time */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-foreground">
                    {post.title}
                  </h1>

                  {/* Excerpt */}
                  <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                    {post.excerpt}
                  </p>

                  {/* Author & Date */}
                  <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{post.author}</p>
                        <p className="text-xs text-muted-foreground">{post.authorRole}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    
                    {/* Share buttons */}
                    <div className="flex items-center gap-2 ml-auto">
                      <span className="text-sm text-muted-foreground mr-2">Share:</span>
                      <button 
                        onClick={() => handleShare("twitter")}
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                        title="Share on Twitter"
                      >
                        <Twitter className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                      </button>
                      <button 
                        onClick={() => handleShare("linkedin")}
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                        title="Share on LinkedIn"
                      >
                        <Linkedin className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                      </button>
                      <button 
                        onClick={() => handleShare("copy")}
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                        title="Copy link"
                      >
                        <Copy className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12">
              <div className="max-w-4xl">
                <div className="prose prose-lg max-w-none">
                  {renderContent(post.content)}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t border-border/50">
                  <Tag className="w-4 h-4 text-muted-foreground" />
                  {post.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-muted/50 text-muted-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <section className="py-12 sm:py-16 lg:py-20 bg-muted/20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-8">Related Articles</h2>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => {
                    const RelatedIcon = relatedPost.icon;
                    return (
                      <article
                        key={relatedPost.id}
                        className="group relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300"
                      >
                        <div className="h-32 relative overflow-hidden bg-muted/30">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <RelatedIcon className="w-12 h-12 text-muted-foreground/30" />
                          </div>
                        </div>

                        <div className="p-5">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs font-medium text-primary">{relatedPost.category}</span>
                            <span className="text-muted-foreground/50">•</span>
                            <span className="text-xs text-muted-foreground">{relatedPost.readTime}</span>
                          </div>

                          <h3 className="font-display text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>

                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                        </div>

                        <Link to={`/blog/${relatedPost.slug}`} className="absolute inset-0" aria-label={`Read ${relatedPost.title}`} />
                      </article>
                    );
                  })}
                </div>

                {/* Back to Blog */}
                <div className="mt-12 text-center">
                  <Link to="/blog">
                    <Button variant="outline" size="lg">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to All Articles
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          )}
        </main>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default BlogArticle;
