const DocumentsSection = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Documents Required for LLP Form 11 Filing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">LLP Documents</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              LLP agreement and amendments
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Certificate of incorporation
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Annual accounts and balance sheet
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Statement of accounts and solvency
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Partner Information</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Details of all partners
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Capital contribution by partners
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Changes in partnership during year
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              DIN/DPIN of designated partners
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;