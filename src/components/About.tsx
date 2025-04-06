'use client';

import React from 'react';

const About = () => {
  const education = [
    {
      degree: 'B.TECH (ECE)',
      institution: 'SRM University',
      location: 'Chennai',
      board: 'SRM',
      period: 'Jun 2016 — May 2020'
    },
    {
      degree: 'H.S.C',
      institution: 'Sri Chaitanya H.S.C',
      location: 'Vijayawada',
      board: 'State Board',
      period: 'Apr 2015 — Mar 2016'
    },
    {
      degree: 'S.S.C',
      institution: 'Bhashyam',
      location: 'Guntur',
      board: 'State Board',
      period: 'Apr 2013 — Mar 2014'
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 animate-gradient-x"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>
      <div className="container mx-auto px-4 relative">
        <h2 className="section-heading">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-gray-100 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Senior Software Engineer in Test with over 4 years of experience in the payments industry. 
              Based in Chennai, India, I specialize in creating robust automation frameworks and ensuring 
              high-quality software delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-600">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div 
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-lg 
                             transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h4 className="text-lg font-bold text-gray-800">{edu.degree}</h4>
                      <span className="bg-blue-100/80 text-blue-800 text-sm px-3 py-1 rounded-full whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
                    <div className="space-y-1 text-gray-600">
                      <p className="font-medium">{edu.institution}</p>
                      <p>{edu.location}</p>
                      <p className="text-sm">
                        <span className="font-medium">Board:</span> {edu.board}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-600">Languages</h3>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md border border-gray-100">
                <ul className="space-y-3">
                  {['Telugu', 'English', 'Hindi', 'Tamil'].map((language, index) => (
                    <li 
                      key={index}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      {language}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
