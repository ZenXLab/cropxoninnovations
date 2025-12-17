import { Helmet } from "react-helmet-async";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BackToTop";

const AcceptableUsePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Acceptable Use Policy — CropXon Innovations</title>
        <meta name="description" content="Acceptable Use Policy defining permitted and prohibited uses of CropXon Innovations services and platforms." />
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
                Last updated: December 14, 2025
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">1. Purpose</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This Acceptable Use Policy ("AUP") defines the permitted and prohibited uses of CropXon Innovations services, platforms, and infrastructure. By using our services, you agree to comply with this policy.
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

                <h3 className="font-semibold text-foreground mt-6 mb-3">3.2 Harmful Content</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Child sexual abuse material (CSAM)</li>
                  <li>Content promoting violence, terrorism, or hate speech</li>
                  <li>Non-consensual intimate imagery</li>
                  <li>Content that infringes intellectual property rights</li>
                </ul>

                <h3 className="font-semibold text-foreground mt-6 mb-3">3.3 Security Violations</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Unauthorized access to systems or data</li>
                  <li>Distribution of malware, viruses, or malicious code</li>
                  <li>Conducting DDoS attacks or network disruptions</li>
                  <li>Circumventing security measures or access controls</li>
                  <li>Scanning or probing other networks without authorization</li>
                </ul>

                <h3 className="font-semibold text-foreground mt-6 mb-3">3.4 Abuse of Resources</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Cryptocurrency mining without explicit authorization</li>
                  <li>Excessive resource consumption affecting other users</li>
                  <li>Sending unsolicited bulk communications (spam)</li>
                  <li>Operating open relays or proxy services</li>
                </ul>

                <h3 className="font-semibold text-foreground mt-6 mb-3">3.5 Platform Integrity</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Reverse engineering or decompiling our software</li>
                  <li>Reselling services without authorization</li>
                  <li>Misrepresenting your identity or affiliation</li>
                  <li>Interfering with other users' access to services</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">4. Resource Limits</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To ensure fair usage and platform stability, we enforce reasonable resource limits:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                  <li>API rate limits as specified in your service plan</li>
                  <li>Storage quotas based on subscription tier</li>
                  <li>Bandwidth allocations per billing period</li>
                  <li>Concurrent connection limits</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Enterprise clients may request custom limits through their account manager.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">5. Monitoring and Enforcement</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We monitor usage patterns to detect violations of this policy. Our monitoring practices:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                  <li>Automated systems detect unusual patterns</li>
                  <li>We do not routinely monitor content unless required by law or this policy</li>
                  <li>Reports of abuse are investigated promptly</li>
                  <li>Privacy is respected within legal requirements</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">6. Consequences of Violation</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Violations of this policy may result in:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                  <li>Warning and request for corrective action</li>
                  <li>Temporary suspension of services</li>
                  <li>Permanent termination of account</li>
                  <li>Removal of content or data</li>
                  <li>Legal action where appropriate</li>
                  <li>Reporting to law enforcement authorities</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Serious violations may result in immediate termination without prior notice.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">7. Reporting Violations</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you become aware of any violation of this policy, please report it immediately:
                </p>
                <div className="mt-4 p-4 bg-card border border-border rounded-sm">
                  <p className="text-foreground font-medium">Abuse Reports</p>
                  <p className="text-muted-foreground text-sm mt-2">Email: abuse@cropxon.com</p>
                  <p className="text-muted-foreground text-sm">Security Issues: security@cropxon.com</p>
                </div>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">8. Policy Updates</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this policy periodically to address new threats or clarify requirements. Material changes will be communicated to users. Continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">9. Contact</h2>
                <div className="mt-4 p-4 bg-card border border-border rounded-sm">
                  <p className="text-foreground font-medium">CropXon Innovations Private Limited</p>
                  <p className="text-muted-foreground text-sm mt-2">Legal: legal@cropxon.com</p>
                  <p className="text-muted-foreground text-sm">Abuse: abuse@cropxon.com</p>
                  <p className="text-muted-foreground text-sm">Support: support@cropxon.com</p>
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
