import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <div className="space-y-4 text-gray-700">{children}</div>
  </div>
);

const DetailsSection = () => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-2xl">
          Importer Exporter Code (IEC Code) Registration Online
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-gray-700">
          International trade is a gateway to a world of opportunities for
          businesses in India. Whether you're looking to import goods, export
          products, or expand your business globally, having an Importer
          Exporter Code (IEC) is your key to entering the international market.
          This import and export code is issued by the Directorate General of
          Foreign Trade (DGFT), under the Ministry of Commerce. All the
          importers and exporters in India must know what is IEC Code. For
          importers, the DGFT IEC and import and export license are
          indispensable for the clearance of customs and facilitating payments
          to foreign banks, ensuring smooth international trade transactions.
          Similarly, exporters rely on the IEC to streamline the process of
          sending shipments and receiving payments from overseas clients.
        </p>
        <p className="text-gray-700">
          United Fillings is here to simplify the process for you. Our comprehensive IEC
          registration services make it easier than ever to obtain the essential
          IEC certificate and import and export license, ensuring that you're
          well-prepared to explore the global trade landscape.
        </p>
        <p className="text-center font-semibold">
          Obtain Your IEC Number Today through United Fillings!
        </p>

        <Section title="What is IEC Code (Import Export Code)?">
          <p>
            IEC Code Full Form is "Importer Exporter Code". Import and Export
            Code is to be obtained by the business entity for import into or
            export from India. Import & Export Code is popularly known as the
            IEC number. Import & Export Code is a ten-digit unique number issued
            by the Directorate General of Foreign Trade (DGFT).
          </p>
          <p>
            DGFT IEC registration certificate is mandatory for a business
            involved in import and export. Hence, before initiating an import of
            goods into India, an importer must ensure that the importing entity
            has GST registration and IE code, both of which are required to
            clear customs.
          </p>
          <p>
            If an importer does not have both GST and import and export license,
            the goods will be stuck at the port and start incurring demurrage
            charges or could be destroyed. Ensure to follow the key rules and
            regulations while engaging in the process of IEC Code Apply through
            IEC Code Login.
          </p>
        </Section>

        <Section title="Importance of Import Export Code">
          <p>
            Businesses have a great option to enter the international market
            with the export and import of the products and the services they are
            involved in. The IE code is an essential requirement while entering
            the global market as it supports the growth and development of the
            business to a certain extent. There are various advantages of
            getting an import and export code. Here we have listed a few of
            them:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-semibold">
                International market unlocks:
              </span>{" "}
              As the DGFT IEC Code is a requirement for the import and export
              business, it allows the products to reach the global market. IE
              code makes the entry of the international Indian company smoother
              and opens doors for growth and expansion.
            </li>
            <li>
              <span className="font-semibold">
                Online DGFT IEC registration:
              </span>{" "}
              The process to find the import and export code is entirely online
              and hassle-free with short document submission.
            </li>
            <li>
              <span className="font-semibold">Less document requirement:</span>{" "}
              It is not required to submit many documents to for the process of
              IEC Code apply and obtain an import and export license.
            </li>
            <li>
              <span className="font-semibold">Lifetime Validity:</span> IE Code
              is a lifetime registration valid as long as the business exists.
              Hence, there are no issues with updating, filing, and renewing
              Import Export Code registration. The IEC registration is valid
              until the company exists or the registration is not revoked or
              surrendered.
            </li>
            <li>
              <span className="font-semibold">
                Reduces illegal goods transportation:
              </span>{" "}
              The most basic requirement for the import export license is that
              you need to provide authentic information. Without giving proper
              information, IE code cannot be obtained. This criterion makes the
              transportation of illegal goods impossible.
            </li>
            <li>
              <span className="font-semibold">Availing Several Benefits:</span>{" "}
              Import and Export code registration has enormous benefits for
              importers and exporters. The registered business entities can get
              help through subsidies from the Customs, Export Promotion Council
              or other authorities. With LUT filing under GST, the exporters can
              make exports without paying taxes. If the exports are made with
              tax payment, the exporter can claim the refunds of the paid tax
              amount.
            </li>
            <li>
              <span className="font-semibold">Compliances:</span> Unlike other
              tax registration, the person carrying import or export does not
              require to fulfill any specific compliance requirements such as
              the annual filing or the return filings.
            </li>
          </ul>
        </Section>

        <Section title="Validity of DGFT IEC Code">
          <p>
            As mentioned above, IEC Code registration is permanent and valid for
            a lifetime. Hence, there will be no hassles with updating, filing,
            and renewing the import export license. It is valid till the
            business exists or the registration is not revoked or surrendered.
            Further, unlike tax registrations like GST registration or PF
            registration, the importer or exporter does not require to file any
            filings or follow any other compliance requirements like annual
            filing.
          </p>
          <p>
            As IE code registration is one-time and requires no additional
            compliance, it is recommended for all exporters & importers to
            obtain IE code after incorporation.
          </p>
        </Section>

        <Section title="Nature of the Firm obtaining an IEC">
          <p>
            The nature of the Firm obtaining an import and export
            license/registration may be any of the follows:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Proprietorship Firm</li>
            <li>Partnership Firm</li>
            <li>Limited Liability Partnership</li>
            <li>Limited Company</li>
            <li>Trust</li>
            <li>Hindu Undivided Family (HUF)</li>
            <li>Society</li>
          </ul>
        </Section>

        <Section title="Pre-Requisites for Applying for Import Export License/ Registration">
          <p>
            Here are the pre-requisites for an IEC registration, such as DGFT
            IEC Login, PAN, etc:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Valid DGFT IEC Login Credentials to DGFT Portal (After Registering
              on DGFT Portal)
            </li>
            <li>
              IEC may be applied on behalf of a firm which may be a
              Proprietorship, Partnership, LLP, Limited Company, Trust, HUF, and
              Society.
            </li>
            <li>
              The Firm must have an active Firm's Permanent Account Number (PAN)
              and details like Name as per Pan, Date of Birth, or Incorporation.
            </li>
            <li>
              The Firm must also have a bank account in the Name of the Firm and
              a valid address before the procedure of IEC Code apply.
            </li>
          </ul>
          <p className="text-sm italic">
            Note: These details will be validated with the Income Tax Department
            site.
          </p>
        </Section>

        <Section title="Documents required for IEC Code registration">
          <p>
            The list of scanned documents required for IEC apply and obtaining
            an IEC certificate is listed as follows:
          </p>
          <p className="font-semibold">
            Proof of establishment/incorporation/registration:
          </p>
          <p>
            The following type of Firm needs to submit the
            establishment/incorporation/registration certificate: Partnership,
            Registered Society, Trust, HUF, Other
          </p>
          <p className="font-semibold">Proof of Address:</p>
          <p>Proof of Address can be any one of the following documents:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Sale Deed</li>
            <li>Rent agreement</li>
            <li>Lease deed</li>
            <li>Electricity bill</li>
            <li>Telephone landline bill</li>
            <li>Mobile, post-paid bill</li>
            <li>MoU</li>
            <li>Partnership deed</li>
            <li>
              Other acceptable documents (for proprietorship only): Aadhar card,
              Passport, Voter id
            </li>
          </ul>
          <p className="text-sm italic">
            Note: In case the address proof is not in the Name of the applicant
            firm, a no objection certificate (NOC) by the firm premises owner in
            favor of the Firm, along with the address proof, is to be submitted
            as a single PDF document to obtain import export license.
          </p>
          <p className="font-semibold">Proof of Firm's Bank Account</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Canceled Cheque</li>
            <li>Bank Certificate</li>
          </ul>
          <p>
            User should have an active DSC or Aadhaar of the Firm's member for
            submission.
          </p>
          <p>
            Active Firm's Bank accounts for entering its details in the
            Application and making online payment of the application fee.
          </p>
          <p>
            Once you have all the required documents, you can initiate the IEC
            code registration process through a valid IEC Code login
            credentials. Ensure to engage in the IEC Code check to track your
            application status.
          </p>
        </Section>

        <Section title="How to Apply for IEC Code?">
          <p>
            Follow these steps properly to complete the process of how to apply
            for ICE Code:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <span className="font-semibold">Visit DGFT Website:</span> Go to
              the official DGFT website, and navigate to the 'IEC Profile
              Management' under the 'Services' tab.
            </li>
            <li>
              <span className="font-semibold">Register/Login:</span> Register by
              providing your details and validating the OTP. Once registered,
              log in with your IE code login credentials.
            </li>
            <li>
              <span className="font-semibold">Apply for IEC:</span> On the
              dashboard, click on "Apply for IEC" and fill out the ANF 2A
              application form. Provide details like firm name, PAN, GSTIN,
              address, bank account, etc.
            </li>
            <li>
              <span className="font-semibold">Sign the Application:</span>{" "}
              Review and digitally sign the application using DSC or Aadhaar.
            </li>
            <li>
              <span className="font-semibold">Make Payment:</span> Pay the
              prescribed application fee.
            </li>
            <li>
              <span className="font-semibold">Receive IEC Certificate:</span>{" "}
              After successful verification, you’ll receive the IEC Certificate
              via email, or you can download it from the DGFT portal.
            </li>
          </ol>
        </Section>

        <Section title="Streamline Your IEC Application with United Fillings">
          <p>
            United Fillings can assist you in obtaining an Importer Exporter Code (IEC) in
            India. Here's how we can help:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-semibold">Information and Guidance:</span>{" "}
              United Fillings can provide you with detailed information about the Import
              export code application process, including the eligibility
              criteria and the documents required.
            </li>
            <li>
              <span className="font-semibold">Application Preparation:</span> We
              can assist in preparing the necessary documentation, including the
              application form and supporting documents.
            </li>
            <li>
              <span className="font-semibold">Application Submission:</span> CA
              PI can submit your IEC application to the Directorate General of
              Foreign Trade (DGFT) on your behalf, ensuring that it is done
              correctly and promptly.
            </li>
            <li>
              <span className="font-semibold">Follow-up and Tracking:</span> We
              can track the progress of your application through efficient IEC
              Code check and follow up with the authorities, helping you
              navigate any potential roadblocks or delays.
            </li>
            <li>
              <span className="font-semibold">IEC Certificate Delivery:</span>{" "}
              Once your ICE Code is approved, United Fillings can help you obtain and
              deliver your IEC certificate and import export license.
            </li>
            <li>
              <span className="font-semibold">Expert Consultation:</span> If you
              have any queries or concerns regarding IEC or IEC Code check or
              international trade, United Fillings' experts can provide you with
              professional guidance.
            </li>
          </ul>
          <p>
            Using United Fillings for your IEC application can save you time and ensure
            that the process is handled efficiently and accurately, allowing you
            to focus on your import and export activities.
          </p>
        </Section>
        <p className="text-center font-semibold">
          Get Started with United Fillings Today!
        </p>
      </CardContent>
    </Card>
  );
};

export default DetailsSection;
