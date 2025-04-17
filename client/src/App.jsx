import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Hero from './components/Hero';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 py-3 sm:py-4 bg-blue-900 text-white z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <Link to="/" className="text-lg sm:text-xl md:text-2xl font-bold hover:opacity-80 transition-opacity">
        LockedIn
      </Link>
      
      {/* Mobile menu button */}
      <button
        className="md:hidden   hover:bg-white/10 rounded-lg transition-colors relative"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <div className="w-6 h-6 flex flex-col justify-between mx-auto">
          <span className={`block w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </div>
      </button>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
        <Link to="/#features" className="hover:opacity-80 transition-opacity">Features</Link>
        <Link to="/#solutions" className="hover:opacity-80 transition-opacity">Solutions</Link>
        <Link to="/#resources" className="hover:opacity-80 transition-opacity">Resources</Link>
        <Link to="/#pricing" className="hover:opacity-80 transition-opacity">Pricing</Link>
        <div className="flex items-center space-x-4">
          <Link 
            to="/dashboard"
            className="px-3 sm:px-4 py-1.5 sm:py-2 border border-white rounded hover:bg-white/10 transition-colors text-sm sm:text-base"
          >
            Login
          </Link>
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500 rounded hover:bg-blue-600 transition-colors text-sm sm:text-base">
            Try LockedIn free
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed top-16 left-0 right-0 bg-blue-900 transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-1 p-4">
          <Link 
            to="/#features" 
            className="hover:bg-white/10 transition-colors py-3 px-4 rounded-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link 
            to="/#solutions" 
            className="hover:bg-white/10 transition-colors py-3 px-4 rounded-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Solutions
          </Link>
          <Link 
            to="/#resources" 
            className="hover:bg-white/10 transition-colors py-3 px-4 rounded-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Resources
          </Link>
          <Link 
            to="/#pricing" 
            className="hover:bg-white/10 transition-colors py-3 px-4 rounded-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          <div className="flex flex-col space-y-3 pt-4 mt-4 border-t border-white/10">
            <Link 
              to="/dashboard"
              className="w-full px-4 py-3 border border-white rounded-lg hover:bg-white/10 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <button className="w-full px-4 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors text-center">
              Try LockedIn free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <main className="mt-16 flex-1">
        <Hero />
        <Features />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
