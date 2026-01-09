import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Code, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { stackcraftPosts } from "@/data/stackcraftBlogPosts";

const categoryConfig = {
  playbook: { label: "Playbook", className: "bg-primary/10 text-primary border-primary/20" },
  tutorial: { label: "Tutorial", className: "bg-accent/10 text-accent-foreground border-accent/20" },
  article: { label: "Article", className: "bg-muted text-muted-foreground border-border" }
};

const difficultyConfig = {
  beginner: { label: "Beginner", className: "bg-green-500/10 text-green-600 dark:text-green-400" },
  intermediate: { label: "Intermediate", className: "bg-amber-500/10 text-amber-600 dark:text-amber-400" },
  advanced: { label: "Advanced", className: "bg-red-500/10 text-red-600 dark:text-red-400" }
};

interface StackCraftBlogSectionProps {
  showAll?: boolean;
}

const StackCraftBlogSection = ({ showAll = false }: StackCraftBlogSectionProps) => {
  const posts = showAll ? stackcraftPosts : stackcraftPosts.filter(p => p.featured).slice(0, 3);

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-xs font-mono text-primary tracking-wider">ENGINEERING KNOWLEDGE</span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            StackCraft Blog
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Playbooks, tutorials, and deep-dives on production engineering from the StackCraft team.
          </p>
          <div className="mt-4">
            <a 
              href="https://blog.stackcraft.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              Visit blog.stackcraft.io
            </a>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {posts.map((post) => {
            const Icon = post.icon;
            const category = categoryConfig[post.category];
            const difficulty = difficultyConfig[post.difficulty];
            
            return (
              <article 
                key={post.id}
                className="group bg-card rounded-xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className={category.className}>
                      {category.label}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span>{post.readTime}</span>
                  <Badge variant="outline" className={difficulty.className}>
                    {difficulty.label}
                  </Badge>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-0.5 text-[10px] rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link 
                  to={`/stackcraft/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mt-auto"
                >
                  Read article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </article>
            );
          })}
        </div>

        {/* View All CTA */}
        {!showAll && (
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/stackcraft/blog" className="group">
                View all articles
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default StackCraftBlogSection;
