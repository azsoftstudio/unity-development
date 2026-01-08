import { Users, Target, Lightbulb, Heart } from 'lucide-react';
import { memo, useMemo } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { AnimatedDivider } from '@/components/AnimatedDivider';

const ValueCard = memo<{
  value: any;
  index: number;
}>(({ value, index }) => (
  <div className="group relative glass p-8 rounded-2xl transition-smooth interactive-glow border border-border/50 hover:border-primary/30 overflow-hidden">
    {/* Gradient accent on hover */}
    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative z-10">
      <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6 text-primary-foreground shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
        {value.icon}
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-all duration-300">
        {value.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed text-base">
        {value.description}
      </p>
    </div>
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
        <ScrollReveal animation="fade-up">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-gradient">AZSoftStudio</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're an indie Unity asset studio dedicated to creating high-quality, time-saving tools that make game development more enjoyable and efficient.
            </p>
          </header>
        </ScrollReveal>

        {/* Mission */}
        <ScrollReveal animation="fade-up" delay={0.1}>
          <section className="relative glass p-10 rounded-2xl mb-12 border border-border/50 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-primary rounded-full" />
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Unity development shouldn't be about fighting with tools—it should be about bringing your creative vision to life. 
                That's why we create assets that feel like natural extensions of Unity itself, tools that work the way you think, 
                and solutions that save you hours of tedious work so you can focus on what really matters: making great games.
              </p>
            </div>
          </section>
        </ScrollReveal>

        <AnimatedDivider variant="geometric" />

        {/* Values */}
        <section className="mb-16">
          <ScrollReveal animation="fade-up">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">What Drives Us</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} animation="fade-up" index={index}>
                <ValueCard value={value} index={index} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        <AnimatedDivider variant="glow-line" />

        {/* Founder Section */}
        <ScrollReveal animation="fade-up">
          <section className="relative glass-strong p-10 rounded-2xl mb-12 border border-primary/20 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/20 blur-3xl rounded-full" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-primary rounded-full" />
                Meet the Team
              </h2>
              <div className="space-y-8">
                <div className="p-6 rounded-xl bg-background/50 border border-border/50">
                  <h3 className="text-2xl font-bold text-gradient mb-3">
                    Muhammad Arabii Mustafiz
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-3">Founder & Lead Developer</p>
                  <p className="text-muted-foreground leading-relaxed">
                    AZSoftStudio was founded by Arabii, a passionate Unity developer with experience shipping commercial games and tools. After countless hours spent on repetitive tasks and wrestling with Unity's quirks, the vision became clear: create the tools that every Unity developer wishes existed.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-background/30 border border-border/30">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Our Approach</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every tool we create starts with a real problem we've encountered in our own development work. 
                    We prototype, iterate, and test extensively before releasing anything to the community. 
                    This ensures that every asset we publish is something we'd actually want to use ourselves.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <AnimatedDivider variant="dots" />

        {/* Community */}
        <ScrollReveal animation="scale">
          <section className="relative text-center glass p-10 rounded-2xl border border-border/50 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 blur-3xl rounded-full" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-foreground mb-6">Join Our Community</h2>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto text-lg">
                We believe the best tools are built in collaboration with the community. Your feedback, 
                feature requests, and bug reports help us make our assets better for everyone.
              </p>
              <p className="text-sm text-muted-foreground/80">
                Have an idea for a tool you'd love to see? We'd love to hear from you.
              </p>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
});

About.displayName = 'About';

export default About;
