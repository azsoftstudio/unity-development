import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? 'glass-strong' : 'glass'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 transition-elastic hover:scale-105 group"
          >
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center transition-transform group-hover:rotate-6">
              <span className="text-white font-bold text-sm">AZ</span>
            </div>
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              AZSoftStudio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-elastic hover:scale-110 relative ${
                    isActive
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary rounded-full animate-shimmer"></div>
                  )}
                </Link>
              );
            })}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="glass h-10 w-10 rounded-full border-0"
            >
              {isMobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMobileOpen 
              ? 'max-h-96 opacity-100 translate-y-0' 
              : 'max-h-0 opacity-0 -translate-y-4'
          }`}
        >
          <div className="glass-strong mt-4 p-6 rounded-2xl border border-primary/10 backdrop-blur-xl shadow-2xl">
            <div className="flex flex-col space-y-1">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`text-sm font-medium transition-all duration-200 relative p-4 rounded-xl group ${
                      isActive
                        ? 'text-primary bg-primary/8 glass shadow-sm'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/20'
                    }`}
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      transform: isMobileOpen ? 'translateY(0)' : 'translateY(-8px)',
                      transition: `all 0.3s ease-out ${index * 0.1}s`
                    }}
                  >
                    <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-200">
                      {item.name}
                    </span>
                    {isActive && (
                      <div className="absolute inset-0 bg-primary/5 rounded-xl animate-gentle-glow"></div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}