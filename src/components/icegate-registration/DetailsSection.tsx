import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const DetailsSection = () => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>ICEGATE Registration Details</CardTitle>
      </CardHeader>
      <CardContent className="prose max-w-none prose-h2:text-2xl prose-h3:text-xl">
        <p>
          ICEGATE, or Indian Customs Electronic Gateway, is an essential portal
          for the trading community. It offers a streamlined platform for the
          electronic filing of customs documents such as Shipping Bills and
          Bills of Entry. This registration is not just a procedural step; it's
          a strategic move towards faster customs clearance and enhanced
          transparency in international transactions. Understanding the
          criticality of this process, United Fillings offers specialized assistance to
          businesses, ensuring that their ICEGATE registration process is
          seamless and efficient.
        </p>
        <Button>
          Contact our experts today and take the first step towards efficient
          customs clearance!
        </Button>

        <h2>What is ICEGATE?</h2>
        <p>
          As mentioned above, ICEGATE stands for Indian Customs Electronic
          Gateway, a key initiative by the Indian Customs to streamline and
          expedite the customs clearance process through digitalization. It
          serves as the digital portal for the trading and logistics community
          to interact with the Customs department through official ICEGATE
          login. It facilitates the electronic filing of customs documents such
          as Shipping Bills for exports and Bills of Entry for imports.
        </p>

        <h2>ICEGATE registration</h2>
        <p>
          ICEGATE registration is critical for entities involved in
          international trade, such as cargo carriers and trading partners. It
          enables them to file essential customs documents online, including
          Shipping Bills and Bills of Entry, through the Indian Customs
          Electronic Gateway. This digital platform is designed to streamline
          and accelerate the customs clearance process by minimizing paperwork
          and enhancing electronic submissions, leading to faster processing
          times, reduced operational costs, and improved visibility of shipment
          statuses.
        </p>

        <h2>Eligibility for ICEGATE Registration</h2>
        <p>
          ICEGATE registration is open to a wide range of entities involved in
          the import and export process. Eligible entities can register and
          access this digital portal through official ICEGATE login. Below, we
          have listed the entities eligible for ICEGATE registration process:
        </p>
        <ul>
          <li>
            F card Custom Brokers or Custom House Agents (CHA -Individuals,
            Firms or Employees
          </li>
          <li>IEC Certificate Holders</li>
          <li>Console agents</li>
          <li>Shipping Agents</li>
          <li>Airlines</li>
          <li>Air Cargo Agents</li>
          <li>IEC Authorized persons</li>
        </ul>

        <h2>Why do Traders Need ICEGATE Registration?</h2>
        <p>
          The primary reason for ICEGATE registration is that it is a
          prerequisite for the electronic filing of crucial documents related to
          customs clearance. Without a registered ICEGATE ID, one cannot submit
          these documents online through ICEGATE Login, which include:
        </p>
        <ul>
          <li>
            <strong>Shipping Bills:</strong> Required for the export of goods
            from India, detailing the shipment's contents, value, and
            destination.
          </li>
          <li>
            <strong>Bill of Entries:</strong> Necessary for the import of goods
            into India, providing specifics about the incoming goods, their
            value, and the duties applicable.
          </li>
        </ul>

        <h2>Advantages of ICEGATE Registration</h2>
        <p>
          Registering at ICEGATE provides several key benefits that facilitate
          and enhance the customs clearance process for businesses and
          individuals engaged in international trade through India. These
          advantages include:
        </p>
        <ul>
          <li>
            <strong>Centralized Document Filing:</strong> With an ICEGATE ID,
            users can file all necessary customs documents online, including
            Shipping Bills and Bills of Entries, through a single, centralized
            platform. This streamlines the submission process and eliminates the
            need for physical paperwork.
          </li>
          <li>
            <strong>Real-Time Tracking:</strong> Registrants can monitor the
            status of their filings through ICEGATE's online document tracking
            system, providing transparency and up-to-date information on the
            progress of their customs jobs.
          </li>
          <li>
            <strong>Immediate Notifications:</strong> Users receive instant
            acknowledgements regarding the submission status of their documents
            directly to their registered email. This includes positive and
            negative acknowledgements and unique identifiers like Shipping Bill
            (SB) and Bill of Entry (BE) numbers, which are essential for
            tracking and reference.
          </li>
          <li>
            <strong>Efficient Communication:</strong> ICEGATE facilitates
            seamless communication between the customs department and traders.
            While incoming files can be accepted from any email ID, critical
            outbound communications such as queries and responses are directed
            only to the registered email in the ICEGATE database, ensuring
            secure and reliable communication.
          </li>
        </ul>
        <p>
          These benefits collectively contribute to a more efficient,
          transparent, and manageable customs clearance process, making ICEGATE
          an indispensable tool for those involved in India's international
          trade.
        </p>

        <h2>Transaction Types Eligible for ICEGATE Registration Process</h2>
        <p>
          At ICEGATE, you can register for a wide array of transaction types,
          accommodating the diverse needs of the international trading
          community. Here's a breakdown of the primary transaction types you can
          register for at ICEGATE:
        </p>
        <h3>Primary Transaction Types</h3>
        <ul>
          <li>
            <strong>Exports:</strong> Registration for exports allows you to
            file Shipping Bills electronically, facilitating the smooth export
            of goods from India.
          </li>
          <li>
            <strong>Imports:</strong> Import registration enables the electronic
            submission of Bill of Entries, which is essential for clearing
            imported goods into India.
          </li>
          <li>
            <strong>IGM (Import General Manifest):</strong> IGM registration is
            crucial for shipping lines, airlines, and cargo agents to declare
            the details of cargo arriving in India.
          </li>
          <li>
            <strong>EGM (Export General Manifest):</strong> EGM is necessary for
            exporters and shipping agents to file details of cargo being shipped
            out of India, ensuring compliance with export regulations.
          </li>
          <li>
            <strong>Consol Manifest:</strong> This registration is vital for
            consolidators to file consolidated cargo details, enhancing cargo
            handling and customs clearance efficiency.
          </li>
        </ul>
        <h3>Additional Transaction Capabilities</h3>
        <p>
          Beyond these primary transactions, ICEGATE also supports a range of
          other specific functions to facilitate smoother trade operations:
        </p>
        <ul>
          <li>
            <strong>Query Replies:</strong> ICEGATE allows for the submission
            and management of queries related to customs processing, enabling
            efficient resolution of issues.
          </li>
          <li>
            <strong>
              Amendments to BE (Bill of Entry) and SB (Shipping Bill):
            </strong>{" "}
            The platform offers the flexibility to make necessary amendments to
            these documents, ensuring that all information is accurate and
            up-to-date.
          </li>
        </ul>

        <h2>Documents Required for ICEGATE Registration</h2>
        <p>
          Here's the list of documents required for ICEGATE registration and
          start utilizing the digital portal with official ICEGATE Login:
        </p>
        <div className="not-prose">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Applicant Entity</TableHead>
                <TableHead>Documents Required</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Custom Broker/CHA (Individual)</TableCell>
                <TableCell>Address Proof, Valid License or Permit</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Custom Broker/CHA (Firm)</TableCell>
                <TableCell>
                  Authorization Letter, Address Proof, Valid License or Permit
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Custom Broker/CHA (Employee)</TableCell>
                <TableCell>
                  F-card/G-card, Authorization Letter, Address Proof
                  (Aadhaar/Voter ID/Passport/DL)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>IEC Authorized Person</TableCell>
                <TableCell>Authorization Letter, Address Proof</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>IEC Holders</TableCell>
                <TableCell>Address Proof, Valid License or Permit</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Airlines/Air Agents</TableCell>
                <TableCell>
                  Authorization Letter, Address Proof, Valid License or Permit
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Shipping Lines/Shipping Agents</TableCell>
                <TableCell>
                  Order of Commissioner, Authorization Letter, Address Proof
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Console Agents</TableCell>
                <TableCell>Address Proof, Valid License or Permit</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <p>
          <strong>Note:</strong> For ICEGATE registration, the following are
          considered valid address proofs for the applicant : Aadhaar Card,
          Voter ID, Driving License, Passport
        </p>

        <h2>Types of ICEGATE Registration</h2>
        <p>
          ICEGATE offers various registration types to cater to the diverse
          needs of the trading community. Understanding these types helps
          entities choose the most suitable registration pathway for their
          operations. Here's an overview of the types of ICEGATE registrations:
        </p>
        <h3>ICEGATE Partnership Registration</h3>
        <p>
          This type of registration is designed for entities that wish to engage
          in electronic document filing through the ICEGATE portal as partners.
          It suits businesses looking for a comprehensive digital engagement
          with customs for their import/export activities.
        </p>
        <h3>ICEGATE Simplified Registration</h3>
        <p>
          The Simplified Auto Registration is designed to make the registration
          process more accessible to importers and exporters. It provides them
          with essential information services and the ability to submit certain
          types of documents without the comprehensive capabilities of full
          partnership registration.
        </p>
        <ul>
          <li>
            Primarily based on the Importer Exporter Code (IEC) and Goods and
            Services Tax Identification Number (GSTIN).
          </li>
          <li>
            Requires OTP verification for email and mobile phones to ensure
            security.
          </li>
          <li>
            Allows for a more straightforward registration process without
            uploading a ICEGATE Digital Signature Certificate (DSC), verifying
            PAN, uploading additional documents to ICEGATE, or undergoing a
            detailed approval process.
          </li>
        </ul>
        <p>
          <strong>Important Note:</strong> Entities registered under the
          Simplified Auto Registration category have limited capabilities and
          are not eligible to submit customs paperwork through ICEGATE. This
          registration type is ideal for entities that require basic access to
          the portal for information and minor submissions that don't include
          comprehensive customs documents.
        </p>

        <h2>ICEGATE Registration: Applicable Customs Ports</h2>
        <p>
          ICEGATE's comprehensive registration system enables users to conduct
          transactions with just a single registration across all Electronic
          Data Interchange (EDI) enabled Customs Ports in India.
        </p>

        <h2>DGFT Guidelines for ICEGATE Registration Process</h2>
        <p>
          The Directorate General of Foreign Trade (DGFT) provides comprehensive
          guidelines for entities looking to register on ICEGATE, especially
          those intending to file documents using the Remote EDI System (RES).
          Here's an overview of the key ICEGATE registration guidelines by DGFT,
          including creating an ICEGATE Digital signature:
        </p>
        <ul>
          <li>
            <strong>Prompt Registration for IEC Holders:</strong> IEC holders
            planning to file documents on ICEGATE are urged to register promptly
            through the new Registration Module to facilitate their document
            filing processes.
          </li>
          <li>
            <strong>
              ICEGATE Digital Signature Certificate (DSC) Requirement:
            </strong>{" "}
            Users are advised to have their Class III Individual Type DSC tokens
            ready and plugged into their systems before starting the
            registration process. DSCs must be uploaded during registration to
            authenticate the user's identity and ensure secure transactions.
          </li>
        </ul>
        <Button>Get DSC Now!</Button>
        <h3>PAN Verification</h3>
        <p>
          The applicant's PAN details will be cross-verified against the Income
          Tax Department's PAN database during registration to ensure accuracy
          and authenticity. A scanned PAN card copy must also be uploaded,
          further validating the applicant's details.
        </p>
        <h3>Name Consistency</h3>
        <p>
          The name provided during the ICEGATE registration should match the
          name on the applicant's PAN card to avoid discrepancies and potential
          issues in the verification process.
        </p>
        <h3>CHA Employee Registration</h3>
        <p>
          Only G-Card holders can register as Custom House Agent (CHA)
          employees. This is because G-Card holders are authorized to digitally
          sign documents using DSC, a capability not extended to H-Card holders.
        </p>
        <h3>Parent and Child User Registration</h3>
        <p>
          An entity can register one parent user on ICEGATE, with subsequent
          users registered as child users under the primary account,
          facilitating structured access and management.
        </p>
        <h3>ICES Registration Number Utilization</h3>
        <p>
          The ICES (Indian Customs EDI System) registration number provided
          during the registration process is used to access information from
          ICES directories and is displayed for verification purposes.
        </p>
        <h3>Data Collection and Verification</h3>
        <p>
          The data collection process for the registration commences once the
          applicant verifies the information provided, ensuring that all entered
          data is accurate and confirmed by the user.
        </p>
        <h3>Authority to Disable IEC-Authorized Person</h3>
        <p>
          Suppose an IEC-authorized person is no longer associated with the IEC
          holder. In that case, the IEC holder has the right to disable this
          person's access in the ICEGATE Registration module, ensuring security
          and control over who has access to file documents on behalf of the
          entity.
        </p>

        <h2>Simplify Your ICEGATE Registration with United Fillings</h2>
        <p>
          Choosing United Fillings for a seamless ICEGATE registration and ICEGATE Login
          setup. It ensures that your business complies with all customs
          regulations without any complexities. We provide professional support
          from start to end, including creating a Digital signature ICEGATE.
          With a team of dedicated experts well-versed in the intricacies of
          international trade regulations and the ICEGATE portal, United Fillings provides
          personalized guidance through every step of the registration process.
        </p>
        <Button>
          Ready to streamline your ICEGATE registration process? Talk to our
          experts today!
        </Button>
      </CardContent>
    </Card>
  );
};

export default DetailsSection;
