import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <div className="flex-1 flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
};

export default Home;
