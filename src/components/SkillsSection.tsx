import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Programming Languages",
    description: "Languages I use for development and problem solving",
    skills: [
      { name: "Java", level: "Advanced" },
      { name: "Dart", level: "Intermediate" },
      { name: "C", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
      { name: "Kotlin", level: "Intermediate" }
    ]
  },
  {
    title: "Mobile Development",
    description: "Tools and frameworks I use to build Android apps",
    skills: [
      { name: "Flutter", level: "Intermediate" },
      { name: "Android SDK", level: "Intermediate" },
      { name: "Jetpack", level: "Beginner" },
      { name: "Teachable Machine", level: "Beginner" }
    ]
  },
  {
    title: "Backend & Cloud",
    description: "Technologies for backend systems and cloud infrastructure",
    skills: [
      { name: "Spring Boot", level: "Intermediate" },
      { name: "REST APIs", level: "Advanced" },
      { name: "Firebase", level: "Intermediate" },
      { name: "AWS", level: "Intermediate" },
      { name: "Docker", level: "Beginner" },
      { name: "Google Cloud", level: "Beginner" },
      { name: "MQTT", level: "Intermediate" },
      { name: "CI/CD", level: "Beginner" },
      { name: "CloudWatch", level: "Beginner" },
      { name: "Greengrass", level: "Beginner" }
    ]
  },
  {
    title: "Databases & Tools",
    description: "Databases and development tools I’ve worked with",
    skills: [
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "MySQL", level: "Beginner" },
      { name: "Sqflite", level: "Intermediate" },
      { name: "SQLite", level: "Intermediate" },
      { name: "pgAdmin", level: "Beginner" },
      { name: "Postman", level: "Intermediate" },
      { name: "Android Studio", level: "Advanced" },
      { name: "IntelliJ IDEA", level: "Intermediate" },
      { name: "GitHub", level: "Advanced" },
      { name: "ESP32", level: "Intermediate" }
    ]
  },
  {
    title: "CS Fundamentals",
    description: "My academic and applied computer science knowledge",
    skills: [
      { name: "Data Structures & Algorithms", level: "Advanced" },
      { name: "OOP", level: "Advanced" },
      { name: "System Design", level: "Beginner" },
      { name: "Linux", level: "Intermediate" },
      { name: "Operating Systems", level: "Intermediate" },
      { name: "Computer Networks", level: "Intermediate" },
      { name: "Machine Learning", level: "Beginner" },
      { name: "AI", level: "Beginner" }
    ]
  },
  {
    title: "Soft Skills",
    description: "Traits and qualities that define how I work with teams",
    skills: [
      { name: "Problem Solving", level: "Advanced" },
      { name: "Team Collaboration", level: "Advanced" },
      { name: "Communication", level: "Advanced" },
      { name: "Time Management", level: "Advanced" },
      { name: "Adaptability", level: "Advanced" },
      { name: "Critical Thinking", level: "Advanced" },
      { name: "Leadership", level: "Intermediate" }
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="section-container">
        <h2 className="section-title text-center">Skills & Technologies</h2>
        <p className="text-center text-white-600 mb-12 max-w-3xl mx-auto">
          Continuously building and refining my technical expertise across multiple domains.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border border-border/50 backdrop-blur-sm bg-card/30 animate-fade-in hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="bg-primary/5 border-b border-border/30">
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="relative group">
                      <Badge 
                        variant="secondary" 
                        className="py-1.5 rounded-full transition-all duration-200 hover:bg-primary/20 cursor-default"
                      >
                        {skill.name}
                      </Badge>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs rounded-md py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-sm whitespace-nowrap z-10">
                        {skill.level}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
