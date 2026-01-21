import React from 'react';
import { getSchoolInfo } from '../services/dataService';


const Footer = () => {
    const schoolInfo = getSchoolInfo();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* School Info */}
                    <div>
                        <h3 className="text-xl font-bold text-gold mb-4">{schoolInfo.name}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {schoolInfo.tagline}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-gold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#home" className="text-gray-300 hover:text-gold transition-colors duration-200">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-gray-300 hover:text-gold transition-colors duration-200">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#faculty" className="text-gray-300 hover:text-gold transition-colors duration-200">
                                    Faculty
                                </a>
                            </li>
                            <li>
                                <a href="#admissions" className="text-gray-300 hover:text-gold transition-colors duration-200">
                                    Admissions
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-300 hover:text-gold transition-colors duration-200">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-gold mb-4">Contact Us</h4>
                        <div className="space-y-2 text-gray-300 text-sm">
                            <p className="flex items-center gap-2 hover:text-gold transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                {schoolInfo.contact.phone}
                            </p>
                            <p className="flex items-center gap-2 hover:text-gold transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                {schoolInfo.contact.email}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gold/20 pt-8 text-center text-gray-300 text-sm">
                    <p>&copy; {currentYear} {schoolInfo.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
