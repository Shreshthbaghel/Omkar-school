import React from 'react';
import Section from '../components/Section';
import { getSchoolInfo, getContactInfo } from '../services/dataService';


const Contact = () => {
    const contact = getContactInfo();
    const schoolInfo = getSchoolInfo();

    return (
        <Section
            id="contact"
            title="Get in Touch"
            subtitle="We'd love to hear from you"
        >
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Phone */}
                <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-gold">
                    <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">Phone</h3>
                    <a href={`tel:${contact.phone}`} className="text-gold hover:text-gold-dark font-medium">
                        {contact.phone}
                    </a>
                </div>

                {/* Email */}
                <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-gold">
                    <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">Email</h3>
                    <a href={`mailto:${contact.email}`} className="text-gold hover:text-gold-dark font-medium break-all">
                        {contact.email}
                    </a>
                </div>

                {/* Address */}
                <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-gold">
                    <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">Address</h3>
                    <p className="text-gray-600 mb-3">
                        {contact.address}
                    </p>
                    {/* Google Maps Link */}
                    <a
                        href="https://maps.app.goo.gl/P4ys63kAwx3RSWMdA?g_st=aw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-medium transition-colors"
                        title="View location on Google Maps"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        View on Map
                    </a>
                </div>
            </div>

            {/* Working Hours */}
            <div className="mt-12 text-center bg-gradient-to-br from-primary/10 to-gold/10 p-6 rounded-xl max-w-2xl mx-auto border border-gold/20">
                <h3 className="text-lg font-bold text-primary mb-2">Working Hours</h3>
                <p className="text-gray-700 font-medium">{contact.workingHours}</p>
            </div>
        </Section>
    );
};

export default Contact;
