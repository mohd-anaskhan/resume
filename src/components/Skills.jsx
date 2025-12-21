import React from 'react';
import { FaCode, FaDatabase, FaCloud, FaTools } from 'react-icons/fa';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: <FaCode className="text-2xl" />,
            skills: ["JavaScript", "TypeScript", "Python", "C#", "Java", "PHP"]
        },
        {
            title: "Databases",
            icon: <FaDatabase className="text-2xl" />,
            skills: ["PostgreSQL", "MySQL", "PostGIS", "SQLite", "MongoDB"]
        },
        {
            title: "Cloud & DevOps",
            icon: <FaCloud className="text-2xl" />,
            skills: ["Docker", "Azure DevOps", "Git", "CI/CD", "REST APIs"]
        },
        {
            title: "GIS & Tools",
            icon: <FaTools className="text-2xl" />,
            skills: ["ArcGIS", "QGIS", "Leaflet", "MapLibre", "GeoServer"]
        }
    ];

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Skills & Expertise</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="text-blue-600 mr-3">{category.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                            </div>
                            <ul className="space-y-2">
                                {category.skills.map((skill, idx) => (
                                    <li key={idx} className="flex items-center">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        <span className="text-gray-700">{skill}</span>
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

export default Skills;