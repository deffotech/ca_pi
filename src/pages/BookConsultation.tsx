import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Clock, User, Phone, Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import { LabeledInput, MobileInput } from '@/pages/Auth';

const BookConsultation = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const services = [
    'GST Registration & Filing',
    'Company Registration',
    'Digital Signature Certificate',
    'FSSAI License',
    'Income Tax Filing',
    'Trademark Registration',
    'Business Compliance',
    'Financial Consulting'
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Consultation Booked!",
        description: "We'll contact you within 24 hours to confirm your appointment.",
      });

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        mobile: '',
        service: '',
        preferredDate: '',
        preferredTime: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to book consultation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-2xl mx-auto pt-8">
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-green-600 hover:text-green-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Book Consultation</h1>
          <p className="text-gray-600 mt-2">Schedule a free consultation with our experts</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Benefits */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">What you get:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-gray-700">Free 30-minute consultation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-gray-700">Expert guidance</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-gray-700">Customized solutions</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-gray-700">No obligation</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <LabeledInput
                label="Full Name"
                icon={<User className="w-4 h-4" />}
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                placeholder="Enter your full name"
                required
              />

              <LabeledInput
                label="Email Address"
                icon={<Mail className="w-4 h-4" />}
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <MobileInput
              value={formData.mobile}
              onChange={(e) => handleInputChange('mobile', e.target.value)}
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Service Interest</label>
              <select
                value={formData.service}
                onChange={(e) => handleInputChange('service', e.target.value)}
                required
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <LabeledInput
                label="Preferred Date"
                icon={<Calendar className="w-4 h-4" />}
                type="date"
                value={formData.preferredDate}
                onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                required
                className="cursor-pointer"
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
              <textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Tell us about your requirements..."
                rows={4}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Booking...' : 'Book Consultation'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;