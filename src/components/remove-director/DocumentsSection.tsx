const DocumentsSection = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Documents Required for Director Removal</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">For Voluntary Resignation</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Resignation letter from director
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Board resolution accepting resignation
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Notice of resignation to registrar
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">For Board Removal</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Special resolution by shareholders
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Notice of general meeting
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Director's representation (if any)
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Minutes of the meeting
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;