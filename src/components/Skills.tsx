import { Code, Database, Globe, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "C++", level: 85, color: "primary" },
        { name: "Java", level: 80, color: "secondary" },
        { name: "C", level: 75, color: "accent" },
        { name: "JavaScript", level: 90, color: "primary" }
      ]
    },
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "HTML5", level: 95, color: "primary" },
        { name: "CSS3", level: 90, color: "secondary" },
        { name: "React.js", level: 85, color: "accent" },
        { name: "Bootstrap", level: 80, color: "primary" }
      ]
    },
    {
      title: "Backend & Database",
      icon: Database,
      skills: [
        { name: "Node.js", level: 75, color: "primary" },
        { name: "Express.js", level: 75, color: "secondary" },
        { name: "MySQL", level: 80, color: "accent" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "Git", level: 85, color: "primary" },
        { name: "GitHub", level: 85, color: "secondary" },
        { name: "VS Code", level: 90, color: "accent" }
      ]
    }
  ];

  const getColorClass = (color: string, type: 'bg' | 'text' | 'border') => {
    const colorMap = {
      primary: { bg: 'bg-primary', text: 'text-primary', border: 'border-primary' },
      secondary: { bg: 'bg-secondary', text: 'text-secondary', border: 'border-secondary' },
      accent: { bg: 'bg-accent', text: 'text-accent', border: 'border-accent' }
    };
    return colorMap[color as keyof typeof colorMap][type];
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I've mastered throughout my journey
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={categoryIndex}
                className="animate-slide-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-glass-border shadow-card hover:shadow-glow transition-all duration-300 h-full">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-primary/20 rounded-xl">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className="animate-slide-up"
                        style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-foreground">{skill.name}</span>
                          <span className={`text-sm font-medium ${getColorClass(skill.color, 'text')}`}>
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="relative">
                          <div className="w-full h-3 bg-muted/20 rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${getColorClass(skill.color, 'bg')} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                              style={{ 
                                width: `${skill.level}%`,
                                animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                              }}
                            >
                              {/* Animated shine effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-gradient-shift"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <div className="max-w-4xl mx-auto bg-gradient-primary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-6">Core Competencies</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Problem Solving</h4>
                <p className="text-muted-foreground">
                  Strong analytical skills with experience in algorithmic thinking and debugging
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Globe className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Web Development</h4>
                <p className="text-muted-foreground">
                  Full-stack capabilities with modern frameworks and responsive design principles
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                  <Database className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Database Management</h4>
                <p className="text-muted-foreground">
                  Experience with relational databases and efficient query optimization
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Path */}
        <div className="mt-12 text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">Currently Learning</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["TypeScript", "Next.js", "MongoDB", "Docker", "AWS", "GraphQL"].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-muted/20 text-muted-foreground rounded-full text-sm font-medium border border-muted/30 hover:border-primary/50 hover:text-primary transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;