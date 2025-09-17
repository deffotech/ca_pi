import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const DetailsSection = () => {
  const whyApedaRequired = [
    "Legal Compliance: Ensures adherence to government regulations for exporting scheduled products.",
    "Market Access: Acts as a gateway to international markets, allowing legal export of products.",
    "Financial Assistance: Eligibility for APEDA’s financial schemes to reduce costs related to packaging, branding, marketing, and infrastructure development.",
    "Quality Assurance: Access to guidelines and training programs to enhance product quality and competitiveness.",
    "Market Development Support: Assistance in promoting products globally through trade fairs, buyer-seller meets, and other promotional activities.",
    "Information Access: Updates on international trade policies, market intelligence, and emerging opportunities.",
    "Certification and Accreditation: Prerequisite for obtaining other necessary certifications for specific markets.",
    "Export Facilitation: Streamlines export procedures by providing necessary support and guidance.",
    "Regulatory Benefits: Access to government initiatives aimed at boosting exports, including tax exemptions and subsidies.",
    "Dispute Resolution: Acts as an intermediary in resolving disputes between exporters and importers.",
  ];

  const firstSchedule = [
    "Fruits, Vegetables, and their Products",
    "Meat and Meat Products",
    "Poultry and Poultry Products",
    "Dairy Products",
    "Chocolates, Cocoa, and its Products",
    "Cereals and Cereal Products",
    "Groundnuts, Peanuts, and Walnuts",
    "Pickles, Chutneys, and Papads",
    "De-oiled Rice Bran",
    "Alcoholic and Non-Alcoholic Beverages",
    "Green Pepper in Brine",
    "Guar Gum",
    "Floriculture and Floriculture Products",
    "Herbal and Medicinal Plants",
    "Confectionery, Biscuits, and Bakery Products",
    "Honey, Jaggery, and Sugar Products",
  ];

  const secondSchedule = ["Basmati Rice"];

  return (
    <Card>
      <CardHeader>
        <CardTitle>About APEDA Registration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8 text-gray-700">
        <div>
          <p>
            APEDA Registration is an essential certificate for Indian importers
            and exporters seeking to access international markets in the
            agricultural and processed food sectors. APEDA, which stands for the
            Agricultural and Processed Food Products Export Development
            Authority, signifies regulatory compliance and provides access to an
            array of incentives and opportunities designed to propel exports and
            catalyse growth. In a world increasingly valuing organic, authentic,
            and diverse food products, APEDA Registration has become an
            indispensable asset for Indian exporters.
          </p>
          <p className="mt-4">
            United Fillings can help you obtain your APEDA Registration smoothly and
            efficiently, ensuring you meet all requirements with ease.
          </p>
          <p className="text-green-600 font-semibold mt-4">
            Ready to Expand Your Export Business? Get Your APEDA Registration
            with United Fillings Today!
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            What is APEDA?
          </h3>
          <p>
            APEDA, established under the APEDA Act of 1985, is a government
            authority tasked with regulating and promoting the export of
            agricultural and processed food products from India. APEDA
            Registration, also known as APEDA RCMC Registration, is a mandatory
            requirement for exporters dealing with scheduled products. This
            certification ensures that exporters comply with export regulations
            and provides access to various benefits, including financial
            assistance, training programs, and quality improvement guidelines.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            What is APEDA Registration?
          </h3>
          <p>
            APEDA Registration, also referred to as APEDA RCMC Registration
            (Registration-Cum-Membership Certificate (RCMC)), is issued by the
            APEDA authorities to exporters of scheduled food products under the
            APEDA Act of 1985. This registration is a compulsory requirement for
            any exporter intending to engage in the export of listed
            agricultural and processed food products. Without an RCMC
            membership, exporters cannot legally commence their business
            activities related to these products as per regulatory guidelines.
            The APEDA RCMC registration form must be accurately filled out and
            submitted as part of the APEDA online registration procedure. Ensure
            to get an RCMC APEDA certificate.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Eligibility for APEDA Registration
          </h3>
          <p>
            Any individual or food business operator exporting one or more food
            products listed under the First Schedule and Second Schedule of the
            APEDA Act is eligible for APEDA Registration. According to the
            guidelines specified in sub-section (1) of Section 12 of the APEDA
            Act, such businesses and individuals are required to obtain an APEDA
            Registration Certificate within one month of the incorporation of
            their business.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Scheduled Food Products Under the APEDA Act
          </h3>
          <h4 className="text-lg font-semibold text-gray-800 my-2">
            First Schedule
          </h4>
          <ul className="list-disc list-inside space-y-1">
            {firstSchedule.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h4 className="text-lg font-semibold text-gray-800 my-2">
            Second Schedule
          </h4>
          <ul className="list-disc list-inside space-y-1">
            {secondSchedule.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-2">
            By obtaining APEDA Registration, exporters of these scheduled
            products can ensure compliance with export regulations and gain
            access to various benefits offered by APEDA.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Why APEDA Registration is Required?
          </h3>
          <p className="mb-4">
            Below are the essential reasons why APEDA Registration is required
            for your business:
          </p>
          <ul className="space-y-3">
            {whyApedaRequired.map((reason, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            APEDA Registration Online Procedure
          </h3>
          <p>
            The issuance of the APEDA Registration Certificate is now fully
            online, requiring exporters to fill out an application form and
            submit their documents via the APEDA portal. Below is the
            step-by-step procedure for APEDA registration online procedure:
          </p>
          <ol className="list-decimal list-inside space-y-2 mt-4">
            <li>
              <strong>Online Application:</strong> Visit the APEDA portal and
              click on the "Register as Member" tab to apply for an RCMC APEDA
              certificate. Fill in all mandatory details such as the
              Import-Export Code (IEC), email address, and mobile number. An OTP
              (One-Time Password) will be sent to your registered mobile number
              and email for verification purposes.
            </li>
            <li>
              <strong>Documentation:</strong> After OTP verification, complete
              the mandatory application form by providing all the requested
              details. Upload all the required documents for APEDA Registration.
              Applicants can save and edit their application APEDA online
              registration form multiple times before submitting the APEDA
              registration fees.
            </li>
            <li>
              <strong>Submission of Fee:</strong> Submit the registration fee
              after completing the application APEDA gov in the registration
              form. Upon successful payment, an application number will be
              generated. Use this application number to track the status of your
              RCMC application until it is issued.
            </li>
            <li>
              <strong>Issuance of APEDA Certificate:</strong> The APEDA
              registration certificate will be issued within 10-15 days after
              successful submission on the APEDA portal.
            </li>
          </ol>
          <p className="mt-2">
            Applicants can download their APEDA certificate using the login ID
            and password provided by APEDA to their registered mobile number and
            email. This is the brief process on how to apply APEDA online.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DetailsSection;
