const DocumentsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Required Documents
          </h2>
          <p className="text-xl text-gray-600">
            Please ensure you have the following documents ready
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Company Documents
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Current Memorandum of Association</li>
              <li>• Articles of Association</li>
              <li>• Certificate of Incorporation</li>
              <li>• Latest Annual Return</li>
              <li>• Board Resolution Draft</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Additional Requirements
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Shareholder Resolution</li>
              <li>• Director Details</li>
              <li>• Amended Clauses Draft</li>
              <li>• Compliance Certificates</li>
              <li>• Supporting Affidavits</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;