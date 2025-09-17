import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DetailsSection = () => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>
          FSSAI Registration - Apply for FSSAI Certificate Online
        </CardTitle>
      </CardHeader>
      <CardContent className="prose max-w-none text-gray-700">
        <p>
          FSSAI Registration is a mandatory and basic requirement for all
          food-related businesses in India, ensuring the safety and quality of
          food served or sold. Whether you're a small food vendor, a home-based
          kitchen, or managing a large food chain, obtaining FSSAI Registration
          is essential for building customer trust and operating legally.
          Regulated by the Food Safety and Standards Authority of India, this
          registration helps streamline food safety practices and boosts the
          credibility of your business.
        </p>
        <p>
          Get your FSSAI License registration fast and hassle-free with United Fillings!
          Our experts will guide you in choosing the right food category,
          ensuring your business meets all food safety standards and obtain
          FSSAI certificate!
        </p>

        <h3>What is FSSAI Registration?</h3>
        <p>
          FSSAI Registration is a compulsory authorisation for individuals or
          entities involved in the manufacturing, processing, storage,
          distribution, or sale of food products in India. It is governed by the
          Food Safety & Standards (Licensing and Registration of Food Business)
          Regulations, 2011. This registration differs from an FSSAI License
          based on the size and nature of the business.
        </p>

        <h3>Importance of FSSAI Registration</h3>
        <p>
          FSSAI License registration is vital for all Food Business Operators
          (FBOs), including those planning to open restaurants, bakeries,
          hotels, cloud kitchens, or food stalls. It is required for anyone
          engaged in the manufacturing, preparation, sale, transportation,
          distribution, or storage of food products. FSSAI registration ensures
          food safety compliance and enhances your business's reputation.
        </p>

        <h3>Key Features of FSSAI Registration</h3>
        <ul className="list-disc pl-5">
          <li>
            <strong>14-Digit Registration Number:</strong> Every FSSAI
            Registration Certificate is accompanied by a 14-digit number that
            must be displayed on all food packages. This number provides vital
            information about the food product’s origin, including the state
            where it was assembled and the producer’s permit details.
          </li>
          <li>
            <strong>Quality Assurance:</strong> By compelling Food Business
            Operators (FBOs) to display their registration details, FSSAI
            ensures that accountability for quality and safety rests squarely on
            the entity handling the food.
          </li>
          <li>
            <strong>Applicability:</strong> FSSAI License Registration is
            compulsory for all FBOs, from small-scale vendors to large
            manufacturing units, though the specific requirement, depends on the
            size and nature of the business.
          </li>
        </ul>

        <h3>Types of FSSAI Registration</h3>
        <p>
          FSSAI registrations are categorised based on a food business’s
          turnover, production capacity, and other operational details.
          Businesses must choose from three main types of registrations—Basic,
          State, or Central—depending on their turnover and production scope.
          Below is an overview of each registration type and the corresponding
          eligibility criteria:
        </p>

        <h4>FSSAI Basic Registration</h4>
        <p>
          <strong>Who Needs It:</strong> Food Business Operators (FBOs) with an
          annual turnover of less than INR 12 lakh.
        </p>

        <h4>FSSAI State License</h4>
        <p>
          <strong>Who Needs It:</strong> FBOs with an annual turnover between
          INR 12 lakh and INR 20 crore.
        </p>

        <h4>FSSAI Central License</h4>
        <p>
          <strong>Who Needs It:</strong> FBOs with an annual turnover exceeding
          INR 20 crore.
        </p>

        <h3>Consequences of Non-Compliance with FSSAI Regulations</h3>
        <p>
          Food businesses registered under FSSAI are required to follow the
          rules and regulations outlined in the FSS Act, 2006. A Food Safety
          Officer typically conducts inspections of the business premises to
          assess compliance with these regulations.
        </p>

        <h3>Validity of FSSAI Registration</h3>
        <p>
          The validity of an FSSAI registration depends on the type of license
          granted. Typically, FSSAI registration is valid for either 1 year or 5
          years, based on the business's eligibility and size.
        </p>

        <h3>FSSAI Registration Renewal</h3>
        <p>
          FSSAI registration renewal is a crucial process for Food Business
          Operators (FBOs) to continue operating legally. It is mandatory for
          FBOs to apply for renewal before the expiry date.
        </p>
      </CardContent>
    </Card>
  );
};

export default DetailsSection;
