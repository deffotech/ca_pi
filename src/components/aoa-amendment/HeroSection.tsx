import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SendRequestButton from "@/components/ui/SendRequestButton";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AOA Amendment Service
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Professional Articles of Association amendment service. Modify your company's internal governance rules with expert legal assistance.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-green-600">₹4,499</span>
              <span className="text-gray-500 line-through">₹6,999</span>
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">36% OFF</span>
            </div>
            <SendRequestButton 
              serviceName="AOA Amendment"
              className="mt-6"
            />
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• AOA Amendment Drafting</li>
                  <li>• Board Resolution Support</li>
                  <li>• MCA Form Filing</li>
                  <li>• Legal Compliance Check</li>
                  <li>• Professional Consultation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;