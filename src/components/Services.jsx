import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaCloud, FaLock, FaBrain, FaChartLine } from 'react-icons/fa';

const services = [
  {
    title: 'Web Development',
    icon: <FaLaptopCode size={48} className="text-purple-500" />,
    description: 'High-performance websites built with modern frameworks like React, Next.js, and Tailwind CSS.',
  },
  {
    title: 'Mobile App Development',
    icon: <FaMobileAlt size={48} className="text-purple-500" />,
    description: 'Cross-platform mobile applications for iOS and Android using Flutter and React Native.',
  },
  {
    title: 'Cloud Solutions',
    icon: <FaCloud size={48} className="text-purple-500" />,
    description: 'Scalable and secure cloud infrastructure on AWS, Azure, or GCP.',
  },
  {
    title: 'Cybersecurity',
    icon: <FaLock size={48} className="text-purple-500" />,
    description: 'Security audits, threat modeling, and data protection for your digital assets.',
  },
  {
    title: 'AI & Machine Learning',
    icon: <FaBrain size={48} className="text-purple-500" />,
    description: 'Custom AI models and ML solutions to unlock insights and automate workflows.',
  },
  {
    title: 'DevOps & Automation',
    icon: <FaChartLine size={48} className="text-purple-500" />,
    description: 'CI/CD pipelines, containerization, and infrastructure automation to streamline development.',
  },
];

const Services = () => {
  return (
    <section className="bg-gradient-to-tr from-purple-900 via-indigo-900 to-black text-white py-20 px-6 md:px-20">
      <h2 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 drop-shadow-lg animate-fadeInDown">
        Our Services
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-black bg-opacity-70 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center text-center
              shadow-xl shadow-purple-700/50
              hover:shadow-purple-500 hover:scale-105
              transform transition duration-500 cursor-pointer"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="mb-6 p-5 rounded-full bg-purple-700 bg-opacity-30 text-purple-300">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-300 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
