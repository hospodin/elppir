import React from 'react';

interface StatsCardProps {
  icon: React.ReactNode;
  text: string;
  value: string;
}

export function StatsCard({ icon, text, value }: StatsCardProps) {
  return (
    <div className="bg-[#001133]/30 backdrop-blur-sm p-6 rounded-xl border border-[#33A3FF]/20 transform hover:scale-105 transition-all">
      <div className="flex items-center space-x-4">
        <div className="text-[#33A3FF]">{icon}</div>
        <div>
          <div className="text-2xl font-bold text-white">{value}</div>
          <div className="text-[#33A3FF]/80 text-sm">{text}</div>
        </div>
      </div>
    </div>
  );
}