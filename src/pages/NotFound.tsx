import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      {/* Spacer for fixed header */}
      <div className="h-16" />
      
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Animated background elements */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            </div>
            
            {/* 404 Text with gradient */}
            <div className="relative">
              <h1 className="font-display text-[120px] sm:text-[180px] font-bold leading-none tracking-tighter bg-gradient-to-b from-primary via-primary/60 to-primary/20 bg-clip-text text-transparent">
                404
              </h1>
            </div>
          </div>

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-destructive/10 border border-destructive/20 flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>
          </div>

          {/* Content */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>

          {/* Attempted path */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border/50 mb-8">
            <span className="text-sm text-muted-foreground">Attempted path:</span>
            <code className="text-sm font-mono text-foreground">{location.pathname}</code>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link to="/">
                <Home className="w-4 h-4" />
                Go to Homepage
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link to="/platforms">
                <Search className="w-4 h-4" />
                Explore Platforms
              </Link>
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg" 
              className="gap-2"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
          </div>

          {/* Suggested links */}
          <div className="mt-16 pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground mb-4">Popular destinations</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: 'Company', href: '/company' },
                { label: 'Cognix', href: '/cognix' },
                { label: 'StackCraft', href: '/stackcraft' },
                { label: 'Contact', href: '/contact' },
                { label: 'Careers', href: '/careers' },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground bg-muted/30 hover:bg-muted/50 rounded-full border border-border/30 transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Cropxon branding */}
          <div className="mt-12">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Cropxon Innovations Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
