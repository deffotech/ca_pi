import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DetailsSection = () => {
  const benefits = [
    {
      title: "Access to a growing market",
      description: "By obtaining a Halal Certificate, businesses can tap into this growing market and reach a wider audience."
    },
    {
      title: "Increased consumer trust and confidence",
      description: "Demonstrate to Muslim consumers that their products or services meet these standards, which can help build trust and confidence in the brand."
    },
    {
      title: "Compliance with regulatory requirements",
      description: "Some states in India require Halal Certification for specific products or services to be sold in their markets."
    },
    {
      title: "Global recognition",
      description: "Halal Certification in India is recognized worldwide, and obtaining this Certification can help businesses expand into international markets."
    },
    {
      title: "Competitive advantage",
      description: "A Halal Certificate can give businesses a competitive edge over other companies that do not have this Certification."
    }
  ];

  const requirements = [
    {
      title: "Ingredients",
      description: "All ingredients used in the product must be Halal. This means that the ingredients must not come from non-Halal animals or contain any non-Halal additives or preservatives."
    },
    {
      title: "Manufacturing Process",
      description: "The manufacturing process used to produce the product must also be Halal. This includes the use of equipment and utensils that are free from non-Halal substances."
    },
    {
      title: "Packaging",
      description: "The packaging material used for the product must also be Halal. This means it must not contain any non-Halal substances or come into contact with non-Halal substances during manufacturing."
    },
    {
      title: "Storage and Transportation",
      description: "The product must be stored and transported to ensure it remains Halal. This includes using dedicated storage areas and vehicles free from non-Halal substances."
    },
    {
      title: "Certification",
      description: "The business must obtain a Halal Certificate from a recognized Halal Certification Body that verifies that the product and manufacturing process meet Halal standards."
    },
    {
      title: "Compliance",
      description: "The business must comply with all relevant laws and regulations related to Halal Certification in India."
    }
  ];

  const procedureSteps = [
    {
      step: "1",
      title: "Application",
      description: "The business wishing to obtain Halal Certification must apply to one of the Certification Bodies. At United Fillings, we help businesses understand the requirements for obtaining Halal Certification and provide guidance on the application process."
    },
    {
      step: "2",
      title: "Conducting the Audit",
      description: "After the business has submitted its application, a team of auditors (typically one Shariah Auditor and one Technical Auditor) will conduct an on-site inspection of the business's operations. The auditors will review and assess documentation, processing, handling, distribution, storage, cleanliness, sanitation, food safety, premises condition, tools, equipment, machinery, packaging and labeling."
    },
    {
      step: "3",
      title: "Certification",
      description: "After the audit, the Halal Certification Body's Technical Committee will review the audit report and other relevant documents. If the auditors' report is satisfactory, and the company and its products meet the Halal certification criteria, the Halal Certification Body will issue the Halal Certificate."
    }
  ];

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>About Halal License & Certification</CardTitle>
      </CardHeader>
      <CardContent className="prose max-w-none text-gray-700 space-y-6">
        {/* Introduction */}
        <div>
          <p>
            If you're a business looking to market your products and services to Muslim consumers, 
            obtaining a Halal Certificate can be a crucial step. A Halal Certificate indicates that 
            your products and services are permissible under Islamic Law and are suitable for 
            consumption by Muslims.
          </p>
          <p>
            At United Fillings, we offer a Halal Certificate Service to help businesses obtain Halal India 
            Certification for their products and services. Our team of experts can guide you through 
            the certification process and ensure that your products and services meet the requirements 
            for Halal Certification.
          </p>
        </div>

        {/* What is Halal Certificate */}
        <div>
          <h3>What is Halal Certificate?</h3>
          <p>
            Halal Certification is predominantly obtained for food and food-related products, and it 
            is essential in Islamic countries. The term "Halal" is derived from the Quran, which means 
            "permitted" or "lawful." Therefore, according to Islamic law, the Shariah, the Certification 
            is used for Food and other consumables permissible for consumption. Halal India Certification 
            emphasizes cleanliness in all aspects of a person's life, and Halal foods ensure that the 
            Food consumed by individuals is clean, hygienic, and does not harm their health or well-being.
          </p>
        </div>

        {/* What is Halal Certification in India */}
        <div>
          <h3>What is Halal Certification in India?</h3>
          <p>
            In India, a Halal Certificate is a document issued by a Halal certification body or authority 
            confirming that a product or service complies with Islamic dietary laws and guidelines and is 
            permissible or "Halal" for consumption by Muslims.
          </p>
          <p>
            Halal Certification in India is significant for food and beverage products, pharmaceuticals, 
            and personal care products. Still, it can also apply to other non-food products or services. 
            Businesses seeking Halal Certification in India must comply with the relevant standards and 
            guidelines set forth by the certification body or authority and undergo a rigorous inspection 
            and audit process to ensure compliance.
          </p>
        </div>

        {/* Types of Halal Certification */}
        <div>
          <h3>Types of Halal Certification</h3>
          <p>
            The type of Halal Certification varies depending on the nature of the business. Typically, 
            restaurants, hotels, slaughterhouses, and packaging and labeling materials seek Halal 
            Certification to ensure they meet the requirements of Muslim consumers. However, Halal 
            Certification is not limited to food production alone. Other products, such as non-alcoholic 
            beverages, raw materials for food processing, pharmaceutical and healthcare products, 
            traditional herbal products, cosmetics, personal care products, cleaning products, and 
            everyday consumer goods, can also obtain Halal Certification.
          </p>
          <p>
            Halal Certification Bodies offer Certification under various schemes, including the Food, 
            and Catering Scheme, Restaurant Scheme, Industrial Scheme, Abattoir Scheme, Warehouse or 
            Storage Scheme, and Product Endorsement Scheme.
          </p>
        </div>

        {/* Advantages */}
        <div>
          <h3>Advantages of expanding your business, the Halal way</h3>
          <p>The benefits of obtaining a Halal Certificate in India are numerous. Here are some of the key benefits:</p>
          <ul className="list-disc pl-5 space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index}>
                <strong>{benefit.title}:</strong> {benefit.description}
              </li>
            ))}
          </ul>
        </div>

        {/* Validity */}
        <div>
          <h3>Validity of Halal Certificate</h3>
          <p>
            The validity of a Halal Certificate typically lasts for one year. Still, it is subject to 
            certain conditions and may be revoked if the product or process no longer meets the Halal 
            Certification requirements.
          </p>
        </div>

        {/* Requirements */}
        <div>
          <h3>Requirements of Halal Certificate</h3>
          <ul className="list-disc pl-5 space-y-2">
            {requirements.map((req, index) => (
              <li key={index}>
                <strong>{req.title}:</strong> {req.description}
              </li>
            ))}
          </ul>
        </div>

        {/* Procedure */}
        <div>
          <h3>Halal Certification Procedure</h3>
          <p>The procedure to obtain Halal Certification in India is as follows:</p>
          <ol className="list-decimal pl-5 space-y-4">
            {procedureSteps.map((step, index) => (
              <li key={index}>
                <strong>Step {step.step}: {step.title}</strong>
                <br />
                {step.description}
              </li>
            ))}
          </ol>
        </div>

        {/* Conclusion */}
        <div>
          <p>
            United Fillings can provide comprehensive services to businesses seeking Halal Certification, from 
            consultation to document preparation, audit assistance, and certification support.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DetailsSection;
