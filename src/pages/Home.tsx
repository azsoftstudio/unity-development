import { ArrowRight, Code, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';
import { memo, useMemo } from 'react';
import { OptimizedFeatureCard } from '@/components/OptimizedFeatureCard';
import { InteractiveHeroBackground } from '@/components/InteractiveHeroBackground';
import { ScrollReveal } from '@/components/ScrollReveal';
import { AnimatedDivider } from '@/components/AnimatedDivider';

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
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <InteractiveHeroBackground />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="animate-fade-in flex flex-col items-center">
            <Logo size="xl" shape="rounded" showText={false} variant="hero" className="mb-6 sm:mb-8" />
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight tracking-tight">
              <span className="text-foreground">AZSoft</span>
              <span className="text-cyan-shine">Studio</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed tracking-wide font-light animate-fade-in px-2" style={{ animationDelay: '0.3s' }}>
              Crafting Time-Saving Unity Tools for Smarter Development
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto animate-fade-in px-2" style={{ animationDelay: '0.6s' }}>
              <a href="https://assetstore.unity.com/publishers/102095" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="btn-professional bg-primary text-primary-foreground border-0 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold group w-full sm:w-auto hover:bg-primary/90"
                >
                  Explore Assets
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 icon-slide-right" />
                </Button>
              </a>
              
              <Link to="/about" className="w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="glass border-primary/20 text-foreground hover:bg-primary/10 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg transition-smooth w-full"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AnimatedDivider variant="glow-line" />

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal animation="fade-up">
            <header className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 tracking-tight">
                Why Choose <span className="text-gradient">AZSoftStudio</span>?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-normal tracking-wide px-2">
                We understand the challenges of Unity development and build solutions that actually make your life easier.
              </p>
            </header>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} animation="fade-up" index={index}>
                <OptimizedFeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={0}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatedDivider variant="dots" />

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal animation="scale">
            <div className="glass-strong p-6 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl transition-smooth shadow-depth-3 hover:shadow-depth-4 group">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 tracking-tight">
                Ready to Accelerate Your <span className="text-gradient">Development</span>?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto font-light tracking-wide">
                Join thousands of Unity developers who trust AZSoftStudio tools to ship better games faster.
              </p>
              <a href="https://assetstore.unity.com/publishers/102095" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="btn-professional bg-primary text-primary-foreground border-0 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold group hover:bg-primary/90"
                >
                  Browse Asset Store
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 icon-slide-right" />
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
});

Home.displayName = 'Home';

export default Home;
