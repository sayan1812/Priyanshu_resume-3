import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const Experience = () => {
  const experiences = [
    {
      title: "Front-End Developer Intern",
      company: "CodeAlpha",
      duration: "March 2025 - April 2025",
      location: "Remote",
      type: "Internship",
      description: "Developed responsive web pages using HTML, CSS, and JavaScript. Gained hands-on experience in frontend development and debugging techniques.",
      responsibilities: [
        "Built responsive web pages with clean, semantic HTML",
        "Implemented modern CSS layouts and animations",
        "Enhanced user experience with JavaScript interactivity",
        "Debugged cross-browser compatibility issues",
        "Collaborated with design team for pixel-perfect implementations"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git"],
      status: "completed"
    },
    {
      title: "DSA C++ Developer Intern",
      company: "InternPe",
      duration: "July 7, 2025 - July 21, 2025",
      location: "Remote",
      type: "Internship",
      description: "Intensive 2-week program focused on Data Structures and Algorithms using C++. Solved real-time coding challenges and enhanced problem-solving skills.",
      responsibilities: [
        "Implemented various data structures (Arrays, Linked Lists, Trees)",
        "Solved complex algorithmic problems with optimal solutions",
        "Practiced recursion and dynamic programming concepts",
        "Participated in coding challenges and competitions",
        "Debugged and optimized C++ code for performance"
      ],
      technologies: ["C++", "Data Structures", "Algorithms", "Problem Solving", "Recursion"],
      status: "completed"
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Work <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional experience that shaped my development skills
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-glass-border shadow-card hover:shadow-glow transition-all duration-300 group">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="h-6 w-6 text-primary" />
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                        {exp.type}
                      </span>
                      {exp.status === 'completed' && (
                        <span className="px-3 py-1 bg-success/20 text-success rounded-full text-sm font-medium">
                          Completed
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <div className="text-xl text-primary font-semibold mb-3">
                      {exp.company}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Key Responsibilities:</h4>
                  <div className="grid gap-3">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <div key={respIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{responsibility}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-muted/20 text-foreground rounded-lg font-medium hover:bg-primary/10 hover:text-primary transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Current Status */}
        <div className="mt-16 text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="max-w-3xl mx-auto bg-gradient-secondary/10 rounded-2xl p-8 border border-secondary/20">
            <h3 className="text-2xl font-bold text-secondary mb-4">Looking Forward</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Currently seeking new opportunities to expand my skills and contribute to innovative projects. 
              Open to internships and entry-level positions in full-stack development.
            </p>
            <Button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-secondary hover:shadow-glow transition-all duration-300"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;