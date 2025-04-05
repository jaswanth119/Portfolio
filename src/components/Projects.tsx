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
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 animate-gradient-x"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>
      <div className="container mx-auto px-4 relative">
        <h2 className="section-heading">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-blue-600">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.period}</p>
                </div>
                {project.role && (
                  <div className="text-right">
                    <p className="text-gray-700 font-medium">Role: {project.role}</p>
                    <p className="text-gray-600 text-sm">Team Size: {project.teamSize}</p>
                  </div>
                )}
              </div>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-gray-800">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100/80 backdrop-blur-sm text-blue-800 text-sm px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-gray-800">Key Highlights:</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li 
                      key={highlightIndex} 
                      className={highlight.endsWith(':') 
                        ? 'font-semibold mt-2' 
                        : 'list-disc ml-6'
                      }
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
