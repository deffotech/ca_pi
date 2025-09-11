import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Breadcrumb = () => {
  return (
    <nav className="flex items-center text-sm text-gray-500">
      <Link to="/" className="hover:text-green-600">IndiaFilings</Link>
      <ChevronRight className="h-4 w-4 mx-1" />
      <Link to="/llp-compliance" className="hover:text-green-600">LLP Compliance</Link>
      <ChevronRight className="h-4 w-4 mx-1" />
      <span className="font-medium text-blue-600">Winding Up - LLP</span>
    </nav>
  );
};

export default Breadcrumb;