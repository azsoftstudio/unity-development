import { ArrowRight, Code, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Home() {
  const features = [
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
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="animate-bounce-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              AZSoft
              <span className="bg-gradient-primary bg-clip-text text-transparent animate-shimmer">
                Studio
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Crafting Time-Saving Unity Tools for Smarter Development
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="btn-hero glass-strong bg-gradient-primary text-primary-foreground border-0 px-8 py-6 text-lg font-semibold transition-elastic"
              >
                Explore Assets
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Link to="/about">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="glass border-primary/30 text-foreground hover:bg-primary/20 px-8 py-6 text-lg transition-elastic hover:scale-105"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 glass rounded-full animate-glow opacity-60" />
        <div className="absolute bottom-32 right-20 w-16 h-16 glass rounded-full animate-pulse-slow opacity-40" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-10 w-12 h-12 glass rounded-full animate-glow opacity-50" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-gradient-primary rounded-full animate-rotate opacity-30" />
        <div className="absolute bottom-1/4 left-20 w-6 h-6 bg-gradient-primary rounded-full animate-pulse-slow opacity-40" style={{ animationDelay: '1s' }} />
        
        {/* Animated Background Orbs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-primary rounded-full blur-3xl opacity-10 animate-pulse-slow" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-primary rounded-full blur-3xl opacity-5 animate-pulse-slow" style={{ animationDelay: '3s' }} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose AZSoftStudio?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We understand the challenges of Unity development and build solutions that actually make your life easier.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="glass p-8 rounded-xl transition-elastic interactive-glow animate-bounce-in hover:scale-105 group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 text-white transition-transform group-hover:scale-110 group-hover:rotate-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-strong p-12 rounded-2xl animate-slide-in-up transition-elastic hover:scale-105 relative overflow-hidden">
            {/* Background shimmer effect */}
            <div className="absolute inset-0 animate-shimmer opacity-30"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 relative z-10">
              Ready to Accelerate Your Development?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto relative z-10">
              Join thousands of Unity developers who trust AZSoftStudio tools to ship better games faster.
            </p>
            <Button 
              size="lg" 
              className="btn-hero glass-strong bg-gradient-primary text-primary-foreground border-0 px-8 py-6 text-lg font-semibold relative z-10"
            >
              Browse Asset Store
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}