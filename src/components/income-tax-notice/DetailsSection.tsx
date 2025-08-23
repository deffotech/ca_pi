
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DetailsSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>About Income Tax Notices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Income Tax notices are official communications from the Income Tax Department regarding discrepancies, queries, or demands related to your tax returns or compliance.
              </p>
              <p className="text-gray-600">
                Proper and timely response to these notices is crucial to avoid penalties, interest, and legal complications.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Common Notice Types</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Section 139(9) - Defective return</li>
                <li>• Section 143(1) - Processing discrepancies</li>
                <li>• Section 148 - Reopening assessment</li>
                <li>• Section 245 - Set off of refunds</li>
                <li>• TDS/TCS mismatch notices</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
