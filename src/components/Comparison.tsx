import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

export function Comparison() {
  const comparisons = [
    {
      xrp: 'Old coin for boomers',
      prx: 'Fresh coin for the new elite',
      icon: '🧓→👑'
    },
    {
      xrp: 'Too big market cap to enter',
      prx: 'Still x1000 potential',
      icon: '📊→🚀'
    },
    {
      xrp: 'Launched by insiders',
      prx: 'Launched on Pumpfun',
      icon: '🏢→🎮'
    },
    {
      xrp: 'Slow bank txn speed',
      prx: 'Instant Solana speed',
      icon: '🐌→⚡'
    },
    {
      xrp: 'Building boring tech',
      prx: 'Building hype & fun',
      icon: '💼→🎪'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-red-500">XRP</span> vs <span className="text-elppir-300">PRX</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {comparisons.map((item, index) => (
            <div key={index} className="grid grid-cols-2 gap-8 mb-8">
              <div className="flex items-center space-x-4 bg-red-50 p-6 rounded-xl">
                <ArrowDownRight className="w-6 h-6 text-red-500" />
                <span className="text-red-700">{item.xrp}</span>
              </div>
              <div className="flex items-center space-x-4 bg-elppir-50/10 p-6 rounded-xl">
                <ArrowUpRight className="w-6 h-6 text-elppir-300" />
                <span className="text-elppir-500">{item.prx}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <blockquote className="text-2xl italic text-elppir-400 max-w-2xl mx-auto">
            "The only memecoin Solana needed to flip Ripple"
            <footer className="text-lg mt-4 text-elppir-300">- Satoshi</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}