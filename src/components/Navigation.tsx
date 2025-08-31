import { useState, useEffect, memo, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Logo } from './Logo';
import { Button } from '@/components/ui/button';
import { useScrolled } from '@/hooks/useScrolled';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
] as const;

type NavItem = (typeof navItems)[number];

const NavigationItem = memo<{ item: NavItem; isActive: boolean }>(({ item, isActive }) => (
  <Link
    to={item.path}
    className={`text-sm font-medium transition-all duration-200 hover:scale-110 relative px-4 py-2 rounded-lg group ${
      isActive
        ? 'text-primary bg-primary/8 glass shadow-sm'
        : 'text-muted-foreground hover:text-foreground hover:bg-accent/20'
    }`}
  >
    <span className="relative z-10 group-hover:translate-y-[-1px] transition-transform duration-200">
      {item.name}
    </span>
    {isActive && (
      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-primary rounded-full animate-shimmer"></div>
    )}
    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"></div>
  </Link>
));

NavigationItem.displayName = 'NavigationItem';

const MobileNavigationItem = memo<{ 
  item: NavItem; 
  index: number; 
  isActive: boolean; 
  isMobileOpen: boolean;
  onClose: () => void;
}>(({ item, index, isActive, isMobileOpen, onClose }) => (
  <Link
    to={item.path}
    onClick={onClose}
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
));

MobileNavigationItem.displayName = 'MobileNavigationItem';

export const Navigation = memo(() => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const isScrolled = useScrolled({ threshold: 20, throttleMs: 16 });

  const closeMobileMenu = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileOpen(prev => !prev);
  }, []);

  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname, closeMobileMenu]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? 'glass-strong' : 'glass'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo size="md" shape="rounded" showText={true} />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <NavigationItem
                key={item.name}
                item={item}
                isActive={location.pathname === item.path}
              />
            ))}
            <div className="ml-4 pl-4 border-l border-border/30">
              <ThemeToggle />
            </div>
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden items-center space-x-6">
            {navItems.map((item) => (
              <NavigationItem
                key={item.name}
                item={item}
                isActive={location.pathname === item.path}
              />
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="glass h-10 w-10 rounded-full border-0"
              aria-label="Toggle navigation menu"
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
              {navItems.map((item, index) => (
                <MobileNavigationItem
                  key={item.name}
                  item={item}
                  index={index}
                  isActive={location.pathname === item.path}
                  isMobileOpen={isMobileOpen}
                  onClose={closeMobileMenu}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';