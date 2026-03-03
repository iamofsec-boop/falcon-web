import React from 'react';
import NavAndHero from './NavAndHero';
import FeaturesGrantsStaking from './FeaturesGrantsStaking';
import SecurityAndFooter from './SecurityAndFooter';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans overflow-x-hidden">
      <NavAndHero />
      <FeaturesGrantsStaking />
      <SecurityAndFooter />
    </div>
  );
};

export default App;

