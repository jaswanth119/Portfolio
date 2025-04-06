'use client';

import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'API Automation',
      period: 'Jun 2023 — Present',
      description: 'This project focuses on automating API testing to improve backend reliability and efficiency. By automating over 100+ API calls, the goal is to reduce manual effort, enhance test coverage, and seamlessly integrate testing into the CI/CD pipeline.',
      technologies: ['JavaScript', 'Jest', 'Insomnia', 'CI/CD'],
      highlights: [
        'Led team of 4 testers in automation strategies',
        'Automated 100+ API calls for comprehensive coverage',
        'Implemented end-to-end test automation framework',
        'Integrated with CI/CD pipeline for continuous testing'
      ],
      role: 'Team Lead',
      teamSize: '4'
    },
    {
      title: 'SoftPOS iOS App',
      period: 'Oct 2024 — Present',
      description: 'SoftPOS is a mobile payment application that enables merchants to accept contactless payments on iOS devices using NFC technology, eliminating the need for traditional payment terminals. The app supports multiple payment methods including Card, Swish, Klarna, and Cash to provide a seamless and secure transaction experience for users.',
      technologies: ['iOS', 'NFC', 'Linear', 'Notion', 'Apple Pay', 'Klarna', 'Swish'],
      highlights: [
        'Led testing team for manual and automation testing efforts',
        'Conducted L3 testing for certification compliance',
        'Performed performance testing based on Apple guidelines',
        'Validated NFC-based card transactions and API flows',
        'Managed test cases and defects using Linear and Notion'
      ],
      role: 'Team Lead',
      teamSize: '2'
    },
    {
      title: 'SoftPOS Mobile Apps',
      period: 'Feb 2023 — Present',
      description: 'SoftPOS is a mobile payment application that enables merchants to accept contactless payments on Android devices by using NFC technology, eliminating the need for traditional payment terminals. The app supports multiple payment methods, including Card, Swish, Klarna, and Cash to provide a secure and seamless transaction experience for users. It ensures compliance with industry standards and integrates with various banking and payment networks to enable fast and reliable transactions.',
      technologies: ['Android', 'NFC', 'Maestro', 'CI/CD', 'Linear', 'Slack Integration'],
      highlights: [
        'Led testing teams for Android version',
        'Achieved 50% automation coverage',
        'Conducted L3 certification testing',
        'Implemented real-time test monitoring',
        'Ensured compliance with industry standards'
      ],
      role: 'Team Lead',
      teamSize: '3'
    },
    {
      title: 'Terminal Testing',
      period: 'Mar 2022 — Present',
      description: 'This project involves testing BP-55 and BP-5500 payment terminals, designed to facilitate secure card transactions for merchants. The BP-55 is the initial version, focusing on API-based payment collection, while the BP-5500, an Android OS-based terminal, features an advanced payment app supporting both in-app and API-based transactions. The goal is to ensure seamless payment processing while maintaining compliance with European payment regulations.',
      technologies: ['Linear', 'Notion', 'Manual Testing', 'Android OS'],
      highlights: [
        'Led team of 3 testers',
        'Conducted L3 testing for both terminal versions',
        'Ensured European payment compliance',
        'Validated multiple payment networks',
        'Tested both API and in-app payment flows'
      ],
      role: 'Team Lead',
      teamSize: '3'
    },
    {
      title: 'Lendhope Platform',
      period: 'Jan 2021 — Jul 2023',
      description: 'A comprehensive platform facilitating charitable donations for struggling entrepreneurs, comprising two dashboards and a mobile app. The platform enables entrepreneur training, donation management, and seamless mobile contributions.',
      technologies: ['Cypress', 'JavaScript', 'Linear', 'Notion', 'Maestro', 'CI/CD', 'Slack'],
      highlights: [
        'Learning Portal Dashboard:',
        'Conducted functional and usability testing for entrepreneur training portal',
        'Achieved 90% test automation coverage using Cypress',
        'Implemented automated testing for every production release',
        'Admin Dashboard:',
        'Executed comprehensive testing for profile management and donation tracking',
        'Performed API testing and database validation for data integrity',
        'Mobile App:',
        'Conducted cross-platform UI/UX testing for Android and iOS',
        'Implemented Maestro automation with CI/CD integration',
        'Set up real-time test monitoring with Slack notifications'
      ],
      role: 'QA Engineer',
      teamSize: '1'
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 animate-gradient-x"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      {/* Floating bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-float opacity-20 transition-opacity duration-1000 hover:opacity-40`}
            style={{
              width: `${Math.random() * 120 + 60}px`,
              height: `${Math.random() * 120 + 60}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 2 === 0 ? '#3B82F6' : '#6366F1',
              borderRadius: '50%',
              animation: `float-${i + 1} ${Math.random() * 15 + 20}s infinite`,
              animationDelay: `${Math.random() * 5}s`,
              filter: 'blur(1px)',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <h2 className="section-heading">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl 
                       transition-all duration-500 hover:-translate-y-2 border border-gray-100
                       hover:bg-white/90"
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 
                         transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4">{project.period}</p>
              <p className="text-gray-700 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm
                               hover:bg-blue-100 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Highlights</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="hover:text-gray-900 transition-colors duration-300">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex justify-between text-gray-600">
                  <span>Role: {project.role}</span>
                  <span>Team Size: {project.teamSize}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
