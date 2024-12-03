import React from 'react';
import { ArrowDownLeft, Building2, Banknote } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';
import { StatsCard } from './StatsCard';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            The Most Serious Joke in Crypto
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#33A3FF]">
            Revolutionizing nothing while having fun with everything
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-[#0067E5] hover:bg-[#005BCC] text-white px-8 py-4 rounded-full flex items-center space-x-2 transform hover:scale-105 transition-all shadow-lg shadow-[#001133]/50">
              <span className="text-lg">Buy $ELPPIR</span>
              <ArrowDownLeft size={24} />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard
            icon={<Building2 className="w-8 h-8 transform rotate-180" />}
            text="Anti-Institutional Partners"
            value="0"
          />
          <StatsCard
            icon={<Banknote className="w-8 h-8 transform rotate-180" />}
            text="Total Value Locked"
            value="$0.00"
          />
          <StatsCard
            icon={<ArrowDownLeft className="w-8 h-8" />}
            text="Transaction Speed"
            value="∞ sec"
          />
        </div>
      </div>
    </section>
  );
}