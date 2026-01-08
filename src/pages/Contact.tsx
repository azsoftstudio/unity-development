import { Mail, MessageCircle, Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { memo, useMemo, useCallback } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { AnimatedDivider } from '@/components/AnimatedDivider';

const ContactMethodCard = memo<{ method: any; index: number }>(({ method, index }) => {
  const handleClick = useCallback(() => {
    window.open(method.action, '_blank');
  }, [method.action]);

  return (
    <div className="glass p-8 rounded-xl transition-smooth interactive-glow">
      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 text-primary-foreground">
        {method.icon}
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">
        {method.title}
      </h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {method.description}
      </p>
      <Button
        variant="outline"
        className="glass border-primary/30 text-foreground hover:bg-primary/10 transition-smooth w-full justify-between"
        onClick={handleClick}
      >
        <span>{method.contact}</span>
        <ExternalLink className="h-4 w-4" />
      </Button>
    </div>
  );
});

ContactMethodCard.displayName = 'ContactMethodCard';

const SocialLinkCard = memo<{ social: any }>(({ social }) => {
  const handleClick = useCallback(() => {
    window.open(social.url, '_blank');
  }, [social.url]);

  return (
    <Button
      variant="outline"
      className="glass border-primary/30 text-foreground hover:bg-primary/10 transition-smooth p-6 h-auto flex-col gap-3"
      onClick={handleClick}
    >
      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
        {social.icon}
      </div>
      <div className="text-center">
        <div className="font-semibold">{social.name}</div>
        <div className="text-sm text-muted-foreground">{social.username}</div>
      </div>
    </Button>
  );
});

SocialLinkCard.displayName = 'SocialLinkCard';

const Contact = memo(() => {
  const contactMethods = useMemo(() => [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Support Email",
      description: "Get help with our assets or ask technical questions",
      contact: "support@azsoftstudio.com",
      action: "mailto:support@azsoftstudio.com",
      type: "email"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Discord Community",
      description: "Join our community for real-time discussions and updates", 
      contact: "@AZSoftStudio",
      action: "https://discord.gg/azsoftstudio",
      type: "discord"
    }
  ], []);

  const socialLinks = useMemo(() => [
    {
      icon: <Github className="h-5 w-5" />,
      name: "GitHub",
      url: "https://github.com/azsoftstudio",
      username: "@azsoftstudio"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      name: "Twitter/X",
      url: "https://twitter.com/azsoftstudio",
      username: "@azsoftstudio"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
      url: "https://linkedin.com/company/azsoftstudio",
      username: "AZSoftStudio"
    }
  ], []);

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We'd love to hear from you! Whether you need support, have feedback, or just want to say hello, 
              here are the best ways to reach us.
            </p>
          </header>
        </ScrollReveal>

        {/* Contact Methods */}
        <section className="grid md:grid-cols-2 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <ScrollReveal key={method.title} animation="fade-up" index={index}>
              <ContactMethodCard method={method} index={index} />
            </ScrollReveal>
          ))}
        </section>

        <AnimatedDivider variant="glow-line" />

        {/* Social Links */}
        <ScrollReveal animation="fade-up" delay={0.2}>
          <section className="glass-strong p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Follow Our Journey
            </h2>
            <p className="text-muted-foreground text-center mb-8 leading-relaxed">
              Stay updated with our latest releases, development insights, and Unity tips.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4">
              {socialLinks.map((social, index) => (
                <ScrollReveal key={social.name} animation="scale" index={index} delay={0.3}>
                  <SocialLinkCard social={social} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <AnimatedDivider variant="dots" />

        {/* Response Time */}
        <ScrollReveal animation="fade-up" delay={0.4}>
          <section className="text-center glass p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-foreground mb-2">Response Time</h3>
            <p className="text-muted-foreground">
              We typically respond to emails within 24 hours on weekdays. 
              For faster responses, try reaching out on Discord where our community is most active.
            </p>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
});

Contact.displayName = 'Contact';

export default Contact;
