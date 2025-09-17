import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type BusinessType = "public-limited" | "company" | "llp" | "opc";

const businessTypes = {
  "public-limited": {
    title: "Public Limited Company",
    description: "A Public Limited Company is a separate legal entity with limited liability and a minimum of 3 directors and 7 shareholders. It is eligible to raise capital from the public by issuing shares, making it a suitable structure for large enterprises aiming for substantial funding, market expansion, and increased corporate transparency."
  },
  "company": {
    title: "Private Limited Company", 
    description: "A Private Limited Company is a separate legal entity with limited liability and a minimum of 2 shareholders and 2 directors. This is the most preferred entity for startups and SMEs due to ease of fundraising, scalability, and investor trust."
  },
  "llp": {
    title: "Limited Liability Partnership",
    description: "An LLP offers the flexibility of a partnership with the benefits of limited liability and reduced compliance. Popular among professionals and small service businesses due to cost-effective compliance and partner protection."
  },
  "opc": {
    title: "One Person Company",
    description: "An OPC allows a single individual to own and manage a limited liability company without needing a partner. Ideal for solo entrepreneurs who want corporate status and limited liability without diluting control."
  }
};

const HeroSection = () => {
  const [selectedType, setSelectedType] = useState<BusinessType>("public-limited");
  const [companyName, setCompanyName] = useState("");
  const [selectedState, setSelectedState] = useState("");

  return (
    <div className="bg-white">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Left side - Phone mockup */}
        <div className="relative">
          <div className="bg-gray-900 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
            <div className="relative z-10">
              <div className="bg-white rounded-2xl p-6 mx-auto max-w-sm shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">11:30</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
                    <div className="w-1 h-2 bg-gray-400 rounded-sm"></div>
                    <div className="w-6 h-2 bg-green-500 rounded-sm"></div>
                  </div>
                </div>
                
                <div className="bg-green-600 text-white p-3 rounded-lg mb-4">
                  <p className="text-xs">Hello, Good Morning</p>
                  <p className="text-xs font-semibold">YOUR HOLDING CORPORATION</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <input 
                    type="text" 
                    placeholder="Search Services" 
                    className="w-full bg-white rounded-md px-3 py-2 text-sm border"
                  />
                </div>

                <div className="bg-orange-100 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-600">Today's Sales</p>
                      <p className="font-bold">INR 40,000</p>
                    </div>
                    <div className="w-8 h-8 bg-orange-500 rounded-lg"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600 mt-2">
                    <span>GST Last Filed: Mar 2025</span>
                    <span>ITR e-Filing</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-orange-600 mb-2">Upcoming Compliance</p>
                  <p className="text-xs text-gray-600">GST Return - GSTR1 & GSTR-3B Common Day</p>
                  <div className="flex space-x-2 mt-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="font-medium text-sm mb-2">Features</p>
                  <div className="grid grid-cols-4 gap-2">
                    {["PPC", "Documents", "Unsanctid", "Remainders"].map(item => (
                      <div key={item} className="text-center">
                        <div className="w-8 h-8 bg-gray-200 rounded-lg mx-auto mb-1"></div>
                        <p className="text-xs">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-600">Pending with You</p>
                      <p className="text-blue-600 text-xs">See more</p>
                    </div>
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">0</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <h2 className="text-white text-xl font-bold">Get your business license easily</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Registration form */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Register a Business</h1>
            <Button variant="outline" className="text-gray-700 border-gray-300">
              Consult Advisor
            </Button>
          </div>

          {/* Business Type Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.entries(businessTypes).map(([key, type]) => (
              <Button
                key={key}
                variant={selectedType === key ? "default" : "outline"}
                onClick={() => setSelectedType(key as BusinessType)}
                className={
                  selectedType === key 
                    ? "bg-green-600 text-white hover:bg-green-700" 
                    : "text-gray-700 border-gray-300 hover:bg-gray-50"
                }
              >
                {type.title}
              </Button>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            {businessTypes[selectedType].description}
          </p>

          {/* Form */}
          <div className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Proposed Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                  <SelectItem value="assam">Assam</SelectItem>
                  <SelectItem value="bihar">Bihar</SelectItem>
                  <SelectItem value="chhattisgarh">Chhattisgarh</SelectItem>
                  <SelectItem value="goa">Goa</SelectItem>
                  <SelectItem value="gujarat">Gujarat</SelectItem>
                  <SelectItem value="haryana">Haryana</SelectItem>
                  <SelectItem value="himachal-pradesh">Himachal Pradesh</SelectItem>
                  <SelectItem value="jharkhand">Jharkhand</SelectItem>
                  <SelectItem value="karnataka">Karnataka</SelectItem>
                  <SelectItem value="kerala">Kerala</SelectItem>
                  <SelectItem value="madhya-pradesh">Madhya Pradesh</SelectItem>
                  <SelectItem value="maharashtra">Maharashtra</SelectItem>
                  <SelectItem value="manipur">Manipur</SelectItem>
                  <SelectItem value="meghalaya">Meghalaya</SelectItem>
                  <SelectItem value="mizoram">Mizoram</SelectItem>
                  <SelectItem value="nagaland">Nagaland</SelectItem>
                  <SelectItem value="odisha">Odisha</SelectItem>
                  <SelectItem value="punjab">Punjab</SelectItem>
                  <SelectItem value="rajasthan">Rajasthan</SelectItem>
                  <SelectItem value="sikkim">Sikkim</SelectItem>
                  <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                  <SelectItem value="telangana">Telangana</SelectItem>
                  <SelectItem value="tripura">Tripura</SelectItem>
                  <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                  <SelectItem value="uttarakhand">Uttarakhand</SelectItem>
                  <SelectItem value="west-bengal">West Bengal</SelectItem>
                  <SelectItem value="andaman-nicobar">Andaman and Nicobar Islands</SelectItem>
                  <SelectItem value="chandigarh">Chandigarh</SelectItem>
                  <SelectItem value="dadra-nagar-haveli">Dadra and Nagar Haveli and Daman and Diu</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="jammu-kashmir">Jammu and Kashmir</SelectItem>
                  <SelectItem value="ladakh">Ladakh</SelectItem>
                  <SelectItem value="lakshadweep">Lakshadweep</SelectItem>
                  <SelectItem value="puducherry">Puducherry</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-base font-medium"
              size="lg"
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
