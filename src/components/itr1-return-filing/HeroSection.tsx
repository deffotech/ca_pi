import { Card } from "@/components/ui/card";
import {
  Star,
  FileText,
  CheckCircle,
  Clock,
  Shield,
  Users,
} from "lucide-react";
import SendRequestButton from "@/components/ui/SendRequestButton";

const HeroSection = () => {
  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-blue-600 p-8 text-white">
          <h1 className="text-3xl font-bold mb-4">File Income Tax Return</h1>
          <p className="text-blue-100 mb-6">
            Save the year income tax assessment with United Fillings. Get expert help with
            Filing, tax planning, and compliance - all in one place.
          </p>

          <div className="flex items-center mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="ml-2 text-sm">Expert Assistance</span>
          </div>

          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <h3 className="font-semibold mb-3">ITR-1 RETURN FILING</h3>
              <p className="text-sm text-blue-100 mb-3">
                Here are some to select from for an individual taxpayer having
                income of less than Rs 50 lakhs.
              </p>
              <ul className="text-sm space-y-1 text-blue-100">
                <li>• Complete Compliance with Tax Laws</li>
                <li>• Fast and Easy Filing</li>
                <li>• Professional Legal Assistance</li>
                <li>• User-Friendly Dashboard</li>
                <li>• Protected and Confidential</li>
              </ul>
            </div>
            <SendRequestButton 
              serviceName="ITR-1 Return Filing"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg"
            />
          </div>
        </div>
        <div className="p-8 bg-gradient-to-br from-blue-50 to-white">
          <div className="grid grid-cols-2 gap-6 h-full">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                <FileText className="h-8 w-8 text-blue-600 mb-2" />
                <h3 className="font-semibold text-gray-800">Easy Filing</h3>
                <p className="text-sm text-gray-600">
                  Simplified tax return process
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                <CheckCircle className="h-8 w-8 text-green-600 mb-2" />
                <h3 className="font-semibold text-gray-800">Accuracy</h3>
                <p className="text-sm text-gray-600">
                  100% accurate calculations
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                <Clock className="h-8 w-8 text-orange-600 mb-2" />
                <h3 className="font-semibold text-gray-800">Quick Process</h3>
                <p className="text-sm text-gray-600">
                  Fast and efficient filing
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
                <Shield className="h-8 w-8 text-purple-600 mb-2" />
                <h3 className="font-semibold text-gray-800">Secure</h3>
                <p className="text-sm text-gray-600">Your data is protected</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HeroSection;
