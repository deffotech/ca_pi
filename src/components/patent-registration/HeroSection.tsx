import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Patent Registration: Protect Your Innovations
        </h1>
        <div className="flex items-center mt-4">
          <div className="flex text-yellow-400">
            <Star fill="currentColor" className="w-5 h-5" />
            <Star fill="currentColor" className="w-5 h-5" />
            <Star fill="currentColor" className="w-5 h-5" />
            <Star fill="currentColor" className="w-5 h-5" />
            <Star fill="currentColor" className="w-5 h-5" />
          </div>
          <span className="ml-2 text-gray-600">(150+)</span>
        </div>
        <p className="mt-4 text-gray-600">
          Patents are pivotal in protecting the intellectual property rights of
          fresh innovations, be they products, services, or processes. In India,
          to ensure these rights are recognized and upheld, one must adhere to
          the Indian Patent Act of 1970 for patent registration.
        </p>
        <p className="mt-2 text-gray-600">
          At United Fillings, we understand the intricacies of the landscape of patent
          filing in India. With our experts and streamlined processes, we guide
          you step-by-step, ensuring your invention stands out and receives the
          protection for your Patent India it rightfully deserves. Ready to
          safeguard your innovation? Let United Fillings lead the way to a hassle-free
          patent registration online process.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
