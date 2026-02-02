import { Helmet } from "react-helmet-async";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BackToTop";

const DataProcessingAgreement = () => {
  return (
    <>
      <Helmet>
        <title>Data Processing Agreement (DPA) | OriginX Labs</title>
        <meta name="description" content="OriginX Labs Data Processing Agreement for enterprise clients with GDPR compliance details and data protection commitments." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-background pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-3">
              Data Protection
            </p>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-3">
              Data Processing Agreement
            </h1>
            <p className="text-muted-foreground">
              Effective Date: January 1, 2026 | Version 2.0 | GDPR Compliant
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                1. Introduction and Scope
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This Data Processing Agreement ("DPA") forms part of the Master Service Agreement or Terms of 
                Service ("Agreement") between OriginX Labs Private Limited, a company registered under the 
                laws of India with CIN U62010OD2026PTC052XXX ("Processor," "we," "us," or "OriginX Labs"), and the 
                Customer ("Controller," "you," or "your").
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This DPA applies to the processing of Personal Data by OriginX Labs on behalf of the Controller in 
                connection with the provision of OriginX Labs services, including but not limited to ATLAS, TRACEFLOW, 
                OriginX Cloud, and associated platforms.
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
                The subject matter of data processing is the provision of OriginX Labs services as described in the 
                Agreement. Processing will continue for the duration of the Agreement and for such additional 
                period as required by applicable law or as necessary to complete outstanding obligations.
              </p>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-3">3.2 Nature and Purpose</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                OriginX Labs processes Personal Data for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provision, maintenance, and improvement of OriginX Labs services</li>
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
                OriginX Labs does not require the processing of special categories of data (as defined in Article 9 GDPR) 
                to provide its services. If Controller submits such data, Controller warrants that it has obtained 
                appropriate legal basis and explicit consent where required.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                4. Processor Obligations
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                OriginX Labs, as Processor, agrees to:
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
                <li>Ensure lawful basis exists for all Personal Data processing instructions provided to OriginX Labs</li>
                <li>Provide clear, documented instructions regarding Personal Data processing</li>
                <li>Obtain and maintain all necessary consents from Data Subjects where required</li>
                <li>Comply with all applicable data protection laws in its use of the services</li>
                <li>Ensure the accuracy and legality of Personal Data submitted to OriginX Labs</li>
                <li>Implement appropriate security measures for data in transit and at rest</li>
                <li>Notify OriginX Labs promptly of any Data Subject requests or complaints</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                6. Security Measures
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                OriginX Labs implements the following technical and organizational security measures:
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
                The Controller provides general authorization for OriginX Labs to engage Sub-processors. OriginX Labs maintains 
                a list of current Sub-processors at privacy.originxlabs.com/subprocessors, which includes the Sub-processor's 
                name, location, and processing activities.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                OriginX Labs will notify the Controller at least 30 days before adding or replacing any Sub-processor. 
                The Controller may object to such changes within 14 days of notification. If the Controller reasonably 
                objects and the parties cannot resolve the matter, either party may terminate the affected service 
                without penalty.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                OriginX Labs imposes data protection obligations on Sub-processors through written contracts that provide 
                at least the same level of protection as this DPA.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                8. International Data Transfers
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                OriginX Labs primarily processes Personal Data in India. Where transfers to countries outside the 
                European Economic Area (EEA), UK, or jurisdictions deemed adequate by the European Commission 
                are necessary, OriginX Labs ensures appropriate safeguards through:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>Standard Contractual Clauses (SCCs) as approved by the European Commission (Decision 2021/914)</li>
                <li>Binding Corporate Rules where applicable</li>
                <li>Adequacy decisions by the European Commission</li>
                <li>Other lawful transfer mechanisms under GDPR Article 46</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The Standard Contractual Clauses are incorporated into this DPA by reference. OriginX Labs conducts 
                Transfer Impact Assessments (TIAs) for transfers to third countries and implements supplementary 
                measures where required.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                9. Data Subject Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                OriginX Labs assists the Controller in responding to Data Subject requests to exercise their rights under 
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
                OriginX Labs will notify the Controller within 48 hours of receiving any Data Subject request and will 
                assist in fulfilling such requests within the timeframes required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                10. Personal Data Breach Notification
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                OriginX Labs will notify the Controller without undue delay, and in any event within 48 hours, after 
                becoming aware of a Personal Data Breach. Such notification will include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>Description of the nature of the breach, including categories and approximate number of Data Subjects and records affected</li>
                <li>Name and contact details of OriginX Labs' Data Protection Officer or other contact point</li>
                <li>Description of likely consequences of the breach</li>
                <li>Description of measures taken or proposed to address the breach and mitigate adverse effects</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                OriginX Labs will cooperate with the Controller's investigation and provide reasonable assistance in 
                notifying supervisory authorities and affected Data Subjects where required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                11. Audits and Inspections
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                OriginX Labs shall make available to the Controller all information necessary to demonstrate compliance 
                with this DPA and allow for and contribute to audits, including inspections, conducted by the 
                Controller or an auditor mandated by the Controller.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>Audits must be conducted with at least 30 days advance written notice</li>
                <li>Audits shall be conducted during normal business hours and shall not unreasonably interfere with OriginX Labs' operations</li>
                <li>The Controller shall bear all costs associated with any audit</li>
                <li>OriginX Labs may require the auditor to sign a confidentiality agreement</li>
                <li>OriginX Labs provides annual SOC 2 Type II and ISO 27001 audit reports upon request</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                12. Data Retention and Deletion
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Upon termination of the Agreement, OriginX Labs shall, at the Controller's election, delete or return 
                all Personal Data and delete existing copies within 90 days, unless applicable law requires retention.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The Controller may request data export in standard formats (JSON, CSV) through the OriginX Labs platform 
                or by contacting privacy@originxlabs.com. OriginX Labs will provide certification of deletion upon request.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                13. Governing Law and Jurisdiction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This DPA shall be governed by and construed in accordance with the laws of India. Any disputes 
                arising out of or in connection with this DPA shall be subject to the exclusive jurisdiction of 
                the courts located in Bhubaneswar, Odisha, India.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                For matters involving EU/UK data protection law, the provisions of the GDPR and applicable local 
                law shall apply to the extent they conflict with Indian law.
              </p>
            </section>

            <section className="bg-muted/30 border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Contact Information
              </h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Data Protection Officer:</strong> dpo@originxlabs.com</p>
                <p><strong className="text-foreground">Privacy Inquiries:</strong> privacy@originxlabs.com</p>
                <p><strong className="text-foreground">Legal Department:</strong> legal@originxlabs.com</p>
                <p className="mt-4"><strong className="text-foreground">Mailing Address:</strong></p>
                <p>OriginX Labs Pvt. Ltd.</p>
                <p>Data Protection Officer</p>
                <p>Bhubaneswar, Odisha</p>
                <p>India</p>
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
