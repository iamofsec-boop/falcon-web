import React from 'react';
import { Link } from 'react-router-dom';
import { TERMS_OF_SERVICE } from './TermsText';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <nav className="flex items-center px-6 md:px-12 py-6 border-b border-gray-100 max-w-[1440px] mx-auto">
        <Link to="/" className="flex items-center space-x-2 text-[#111111] hover:text-gray-600 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span className="font-semibold tracking-wide">Back to Home</span>
        </Link>
      </nav>
      <main className="px-6 md:px-12 py-16 max-w-4xl mx-auto prose prose-slate text-gray-600">
        <div className="whitespace-pre-wrap font-medium leading-relaxed text-[15px]">
          {TERMS_OF_SERVICE}
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;

