import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-primary/90 backdrop-blur-md py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/logo-removebg-preview.png" 
              alt="Prateep Memorial School Logo" 
              className="w-12 h-12 md:w-14 md:h-14 object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className={cn(
                "font-bold text-lg md:text-xl tracking-tight leading-none",
                isScrolled ? "text-primary" : "text-white drop-shadow-md"
              )}>
                Prateep Memorial
              </span>
              <span className={cn(
                "text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase mt-1",
                isScrolled ? "text-gray-500" : "text-gray-200"
              )}>
                School
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  location.pathname === link.path 
                    ? "text-accent" 
                    : isScrolled ? "text-gray-700" : "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admissions"
              className="bg-accent text-primary px-5 py-2 rounded-full font-bold text-sm hover:bg-accent-dark transition-all transform hover:scale-105 shadow-lg"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className={cn(
                "p-2 rounded-md",
                isScrolled ? "text-gray-700" : "text-white"
              )}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-xl border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary border-b border-gray-50"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/admissions"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-primary text-white px-5 py-3 rounded-lg font-bold hover:bg-blue-900 transition-colors"
              >
                Apply for Admission
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
