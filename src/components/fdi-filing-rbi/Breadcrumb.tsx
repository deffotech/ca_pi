import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Breadcrumb = () => (
  <nav className="flex" aria-label="Breadcrumb">
    <ol className="inline-flex items-center space-x-1 md:space-x-3">
      <li className="inline-flex items-center">
        <Link
          to="/"
          className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
        >
          United Fillings
        </Link>
      </li>
      <li>
        <div className="flex items-center">
          <ChevronRight className="h-5 w-5 text-gray-400" />
          <span className="ml-1 text-sm font-medium text-gray-700 md:ml-2">
            Compliance
          </span>
        </div>
      </li>
      <li aria-current="page">
        <div className="flex items-center">
          <ChevronRight className="h-5 w-5 text-gray-400" />
          <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
            FDI Filing with RBI
          </span>
        </div>
      </li>
    </ol>
  </nav>
);

export default Breadcrumb;
