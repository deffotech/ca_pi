
import { Star, ChevronRight } from "lucide-react";
import SendRequestButton from "@/components/ui/SendRequestButton";

const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <img 
            src="/lovable-uploads/c4b8ab65-8c75-415f-b6c6-25ac167d25d1.png" 
            alt="Registered Office Change - Company" 
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="p-1">
          <h1 className="text-3xl font-bold text-gray-800">Registered Office Change - Company</h1>
          <div className="flex items-center my-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill="currentColor" className="w-5 h-5 text-yellow-400" />
            ))}
            <span className="text-gray-600 ml-2">(153)</span>
          </div>
          <p className="text-gray-600 mt-4 mb-6">
            Change of registered office within the same city.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4 bg-gray-50 relative pt-8">
              <div className="bg-green-100 text-green-700 text-xs font-bold inline-block px-3 py-1 rounded-full mb-4 absolute -top-3 left-3">2 Exclusive Offers</div>
              <h3 className="text-lg font-bold mb-2">Basic</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start"><ChevronRight className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" /> Application Filing in MCA</li>
                <li className="flex items-start"><ChevronRight className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" /> Updated MCA Master data copy</li>
              </ul>
              <SendRequestButton 
                serviceName="Registered Office Change - Company (Basic)"
                className="mt-6 w-full"
              />
            </div>

            <div className="border rounded-lg p-4 bg-gray-50 relative pt-8">
              <div className="bg-green-100 text-green-700 text-xs font-bold inline-block px-3 py-1 rounded-full mb-4 absolute -top-3 left-3">2 Exclusive Offers</div>
              <h3 className="text-lg font-bold mb-2">Same State ROC (Different City)</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start"><ChevronRight className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" /> Application Filing in MCA</li>
                <li className="flex items-start"><ChevronRight className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" /> Updated MCA Master data copy</li>
              </ul>
              <SendRequestButton 
                serviceName="Registered Office Change - Company (Same State ROC)"
                className="mt-6 w-full"
              />
            </div>
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
