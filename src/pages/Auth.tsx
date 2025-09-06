import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, Mail, Phone, User } from 'lucide-react';

export const LabeledInput = ({
  label,
  icon,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  className = '',
}: {
  label: string;
  icon?: React.ReactNode;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="relative">
      {icon && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</span>
      )}
      <Input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full ${icon ? 'pl-10' : ''} ${className}`}
        placeholder={placeholder}
      />
    </div>
  </div>
);

export const PasswordInput = ({
  label,
  value,
  onChange,
  showPassword,
  setShowPassword,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword: boolean;
  setShowPassword: (b: boolean) => void;
  required?: boolean;
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="relative">
      <Input
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full pr-10"
        placeholder="Enter your password"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
      >
        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
      </button>
    </div>
  </div>
);

export const MobileInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
    <div className="flex">
      <div className="flex items-center bg-gray-50 border border-r-0 border-gray-300 rounded-l-md px-3">
        <Phone className="w-4 h-4 mr-2 text-gray-400" />
        <span className="text-sm">+91</span>
      </div>
      <Input
        type="tel"
        value={value}
        onChange={onChange}
        required
        className="flex-1 rounded-l-none"
        placeholder="Mobile Number"
      />
    </div>
  </div>
);
