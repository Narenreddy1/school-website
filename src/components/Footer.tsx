import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/logo.webp"
                alt="Prateep Memorial School Logo"
                className="w-14 h-14 object-contain bg-white"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight leading-none">
                  Prateep Memorial
                </span>
                <span className="text-xs font-medium tracking-[0.2em] uppercase mt-1 text-gray-400">
                  School
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Shaping future leaders through excellence in education, character
              building, and digital innovation. Join our community of learners
              today.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-accent pl-3">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Our School
                </Link>
              </li>
              <li>
                <Link
                  to="/academics"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Academic Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/admissions"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Admission Process
                </Link>
              </li>
              <li>
                <Link
                  to="/facilities"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Campus Facilities
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Photo Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-accent pl-3">
              Admissions
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/admissions"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Apply Online
                </Link>
              </li>
              <li>
                <Link
                  to="/admissions"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Fee Structure
                </Link>
              </li>
              <li>
                <Link
                  to="/admissions"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Eligibility Criteria
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Book a Campus Tour
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-accent pl-3">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-accent shrink-0" size={20} />
                <span className="text-gray-400">
                  Near Ramalayam, BalijaGadda Street, Gurramkonda, Annamaiah
                  District, 517297
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-accent shrink-0" size={20} />
                <span className="text-gray-400">+91 85 0026 5050</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-accent shrink-0" size={20} />
                <span className="text-gray-400">
                  admissions@prateepmemorial.edu
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 Prateep Memorial School. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
