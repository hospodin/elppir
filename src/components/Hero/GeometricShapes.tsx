import React from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import { useRandomPosition } from './hooks/useRandomPosition';

const shapes = [
  { type: 'sphere', size: 80 },
  { type: 'cube', size: 60 },
  { type: 'torus', size: 70 },
];

export function GeometricShapes() {
  return (
    <div className="absolute inset-0">
      {shapes.map((shape, index) => (
        <Shape key={index} {...shape} />
      ))}
    </div>
  );
}

function Shape({ type, size }: { type: string; size: number }) {
  const { x, y } = useRandomPosition();
  
  const spring = useSpring({
    from: { 
      transform: 'scale(0.8) rotate(0deg)',
      opacity: 0.4,
    },
    to: async (next) => {
      while (true) {
        await next({
          transform: 'scale(1.2) rotate(180deg)',
          opacity: 0.8,
        });
        await next({
          transform: 'scale(0.8) rotate(360deg)',
          opacity: 0.4,
        });
      }
    },
    config: { ...config.gentle, duration: 8000 },
  });

  return (
    <animated.div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        ...spring,
      }}
    >
      <div 
        className={`w-full h-full rounded-full bg-gradient-to-br from-white/20 to-white/5 
          backdrop-blur-md shadow-lg ${type === 'cube' ? 'rounded-lg' : ''}`}
      />
    </animated.div>
  );
}