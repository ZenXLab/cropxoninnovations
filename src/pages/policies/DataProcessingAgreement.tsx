import { Helmet } from "react-helmet-async";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BackToTop";

const DataProcessingAgreement = () => {
  return (
    <>
      <Helmet>
        <title>Data Processing Agreement (DPA) | CropXon Innovations</title>
        <meta name="description" content="CropXon Innovations Data Processing Agreement for enterprise clients with GDPR compliance details and data protection commitments." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-4">
              Data Protection
            </p>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-4">
              Data Processing Agreement
            </h1>
            <p className="text-muted-foreground">
              Effective Date: January 1, 2025 | Version 1.0 | GDPR Compliant
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                1. Introduction and Scope
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This Data Processing Agreement ("DPA") forms part of the Master Service Agreement or Terms of 
                Service ("Agreement") between CropXon Innovations Private Limited, a company registered under the 
                laws of India with CIN U62010OD2025PTC051089 ("Processor," "we," "us," or "CropXon"), and the 
                Customer ("Controller," "you," or "your").
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This DPA applies to the processing of Personal Data by CropXon on behalf of the Controller in 
                connection with the provision of CropXon services, including but not limited to ATLAS, TRACEFLOW, 
                CropXon Cloud, and associated platforms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This DPA is designed to ensure compliance with the General Data Protection Regulation (EU) 2016/679 
                ("GDPR"), the UK Data Protection Act 2018 and UK GDPR, the California Consumer Privacy Act ("CCPA"), 
                India's Digital Personal Data Protection Act 2023, and other applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                2. Definitions
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <p><strong className="text-foreground">"Personal Data"</strong> means any information relating to an identified or identifiable natural person ('Data Subject') as defined in Article 4(1) of the GDPR.</p>
                <p><strong className="text-foreground">"Processing"</strong> means any operation performed on Personal Data, including collection, recording, organization, structuring, storage, adaptation, retrieval, consultation, use, disclosure, erasure, or destruction.</p>
                <p><strong className="text-foreground">"Controller"</strong> means the entity that determines the purposes and means of the processing of Personal Data.</p>
                <p><strong className="text-foreground">"Processor"</strong> means the entity that processes Personal Data on behalf of the Controller.</p>
                <p><strong className="text-foreground">"Sub-processor"</strong> means any third party engaged by the Processor to carry out specific processing activities on behalf of the Controller.</p>
                <p><strong className="text-foreground">"Data Subject"</strong> means the identified or identifiable natural person to whom Personal Data relates.</p>
                <p><strong className="text-foreground">"Personal Data Breach"</strong> means a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, Personal Data.</p>
                <p><strong className="text-foreground">"Standard Contractual Clauses" or "SCCs"</strong> means the standard contractual clauses approved by the European Commission for international transfers of Personal Data.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                3. Processing Details
              </h2>
              
              <h3 className="text-lg font-medium text-foreground mt-6 mb-3">3.1 Subject Matter and Duration</h3>
              <p className="text-muted-foreground leading-relaxed">
                The subject matter of data processing is the provision of CropXon services as described in the 
                Agreement. Processing will continue for the duration of the Agreement and for such additional 
                period as required by applicable law or as necessary to complete outstanding obligations.
              </p>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-3">3.2 Nature and Purpose</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                CropXon processes Personal Data for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provision, maintenance, and improvement of CropXon services</li>
                <li>Customer account management and authentication</li>
                <li>Technical support and incident resolution</li>
                <li>Service analytics and performance optimization</li>
                <li>Compliance with legal obligations</li>
                <li>Security monitoring and fraud prevention</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-3">3.3 Categories of Data Subjects</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Customer employees and authorized users</li>
                <li>Customer's customers and end-users</li>
                <li>Contractors and third-party representatives</li>
                <li>Other individuals whose data is submitted by the Controller</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-3">3.4 Categories of Personal Data</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Identity data: names, user IDs, employee identifiers</li>
                <li>Contact data: email addresses, phone numbers, addresses</li>
                <li>Technical data: IP addresses, device identifiers, browser data, usage logs</li>
                <li>Professional data: job titles, departments, organizational affiliations</li>
                <li>Content data: files, documents, communications submitted through the services</li>
                <li>Other categories as specified by Controller</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-3">3.5 Special Categories of Data</h3>
              <p className="text-muted-foreground leading-relaxed">
                CropXon does not require the processing of special categories of data (as defined in Article 9 GDPR) 
                to provide its services. If Controller submits such data, Controller warrants that it has obtained 
                appropriate legal basis and explicit consent where required.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                4. Processor Obligations
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                CropXon, as Processor, agrees to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Process Personal Data only on documented instructions from the Controller, including with regard to transfers to third countries, unless required by applicable law</li>
                <li>Ensure that persons authorized to process Personal Data have committed themselves to confidentiality or are under appropriate statutory obligation of confidentiality</li>
                <li>Implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk</li>
                <li>Respect the conditions for engaging Sub-processors as set out in Section 7</li>
                <li>Assist the Controller in responding to requests from Data Subjects exercising their rights</li>
                <li>Assist the Controller in ensuring compliance with Articles 32-36 of the GDPR</li>
                <li>Delete or return all Personal Data to the Controller at the end of the processing, unless retention is required by law</li>
                <li>Make available all information necessary to demonstrate compliance and allow for audits</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                5. Controller Obligations
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Controller warrants and agrees to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Ensure lawful basis exists for all Personal Data processing instructions provided to CropXon</li>
                <li>Provide clear, documented instructions regarding Personal Data processing</li>
                <li>Obtain and maintain all necessary consents from Data Subjects where required</li>
                <li>Comply with all applicable data protection laws in its use of the services</li>
                <li>Ensure the accuracy and legality of Personal Data submitted to CropXon</li>
                <li>Implement appropriate security measures for data in transit and at rest</li>
                <li>Notify CropXon promptly of any Data Subject requests or complaints</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                6. Security Measures
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                CropXon implements the following technical and organizational security measures:
              </p>
              
              <h3 className="text-lg font-medium text-foreground mt-6 mb-3">6.1 Technical Measures</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>AES-256 encryption for data at rest</li>
                <li>TLS 1.3 encryption for data in transit</li>
                <li>Multi-factor authentication for system access</li>
                <li>Role-based access controls (RBAC)</li>
                <li>Network segmentation and firewalls</li>
                <li>Intrusion detection and prevention systems</li>
                <li>Regular vulnerability scanning and penetration testing</li>
                <li>Automated backup and disaster recovery systems</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-3">6.2 Organizational Measures</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Information security policies and procedures</li>
                <li>Employee security awareness training</li>
                <li>Background checks for personnel handling Personal Data</li>
                <li>Incident response procedures</li>
                <li>Business continuity and disaster recovery plans</li>
                <li>Regular security audits and assessments</li>
                <li>Vendor security assessment program</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                7. Sub-processors
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The Controller provides general authorization for CropXon to engage Sub-processors. CropXon maintains 
                a list of current Sub-processors at privacy.cropxon.com/subprocessors, which includes the Sub-processor's 
                name, location, and processing activities.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                CropXon will notify the Controller at least 30 days before adding or replacing any Sub-processor. 
                The Controller may object to such changes within 14 days of notification. If the Controller reasonably 
                objects and the parties cannot resolve the matter, either party may terminate the affected service 
                without penalty.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                CropXon imposes data protection obligations on Sub-processors through written contracts that provide 
                at least the same level of protection as this DPA.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                8. International Data Transfers
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                CropXon primarily processes Personal Data in India. Where transfers to countries outside the 
                European Economic Area (EEA), UK, or jurisdictions deemed adequate by the European Commission 
                are necessary, CropXon ensures appropriate safeguards through:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>Standard Contractual Clauses (SCCs) as approved by the European Commission (Decision 2021/914)</li>
                <li>Binding Corporate Rules where applicable</li>
                <li>Adequacy decisions by the European Commission</li>
                <li>Other lawful transfer mechanisms under GDPR Article 46</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The Standard Contractual Clauses are incorporated into this DPA by reference. CropXon conducts 
                Transfer Impact Assessments (TIAs) for transfers to third countries and implements supplementary 
                measures where required.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                9. Data Subject Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                CropXon assists the Controller in responding to Data Subject requests to exercise their rights under 
                applicable data protection laws, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Right of Access:</strong> Obtain confirmation of processing and access to Personal Data</li>
                <li><strong className="text-foreground">Right to Rectification:</strong> Correct inaccurate or incomplete Personal Data</li>
                <li><strong className="text-foreground">Right to Erasure:</strong> Request deletion of Personal Data ("right to be forgotten")</li>
                <li><strong className="text-foreground">Right to Restriction:</strong> Limit processing in certain circumstances</li>
                <li><strong className="text-foreground">Right to Portability:</strong> Receive Personal Data in structured, machine-readable format</li>
                <li><strong className="text-foreground">Right to Object:</strong> Object to processing based on legitimate interests</li>
                <li><strong className="text-foreground">Rights Related to Automated Decision-Making:</strong> Not be subject to purely automated decisions with legal effects</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                CropXon will notify the Controller within 48 hours of receiving any Data Subject request and will 
                assist in fulfilling such requests within the timeframes required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                10. Personal Data Breach Notification
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                CropXon will notify the Controller without undue delay, and in any event within 48 hours, after 
                becoming aware of a Personal Data Breach. Such notification will include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>Description of the nature of the breach, including categories and approximate number of Data Subjects and records affected</li>
                <li>Name and contact details of CropXon's Data Protection Officer or other contact point</li>
                <li>Description of likely consequences of the breach</li>
                <li>Description of measures taken or proposed to address the breach and mitigate adverse effects</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                CropXon will cooperate with the Controller's investigation and provide reasonable assistance in 
                notifying supervisory authorities and affected Data Subjects where required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                11. Audits and Assessments
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                CropXon will make available to the Controller all information necessary to demonstrate compliance 
                with this DPA and applicable data protection laws.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong className="text-foreground">Audit Rights:</strong> The Controller may conduct audits, including 
                inspections, subject to: (a) reasonable advance notice of at least 30 days; (b) during normal business 
                hours; (c) without disrupting CropXon's operations; and (d) subject to confidentiality obligations.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong className="text-foreground">Third-Party Audits:</strong> CropXon undergoes annual SOC 2 Type II 
                audits and will provide audit reports to the Controller upon request under appropriate confidentiality 
                protections.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                12. Data Retention and Deletion
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Upon termination of the Agreement or upon Controller's written request, CropXon will:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>Return all Personal Data to the Controller in a commonly used, machine-readable format; or</li>
                <li>Securely delete all Personal Data, including from backup systems, within 90 days</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                CropXon may retain Personal Data where required by applicable law, regulation, or legal proceedings, 
                in which case CropXon will protect such data and limit processing to compliance with legal requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                13. Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Each party's liability under this DPA is subject to the limitations and exclusions set forth in 
                the Agreement. Nothing in this DPA limits either party's liability for: (a) death or personal injury 
                caused by negligence; (b) fraud or fraudulent misrepresentation; or (c) any liability that cannot 
                be limited or excluded by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                14. Governing Law and Jurisdiction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This DPA is governed by and construed in accordance with the laws of India, without regard to 
                conflict of law principles. For disputes involving EU Personal Data, the courts of the member state 
                where the Controller is established shall have jurisdiction. For all other disputes, the courts of 
                Bhubaneswar, Odisha, India shall have exclusive jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                15. Amendments
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                CropXon may update this DPA to reflect changes in applicable data protection laws or our processing 
                activities. Material changes will be communicated with at least 30 days' notice. Continued use of 
                services after the effective date of changes constitutes acceptance of the amended DPA.
              </p>
            </section>

            <section className="bg-muted/30 border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Data Protection Contact
              </h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Data Protection Officer:</strong> dpo@cropxon.com</p>
                <p><strong className="text-foreground">Privacy Inquiries:</strong> privacy@cropxon.com</p>
                <p><strong className="text-foreground">Sub-processor List:</strong> privacy.cropxon.com/subprocessors</p>
                <p><strong className="text-foreground">Legal Department:</strong> legal@cropxon.com</p>
                <p className="mt-4 text-sm">
                  CropXon Innovations Private Limited<br />
                  Registered Office: Odisha, India<br />
                  CIN: U62010OD2025PTC051089
                </p>
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

export default DataProcessingAgreement;
