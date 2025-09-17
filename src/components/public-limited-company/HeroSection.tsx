import { Star, Check } from "lucide-react";
import AddToCartButton from "@/components/ui/AddToCartButton";
import AddToWishlistButton from "@/components/ui/AddToWishlistButton";



const HeroSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="grid md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-5">
          <div className="bg-blue-600 text-white p-4 rounded-lg">
            <h2 className="text-xl font-bold uppercase text-center mb-2">
              Public Limited Company
            </h2>
            <p className="text-xs text-center text-blue-200 mb-4">
              Seamless Process & Expert Guidance
            </p>
            <img
              src="assets/public-limited.jpg"
              alt="Public Limited Company"
              className="rounded-lg w-full h-48 object-cover bg-blue-500"
            />
          </div>
          <div className="mt-4 text-sm space-y-2">
            <p className="border-b pb-2">Recent Utility Bill</p>
            <p className="border-b pb-2">Business Place</p>
            <p className="border-b pb-2">Name Significance Letter</p>
            <p className="border-b pb-2">Specimen</p>
            <a href="#" className="text-blue-600 font-semibold">
              Load More
            </a>
          </div>
        </div>
        <div className="md:col-span-7">
          <h1 className="text-3xl font-bold text-gray-800">
            Public Limited Company
          </h1>
          <div className="flex items-center mt-2">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="ml-2 text-sm text-gray-600">(29)</span>
          </div>
          <p className="mt-4 text-gray-600">
            Easily incorporate a Public Limited Company through United Fillings. A minimum
            of 3 Directors and 7 Shareholders are required to incorporate a
            Public Limited Company.
          </p>

          <div className="mt-6 border-2 border-dashed border-yellow-400 bg-yellow-50/50 rounded-lg p-4">
            <h3 className="font-bold text-lg text-gray-800">Incorporation</h3>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />{" "}
                <span>MCA Name Approval</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />{" "}
                <span>7 Digital Signatures</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />{" "}
                <span>Incorporation Fee</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />{" "}
                <span>Company Incorporation</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />{" "}
                <span>Share Certificate</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />{" "}
                <span>Hyper Token</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />{" "}
                <span>DSC Support & Shipping</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />{" "}
                <span>Bank Account Assistance</span>
              </li>
            </ul>
            <div className="text-right mt-4">
          
            </div>
          </div>
          <div className="mt-4 flex justify-between text-sm">
            <a href="#" className="text-blue-600 hover:underline">
              Terms and conditions
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              Refer a Friend
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
