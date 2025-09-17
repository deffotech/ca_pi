import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const OffersSection = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 'halal-certification',
      name: 'Halal Certification',
      price: 7999
    });
    toast.success('Halal Certification added to cart!');
  };

  const services = [
    {
      title: "Complete documentation preparation",
      description: "Expert consultation and application filing"
    },
    {
      title: "Application filing",
      description: "Follow-up until certification"
    }
  ];

  const additionalServices = [
    {
      name: "LEDGERS - Compliance Platform",
      description: "Invoicing, GST Filing, Banking and Payroll",
      image: "assets/ledger.png"
    },
    {
      name: "Save 18% with GST Registration",
      description: "Get GST eInvoice with Input Tax Credit",
      image: "assets/gst.jpg"
    }
  ];

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Offers and discounts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Main Halal Certification Offer */}
        <div className="border rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Halal Certification</h3>
            <span className="text-lg font-bold text-green-600">₹7,999</span>
          </div>
          <ul className="space-y-2 text-sm text-gray-600 mb-4">
            {services.map((service, index) => (
              <li key={index}>• {service.title}</li>
            ))}
          </ul>
          <button
            onClick={handleAddToCart}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-medium transition-colors"
          >
            Add to Cart
          </button>
        </div>

        {/* Additional Services */}
        {additionalServices.map((service, index) => (
          <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center">
              <img
                src={service.image}
                alt={`${service.name} Logo`}
                className="h-10 w-10 mr-4"
              />
              <div>
                <p className="font-bold">{service.name}</p>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default OffersSection;
