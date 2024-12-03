import React from 'react';
import { ArrowDownLeft, Building2, Banknote } from 'lucide-react';
import { AnimatedBackground } from './Hero/AnimatedBackground';
import { StatsCard } from './Hero/StatsCard';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            First it was Ripple.<br />
            Now it's time for Elppir.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-elppir-50">
            Revolutionizing nothing while having fun with everything
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://dexscreener.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-elppir-200 hover:bg-elppir-300 text-white px-8 py-4 rounded-full flex items-center space-x-2 transform hover:scale-105 transition-all"
            >
              <span className="text-lg">Dexscreener</span>
              <ArrowDownLeft size={24} />
            </a>
            <a
              href="#"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full flex items-center space-x-2 transform hover:scale-105 transition-all"
            >
              <span className="text-lg">Pumpfun</span>
              <ArrowDownLeft size={24} />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard
            icon={<Building2 className="w-8 h-8 transform rotate-180" />}
            text="100% Fair launch"
            value="0 Insiders"
          />
          <StatsCard
            icon={<Banknote className="w-8 h-8 transform rotate-180" />}
            text="Billions Programmed"
            value="1B PRX"
          />
          <StatsCard
            icon={<ArrowDownLeft className="w-8 h-8" />}
            text="LP Burned"
            value="100%"
          />
        </div>
      </div>
    </section>
  );
}