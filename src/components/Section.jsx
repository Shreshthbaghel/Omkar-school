import React from 'react';

const Section = ({
    children,
    id,
    title,
    subtitle,
    className = '',
    bgColor = 'bg-white'
}) => {
    return (
        <section id={id} className={`${bgColor} py-16 md:py-20 ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {(title || subtitle) && (
                    <div className="text-center mb-12">
                        {title && (
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
