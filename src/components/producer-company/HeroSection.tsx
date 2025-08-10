import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Producer Company
      </h1>
      <p className="text-gray-600 mb-6 leading-relaxed">
        A Producer Company is an officially established group of farmers or
        agriculturists to enhance their quality of life, financial support, and
        income. This kind of company combines elements of both private limited
        companies and cooperatives. Its primary goal is to encourage cooperative
        businesses to form as companies and to allow current cooperatives to
        transition into company structures.
      </p>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Complete your Producer Company registration with CA PI' expert guidance.
        Our team simplifies the registration process of farmer producer
        organisations, ensuring legal compliance under the Companies Act 2013.
        Contact CA PI today and take the first step towards empowering your
        agricultural venture.
      </p>
      <Link to="https://forms.gle/rh7pCaqQSELtPwJz6">
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg"
        >
          Register a Producer Company
        </Button>
      </Link>
    </div>
  );
};

export default HeroSection;
