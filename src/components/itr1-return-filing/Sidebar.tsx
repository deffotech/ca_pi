import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const Sidebar = () => {
  const { addToCart } = useCart();

  const handleAddIncomeTaxService = () => {
    addToCart({
      id: "income-tax-e-filing",
      name: "Income Tax E-Filing",
      price: 999,
    });
    toast.success("Income Tax E-Filing added to cart!");
  };

  const handleAddPartnershipCompliance = () => {
    addToCart({
      id: "partnership-compliance",
      name: "Partnership Compliance",
      price: 2499,
    });
    toast.success("Partnership Compliance added to cart!");
  };

  return (
    <div className="space-y-6">
      {/* Service Cards */}
      <Card className="p-6 bg-blue-600 text-white">
        <h3 className="font-bold text-lg mb-4">INCOME TAX E-FILING</h3>
        <p className="text-sm mb-4">Avail our professional support services</p>
        <Button
          onClick={handleAddIncomeTaxService}
          className="w-full bg-green-500 hover:bg-green-600"
        >
          Add to Cart
        </Button>
      </Card>

      <Card className="p-6 bg-blue-600 text-white">
        <h3 className="font-bold text-lg mb-4">PARTNERSHIP COMPLIANCE</h3>
        <p className="text-sm mb-4">Avail our professional support services</p>
        <Button
          onClick={handleAddPartnershipCompliance}
          className="w-full bg-green-500 hover:bg-green-600"
        >
          Add to Cart
        </Button>
      </Card>

      {/* Popular Searches */}
      <Card className="p-6">
        <h3 className="font-bold text-lg mb-4">Popular Searches</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Partnership",
            "Digital Logo Designing",
            "Annual Registration",
            "Copyright Registration",
            "Indian Startup",
            "GSTRegistration",
            "12A Registration",
            "Annual Certificate",
            "Online Aadhar",
            "CAMPaigning",
            "Service License",
            "LLPParmentership",
            "Company Service",
            "Business Partnership",
            "Income Registration",
          ].map((item, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700"
            >
              {item}
            </span>
          ))}
        </div>
      </Card>

      {/* Footer Links */}
      <Card className="p-6">
        <div className="grid grid-cols-3 gap-4 text-xs">
          <div>
            <h4 className="font-semibold mb-2">United Fillings</h4>
            <ul className="space-y-1 text-gray-600">
              <li>About United Fillings</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Platform</h4>
            <ul className="space-y-1 text-gray-600">
              <li>Business Search</li>
              <li>Directory</li>
              <li>FileSearch</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Usage</h4>
            <ul className="space-y-1 text-gray-600">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
