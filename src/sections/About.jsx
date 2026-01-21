import React from 'react';
import Section from '../components/Section';
import Gallery from '../components/Gallery';
import { getSchoolInfo } from '../services/dataService';

const About = () => {
    const schoolInfo = getSchoolInfo();

    return (
        <Section
            id="about"
            title="About Our School"
            subtitle="Committed to excellence in education "
            bgColor="bg-gray-50"
        >
            <div className="grid md:grid-cols-2 gap-12">
                {/* Mission & Vision */}
                <div>
                    <div className="mb-8 p-6 bg-white rounded-xl shadow-lg border-l-4 border-gold hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                            <span className="text-gold">🎯</span> Our Mission
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            {schoolInfo.mission}
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-gold hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                            <span className="text-gold">👁️</span> Our Vision
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            {schoolInfo.vision}
                        </p>
                    </div>
                </div>

                {/* Facilities */}
                <div>
                    <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                        <span className="text-gold">🏫</span> Our Facilities
                    </h3>
                    <div className="grid gap-3">
                        {schoolInfo.facilities.map((facility, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-x-1 transition-all duration-200 border-l-2 border-gold/50 hover:border-gold"
                            >
                                <div className="flex-shrink-0 w-2 h-2 bg-gold rounded-full"></div>
                                <span className="text-gray-700 font-medium">{facility}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="mt-16 bg-gradient-to-br from-primary/5 to-gold/5 rounded-2xl p-8 md:p-12 shadow-xl border border-gold/20">
                <h3 className="text-2xl md:text-3xl font-bold text-center text-primary mb-8">
                    Why Choose {schoolInfo.name}?
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center group">
                        <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors">
                            <span className="text-3xl">📚</span>
                        </div>
                        <h4 className="text-lg font-semibold text-primary mb-2">Quality Education</h4>
                        <p className="text-gray-600">Experienced teachers and modern teaching methods</p>
                    </div>
                    <div className="text-center group">
                        <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors">
                            <span className="text-3xl">🌟</span>
                        </div>
                        <h4 className="text-lg font-semibold text-primary mb-2">Holistic Development</h4>
                        <p className="text-gray-600">Focus on academics, sports, arts, and character building</p>
                    </div>
                    <div className="text-center group">
                        <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors">
                            <span className="text-3xl">🏆</span>
                        </div>
                        <h4 className="text-lg font-semibold text-primary mb-2">Proven Track Record</h4>
                        <p className="text-gray-600">Consistent excellent results and student achievements</p>
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="mt-16">
                <h3 className="text-2xl md:text-3xl font-bold text-center text-primary mb-4">
                    School Gallery
                </h3>
                <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                    Glimpses of our vibrant school life, events, and celebrations
                </p>
                <Gallery />
            </div>
        </Section>
    );
};

export default About;
