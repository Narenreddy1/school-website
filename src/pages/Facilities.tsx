import React from 'react';
import { motion } from 'motion/react';
import { Microscope, Library, Dumbbell, Bus, Shield, Wifi } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    // { title: 'Science Labs', desc: 'Fully equipped Physics, Chemistry, and Biology labs for hands-on exploration.', icon: Microscope, img: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800' },
    { title: 'Digital Library', desc: 'A vast collection of books and digital resources to inspire a love for reading.', icon: Library, img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800' },
    { title: 'Sports Complex', desc: 'Indoor and outdoor sports facilities including basketball, football, and yoga.', icon: Dumbbell, img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800' },
    { title: 'Safe Transport', desc: 'GPS-enabled school buses with trained staff for safe and secure commuting.', icon: Bus, img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800' },
    { title: 'Smart Campus', desc: 'High-speed Wi-Fi and digital connectivity across the entire campus.', icon: Wifi, img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800' },
    { title: '24/7 Security', desc: 'Round-the-clock CCTV surveillance and professional security personnel.', icon: Shield, img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="logo.webp"
            alt="School Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold mb-6">Campus Facilities</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            State-of-the-art infrastructure designed to provide the best
            learning environment for our students.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {facilities.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={f.img}
                    alt={f.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl text-primary shadow-lg">
                    <f.icon size={24} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {f.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Shield size={16} />
              <span>Safety First Campus</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Your Child's Safety is Our Priority
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              We have implemented rigorous safety measures including background
              checks for all staff, fire safety protocols, and emergency
              response systems to ensure a secure environment.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "CCTV Monitoring",
                "Fire Safety",
                "Staff Verification",
                "First Aid Station",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                >
                  <div className="font-bold text-gray-900">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
