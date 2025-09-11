import { Star } from "lucide-react";
import SendRequestButton from "@/components/ui/SendRequestButton";


const HeroSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="grid md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-5">
          <div className="bg-blue-600 text-white p-6 rounded-lg">
            <h2 className="text-xl font-bold uppercase">
              Section 8 Company Registration
            </h2>
            <p className="mt-1 text-sm text-blue-200">
              Quick & Efficient Online Service
            </p>
            <img
              src="assets/section-8.jpg"
              alt="Section 8 Company"
              className="mt-4 rounded-lg w-full h-48 object-cover bg-blue-500"
            />
          </div>
        </div>
        <div className="md:col-span-7">
          <h1 className="text-3xl font-bold text-gray-800">
            Section 8 Company
          </h1>
          <div className="flex items-center mt-2">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="ml-2 text-sm text-gray-600">(2317)</span>
          </div>
          <p className="mt-4 text-gray-600">
            A Section 8 Company is a non-profit organization that aims to
            promote charitable activities, art, science, education, and sports.
            The profits of such companies are utilized for promoting these
            objectives and are not distributed among the Company's members.
          </p>
          <SendRequestButton 
                serviceName="12A Registration"
                className="absolute mt-3  w-30px"
              />
        </div>
     
      </div>
    </div>
  );
};

export default HeroSection;
