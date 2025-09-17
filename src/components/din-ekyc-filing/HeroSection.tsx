import { Star, ChevronRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SendRequestButton from "@/components/ui/SendRequestButton";

const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <img
            src="/assets/af989a02-fb0a-4ebe-8f38-b557e0fd82e3.png"
            alt="DIN eKYC Filing"
            className="rounded-lg shadow-lg w-full"
          />
           <div className="mt-4 p-4 border-t">
            <p className="text-gray-600">PAN Card</p>
            <p className="text-gray-600">Aadhaar Card</p>
            <button className="text-blue-600 hover:underline mt-2">
              Load More
            </button>
          </div>
        </div>
        <div className="p-1">
          <h1 className="text-3xl font-bold text-gray-800">DIN eKYC Filing</h1>
          <div className="flex items-center my-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill="currentColor" className="w-5 h-5 text-yellow-400" />
            ))}
            <span className="text-gray-600 ml-2">(5493)</span>
          </div>
          <p className="text-gray-600 mt-4 mb-6">
            Directors with DIN must submit their KYC details through e-Form DIR
            3 KYC. File your e-Form DIR 3 KYC effortlessly with United Fillings.
          </p>

          <div className="mb-6">
            <Select defaultValue="din-kyc">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="din-kyc">DIN KYC</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4 bg-gray-50 relative pt-8">
              <div className="bg-green-100 text-green-700 text-xs font-bold inline-block px-3 py-1 rounded-full mb-4 absolute -top-3 left-3">
                2 Exclusive Offers
              </div>
              <h3 className="text-lg font-bold mb-2">DIN KYC</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" />{" "}
                  DIN KYC Filing
                </li>
              </ul>
              <SendRequestButton 
                serviceName="DIN KYC"
                className="mt-6 w-full"
              />
            </div>

            <div className="border rounded-lg p-4 bg-gray-50 relative pt-8">
              <div className="bg-green-100 text-green-700 text-xs font-bold inline-block px-3 py-1 rounded-full mb-4 absolute -top-3 left-3">
                2 Exclusive Offers
              </div>
              <h3 className="text-lg font-bold mb-2">2 x DIN KYC</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" />{" "}
                  DIN KYC Filing
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" />{" "}
                  2 Director / Partner
                </li>
              </ul>
              <SendRequestButton 
                serviceName="2 x DIN KYC"
                className="mt-6 w-full"
              />
            </div>
          </div>

          <div className="flex justify-between items-center mt-4 text-blue-600 border-t pt-4">
            <a href="#" className="hover:underline text-sm">
              Terms and conditions
            </a>
            <a href="#" className="hover:underline text-sm">
              Refer a Friend
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
