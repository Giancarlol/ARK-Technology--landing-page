import React from 'react';
import { Smartphone, Globe, Code } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Smartphone size={48} />,
      title: 'Mobile App Development',
      description: 'Create powerful and intuitive mobile applications for iOS and Android platforms.'
    },
    {
      icon: <Globe size={48} />,
      title: 'Web Application Development',
      description: 'Build responsive and scalable web applications using the latest technologies.'
    },
    {
      icon: <Code size={48} />,
      title: 'Custom Software Solutions',
      description: 'Develop tailor-made software solutions to address your unique business challenges.'
    }
  ];

  return (
    <section id="services" className="py-32 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-24 text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {services.map((service, index) => (
            <div key={index} className="bg-black p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border border-gray-800">
              <div className="text-blue-400 mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;