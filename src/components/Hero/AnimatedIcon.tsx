import React, { useEffect, useRef } from 'react';
import { useRandomPosition } from './hooks/useRandomPosition';

interface AnimatedIconProps {
  icon: React.ReactNode;
  index: number;
  color: string;
}

export function AnimatedIcon({ icon, index, color }: AnimatedIconProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const { x, y } = useRandomPosition();
  
  useEffect(() => {
    if (!elementRef.current) return;
    
    const duration = 6 + Math.random() * 4;
    const delay = Math.random() * 2;
    
    elementRef.current.style.setProperty('--float-duration', `${duration}s`);
    elementRef.current.style.setProperty('--float-delay', `${delay}s`);
  }, []);

  return (
    <div
      ref={elementRef}
      className={`absolute floating-icon floating-icon-${index % 4}`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        color: color,
        opacity: 0.2
      }}
    >
      {icon}
    </div>
  );
}