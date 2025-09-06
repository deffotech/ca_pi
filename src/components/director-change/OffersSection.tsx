import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OffersSection = () => {
  return (
    <section className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Director Change Service Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border border-green-200">
          <div className="text-center mb-4">
            <h3 className="text-lg font-bold text-green-600">Director Change</h3>
            <p className="text-3xl font-bold text-gray-800 mt-2">₹8,999</p>
            <p className="text-sm text-gray-500">+ Govt. Fees</p>
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">Board Resolution Preparation</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">MCA Form Filing</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">Compliance Certificate</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">Document Support</span>
            </li>
          </ul>
          <Button className="w-full bg-green-600 hover:bg-green-700">Choose Plan</Button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200 relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">COMPREHENSIVE</span>
          </div>
          <div className="text-center mb-4">
            <h3 className="text-lg font-bold text-blue-600">Director Addition</h3>
            <p className="text-3xl font-bold text-gray-800 mt-2">₹12,999</p>
            <p className="text-sm text-gray-500">+ Govt. Fees</p>
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">DIN Application</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">Director Appointment</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">MCA Form Filing</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">Digital Signature Setup</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">Complete Documentation</span>
            </li>
          </ul>
          <Button className="w-full bg-blue-600 hover:bg-blue-700">Choose Plan</Button>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;