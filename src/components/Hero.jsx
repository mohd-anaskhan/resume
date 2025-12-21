import React from 'react';
import { FaDownload, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className="py-20 bg-gradient-to-br from-blue-50 to-white">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
                        Software & GIS Developer
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Building innovative solutions at the intersection of software engineering and geographic information systems.
                        Passionate about creating efficient, scalable applications with modern technologies.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#contact"
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2"
                        >
                            <span>Contact Me</span>
                            <FaArrowRight />
                        </a>
                        <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 flex items-center justify-center space-x-2">
                            <FaDownload />
                            <span>Download Resume</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;