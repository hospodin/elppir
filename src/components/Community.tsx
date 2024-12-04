import React from 'react';
import { X, Send, twitter } from 'lucide-react';

export function Community() {
  return (
    <section id="community" className="py-20 bg-elppir-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Join the community of future trillionaires</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center space-x-8">
            {[
              { icon: <X className="w-6 h-6" />, label: "X", href: "#" },
              { icon: <Send className="w-6 h-6" />, label: "Telegram", href: "#" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="flex flex-col items-center space-y-2 hover:text-elppir-50 transition group"
              >
                <div className="p-3 rounded-full bg-elppir-500 group-hover:bg-elppir-400 transition-colors">
                  {social.icon}
                </div>
                <span className="text-sm font-medium">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}