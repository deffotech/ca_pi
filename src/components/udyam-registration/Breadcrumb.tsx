import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <nav className="flex items-center space-x-1 text-sm text-gray-600">
      <Link to="/" className="hover:text-green-600">
        United Fillings
      </Link>
      <ChevronRight className="h-4 w-4" />
      <Link to="/registrations" className="hover:text-green-600">
        Registrations
      </Link>
      <ChevronRight className="h-4 w-4" />
      <span className="text-gray-900">Udyam Registration</span>
    </nav>
  );
};

export default Breadcrumb;
