const DocumentsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Required Documents
          </h2>
          <p className="text-xl text-gray-600">
            Documents needed for Udyam registration process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Business Documents
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Aadhaar Card of Proprietor/Partner</li>
              <li>• PAN Card of Business</li>
              <li>• GSTIN Certificate (if applicable)</li>
              <li>• Business Registration Certificate</li>
              <li>• Bank Account Details</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Financial Details
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Investment in Plant & Machinery</li>
              <li>• Annual Turnover Details</li>
              <li>• Previous Year Financial Data</li>
              <li>• Employment Information</li>
              <li>• Business Activity Details</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;