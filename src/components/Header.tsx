import React, { useState, useEffect } from 'react';
import { Menu, X, Monitor, User, LogIn } from 'lucide-react';
import AuthModal from './AuthModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  const openAuthModal = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setShowAuthModal(true);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header className={`fixed w-full z-[49] transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'backdrop-blur-lg bg-white/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Monitor className={`h-8 w-8 transition-colors duration-300 ${
                isScrolled ? 'text-[#0D47A1]' : 'text-white'
              }`} />
              <span className={`ml-2 text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-[#0D47A1]' : 'text-white'
              }`}>Appuse</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex space-x-8">
                {['Home', 'Services', 'Projects', 'Testimonials', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`transition-colors duration-300 ${
                      isScrolled 
                        ? 'text-[#1A237E] hover:text-[#40c4ff]' 
                        : 'text-[#F5F5F5] hover:text-white'
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </nav>
              
              {/* Auth Buttons */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => openAuthModal('login')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-300 ${
                    isScrolled
                      ? 'text-[#1A237E] hover:bg-[#1A237E] hover:text-white'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </button>
                <button
                  onClick={() => openAuthModal('register')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-300 ${
                    isScrolled
                      ? 'text-[#1A237E] hover:bg-[#1A237E] hover:text-white'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <User className="w-4 h-4" />
                  <span>Register</span>
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-[52] p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className={`h-6 w-6 transition-colors duration-300 ${
                  isScrolled ? 'text-[#1A237E]' : 'text-white'
                }`} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Container */}
      <div className={`fixed inset-0 md:hidden z-[50] ${isMenuOpen ? '' : 'pointer-events-none'}`}>
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          id="mobile-menu"
          className={`absolute left-0 top-0 h-full w-[280px] bg-gradient-to-br from-[#1a237e] to-[#40c4ff] shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 p-2 text-white hover:text-[#40c4ff] transition-colors duration-300"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="h-full flex flex-col pt-24 px-6">
            <nav className="flex-1">
              {['Home', 'Services', 'Projects', 'Testimonials', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={handleMenuItemClick}
                  className="block py-2 text-lg font-medium text-white hover:text-[#40c4ff] transition-colors duration-300 border-b border-white/10"
                >
                  {item}
                </a>
              ))}
              
              {/* Mobile Auth Buttons */}
              <div className="mt-6 space-y-4">
                <button
                  onClick={() => openAuthModal('login')}
                  className="w-full flex items-center justify-center space-x-2 py-2 text-white hover:text-[#40c4ff] transition-colors duration-300 border border-white/20 rounded-lg"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </button>
                <button
                  onClick={() => openAuthModal('register')}
                  className="w-full flex items-center justify-center space-x-2 py-2 text-white hover:text-[#40c4ff] transition-colors duration-300 border border-white/20 rounded-lg"
                >
                  <User className="w-4 h-4" />
                  <span>Register</span>
                </button>
              </div>
            </nav>
            <div className="pb-8 text-white/70 text-sm">
              <p>© 2025 Appuse</p>
              <p>All rights reserved</p>
            </div>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
        onSwitchMode={(mode) => setAuthMode(mode)}
      />
    </>
  );
};

export default Header;