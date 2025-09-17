import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Clock, FileText, Building } from "lucide-react";
import { Link } from "react-router-dom";

const WindingUpCompany = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <main className="container mx-auto px-4 py-8">
        <nav className="flex items-center space-x-1 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">
            United Fillings
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/company-compliance" className="hover:text-green-600">
            MCA Services
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900">Winding Up - Company</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-3xl text-green-600">
                  Winding Up - Company
                </CardTitle>
                <p className="text-gray-600">
                  Close your company with proper legal procedures and regulatory
                  compliance.
                </p>
              </CardHeader>
              <CardContent>
                <img
                  src="/assets/5297086e-acf0-4b80-ad21-5c2e95a411d8.png"
                  alt="Winding Up Company"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      About Company Winding Up
                    </h3>
                    <p className="text-gray-600">
                      Company winding up is the process of closing down a
                      company and dissolving it legally. This involves settling
                      all obligations, distributing assets, and completing all
                      regulatory requirements.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      Winding Up Process
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <Building className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-600">
                          Board and shareholder resolutions
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <FileText className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-600">
                          Asset liquidation and debt settlement
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Clock className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-600">
                          Final MCA and tax filings
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-green-600">
                  Get Started
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-green-600" />
                    <span className="text-sm">
                      Processing Time: 90-120 days
                    </span>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Start Company Winding Up
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WindingUpCompany;
