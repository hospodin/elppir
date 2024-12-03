import React from 'react';
import { PieChart, Coins, Users } from 'lucide-react';

export function Tokenomics() {
  return (
    <section id="tokenomics" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-elppir-600">Tokenomics</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-elppir-50/10 p-8 rounded-xl">
              <div className="flex items-center space-x-4 mb-6">
                <PieChart className="w-8 h-8 text-elppir-300" />
                <h3 className="text-2xl font-semibold text-elppir-500">Supply Details</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2 text-elppir-400">
                  <Coins className="w-5 h-5 text-elppir-300" />
                  <span>Total Supply: 1 Billion ELPPIR</span>
                </li>
                <li className="flex items-center space-x-2 text-elppir-400">
                  <Users className="w-5 h-5 text-elppir-300" />
                  <span>Fair Launch: Everyone buys high</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-elppir-50/10 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-elppir-500">Token Utility</h3>
              <p className="text-elppir-400">
                ELPPIR proudly offers absolutely zero utility. Our token exists purely for 
                entertainment and to prove that sometimes, the best utility is no utility at all.
              </p>
              <div className="mt-6 text-sm text-elppir-300">
                * This is not financial advice. It's barely even advice.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}