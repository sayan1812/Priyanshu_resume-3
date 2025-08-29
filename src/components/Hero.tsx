import { ArrowDown, Github, Linkedin, Code } from 'lucide-react';
import { Button } from './ui/button';
import profileImage from '@/assets/profile-image.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-background">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            <div className="mb-6">
              <p className="text-lg text-primary font-semibold mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Priyanshu
                </span>
                <br />
                <span className="text-foreground">Halder</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                Aspiring Full-Stack Developer
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Hardworking Computer Science student passionate about web development, 
                learning modern technologies, and building innovative projects that make a difference.
              </p>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-muted-foreground">Birthday</span>
                <span className="font-semibold">18 Dec 2003</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-muted-foreground">Age</span>
                <span className="font-semibold">21</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-muted-foreground">Degree</span>
                <span className="font-semibold">B.Tech CSE</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-muted-foreground">College</span>
                <span className="font-semibold">IEM Kolkata</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 text-sm">
              <a 
                href="mailto:priyanshuhalder2001@gmail.com"
                className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                📧 priyanshuhalder2001@gmail.com
              </a>
              <a 
                href="tel:+918389937791"
                className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                📞 +91 8389937791
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.open('https://drive.google.com/file/d/1p117VDFmylgvrd-6y86XQ3wQNO3yA-y2/view?usp=drive_link', '_blank')}
                className="border-primary/50 text-primary hover:bg-primary/10"
              >
                📄 View Resume
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('contact')}
                className="border-secondary/50 text-secondary hover:bg-secondary/10"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="https://www.linkedin.com/in/priyanshu-halder-849933278/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted/20 hover:bg-primary/20 hover:shadow-glow transition-all duration-300 group"
              >
                <Linkedin className="h-5 w-5 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://github.com/sayan1812"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted/20 hover:bg-primary/20 hover:shadow-glow transition-all duration-300 group"
              >
                <Github className="h-5 w-5 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://leetcode.com/u/sayan2024/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted/20 hover:bg-primary/20 hover:shadow-glow transition-all duration-300 group"
              >
                <Code className="h-5 w-5 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-elegant animate-glow-pulse">
                <img
                  src={profileImage}
                  alt="Priyanshu Halder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-gradient-shift" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="p-2 rounded-full border border-primary/50 hover:bg-primary/10 transition-colors"
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;