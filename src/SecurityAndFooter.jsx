import React, { useState, useEffect } from 'react';

const SecurityAndFooter = () => {
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

  return (
    <>
      <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#111111] mb-4">Security & Compliance</h2>
          <p className="text-lg text-[#111111] font-medium">Security is our top priority</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-5xl mx-auto text-center">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h4 className="font-bold text-[#111111] text-lg mb-1">Advanced Encryption</h4>
            <p className="text-[13px] text-gray-500 font-medium">End-to-end security</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
            </div>
            <h4 className="font-bold text-[#111111] text-lg mb-1">Secure Architecture</h4>
            <p className="text-[13px] text-gray-500 font-medium">Multi-signature tech</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <h4 className="font-bold text-[#111111] text-lg mb-1">Risk Monitoring</h4>
            <p className="text-[13px] text-gray-500 font-medium">24/7 threat detection</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
            </div>
            <h4 className="font-bold text-[#111111] text-lg mb-1">Regulatory Aware</h4>
            <p className="text-[13px] text-gray-500 font-medium">Regional compliance</p>
          </div>
        </div>
        
        <p className="text-sm font-bold text-center text-[#111111] mb-24">
          Falcon prioritizes security and follows applicable digital asset compliance standards across supported regions.
        </p>
        
        <div id="download-section" className="text-left md:text-left max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-8 md:mb-0 space-y-2">
            <h3 className="text-[1.75rem] font-bold text-[#111111]">Download Falcon</h3>
            <p className="text-gray-600 font-medium text-lg">Join thousands of users earning rewards on iOS, Android, and APK</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="relative">
              <button onClick={() => handleStoreClick('google-footer')} className="bg-[#111111] hover:bg-black text-white rounded-xl w-[150px] h-[52px] transition-transform hover:scale-105 flex items-center justify-center px-3 space-x-2">
                <svg width="22" height="22" viewBox="0 0 512 512" fill="white">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                <div className="text-left flex flex-col justify-center">
                  <span className="text-[10px] leading-none mb-[3px]">GET IT ON</span>
                  <span className="text-[15px] font-semibold leading-none">Google Play</span>
                </div>
              </button>
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-[#111111] text-white px-4 py-2 rounded-lg shadow-xl z-[100] transition-all duration-300 font-medium whitespace-nowrap text-sm ${activeSnackbar === 'google-footer' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                Coming soon
              </div>
            </div>

            <div className="relative">
              <button onClick={() => handleStoreClick('apple-footer')} className="bg-[#111111] hover:bg-black text-white rounded-xl w-[150px] h-[52px] transition-transform hover:scale-105 flex items-center justify-center px-3 space-x-2">
                <svg width="22" height="22" viewBox="0 0 384 512" fill="white">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <div className="text-left flex flex-col justify-center">
                  <span className="text-[10px] leading-none mb-[3px]">Download on the</span>
                  <span className="text-[16px] font-semibold leading-none">App Store</span>
                </div>
              </button>
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-[#111111] text-white px-4 py-2 rounded-lg shadow-xl z-[100] transition-all duration-300 font-medium whitespace-nowrap text-sm ${activeSnackbar === 'apple-footer' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                Coming soon
              </div>
            </div>

            <a 
              href="https://github.com/FalconDevelopmentapp/FalconDevelopment/releases/download/1.0.2/Falcon.apk"
              download="Falcon.apk"
              className="bg-gray-100 hover:bg-gray-200 text-[#111111] rounded-xl w-[150px] h-[52px] transition-transform hover:scale-105 flex items-center justify-center px-3 space-x-2"
            >
              <svg 
                width="22" 
                height="22" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <div className="text-left flex flex-col justify-center">
                <span className="text-[10px] leading-none mb-[3px]">Download</span>
                <span className="text-[16px] font-semibold leading-none">APK</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-12 py-16 max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-100 pt-8 gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <h2 className="text-[1.75rem] font-bold text-[#111111]">Community</h2>
            <div className="flex space-x-6 text-gray-500 font-medium text-[15px]">
              <a href="/privacy-policy" className="hover:text-black transition-colors focus:outline-none">Privacy policy</a>
              <a href="/terms-of-service" className="hover:text-black transition-colors focus:outline-none">Terms of service</a>
            </div>
          </div>
          <div className="flex space-x-4">
            <a 
              href="twitter://user?screen_name=falconmainnet" 
              onClick={(e) => {
                const now = Date.now();
                setTimeout(() => {
                  if (Date.now() - now < 600) {
                    window.open('https://x.com/falconmainnet', '_blank');
                  }
                }, 500);
              }}
              className="w-10 h-10 bg-[#111111] hover:bg-black rounded-full flex items-center justify-center cursor-pointer transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <div className="w-10 h-10 bg-[#0088cc] hover:bg-blue-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </div>
            <div className="w-10 h-10 bg-[#FF0000] hover:bg-red-700 rounded-full flex items-center justify-center cursor-pointer transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l6.08 3.27-6.08 3.27z"/>
              </svg>
            </div>
            <div className="w-10 h-10 bg-[#111111] hover:bg-black rounded-full flex items-center justify-center cursor-pointer transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default SecurityAndFooter;

