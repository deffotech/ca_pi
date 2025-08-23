
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const DocumentsSection = () => {
  const documents = [
    "Invoice or Agreement for the payment",
    "Details of the beneficiary (Name, Address, Country)",
    "Purpose of remittance",
    "Bank account details of the remitter",
    "PAN card of the remitter",
    "Board resolution (for companies)",
    "Previous year's audited financial statements (if applicable)",
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>Documents Required for 15CA - 15CB Filing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              To process your 15CA - 15CB filing, please provide the following documents:
            </p>
            <ul className="space-y-3">
              {documents.map((doc, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{doc}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DocumentsSection;
