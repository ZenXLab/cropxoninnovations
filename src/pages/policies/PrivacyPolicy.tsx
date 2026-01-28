import { Helmet } from "react-helmet-async";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BackToTop";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — OriginX Labs</title>
        <meta name="description" content="Privacy Policy describing how OriginX Labs collects, uses, and protects your personal information." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-20 pb-12">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            {/* Header */}
            <div className="mb-8">
              <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Legal</p>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-wide mb-3">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                Last updated: January 28, 2026
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  OriginX Labs Pvt. Ltd. ("OriginX Labs," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, platforms, and websites.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We are committed to complying with the Digital Personal Data Protection Act (DPDP) 2023, Information Technology Act 2000, and other applicable data protection regulations.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                
                <h3 className="font-semibold text-foreground mt-6 mb-3">2.1 Personal Information</h3>
                <p className="text-muted-foreground leading-relaxed">We may collect the following personal information:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                  <li>Name, email address, and contact information</li>
                  <li>Company name and job title (for enterprise clients)</li>
                  <li>Billing and payment information</li>
                  <li>Account credentials and authentication data</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="font-semibold text-foreground mt-6 mb-3">2.2 Technical Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>IP address and device identifiers</li>
                  <li>Browser type and operating system</li>
                  <li>Usage data and analytics</li>
                  <li>Log files and access timestamps</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>

                <h3 className="font-semibold text-foreground mt-6 mb-3">2.3 Enterprise Data</h3>
                <p className="text-muted-foreground leading-relaxed">
                  For enterprise clients using our platforms (Cognix, TraceFlow, Huminex), we may process business data as a data processor in accordance with separate Data Processing Agreements.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">We use collected information for:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                  <li>Providing, maintaining, and improving our services</li>
                  <li>Processing transactions and sending related information</li>
                  <li>Sending technical notices, updates, and support messages</li>
                  <li>Responding to your comments, questions, and requests</li>
                  <li>Analyzing usage patterns to enhance user experience</li>
                  <li>Detecting, preventing, and addressing technical issues and security threats</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">4. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement industry-standard security measures to protect your data:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                  <li>End-to-end encryption for data in transit (TLS 1.3)</li>
                  <li>AES-256 encryption for data at rest</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Secure SDLC practices following OWASP guidelines</li>
                  <li>Comprehensive audit trails for enterprise clients</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">5. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, unless a longer retention period is required by law. Enterprise clients may have custom retention policies as specified in their agreements.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">6. Data Sharing and Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell your personal information. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                  <li><strong className="text-foreground">Service Providers:</strong> With trusted third-party vendors who assist in operating our services</li>
                  <li><strong className="text-foreground">Legal Requirements:</strong> When required by law, legal process, or government request</li>
                  <li><strong className="text-foreground">Business Transfers:</strong> In connection with any merger, acquisition, or sale of assets</li>
                  <li><strong className="text-foreground">Consent:</strong> With your explicit consent for specific purposes</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">7. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Under applicable data protection laws, you have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate or incomplete data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to or restrict certain processing activities</li>
                  <li>Data portability (receive your data in a structured format)</li>
                  <li>Withdraw consent at any time</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">8. International Data Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers in compliance with applicable data protection laws.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">9. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected personal data from a child, we will take steps to delete such information.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">10. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For privacy-related inquiries or to exercise your rights:
                </p>
                <div className="mt-4 p-4 bg-card border border-border rounded-sm">
                  <p className="text-foreground font-medium">Data Protection Officer</p>
                  <p className="text-foreground font-medium">OriginX Labs Pvt. Ltd.</p>
                  <p className="text-muted-foreground text-sm mt-2">Email: privacy@originxlabs.com</p>
                  <p className="text-muted-foreground text-sm">Legal: legal@originxlabs.com</p>
                  <p className="text-muted-foreground text-sm">Registered Office: Odisha, India</p>
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

export default PrivacyPolicy;
