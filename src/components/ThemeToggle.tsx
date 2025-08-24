import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { memo } from 'react';

export const ThemeToggle = memo(() => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="glass h-10 w-10 rounded-full border-0 transition-smooth interactive-hover group"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-foreground transition-transform group-hover:rotate-6" />
      ) : (
        <Sun className="h-5 w-5 text-foreground transition-transform group-hover:rotate-12" />
      )}
    </Button>
  );
});

ThemeToggle.displayName = 'ThemeToggle';