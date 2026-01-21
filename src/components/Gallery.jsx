import React, { useState } from 'react';

const Gallery = ({ images = [] }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Default placeholder images if none provided
    const galleryImages = images.length > 0 ? images : [
        {
            id: 1,
            src: '/images/gallery/event-1.jpg',
            alt: 'Annual Day Celebration',
            caption: 'Annual Day Celebration 2024'
        },
        {
            id: 2,
            src: '/images/gallery/event-2.jpg',
            alt: 'Sports Day',
            caption: 'Sports Day - Students in Action'
        },
        {
            id: 3,
            src: '/images/gallery/event-3.jpg',
            alt: 'Cultural Program',
            caption: 'Cultural Program Performance'
        },
        {
            id: 4,
            src: '/images/gallery/event-4.jpg',
            alt: 'Science Exhibition',
            caption: 'Science Exhibition 2024'
        },
        {
            id: 5,
            src: '/images/gallery/event-5.jpg',
            alt: 'Music Competition',
            caption: 'Music Competition Winners'
        },
        {
            id: 6,
            src: '/images/gallery/event-6.jpg',
            alt: 'Independence Day',
            caption: 'Independence Day Celebration'
        }
    ];

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.map((image) => (
                    <div
                        key={image.id}
                        className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-gold"
                        onClick={() => setSelectedImage(image)}
                    >
                        <div className="aspect-video bg-gradient-to-br from-primary/10 to-gold/10 overflow-hidden">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                loading="lazy"
                                 onError={() => setImgSrc("/placeholder.jpg")}
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-sm font-medium">{image.caption}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl w-full">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-12 right-0 text-white hover:text-gold transition-colors"
                            aria-label="Close"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="w-full h-auto rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <p className="text-white text-center mt-4 text-lg">{selectedImage.caption}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Gallery;
