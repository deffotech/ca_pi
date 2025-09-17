import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Star,
  ChevronRight,
  FileText,
  Clock,
  Shield,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import Sidebar from "@/components/itr1-return-filing/Sidebar";

const NameChangeCompany = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="px-4 py-8 md:px-8 lg:px-16">
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                to="/"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                United Fillings
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="h-5 w-5 text-gray-400" />
                <span className="ml-1 text-sm font-medium text-gray-700 md:ml-2">
                  MCA Services
                </span>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <ChevronRight className="h-5 w-5 text-gray-400" />
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                  Name Change - Company
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-blue-600 p-8 text-white">
                  <h1 className="text-3xl font-bold mb-4">
                    Company Name Change
                  </h1>
                  <p className="text-blue-100 mb-6">
                    Change your company name with expert assistance through MCA
                    filing and compliance.
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

                  <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg">
                    Start Name Change
                  </Button>
                </div>
                <div className="p-8 bg-gradient-to-br from-blue-50 to-white">
                  <div className="grid grid-cols-2 gap-6 h-full">
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                        <FileText className="h-8 w-8 text-blue-600 mb-2" />
                        <h3 className="font-semibold text-gray-800">
                          MCA Filing
                        </h3>
                        <p className="text-sm text-gray-600">
                          Complete documentation
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                        <Clock className="h-8 w-8 text-green-600 mb-2" />
                        <h3 className="font-semibold text-gray-800">
                          Quick Process
                        </h3>
                        <p className="text-sm text-gray-600">
                          15-20 working days
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                        <Shield className="h-8 w-8 text-orange-600 mb-2" />
                        <h3 className="font-semibold text-gray-800">
                          Legal Compliance
                        </h3>
                        <p className="text-sm text-gray-600">
                          100% compliant process
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
                        <Users className="h-8 w-8 text-purple-600 mb-2" />
                        <h3 className="font-semibold text-gray-800">
                          Expert Support
                        </h3>
                        <p className="text-sm text-gray-600">
                          Professional guidance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-blue-600">
                Company Name Change Process
              </h2>
              <p className="text-gray-700 mb-4">
                Changing your company name requires compliance with the
                Companies Act and MCA regulations.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Board resolution for name change</li>
                <li>Special resolution by shareholders</li>
                <li>MCA approval and filing</li>
                <li>Certificate of incorporation with new name</li>
                <li>Update all statutory registrations</li>
              </ul>
            </Card>
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NameChangeCompany;
