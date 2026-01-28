import { Helmet } from "react-helmet-async";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BackToTop";

const AcceptableUsePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Acceptable Use Policy — OriginX Labs</title>
        <meta name="description" content="Acceptable Use Policy defining permitted and prohibited uses of OriginX Labs services and platforms." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-20 pb-12">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            {/* Header */}
            <div className="mb-8">
              <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Legal</p>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-wide mb-3">
                Acceptable Use Policy
              </h1>
              <p className="text-muted-foreground">
                Last updated: January 28, 2026
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">1. Purpose</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This Acceptable Use Policy ("AUP") defines the permitted and prohibited uses of OriginX Labs services, platforms, and infrastructure. By using our services, you agree to comply with this policy.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">2. Permitted Uses</h2>
                <p className="text-muted-foreground leading-relaxed">You may use our services for:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                  <li>Legitimate business operations consistent with your service agreement</li>
                  <li>Development, testing, and deployment of applications</li>
                  <li>Data storage and processing within applicable legal frameworks</li>
                  <li>Collaboration and communication within your organization</li>
                  <li>Integration with approved third-party services</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">3. Prohibited Uses</h2>
                <p className="text-muted-foreground leading-relaxed">The following activities are strictly prohibited:</p>
                
                <h3 className="font-semibold text-foreground mt-6 mb-3">3.1 Illegal Activities</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Violating any applicable laws, regulations, or legal orders</li>
                  <li>Engaging in fraudulent, deceptive, or misleading practices</li>
                  <li>Money laundering or terrorist financing</li>
                  <li>Distribution of illegal content or materials</li>
                </ul>

                <h3 className="font-semibold text-foreground mt-6 mb-3">3.2 Security Violations</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Unauthorized access to systems or data</li>
                  <li>Distribution of malware, viruses, or malicious code</li>
                  <li>Conducting DDoS attacks or network disruptions</li>
                  <li>Circumventing security measures or access controls</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">4. Reporting Violations</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you become aware of any violation of this policy, please report it immediately:
                </p>
                <div className="mt-4 p-4 bg-card border border-border rounded-sm">
                  <p className="text-foreground font-medium">Abuse Reports</p>
                  <p className="text-muted-foreground text-sm mt-2">Email: abuse@originxlabs.com</p>
                  <p className="text-muted-foreground text-sm">Security Issues: security@originxlabs.com</p>
                </div>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">5. Contact</h2>
                <div className="mt-4 p-4 bg-card border border-border rounded-sm">
                  <p className="text-foreground font-medium">OriginX Labs Pvt. Ltd.</p>
                  <p className="text-muted-foreground text-sm mt-2">Legal: legal@originxlabs.com</p>
                  <p className="text-muted-foreground text-sm">Abuse: abuse@originxlabs.com</p>
                  <p className="text-muted-foreground text-sm">Support: support@originxlabs.com</p>
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

export default AcceptableUsePolicy;
