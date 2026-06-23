import React from 'react';

const FeaturesGrantsStaking = () => {
  return (
    <>
      <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto text-center">
        <h2 className="text-3xl md:text-[2.75rem] font-bold text-[#111111] tracking-tight mb-20">
          Your most secure wallet to store & grow your assets
        </h2>

        <h3 className="text-3xl md:text-[2.5rem] font-bold text-[#111111] mb-16">
          Core Features
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 text-left">
          <div className="space-y-4">
            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-[#111111]">Market Overview</h4>
            <p className="text-gray-500 font-medium text-[15px] leading-relaxed">
              Track crypto prices in real-time with advanced charts and analytics
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                <line x1="2" y1="10" x2="22" y2="10"></line>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-[#111111]">Secure Wallet</h4>
            <p className="text-gray-500 font-medium text-[15px] leading-relaxed">
              Manage your digital assets securely with industry-leading encryption
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-[#111111]">FLC Pooling</h4>
            <p className="text-gray-500 font-medium text-[15px] leading-relaxed">
              Pool your FLC to compound your holdings and earn yield over time
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="8" width="18" height="12" rx="2" ry="2"></rect>
                <path d="M12 8v12"></path>
                <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-[#111111]">Reward Tasks</h4>
            <p className="text-gray-500 font-medium text-[15px] leading-relaxed">
              Complete activities and challenges to earn additional FLC tokens
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-[#111111]">Referral Program</h4>
            <p className="text-gray-500 font-medium text-[15px] leading-relaxed">
              Invite friends and earn rewards when they join the ecosystem
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-[#111111]">Simple Experience</h4>
            <p className="text-gray-500 font-medium text-[15px] leading-relaxed">
              Clean, intuitive interface designed for all experience levels
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-center gap-16">
        <div className="md:w-[45%] space-y-8">
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#111111]">Falcon Weekly Grants</h2>
          <p className="text-lg text-[#111111] font-medium">Falcon distributes grants weekly through the Falcon app.</p>

          <div className="space-y-8 pt-4">
            <div>
              <h4 className="text-lg font-bold text-[#111111]">Download the Falcon App</h4>
              <p className="text-gray-500 font-medium mt-1">Install the app to access grants and rewards.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#111111]">Sign In to Your Account</h4>
              <p className="text-gray-500 font-medium mt-1">Create or log in to your account.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#111111]">Open Airdrops on the Home Page</h4>
              <p className="text-gray-500 font-medium mt-1">After signing in, tap Airdrops on the home screen.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#111111]">Claim Your Grant</h4>
              <p className="text-gray-500 font-medium mt-1">If a grant is available, you can claim it directly in the app.</p>
            </div>
          </div>
        </div>

        <div className="md:w-[45%] flex justify-center mt-8 md:mt-0 p-4">
          <img
            src="/grants-phone.webp"
            alt="Falcon Grants Interface"
            className="w-full max-w-[320px] h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </section>

      {/* Maximize Yield Through Pooling */}
      <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto text-center">
        <h2 className="text-3xl md:text-[2.75rem] font-bold text-[#111111] mb-4">
          Maximize Yield Through Pooling
        </h2>
        <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
          Access the ecosystem, complete KYC to claim FLC grants, and finish tasks for additional FLC rewards.
          Hold digital assets in the Vault to earn a bonus or pool FLC to compound your holdings.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-[2rem] p-10 text-center space-y-6">
            <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="4"></circle>
                <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
                <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
                <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
                <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-[#111111]">Vault Holding Bonus</h4>
            <p className="text-gray-500 font-medium text-[15px] leading-relaxed">
              Transfer and hold base assets (such as USDT, ETH, etc.) in any amount in the Falcon Vault.
              Maintain these holdings and receive a dedicated FLC bonus payment all while retaining total
              flexibility of all assets. (i.e you can withdraw your assets at any time.)
            </p>
          </div>

          <div className="bg-gray-50 rounded-[2rem] p-10 text-center space-y-6">
            <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-[#111111]">Pool FLC for Yield</h4>
            <p className="text-gray-500 font-medium text-[15px] leading-relaxed">
              Simple and direct. Pool your FLC to mint FLC. These includes FLC from Grants, Rewards
              and also from Assets bonuses. Earnings can be tracked and managed directly
              in your dashboard.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesGrantsStaking;

