import { ExternalLink, Github, Calendar, Code2 } from 'lucide-react';
import { Button } from './ui/button';

const Projects = () => {
  const projects = [
    {
      title: "TimeTable Generator",
      description: "A comprehensive Java application that automatically generates optimized class schedules. Features intelligent conflict resolution and efficient time slot allocation algorithms.",
      technologies: ["Java", "Swing", "OOP", "Algorithms"],
      github: "https://github.com/sayan1812/Time_Table_Generator",
      category: "Desktop Application",
      highlights: ["Automatic Scheduling", "Conflict Resolution", "User-Friendly Interface"],
      status: "completed"
    },
    {
      title: "Library Management System",
      description: "A robust C++ console application for managing library operations including book inventory, member registration, and borrowing transactions with data persistence.",
      technologies: ["C++", "File Handling", "Data Structures", "OOP"],
      github: "https://github.com/sayan1812/Library-Management-System-C-",
      category: "System Software",
      highlights: ["Book Management", "Member System", "Transaction Tracking"],
      status: "completed"
    },
    {
      title: "Autocorrect Tool",
      description: "An intelligent web-based spelling correction tool using advanced string algorithms and suggestion mechanisms to provide real-time text corrections.",
      technologies: ["HTML", "CSS", "JavaScript", "Algorithms"],
      github: "https://github.com/sayan1812/Autocorrect-Tool",
      category: "Web Application",
      highlights: ["Real-time Correction", "Smart Suggestions", "Interactive UI"],
      status: "completed"
    },
    {
      title: "Resume Parser",
      description: "A Python-powered web application that extracts and analyzes key information from PDF resumes, featuring structured data extraction and content analysis.",
      technologies: ["Python", "HTML", "CSS", "PDF Processing"],
      github: "https://github.com/sayan1812/resume_parser",
      category: "Data Processing",
      highlights: ["PDF Parsing", "Data Extraction", "Content Analysis"],
      status: "completed"
    },
    {
      title: "Translator App",
      description: "A dynamic web application providing real-time language translation with support for multiple languages and an intuitive user interface.",
      technologies: ["JavaScript", "CSS", "HTML", "API Integration"],
      github: "https://github.com/sayan1812/translator",
      category: "Web Application",
      highlights: ["Multi-language Support", "Real-time Translation", "Clean UI"],
      status: "completed"
    },
    {
      title: "Music Player",
      description: "A feature-rich web-based music player with playlist management, audio controls, and modern responsive design for optimal user experience.",
      technologies: ["JavaScript", "HTML", "CSS", "Web Audio API"],
      github: "https://github.com/sayan1812/Music-Player",
      category: "Web Application",
      highlights: ["Playlist Management", "Audio Controls", "Responsive Design"],
      status: "completed"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects, skills, and professional information with modern design and interactive elements.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/sayan1812/Priyanshu-s-Portfolio",
      category: "Web Development",
      highlights: ["Personal Branding", "Interactive Design", "Professional Showcase"],
      status: "completed"
    }
  ];

  const categories = ["All", "Web Application", "Desktop Application", "System Software", "Data Processing", "Web Development"];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my development journey through various projects and technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-glass-border shadow-card hover:shadow-glow transition-all duration-500 h-full flex flex-col hover:scale-105">
                {/* Project Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2">
                      {project.status === 'completed' && (
                        <span className="w-2 h-2 bg-success rounded-full"></span>
                      )}
                      <Code2 className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <span
                        key={highlightIndex}
                        className="px-2 py-1 bg-muted/20 text-muted-foreground rounded text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6 flex-grow">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium hover:bg-accent/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/50 text-primary hover:bg-primary/10 group-hover:border-primary transition-all"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-primary hover:shadow-glow transition-all"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Statistics */}
        <div className="mt-16 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="max-w-4xl mx-auto bg-gradient-secondary/10 rounded-2xl p-8 border border-secondary/20">
            <h3 className="text-2xl font-bold text-secondary text-center mb-8">Project Overview</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">{projects.length}</div>
                <div className="text-sm text-muted-foreground">Total Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">
                  {[...new Set(projects.flatMap(p => p.technologies))].length}
                </div>
                <div className="text-sm text-muted-foreground">Technologies Used</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">
                  {categories.length - 1}
                </div>
                <div className="text-sm text-muted-foreground">Project Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Completion Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center animate-slide-up" style={{ animationDelay: '1s' }}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Want to see more of my work?
            </h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub profile for additional projects and contributions.
            </p>
            <Button 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              onClick={() => window.open('https://github.com/sayan1812', '_blank')}
            >
              <Github className="h-5 w-5 mr-2" />
              Visit GitHub Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;