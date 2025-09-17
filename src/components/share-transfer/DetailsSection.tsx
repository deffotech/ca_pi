const DetailsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About Share Transfer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Share transfer involves the process of transferring ownership of shares from one person to another. This requires proper documentation, board approval, and compliance with company law.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Transfer Process
            </h3>
            <p className="text-gray-600">
              The transfer process involves share transfer deed, board approval, updating share certificates, and maintaining proper records.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Legal Compliance
            </h3>
            <p className="text-gray-600">
              Ensure all transfers comply with Companies Act, AOA provisions, and maintain proper documentation for audit purposes.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibrent text-gray-900 mb-3">
              Record Maintenance
            </h3>
            <p className="text-gray-600">
              Update register of members, issue new share certificates, and maintain proper books of accounts as per statutory requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;