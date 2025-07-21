import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-24">
        <div className="w-full text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DearDocent
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Your trusted guide to knowledge and learning. Discover insights, explore new perspectives, 
            and join our community of curious minds.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
            <Link
              to="/podcast"
              className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-full sm:w-auto sm:min-w-[200px]"
            >
              <span className="relative z-10">Listen to Podcast</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 bg-white hover:bg-gray-50 text-blue-600 font-semibold rounded-full border-2 border-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto sm:min-w-[200px]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-20 right-0 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-36 h-36 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
    </div>
  );
};

export default HeroSection;
