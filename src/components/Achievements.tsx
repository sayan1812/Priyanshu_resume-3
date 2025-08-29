import { Award, ExternalLink, Calendar, Star } from 'lucide-react';
import { Button } from './ui/button';

const Achievements = () => {
  const achievements = [
    {
      title: "Deloitte Technology Job Simulation",
      organization: "Deloitte",
      date: "June 13, 2025",
      description: "Successfully completed a comprehensive technology job simulation program, gaining insights into professional consulting practices and enterprise technology solutions.",
      type: "Professional Simulation",
      skills: ["Consulting", "Technology Solutions", "Professional Development"],
      certificateUrl: "https://drive.google.com/file/d/1KRbxqU4IjRr1G-bf7hiTRsWyuAQhXSc_/view",
      status: "verified",
      highlights: [
        "Enterprise technology consulting",
        "Problem-solving methodologies",
        "Professional communication skills"
      ]
    },
    {
      title: "Certified Drawing & Painting",
      organization: "Art Institution",
      date: "2009 - 2013",
      description: "Completed a 4-year comprehensive program in drawing and painting, developing creative skills and artistic expression abilities.",
      type: "Creative Arts",
      skills: ["Drawing", "Painting", "Creative Design", "Visual Arts"],
      certificateUrl: "https://drive.google.com/file/d/17xBCLp3br1k7UryNriZ9f0l7VBehU4G_/view",
      status: "verified",
      highlights: [
        "4-year comprehensive program",
        "Advanced drawing techniques",
        "Creative problem solving"
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Professional Simulation':
        return { bg: 'bg-primary/20', text: 'text-primary', border: 'border-primary/30' };
      case 'Creative Arts':
        return { bg: 'bg-secondary/20', text: 'text-secondary', border: 'border-secondary/30' };
      default:
        return { bg: 'bg-accent/20', text: 'text-accent', border: 'border-accent/30' };
    }
  };

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Achievements & <span className="bg-gradient-primary bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition and certifications that validate my skills and dedication
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="max-w-5xl mx-auto space-y-8">
          {achievements.map((achievement, index) => {
            const typeColors = getTypeColor(achievement.type);
            return (
              <div 
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-glass-border shadow-card hover:shadow-glow transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Award className="h-6 w-6 text-primary" />
                        <span className={`px-3 py-1 ${typeColors.bg} ${typeColors.text} ${typeColors.border} border rounded-full text-sm font-medium`}>
                          {achievement.type}
                        </span>
                        {achievement.status === 'verified' && (
                          <span className="px-3 py-1 bg-success/20 text-success border border-success/30 rounded-full text-sm font-medium flex items-center gap-1">
                            <Star className="h-3 w-3" />
                            Verified
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      
                      <div className="text-xl text-primary font-semibold mb-3">
                        {achievement.organization}
                      </div>
                      
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <Calendar className="h-4 w-4" />
                        <span>{achievement.date}</span>
                      </div>
                    </div>

                    {/* Certificate Button */}
                    <div className="flex-shrink-0">
                      <Button
                        variant="outline"
                        onClick={() => window.open(achievement.certificateUrl, '_blank')}
                        className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Certificate
                      </Button>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-3">Key Highlights:</h4>
                    <div className="grid gap-2">
                      {achievement.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 animate-glow-pulse"></div>
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Skills Developed:</h4>
                    <div className="flex flex-wrap gap-3">
                      {achievement.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-4 py-2 bg-muted/20 text-foreground rounded-lg font-medium hover:bg-primary/10 hover:text-primary transition-all duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="max-w-4xl mx-auto bg-gradient-primary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-primary text-center mb-8">Achievement Overview</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">{achievements.length}</div>
                <div className="text-sm text-muted-foreground">Total Certifications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">
                  {achievements.filter(a => a.status === 'verified').length}
                </div>
                <div className="text-sm text-muted-foreground">Verified Credentials</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">
                  {[...new Set(achievements.flatMap(a => a.skills))].length}
                </div>
                <div className="text-sm text-muted-foreground">Skill Areas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Completion Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Commitment */}
        <div className="mt-12 text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-muted-foreground mb-6">
              I believe in continuous learning and professional development. These certifications 
              represent my commitment to expanding my skills across both technical and creative domains.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Professional Development", "Technical Skills", "Creative Arts", "Problem Solving", "Communication"].map((area, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-muted/20 text-muted-foreground rounded-full text-sm font-medium border border-muted/30 hover:border-primary/50 hover:text-primary transition-all duration-200"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;