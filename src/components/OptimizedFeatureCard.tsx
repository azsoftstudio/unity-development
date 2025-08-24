import { memo, ReactNode } from 'react';

interface OptimizedFeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export const OptimizedFeatureCard = memo<OptimizedFeatureCardProps>(({ 
  icon, 
  title, 
  description, 
  index 
}) => {
  return (
    <div 
      className="glass p-8 rounded-xl transition-smooth interactive-hover animate-gentle-slide-in group"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 text-white transition-transform group-hover:scale-105">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
});

OptimizedFeatureCard.displayName = 'OptimizedFeatureCard';