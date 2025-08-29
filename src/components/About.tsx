const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating meaningful digital experiences through code
            </p>
          </div>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">My Journey</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a dedicated Computer Science & Engineering student at IEM Kolkata, 
                  with a strong passion for web development and modern technologies. 
                  My journey into programming began with curiosity and has evolved into 
                  a deep commitment to building responsive, user-friendly web applications.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through various projects and internships, I've gained hands-on experience 
                  with both frontend and backend technologies. I believe in writing clean, 
                  efficient code and creating solutions that not only work well but also 
                  provide exceptional user experiences.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">What Drives Me</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm driven by the endless possibilities that technology offers to solve 
                  real-world problems. Whether it's building a library management system 
                  or creating an intelligent autocorrect tool, I approach each project 
                  with enthusiasm and attention to detail.
                </p>
              </div>
            </div>

            {/* Stats/Highlights */}
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-glass-border shadow-card hover:shadow-glow transition-all duration-300">
                  <div className="text-3xl font-bold text-primary mb-2">2+</div>
                  <div className="text-sm text-muted-foreground">Years of Learning</div>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-glass-border shadow-card hover:shadow-glow transition-all duration-300">
                  <div className="text-3xl font-bold text-primary mb-2">7+</div>
                  <div className="text-sm text-muted-foreground">Projects Built</div>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-glass-border shadow-card hover:shadow-glow transition-all duration-300">
                  <div className="text-3xl font-bold text-primary mb-2">2</div>
                  <div className="text-sm text-muted-foreground">Internships</div>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-glass-border shadow-card hover:shadow-glow transition-all duration-300">
                  <div className="text-3xl font-bold text-primary mb-2">8+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
              </div>

              {/* Current Focus */}
              <div className="mt-8 p-6 bg-gradient-primary/10 rounded-xl border border-primary/20">
                <h4 className="text-xl font-semibold text-primary mb-3">Current Focus</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
                    Advanced React.js & Modern Frontend Frameworks
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-glow-pulse" style={{ animationDelay: '0.5s' }}></div>
                    Full-Stack Development with Node.js
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
                    Database Design & Management
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" style={{ animationDelay: '1.5s' }}></div>
                    Open Source Contributions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;