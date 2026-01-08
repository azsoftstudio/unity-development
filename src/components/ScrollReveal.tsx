import { memo, useEffect, useRef, useState, ReactNode } from 'react';

type AnimationVariant = 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'slide-up';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationVariant;
  delay?: number;
  index?: number;
  className?: string;
  threshold?: number;
}

const animationClasses: Record<AnimationVariant, string> = {
  'fade-up': 'scroll-reveal-fade-up',
  'fade-left': 'scroll-reveal-fade-left',
  'fade-right': 'scroll-reveal-fade-right',
  'scale': 'scroll-reveal-scale',
  'slide-up': 'scroll-reveal-slide-up',
};

export const ScrollReveal = memo<ScrollRevealProps>(({
  children,
  animation = 'fade-up',
  delay = 0,
  index = 0,
  className = '',
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { 
        threshold,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before fully visible
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  // Calculate stagger delay based on index
  const staggerDelay = delay + (index * 0.1);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? `${animationClasses[animation]} scroll-reveal-visible` : 'scroll-reveal-hidden'}`}
      style={{ 
        animationDelay: isVisible ? `${staggerDelay}s` : undefined,
        transitionDelay: isVisible ? `${staggerDelay}s` : undefined,
      }}
    >
      {children}
    </div>
  );
});

ScrollReveal.displayName = 'ScrollReveal';
