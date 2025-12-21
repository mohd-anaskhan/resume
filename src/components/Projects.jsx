import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Store",
            description: "Full-stack e-commerce platform with React, Node.js, and PostgreSQL",
            tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
            github: "https://github.com/alkamelgis/ecommerce-store",
            demo: "https://ecommerce-demo.example.com"
        },
        {
            title: "GIS Mapping Application",
            description: "Interactive web mapping application with spatial analysis tools",
            tech: ["React", "MapLibre", "PostGIS", "GeoServer"],
            github: "https://github.com/alkamelgis/gis-mapping-app",
            demo: "https://gis-demo.example.com"
        },
        {
            title: "Task Management System",
            description: "Collaborative task management platform with real-time updates",
            tech: ["React", "Socket.io", "MongoDB", "Express"],
            github: "https://github.com/alkamelgis/task-management",
            demo: "https://tasks-demo.example.com"
        }
    ];

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <FaCode className="text-blue-600 text-xl mr-3" />
                                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                                </div>
                                <p className="text-gray-700 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex space-x-4">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition">
                                        <FaGithub />
                                        <span>Code</span>
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition">
                                        <FaExternalLinkAlt />
                                        <span>Demo</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;