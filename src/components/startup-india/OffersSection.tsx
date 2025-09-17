import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OffersSection = () => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Offers and discounts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div className="flex items-center">
            <img
              src="assets/ledger.png"
              alt="LEDGERS Logo"
              className="h-10 w-10 mr-4"
            />
            <div>
              <p className="font-bold">LEDGERS - Compliance Platform</p>
              <p className="text-sm text-gray-600">
                Invoicing, GST Filing, Banking and Payroll
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div className="flex items-center">
            <img
              src="assets/gst.jpg"
              alt="GIN Logo"
              className="h-10 w-10 mr-4"
            />
            <div>
              <p className="font-bold">Save 18% with GST Registration</p>
              <p className="text-sm text-gray-600">
                Get GST eInvoice with Input Tax Credit
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div className="flex items-center">
            <img
              src="assets/yes-bank.avif"
              alt="YES Bank Logo"
              className="h-10 w-10 mr-4"
            />
            <div>
              <p className="font-bold">YES Bank Current Account</p>
              <p className="text-sm text-gray-600">
                Lifetime zero-balance account for United Fillings customers.*
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OffersSection;
