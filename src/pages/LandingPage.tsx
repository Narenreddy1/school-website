import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Star, Shield, Users, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { submitInquiry } from '@/src/services/contactService';

const LandingPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    
    const success = await submitInquiry(data);
    if (success) {
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setIsSuccess(false), 5000);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 text-center text-sm font-bold">
        Limited Seats Available for 2026-27! Apply Today.
      </div>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative z-10">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Star size={16} fill="currentColor" />
              <span>Top Rated CBSE School</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-8">
              Give Your Child the <span className="text-primary">Best Start</span> in Life
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Prateep Memorial School combines academic excellence with holistic development. Secure your child's future with our world-class education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#form" className="bg-accent text-primary px-10 py-5 rounded-full font-bold text-xl hover:bg-accent-dark transition-all shadow-xl text-center">
                Apply for Admission
              </a>
              <div className="flex items-center gap-4 px-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-bold text-gray-900">500+ Parents</div>
                  <div className="text-gray-500">Already Inquired</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="text-green-500"><CheckCircle size={20} /></div>
                <span className="font-medium text-gray-700">Smart Classrooms</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-green-500"><CheckCircle size={20} /></div>
                <span className="font-medium text-gray-700">Safe Campus</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-green-500"><CheckCircle size={20} /></div>
                <span className="font-medium text-gray-700">Expert Faculty</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-green-500"><CheckCircle size={20} /></div>
                <span className="font-medium text-gray-700">Holistic Growth</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative" id="form">
            <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl"></div>
            <div className="relative bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100">
              <h3 className="text-3xl font-bold mb-2 text-gray-900">Inquiry Form</h3>
              <p className="text-gray-500 mb-8">Get a call back from our admissions counselor.</p>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Parent's Name</label>
                  <input name="parentName" required type="text" className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none bg-gray-50" placeholder="Full Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Mobile Number</label>
                  <input name="phone" required type="tel" className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none bg-gray-50" placeholder="Phone Number" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Grade Interested</label>
                  <select name="grade" required className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none bg-gray-50 appearance-none">
                    <option value="">Select Grade</option>
                    <option value="Pre-Primary">Pre-Primary</option>
                    <option value="Primary">Primary</option>
                    <option value="Secondary">Secondary</option>
                  </select>
                </div>
                <button 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-5 rounded-xl font-bold text-xl hover:bg-blue-900 transition-all shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : isSuccess ? 'Inquiry Sent!' : 'Submit Inquiry Now'}
                </button>
                {isSuccess && (
                  <p className="text-center text-green-600 font-bold">
                    Thank you! We will contact you shortly.
                  </p>
                )}
                <p className="text-center text-xs text-gray-400">
                  Privacy Guaranteed. We never spam.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-2 font-bold text-xl"><Shield size={32} /> CBSE Affiliated</div>
          <div className="flex items-center gap-2 font-bold text-xl"><Trophy size={32} /> Award Winning</div>
          <div className="flex items-center gap-2 font-bold text-xl"><Users size={32} /> 2000+ Students</div>
          <div className="flex items-center gap-2 font-bold text-xl"><Star size={32} /> 4.9/5 Rating</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-500 text-sm">
        <p>© 2026 Prateep Memorial School. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
