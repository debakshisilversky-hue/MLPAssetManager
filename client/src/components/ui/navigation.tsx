import { useState, useEffect } from "react";
import { Button } from "./button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md border-b metaphoto-bg-primary-350 border-opacity-50' 
        : 'bg-white/90 backdrop-blur-md border-b metaphoto-bg-primary-350 border-opacity-30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 metaphoto-bg-primary rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 2l7 4v12l-7-4V2zm1 3.62l5 2.86v8.52l-5-2.86V5.62zM2 5l7 4v12l-7-4V5zm1 3.62l5 2.86v8.52l-5-2.86V8.62z"/>
              </svg>
            </div>
            <span className="text-xl font-bold metaphoto-text-primary">MetaPhotoLog</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="metaphoto-text-black-02 hover:metaphoto-text-primary transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('screenshots')} 
              className="metaphoto-text-black-02 hover:metaphoto-text-primary transition-colors"
            >
              Screenshots
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="metaphoto-text-black-02 hover:metaphoto-text-primary transition-colors"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('use-cases')} 
              className="metaphoto-text-black-02 hover:metaphoto-text-primary transition-colors"
            >
              Use Cases
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="metaphoto-text-black-02 hover:metaphoto-text-primary transition-colors"
            >
              FAQ
            </button>
            <Button className="metaphoto-bg-primary text-white hover:metaphoto-bg-primary-550 transition-colors">
              Get Started
            </Button>
          </div>

          <button 
            className="md:hidden metaphoto-text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t metaphoto-bg-primary-350 border-opacity-30">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('features')} 
                className="block px-3 py-2 text-left w-full metaphoto-text-black-02 hover:metaphoto-text-primary"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('screenshots')} 
                className="block px-3 py-2 text-left w-full metaphoto-text-black-02 hover:metaphoto-text-primary"
              >
                Screenshots
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="block px-3 py-2 text-left w-full metaphoto-text-black-02 hover:metaphoto-text-primary"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('use-cases')} 
                className="block px-3 py-2 text-left w-full metaphoto-text-black-02 hover:metaphoto-text-primary"
              >
                Use Cases
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className="block px-3 py-2 text-left w-full metaphoto-text-black-02 hover:metaphoto-text-primary"
              >
                FAQ
              </button>
              <div className="px-3 py-2">
                <Button className="w-full metaphoto-bg-primary text-white hover:metaphoto-bg-primary-550">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
