import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Shield, Eye, Mail, Bell, Users, ArrowLeft } from 'lucide-react';

const PrivacySettings = () => {
  const [settings, setSettings] = useState({
    profileVisibility: 'private',
    emailNotifications: true,
    smsNotifications: false,
    marketingEmails: false,
    dataSharing: false,
    activityTracking: true,
    cookiePreferences: 'necessary'
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSettingChange = (setting: string, value: any) => {
    setSettings(prev => ({ ...prev, [setting]: value }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Settings Saved",
        description: "Your privacy settings have been updated successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save settings. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const ToggleSwitch = ({ 
    checked, 
    onChange, 
    label, 
    description 
  }: { 
    checked: boolean; 
    onChange: (checked: boolean) => void;
    label: string;
    description: string;
  }) => (
    <div className="flex items-start justify-between p-4 border rounded-lg">
      <div className="flex-1">
        <h4 className="font-medium text-gray-900">{label}</h4>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
      <button
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          checked ? 'bg-green-600' : 'bg-gray-200'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            checked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );

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
          <h1 className="text-3xl font-bold text-gray-900">Privacy Settings</h1>
          <p className="text-gray-600 mt-2">Manage your privacy and data preferences</p>
        </div>

        <div className="space-y-6">
          {/* Profile Privacy */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Eye className="w-6 h-6 text-green-600 mr-3" />
              <h3 className="text-lg font-semibold">Profile Visibility</h3>
            </div>
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="profileVisibility"
                  value="public"
                  checked={settings.profileVisibility === 'public'}
                  onChange={(e) => handleSettingChange('profileVisibility', e.target.value)}
                  className="mr-3"
                />
                <div>
                  <div className="font-medium">Public</div>
                  <div className="text-sm text-gray-600">Anyone can see your profile</div>
                </div>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="profileVisibility"
                  value="private"
                  checked={settings.profileVisibility === 'private'}
                  onChange={(e) => handleSettingChange('profileVisibility', e.target.value)}
                  className="mr-3"
                />
                <div>
                  <div className="font-medium">Private</div>
                  <div className="text-sm text-gray-600">Only you can see your profile</div>
                </div>
              </label>
            </div>
          </div>

          {/* Communication Preferences */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Bell className="w-6 h-6 text-green-600 mr-3" />
              <h3 className="text-lg font-semibold">Communication Preferences</h3>
            </div>
            <div className="space-y-4">
              <ToggleSwitch
                checked={settings.emailNotifications}
                onChange={(checked) => handleSettingChange('emailNotifications', checked)}
                label="Email Notifications"
                description="Receive updates and notifications via email"
              />
              <ToggleSwitch
                checked={settings.smsNotifications}
                onChange={(checked) => handleSettingChange('smsNotifications', checked)}
                label="SMS Notifications"
                description="Receive important updates via text message"
              />
              <ToggleSwitch
                checked={settings.marketingEmails}
                onChange={(checked) => handleSettingChange('marketingEmails', checked)}
                label="Marketing Emails"
                description="Receive promotional offers and newsletters"
              />
            </div>
          </div>

          {/* Data & Privacy */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-green-600 mr-3" />
              <h3 className="text-lg font-semibold">Data & Privacy</h3>
            </div>
            <div className="space-y-4">
              <ToggleSwitch
                checked={settings.dataSharing}
                onChange={(checked) => handleSettingChange('dataSharing', checked)}
                label="Data Sharing"
                description="Allow sharing anonymized data to improve our services"
              />
              <ToggleSwitch
                checked={settings.activityTracking}
                onChange={(checked) => handleSettingChange('activityTracking', checked)}
                label="Activity Tracking"
                description="Track your activity to provide personalized recommendations"
              />
            </div>
          </div>

          {/* Cookie Preferences */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-green-600 mr-3" />
              <h3 className="text-lg font-semibold">Cookie Preferences</h3>
            </div>
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="cookiePreferences"
                  value="necessary"
                  checked={settings.cookiePreferences === 'necessary'}
                  onChange={(e) => handleSettingChange('cookiePreferences', e.target.value)}
                  className="mr-3"
                />
                <div>
                  <div className="font-medium">Necessary Only</div>
                  <div className="text-sm text-gray-600">Only essential cookies for basic functionality</div>
                </div>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="cookiePreferences"
                  value="all"
                  checked={settings.cookiePreferences === 'all'}
                  onChange={(e) => handleSettingChange('cookiePreferences', e.target.value)}
                  className="mr-3"
                />
                <div>
                  <div className="font-medium">All Cookies</div>
                  <div className="text-sm text-gray-600">Allow all cookies for enhanced experience</div>
                </div>
              </label>
            </div>
          </div>

          {/* Save Button */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <button
              onClick={handleSave}
              disabled={isLoading}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Saving...' : 'Save Settings'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacySettings;