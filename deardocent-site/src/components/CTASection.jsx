import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleGetStarted = () => {
    setShowEmailForm(true);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setErrorMessage('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');
    
    try {
      // Save to Supabase database
      const { data, error } = await supabase
        .from('subscribers')
        .insert([{ email: email.trim() }])
        .select();

      if (error) {
        // Handle duplicate email
        if (error.code === '23505') {
          setErrorMessage('This email is already subscribed!');
        } else {
          setErrorMessage('Something went wrong. Please try again.');
        }
        setIsLoading(false);
      } else {
        setIsSubmitted(true);
        setIsLoading(false);
        setEmail('');
        setErrorMessage('');
      }
    } catch (err) {
      setErrorMessage('Network error. Please check your connection.');
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    // Add a small delay for smooth transition
    setIsSubmitted(false);
    setErrorMessage('');
    setTimeout(() => {
      setShowEmailForm(false);
      setEmail('');
    }, 100);
  };

  return (
    <div className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Start Learning?
        </h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Join thousands of curious minds already exploring new ideas and expanding their horizons.
        </p>

        {!showEmailForm && !isSubmitted ? (
          // Initial state: Show "Get Started Today" button
          <div className="transform transition-all duration-500 ease-out">
            <button
              onClick={handleGetStarted}
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95"
            >
              Get Started Today
            </button>
          </div>
        ) : !isSubmitted ? (
          // Email form state with smooth animation
          <div className="max-w-md mx-auto transform transition-all duration-700 ease-out animate-slide-in-bottom">
            <div className="transform transition-all duration-500 ease-out scale-100">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 transform transition-all duration-500 ease-out delay-100 translate-y-0 opacity-100">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setErrorMessage(''); // Clear error when user types
                      }}
                      placeholder="Enter your email to get started"
                      className="w-full px-6 py-4 text-gray-900 placeholder-gray-500 border-0 rounded-full focus:outline-none focus:ring-4 focus:ring-white/20 text-center sm:text-left transition-all duration-300 focus:scale-105 focus:shadow-xl"
                      required
                      autoFocus
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:transform-none disabled:cursor-not-allowed disabled:bg-gray-200 active:scale-95"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                        <span className="animate-pulse">Starting...</span>
                      </div>
                    ) : (
                      'Subscribe'
                    )}
                  </button>
                </div>
                
                {/* Error Message */}
                {errorMessage && (
                  <div className="text-red-100 bg-red-500/20 border border-red-300/30 rounded-full px-4 py-2 text-sm animate-slide-in-top">
                    {errorMessage}
                  </div>
                )}
              </form>
              <div className="flex items-center justify-center space-x-4 mt-4 transform transition-all duration-500 ease-out delay-200 translate-y-0 opacity-100">
                <p className="text-blue-100/80 text-sm transition-all duration-300">
                  Free newsletter • No spam • Unsubscribe anytime
                </p>
                <button
                  onClick={() => setShowEmailForm(false)}
                  className="px-4 py-2 bg-white/10 text-blue-100 text-sm font-medium rounded-full border border-white/20 hover:bg-white/20 hover:text-white hover:border-white/40 transition-all duration-300 transform hover:scale-110 hover:shadow-lg active:scale-95 backdrop-blur-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Success state with animation
          <div className="max-w-md mx-auto transform transition-all duration-700 ease-out animate-slide-in-bottom">
            <div className="transform transition-all duration-500 ease-out scale-100">
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 transform transition-all duration-500 ease-out animate-bounce">
                <svg 
                  className="w-8 h-8 text-white transition-all duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7"
                    style={{
                      strokeDasharray: '1000',
                      strokeDashoffset: '1000',
                      animation: 'draw 0.8s ease-out forwards'
                    }}
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 transform transition-all duration-500 ease-out delay-200 translate-y-0 opacity-100">
                Welcome to the Community!
              </h3>
              <p className="text-blue-100 mb-6 transform transition-all duration-500 ease-out delay-300 translate-y-0 opacity-100">
                Thank you for joining us. You'll receive our latest insights and podcast episodes soon.
              </p>
              <button
                onClick={resetForm}
                className="px-6 py-3 bg-white/20 text-white font-medium rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
              >
                Start Over
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CTASection;
