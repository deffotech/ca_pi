import { Star, ChevronRight } from "lucide-react";
import SendRequestButton from "@/components/ui/SendRequestButton";

const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <img
            src="/lovable-uploads/af854e9e-0988-40fc-859b-9b0377969feb.png"
            alt="OPC Compliance"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="p-1">
          <h1 className="text-3xl font-bold text-gray-800">OPC Compliance</h1>
          <div className="flex items-center my-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill="currentColor" className="w-5 h-5 text-yellow-400" />
            ))}
            <span className="text-gray-600 ml-2">(525)</span>
          </div>
          <p className="text-gray-600 mt-4 mb-6">
            File your business tax returns and maintain compliance seamlessly
            through United Fillings.com. Get a Dedicated Accountant and LEDGERS compliance
            platform for your business.
          </p>

          <div className="border rounded-lg p-6 bg-gray-50">
            <div className="bg-green-100 text-green-700 text-xs font-bold inline-block px-3 py-1 rounded-full mb-4">
              2 Exclusive Offers
            </div>
            <h3 className="text-xl font-bold mb-2">Basic</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" />{" "}
                Accountant
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" />{" "}
                Financial Statements
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" />{" "}
                DIN E-KYC for 1 Director
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" />{" "}
                Income Tax Filing
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" />{" "}
                MCA Annual Return Filing
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" />{" "}
                Commencement of Business
              </li>
            </ul>
            <SendRequestButton 
              serviceName="OPC Compliance"
              className="mt-6 w-full"
            />
          </div>

          <div className="flex justify-between items-center mt-4 text-blue-600 border-b pb-4">
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
