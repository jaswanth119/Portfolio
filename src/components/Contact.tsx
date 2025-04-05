'use client';

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    // Don't scroll to top
    setTimeout(() => setShowSuccess(false), 5000); // Hide message after 5 seconds
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-indigo-50 animate-gradient-x"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>
      <div className="container mx-auto px-4 relative">
        <h2 className="section-heading">Contact Me</h2>
        <div className="max-w-2xl mx-auto">
          {showSuccess && (
            <div className="mb-8 bg-green-100 border border-green-200 text-green-700 px-6 py-4 rounded-lg animate-bounce-in text-center">
              <p className="text-lg font-medium">
                🎉 Message sent successfully! 🚀
              </p>
              <p className="text-sm mt-2">
                Thanks for reaching out! I&apos;ll get back to you soon 💌
              </p>
            </div>
          )}
          <form 
            onSubmit={handleSubmit}
            className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6 border border-gray-100"
          >
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 
                         focus:ring-2 focus:ring-blue-200 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 
                         focus:ring-2 focus:ring-blue-200 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 
                         focus:ring-2 focus:ring-blue-200 transition-colors resize-none"
                placeholder="Your message here..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 
                       transform hover:-translate-y-1 transition-all duration-300 shadow-lg
                       hover:shadow-xl font-medium"
            >
              Send Message ✉️
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
