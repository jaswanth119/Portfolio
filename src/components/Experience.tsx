import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Experience</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-4 border-blue-600 ml-4">
            <div className="mb-12 ml-8">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[10px]"></div>
              <h3 className="text-2xl font-bold text-blue-600">Senior Software Engineer</h3>
              <p className="text-lg text-gray-600 mb-2">Surfboard Payments</p>
              <p className="text-gray-500 mb-4">August 2023 - Present</p>
              <div className="prose max-w-none">
                <ul className="list-disc ml-4 text-gray-700">
                  <li>Lead testing teams across multiple projects including SoftPOS Mobile Apps (iOS & Android) and Terminal Testing</li>
                  <li>Developed and executed automated test scripts using JavaScript, Jest, and Maestro</li>
                  <li>Achieved 90% test efficiency in API automation and 50% automation coverage in mobile app testing</li>
                  <li>Conducted L3 testing for payment terminals and ensured compliance with European payment regulations</li>
                  <li>Integrated automation test scripts into CI/CD pipelines with Slack notifications</li>
                </ul>
              </div>
            </div>

            <div className="mb-12 ml-8">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[10px]"></div>
              <h3 className="text-2xl font-bold text-blue-600">QA Engineer</h3>
              <p className="text-lg text-gray-600 mb-2">Surfboard Payments</p>
              <p className="text-gray-500 mb-4">Jan 2021 - Jul 2023</p>
              <div className="prose max-w-none">
                <ul className="list-disc ml-4 text-gray-700">
                  <li>Developed and maintained test automation frameworks using Cypress and JavaScript</li>
                  <li>Achieved 90% test coverage for the Learning Portal Dashboard</li>
                  <li>Conducted comprehensive testing across web dashboards and mobile applications</li>
                  <li>Performed UI/UX testing and cross-device compatibility testing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
