import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const OffersSection = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (packageName: string, price: number) => {
    addToCart({
      id: `fssai-${packageName.toLowerCase().replace(/\s+/g, "-")}`,
      name: packageName,
      price: price,
    });

    toast({
      title: "Added to Cart",
      description: `${packageName} has been added to your cart.`,
    });
  };

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Offers and discounts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="border rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">FSSAI Basic Registration</h3>
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              Popular
            </span>
          </div>
          <p className="text-gray-600 mb-4">
            Perfect for small food businesses with turnover up to ₹12 Lakhs
          </p>
          <Button
            className="w-full bg-white text-green-600 border border-green-600 hover:bg-green-50"
            onClick={() => handleAddToCart("FSSAI Basic Registration", 1499)}
          >
            ADD
          </Button>
        </div>

        <div className="border rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">FSSAI State License</h3>
            <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              Recommended
            </span>
          </div>
          <p className="text-gray-600 mb-4">
            For medium food businesses with turnover between ₹12 Lakhs - ₹20
            Crores
          </p>
          <Button
            className="w-full bg-white text-green-600 border border-green-600 hover:bg-green-50"
            onClick={() => handleAddToCart("FSSAI State License", 2999)}
          >
            ADD
          </Button>
        </div>

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
              alt="GST Logo"
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
      </CardContent>
    </Card>
  );
};

export default OffersSection;
