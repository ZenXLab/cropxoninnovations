import { Helmet } from "react-helmet-async";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BackToTop";
import { Shield, Lock, Eye, Server, FileCheck, AlertTriangle } from "lucide-react";

const SecurityPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Security Policy — CropXon Innovations</title>
        <meta name="description" content="Security Policy outlining CropXon Innovations' commitment to protecting data and maintaining enterprise-grade security standards." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-20 pb-12">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            {/* Header */}
            <div className="mb-8">
              <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Security</p>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-wide mb-3">
                Security Policy
              </h1>
              <p className="text-muted-foreground">
                Last updated: December 14, 2025
              </p>
            </div>

            {/* Security Commitment */}
            <div className="p-6 bg-card border border-border rounded-sm mb-8">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-display text-lg font-bold text-foreground mb-2">Our Security Commitment</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    At CropXon Innovations, security is not an afterthought—it's foundational. We build our platforms with security-first principles, ensuring enterprise-grade protection for all our clients' data and operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">1. Security Framework</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our security program is built on industry-leading frameworks and standards:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                  <li>OWASP Application Security Verification Standard (ASVS)</li>
                  <li>NIST Cybersecurity Framework</li>
                  <li>ISO 27001 aligned practices</li>
                  <li>SOC 2 Type II compliance roadmap</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">2. Data Protection</h2>
                
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 bg-card border border-border rounded-sm">
                    <Lock className="w-5 h-5 text-accent mb-3" />
                    <h4 className="font-semibold text-foreground mb-2">Encryption at Rest</h4>
                    <p className="text-muted-foreground text-sm">
                      All data is encrypted using AES-256 encryption standards.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-card border border-border rounded-sm">
                    <Server className="w-5 h-5 text-accent mb-3" />
                    <h4 className="font-semibold text-foreground mb-2">Encryption in Transit</h4>
                    <p className="text-muted-foreground text-sm">
                      All communications secured with TLS 1.3 encryption.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-card border border-border rounded-sm">
                    <Eye className="w-5 h-5 text-accent mb-3" />
                    <h4 className="font-semibold text-foreground mb-2">Access Controls</h4>
                    <p className="text-muted-foreground text-sm">
                      Role-based access control (RBAC) with principle of least privilege.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-card border border-border rounded-sm">
                    <FileCheck className="w-5 h-5 text-accent mb-3" />
                    <h4 className="font-semibold text-foreground mb-2">Audit Logging</h4>
                    <p className="text-muted-foreground text-sm">
                      Comprehensive audit trails for all system activities.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">3. Secure Development Lifecycle</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We follow a rigorous Secure Software Development Lifecycle (SSDLC):
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                  <li><strong className="text-foreground">Design Review:</strong> Security review at the design phase</li>
                  <li><strong className="text-foreground">Code Review:</strong> Mandatory peer review with security focus</li>
                  <li><strong className="text-foreground">Static Analysis:</strong> Automated code scanning for vulnerabilities</li>
                  <li><strong className="text-foreground">Dynamic Testing:</strong> Runtime security testing before deployment</li>
                  <li><strong className="text-foreground">Penetration Testing:</strong> Regular third-party security assessments</li>
                  <li><strong className="text-foreground">Dependency Scanning:</strong> Continuous monitoring of third-party libraries</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">4. Infrastructure Security</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Cloud infrastructure with geo-redundancy</li>
                  <li>Network segmentation and firewalls</li>
                  <li>DDoS protection and rate limiting</li>
                  <li>Intrusion detection and prevention systems</li>
                  <li>Regular vulnerability assessments</li>
                  <li>24/7 security monitoring and alerting</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">5. Authentication & Authorization</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Multi-factor authentication (MFA) support</li>
                  <li>Single Sign-On (SSO) integration for enterprise clients</li>
                  <li>OAuth 2.0 and OpenID Connect standards</li>
                  <li>Session management with secure token handling</li>
                  <li>Brute force protection and account lockout policies</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">6. Incident Response</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain a comprehensive incident response plan:
                </p>
                <div className="space-y-4 mt-4">
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-mono text-sm">1</span>
                    <div>
                      <p className="text-foreground font-medium">Detection</p>
                      <p className="text-muted-foreground text-sm">Automated monitoring and alerting systems</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-mono text-sm">2</span>
                    <div>
                      <p className="text-foreground font-medium">Containment</p>
                      <p className="text-muted-foreground text-sm">Rapid isolation of affected systems</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-mono text-sm">3</span>
                    <div>
                      <p className="text-foreground font-medium">Eradication</p>
                      <p className="text-muted-foreground text-sm">Removal of threat and system hardening</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-mono text-sm">4</span>
                    <div>
                      <p className="text-foreground font-medium">Recovery</p>
                      <p className="text-muted-foreground text-sm">Restoration of services with validation</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-mono text-sm">5</span>
                    <div>
                      <p className="text-foreground font-medium">Post-Incident Review</p>
                      <p className="text-muted-foreground text-sm">Analysis and improvement implementation</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">7. Vulnerability Disclosure</h2>
                <div className="p-4 bg-card border border-border rounded-sm">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-foreground font-medium mb-2">Responsible Disclosure Program</p>
                      <p className="text-muted-foreground text-sm">
                        We welcome security researchers to report vulnerabilities responsibly. Please send reports to security@cropxon.com with detailed information about the vulnerability.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">8. Employee Security</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Background checks for all employees</li>
                  <li>Regular security awareness training</li>
                  <li>Secure development training for engineers</li>
                  <li>Clean desk and clear screen policies</li>
                  <li>Confidentiality agreements</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">9. Contact Security Team</h2>
                <div className="mt-4 p-4 bg-card border border-border rounded-sm">
                  <p className="text-foreground font-medium">Security Team</p>
                  <p className="text-foreground font-medium">CropXon Innovations Private Limited</p>
                  <p className="text-muted-foreground text-sm mt-2">Security Reports: security@cropxon.com</p>
                  <p className="text-muted-foreground text-sm">General Inquiries: support@cropxon.com</p>
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

export default SecurityPolicy;
