import React, { useEffect } from 'react';

export const AnimatedBubbles: React.FC = () => {
  useEffect(() => {
    const createBubble = () => {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      
      // Random size between 20px and 100px
      const size = Math.random() * 80 + 20;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      
      // Random position along the width of the screen
      bubble.style.left = `${Math.random() * 100}vw`;
      
      // Random animation duration
      bubble.style.animationDuration = `${Math.random() * 10 + 10}s`;
      
      document.body.appendChild(bubble);
      
      // Remove bubble after animation
      setTimeout(() => {
        bubble.remove();
      }, 20000);
    };

    // Create bubbles periodically
    const interval = setInterval(createBubble, 2000);

    return () => clearInterval(interval);
  }, []);

  return null;
};