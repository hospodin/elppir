import React, { useRef, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

interface MouseParallaxProps {
  children: React.ReactNode;
}

export function MouseParallax({ children }: MouseParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [{ xy }, api] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      api.start({ xy: [x * 30 - 15, y * 30 - 15] });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [api]);

  return (
    <animated.div
      ref={containerRef}
      style={{
        transform: xy.to((x, y) => `translate3d(${x}px,${y}px,0)`),
      }}
      className="relative w-full h-full"
    >
      {children}
    </animated.div>
  );
}