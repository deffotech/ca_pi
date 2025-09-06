import { ChevronRight } from "lucide-react";
import { useState } from "react";

const RequirementsSection = () => {
  const [showMore, setShowMore] = useState(false);
  
  const requirements = [
    "PAN Card",
    "Electricity Bill", 
    "Aadhaar Card"
  ];
  
  const additionalRequirements = [
    "Bank Statement",
    "Address Proof",
    "Identity Proof",
    "Passport Size Photo"
  ];

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <div className="space-y-3">
        {requirements.map((req, index) => (
          <div key={index} className="flex items-center text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
            <ChevronRight className="h-4 w-4 mr-2" />
            {req}
          </div>
        ))}
        {showMore && additionalRequirements.map((req, index) => (
          <div key={index} className="flex items-center text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
            <ChevronRight className="h-4 w-4 mr-2" />
            {req}
          </div>
        ))}
        <button 
          onClick={() => setShowMore(!showMore)}
          className="text-blue-600 text-sm underline hover:no-underline"
        >
          {showMore ? "Show Less" : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default RequirementsSection;