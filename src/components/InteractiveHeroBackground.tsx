import { memo, useEffect, useRef, useState } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export const InteractiveHeroBackground = memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0.5, y: 0.5 });
  const [smoothPos, setSmoothPos] = useState<MousePosition>({ x: 0.5, y: 0.5 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePos({ x: Math.max(0, Math.min(1, x)), y: Math.max(0, Math.min(1, y)) });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth inertia animation
  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;
    
    const animate = () => {
      setSmoothPos(prev => ({
        x: lerp(prev.x, mousePos.x, 0.08),
        y: lerp(prev.y, mousePos.y, 0.08)
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [mousePos]);

  const spotlightX = smoothPos.x * 100;
  const spotlightY = smoothPos.y * 100;

  // Parallax offsets for different layers (depth effect)
  const layer1X = (smoothPos.x - 0.5) * 30;
  const layer1Y = (smoothPos.y - 0.5) * 30;
  const layer2X = (smoothPos.x - 0.5) * 60;
  const layer2Y = (smoothPos.y - 0.5) * 60;
  const layer3X = (smoothPos.x - 0.5) * 90;
  const layer3Y = (smoothPos.y - 0.5) * 90;

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      
      {/* Parallax Layer 3 - Farthest (slowest) */}
      <div 
        className="absolute inset-0 transition-none"
        style={{
          transform: `translate(${layer1X}px, ${layer1Y}px)`,
        }}
      >
        <div className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-[20%] right-[15%] w-48 h-48 rounded-full bg-accent/5 blur-3xl" />
      </div>

      {/* Parallax Layer 2 - Middle */}
      <div 
        className="absolute inset-0 transition-none"
        style={{
          transform: `translate(${layer2X}px, ${layer2Y}px)`,
        }}
      >
        <div className="absolute top-[30%] right-[25%] w-40 h-40 rounded-full bg-primary/8 blur-2xl" />
        <div className="absolute bottom-[35%] left-[20%] w-56 h-56 rounded-full bg-accent/6 blur-2xl" />
        <div className="absolute top-[60%] left-[60%] w-32 h-32 rounded-full bg-primary/4 blur-xl" />
      </div>

      {/* Parallax Layer 1 - Closest (fastest) */}
      <div 
        className="absolute inset-0 transition-none"
        style={{
          transform: `translate(${layer3X}px, ${layer3Y}px)`,
        }}
      >
        <div className="absolute top-[20%] left-[40%] w-24 h-24 rounded-full bg-primary/10 blur-xl" />
        <div className="absolute bottom-[40%] right-[30%] w-20 h-20 rounded-full bg-accent/8 blur-xl" />
        <div className="absolute top-[70%] left-[15%] w-16 h-16 rounded-full bg-primary/6 blur-lg" />
      </div>

      {/* Mouse-following spotlight/glow */}
      <div 
        className="absolute inset-0 transition-none pointer-events-none"
        style={{
          background: `radial-gradient(
            ellipse 600px 500px at ${spotlightX}% ${spotlightY}%,
            hsl(var(--primary) / 0.15) 0%,
            hsl(var(--primary) / 0.08) 25%,
            hsl(var(--primary) / 0.02) 50%,
            transparent 70%
          )`,
        }}
      />

      {/* Secondary glow ring */}
      <div 
        className="absolute inset-0 transition-none pointer-events-none"
        style={{
          background: `radial-gradient(
            circle 300px at ${spotlightX}% ${spotlightY}%,
            hsl(var(--accent) / 0.12) 0%,
            transparent 60%
          )`,
        }}
      />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: `translate(${layer1X * 0.5}px, ${layer1Y * 0.5}px)`,
        }}
      />

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background)/0.4)_100%)]" />
    </div>
  );
});

InteractiveHeroBackground.displayName = 'InteractiveHeroBackground';
