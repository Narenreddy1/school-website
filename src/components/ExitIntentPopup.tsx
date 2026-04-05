import React, { useState, useEffect } from 'react';
import { X, Bell, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden relative"
        >
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>

          <div className="bg-primary p-8 text-white text-center relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"></div>
            <Bell className="mx-auto mb-4 text-accent" size={48} />
            <h2 className="text-2xl font-bold mb-2">Don't Miss Out!</h2>
            <p className="text-blue-100">Admissions are closing soon for the 2026-27 academic year.</p>
          </div>

          <div className="p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Secure Your Child's Future Today</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                State Board Affiliated Excellence
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Smart Digital Classrooms
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Holistic Development Focus
              </li>
            </ul>

            <div className="flex flex-col gap-3">
              <Link
                to="/admissions"
                onClick={() => setIsVisible(false)}
                className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-900 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                Apply for Admission <ArrowRight size={20} />
              </Link>
              <button
                onClick={() => setIsVisible(false)}
                className="w-full py-3 text-gray-500 font-medium hover:text-gray-700 transition-colors"
              >
                Maybe later
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
