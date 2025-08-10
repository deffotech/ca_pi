
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Phone } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="bg-gray-50 p-6 rounded-lg shadow-sm sticky top-24">
      <Phone className="h-12 w-12 text-gray-400 mx-auto mb-3" />
      <h3 className="text-xl font-bold text-center">Reach us now</h3>
      <p className="text-center text-sm text-gray-600 mt-2 mb-6">
        Fill out the form below and we'll contact you immediately.
      </p>
      <form className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
              +91
            </span>
            <Input id="phone" type="tel" placeholder="Enter your phone number" className="rounded-l-none" />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="gst-credit" />
          <Label htmlFor="gst-credit" className="text-sm font-normal">
            Enter GSTIN to get 18% GST Credit
          </Label>
        </div>
        <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">
          Contact Us
        </Button>
      </form>
    </aside>
  );
};

export default Sidebar;
