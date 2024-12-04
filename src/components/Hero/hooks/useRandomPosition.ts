import { useState, useEffect } from 'react';

export function useRandomPosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const padding = 20; // Keep icons away from edges
    const x = padding + Math.random() * (100 - 2 * padding);
    const y = padding + Math.random() * (100 - 2 * padding);
    setPosition({ x, y });
  }, []);

  return position;
}