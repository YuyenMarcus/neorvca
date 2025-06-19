import React from "react";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  error?: FieldErrors;
  className?: string;
}

export function Input({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  register,
  error,
  className = "",
}: InputProps) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="mt-2">
        <input
          type={type}
          id={name}
          placeholder={placeholder}
          {...register(name, { required })}
          className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
            error?.[name]
              ? "ring-red-300 placeholder:text-red-300 focus:ring-red-500"
              : "ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600"
          } focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
        />
        {error?.[name] && (
          <p className="mt-2 text-sm text-red-600">
            {error[name]?.message as string}
          </p>
        )}
      </div>
    </div>
  );
}

interface TextAreaProps extends Omit<InputProps, "type"> {
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
  className = "",
}: TextAreaProps) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="mt-2">
        <textarea
          id={name}
          rows={rows}
          placeholder={placeholder}
          {...register(name, { required })}
          className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
            error?.[name]
              ? "ring-red-300 placeholder:text-red-300 focus:ring-red-500"
              : "ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600"
          } focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
        />
        {error?.[name] && (
          <p className="mt-2 text-sm text-red-600">
            {error[name]?.message as string}
          </p>
        )}
      </div>
    </div>
  );
}

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function Button({
  type = "button",
  variant = "primary",
  children,
  onClick,
  disabled = false,
  className = "",
}: ButtonProps) {
  const baseStyles = "inline-flex justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  
  const variantStyles = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600",
    secondary: "bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
    danger: "bg-red-600 text-white hover:bg-red-500 focus-visible:outline-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
} 