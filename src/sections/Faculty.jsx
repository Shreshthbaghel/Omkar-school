import React from 'react';
import Section from '../components/Section';
import FacultyCard from '../components/FacultyCard';
import { getTeachers } from '../services/dataService';

const Faculty = () => {
    const teachers = getTeachers();

    return (
        <Section
            id="faculty"
            title="Our Expert Faculty"
            subtitle="Dedicated educators committed to your child's success"
            bgColor="bg-gray-50"
        >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {teachers.map((teacher) => (
                    <FacultyCard
                        key={teacher.id}
                        name={teacher.name}
                        title={teacher.subject}
                        photo={teacher.photo}
                        qualifications={teacher.qualifications}
                    />
                ))}
            </div>

            {/* Optional: Add note about more teachers */}
            <div className="mt-12 text-center">
                <p className="text-gray-600 italic">
                    ...and many more dedicated teachers across all subjects
                </p>
            </div>
        </Section>
    );
};

export default Faculty;
