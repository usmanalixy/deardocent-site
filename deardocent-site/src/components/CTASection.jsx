import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Start Learning?
        </h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Join thousands of curious minds already exploring new ideas and expanding their horizons.
        </p>
        <Link
          to="/contact"
          className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          Get Started Today
        </Link>
      </div>
    </div>
  );
};

export default CTASection;
