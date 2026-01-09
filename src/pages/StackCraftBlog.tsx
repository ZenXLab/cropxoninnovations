import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BackToTop";
import StackCraftBlogSection from "@/components/sections/StackCraftBlogSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";

const StackCraftBlog = () => {
  return (
    <>
      <SEOHead
        title="StackCraft Blog — Engineering Playbooks & Tutorials"
        description="Production engineering playbooks, tutorials, and deep-dives from StackCraft. Learn from real-world engineering experience at blog.stackcraft.io."
        keywords="engineering blog, production engineering, software playbooks, tech tutorials, StackCraft, CropXon"
        url="https://cropxon.com/stackcraft/blog"
        type="website"
      />
      <Navigation />
      <main className="min-h-screen bg-background pt-16">
        {/* Back Navigation */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-6">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/stackcraft" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to StackCraft
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a 
                href="https://blog.stackcraft.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                blog.stackcraft.io
              </a>
            </Button>
          </div>
        </div>

        {/* Blog Content */}
        <StackCraftBlogSection showAll />

        {/* JSON-LD for Blog */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "StackCraft Blog",
              "description": "Engineering playbooks, tutorials, and production engineering articles",
              "url": "https://blog.stackcraft.io",
              "publisher": {
                "@type": "Organization",
                "name": "StackCraft by CropXon",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://cropxon.com/assets/cropxon-logo-full.png"
                }
              }
            })
          }}
        />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default StackCraftBlog;
