import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-green-600">Need Help?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-green-600" />
            <span className="text-sm">+91 9876543210</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4 text-green-600" />
            <span className="text-sm">support@United Fillings.com</span>
          </div>
          <Button className="w-full bg-green-600 hover:bg-green-700">
            Talk to Expert
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-green-600">
            Processing Time
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-green-600" />
            <span className="text-sm">5-7 Working Days</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-green-600">
            Why Choose Us?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Expert guidance throughout the process</li>
            <li>• 100% online application</li>
            <li>• Quick turnaround time</li>
            <li>• Post-registration support</li>
            <li>• Affordable pricing</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;
