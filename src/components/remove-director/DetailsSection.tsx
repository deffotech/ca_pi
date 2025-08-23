const DetailsSection = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">About Director Removal</h2>
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-4">
          Director removal is a corporate procedure to remove a director from the board of a company. 
          This can happen through voluntary resignation or through a formal removal process by the board 
          or shareholders, depending on the circumstances.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Types of Director Removal</h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li>Voluntary resignation by the director</li>
          <li>Removal by board resolution</li>
          <li>Removal by shareholders through special resolution</li>
          <li>Automatic removal due to disqualification</li>
          <li>Removal for breach of duties</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">Legal Requirements</h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Proper notice to be given</li>
          <li>Board or shareholder resolution required</li>
          <li>MCA forms to be filed within prescribed time</li>
          <li>Update company records and registrar</li>
          <li>Compliance with Companies Act provisions</li>
        </ul>
      </div>
    </section>
  );
};

export default DetailsSection;