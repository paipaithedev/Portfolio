import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function GridBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Motion values to track mouse position for dynamic ambient lights
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for tracking
  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      id="grid-bg-container"
      className="fixed inset-0 -z-50 overflow-hidden bg-black select-none pointer-events-none"
    >
      {/* 1. Scalable CSS Grid Pattern with radial fading mask */}
      <div 
        id="faint-grid-overlay"
        className="absolute inset-0 opacity-[0.25] md:opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(#1a1a1a 1px, transparent 1px),
            linear-gradient(90deg, #1a1a1a 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black, transparent 85%)'
        }}
      />

      {/* 2. Tiny grid dot matrix for density */}
      <div 
        id="dot-matrix-overlay"
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          maskImage: 'radial-gradient(circle 50% at 50% 50%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(circle 50% at 50% 50%, black, transparent)'
        }}
      />

      {/* 3. Neutral ambient glows behind elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic mouse-tracking spotlight */}
        <motion.div
          id="mouse-tracking-spotlight"
          className="absolute -left-48 -top-48 w-96 h-96 rounded-full blur-[160px] opacity-20 bg-white/10"
          style={{
            x: springX,
            y: springY,
          }}
        />

        {/* Top-right soft shadow */}
        <div 
          id="top-right-spotlight"
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full"
        />

        {/* Bottom-left soft shadow */}
        <div 
          id="bottom-left-spotlight"
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full"
        />
      </div>
      
      {/* Subtly animated horizontal scanning light line */}
      <div 
        className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent top-0 opacity-40 animate-[scan_10s_linear_infinite]"
        style={{
          animation: 'scan 10s linear infinite'
        }}
      />
      
      <style>{`
        @keyframes scan {
          0% { transform: translateY(0vh); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  );
}
