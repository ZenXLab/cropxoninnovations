import { Helmet } from "react-helmet-async";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BackToTop";

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy — CropXon Innovations</title>
        <meta name="description" content="Cookie Policy explaining how CropXon Innovations uses cookies and similar tracking technologies." />
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
                Last updated: December 14, 2025
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
                      These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm mt-2">
                      <li>Session management</li>
                      <li>Authentication and security</li>
                      <li>Load balancing</li>
                      <li>Cookie consent preferences</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-card border border-border rounded-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">Functional Cookies</h4>
                      <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded">Optional</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm mt-2">
                      <li>Language preferences</li>
                      <li>Theme preferences (dark/light mode)</li>
                      <li>Regional settings</li>
                      <li>User interface customizations</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-card border border-border rounded-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">Analytics Cookies</h4>
                      <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded">Optional</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm mt-2">
                      <li>Page views and navigation patterns</li>
                      <li>Time spent on pages</li>
                      <li>Error reporting</li>
                      <li>Performance monitoring</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-card border border-border rounded-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">Marketing Cookies</h4>
                      <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded">Optional</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      These cookies are used to track visitors across websites to display relevant advertisements. We minimize the use of marketing cookies on enterprise platforms.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">3. Cookie Duration</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-foreground font-semibold">Cookie Type</th>
                        <th className="text-left py-3 px-4 text-foreground font-semibold">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border">
                        <td className="py-3 px-4">Session Cookies</td>
                        <td className="py-3 px-4">Deleted when browser is closed</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4">Persistent Cookies</td>
                        <td className="py-3 px-4">Up to 2 years</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4">Authentication Cookies</td>
                        <td className="py-3 px-4">30 days (configurable)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Analytics Cookies</td>
                        <td className="py-3 px-4">Up to 13 months</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">4. Third-Party Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Some cookies on our website are set by third-party services. These include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                  <li><strong className="text-foreground">Analytics Providers:</strong> For website performance monitoring</li>
                  <li><strong className="text-foreground">Security Services:</strong> For fraud detection and prevention</li>
                  <li><strong className="text-foreground">CDN Providers:</strong> For optimized content delivery</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We carefully select third-party partners who comply with applicable data protection regulations.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">5. Managing Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You can control and manage cookies in several ways:
                </p>
                
                <h3 className="font-semibold text-foreground mt-6 mb-3">Browser Settings</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Most browsers allow you to control cookies through their settings. You can typically:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                  <li>View existing cookies</li>
                  <li>Delete all or specific cookies</li>
                  <li>Block all cookies or third-party cookies</li>
                  <li>Set preferences for specific websites</li>
                </ul>

                <h3 className="font-semibold text-foreground mt-6 mb-3">Cookie Consent Banner</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you first visit our website, you will see a cookie consent banner allowing you to accept or customize your cookie preferences.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">6. Impact of Disabling Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you disable certain cookies, some features of our website may not function properly:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                  <li>You may need to log in repeatedly</li>
                  <li>Preferences may not be saved</li>
                  <li>Some interactive features may be unavailable</li>
                  <li>Personalized content may not display correctly</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">7. Updates to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">8. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about our use of cookies:
                </p>
                <div className="mt-4 p-4 bg-card border border-border rounded-sm">
                  <p className="text-foreground font-medium">CropXon Innovations Private Limited</p>
                  <p className="text-muted-foreground text-sm mt-2">Email: privacy@cropxon.com</p>
                  <p className="text-muted-foreground text-sm">Website: cropxon.com</p>
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
