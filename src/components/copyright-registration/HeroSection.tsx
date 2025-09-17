import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src="assets/copyright-registration.jpg"
            alt="Copyright Registration Service"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Copyright Registration: Protect Your Creative Works
          </h1>
          <div className="flex items-center mt-4">
            <div className="flex text-yellow-400">
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
            </div>
            <span className="ml-2 text-gray-600">(339)</span>
          </div>
          <p className="mt-4 text-gray-600">
            Copyright is an essential principle that safeguards the creations of
            artists and authors. It grants them unique rights over their works'
            distribution, sharing, and replication. Copyright Registration in
            India provides legal protection and offers creators enhanced
            authority over their creations.
          </p>
          <p className="mt-2 text-gray-600">
            At United Fillings, we have streamlined the process of Registration of a
            Copyright in India to make securing your intellectual property
            straightforward and effective. With years of experience in
            intellectual property, our team is equipped with the knowledge to
            guide you through every step of the Online Copyright Registration
            process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
