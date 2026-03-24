import React from 'react';
import { motion } from 'motion/react';
import { Book, Laptop, Users, ClipboardCheck, GraduationCap, Lightbulb } from 'lucide-react';

const Academics = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary py-20 text-white text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold mb-6">Academic Excellence</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Empowering students with a future-ready curriculum and innovative teaching methodologies.
          </p>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Our Curriculum</h2>
              <h3 className="text-4xl font-bold text-gray-900 mb-8">CBSE Based Holistic Learning</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our curriculum is designed to foster critical thinking, creativity, and a love for learning. We follow the CBSE framework, enhanced with international best practices.
              </p>
              <ul className="space-y-4">
                {[
                  'Integrated STEM education from Primary level.',
                  'Focus on language proficiency and communication skills.',
                  'Regular workshops and guest lectures from industry experts.',
                  'Personalized learning paths for every student.',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="bg-green-100 text-green-600 p-1 rounded-full"><ClipboardCheck size={18} /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=500" alt="Learning" className="rounded-3xl shadow-lg mt-8" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=500" alt="Digital Learning" className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
            </div>
          </div>

          {/* Methodology */}
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Teaching Methodology</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We move beyond rote memorization to experiential and inquiry-based learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Experiential Learning', desc: 'Learning by doing through projects, field trips, and hands-on experiments.', icon: Lightbulb, color: 'bg-yellow-100 text-yellow-600' },
              { title: 'Digital Integration', desc: 'Seamless use of technology and digital resources in every subject.', icon: Laptop, color: 'bg-blue-100 text-blue-600' },
              { title: 'Collaborative Work', desc: 'Group projects and peer learning to build teamwork and social skills.', icon: Users, color: 'bg-green-100 text-green-600' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8`}>
                  <item.icon size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h3 className="text-4xl font-bold mb-8">Continuous & Comprehensive Assessment</h3>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                We believe in evaluating a child's progress across various dimensions, not just exams. Our assessment system is designed to be stress-free and growth-oriented.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
                  <div className="font-bold text-accent mb-2">Formative</div>
                  <p className="text-sm text-blue-50">Regular quizzes, assignments, and class participation.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
                  <div className="font-bold text-accent mb-2">Summative</div>
                  <p className="text-sm text-blue-50">Term-end evaluations to measure overall understanding.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
                alt="Assessment"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
