import React from 'react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'TaskMaster Pro',
      description: 'A comprehensive task management application designed to boost productivity for remote teams.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'HealthTrack',
      description: 'An innovative health monitoring app that helps users track their fitness goals and daily habits.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'EcoSmart Home',
      description: 'A smart home automation system focused on energy efficiency and sustainability.',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  return (
    <section id="case-studies" className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-24 text-white">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-video">
                <img src={study.image} alt={study.title} className="w-full h-full object-cover transition duration-300 transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 group-hover:opacity-90 transition duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition duration-300">{study.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;