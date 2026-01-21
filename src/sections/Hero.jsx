import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { getSchoolInfo } from '../services/dataService';

const Hero = () => {
    const schoolInfo = getSchoolInfo();

    const scrollToAdmissions = () => {
        document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="relative bg-gradient-hero pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-gold/5 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center animate-fadeIn">
                    {/* School Name */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 animate-slideUp">
                        {schoolInfo.name}
                    </h1>

                    {/* Tagline */}
                    <p className="text-xl md:text-2xl text-gold font-bold mb-8 tracking-wide">
                        {schoolInfo.tagline}
                    </p>

                    {/* About Preview */}
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
                        {schoolInfo.about}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <Button onClick={scrollToAdmissions} variant="gold">
                            Request Callback
                        </Button>
                        <Button
                            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                            variant="outline"
                        >
                            Learn More
                        </Button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                    {/* <div className="group text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-gold">
                        <div className="text-3xl md:text-4xl font-bold text-gold mb-2 group-hover:scale-110 transition-transform">18+</div>
                        <div className="text-sm text-gray-600 font-medium">Years of Excellence</div>
                    </div> */}
                    <div className="group text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-gold">
                        <div className="text-3xl md:text-4xl font-bold text-gold mb-2 group-hover:scale-110 transition-transform">200+</div>
                        <div className="text-sm text-gray-600 font-medium">Happy Students</div>
                    </div>
                    <div className="group text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-gold">
                        <div className="text-3xl md:text-4xl font-bold text-gold mb-2 group-hover:scale-110 transition-transform">50+</div>
                        <div className="text-sm text-gray-600 font-medium">Expert Teachers</div>
                    </div>
                    <div className="group text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-gold">
                        <div className="text-3xl md:text-4xl font-bold text-gold mb-2 group-hover:scale-110 transition-transform">100%</div>
                        <div className="text-sm text-gray-600 font-medium">Success Rate</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
