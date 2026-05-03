import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { UseFormRegisterReturn } from 'react-hook-form';

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  registration?: UseFormRegisterReturn;
}

export function FormTextarea({
  label,
  error,
  required,
  registration,
  className = '',
  ...props
}: FormTextareaProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      <Label className="text-sm font-semibold text-kodai-dark ml-1 flex items-center">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      <Textarea
        {...registration}
        {...props}
        className={`w-full px-5 py-4 rounded-2xl bg-white border outline-none transition-all duration-200 placeholder:text-gray-300 resize-none text-base ${
          error
            ? 'border-red-500 focus-visible:ring-4 focus-visible:ring-red-500/20 focus-visible:border-red-500'
            : 'border-gray-100 focus-visible:ring-4 focus-visible:ring-kodai-green/5 focus-visible:border-kodai-green'
        }`}
      />
      {error && <p className="text-sm font-medium text-red-500 animate-fade-in">{error}</p>}
    </div>
  );
}
