import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-white rounded-lg shadow-sm border p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="relative">
          <div className="bg-blue-700 rounded-lg p-6 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-2">ITR-6 RETURN FILING</h2>
              <p className="text-sm mb-4">
                is for non-exempt companies in India
              </p>
              <div className="bg-white rounded p-4 text-black">
                <img
                  src="/lovable-uploads/30ffb221-3b54-4eee-9a2d-742c45b41360.png"
                  alt="ITR-6 Form Document"
                  className="w-full h-32 object-contain"
                />
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-400 rounded-full -mr-12 -mb-12"></div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p>Company's Pan and two DSCs</p>
            <a href="#" className="text-blue-600 hover:underline">
              Load More
            </a>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">ITR-6 Return Filing</h3>
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <div className="flex text-yellow-400 mr-2">{"★".repeat(5)}</div>
              <span>(1582)</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              ITR-6 return must be filed by all companies registered in India
              before 31st October. Failure to file income tax return for a
              company can lead to penalty and disallowance of loss carry
              forward, if any.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <span className="text-green-800 text-xs font-semibold">
              2 Exclusive Offers
            </span>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Basic</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="text-green-600 mr-2">▶</span>
                Accounts Preparation
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">▶</span>
                Company ITR Filing
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">▶</span>
                Dedicated Accountant
              </li>
            </ul>

            <Button className="w-full bg-green-600 hover:bg-green-700 mt-4">
              ADD
            </Button>
          </div>

          <div className="mt-6 flex justify-between text-sm">
            <a href="#" className="text-blue-600 hover:underline">
              Terms and conditions
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              Refer a Friend
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          ITR 6 - Company Income Tax Filing
        </h1>
        <p className="text-gray-600 mb-6">
          Establishing a business comes with its own set of challenges, and
          navigating the complexities of filing returns is a vital aspect of
          successful operations. ITR-6 filing is a key annual compliance
          requirement for companies in India. Accurately filing ITR-6 on time is
          crucial for ensuring compliance with the Income Tax Act 1961, helping
          businesses avoid penalties and potential legal complications.
        </p>
        <p className="text-gray-600">
          Ready to complete your company's ITR 6? United Fillings experts are here to
          guide you through every step—let's begin your ITR-6 filing today!
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
