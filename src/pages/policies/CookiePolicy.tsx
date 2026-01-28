import { Helmet } from "react-helmet-async";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BackToTop";

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy — OriginX Labs</title>
        <meta name="description" content="Cookie Policy explaining how OriginX Labs uses cookies and similar tracking technologies." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-20 pb-12">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            {/* Header */}
            <div className="mb-8">
              <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Legal</p>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-wide mb-3">
                Cookie Policy
              </h1>
              <p className="text-muted-foreground">
                Last updated: January 28, 2026
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">1. What Are Cookies?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cookies are small text files that are placed on your device when you visit our websites or use our services. They help us recognize your device and remember certain information about your preferences or past actions.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">2. Types of Cookies We Use</h2>
                
                <div className="space-y-6">
                  <div className="p-4 bg-card border border-border rounded-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">Essential Cookies</h4>
                      <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded">Required</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-card border border-border rounded-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">Functional Cookies</h4>
                      <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded">Optional</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-card border border-border rounded-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">Analytics Cookies</h4>
                      <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded">Optional</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">3. Managing Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You can control and manage cookies through your browser settings. Most browsers allow you to view, delete, and block cookies.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">4. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about our use of cookies:
                </p>
                <div className="mt-4 p-4 bg-card border border-border rounded-sm">
                  <p className="text-foreground font-medium">OriginX Labs Pvt. Ltd.</p>
                  <p className="text-muted-foreground text-sm mt-2">Email: privacy@originxlabs.com</p>
                  <p className="text-muted-foreground text-sm">Website: originxlabs.com</p>
                </div>
              </section>
            </div>
          </div>
        </main>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default CookiePolicy;
