import { ArrowRight, Code, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';
import { memo, useMemo } from 'react';
import { OptimizedFeatureCard } from '@/components/OptimizedFeatureCard';

const Home = memo(() => {
  const features = useMemo(() => [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Developer-First",
      description: "Built by developers, for developers. Every tool is crafted with the Unity workflow in mind."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Time-Saving",
      description: "Cut development time in half with our optimized tools and intuitive interfaces."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Production Ready",
      description: "Battle-tested assets used in shipped games. Reliable, performant, and well-documented."
    }
  ], []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in flex flex-col items-center">
            <Logo size="xl" shape="rounded" showText={false} variant="hero" className="mb-8" />
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              AZSoft
              <span className="animate-text-color-cycle">
                Studio
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Crafting Time-Saving Unity Tools for Smarter Development
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button 
                size="lg" 
                className="btn-professional glass-strong bg-gradient-primary text-primary-foreground border-0 px-8 py-6 text-lg font-semibold group w-full sm:w-auto"
              >
                Explore Assets
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Link to="/about" className="w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="glass border-primary/20 text-foreground hover:bg-primary/10 px-8 py-6 text-lg transition-smooth w-full"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Optimized Floating Elements - reduced for performance */}
        <div className="absolute top-20 left-10 w-16 h-16 glass rounded-full animate-float opacity-30" />
        <div className="absolute bottom-32 right-20 w-12 h-12 glass rounded-full animate-subtle-pulse opacity-25" style={{ animationDelay: '2s' }} />
        
        {/* Optimized Background Orbs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-5 animate-subtle-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-primary rounded-full blur-3xl opacity-3 animate-subtle-pulse" style={{ animationDelay: '3s' }} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose AZSoftStudio?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We understand the challenges of Unity development and build solutions that actually make your life easier.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <OptimizedFeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-strong p-12 rounded-2xl animate-gentle-slide-in transition-smooth interactive-hover group">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Accelerate Your Development?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of Unity developers who trust AZSoftStudio tools to ship better games faster.
            </p>
            <Button 
              size="lg" 
              className="btn-professional glass-strong bg-gradient-primary text-primary-foreground border-0 px-8 py-6 text-lg font-semibold group"
            >
              Browse Asset Store
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
});

Home.displayName = 'Home';

export default Home;