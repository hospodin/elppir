import React from 'react';
import { TrendingDown, Banknote, Building2, ArrowDownLeft } from 'lucide-react';

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#001133] via-[#003D99] to-[#0067E5] opacity-90" />
      
      {/* Floating meme elements */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-float-${i % 4} opacity-20`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 4}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {i % 4 === 0 && <TrendingDown className="w-12 h-12 transform rotate-180 text-[#33A3FF]" />}
            {i % 4 === 1 && <Banknote className="w-12 h-12 transform rotate-45 text-[#008CFF]" />}
            {i % 4 === 2 && <Building2 className="w-12 h-12 transform -rotate-45 text-[#0067E5]" />}
            {i % 4 === 3 && <ArrowDownLeft className="w-12 h-12 text-[#005BCC]" />}
          </div>
        ))}
      </div>
    </div>
  );
}