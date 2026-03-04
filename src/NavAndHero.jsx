import React, { useState, useEffect } from 'react';

const NavAndHero = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeSnackbar, setActiveSnackbar] = useState(null);

  const handleStoreClick = (store) => {
    setActiveSnackbar(store);
  };

  useEffect(() => {
    let timeout;
    if (activeSnackbar) {
      timeout = setTimeout(() => {
        setActiveSnackbar(null);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [activeSnackbar]);

  const scrollToDownload = () => {
    const element = document.getElementById('download-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { title: "Buy crypto", description: "Easily purchase digital assets using fiat with our secure and fast gateway." },
    { title: "Earn", description: "Put your idle assets to work and generate passive income through staking." },
    { title: "Features", description: "Explore advanced market tracking, real-time charts, and portfolio management." },
    { title: "Grants", description: "Access weekly distributions of FLC tokens and claim community airdrops." },
    { title: "Security", description: "Rest easy knowing your funds are protected by multi-signature technology." }
  ];

  return (
    <>
      <nav className="flex flex-wrap items-center justify-between pr-6 md:pr-12 pl-2 pt-2 pb-5 w-full max-w-[1440px] mx-auto gap-y-4 relative z-50">
        <div className="flex flex-wrap items-center gap-4 md:gap-8">
          <div className="flex items-center space-x-2 md:space-x-3">
            <img src="/icon.png" alt="Falcon Logo" className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full" />
            <span className="text-2xl font-bold tracking-tight">Falcon</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 md:gap-7 font-medium text-gray-600 text-[15px] pl-4 md:pl-0">
            {navItems.map((item, index) => (
              <div 
                key={index} 
                className="relative group"
                onMouseEnter={() => setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button 
                  onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                  className="flex items-center space-x-1 hover:text-black transition-colors focus:outline-none py-2"
                >
                  <span>{item.title}</span>
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className={`transition-transform duration-200 ${openDropdown === index ? 'rotate-180 text-black' : 'rotate-0'}`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div 
                  className={`absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-2xl p-5 transition-all duration-200 origin-top ${openDropdown === index ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
                >
                  <p className="text-[14px] text-gray-500 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex items-center ml-auto">
          <button 
            onClick={scrollToDownload}
            className="bg-[#3B71F7] hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-colors"
          >
            GET STARTED
          </button>
        </div>
      </nav>

      <section className="px-6 md:px-12 py-12 md:py-24 max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <div className="md:w-[55%] space-y-7">
          <h1 className="text-[2.75rem] md:text-[4.25rem] font-bold leading-[1.1] tracking-tight text-[#111111]">
            Earn more, trade easier, hold smarter with falcon
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 font-medium max-w-[90%] md:max-w-[85%]">
            Track markets, manage assets, stake, and earn rewards all in one powerful platform
          </p>
          
          <div className="flex flex-row space-x-4 pt-2 w-max">
            <div className="relative">
              <button onClick={() => handleStoreClick('apple')} className="bg-[#111111] hover:bg-black text-white rounded-xl w-[150px] h-[52px] transition-transform hover:scale-105 flex items-center justify-center px-3 space-x-2">
                <svg width="22" height="22" viewBox="0 0 384 512" fill="white">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <div className="text-left flex flex-col justify-center">
                  <span className="text-[10px] leading-none mb-[3px]">Download on the</span>
                  <span className="text-[16px] font-semibold leading-none">App Store</span>
                </div>
              </button>
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-[#111111] text-white px-4 py-2 rounded-lg shadow-xl z-[100] transition-all duration-300 font-medium whitespace-nowrap text-sm ${activeSnackbar === 'apple' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                Coming soon
              </div>
            </div>

            <div className="relative">
              <button onClick={() => handleStoreClick('google')} className="bg-[#111111] hover:bg-black text-white rounded-xl w-[150px] h-[52px] transition-transform hover:scale-105 flex items-center justify-center px-3 space-x-2">
                <svg width="22" height="22" viewBox="0 0 512 512" fill="white">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                <div className="text-left flex flex-col justify-center">
                  <span className="text-[10px] leading-none mb-[3px]">GET IT ON</span>
                  <span className="text-[15px] font-semibold leading-none">Google Play</span>
                </div>
              </button>
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-[#111111] text-white px-4 py-2 rounded-lg shadow-xl z-[100] transition-all duration-300 font-medium whitespace-nowrap text-sm ${activeSnackbar === 'google' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                Coming soon
              </div>
            </div>
          </div>
          
          <p className="text-[11px] text-gray-400 font-medium max-w-[90%] md:max-w-[70%] leading-relaxed pt-2">
            Applicable T&Cs, not investment advice. Investments involve risks.
            Assess risk tolerance, choose suitable investments wisely.
          </p>
          
          <div className="pt-6">
            <p className="text-sm text-gray-500 font-medium">Brought to you by</p>
            <p className="text-base font-bold tracking-wide text-[#111111] mt-1">FALCON DEVELOPMENT</p>
          </div>
        </div>
        
        <div className="md:w-[45%] flex justify-end mt-8 md:mt-0">
          <img 
            src="/hero-phone.png" 
            alt="Falcon App Dashboard" 
            className="w-full max-w-[400px] h-auto object-contain mix-blend-multiply"
          />
        </div>
      </section>
    </>
  );
};

export default NavAndHero;

