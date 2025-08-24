import { Users, Target, Lightbulb, Heart } from 'lucide-react';
import { memo, useMemo } from 'react';

const ValueCard = memo<{ value: any; index: number }>(({ value, index }) => (
  <div 
    className="glass p-6 rounded-xl transition-smooth interactive-glow animate-slide-in-up"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 text-white">
      {value.icon}
    </div>
    <h3 className="text-xl font-semibold text-foreground mb-3">
      {value.title}
    </h3>
    <p className="text-muted-foreground leading-relaxed">
      {value.description}
    </p>
  </div>
));

ValueCard.displayName = 'ValueCard';

const About = memo(() => {
  const values = useMemo(() => [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in Unity development, creating tools that haven't been done before."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Reliability", 
      description: "Every asset undergoes rigorous testing. When you use our tools, you can trust they'll work exactly as promised."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Developer-First",
      description: "We're developers ourselves. We understand your pain points and build solutions that actually solve real problems."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Quality",
      description: "No shortcuts, no compromises. We believe in creating tools that are not just functional, but delightful to use."
    }
  ], []);

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">AZSoftStudio</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're an indie Unity asset studio dedicated to creating high-quality, time-saving tools that make game development more enjoyable and efficient.
          </p>
        </header>

        {/* Mission */}
        <section className="glass p-8 rounded-xl mb-12 animate-slide-in-up">
          <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Unity development shouldn't be about fighting with tools—it should be about bringing your creative vision to life. 
            That's why we create assets that feel like natural extensions of Unity itself, tools that work the way you think, 
            and solutions that save you hours of tedious work so you can focus on what really matters: making great games.
          </p>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">What Drives Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <ValueCard key={value.title} value={value} index={index} />
            ))}
          </div>
        </section>

        {/* Founder Section */}
        <section className="glass-strong p-8 rounded-xl mb-12 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-2xl font-bold text-foreground mb-6">Meet the Team</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">The Founder</h3>
              <p className="text-muted-foreground leading-relaxed">
                AZSoftStudio was founded by a passionate Unity developer with over 8 years of experience shipping 
                commercial games and tools. After countless hours spent on repetitive tasks and wrestling with 
                Unity's quirks, the vision became clear: create the tools that every Unity developer wishes existed.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Our Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every tool we create starts with a real problem we've encountered in our own development work. 
                We prototype, iterate, and test extensively before releasing anything to the community. 
                This ensures that every asset we publish is something we'd actually want to use ourselves.
              </p>
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="text-center glass p-8 rounded-xl animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-2xl font-bold text-foreground mb-4">Join Our Community</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We believe the best tools are built in collaboration with the community. Your feedback, 
            feature requests, and bug reports help us make our assets better for everyone.
          </p>
          <p className="text-sm text-muted-foreground">
            Have an idea for a tool you'd love to see? We'd love to hear from you.
          </p>
        </section>
      </div>
    </div>
  );
});

About.displayName = 'About';

export default About;