const DetailsSection = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">About Director Change</h2>
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-4">
          Director change is a common corporate action that involves appointing new directors or changing 
          existing directors in a company. This process requires proper documentation and compliance with 
          the Ministry of Corporate Affairs (MCA) regulations.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3">When is Director Change Required?</h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li>Resignation of existing directors</li>
          <li>Business expansion requiring additional directors</li>
          <li>Change in business strategy or management</li>
          <li>Compliance with regulatory requirements</li>
          <li>Board restructuring</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">Process</h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Board resolution for director change</li>
          <li>Obtain consent from new director</li>
          <li>File necessary forms with MCA</li>
          <li>Update company records</li>
          <li>Issue compliance certificate</li>
        </ul>
      </div>
    </section>
  );
};

export default DetailsSection;