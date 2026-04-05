import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Users, Trophy, BookOpen, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { submitInquiry } from '@/src/services/contactService';

const Home = () => {
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
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1920"
            alt="School Campus"
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-[#3b5f8a]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-md border border-accent/30 text-accent-dark px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Sparkles size={16} />
              <span>Admissions Open 2026-27</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Shaping <span className="text-accent">Future Leaders</span> with
              Excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
              Prateep Memorial School provides a nurturing environment where
              innovation meets tradition. Empowering students to excel
              academically and socially.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/admissions"
                className="bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-dark transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl"
              >
                Apply for Admission <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                Book a Campus Visit <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-10 left-0 right-0 z-10 hidden lg:block">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-4 gap-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
              {[
                { label: "Years of Excellence", value: "12+", icon: Trophy },
                { label: "Happy Students", value: "1000+", icon: Users },
                { label: "Expert Teachers", value: "10+", icon: BookOpen },
                {
                  label: "Board Affiliation",
                  value: "State",
                  icon: ShieldCheck,
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 border-r border-white/20 last:border-0"
                >
                  <div className="bg-accent text-primary p-3 rounded-xl">
                    <stat.icon size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-200">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">
              Why Choose Us
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              World-Class Education for Your Child
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine traditional values with modern technology to provide a
              holistic learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Smart Classrooms",
                desc: "Interactive digital boards and multimedia learning tools in every room.",
                icon: "💻",
              },
              {
                title: "Experienced Faculty",
                desc: "Highly qualified educators dedicated to student success and growth.",
                icon: "👩‍🏫",
              },
              {
                title: "Digital Learning",
                desc: "Advanced computer labs and coding curriculum for future-ready skills.",
                icon: "🚀",
              },
              {
                title: "Safe Campus",
                desc: "24/7 CCTV surveillance and strict safety protocols for peace of mind.",
                icon: "🛡️",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-6">{item.icon}</div>
                <h4 className="text-xl font-bold mb-4 text-gray-900">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">
                Our Programs
              </h2>
              <h3 className="text-4xl font-bold text-gray-900">
                Comprehensive Learning Paths
              </h3>
            </div>
            <Link
              to="/academics"
              className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all"
            >
              View All Programs <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Pre-Primary",
                age: "3-5 Years",
                img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800",
              },
              {
                name: "Primary",
                age: "6-10 Years",
                img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
              },
              {
                name: "Secondary",
                age: "11-16 Years",
                img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800",
              },
            ].map((program, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl aspect-[4/5]"
              >
                <img
                  src={program.img}
                  alt={program.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="text-accent font-bold mb-2">
                    {program.age}
                  </div>
                  <h4 className="text-3xl font-bold mb-4">{program.name}</h4>
                  <Link
                    to="/admissions"
                    className="bg-white text-primary px-6 py-2 rounded-full font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">
              Testimonials
            </h2>
            <h3 className="text-4xl font-bold">What Parents Say About Us</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Subbarayudu",
                role: "Parent of Grade 1 and Sr.KG Students",
                content:
                  "The transformation in my child's confidence and academic performance has been remarkable since joining Prateep Memorial.",
              },
              {
                name: "Uma Maheswari",
                role: "Parent of Grade 4 Student",
                content:
                  "The teachers are incredibly supportive and the learning tools make education fun and engaging for the kids.",
              },
              {
                name: "Naresh H",
                role: "Parent of Grade jr.KG Student",
                content:
                  "Excellent infrastructure and a very safe environment. The focus on holistic development is what sets this school apart.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl italic"
              >
                <div className="text-accent text-4xl mb-6">"</div>
                <p className="text-lg mb-8 text-blue-50 leading-relaxed">
                  {t.content}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-xl">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-sm text-blue-200">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Form Section */}
      <section className="py-24 bg-white" id="inquiry">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 md:p-20 bg-primary text-white flex flex-col justify-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-8">
                Admissions Open for 2026-27
              </h3>
              <p className="text-xl text-blue-100 mb-12 leading-relaxed">
                Take the first step towards your child's bright future. Fill out
                the form and our admissions counselor will get in touch with you
                within 24 hours.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-accent/20 p-2 rounded-lg text-accent">
                    <CheckCircle size={24} />
                  </div>
                  <span className="text-lg">Personalized Campus Tour</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-accent/20 p-2 rounded-lg text-accent">
                    <CheckCircle size={24} />
                  </div>
                  <span className="text-lg">Interaction with Faculty</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-accent/20 p-2 rounded-lg text-accent">
                    <CheckCircle size={24} />
                  </div>
                  <span className="text-lg">Detailed Curriculum Overview</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 p-12 md:p-20">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Parent's Name
                    </label>
                    <input
                      name="parentName"
                      required
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      required
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    name="email"
                    required
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Enter email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Class Interested In
                  </label>
                  <select
                    name="grade"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none bg-white"
                  >
                    <option value="">Select Class</option>
                    <option value="Pre-Primary">Pre-Primary</option>
                    <option value="Primary">Primary (1-5)</option>
                    <option value="Secondary">Secondary (6-10)</option>
                  </select>
                </div>
                <button
                  disabled={isSubmitting}
                  className="w-full bg-accent text-primary py-4 rounded-xl font-bold text-lg hover:bg-accent-dark transition-all shadow-lg transform hover:-translate-y-1 disabled:opacity-50"
                >
                  {isSubmitting
                    ? "Submitting..."
                    : isSuccess
                      ? "Inquiry Sent!"
                      : "Submit Inquiry"}
                </button>
                {isSuccess && (
                  <p className="text-center text-green-600 font-bold">
                    Thank you! We will contact you shortly.
                  </p>
                )}
                <p className="text-center text-sm text-gray-500">
                  By submitting, you agree to our{" "}
                  <a href="#" className="underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Sparkles = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);

export default Home;
