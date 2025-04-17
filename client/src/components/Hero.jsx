import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12 md:py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white min-h-[80vh] relative overflow-hidden">
      <div className="flex-1 max-w-2xl z-10 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 font-bold leading-tight animate-fadeIn">
          Centralize Your <span className="text-blue-400">Job Search</span>
        </h1>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed opacity-90 animate-fadeInUp">
          One platform to track all your job applications, manage interviews, and organize your career journey
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp justify-center lg:justify-start">
          <button className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50">
            Start Organizing
          </button>
          <button className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
            See How It Works
          </button>
        </div>
        <div className="mt-6 sm:mt-8 flex items-center justify-center lg:justify-start gap-4 animate-fadeInUp">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 border-2 border-blue-900"></div>
            ))}
          </div>
          <p className="text-xs sm:text-sm opacity-80">Join 10,000+ job seekers worldwide</p>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center mt-8 lg:mt-0 lg:ml-8 relative w-full lg:w-auto">
        <div className="w-full max-w-2xl h-[300px] sm:h-[400px] bg-white/10 rounded-xl backdrop-blur-sm shadow-2xl transform hover:scale-105 transition-transform duration-500">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-6 h-6 sm:w-8 sm:h-8 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/4 right-1/4 w-6 h-6 sm:w-8 sm:h-8 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] opacity-10 bg-repeat-x"
           style={{
             backgroundImage: 'url("/wave-pattern.svg")',
             animation: 'wave 10s linear infinite'
           }}>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero; 