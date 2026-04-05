import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, FileText, Calendar, CreditCard, ArrowRight, HelpCircle } from 'lucide-react';
import { submitInquiry } from '@/src/services/contactService';

const Admissions = () => {
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

  const steps = [
    { title: 'Online Inquiry', desc: 'Fill out the inquiry form on our website to start the process.', icon: FileText },
    { title: 'Campus Visit', desc: 'Schedule a visit to experience our campus and interact with faculty.', icon: Calendar },
    { title: 'Interaction', desc: 'A friendly interaction with the child and parents to understand needs.', icon: HelpCircle },
    { title: 'Documentation', desc: 'Submit required documents and complete the registration.', icon: CheckCircle },
    { title: 'Fee Payment', desc: 'Secure the admission by paying the initial admission fee.', icon: CreditCard },
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
          <h1 className="text-5xl font-bold mb-6">Admissions 2026-27</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join the Prateep Memorial family. We are now accepting applications
            for the upcoming academic year.
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">
              Step-by-Step
            </h2>
            <h3 className="text-4xl font-bold text-gray-900">
              Our Admission Process
            </h3>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-100 -translate-y-1/2 hidden lg:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
              {steps.map((step, i) => (
                <div key={i} className="text-center group">
                  <div className="w-20 h-20 bg-white border-4 border-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-primary shadow-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <step.icon size={32} />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900">
                    {step.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form & Info */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Eligibility & Documents */}
            <div>
              <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Eligibility Criteria
                </h3>
                <ul className="space-y-4">
                  {[
                    "Pre-Primary: 3+ years as of June 1st.",
                    "Primary: 6+ years for Grade 1.",
                    "Transfer certificate required for Grade 2 and above.",
                    "Academic records of the previous school.",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <div className="mt-1 text-primary">
                        <CheckCircle size={18} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Documents Required
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Birth Certificate",
                    "Aadhar Card (Child & Parents)",
                    "Passport Size Photographs",
                    "Previous Year Report Card",
                    "Transfer Certificate",
                    "Address Proof",
                  ].map((doc, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl text-sm font-medium text-gray-700"
                    >
                      <FileText size={16} className="text-primary" />
                      {doc}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Admission Form */}
            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100">
              <h3 className="text-3xl font-bold mb-2 text-gray-900">
                Apply Online
              </h3>
              <p className="text-gray-500 mb-8">
                Fill the form below to start your application.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Student's Name
                    </label>
                    <input
                      name="studentName"
                      required
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none"
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Date of Birth
                    </label>
                    <input
                      name="dob"
                      required
                      type="date"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Applying for Grade
                  </label>
                  <select
                    name="grade"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none appearance-none bg-white"
                  >
                    <option value="">Select Grade</option>
                    <option value="Nursery/KG">Nursery / KG</option>
                    <option value="Grade 1-5">Grade 1 - 5</option>
                    <option value="Grade 6-10">Grade 6 - 10</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Parent's Phone
                  </label>
                  <input
                    name="phone"
                    required
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Mobile Number"
                  />
                </div>
                <button
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-900 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting
                    ? "Submitting..."
                    : isSuccess
                      ? "Application Sent!"
                      : "Submit Application"}{" "}
                  <ArrowRight size={20} />
                </button>
                {isSuccess && (
                  <p className="text-center text-green-600 font-bold">
                    Thank you! We will contact you shortly.
                  </p>
                )}
                <p className="text-center text-xs text-gray-400">
                  Our team will contact you within 24 hours to schedule an
                  interaction.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
