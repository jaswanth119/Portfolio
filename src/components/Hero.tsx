'use client';

import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>
      
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-float-${i + 1} opacity-20 bg-blue-500 rounded-full`}
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 text-gray-800 animate-fade-in">
            Jaswanth Mallampati
          </h1>
          <h2 className="text-2xl text-gray-600 mb-8 animate-slide-up">
            Senior Software Engineer
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto animate-fade-in-delay">
            Experienced Software Engineer in Test with expertise in JavaScript, RESTful API validation, 
            and automation frameworks. Passionate about delivering high-quality software solutions.
          </p>
          <div className="flex justify-center gap-4 animate-bounce-in">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg 
                       hover:bg-blue-700 
                       transform hover:-translate-y-1 transition-all duration-300 
                       shadow-lg hover:shadow-xl"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="bg-white text-blue-600 
                       px-8 py-3 rounded-lg hover:bg-blue-50
                       transform hover:-translate-y-1 transition-all duration-300 
                       shadow-lg hover:shadow-xl border border-blue-200"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
