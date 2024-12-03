import React from 'react';
import { Clock, Building2, CircuitBoard } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Clock className="w-12 h-12 transform rotate-180" />,
      title: "Instant Delays",
      description: "Why settle instantly when you can wait forever? Our revolutionary technology ensures maximum waiting time."
    },
    {
      icon: <CircuitBoard className="w-12 h-12" />,
      title: "Maximum Complexity",
      description: "We've taken simple concepts and made them impossibly complex. Because that's what innovation is all about."
    },
    {
      icon: <Building2 className="w-12 h-12 transform rotate-180" />,
      title: "Zero Institutional Partnerships",
      description: "Proudly maintaining zero relationships with any legitimate financial institutions."
    }
  ];

  return (
    <section className="py-20 bg-elppir-50/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-elppir-600">Revolutionary Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-6 flex justify-center text-elppir-300">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-elppir-500">{feature.title}</h3>
              <p className="text-elppir-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}