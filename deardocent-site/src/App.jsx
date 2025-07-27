import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const Podcast = React.lazy(() => import('./pages/Podcast'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Loading component
const PageLoader = () => (
  <div className="flex-1 flex items-center justify-center min-h-[400px]">
    <div className="text-center">
      <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white">
      {/* Navbar - Fixed at top */}
      <Navbar />
      
      {/* Main content area - Takes remaining space */}
      <main className="flex-1 w-full">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      
      {/* Footer - Sticks to bottom */}
      <Footer />
      
      {/* Vercel Analytics - Add at the bottom */}
      <Analytics />
      
      {/* Vercel Speed Insights - Add at the bottom */}
      <SpeedInsights debug={false} />
    </div>
  );
}

export default App;
