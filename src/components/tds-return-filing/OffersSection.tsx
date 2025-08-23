
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OffersSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>Offers and discounts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center">
                <img src="https://indiafilings.com/images/ledgers-compliance-platform.svg" alt="LEDGERS Logo" className="h-10 w-10 mr-4" />
                <div>
                  <p className="font-bold">LEDGERS - Compliance Platform</p>
                  <p className="text-sm text-gray-600">Invoicing, GST Filing, Banking and Payroll</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center">
                <img src="https://indiafilings.com/images/gst-registrations-18-percent-savings.svg" alt="GST Logo" className="h-10 w-10 mr-4" />
                <div>
                  <p className="font-bold">Save 18% with GST Registration</p>
                  <p className="text-sm text-gray-600">Get GST eInvoice with Input Tax Credit</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OffersSection;
