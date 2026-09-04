import React from 'react';
import { Clock, Mail, Phone, Share2, MessageCircle, Globe } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#121212] text-gray-300 text-xs py-2 px-4 sm:px-8 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        
        {/* Left Side: Hours & Email */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Clock className="w-3.5 h-3.5 text-gray-400" />
            <span>9am To 5pm</span>
          </div>
          <a 
            href="mailto:info@caravantastic.com" 
            className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-gray-400" />
            <span>info@caravantastic.com</span>
          </a>
        </div>

        {/* Right Side: Call Us button & Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="tel:01278786199"
            className="bg-[#00B050] hover:bg-[#009343] text-white px-3 py-1 rounded-sm font-semibold flex items-center gap-1.5 transition-all transform hover:scale-105 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>CALL US</span>
          </a>

          <div className="flex items-center gap-3 text-gray-400 ml-2">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
