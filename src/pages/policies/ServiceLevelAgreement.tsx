import { Helmet } from "react-helmet-async";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BackToTop";

const ServiceLevelAgreement = () => {
  return (
    <>
      <Helmet>
        <title>Service Level Agreement (SLA) | CropXon Innovations</title>
        <meta name="description" content="CropXon Innovations Service Level Agreement outlining uptime guarantees, support response times, and service commitments." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-background pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-3">
              Service Agreement
            </p>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-3">
              Service Level Agreement
            </h1>
            <p className="text-muted-foreground">
              Effective Date: January 1, 2025 | Version 1.0
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                1. Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This Service Level Agreement ("SLA") is entered into between CropXon Innovations Private Limited 
                ("CropXon," "we," "us," or "our") and the Customer ("you" or "your") and governs the service 
                levels, uptime commitments, and support standards for all CropXon platforms and services, 
                including but not limited to ATLAS, TRACEFLOW, CropXon Cloud, and associated products.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This SLA forms an integral part of your Master Service Agreement or Terms of Service with CropXon. 
                In case of any conflict between this SLA and the Master Agreement, the Master Agreement shall prevail 
                unless explicitly stated otherwise.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                2. Definitions
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <p><strong className="text-foreground">"Downtime"</strong> means any period during which the Service is unavailable or materially impaired, excluding Scheduled Maintenance, Force Majeure events, or issues arising from Customer's systems or third-party services.</p>
                <p><strong className="text-foreground">"Monthly Uptime Percentage"</strong> means the total number of minutes in a calendar month minus Downtime minutes, divided by the total number of minutes in that month, expressed as a percentage.</p>
                <p><strong className="text-foreground">"Scheduled Maintenance"</strong> means planned maintenance windows communicated at least 72 hours in advance via email or dashboard notification.</p>
                <p><strong className="text-foreground">"Service Credits"</strong> means credits applied to your account as compensation for SLA breaches, calculated as a percentage of monthly service fees.</p>
                <p><strong className="text-foreground">"Critical Incident"</strong> means a complete service outage or security breach affecting production systems.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                3. Service Availability Commitments
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                CropXon commits to the following Monthly Uptime Percentages for each service tier:
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border border-border rounded-lg overflow-hidden">
                  <thead className="bg-muted/30">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground border-b border-border">Service Tier</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground border-b border-border">Uptime Commitment</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground border-b border-border">Max Downtime/Month</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border">
                      <td className="px-4 py-3">Enterprise</td>
                      <td className="px-4 py-3">99.99%</td>
                      <td className="px-4 py-3">~4.3 minutes</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-4 py-3">Business</td>
                      <td className="px-4 py-3">99.95%</td>
                      <td className="px-4 py-3">~22 minutes</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-4 py-3">Professional</td>
                      <td className="px-4 py-3">99.9%</td>
                      <td className="px-4 py-3">~43 minutes</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Standard</td>
                      <td className="px-4 py-3">99.5%</td>
                      <td className="px-4 py-3">~3.6 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                4. Support Response Times
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                CropXon provides tiered support based on incident severity and your service plan:
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border border-border rounded-lg overflow-hidden">
                  <thead className="bg-muted/30">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground border-b border-border">Severity</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground border-b border-border">Description</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground border-b border-border">Enterprise</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground border-b border-border">Business</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground border-b border-border">Standard</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground text-sm">
                    <tr className="border-b border-border">
                      <td className="px-4 py-3 font-medium text-destructive">Critical (P1)</td>
                      <td className="px-4 py-3">Complete service outage, security breach</td>
                      <td className="px-4 py-3">15 minutes</td>
                      <td className="px-4 py-3">30 minutes</td>
                      <td className="px-4 py-3">2 hours</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-4 py-3 font-medium text-orange-500">High (P2)</td>
                      <td className="px-4 py-3">Major feature unavailable, significant degradation</td>
                      <td className="px-4 py-3">30 minutes</td>
                      <td className="px-4 py-3">2 hours</td>
                      <td className="px-4 py-3">8 hours</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-4 py-3 font-medium text-yellow-500">Medium (P3)</td>
                      <td className="px-4 py-3">Minor feature impairment, workaround available</td>
                      <td className="px-4 py-3">2 hours</td>
                      <td className="px-4 py-3">8 hours</td>
                      <td className="px-4 py-3">24 hours</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-muted-foreground">Low (P4)</td>
                      <td className="px-4 py-3">General inquiries, feature requests</td>
                      <td className="px-4 py-3">8 hours</td>
                      <td className="px-4 py-3">24 hours</td>
                      <td className="px-4 py-3">72 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong className="text-foreground">Note:</strong> Response times are measured during Business Hours 
                (Monday–Friday, 9:00 AM – 6:00 PM IST) for Standard plans. Enterprise and Business plans include 
                24/7/365 support for Critical and High severity incidents.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                5. Service Credits
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If CropXon fails to meet the Monthly Uptime Percentage commitment, you are eligible for Service Credits:
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border border-border rounded-lg overflow-hidden">
                  <thead className="bg-muted/30">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground border-b border-border">Monthly Uptime Percentage</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground border-b border-border">Service Credit (% of Monthly Fee)</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border">
                      <td className="px-4 py-3">&lt; 99.9% but ≥ 99.0%</td>
                      <td className="px-4 py-3">10%</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-4 py-3">&lt; 99.0% but ≥ 95.0%</td>
                      <td className="px-4 py-3">25%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">&lt; 95.0%</td>
                      <td className="px-4 py-3">50%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Credit Request Process:</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Submit credit requests within 30 days of the incident via support@cropxon.com</li>
                  <li>Include affected service, date/time of incident, and impact description</li>
                  <li>Credits are applied to your next billing cycle and are non-transferable</li>
                  <li>Maximum credit per month: 50% of monthly service fees</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                6. Maintenance Windows
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  <strong className="text-foreground">Scheduled Maintenance:</strong> CropXon reserves the right to 
                  perform scheduled maintenance during low-traffic periods (typically Sunday 2:00 AM – 6:00 AM IST). 
                  Customers will receive at least 72 hours advance notice via email and dashboard notification.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-foreground">Emergency Maintenance:</strong> In cases of critical security 
                  vulnerabilities or imminent system failures, CropXon may perform emergency maintenance with 
                  reasonable notice. We will communicate via status page and email as soon as practicable.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-foreground">Status Page:</strong> Real-time service status is available at 
                  status.cropxon.com, including current incidents, scheduled maintenance, and historical uptime data.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                7. Exclusions
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The following are excluded from SLA calculations and do not qualify for Service Credits:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Scheduled or emergency maintenance windows as defined above</li>
                <li>Force majeure events including natural disasters, war, terrorism, government actions</li>
                <li>Failures caused by Customer's equipment, software, network, or third-party services</li>
                <li>Denial of service attacks or security incidents originating from Customer's systems</li>
                <li>Issues arising from Customer's failure to implement recommended configurations</li>
                <li>Beta, preview, or free tier services unless explicitly covered</li>
                <li>Actions or omissions by Customer that violate the Acceptable Use Policy</li>
                <li>Issues with third-party integrations not managed by CropXon</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                8. Customer Responsibilities
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To ensure optimal service delivery, Customers must:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Maintain accurate contact information for incident notifications</li>
                <li>Report incidents promptly through designated support channels</li>
                <li>Cooperate with CropXon technical teams during incident investigation</li>
                <li>Implement security patches and updates in a timely manner</li>
                <li>Monitor resource usage and scale services appropriately</li>
                <li>Maintain data backups for business continuity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                9. Escalation Procedures
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  For Critical (P1) incidents not resolved within committed timeframes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-foreground">Level 1 (0-30 min):</strong> On-call Engineer</li>
                  <li><strong className="text-foreground">Level 2 (30-60 min):</strong> Engineering Lead + Account Manager</li>
                  <li><strong className="text-foreground">Level 3 (60+ min):</strong> VP Engineering + Customer Success Director</li>
                  <li><strong className="text-foreground">Level 4 (2+ hours):</strong> Executive escalation to CTO/CEO</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Enterprise customers are assigned a dedicated Technical Account Manager (TAM) who serves as the 
                  primary escalation point for all issues.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                10. Amendments
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                CropXon may amend this SLA with 30 days written notice. Changes that materially reduce service 
                commitments will not apply to existing contracts until renewal. Continued use of services after 
                the notice period constitutes acceptance of amended terms.
              </p>
            </section>

            <section className="bg-muted/30 border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Contact Information
              </h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Support:</strong> support@cropxon.com</p>
                <p><strong className="text-foreground">Enterprise Support Hotline:</strong> +91-XXXX-XXXXXX</p>
                <p><strong className="text-foreground">Status Page:</strong> status.cropxon.com</p>
                <p><strong className="text-foreground">SLA Inquiries:</strong> sla@cropxon.com</p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
};

export default ServiceLevelAgreement;
