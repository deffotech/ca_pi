import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OffersSection = () => {
  return (
    <section className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Director Removal Service Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border border-green-200">
          <div className="text-center mb-4">
            <h3 className="text-lg font-bold text-green-600">Voluntary Resignation</h3>
            <p className="text-3xl font-bold text-gray-800 mt-2">₹6,999</p>
            <p className="text-sm text-gray-500">+ Govt. Fees</p>
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">Resignation Letter Preparation</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">Board Resolution</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">MCA Form Filing</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">Compliance Certificate</span>
            </li>
          </ul>
          <Button className="w-full bg-green-600 hover:bg-green-700">Choose Plan</Button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-red-200">
          <div className="text-center mb-4">
            <h3 className="text-lg font-bold text-red-600">Board Removal</h3>
            <p className="text-3xl font-bold text-gray-800 mt-2">₹15,999</p>
            <p className="text-sm text-gray-500">+ Govt. Fees</p>
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">Special Resolution Drafting</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">General Meeting Notice</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">Legal Documentation</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">MCA Compliance</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">Expert Legal Support</span>
            </li>
          </ul>
          <Button className="w-full bg-red-600 hover:bg-red-700">Choose Plan</Button>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;