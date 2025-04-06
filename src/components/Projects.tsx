'use client';

import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'API Automation',
      description: 'Developed a comprehensive API automation framework using JavaScript and Jest, achieving 90% test coverage.',
      tech: ['JavaScript', 'Jest', 'CI/CD', 'REST APIs'],
      link: '#'
    },
    {
      title: 'SoftPOS iOS App',
      description: 'Led the testing efforts for SoftPOS iOS application, implementing automated test scripts using XCUITest.',
      tech: ['iOS', 'XCUITest', 'Swift', 'CI/CD'],
      link: '#'
    },
    {
      title: 'Terminal Testing',
      description: 'Conducted L3 testing for payment terminals, ensuring compliance with European payment regulations.',
      tech: ['Payment Systems', 'Test Planning', 'Compliance'],
      link: '#'
    },
    {
      title: 'SoftPOS Mobile Apps',
      description: 'SoftPOS is a mobile payment application that enables merchants to accept contactless payments on Android devices by using NFC technology, eliminating the need for traditional payment terminals.',
      tech: ['Android', 'NFC', 'Maestro', 'CI/CD', 'Linear', 'Slack Integration'],
      link: '#'
    },
    {
      title: 'Lendhope Platform',
      description: 'A comprehensive platform facilitating charitable donations for struggling entrepreneurs, comprising two dashboards and a mobile app.',
      tech: ['Cypress', 'JavaScript', 'Linear', 'Notion', 'Maestro', 'CI/CD', 'Slack'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-20 left-20 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-heading">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
