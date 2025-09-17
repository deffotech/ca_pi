const DocumentsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Required Documents
          </h2>
          <p className="text-xl text-gray-600">
            Documents needed for LLP winding up process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              LLP Records
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• LLP Agreement Copy</li>
              <li>• Certificate of Incorporation</li>
              <li>• Form 11 (Annual Return)</li>
              <li>• Form 8 (Statement of Accounts)</li>
              <li>• Bank Account Statements</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Closure Documents
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Special Resolution for Winding Up</li>
              <li>• Liquidator Consent Letter</li>
              <li>• Asset Valuation Report</li>
              <li>• Debt Settlement Certificates</li>
              <li>• Final Account Statements</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;