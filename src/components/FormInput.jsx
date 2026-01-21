import React from 'react';

const FormInput = ({
    label,
    name,
    type = 'text',
    value,
    onChange,
    error,
    required = false,
    placeholder,
    options,
    rows = 4,
    ...props
}) => {
    const inputClasses = `
    w-full px-4 py-3 rounded-lg border-2 
    transition-all duration-200
    ${error
            ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200'
            : 'border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20'
        }
    focus:outline-none
    disabled:bg-gray-100 disabled:cursor-not-allowed
  `;

    return (
        <div className="mb-4">
            <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-2">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>

            {type === 'select' ? (
                <select
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={inputClasses}
                    required={required}
                    {...props}
                >
                    <option value="">Select {label}</option>
                    {options?.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            ) : type === 'textarea' ? (
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    rows={rows}
                    className={inputClasses}
                    required={required}
                    {...props}
                />
            ) : (
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={inputClasses}
                    required={required}
                    {...props}
                />
            )}

            {error && (
                <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {error}
                </p>
            )}
        </div>
    );
};

export default FormInput;
