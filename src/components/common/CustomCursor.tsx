import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsVisible(false), 3000);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor hidden md:block"
      style={{ opacity: isVisible ? 1 : 0 }}
      animate={{
        x: position.x - 10,
        y: position.y - 10,
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.5 }}
    />
  );
};
