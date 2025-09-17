import { Star, CheckCircle } from "lucide-react";
import SendRequestButton from "@/components/ui/SendRequestButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-5">
          <img
            src="assets/company-registration.jpg"
            alt="Start a Business"
            className="rounded-lg w-full h-auto"
          />
          <div className="mt-4">
            <h3 className="font-bold text-lg mb-2">Documents Required</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>PAN Card</li>
              <li>Passport (Foreign Nationals Only)</li>
              <li>Aadhaar Card</li>
              <li>
                <Link to="#" className="text-blue-600 hover:underline">
                  Load More
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:col-span-7">
          <h1 className="text-3xl font-bold text-gray-800">
            Company Registration
          </h1>
          <div className="flex items-center my-2">
            <div className="flex text-yellow-400">
              <Star fill="currentColor" className="h-5 w-5" />
              <Star fill="currentColor" className="h-5 w-5" />
              <Star fill="currentColor" className="h-5 w-5" />
              <Star fill="currentColor" className="h-5 w-5" />
              <Star fill="currentColor" className="h-5 w-5" />
            </div>
            <span className="ml-2 text-gray-600 text-sm">(12035)</span>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Instant Name Application for Company.
          </p>

          <Select defaultValue="name_approval">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name_approval">Name Approval</SelectItem>
            </SelectContent>
          </Select>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="border border-green-200 bg-green-50/50 rounded-lg p-4 flex flex-col justify-between">
              <div>
                <p className="font-semibold text-green-700 text-sm mb-2">
                  3 Exclusive Offers
                </p>
                <h4 className="font-bold mb-2">Name Approval</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Name Application Fee</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Instant Filing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>4 Name Choice</span>
                  </li>
                </ul>
              </div>
              <SendRequestButton 
                serviceName="Company Name Approval"
                className="mt-4 w-full"
              />
            </div>
            <div className="border border-yellow-200 bg-yellow-50/50 rounded-lg p-4 flex flex-col justify-between">
              <div>
                <p className="font-semibold text-yellow-700 text-sm mb-2">
                  2 Exclusive Offers
                </p>
                <h4 className="font-bold mb-2">Andaman and Nicobar Islands</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>MCA Name Approval</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Company Incorporation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>PAN & TAN Registration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Government Fee & Stamp Duty</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>2 DSCs (Hyper Tokens)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>DSC Downloading & Shipping Support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Bank Account Opening Assistance</span>
                  </li>
                </ul>
              </div>
              <SendRequestButton 
                serviceName="Private Limited Company Registration - Andaman and Nicobar Islands"
                className="mt-4 w-full"
              />
            </div>
          </div>
          <div className="flex justify-between items-center mt-4 text-sm">
            <Link to="#" className="text-blue-600 hover:underline">
              Terms and conditions
            </Link>
            <Link to="#" className="text-blue-600 hover:underline">
              Refer a Friend
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
