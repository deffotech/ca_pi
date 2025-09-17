import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Award, Globe } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About United Fillings</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your trusted partner in business compliance and registration
            services across India
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To simplify business compliance and registration processes in
                India by providing professional, reliable, and affordable
                services that help entrepreneurs and businesses focus on what
                they do best - growing their business.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become India's most trusted platform for business services,
                empowering millions of entrepreneurs to start, manage, and grow
                their businesses with complete legal compliance and peace of
                mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">50,000+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">100+</h3>
              <p className="text-gray-600">Services Offered</p>
            </div>
            <div>
              <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">10+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div>
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">28</h3>
              <p className="text-gray-600">States Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
            <div className="text-lg text-gray-600 leading-relaxed space-y-6">
              <p>
                Founded in 2014, United Fillings started with a simple mission: to make
                business registration and compliance accessible to every
                entrepreneur in India. What began as a small team of legal and
                technology experts has grown into one of India's leading
                business services platforms.
              </p>
              <p>
                We recognized that navigating India's complex regulatory
                landscape was one of the biggest challenges facing new
                businesses. Traditional legal services were expensive,
                time-consuming, and often inaccessible to small businesses and
                startups.
              </p>
              <p>
                Today, we've helped over 50,000 businesses across India with
                their registration, compliance, and legal needs. Our platform
                combines cutting-edge technology with expert knowledge to
                deliver services that are fast, affordable, and reliable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Transparency
              </h3>
              <p className="text-gray-600">
                We believe in complete transparency in our processes, pricing,
                and timelines. No hidden costs, no surprises.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Excellence
              </h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from customer
                service to technical innovation and legal expertise.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Customer First
              </h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. We're
                committed to their success and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
