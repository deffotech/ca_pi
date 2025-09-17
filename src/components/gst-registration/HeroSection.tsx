import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          GST Registration: Requirements, Process, & Expert Assistance
        </h1>
        <div className="flex items-center mt-4">
          <div className="flex text-yellow-400">
            <Star fill="currentColor" className="w-5 h-5" />
            <Star fill="currentColor" className="w-5 h-5" />
            <Star fill="currentColor" className="w-5 h-5" />
            <Star fill="currentColor" className="w-5 h-5" />
            <Star fill="currentColor" className="w-5 h-5" />
          </div>
          <span className="ml-2 text-gray-600">(13147+)</span>
        </div>
        <p className="mt-4 text-gray-600">
          GST registration is an essential compliance for any business or
          professional in India. It is the process of obtaining a unique
          15-digit Goods and Services Tax Identification Number (GSTIN), making
          your business liable to pay GST and enabling authorities to monitor
          transactions effectively. Whether you meet the set criteria, are
          applying for a new GST registration, or wish to voluntarily obtain GST
          registration, United Fillings can help you seamlessly complete the process and
          stay compliant under the GST framework.
        </p>
        <p className="mt-2 text-gray-600">
          Contact our experts today to streamline your GST registration process!
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
