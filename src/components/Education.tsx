'use client';

import React from 'react';

const Education = () => {
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
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-50 to-indigo-50 animate-gradient-x"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>
      <div className="container mx-auto px-4 relative">
        <h2 className="section-heading">Education</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl 
                       transition-all duration-300 hover:-translate-y-1 border border-gray-100
                       animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-blue-600">{edu.degree}</h3>
                    <span className="bg-blue-100/80 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <div className="space-y-1 text-gray-600">
                    <p className="font-medium text-lg">{edu.institution}</p>
                    <p>{edu.location}</p>
                    <p className="text-sm">
                      <span className="font-medium">University/Board:</span> {edu.board}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
