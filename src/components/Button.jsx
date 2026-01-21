import React from 'react';


const Button = ({
    children,
    onClick,
    type = 'button',
    variant = 'primary',
    loading = false,
    disabled = false,
    fullWidth = false,
    ...props
}) => {
    const baseClasses = `
    px-6 py-3 rounded-lg font-semibold text-base
    transition-all duration-300 ease-in-out
    inline-flex items-center justify-center gap-2
    disabled:opacity-60 disabled:cursor-not-allowed
    ${fullWidth ? 'w-full' : ''}
  `;

    const variantClasses = {
        primary: `
      bg-primary text-white
      hover:bg-primary-light hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/30
      active:translate-y-0
    `,
        gold: `
      bg-gold text-primary
      hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/50
      active:translate-y-0 font-bold
    `,
        outline: `
      bg-transparent text-gold border-2 border-gold
      hover:bg-gold hover:text-primary hover:shadow-lg
    `
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`${baseClasses} ${variantClasses[variant]}`}
            {...props}
        >
            {loading ? (
                <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Loading...</span>
                </>
            ) : (
                children
            )}
        </button>
    );
};

export default Button;
