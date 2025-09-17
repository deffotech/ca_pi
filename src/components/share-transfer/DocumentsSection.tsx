const DocumentsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Required Documents
          </h2>
          <p className="text-xl text-gray-600">
            Documents needed for share transfer process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Transfer Documents
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Share Transfer Deed</li>
              <li>• Original Share Certificates</li>
              <li>• Board Resolution for Transfer</li>
              <li>• NOC from Existing Shareholder</li>
              <li>• Identity Proof of Parties</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Company Records
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Register of Members</li>
              <li>• Articles of Association</li>
              <li>• Share Certificate Register</li>
              <li>• Transfer Register</li>
              <li>• Board Meeting Minutes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;