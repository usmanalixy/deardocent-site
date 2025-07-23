import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">DearDocent</h3>
            <p className="text-gray-400 text-sm">
              Your trusted guide to knowledge and learning.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/podcast" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Podcast
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/dear-docent/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/deardocent/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">
                contact@deardocent.com
              </li>
              <li className="text-gray-400 text-sm">
                Gurdaspur, Punjab, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 DearDocent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
