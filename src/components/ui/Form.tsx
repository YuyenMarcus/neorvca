'use client';

import React from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

interface FormProps {
  onSubmit: (data: any) => void;
  schema: z.ZodType<any>;
  defaultValues?: Record<string, any>;
  children: React.ReactNode | ((form: UseFormReturn<any>) => React.ReactNode);
}

export function Form({ onSubmit, schema, defaultValues = {}, children }: FormProps) {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      {typeof children === 'function' ? children(form) : children}
    </form>
  );
}

interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  register: any;
  error?: any;
  className?: string;
}

export function Input({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  register,
  error,
  className = '',
}: InputProps) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="mt-1">
        <input
          type={type}
          id={name}
          placeholder={placeholder}
          {...register(name)}
          className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
            error ? 'border-red-500' : ''
          }`}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
      </div>
    </div>
  );
}

interface TextAreaProps extends Omit<InputProps, 'type'> {
  rows?: number;
}

export function TextArea({
  label,
  name,
  placeholder,
  required = false,
  register,
  error,
  rows = 4,
  className = '',
}: TextAreaProps) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="mt-1">
        <textarea
          id={name}
          rows={rows}
          placeholder={placeholder}
          {...register(name)}
          className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
            error ? 'border-red-500' : ''
          }`}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
      </div>
    </div>
  );
}

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function Button({
  type = 'button',
  variant = 'primary',
  children,
  onClick,
  disabled = false,
  className = '',
}: ButtonProps) {
  const baseStyles = 'inline-flex justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';
  
  const variantStyles = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600',
    secondary: 'bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50',
    danger: 'bg-red-600 text-white hover:bg-red-500 focus-visible:outline-red-600',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
    >
      {children}
    </button>
  );
} 