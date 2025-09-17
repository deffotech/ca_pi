
import { Star } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <img 
            src="/lovable-uploads/5297086e-acf0-4b80-ad21-5c2e95a411d8.png" 
            alt="Company Compliance" 
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="p-1">
          <h1 className="text-3xl font-bold text-gray-800">Company Compliance</h1>
          <div className="flex items-center my-2">
            <div className="flex text-yellow-400">
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
            </div>
            <span className="text-gray-600 ml-2">(3247)</span>
          </div>
          <p className="text-gray-600 mt-4 mb-6">
            Maintain accounts, MCA and Income Tax compliance for your company with dedicated Accountant and LEDGERS platform.
          </p>
          <Select defaultValue="company_basic">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="company_basic">Company Basic</SelectItem>
              <SelectItem value="tds_filings">TDS Filings 2 year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
