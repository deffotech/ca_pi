
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DetailsSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>About DIN Reactivation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                DIN (Director Identification Number) may get deactivated if annual KYC is not filed within the prescribed time limit or due to non-compliance with regulatory requirements.
              </p>
              <p className="text-gray-600">
                Reactivation is necessary to continue serving as a director and to ensure compliance with corporate governance norms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Reasons for DIN Deactivation</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Non-filing of DIN KYC</li>
                <li>• Incomplete or incorrect information</li>
                <li>• Non-compliance with MCA requirements</li>
                <li>• Disqualification under Companies Act</li>
                <li>• Administrative reasons</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
