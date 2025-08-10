
import { ChevronRight } from "lucide-react";
import AddToCartButton from "@/components/ui/AddToCartButton";

const OffersSection = () => {
  return (
    <section>
        <div className="border rounded-lg p-6 shadow-sm bg-stone-50 border-dashed border-orange-400">
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">2 Exclusive Offers</span>
            <h3 className="text-lg font-bold mt-2">Basic</h3>
            <ul className="space-y-2 text-gray-600 mt-4 text-sm">
                <li className="flex items-start"><ChevronRight className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-1" /> <span>Books-vs-GST Reconciliation</span></li>
                <li className="flex items-start"><ChevronRight className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-1" /> <span>GSTR-9 Preparation & Filing</span></li>
                <li className="flex items-start"><ChevronRight className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-1" /> <span>GSTR-9C Filing (if required)</span></li>
                <li className="flex items-start"><ChevronRight className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-1" /> <span>Dedicated Tax Expert Review</span></li>
                <li className="flex items-start"><ChevronRight className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-1" /> <span>LEDGERS GST Software - 1 Year</span></li>
                <li className="flex items-start"><ChevronRight className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-1" /> <span>Post-Filing Clarification Support</span></li>
            </ul>
            <AddToCartButton 
                serviceId="gstr9-annual-return"
                serviceName="GSTR-9 Annual Return Filing"
                price={3999}
                className="w-full mt-6 bg-white text-green-600 border border-green-600 hover:bg-green-50"
            />
        </div>
        <div className="flex justify-between items-center mt-6 text-sm">
            <a href="#" className="text-blue-600 hover:underline">Terms and conditions</a>
            <a href="#" className="text-blue-600 hover:underline">Refer a Friend</a>
        </div>
        <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Offers and discounts</h2>
            <div className="space-y-4">
                <div className="border rounded-lg p-4 flex items-center">
                    <img src="/lovable-uploads/b86200c6-26c2-476e-a3ac-94747ba673dd.png" alt="Ledgers Logo" className="h-10 mr-4" />
                    <div>
                        <h3 className="font-semibold text-gray-800">LEDGERS - Compliance Platform</h3>
                        <p className="text-sm text-gray-600">Invoicing, GST Filing, Banking and Payroll</p>
                    </div>
                </div>
                <div className="border rounded-lg p-4 flex items-center">
                    <img src="/lovable-uploads/f7bb8802-2d69-4ca4-9fac-23f73405ed89.png" alt="GIN Logo" className="h-10 mr-4" />
                    <div>
                        <h3 className="font-semibold text-gray-800">Save 18% with GST Registration</h3>
                        <p className="text-sm text-gray-600">Get GST eInvoice with Input Tax Credit</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default OffersSection;
