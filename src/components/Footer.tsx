import { Link } from 'react-router-dom';
import { memo } from 'react';

export const Footer = memo(() => {
  return (
    <footer className="glass mt-20 border-t border-border/20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-primary rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">AZ</span>
            </div>
            <span className="text-sm text-muted-foreground">
              © 2024 AZSoftStudio. All rights reserved.
            </span>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link
              to="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
            >
              Contact
            </Link>
            <button className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';