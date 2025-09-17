import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DetailsSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About Digital Signature Certificate (DSC)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold mb-2">
            What is Digital Signature Certificate (DSC)?
          </h2>
          <p>
            A Digital Signature Certificate (DSC) is a secure digital key issued
            by a Certifying Authority (CA) to verify and authenticate the
            identity of an individual or organisation. It uses public key
            encryption to create a unique digital signature for electronically
            signing documents.
          </p>
          <p className="mt-2">
            DSCs are commonly required for submitting various online forms to
            the Government of India and are widely used for signing emails,
            e-documents, and other digital transactions. They ensure the
            authenticity, integrity, and confidentiality of the information by
            leveraging encryption technology.
          </p>
          <p className="mt-2">Each DSC includes details such as:</p>
          <ul className="list-disc list-inside mt-2 ml-4">
            <li>The user's name</li>
            <li>Pin code</li>
            <li>Country</li>
            <li>Email address</li>
            <li>Date of issuance</li>
            <li>Name of the certifying authority</li>
          </ul>
          <p className="mt-2">
            Digital Signature Certificates are typically valid for one to two
            years and can be renewed upon expiry.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Advantages of a Digital Signature Certificate (DSC)
          </h2>
          <h3 className="font-semibold mt-4">Authentication</h3>
          <p>
            A DSC helps verify the identity of the certificate holder, ensuring
            that the personal and organisational details used in online
            transactions are genuine.
          </p>
          <h3 className="font-semibold mt-4">Reduced Cost and Time</h3>
          <p>
            Digital signatures eliminate the need for printing, scanning, and
            physically signing documents. Files can be signed and sent
            electronically in seconds, saving both time and operational costs.
            Moreover, DSC holders do not need to be physically present to
            authorise or approve transactions.
          </p>
          <h3 className="font-semibold mt-4">Data Integrity</h3>
          <p>
            Once a document is digitally signed, it cannot be altered or
            tampered with, ensuring the information remains intact and secure.
            This feature is especially valuable in official or legal
            transactions where data consistency is critical.
          </p>
          <h3 className="font-semibold mt-4">Document Authenticity</h3>
          <p>
            Digitally signed documents provide a high level of confidence and
            trust to recipients. They verify that the content originates from a
            legitimate source, reducing the risk of fraud or forgery and
            allowing stakeholders to act on the document with assurance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Importance of DSC for Fulfilling Statutory Compliances
          </h2>
          <p>
            A Digital Signature Certificate (DSC) is essential for meeting
            various statutory and regulatory requirements mandated by government
            authorities.
          </p>
          <h3 className="font-semibold mt-4">Income Tax Filing:</h3>
          <p>
            Individuals and entities whose accounts are subject to audit under
            the Income Tax Act must mandatorily file their Income Tax Returns
            (ITR) using a DSC. It ensures secure submission and authentication
            of tax documents.
          </p>
          <h3 className="font-semibold mt-4">
            Ministry of Corporate Affairs (MCA):
          </h3>
          <p>
            The MCA requires all companies to file statutory documents, forms,
            and returns (like DIR-3, AOC-4, MGT-7, etc.) digitally using a valid
            DSC. This ensures data integrity and legal compliance in company
            filings.
          </p>
          <h3 className="font-semibold mt-4">Goods and Services Tax (GST):</h3>
          <p>
            For companies and LLPs, GST registration and subsequent filings
            (such as GSTR-1, GSTR-3B, refund applications, and amendments) must
            be authenticated using a DSC. It verifies the identity of the
            authorised signatory and secures the transaction.
          </p>
          <h3 className="font-semibold mt-4">Import and Export (DGFT):</h3>
          <p>
            Businesses dealing with international trade must use a DSC for
            filing applications with the Director General of Foreign Trade
            (DGFT), such as obtaining an Import Export Code (IEC), filing
            licensing applications, and other related services.
          </p>
          <h3 className="font-semibold mt-4">
            Employees’ Provident Fund (EPFO):
          </h3>
          <p>
            Employers are required to use a DSC for filing returns, transferring
            funds, and approving KYC details of employees on the EPFO portal.
          </p>
          <h3 className="font-semibold mt-4">E-Tendering and E-Procurement:</h3>
          <p>
            Government and public sector undertakings mandate the use of DSCs
            for participating in e-tendering processes, submitting bids, and
            signing contracts electronically.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Certifying Authorities for Issuance of a Digital Signature
            Certificate
          </h2>
          <p>
            The Controller of Certifying Authorities (CCA), operating under the
            Ministry of Electronics and Information Technology (MeitY),
            Government of India, is the regulatory body responsible for
            overseeing the issuance and management of Digital Signature
            Certificates (DSCs) in India.
          </p>
          <p className="mt-2">
            To facilitate this, the CCA has licensed multiple Certifying
            Authorities (CAs) to issue DSCs to individuals, businesses, and
            government entities. Currently, 15 authorised Certifying Authorities
            are recognised for this purpose.
          </p>
          <p className="mt-2">
            These CAs are entrusted with the task of verifying applicant
            identity and issuing DSCs in compliance with the guidelines laid
            down under the Information Technology Act, 2000.
          </p>
          <p className="mt-2">
            A list of licensed Certifying Authorities, along with their official
            websites, is given here.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Types of Digital Signature Certificate?
          </h2>
          <p>
            Digital Signature Certificates are categorised based on their
            functionality. Depending on the purpose, users can opt for one of
            the following types:
          </p>
          <h3 className="font-semibold mt-4">1. Sign DSC</h3>
          <p>
            A Sign DSC is used solely for digitally signing documents. It
            verifies the identity of the signer and ensures that the signed
            content remains unchanged and authentic. This type of DSC is
            commonly used for tasks such as filing Income Tax Returns (ITR),
            submitting GST returns, filing forms with the Ministry of Corporate
            Affairs (MCA), and signing PDF documents, contracts, and other
            online files. It is ideal when the primary requirement is to assure
            the recipient of the document's legitimacy and the signer’s
            identity.
          </p>
          <h3 className="font-semibold mt-4">2. Encrypt DSC</h3>
          <p>
            An Encrypt DSC is designed for the encryption of sensitive data,
            protecting it from unauthorized access. It transforms readable data
            into an unreadable format, accessible only by the intended recipient
            with the correct decryption key. This type is especially useful for
            uploading documents on e-tender portals, securing e-commerce
            transactions, sharing legal documents, and sending confidential
            business or personal information. Encrypt DSCs are critical for
            individuals or organizations that prioritize data confidentiality in
            digital communication.
          </p>
          <h3 className="font-semibold mt-4">3. Sign &amp; Encrypt DSC</h3>
          <p>
            The Sign &amp; Encrypt DSC combines the functionalities of both
            signing and encryption, offering complete digital security. It
            ensures not only the authenticity and integrity of the data but also
            maintains confidentiality throughout the transaction. This DSC
            certificate is widely used for filing government forms and
            applications, exchanging sensitive business data, and submitting
            legal or regulatory documents. It is best suited for users who need
            a comprehensive solution to both verify their identity and protect
            their data during electronic exchanges.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Classes of Digital Signature Certificates (DSCs)
          </h2>
          <p>
            The type of applicant and the intended purpose determine the class
            of Digital Signature Certificate (DSC) one should apply for.
            Certifying Authorities in India issue three classes of DSCs.
          </p>
          <h3 className="font-semibold mt-4">Class 1 Certificate</h3>
          <p>
            Class 1 Certificates are issued to individuals or private
            subscribers and are used to confirm the user’s name and email
            address as listed in the database of the Certifying Authority. These
            certificates are generally used for securing basic personal
            communications and do not hold legal validity for signing official
            documents.
          </p>
          <h3 className="font-semibold mt-4">Class 2 Certificate</h3>
          <p>
            Class 2 Certificates were earlier issued to individuals and
            authorised signatories for e-filing forms on various government
            portals such as the Ministry of Corporate Affairs (MCA), Income Tax
            Department, and GST portal. However, as of January 1, 2021, the
            Controller of Certifying Authorities (CCA) has discontinued the
            issuance of Class 2 Certificates. All functions previously served by
            Class 2 Certificates must now be fulfilled using Class 3
            Certificates.
          </p>
          <h3 className="font-semibold mt-4">Class 3 Certificate</h3>
          <p>
            Class 3 Certificates are currently the highest level of DSCs in use
            and offer the highest degree of security. These are used for online
            participation in e-auctions and e-tendering processes across India.
            Vendors and individuals participating in such online processes are
            required to obtain a Class 3 DSC. Following the discontinuation of
            Class 2 certificates, anyone filing forms with the Registrar of
            Companies (ROC), submitting income tax returns, customs filings, GST
            applications, patent and trademark applications, or other official
            documents online is now required to use a Class 3 DSC Certificate.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Digital Signature Certificate Validity
          </h2>
          <p>
            The validity of a Digital Signature Certificate (DSC) online ranges
            from 1 to 3 years, as specified by the Controller of Certifying
            Authorities (CCA). When purchasing a DSC, you can choose a validity
            period that suits your needs, with a minimum of one year and a
            maximum of three years.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            How to get a Digital Signature Certificate?
          </h2>
          <p>
            Follow these simple steps to apply for and receive your Digital
            Signature Certificate with ease.
          </p>
          <ol className="list-decimal list-inside space-y-2 mt-2">
            <li>
              <strong>
                Visit a Licensed Certifying Authority (CA) Website:
              </strong>{" "}
              Go to the website of any licensed CA authorized to issue DSCs.
            </li>
            <li>
              <strong>Select Class 3 DSC Application:</strong> Choose the option
              for Class 3 DSC registration or application.
            </li>
            <li>
              <strong>Fill in the Application Form:</strong> Enter required
              details such as:
              <ul className="list-disc list-inside ml-6">
                <li>Class of DSC</li>
                <li>Validity period</li>
                <li>Type of certificate (sign only or sign and encrypt)</li>
                <li>Applicant’s name and contact details</li>
                <li>Residential address</li>
                <li>GST number (if applicable)</li>
                <li>Details of identity and address proof documents</li>
              </ul>
            </li>
            <li>
              <strong>Upload Recent Photograph and E-sign Declaration:</strong>{" "}
              Upload a recent passport-sized photograph and electronically sign
              the declaration form.
            </li>
            <li>
              <strong>Upload Supporting Documents:</strong> Upload scanned
              copies of proof of identity and address.
              <br />
              <span className="text-sm italic">
                Note: If Aadhaar-based eKYC authentication is available and
                selected, you may skip uploading documents.
              </span>
            </li>
            <li>
              <strong>Attestation Process:</strong> Provide details of the
              attestation officer who will verify your identity, or visit the CA
              office with original documents and self-attested copies for manual
              verification.
            </li>
            <li>
              <strong>Make Payment:</strong> Complete the payment for DSC
              issuance using the CA’s online payment gateway.
            </li>
            <li>
              <strong>Verification by Certifying Authority:</strong> The CA will
              verify your application and documents.
            </li>
            <li>
              <strong>Receive DSC Electronically:</strong> Once verified, the CA
              will issue the DSC electronically and send it to you via email or
              allow you to download it from their portal.
            </li>
          </ol>
          <p className="mt-2">
            Don’t worry about this cumbersome process—our experts will guide you
            every step of the way and help you obtain your DSC online quickly
            and effortlessly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Digital Signature Certificate Renewal
          </h2>
          <p>
            As per the guidelines of the Controller of Certification Agencies
            (CCA), renewing your DSC online requires fresh identity
            verification. You can easily renew your Digital Signature
            Certificate by following the same process as applying for a new DSC
            on the United Fillings website.
          </p>
        </section>
      </CardContent>
    </Card>
  );
};

export default DetailsSection;
