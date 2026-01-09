import { Link } from 'react-router-dom';
import { memo } from 'react';

export const Footer = memo(() => {
  return (
    <footer className="glass mt-12 sm:mt-16 md:mt-20 border-t border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded flex items-center justify-center flex-shrink-0">
              <span className="text-primary-foreground font-bold text-[10px] sm:text-xs">AZ</span>
            </div>
            <span className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
              © 2024 AZSoftStudio. All rights reserved.
            </span>
          </div>
          
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              to="/contact"
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-smooth focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
            >
              Contact
            </Link>
            <a
              href="https://assetstore.unity.com/publishers/102095"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-smooth focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
            >
              Asset Store
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';