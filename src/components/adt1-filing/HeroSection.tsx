import { Star, CheckCircle } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from 'react-router-dom';
import SendRequestButton from "@/components/ui/SendRequestButton";

const HeroSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-5">
            <img src="/lovable-uploads/4ce05405-f89f-4b07-b491-a85dafeaea7b.png" alt="ADT-1 Filing" className="rounded-lg w-full h-auto" />
            <div className="mt-4">
                <h3 className="font-bold text-lg mb-2">Documents Required</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                    <li>Auditor Details</li>
                    <li>Board Resolution</li>
                    <li>Auditor Consent</li>
                    <li>Professional Qualification</li>
                    <li><Link to="#" className="text-blue-600 hover:underline">Load More</Link></li>
                </ul>
            </div>
        </div>
        <div className="md:col-span-7">
          <h1 className="text-3xl font-bold text-gray-800">ADT-1 Filing</h1>
          <div className="flex items-center my-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 text-yellow-400 fill-yellow-400"
              />
            ))}
            <span className="ml-2 text-gray-600 text-sm">(3456)</span>
          </div>
          <p className="text-sm text-gray-500 mb-4">File ADT-1 form for auditor appointment with MCA compliance.</p>

          <Select defaultValue="auditor_appointment">
              <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select service type" />
              </SelectTrigger>
              <SelectContent>
                  <SelectItem value="auditor_appointment">Auditor Appointment</SelectItem>
                  <SelectItem value="auditor_change">Auditor Change</SelectItem>
              </SelectContent>
          </Select>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="border border-green-200 bg-green-50/50 rounded-lg p-4 flex flex-col justify-between">
                <div>
                    <p className="font-semibold text-green-700 text-sm mb-2">3 Exclusive Offers</p>
                    <h4 className="font-bold mb-2">First Auditor Appointment</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>ADT-1 Form Filing</span></li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Board Resolution</span></li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Auditor Consent</span></li>
                    </ul>
                </div>
                <SendRequestButton 
                  serviceName="ADT-1 First Auditor Appointment"
                  className="mt-4 w-full"
                />
            </div>
            <div className="border border-yellow-200 bg-yellow-50/50 rounded-lg p-4 flex flex-col justify-between">
                <div>
                    <p className="font-semibold text-yellow-700 text-sm mb-2">4 Exclusive Offers</p>
                    <h4 className="font-bold mb-2">Auditor Change</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Casual Vacancy Filing</span></li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>New Auditor Appointment</span></li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>MCA Compliance</span></li>
                        <li className="flex items-start"><CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span>Documentation Support</span></li>
                    </ul>
                </div>
                <SendRequestButton 
                  serviceName="ADT-1 Auditor Change"
                  className="mt-4 w-full"
                />
            </div>
          </div>
          <div className="flex justify-between items-center mt-4 text-sm">
            <Link to="#" className="text-blue-600 hover:underline">Terms and conditions</Link>
            <Link to="#" className="text-blue-600 hover:underline">Refer a Friend</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;