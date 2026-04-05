import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
// Icons available if needed: Image, Video, Filter from 'lucide-react'

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const categories = ['All', 'Campus', 'Events', 'Academics', 'Sports'];

  const images = [
    { id: 1, category: 'Campus', url: 'schoolentrance.webp', title: 'Main Building' },
    { id: 2, category: 'Events', url: 'event.webp', title: 'School Outing' },
    { id: 3, category: 'Academics', url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800', title: 'Science Lab' },
    { id: 4, category: 'Sports', url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800', title: 'Basketball Court' },
    { id: 5, category: 'Campus', url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800', title: 'Library' },
    { id: 6, category: 'Events', url: 'event1.webp', title: 'School Outing' },
    { id: 7, category: 'Academics', url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800', title: 'Digital Classroom' },
    { id: 8, category: 'Sports', url: 'kids.webp', title: 'Annual Sports Meet' },
  ];
  
  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

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
          <h1 className="text-5xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Capturing moments of learning, joy, and achievement at Prateep
            Memorial School.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2 rounded-full font-bold transition-all ${
                filter === cat
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100"
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
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-square overflow-hidden rounded-3xl shadow-sm hover:shadow-2xl transition-all cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <div className="text-accent text-xs font-bold uppercase tracking-widest mb-1">
                      {img.category}
                    </div>
                    <div className="text-white font-bold text-lg">
                      {img.title}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
              >
                ✕
              </button>

              <div className="mt-4 text-center text-white">
                <p className="text-accent">{selectedImage.category}</p>
                <h2 className="text-xl font-bold">{selectedImage.title}</h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
