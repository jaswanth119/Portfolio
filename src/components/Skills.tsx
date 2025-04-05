import React from 'react';

const Skills = () => {
  const skills = [
    'JavaScript',
    'RESTful API Testing',
    'Cypress',
    'Maestro',
    'Playwright',
    'HTML',
    'CSS',
    'Flutter',
    'PostgreSQL',
    'Jest',
    'CI/CD',
    'Test Automation'
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Skills</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 transition-colors hover:shadow-md"
              >
                <span className="text-gray-800 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
