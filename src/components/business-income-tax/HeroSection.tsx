import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HeroSection = () => {
  return (
    <section className="bg-white rounded-lg shadow-sm border p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="relative">
          <img
            src="/lovable-uploads/f6943072-16a1-4ed4-ada7-494ea3a433fe.png"
            alt="Business Tax Filing"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Business Income Tax Return (ITR) Filing Online
          </h1>
          <p className="text-gray-600 mb-6">
            Setting up a business and understanding the complexities of filing
            returns is essential to running a business. A business tax filing is
            an income tax return filing applicable to companies. It serves as a
            comprehensive record of the business's earnings and expenses.
          </p>
          <p className="text-gray-600 mb-6">
            Business Income Tax return filings in India just got more
            straightforward with United Fillings. We are here to help businesses easily
            file their tax returns and offer LEDGERS small business tax filing
            software.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="border rounded-lg p-4">
              <div className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full inline-block mb-3">
                2 Exclusive Offers
              </div>
              <h3 className="font-bold mb-2">30 Minutes - Tax Consultation</h3>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="30 Minutes - Tax Consultation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tax-consultation">
                    Tax Consultation
                  </SelectItem>
                  <SelectItem value="business-consultation">
                    Business Consultation
                  </SelectItem>
                  <SelectItem value="legal-consultation">
                    Legal Consultation
                  </SelectItem>
                  <SelectItem value="experienced-professionals">
                    Experienced Professionals
                  </SelectItem>
                </SelectContent>
              </Select>
              <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                ADD
              </Button>
            </div>

            <div className="border rounded-lg p-4">
              <div className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full inline-block mb-3">
                2 Exclusive Offers
              </div>
              <h3 className="font-bold mb-2">Tax Notice Response</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Professional Consultation</li>
                <li>• Reply Drafting</li>
                <li>• Reply Submission</li>
              </ul>
              <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                ADD
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
