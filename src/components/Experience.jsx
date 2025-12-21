import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
    const experiences = [
        {
            title: "GIS Software Engineer",
            company: "Self-Employed",
            period: "2024 - Present",
            location: "Remote",
            description: "Developing GIS applications and solutions for various clients",
            achievements: [
                "Built responsive mapping applications",
                "Implemented spatial data processing pipelines",
                "Developed custom GIS tools and plugins"
            ]
        },
        {
            title: "GIS Developer",
            company: "Freelance Projects",
            period: "2023 - 2024",
            location: "Remote",
            description: "Worked on multiple GIS and web development projects",
            achievements: [
                "Created interactive web maps",
                "Developed spatial analysis tools",
                "Integrated GIS with web applications"
            ]
        }
    ];

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Work Experience</h2>
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800">{exp.title}</h3>
                                    <div className="flex items-center text-gray-600 mt-1">
                                        <FaBriefcase className="mr-2" />
                                        <span>{exp.company}</span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 mt-2 md:mt-0">
                                    <div className="flex items-center text-gray-600">
                                        <FaCalendarAlt className="mr-2" />
                                        <span>{exp.period}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <FaMapMarkerAlt className="mr-2" />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-4">{exp.description}</p>
                            <ul className="space-y-2">
                                {exp.achievements.map((achievement, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span className="text-gray-700">{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;