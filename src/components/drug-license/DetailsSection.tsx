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

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-2">
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <div className="text-sm space-y-3 text-gray-600">{children}</div>
  </div>
);

const DetailsSection = () => {
  const drugTypes = [
    "All medications and treatments used for diagnosing, preventing, treating, or alleviating diseases or disorders in humans or animals. This also covers substances applied to the human body to deter insects such as mosquitoes.",
    "Every component constitutes a drug, including empty gelatin capsules.",
    "Various medical devices.",
  ];
  const entities = [
    "Pharmacists: Professionals authorised to prepare, dispense, and advise on pharmaceutical drugs, ensuring their safe and effective use by having pharma license.",
    "Wholesale Distributors: Businesses involved in bulk purchasing and distributing drugs to various retail outlets or other organisations.",
    "Retailers: Businesses that sell drugs directly to consumers, providing the final link in the supply chain between the manufacturer and the end-user. These entities must obtain drug license along with medical store licence.",
    "Manufacturers: Companies or individuals producing pharmaceuticals and cosmetics, including formulation, compounding, packaging, and labelling.",
    "Drug Sellers and Dealers: Individuals or entities engaged in the commercial trading of pharmaceuticals and cosmetic products. They must have both drug and pharmacy license to carry out the operations legally.",
    "Importers: Companies or individuals who import drugs, cosmetics, and traditional medicines from abroad, ensuring these imported items comply with the local regulatory requirements.",
    "Ayurvedic, Siddha, and Unani Drug Providers: Entities dealing in traditional Indian medicinal products, also regulated under the Drugs and Cosmetics Act need to have pharma licence.",
  ];
  const licenseTypes = [
    {
      title: "Manufacturing License",
      description:
        "For businesses that produce drugs, including allopathic and homoeopathic medicines. This manufacturing pharma licence is mandatory for any entity creating and producing pharmaceutical products.",
    },
    {
      title: "Sale License",
      description:
        "This is required to sell drugs and has two main categories:",
      subItems: [
        "Wholesale Drug Licence: This is needed by businesses that sell drugs in bulk to retailers or other entities rather than directly to consumers.",
        "Retail Drug Licence: Necessary for businesses selling drugs directly to consumers. This includes stand-alone pharmacies, ayurvedic shops, and any retailer providing drugs to end-users, such as hospitals and dispensaries. Selling products without a drug and pharmacy license leads to legal problems.",
      ],
    },
    {
      title: "Loan License",
      description:
        "This type of pharma licence For businesses that don't own a manufacturing facility but utilise the manufacturing premises of another licensed manufacturer to produce drugs. This arrangement allows for flexibility in production without the need to own a manufacturing unit.",
    },
    {
      title: "Import License",
      description:
        "Required for businesses importing drugs into India, whether for further manufacturing or direct sale. This pharma licence ensures that imported drugs meet the same standards as domestically produced.",
    },
    {
      title: "Multi-Drug Licence",
      description:
        "For businesses operating pharmacies under the same name across multiple states. This pharma licence facilitates the management of a pharmacy chain by standardising licensing across various locations.",
    },
  ];
  const howToApplySteps = [
    "Preparation of Documentation: Documentation is the foundation of the licensing process. Proper documentation streamlines the process and facilitates the successful issuance of a license. The required documents vary depending on the type of application, whether for wholesale or retail drug sales, and the specific business activities involved.",
    "Creation of User ID and Password: Applicants must register to obtain a user ID and password. These credentials are sent to the applicant's registered email address, allowing them to proceed with the application process for user ID and password creation.",
    "Filing the Application: Applicants must submit their application for a drug license to the relevant state's Drug Controlling Authority. Each license type necessitates a distinct application form. Unlike some other regulatory areas, there isn't a single centralised license that covers all states; applicants need to submit separate applications for each location they operate in.",
    "Premises Inspection: A drug inspector responsible for the area inspects the premises where the drug license is sought. This inspection involves verifying the application's details, measuring the premises, and ensuring the location is suitable based on zoning laws (e.g., commercial or mixed-use land).",
    "Application Scrutiny: The Drug Inspector reviews the application and accompanying documents against observations made during the site visit. If any clarifications are needed, they will be requested from the applicant, who must respond within three days. Failure to provide a satisfactory response can result in the application being denied.",
    "License Issuance: Following a thorough drug licence verification process and assuming all criteria are met, the Drug Control Department will issue the Drug License. Frequently, you can check drug licence status.",
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>All About Drug Licenses</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <p>
          Securing a drug licence is a fundamental step for entities wishing to
          engage in the pharmaceutical industry within India, encompassing
          activities from manufacturing to selling drugs and cosmetics. This
          license is a safeguard, ensuring that all pharmaceutical practices
          adhere to the rigorous quality and safety standards set forth by the
          Drugs and Cosmetics Act. Given the complexity of the application
          process and the importance of adherence to these regulations,
          navigating the intricacies of obtaining a drug license can be
          daunting.
        </p>
        <p>
          United Fillings offers expert guidance and support for the Drug License
          registration Process and obtaining the licence. With our deep
          understanding of the regulatory landscape and a comprehensive approach
          to handling applications, United Fillings helps demystify the process, ensuring
          that businesses and individuals can secure their pharma licence
          efficiently while fully complying with the legal mandates.
        </p>

        <Section title="What is a Drug Licence?">
          <p>
            In India, businesses must have the right licenses for their
            operations, including those dealing drugs and cosmetics. A drug
            licence issued by the government requires firms to legally
            manufacture, distribute, or sell pharmaceutical and cosmetic
            products. These licenses are specific to each region, meaning a
            separate permit is needed for operations in different states.
            Moreover, a distinct pharma license is required for each location if
            a business operates in multiple locations within a single state.
            Selling pharmaceutical products which do not have proper drug
            licenses leads to the cancellation of a pharmacy license. Drug
            licence verification can be done by the officials to ensure the
            safety. However, there's an exception for mobile vendors.
          </p>
        </Section>

        <Section title="Meaning of Drugs">
          <p>
            A drug licence is an authorisation issued by regulatory bodies that
            allows a business to engage in drug-related activities. Obtaining a
            drug licence is a prerequisite for initiating any drug-related
            business operations. The definition of a "drug" is provided in
            section 3(b) of The Drugs And Cosmetics Act, 1940, and encompasses.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            {drugTypes.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p>
            Therefore, the term "drug" encompasses all forms of medicines,
            including Allopathic, Homeopathic, Ayurvedic, Siddha, and Unani. For
            licensing purposes for pharma licence, these medicines can be
            categorised into two main groups.
          </p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Drugs Regulated By Drug Controller</TableHead>
                <TableHead>
                  Drugs Regulated By Aayush Drug Control Cell
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <p>
                    Medicines are Licensed by the Drug Controlling Authority
                    (Functioning Under the Ministry Of Health). Following are
                    the examples:
                  </p>
                  <ul className="list-disc pl-5">
                    <li>Allopathic Drugs</li>
                    <li>Veterinary Medicines</li>
                    <li>Medical Devices</li>
                    <li>Homeopathy</li>
                  </ul>
                </TableCell>
                <TableCell>
                  <p>
                    Aayush Drug Control Cell is one of the verticals of the
                    Central Drug Standard Control Organisation (CDSCO),
                    regulated by the Ministry of Ayush. The following is covered
                    under Aayush.
                  </p>
                  <ul className="list-disc pl-5">
                    <li>Ayurveda</li>
                    <li>Unani</li>
                    <li>Siddha</li>
                    <li>Herbal Products For Medicinal Use</li>
                    <li>Herbal Products For Cosmetic Use</li>
                  </ul>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Section>

        <Section title="The objective of Obtaining a Drug Licence">
          <p>
            The issuance of a drug licence serves as a regulatory measure to
            control and restrict access to medicines and drugs, ensuring they
            are not subjected to misuse or abuse. Drug licence verification done
            for the same purpose to ensure compliance and safety.
          </p>
        </Section>

        <Section title="Importance of Drug Licence">
          <p>
            The drug license is a prerequisite for businesses or individuals to
            legally operate in India's trading, manufacturing, or distribution
            of drugs and cosmetics. It ensures that all entities adhere to the
            stringent guidelines and standards outlined in the Drugs and
            Cosmetics Act 1940 to maintain the safety, efficacy, and quality of
            pharmaceutical and cosmetic products.
          </p>
          <p>
            Additionally, obtaining a license and drug licence renewal is just
            one part of regulatory compliance; entities must secure a trade
            license and register under the Shop and Establishment Act to fully
            comply with the legal requirements for operating a business in this
            sector.
          </p>
        </Section>

        <Section title="Entities Required to Obtain a Drug License Registration">
          <p>
            The following groups are typically required to secure a drug licence
            to operate legally within the pharmaceutical and healthcare sectors:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            {entities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section title="Types of Drug Licenses">
          <p>
            In India, the kind of drug licence required varies based on the
            specific activities of the drug business.
          </p>
          <ul className="space-y-3">
            {licenseTypes.map((item, i) => (
              <li key={i}>
                <p>
                  <strong>{item.title}:</strong> {item.description}
                </p>
                {item.subItems && (
                  <ul className="list-disc pl-8 mt-2 space-y-1">
                    {item.subItems.map((sub, j) => (
                      <li key={j}>{sub}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Eligibility Criteria for Obtaining a Drug License">
          <p>
            The eligibility criteria for obtaining a drug license can vary based
            on the state and the type of license. However, some general
            requirements include:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Qualification:</strong> For a retail license, the person
              must be a registered pharmacist. For a wholesale license, the
              person should be a graduate with one year of experience in drug
              sales or an undergraduate with four years of experience.
            </li>
            <li>
              <strong>Storage Facility:</strong> The premises must have adequate
              storage facilities, including refrigerators for certain drugs.
            </li>
          </ul>
        </Section>

        <Section title="Premises Specifications & Conditions">
          <p>
            The specifications and conditions of the premises are crucial for
            obtaining a pharma licence.
          </p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Eligibility Criteria</TableHead>
                <TableHead>For Retail Drug License</TableHead>
                <TableHead>For Wholesale Drug License</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Type of Premises</TableCell>
                <TableCell>
                  May be located in a Mixed Land Use Area or a Commercial Place.
                </TableCell>
                <TableCell>
                  It must be located in a Commercial Place only.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Minimum Area</TableCell>
                <TableCell>
                  The minimum carpet area is 10 square meters with a height of
                  2.75 meters.
                </TableCell>
                <TableCell>
                  The minimum carpet area is 10 square meters with a height of
                  2.75 meters.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Approach Road</TableCell>
                <TableCell>
                  The road must face a minimum width as the local municipality
                  prescribes for mixed land use.
                </TableCell>
                <TableCell>
                  Should be on a road/street broad enough for easy loading and
                  unloading, ideally facing a road with a minimum width of 18
                  meters.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Furniture</TableCell>
                <TableCell>
                  Requires racks, almirah for storage, and a table and chair.
                </TableCell>
                <TableCell>
                  Requires racks, almirah for storage, and a table and chair.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Equipment</TableCell>
                <TableCell>
                  Computer system, Printer for invoices, Refrigerator (essential
                  for storing certain drugs, especially vaccines, in a
                  low-temperature zone)
                </TableCell>
                <TableCell>
                  Computer system, Printer for invoices, Refrigerator (essential
                  for storing certain drugs, especially vaccines, in a
                  low-temperature zone)
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="text-xs space-y-2 mt-2">
            <p>
              <strong>Additional Notes:</strong>
            </p>
            <ul className="list-disc pl-5">
              <li>
                <strong>Combined Retail and Wholesale Premises:</strong> If
                applying for retail and wholesale pharma licences at the same
                premises, the minimum area should be 15 square meters.
              </li>
              <li>
                <strong>Measuring Carpet Area:</strong> The carpet area excludes
                open areas, pantry, and washroom, considering only the area used
                for drug dealings.
              </li>
              <li>
                <strong>Mixed Land Use Definition:</strong> It allows for
                non-residential activities in residential areas, with mixed-use
                shops permissible only on the ground floor up to the maximum
                floor coverage. Such regions require the unconditional surrender
                of the front setback for parking, with no boundaries, and must
                have approval from the local authority and payment of conversion
                charges.
              </li>
              <li>
                <strong>Commercial Place Definition:</strong> A location
                designated solely for commercial activities. Before renting for
                a wholesale pharma licence, it's important to confirm the
                commercial status of the premises by checking the conversion
                charge receipt and parking fee receipt.
              </li>
            </ul>
          </div>
        </Section>

        <Section title="Validity of Drug License">
          <p>
            A drug license, upon issuance, remains valid for five years, subject
            to its continued compliance with regulations. It can, however, be
            suspended or cancelled by the Drug Department if it fails to adhere
            to the required standards and regulations within this timeframe.
          </p>
        </Section>

        <Section title="How to Apply for Drug Licence?">
          <p>
            The Procedure to obtain a Drug License involves several key steps,
            each critical to ensuring compliance with regulatory standards. Here
            are the step by step process on how to apply for drug license:
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            {howToApplySteps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </Section>

        <Section title="Process of Drug Licence Download">
          <p>
            To proceed with drug licence download, visit the official website of
            the State Drugs Control Department. Log in using your credentials
            and navigate to the license section. Enter the required details,
            such as the application number or license number, and submit the
            request. Once verified, you can complete the drug licence download
            process and get the list in the prescribed format. Ensure that the
            license remains valid by regularly checking for renewal requirements
            and compliance updates.
          </p>
        </Section>

        <Section title="Drug License Renewal">
          <p>
            The drug license usually has a validity period of five years, after
            which it needs an drug licence renewal to continue its legal
            effectiveness.
          </p>
        </Section>

        <div className="bg-green-50 p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold text-gray-800">
            Simplify Your Drug License Process with United Fillings
          </h3>
          <p className="mt-2 text-gray-600">
            Securing a drug license can be a straightforward and hassle-free
            process when you choose United Fillings. With our expertise in navigating the
            complex regulatory framework of the pharmaceutical industry, United Fillings
            offers comprehensive support, from preparing your application to
            ensuring compliance with all legal requirements. Our knowledgeable
            team provides personalised guidance, making the entire process
            efficient including registration, check drug licence status,
            obtaining the certificate and minimising potential errors or delays.
            Whether you're new to the pharmaceutical sector or looking to expand
            your existing operations, United Fillings can help streamline your journey to
            obtaining a drug license.
          </p>
          <Button className="mt-4 bg-green-500 hover:bg-green-600">
            Contact our experts today for personalised assistance!
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DetailsSection;
