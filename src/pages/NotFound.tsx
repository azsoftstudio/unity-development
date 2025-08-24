import { useLocation, Link } from "react-router-dom";
import { useEffect, memo, useCallback } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = memo(() => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleGoBack = useCallback(() => {
    window.history.back();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md mx-auto">
        <div className="glass-strong p-8 rounded-xl animate-fade-in">
          <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
            404
          </div>
          
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Page Not Found
          </h1>
          
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="glass-strong hover:shadow-glow-primary transition-smooth interactive-glow bg-gradient-primary text-primary-foreground border-0 w-full sm:w-auto">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Button>
            </Link>
            
            <Button
              variant="outline"
              className="glass border-primary/30 text-foreground hover:bg-primary/10 transition-smooth w-full sm:w-auto"
              onClick={handleGoBack}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
});

NotFound.displayName = 'NotFound';

export default NotFound;
