import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { ParticleField } from './ParticleField';
import { GeometricShapes } from './GeometricShapes';
import { MouseParallax } from './MouseParallax';

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [gradientProps] = useSpring(() => ({
    from: { backgroundPosition: '0% 50%' },
    to: { backgroundPosition: '100% 50%' },
    config: { duration: 20000 },
    loop: true,
  }));

  return (
    <animated.div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{
        background: 'linear-gradient(-45deg, #001133, #003D99, #0067E5, #33A3FF)',
        backgroundSize: '400% 400%',
        ...gradientProps,
      }}
    >
      <div className="absolute inset-0 backdrop-blur-[100px]">
        <MouseParallax>
          <GeometricShapes />
          <ParticleField />
        </MouseParallax>
      </div>
    </animated.div>
  );
}