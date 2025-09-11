
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DetailsSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>About TAN Registration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                TAN (Tax Deduction and Collection Account Number) is a 10-digit alphanumeric number required by all persons who are responsible for deducting or collecting tax at source.
              </p>
              <p className="text-gray-600">
                It is mandatory for employers, companies, and individuals who make payments subject to TDS to obtain TAN before deducting tax.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Who Needs TAN?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Companies paying salary to employees</li>
                <li>• Businesses making payments to contractors</li>
                <li>• Banks and financial institutions</li>
                <li>• Government departments</li>
                <li>• Any entity deducting TDS</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
