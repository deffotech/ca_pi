import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShoppingCart } from "lucide-react";
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const Sidebar = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 'business-income-tax',
      name: 'Business Income Tax',
      price: 2999
    });
    toast.success('Business Income Tax added to cart!');
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 p-6 rounded-lg text-center">
        <ShoppingCart className="h-12 w-12 text-gray-400 mx-auto mb-3" />
        <h3 className="text-lg font-semibold mb-2">Reach us now</h3>
        <p className="text-gray-600 text-sm mb-4">Fill out the form below and we'll contact you immediately.</p>
        
        <div className="space-y-3">
          <div className="text-left">
            <label className="text-sm text-gray-600">Existing User? Login</label>
          </div>
          
          <Input placeholder="Name" className="w-full" />
          <Input placeholder="Email" className="w-full" />
          
          <div className="flex gap-2">
            <Select>
              <SelectTrigger className="w-20">
                <SelectValue placeholder="+91" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+91">+91</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="Phone" className="flex-1" />
          </div>
          
          <Input placeholder="Enter GSTIN to get 18% GST Credit" className="w-full" />
          
          <Button 
            onClick={handleAddToCart}
            className="w-full bg-green-600 hover:bg-green-700"
          >
            Contact Us
          </Button>
        </div>
      </div>

      <div className="border rounded-lg p-4">
        <h3 className="font-semibold mb-3">Related Services</h3>
        <div className="space-y-2">
          <a href="#" className="block text-blue-600 hover:underline text-sm">Income Tax E-Filing</a>
          <a href="#" className="block text-blue-600 hover:underline text-sm">GST Registration</a>
          <a href="#" className="block text-blue-600 hover:underline text-sm">Company Registration</a>
          <a href="#" className="block text-blue-600 hover:underline text-sm">GST Return Filing</a>
          <a href="#" className="block text-blue-600 hover:underline text-sm">TDS Return Filing</a>
        </div>
      </div>

      <div className="border rounded-lg p-4">
        <h3 className="font-semibold mb-3">Popular Searches</h3>
        <div className="space-y-2">
          <a href="#" className="block text-blue-600 hover:underline text-sm">ITR Filing for Business</a>
          <a href="#" className="block text-blue-600 hover:underline text-sm">Partnership Firm ITR</a>
          <a href="#" className="block text-blue-600 hover:underline text-sm">Company Tax Return</a>
          <a href="#" className="block text-blue-600 hover:underline text-sm">LLP Tax Filing</a>
          <a href="#" className="block text-blue-600 hover:underline text-sm">Proprietorship ITR</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
