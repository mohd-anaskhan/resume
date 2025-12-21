import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <p className="mb-4">
                    © {new Date().getFullYear()} Alkamelgis. All rights reserved.
                </p>
                <p className="flex items-center justify-center space-x-2">
                    <span>Made with</span>
                    <FaHeart className="text-red-500" />
                    <span>using React & Tailwind CSS</span>
                </p>
                <p className="mt-4 text-gray-400">
                    alkamelgis@gmail.com | +966 555 000 000
                </p>
            </div>
        </footer>
    );
};

export default Footer;