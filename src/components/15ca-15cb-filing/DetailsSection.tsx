
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DetailsSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>About 15CA - 15CB Filing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                15CA and 15CB are mandatory forms required for foreign remittances exceeding ₹5 lakh per financial year. Form 15CA is filed by the remitter, while Form 15CB is a certificate issued by a Chartered Accountant.
              </p>
              <p className="text-gray-600">
                These forms ensure compliance with the Foreign Exchange Management Act (FEMA) and Income Tax regulations for overseas transactions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Legal compliance with RBI regulations</li>
                <li>• Smooth processing of foreign remittances</li>
                <li>• Avoid penalties and legal issues</li>
                <li>• Expert guidance on documentation</li>
                <li>• Quick turnaround time</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
