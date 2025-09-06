
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ShoppingBag } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="bg-gray-50 p-6 rounded-lg shadow-sm sticky top-24">
      <div className="text-center border-b pb-6">
        <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-lg font-medium text-gray-900">Reach us now</h3>
        <p className="mt-1 text-sm text-gray-500">Get personalized assistance for your business needs!</p>
      </div>

      <div className="text-center my-6">
        <span className="text-sm text-gray-600">Existing User? </span>
        <a href="#" className="font-medium text-green-600 hover:text-green-500">Login</a>
      </div>

      <form className="space-y-4">
        <div>
          <Label htmlFor="name" className="sr-only">Name</Label>
          <Input id="name" placeholder="Name" />
        </div>
        <div>
          <Label htmlFor="email" className="sr-only">Email</Label>
          <Input id="email" type="email" placeholder="Email" />
        </div>
        <div>
          <Label htmlFor="phone" className="sr-only">Phone Number</Label>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
              🇮🇳 +91
            </span>
            <Input id="phone" type="tel" placeholder="Phone" className="rounded-l-none" />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="gst-credit" />
          <Label htmlFor="gst-credit" className="text-sm font-normal text-gray-600">
            Enter GSTIN to get 18% GST Credit
          </Label>
        </div>
        <Button 
          type="submit" 
          className="w-full" 
          style={{ backgroundColor: '#C5BAFF', borderColor: '#C5BAFF', color: '#000' }}
        >
          Contact Us
        </Button>
      </form>
    </aside>
  );
};

export default Sidebar;
