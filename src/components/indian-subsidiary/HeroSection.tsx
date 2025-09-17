import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Indian Subsidiary Company Registration
      </h1>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Setting up a subsidiary in India can be a transformative step for
        expanding your business operations and accessing one of the world's
        largest and most dynamic markets. At United Fillings, we specialise in providing
        comprehensive and tailored services for incorporating a foreign
        subsidiary in India. Our team of experts is here to guide you through
        the complexities of Indian subsidiary registration, from understanding
        the legal requirements and navigating regulatory approvals to assisting
        with compliance and documentation on setting up an Indian subsidiary of
        foreign company. Partner with us for setting up a subsidiary company in
        India and unlock India's vast business potential to drive your company's
        growth and success.
      </p>
      <Button
        size="lg"
        className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg"
      >
        Register an Indian Subsidiary
      </Button>
    </div>
  );
};

export default HeroSection;
