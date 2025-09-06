const DocumentsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Required Documents
          </h2>
          <p className="text-xl text-gray-600">
            Documents needed for FCRA registration process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Organization Documents
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Registration Certificate (Trust/Society/Section 8)</li>
              <li>• Memorandum & Articles of Association</li>
              <li>• 12A & 80G Certificates</li>
              <li>• Audited Financial Statements (3 years)</li>
              <li>• PAN & TAN Certificates</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Additional Requirements
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Bank Account Details</li>
              <li>• Board Resolution for FCRA</li>
              <li>• Key Personnel Details</li>
              <li>• Activity Report (3 years)</li>
              <li>• Commitment Letter from Donor</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;