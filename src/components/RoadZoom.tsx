import React from 'react';

export function RoadZoom() {
  return (
    <section className="py-20 bg-elppir-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <img
              src="https://s7.gifyu.com/images/SJbbv.gif"
              alt="Road to the future of finance"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-elppir-600/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white text-center">
              <p className="text-2xl font-bold">The Road to Financial Innovation</p>
              <p className="text-elppir-50">Where traditional finance fears to tread</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}