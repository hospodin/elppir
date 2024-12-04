import React from 'react';
import { ArrowRight, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed w-full bg-elppir-600 text-white z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
          <img
            src="https://i.ibb.co/vDVKNWJ/elppir-logo-ng.png"
            className="w-full h-auto rounded-xl shadow-lg"
          />
          </div>
          
           <nav className="hidden md:flex items-center space-x-8"> 
            {/* <a href="#hero" className="hover:text-elppir-50 transition">What</a>
            <a href="#comparison" className="hover:text-elppir-50 transition">Why</a>
            <a href="#tokenomics" className="hover:text-elppir-50 transition">Tokenomics</a>
            <a href="#community" className="hover:text-elppir-50 transition">Community</a>*/}
            <a href="https://dexscreener.com/"> <button className="bg-elppir-200 hover:bg-elppir-300 px-6 py-2 rounded-full flex items-center space-x-2">     
              <span>Join Movement</span>
              <ArrowRight size={16} />
            </button>
            </a>
          </nav>
          
         {/* <button className="md:hidden">
            <Menu size={24} />
          </button> */}
        </div>
      </div>
    </header>
  );
}