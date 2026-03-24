import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const StickyAdmissionBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't show on admissions page or landing page
  if (location.pathname === '/admissions' || location.pathname === '/lp') return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 bg-primary text-white py-3 px-4 z-40 transition-transform duration-500 transform border-t border-blue-800 shadow-2xl md:py-4",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-accent text-primary p-1 rounded-full animate-pulse">
            <Sparkles size={18} />
          </div>
          <p className="font-bold text-sm md:text-lg">
            Admissions Open for 2026-27! <span className="text-accent hidden sm:inline">Limited Seats Available.</span>
          </p>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <Link
            to="/admissions"
            className="flex-1 md:flex-none bg-accent text-primary px-6 py-2 rounded-full font-bold text-sm hover:bg-accent-dark transition-colors flex items-center justify-center gap-2"
          >
            Apply Now <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+919876543210"
            className="flex-1 md:flex-none border border-white/30 bg-white/10 px-6 py-2 rounded-full font-bold text-sm hover:bg-white/20 transition-colors text-center"
          >
            Call Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyAdmissionBar;
