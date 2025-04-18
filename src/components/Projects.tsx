'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'API Automation',
      period: 'Jun 2023 — Present',
      description: 'Led the development of an API automation framework that streamlined testing of 100+ API endpoints, reducing manual testing effort by 70% while improving test coverage and CI/CD integration.',
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
      description: 'Leading QA for an iOS payment app that transforms devices into contactless payment terminals. Implemented comprehensive testing strategies for multiple payment methods including Apple Pay, Klarna, and Swish.',
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
      description: 'Led testing for an Android payment app enabling contactless transactions via NFC. Achieved 50% automation coverage while ensuring compliance with banking standards and payment networks.',
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
      description: 'Led testing for BP-55 and BP-5500 payment terminals, focusing on API and in-app payment flows. Ensured compliance with European payment regulations while validating secure card transactions.',
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
      description: 'Developed end-to-end testing strategy for a charitable donation platform with 90% test automation coverage. Implemented comprehensive testing across learning portal, admin dashboard, and mobile app for seamless donor-entrepreneur connections.',
      technologies: ['Cypress', 'JavaScript', 'Linear', 'Notion', 'Maestro', 'CI/CD', 'Slack'],
      highlights: [
        'Learning Portal Dashboard:',
        'Conducted functional, integration, and usability testing',
        'Automated dashboard with Cypress achieving 90% coverage',
        'Ran automated tests for every production release',
        '',
        'Admin Dashboard:',
        'Executed manual and automated tests for core functionalities',
        'Ensured data integrity through API and database validation',
        'Verified entrepreneur profiles and donation tracking',
        '',
        'Mobile App (End-User Donations):',
        'Conducted UI/UX testing for smooth navigation',
        'Performed cross-platform testing on Android and iOS',
        'Developed automated tests using Maestro with CI/CD',
        'Set up Slack notifications for test results and screenshots'
      ],
      role: 'QA Engineer',
      teamSize: '1'
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
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
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * techIndex }}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm
                               hover:bg-blue-100 transition-colors duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              {project.title === 'Lendhope Platform' ? (
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Highlights:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <motion.li 
                        key={highlightIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 * highlightIndex }}
                        className="hover:text-gray-900 transition-colors duration-300"
                      >
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Highlights:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <motion.li 
                        key={highlightIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 * highlightIndex }}
                        className="hover:text-gray-900 transition-colors duration-300"
                      >
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex justify-between text-gray-600">
                  <span>Role: {project.role}</span>
                  <span>Team Size: {project.teamSize}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
