import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Institute of Engineering & Management, Kolkata",
      duration: "2022 - 2026",
      location: "Kolkata, West Bengal",
      description: "Comprehensive curriculum covering DSA, Web Development, AI, DBMS, Operating Systems",
      subjects: ["Java", "C++", "HTML/CSS/JS", "React.js", "Node.js", "MySQL", "Data Structures", "Algorithms"],
      status: "pursuing"
    },
    {
      degree: "Higher Secondary in Science",
      institution: "SM Nasir Smriti High School",
      duration: "2020 - 2022",
      location: "West Bengal",
      description: "Science stream with focus on Mathematics, Physics, and Chemistry",
      subjects: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
      status: "completed"
    },
    {
      degree: "Secondary Education",
      institution: "Mira High School",
      duration: "2014 - 2020",
      location: "West Bengal",
      description: "Foundation studies with consistent academic performance",
      subjects: ["Mathematics", "Science", "Social Studies", "Languages"],
      status: "completed"
    }
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic foundation that shaped my technical journey
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-primary transform md:-translate-x-1/2"></div>

            {educationData.map((edu, index) => (
              <div 
                key={index} 
                className="relative mb-16 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow transform md:-translate-x-1/2 z-10"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'}`}>
                  <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-glass-border shadow-card hover:shadow-glow transition-all duration-300">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2 text-sm text-primary">
                        <Calendar className="h-4 w-4" />
                        <span className="font-semibold">{edu.duration}</span>
                        {edu.status === 'pursuing' && (
                          <span className="px-2 py-1 bg-primary/20 text-primary rounded-full text-xs">
                            Currently Pursuing
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <GraduationCap className="h-4 w-4" />
                        <span className="font-semibold">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Subjects */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">Key Subjects & Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.subjects.map((subject, subIndex) => (
                          <span
                            key={subIndex}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="max-w-3xl mx-auto bg-gradient-primary/10 rounded-xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-4">Academic Achievements</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Consistent academic performance throughout my educational journey with a focus on 
              practical application of theoretical concepts.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Years in CSE</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">Multiple</div>
                <div className="text-sm text-muted-foreground">Programming Languages</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">Strong</div>
                <div className="text-sm text-muted-foreground">Foundation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;