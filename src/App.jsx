import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavAndHero from './NavAndHero';
import FeaturesGrantsStaking from './FeaturesGrantsStaking';
import SecurityAndFooter from './SecurityAndFooter';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsofService';

const HomePage = () => (
  <div className="min-h-screen bg-white font-sans">
    <NavAndHero />
    <FeaturesGrantsStaking />
    <SecurityAndFooter />
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
};

export default App;

