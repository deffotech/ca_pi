
import { Star, CheckCircle } from 'lucide-react';
import SendRequestButton from '@/components/ui/SendRequestButton';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HeroSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4 bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-6 rounded-lg flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold">LLP REGISTRATION</h2>
            <div className="border-t border-white/50 my-4"></div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Instant Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Online Process</span>
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm">
            <p>PAN Card</p>
            <p>Passport (Foreign Nationals Only)</p>
            <p>Voters Identity Card</p>
            <button className="text-white font-semibold mt-2 hover:underline">Load More</button>
          </div>
        </div>

        <div className="md:col-span-8">
          <h1 className="text-2xl font-bold text-gray-800">LLP Registration</h1>
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-400">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>
            <span className="text-gray-600 ml-2 text-sm font-medium">(2638)</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="border-2 border-dashed border-yellow-400 rounded-lg p-4 relative pt-6">
              <span className="absolute top-0 -translate-y-1/2 left-4 bg-white px-2 text-xs font-semibold text-yellow-500">3 Exclusive Offers</span>
              <h4 className="font-bold text-gray-800 mb-2">MCA Name Approval</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" /> Name Application Fee</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" /> Instant Filing</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" /> 4 Name Choice</li>
              </ul>
              <SendRequestButton 
                serviceName="LLP Name Approval"
                className="w-full mt-4"
              />
            </div>
            <div className="border-2 border-dashed border-yellow-400 rounded-lg p-4 relative pt-6">
              <span className="absolute top-0 -translate-y-1/2 left-4 bg-white px-2 text-xs font-semibold text-yellow-500">2 Exclusive Offers</span>
              <h4 className="font-bold text-gray-800 mb-2">Andaman and Nicobar Islands</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" /> MCA Name Approval</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" /> LLP Deed Drafting</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" /> LLP Incorporation</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" /> PAN & TAN Registration</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" /> Government Fee & Stamp Duty</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" /> 2 DSCs (Hyper Tokens)</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" /> D&C Downloading & Shipping Support</li>
                <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" /> Bank Account Opening Assistance</li>
              </ul>
              <SendRequestButton 
                serviceName="LLP Registration - Andaman and Nicobar Islands"
                className="w-full mt-4"
              />
            </div>
          </div>
          <div className="flex justify-between items-center mt-4 text-sm">
            <a href="#" className="text-blue-600 hover:underline">Terms and conditions</a>
            <a href="#" className="text-blue-600 hover:underline">Refer a Friend</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
