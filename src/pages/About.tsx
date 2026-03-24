import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Award, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1920"
            alt="School Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold mb-6">About Our School</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            A legacy of excellence, a future of innovation. Discover the heart of Prateep Memorial School.
          </p>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Our Legacy</h2>
              <h3 className="text-4xl font-bold text-gray-900 mb-8">25 Years of Educational Excellence</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2001, Prateep Memorial School was established with a vision to provide quality education that transcends textbooks. We believe in nurturing the unique potential of every child.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Over the decades, we have evolved into a premier educational institution, known for our academic rigor, holistic development programs, and state-of-the-art digital infrastructure.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl text-primary"><Target size={24} /></div>
                  <div>
                    <div className="font-bold text-gray-900">Mission</div>
                    <div className="text-sm text-gray-500">Empowering Minds</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-xl text-secondary"><Eye size={24} /></div>
                  <div>
                    <div className="font-bold text-gray-900">Vision</div>
                    <div className="text-sm text-gray-500">Global Leaders</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000"
                alt="Students Learning"
                className="rounded-[3rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold text-primary mb-1">2001</div>
                <div className="text-gray-500 font-medium">Year Established</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal Message */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl flex flex-col md:flex-row gap-12 items-center">
            <div className="w-64 h-64 shrink-0 rounded-full overflow-hidden border-8 border-gray-50 shadow-inner">
              <img
                src="https://images.unsplash.com/photo-1544717297-fa154da09f5b?auto=format&fit=crop&q=80&w=400"
                alt="Principal"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="text-accent text-6xl mb-6">"</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Message from the Principal</h3>
              <p className="text-xl text-gray-600 italic mb-8 leading-relaxed">
                "At Prateep Memorial, we don't just teach subjects; we inspire curiosity. Our goal is to create a generation of thinkers, innovators, and compassionate leaders who are ready to take on the challenges of the 21st century."
              </p>
              <div>
                <div className="font-bold text-xl text-gray-900">Dr. Sarah Johnson</div>
                <div className="text-primary font-medium">Principal, Prateep Memorial School</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Journey of Excellence</h2>
          </div>
          <div className="space-y-12">
            {[
              { year: '2001', event: 'School Foundation laid with 50 students.' },
              { year: '2008', event: 'Received CBSE Affiliation and expanded to Secondary level.' },
              { year: '2015', event: 'Inaugurated state-of-the-art Science and Computer Labs.' },
              { year: '2022', event: 'Awarded "Best Digital School" in the region.' },
              { year: '2026', event: 'Launching advanced AI and Robotics curriculum.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-8 items-start">
                <div className="bg-primary text-white font-bold px-6 py-2 rounded-full shrink-0 shadow-lg">
                  {item.year}
                </div>
                <div className="pt-2 border-l-2 border-gray-100 pl-8 pb-8">
                  <p className="text-xl text-gray-700 font-medium">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
