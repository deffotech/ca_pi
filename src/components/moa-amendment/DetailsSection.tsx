const DetailsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About MOA Amendment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Memorandum of Association (MOA) is a fundamental document that defines your company's objectives and scope of activities. Amendment may be required when changing business activities or company structure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              When Required
            </h3>
            <p className="text-gray-600">
              MOA amendment is required when changing company name, registered office, objectives clause, or authorized capital structure.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Legal Process
            </h3>
            <p className="text-gray-600">
              The amendment requires board resolution, shareholder approval, and filing with MCA using appropriate forms and documents.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Compliance
            </h3>
            <p className="text-gray-600">
              Ensures your company remains compliant with corporate laws and regulations while adapting to business changes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;