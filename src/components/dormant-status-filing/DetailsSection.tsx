const DetailsSection = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">About Dormant Company Status</h2>
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-4">
          A dormant company is one that has been inactive for a financial year, meaning it has not 
          carried out any significant business activities. Such companies can apply for dormant status 
          to reduce their compliance burden under the Companies Act, 2013.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Eligibility Criteria</h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li>No significant accounting transactions during the financial year</li>
          <li>Company has not carried out any business operations</li>
          <li>No revenue generation during the period</li>
          <li>Minimal expenses only for maintaining dormant status</li>
          <li>All statutory compliances are up to date</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">Benefits of Dormant Status</h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Reduced compliance requirements</li>
          <li>No need to file annual returns</li>
          <li>Exemption from holding AGM</li>
          <li>Lower penalties for non-compliance</li>
          <li>Easier reactivation when business resumes</li>
        </ul>
      </div>
    </section>
  );
};

export default DetailsSection;