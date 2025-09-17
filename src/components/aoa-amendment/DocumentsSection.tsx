const DocumentsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Required Documents
          </h2>
          <p className="text-xl text-gray-600">
            Documents needed for AOA amendment process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Company Records
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Current Articles of Association</li>
              <li>• Memorandum of Association</li>
              <li>• Certificate of Incorporation</li>
              <li>• Board Resolution Copy</li>
              <li>• Shareholder Register</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Amendment Details
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Proposed Amendment Text</li>
              <li>• Special Resolution Draft</li>
              <li>• Director Consent Letters</li>
              <li>• Explanatory Statement</li>
              <li>• Supporting Documents</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;