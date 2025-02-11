import React from 'react';
import { Code2, Database, Cloud, Shield, File as Mobile, Cpu } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="w-12 h-12" />,
    title: 'Custom Software Development',
    description: 'Tailored solutions built to address your unique business challenges.'
  },
  {
    icon: <Cloud className="w-12 h-12" />,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services.'
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.'
  },
  {
    icon: <Mobile className="w-12 h-12" />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications.'
  },
  {
    icon: <Database className="w-12 h-12" />,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights.'
  },
  {
    icon: <Cpu className="w-12 h-12" />,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by cutting-edge AI technology.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a237e] mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-[#40c4ff] mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#1a237e] mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;