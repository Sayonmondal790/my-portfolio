'use client';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // We added '.interactive' here so you can trigger the animation on anything!
      const isClickable = target.closest('a') || target.closest('button') || target.closest('.interactive');
      
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      className={`viewfinder-cursor ${isHovering ? 'focus-achieved' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="bracket left-bracket"></div>
      <div className="bracket right-bracket"></div>
    </div>
  );
}