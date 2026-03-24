import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
// Icons available if needed: Image, Video, Filter from 'lucide-react'

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Campus', 'Events', 'Academics', 'Sports'];

  const images = [
    { id: 1, category: 'Campus', url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800', title: 'Main Building' },
    { id: 2, category: 'Events', url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800', title: 'Annual Day' },
    { id: 3, category: 'Academics', url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800', title: 'Science Lab' },
    { id: 4, category: 'Sports', url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800', title: 'Basketball Court' },
    { id: 5, category: 'Campus', url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800', title: 'Library' },
    { id: 6, category: 'Events', url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800', title: 'Science Fair' },
    { id: 7, category: 'Academics', url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800', title: 'Digital Classroom' },
    { id: 8, category: 'Sports', url: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800', title: 'Annual Sports Meet' },
  ];

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary py-20 text-white text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Capturing moments of learning, joy, and achievement at Prateep Memorial School.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2 rounded-full font-bold transition-all ${
                filter === cat ? 'bg-primary text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredImages.map(img => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-square overflow-hidden rounded-3xl shadow-sm hover:shadow-2xl transition-all"
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <div className="text-accent text-xs font-bold uppercase tracking-widest mb-1">{img.category}</div>
                    <div className="text-white font-bold text-lg">{img.title}</div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
