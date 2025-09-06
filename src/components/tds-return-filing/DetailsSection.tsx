
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DetailsSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>About TDS Return Filing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                TDS returns are quarterly statements that need to be filed by every person who deducts tax at source. These returns contain details of TDS deducted and deposited with the government.
              </p>
              <p className="text-gray-600">
                Timely filing of TDS returns is mandatory to avoid penalties and ensure compliance with Income Tax regulations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>TDS Return Types</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Form 24Q - Salary payments</li>
                <li>• Form 26Q - Non-salary payments</li>
                <li>• Form 27Q - Payments to non-residents</li>
                <li>• Form 27EQ - TCS returns</li>
                <li>• Annual TDS Certificate issuance</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
