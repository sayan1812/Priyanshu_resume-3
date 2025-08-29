import { Linkedin, Github, Code, Mail, Phone, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/priyanshu-halder-849933278/",
    },
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/sayan1812",
    },
    {
      icon: Code,
      label: "LeetCode",
      url: "https://leetcode.com/u/sayan2024/",
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-t from-card/80 to-background border-t border-glass-border">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute -top-10 right-20 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                Priyanshu Halder
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Computer Science student passionate about full-stack development. 
                Building responsive web applications with modern technologies and 
                always eager to learn and grow.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <a 
                href="mailto:priyanshuhalder2001@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                priyanshuhalder2001@gmail.com
              </a>
              <a 
                href="tel:+918389937791"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91 8389937791
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Connect</h4>
            <div className="space-y-3 mb-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm group"
                  >
                    <IconComponent className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    {social.label}
                  </a>
                );
              })}
            </div>

            {/* Availability Status */}
            <div className="bg-success/10 rounded-lg p-3 border border-success/20">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-success rounded-full animate-glow-pulse"></div>
                <span className="text-xs font-semibold text-success">Available for Work</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Open to internships and entry-level positions
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-glass-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Priyanshu Halder. All Rights Reserved.
              <span className="block md:inline md:ml-2">
                Built with React, TypeScript & Tailwind CSS
              </span>
            </div>

            {/* Back to Top */}
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary opacity-60 animate-gradient-shift"></div>
    </footer>
  );
};

export default Footer;