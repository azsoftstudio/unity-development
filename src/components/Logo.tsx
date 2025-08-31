import { memo } from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'square' | 'circle' | 'rounded';
  showText?: boolean;
  className?: string;
  variant?: 'navigation' | 'hero' | 'footer';
}

export const Logo = memo<LogoProps>(({ 
  size = 'md', 
  shape = 'rounded', 
  showText = true, 
  className = '',
  variant = 'navigation'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const shapeClasses = {
    square: 'rounded-none',
    circle: 'rounded-full',
    rounded: 'rounded-lg'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-4xl'
  };

  const logoImageClasses = `${sizeClasses[size]} ${shapeClasses[shape]} object-contain transition-transform group-hover:scale-110`;

  const renderLogoContent = () => (
    <>
      <img 
        src="/lovable-uploads/d1493c99-3be3-4238-8896-6b619c550aac.png"
        alt="AZSoft Studio Logo"
        className={logoImageClasses}
        onError={(e) => {
          // Fallback to gradient logo if image fails to load
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const fallback = target.nextElementSibling as HTMLElement;
          if (fallback) fallback.style.display = 'flex';
        }}
      />
      <div 
        className={`${logoImageClasses} bg-gradient-primary items-center justify-center text-white font-bold hidden`}
        style={{ display: 'none' }}
      >
        <span className={size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-lg'}>AZ</span>
      </div>
      {showText && (
        <span className={`${textSizes[size]} font-bold text-foreground group-hover:text-primary transition-colors ml-3`}>
          {variant === 'hero' ? (
            <>
              AZSoft
              <span className="animate-text-color-cycle">Studio</span>
            </>
          ) : (
            'AZSoftStudio'
          )}
        </span>
      )}
    </>
  );

  if (variant === 'hero') {
    return (
      <div className={`flex items-center transition-elastic hover:scale-105 group ${className}`}>
        {renderLogoContent()}
      </div>
    );
  }

  return (
    <Link
      to="/"
      className={`flex items-center transition-elastic hover:scale-105 group ${className}`}
    >
      {renderLogoContent()}
    </Link>
  );
});

Logo.displayName = 'Logo';