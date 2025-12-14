import { Helmet } from "react-helmet-async";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BackToTop";

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions — CropXon Innovations</title>
        <meta name="description" content="Terms and Conditions governing the use of CropXon Innovations platforms, services, and products." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            {/* Header */}
            <div className="mb-12">
              <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">Legal</p>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-wide mb-4">
                Terms and Conditions
              </h1>
              <p className="text-muted-foreground">
                Last updated: December 14, 2025
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using any services, platforms, or products provided by CropXon Innovations Private Limited ("CropXon," "we," "us," or "our"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, you must not access or use our services.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  These terms apply to all visitors, users, and others who access or use our services, including but not limited to ATLAS, TRACEFLOW, CropXon Cloud, OriginX Labs, and OpZeniX platforms.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">2. Definitions</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">"Services"</strong> refers to all platforms, software, APIs, and products offered by CropXon Innovations.</li>
                  <li><strong className="text-foreground">"User"</strong> refers to any individual or entity accessing or using our Services.</li>
                  <li><strong className="text-foreground">"Content"</strong> refers to all information, data, text, software, graphics, or other materials uploaded, downloaded, or appearing on our Services.</li>
                  <li><strong className="text-foreground">"Enterprise Client"</strong> refers to organizations with separate enterprise agreements.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">3. Use of Services</h2>
                <h3 className="font-semibold text-foreground mt-6 mb-3">3.1 Eligibility</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You must be at least 18 years of age or the legal age of majority in your jurisdiction to use our Services. By using our Services, you represent and warrant that you meet these requirements.
                </p>
                
                <h3 className="font-semibold text-foreground mt-6 mb-3">3.2 Account Registration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You may be required to create an account to access certain features. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
                </p>

                <h3 className="font-semibold text-foreground mt-6 mb-3">3.3 Acceptable Use</h3>
                <p className="text-muted-foreground leading-relaxed">You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                  <li>Use our Services for any unlawful purpose or in violation of any applicable laws</li>
                  <li>Attempt to gain unauthorized access to any portion of our Services</li>
                  <li>Interfere with or disrupt the integrity or performance of our Services</li>
                  <li>Transmit any malware, viruses, or other malicious code</li>
                  <li>Reverse engineer, decompile, or disassemble any portion of our Services</li>
                  <li>Use our Services to infringe on intellectual property rights of others</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">4. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All intellectual property rights in our Services, including but not limited to software, designs, trademarks, and content, are owned by CropXon Innovations or its licensors. You are granted a limited, non-exclusive, non-transferable license to use our Services in accordance with these Terms.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  The CropXon name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of CropXon Innovations Private Limited. You may not use such marks without our prior written permission.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">5. Service Level Agreements</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Enterprise clients may be subject to separate Service Level Agreements (SLAs) that supersede these general terms. Standard service availability targets are provided "as-is" for non-enterprise users.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, CROPXON INNOVATIONS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">7. Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify, defend, and hold harmless CropXon Innovations and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your access to or use of our Services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">8. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Odisha, India.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">9. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of our Services after such changes constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">10. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms and Conditions, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-card border border-border rounded-sm">
                  <p className="text-foreground font-medium">CropXon Innovations Private Limited</p>
                  <p className="text-muted-foreground text-sm mt-2">Email: legal@cropxon.com</p>
                  <p className="text-muted-foreground text-sm">Registered Office: Odisha, India</p>
                  <p className="text-muted-foreground text-sm">CIN: U62010OD2025PTC051089</p>
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

export default TermsAndConditions;
