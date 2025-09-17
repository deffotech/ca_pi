
import { Star, ChevronRight } from "lucide-react";
import SendRequestButton from "@/components/ui/SendRequestButton";

const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <img 
            src="/lovable-uploads/b1efa02a-a2af-45c9-85a6-1a255ada043d.png" 
            alt="Name Change - Company" 
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="p-1">
          <h1 className="text-3xl font-bold text-gray-800">Name Change - Company</h1>
          <div className="flex items-center my-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill="currentColor" className="w-5 h-5 text-yellow-400" />
            ))}
            <span className="text-gray-600 ml-2">(34)</span>
          </div>
          <p className="text-gray-600 mt-4 mb-6">
            Name change for a private limited company, inclusive of name approval fee and GST.
          </p>

          <div className="border rounded-lg p-6 bg-gray-50">
            <div className="bg-green-100 text-green-700 text-xs font-bold inline-block px-3 py-1 rounded-full mb-4">2 Exclusive Offers</div>
            <h3 className="text-xl font-bold mb-2">Basic</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start"><ChevronRight className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" /> Application Filing in MCA</li>
              <li className="flex items-start"><ChevronRight className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" /> Provide Updated MOA & Updated AOA and New Incorporation Certificate</li>
            </ul>
            <SendRequestButton 
              serviceName="Name Change - Company"
              className="mt-6 w-full"
            />
          </div>

          <div className="flex justify-between items-center mt-4 text-blue-600 border-b pb-4">
            <a href="#" className="hover:underline text-sm">Terms and conditions</a>
            <a href="#" className="hover:underline text-sm">Refer a Friend</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
