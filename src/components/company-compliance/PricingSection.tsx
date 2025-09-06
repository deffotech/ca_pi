
import { ChevronRight } from "lucide-react";
import SendRequestButton from "@/components/ui/SendRequestButton";

const PricingSection = () => {
  return (
    <section>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-6">
          <div className="bg-green-100 text-green-700 text-xs font-bold inline-block px-3 py-1 rounded-full mb-4">2 Exclusive Offers</div>
          <h3 className="text-xl font-bold mb-2">Company Basic</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start"><ChevronRight className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" /> Accountant</li>
            <li className="flex items-start"><ChevronRight className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" /> MCA Compliance</li>
            <li className="flex items-start"><ChevronRight className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" /> ITR-6 Filing</li>
            <li className="flex items-start"><ChevronRight className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" /> DIN eKYC for (2 Directors)</li>
            <li className="flex items-start"><ChevronRight className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" /> Commencement of Business</li>
            <li className="flex items-start"><ChevronRight className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" /> LEDGERS Accounting Software</li>
          </ul>
          <SendRequestButton 
            serviceName="Company Basic"
            className="mt-6 w-full"
          />
        </div>
        <div className="border rounded-lg p-6">
          <div className="bg-green-100 text-green-700 text-xs font-bold inline-block px-3 py-1 rounded-full mb-4">2 Exclusive Offers</div>
          <h3 className="text-xl font-bold mb-2">TDS Filings 2 year</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start"><ChevronRight className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" /> TDS filings for all quarters</li>
          </ul>
          <SendRequestButton 
            serviceName="TDS Filings 2 year"
            className="mt-6 w-full"
          />
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 text-blue-600 border-b pb-4">
        <a href="#" className="hover:underline text-sm">Terms and conditions</a>
        <a href="#" className="hover:underline text-sm">Refer a Friend</a>
      </div>
    </section>
  );
};

export default PricingSection;
