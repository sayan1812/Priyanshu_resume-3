import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Code, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission (replace with actual EmailJS integration)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For now, create a mailto link as fallback
      const mailtoLink = `mailto:priyanshuhalder2001@gmail.com?subject=Contact from ${formData.name}&body=From: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`;
      window.location.href = mailtoLink;

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Failed to Send",
        description: "Failed to send message. Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "priyanshuhalder2001@gmail.com",
      link: "mailto:priyanshuhalder2001@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8389937791",
      link: "tel:+918389937791",
      color: "text-secondary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kolkata, West Bengal, India",
      link: null,
      color: "text-accent"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/priyanshu-halder-849933278/",
      color: "text-primary"
    },
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/sayan1812",
      color: "text-secondary"
    },
    {
      icon: Code,
      label: "LeetCode",
      url: "https://leetcode.com/u/sayan2024/",
      color: "text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Send Me A <span className="bg-gradient-primary bg-clip-text text-transparent">Message</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss opportunities & collaborations. I'm always excited to work on new projects!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    I'm currently looking for new opportunities in full-stack development. 
                    Whether you have a project in mind, want to collaborate, or just want to 
                    say hello, I'd love to hear from you!
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div 
                        key={index}
                        className="flex items-center gap-4 group animate-slide-up"
                        style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
                      >
                        <div className={`p-3 rounded-xl bg-card/50 border border-glass-border group-hover:shadow-glow transition-all duration-300`}>
                          <IconComponent className={`h-6 w-6 ${info.color}`} />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-muted-foreground">{info.label}</div>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="text-lg font-semibold text-foreground">{info.value}</div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-xl bg-card/50 border border-glass-border hover:shadow-glow transition-all duration-300 group"
                        >
                          <IconComponent className={`h-6 w-6 ${social.color} group-hover:scale-110 transition-transform`} />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Availability Status */}
                <div className="bg-gradient-primary/10 rounded-xl p-6 border border-primary/20 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-success rounded-full animate-glow-pulse"></div>
                    <span className="font-semibold text-primary">Available for Work</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Currently open to internships and entry-level positions in full-stack development. 
                    Remote work and on-site opportunities are both welcome.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-glass-border shadow-card">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="border-muted/50 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="border-muted/50 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                      className="border-muted/50 focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {/* Form Footer */}
                  <div className="text-center text-sm text-muted-foreground">
                    <p>
                      By sending this message, you agree to be contacted regarding your inquiry.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 animate-slide-up" style={{ animationDelay: '0.7s' }}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-card/30 rounded-xl p-4 border border-glass-border">
                <div className="text-2xl font-bold text-primary mb-1">24h</div>
                <div className="text-xs text-muted-foreground">Response Time</div>
              </div>
              <div className="bg-card/30 rounded-xl p-4 border border-glass-border">
                <div className="text-2xl font-bold text-secondary mb-1">100%</div>
                <div className="text-xs text-muted-foreground">Project Commitment</div>
              </div>
              <div className="bg-card/30 rounded-xl p-4 border border-glass-border">
                <div className="text-2xl font-bold text-accent mb-1">Remote</div>
                <div className="text-xs text-muted-foreground">Work Ready</div>
              </div>
              <div className="bg-card/30 rounded-xl p-4 border border-glass-border">
                <div className="text-2xl font-bold text-primary mb-1">Open</div>
                <div className="text-xs text-muted-foreground">To Opportunities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;