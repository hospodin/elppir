import React from 'react';
import { Twitter, MessageCircle, Send } from 'lucide-react';

export function Community() {
  return (
    <section id="community" className="py-20 bg-elppir-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Join the community of future trillionaires</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center space-x-8 mb-16">
            {[
              { icon: <Twitter />, label: "Twitter" },
              { icon: <Send className="transform rotate-45" />, label: "Telegram" }
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className="flex flex-col items-center space-y-2 hover:text-elppir-50 transition"
              >
                {social.icon}
                <span>{social.label}</span>
              </a>
            ))}
          </div>
          
          <div className="bg-elppir-500 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Subscribe to Rettelswen
            </h3>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-elppir-400 border border-elppir-300 focus:outline-none focus:border-elppir-100"
              />
              <button className="bg-elppir-200 hover:bg-elppir-300 px-6 py-2 rounded-lg flex items-center space-x-2">
                <span>Subscribe</span>
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}