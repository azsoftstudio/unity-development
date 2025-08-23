import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="glass h-10 w-10 rounded-full border-0 transition-elastic interactive-glow hover:scale-110 group"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-foreground transition-transform group-hover:rotate-12" />
      ) : (
        <Sun className="h-5 w-5 text-foreground transition-transform group-hover:rotate-180" />
      )}
    </Button>
  );
}