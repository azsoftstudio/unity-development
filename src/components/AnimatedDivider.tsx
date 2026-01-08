import { memo } from 'react';

type DividerVariant = 'glow-line' | 'dots' | 'wave' | 'geometric';

interface AnimatedDividerProps {
  variant?: DividerVariant;
  className?: string;
}

const GlowLine = memo(() => (
  <div className="relative h-px w-full max-w-lg mx-auto overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
    <div className="divider-glow-pass absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
  </div>
));
GlowLine.displayName = 'GlowLine';

const Dots = memo(() => (
  <div className="flex items-center justify-center gap-3">
    {[0, 1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="divider-dot w-1.5 h-1.5 rounded-full bg-primary/40"
        style={{ animationDelay: `${i * 0.15}s` }}
      />
    ))}
  </div>
));
Dots.displayName = 'Dots';

const Wave = memo(() => (
  <div className="relative h-8 w-full max-w-2xl mx-auto overflow-hidden opacity-30">
    <svg
      className="divider-wave absolute w-[200%] h-full"
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
    >
      <path
        d="M0,20 Q150,0 300,20 T600,20 T900,20 T1200,20"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  </div>
));
Wave.displayName = 'Wave';

const Geometric = memo(() => (
  <div className="flex items-center justify-center gap-6">
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-border" />
    <div className="divider-geometric flex items-center gap-2">
      <div className="w-2 h-2 rotate-45 border border-primary/50" />
      <div className="w-3 h-3 rotate-45 bg-primary/20 border border-primary/40" />
      <div className="w-2 h-2 rotate-45 border border-primary/50" />
    </div>
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-border" />
  </div>
));
Geometric.displayName = 'Geometric';

const variants: Record<DividerVariant, React.ComponentType> = {
  'glow-line': GlowLine,
  'dots': Dots,
  'wave': Wave,
  'geometric': Geometric,
};

export const AnimatedDivider = memo<AnimatedDividerProps>(({ 
  variant = 'glow-line',
  className = ''
}) => {
  const Component = variants[variant];
  
  return (
    <div className={`py-8 ${className}`} aria-hidden="true">
      <Component />
    </div>
  );
});

AnimatedDivider.displayName = 'AnimatedDivider';
