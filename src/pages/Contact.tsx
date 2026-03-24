import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import { submitInquiry } from '@/src/services/contactService';

const Contact = () => {
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
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary py-20 text-white text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out to us for any inquiries or to schedule a visit.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-2xl text-primary"><MapPin size={24} /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Our Address</h4>
                    <p className="text-gray-600">Near Ramalayam, BalijaGadda Street, Gurramkonda, Annamaiah District, 517297</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-2xl text-secondary"><Phone size={24} /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Phone Numbers</h4>
                    <p className="text-gray-600">+91 85 0026 5050</p>
                    <p className="text-gray-600">+91 85 0026 4040</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-2xl text-yellow-600"><Mail size={24} /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Email Support</h4>
                    <p className="text-gray-600">info@prateepmemorial.edu</p>
                    <p className="text-gray-600">admissions@prateepmemorial.edu</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-2xl text-purple-600"><Clock size={24} /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Office Hours</h4>
                    <p className="text-gray-600">Mon - Sat: 8.30:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100">
                <h3 className="text-3xl font-bold mb-8 text-gray-900">Send us a Message</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                      <input name="name" required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none" placeholder="Full Name" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                      <input name="phone" required type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none" placeholder="Mobile Number" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                    <input name="subject" required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none" placeholder="Inquiry Subject" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                    <textarea name="message" required rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none resize-none" placeholder="How can we help you?"></textarea>
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-900 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : isSuccess ? 'Message Sent!' : 'Send Message'} <Send size={20} />
                  </button>
                  {isSuccess && (
                    <p className="text-center text-green-600 font-bold">
                      Thank you! We will get back to you soon.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[500px] w-full bg-gray-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.984763582474!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1647856421234!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="School Location"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
