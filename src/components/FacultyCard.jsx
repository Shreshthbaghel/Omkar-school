import React, { useState } from 'react';

const FacultyCard = ({
    name,
    title,
    photo,
    bio,
    qualifications,
    experience,
    highlight = false
}) => {
    const [imageError, setImageError] = useState(false);

    const placeholderSrc = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=1a2947&color=d4a853&size=300&bold=true`;

    return (
        <div className={`
      bg-white rounded-xl overflow-hidden shadow-lg 
      transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
      ${highlight ? 'ring-4 ring-gold shadow-gold/30' : 'border-t-4 border-gold'}
    `}>
            <div className="relative w-full pt-[100%] bg-gradient-to-br from-primary/10 to-gold/10 overflow-hidden group">
                <img
                    src={imageError ? placeholderSrc : photo}
                    alt={name}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={() => setImageError(true)}
                />
                {highlight && (
                    <div className="absolute top-3 right-3 bg-gold text-primary px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                        Principal
                    </div>
                )}
            </div>
            <div className="p-5">
                <h3 className="text-xl font-bold text-primary mb-2">{name}</h3>
                <p className="text-base font-semibold text-gold mb-2">{title}</p>
                {qualifications && (
                    <p className="text-sm text-gray-500 italic mb-3">{qualifications}</p>
                )}
                {bio && (
                    <p className="text-sm text-gray-600 leading-relaxed">{bio}</p>
                )}
                {experience && (
                    <p className="text-sm text-gray-600 leading-relaxed">{experience}</p>
                )}
            </div>
        </div>
    );
};

export default FacultyCard;
