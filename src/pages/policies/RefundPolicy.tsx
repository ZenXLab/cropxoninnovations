import { Helmet } from "react-helmet-async";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BackToTop";

const RefundPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Refund Policy — CropXon Innovations</title>
        <meta name="description" content="Refund Policy for CropXon Innovations products and services including subscription cancellations and refund procedures." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            {/* Header */}
            <div className="mb-12">
              <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">Legal</p>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-wide mb-4">
                Refund Policy
              </h1>
              <p className="text-muted-foreground">
                Last updated: December 14, 2025
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">1. Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  CropXon Innovations Private Limited ("CropXon") is committed to ensuring customer satisfaction. This Refund Policy outlines the terms and conditions under which refunds may be issued for our products and services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">2. Subscription Services</h2>
                
                <h3 className="font-semibold text-foreground mt-6 mb-3">2.1 Monthly Subscriptions</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Refund requests must be submitted within 7 days of the billing date</li>
                  <li>Partial month refunds are not provided</li>
                  <li>Unused service credits do not carry forward after cancellation</li>
                </ul>

                <h3 className="font-semibold text-foreground mt-6 mb-3">2.2 Annual Subscriptions</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Full refund available within 30 days of initial purchase</li>
                  <li>Pro-rated refunds may be considered after 30 days on a case-by-case basis</li>
                  <li>Annual subscription discounts will be recalculated upon early termination</li>
                </ul>

                <h3 className="font-semibold text-foreground mt-6 mb-3">2.3 Enterprise Agreements</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Enterprise clients are subject to the refund terms specified in their individual Master Service Agreements (MSA) or Enterprise License Agreements (ELA). Please refer to your contract for specific terms.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">3. Platform-Specific Policies</h2>
                
                <div className="space-y-6">
                  <div className="p-4 bg-card border border-border rounded-sm">
                    <h4 className="font-semibold text-foreground mb-2">ATLAS Platform</h4>
                    <p className="text-muted-foreground text-sm">
                      Workforce management subscriptions follow standard refund terms. Custom implementation fees are non-refundable after project commencement.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-card border border-border rounded-sm">
                    <h4 className="font-semibold text-foreground mb-2">TRACEFLOW Platform</h4>
                    <p className="text-muted-foreground text-sm">
                      Digital cognition infrastructure services are billed based on usage. Pre-paid credits are refundable within 90 days of purchase minus consumed credits.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-card border border-border rounded-sm">
                    <h4 className="font-semibold text-foreground mb-2">CropXon Cloud</h4>
                    <p className="text-muted-foreground text-sm">
                      Infrastructure services are billed on a pay-as-you-go basis. Prepaid compute credits are non-refundable but transferable within the same organization.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">4. Non-Refundable Items</h2>
                <p className="text-muted-foreground leading-relaxed">The following are not eligible for refunds:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                  <li>Custom development or professional services already rendered</li>
                  <li>Training and certification programs after access is granted</li>
                  <li>Data migration services after completion</li>
                  <li>Third-party licenses or integrations</li>
                  <li>Services terminated due to policy violations</li>
                  <li>Promotional or discounted purchases (unless otherwise stated)</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">5. Refund Process</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-mono text-sm">1</span>
                    <div>
                      <p className="text-foreground font-medium">Submit Request</p>
                      <p className="text-muted-foreground text-sm">Contact our billing team at billing@cropxon.com with your account details and reason for refund.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-mono text-sm">2</span>
                    <div>
                      <p className="text-foreground font-medium">Review Period</p>
                      <p className="text-muted-foreground text-sm">Our team will review your request within 5-7 business days.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-mono text-sm">3</span>
                    <div>
                      <p className="text-foreground font-medium">Processing</p>
                      <p className="text-muted-foreground text-sm">Approved refunds are processed within 10-14 business days to the original payment method.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">6. Service Credits</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In certain circumstances, we may offer service credits instead of monetary refunds. Service credits:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                  <li>Are valid for 12 months from the date of issue</li>
                  <li>Are non-transferable and non-redeemable for cash</li>
                  <li>Can be applied to any CropXon service or product</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">7. Cancellation</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You may cancel your subscription at any time through your account dashboard or by contacting our support team. Upon cancellation:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                  <li>Access continues until the end of the current billing period</li>
                  <li>Automatic renewal will be disabled</li>
                  <li>Data retention follows our standard data retention policy (30 days post-cancellation)</li>
                  <li>Enterprise clients should refer to their contract for data handling procedures</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">8. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For refund requests or billing inquiries:
                </p>
                <div className="mt-4 p-4 bg-card border border-border rounded-sm">
                  <p className="text-foreground font-medium">Billing Department</p>
                  <p className="text-foreground font-medium">CropXon Innovations Private Limited</p>
                  <p className="text-muted-foreground text-sm mt-2">Email: billing@cropxon.com</p>
                  <p className="text-muted-foreground text-sm">Support: support@cropxon.com</p>
                  <p className="text-muted-foreground text-sm">Response Time: 2-3 business days</p>
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

export default RefundPolicy;
