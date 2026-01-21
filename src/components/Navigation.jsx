import React, { useState, useEffect } from 'react';
import { getSchoolInfo } from '../services/dataService';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const schoolInfo = getSchoolInfo();

   
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Faculty', href: '#faculty' },
        { name: 'Admissions', href: '#admissions' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isScrolled ? 'bg-primary shadow-2xl shadow-primary/20' : 'bg-primary/95 backdrop-blur-md'}
    `}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <a href="#home" className="flex items-center gap-3 group">
                            <img
                                src="/images/logo.png"
                                alt="Omkaar School of Excellence"
                                className="h-10 md:h-12 w-auto transition-transform group-hover:scale-105"
                            />
                            <span className="text-lg md:text-xl font-bold text-gold hidden sm:block">
                                {schoolInfo.name}
                            </span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative text-white hover:text-gold transition-colors duration-300 font-medium group"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg text-white hover:bg-gold/20 focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-gold/20 animate-fadeIn">
                        <div className="flex flex-col space-y-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={handleLinkClick}
                                    className="px-4 py-2 text-white hover:bg-gold/20 hover:text-gold rounded-lg transition-all duration-200 font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
