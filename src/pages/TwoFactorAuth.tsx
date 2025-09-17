import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Shield, ArrowLeft, Smartphone, Key } from 'lucide-react';

const TwoFactorAuth = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleToggle2FA = async () => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsEnabled(!isEnabled);
      toast({
        title: "Success",
        description: isEnabled 
          ? "Two-factor authentication disabled" 
          : "Two-factor authentication enabled",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update two-factor authentication",
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
          <h1 className="text-3xl font-bold text-gray-900">Two-Factor Authentication</h1>
          <p className="text-gray-600 mt-2">Add an extra layer of security to your account</p>
        </div>

        <div className="space-y-6">
          {/* Current Status */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Shield className={`w-8 h-8 mr-3 ${isEnabled ? 'text-green-600' : 'text-gray-400'}`} />
                <div>
                  <h3 className="text-lg font-semibold">Two-Factor Authentication</h3>
                  <p className="text-gray-600">
                    Status: {isEnabled ? 'Enabled' : 'Disabled'}
                  </p>
                </div>
              </div>
              <button
                onClick={handleToggle2FA}
                disabled={isLoading}
                className={`px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 ${
                  isEnabled
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {isLoading ? 'Processing...' : (isEnabled ? 'Disable' : 'Enable')}
              </button>
            </div>
          </div>

          {/* Setup Instructions */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">How to Set Up 2FA</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Smartphone className="w-6 h-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">1. Download an Authenticator App</h4>
                  <p className="text-gray-600">Install Google Authenticator, Authy, or similar app on your mobile device</p>
                </div>
              </div>
              <div className="flex items-start">
                <Key className="w-6 h-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">2. Scan QR Code</h4>
                  <p className="text-gray-600">Use your authenticator app to scan the QR code we'll provide</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="w-6 h-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">3. Verify Setup</h4>
                  <p className="text-gray-600">Enter the verification code from your app to complete setup</p>
                </div>
              </div>
            </div>
          </div>

          {/* Backup Codes */}
          {isEnabled && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Backup Codes</h3>
              <p className="text-gray-600 mb-4">
                Save these backup codes in a safe place. You can use them to access your account if you lose your device.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 grid grid-cols-2 gap-2 font-mono text-sm">
                <div>1234-5678</div>
                <div>9876-5432</div>
                <div>2468-1357</div>
                <div>8642-9753</div>
                <div>1122-3344</div>
                <div>5566-7788</div>
              </div>
              <button className="mt-4 text-green-600 hover:text-green-700 font-medium">
                Generate New Codes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TwoFactorAuth;