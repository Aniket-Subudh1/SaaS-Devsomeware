'use client';

import { useRef, useEffect } from 'react';

type AnimatedSphereProps = {
  className?: string;
};

export default function AnimatedSphere({ className = '' }: AnimatedSphereProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to parent size
    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };
    
    // Initial sizing
    resize();
    window.addEventListener('resize', resize);
    
    // Animation variables
    let time = 0;
    const fps = 30;
    const speed = 0.01;
    
    // Create gradient
    const createGradient = () => {
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.5, 
        canvas.height * 0.5, 
        0,
        canvas.width * 0.5, 
        canvas.height * 0.5, 
        canvas.width * 0.5
      );
      
      gradient.addColorStop(0, 'rgba(139, 92, 246, 0.7)');
      gradient.addColorStop(0.5, 'rgba(124, 58, 237, 0.4)');
      gradient.addColorStop(1, 'rgba(76, 29, 149, 0.1)');
      
      return gradient;
    };
    
    // Animation function
    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update time
      time += speed;
      
      // Draw sphere
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.4;
      
      // Create gradients
      const sphereGradient = createGradient();
      
      // Draw main sphere
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = sphereGradient;
      ctx.fill();
      
      // Draw swirls
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        
        const offsetX = Math.sin(time + i) * radius * 0.3;
        const offsetY = Math.cos(time + i * 2) * radius * 0.3;
        
        ctx.ellipse(
          centerX + offsetX,
          centerY + offsetY,
          radius * 0.7,
          radius * 0.5,
          time * i,
          0,
          Math.PI * 2
        );
        
        ctx.strokeStyle = `rgba(167, 139, 250, ${0.15 - i * 0.03})`;
        ctx.lineWidth = 5 - i;
        ctx.stroke();
      }
      
      // Add glow effect
      ctx.shadowColor = 'rgba(139, 92, 246, 0.5)';
      ctx.shadowBlur = 30;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.8, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(139, 92, 246, 0.1)';
      ctx.fill();
      ctx.shadowBlur = 0;
      
      // Schedule next frame
      setTimeout(() => {
        requestAnimationFrame(animate);
      }, 1000 / fps);
    };
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`w-full h-full ${className}`}
    />
  );
}