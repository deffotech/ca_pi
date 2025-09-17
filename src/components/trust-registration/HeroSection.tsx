import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="grid md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-5">
          <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
            <h2 className="text-xl font-bold uppercase">TRUST REGISTRATION</h2>
            <p className="mt-1 text-sm text-blue-200 border border-blue-400 inline-block px-2 py-1 rounded">
              Trust Deed, Stamp Paper & PAN Card
            </p>
            <img
              src="assets/trust-registration.jpg"
              alt="Trust Registration"
              className="mt-4 rounded-lg w-full h-48 object-cover bg-blue-500"
            />
          </div>
        </div>
        <div className="md:col-span-7">
          <h1 className="text-3xl font-bold text-gray-800">
            Trust Registration
          </h1>
          <div className="flex items-center mt-2">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <Star className="h-5 w-5 text-gray-300 fill-current" />
            <span className="ml-2 text-sm text-gray-600">(8)</span>
          </div>
          <p className="mt-4 text-gray-600">
            A Trust can be registered in India to conduct not for profit or
            charitable activities. Get a Trust Deed prepared by a Lawyer through
            United Fillings along stamp paper.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
