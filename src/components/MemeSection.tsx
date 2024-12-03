import React from 'react';

export function MemeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <img
            src="https://i.ibb.co/JQ9Zm0v/Frame-4.png"
            className="w-full h-auto rounded-xl shadow-lg"
          />
          <p className="text-center text-elppir-400 mt-4 text-sm italic">
           TradFI meets ELPPIR innovation
          </p>
        </div>
      </div>
    </section>
  );
}