const DetailsSection = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Setup Business in UAE</h2>
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-4">
          The United Arab Emirates offers excellent business opportunities with its strategic location, 
          business-friendly policies, and tax advantages. Setting up a business in UAE provides access 
          to Middle Eastern and international markets.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Business Structure Options</h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li>Mainland Company - Full UAE market access</li>
          <li>Free Zone Company - 100% foreign ownership</li>
          <li>Offshore Company - Asset protection and privacy</li>
          <li>Branch Office - Extension of foreign company</li>
          <li>Representative Office - Liaison and marketing</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Benefits</h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>No corporate tax in most emirates</li>
          <li>100% profit repatriation</li>
          <li>Strategic location between East and West</li>
          <li>World-class infrastructure</li>
          <li>Ease of doing business</li>
        </ul>
      </div>
    </section>
  );
};

export default DetailsSection;