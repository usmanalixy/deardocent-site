import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Podcast from './pages/Podcast';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white">
      {/* Navbar - Fixed at top */}
      <Navbar />
      
      {/* Main content area - Takes remaining space */}
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      {/* Footer - Sticks to bottom */}
      <Footer />
      
      {/* Vercel Analytics - Add at the bottom */}
      <Analytics />
    </div>
  );
}

export default App;
