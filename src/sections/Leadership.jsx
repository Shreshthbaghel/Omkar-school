import React from 'react';
import Section from '../components/Section';
import FacultyCard from '../components/FacultyCard';
import { getFounders, getPrincipal } from '../services/dataService';


const Leadership = () => {
    const founders = getFounders();
    const principal = getPrincipal();

    return (
        <Section
            id="leadership"
            title="Leadership & Management"
            subtitle="Meet the visionaries guiding our educational journey"
        >
            {/* Founders */}
            {founders && founders.length > 0 && (
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-primary mb-8 text-center">Our Founders</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {founders.map((founder) => (
                            <FacultyCard
                                key={founder.id}
                                name={founder.name}
                                title={founder.title}
                                photo={founder.photo}
                                bio={founder.bio}
                                qualifications={founder.qualifications}
                                experience={founder.experience}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Principal - Highlighted */}
            {principal && (
                <div>
                    <h3 className="text-2xl font-bold text-primary mb-8 text-center">Our Principal</h3>
                    <div className="max-w-md mx-auto">
                        <FacultyCard
                            name={principal.name}
                            title={principal.title}
                            photo={principal.photo}
                            bio={principal.bio}
                            qualifications={principal.qualifications}
                            experience={principal.experience}
                            highlight={true}
                        />
                    </div>
                </div>
            )}
        </Section>
    );
};

export default Leadership;
