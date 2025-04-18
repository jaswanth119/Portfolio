'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = {
    testing: [
      'Restful API Testing',
      'Cypress',
      'Maestro',
      'Playwright',
      'Test Automation',
      'Jest',
      'CI/CD',
    ],
    programming: [
      'Javascript',
      'HTML',
      'CSS',
      'Flutter',
      'PostgreSQL',
    ]
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading mb-12"
        >
          Skills
        </motion.h2>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Testing Skills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-8 shadow-lg border border-indigo-100"
            >
              <h3 className="text-2xl font-bold text-indigo-600 mb-6 text-center">Testing Skills</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.testing.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white px-4 py-2 rounded-full shadow-sm border border-indigo-100
                             hover:shadow-md transition-all duration-300"
                  >
                    <span className="text-gray-800 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Programming Skills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100"
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-6 text-center">Programming Skills</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.programming.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white px-4 py-2 rounded-full shadow-sm border border-blue-100
                             hover:shadow-md transition-all duration-300"
                  >
                    <span className="text-gray-800 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
