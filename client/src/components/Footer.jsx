import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-16 pb-8 sm:pb-12 border-b border-white/10">
          <div className="lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">LockedIn</h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
            </p>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Product</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#features" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#integrations" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#updates" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Product Updates</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#about" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#careers" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#press" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Press</a></li>
              <li><a href="#contact" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Resources</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#blog" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#help" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#guides" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Guides</a></li>
              <li><a href="#community" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 sm:mt-8 space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6 lg:space-x-8 text-sm sm:text-base text-gray-400">
            <span>&copy; 2024 LockedIn. All rights reserved.</span>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <div className="flex space-x-4 sm:space-x-6">
            <a href="#twitter" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-twitter text-lg sm:text-xl"></i>
            </a>
            <a href="#linkedin" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-linkedin text-lg sm:text-xl"></i>
            </a>
            <a href="#github" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-github text-lg sm:text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 