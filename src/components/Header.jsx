import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <h1 className="text-4xl font-bold mb-2">ALKAMELGIS</h1>
                        <p className="text-xl text-blue-200">Software Engineer & GIS Developer</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <FaEnvelope className="text-blue-300" />
                            <span>alkamelgis@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaPhone className="text-blue-300" />
                            <span>+966 555 000 000</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaMapMarkerAlt className="text-blue-300" />
                            <span>KSA, Riyadh</span>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center md:justify-start space-x-6 mt-6">
                    <a href="https://github.com/alkamelgis" target="_blank" rel="noopener noreferrer"
                        className="flex items-center space-x-2 hover:text-blue-300 transition">
                        <FaGithub className="text-2xl" />
                        <span>GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/alkamelgis" target="_blank" rel="noopener noreferrer"
                        className="flex items-center space-x-2 hover:text-blue-300 transition">
                        <FaLinkedin className="text-2xl" />
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://leetcode.com/u/alkamelgis" target="_blank" rel="noopener noreferrer"
                        className="flex items-center space-x-2 hover:text-blue-300 transition">
                        <SiLeetcode className="text-2xl" />
                        <span>LeetCode</span>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;