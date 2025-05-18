
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Mobile Development",
    description: "Technologies I use for building mobile applications",
    skills: [
      { name: "Kotlin", level: "Intermediate" },
      { name: "Java", level: "Intermediate" },
      { name: "Android SDK", level: "Intermediate" },
      { name: "Flutter", level: "Beginner" }
    ]
  },
  {
    title: "Backend Development",
    description: "Technologies I use for server-side development",
    skills: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Express", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "REST APIs", level: "Intermediate" },
      { name: "Firebase", level: "Beginner" }
    ]
  },
  {
    title: "Frontend Development",
    description: "Technologies I use for client-side development",
    skills: [
      { name: "React", level: "Intermediate" },
      { name: "TypeScript", level: "Beginner" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "HTML/CSS", level: "Advanced" },
      { name: "Tailwind CSS", level: "Intermediate" }
    ]
  },
  {
    title: "Soft Skills",
    description: "Personal qualities and interpersonal abilities",
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
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          I'm constantly learning and improving my skills across various technologies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border border-border/50 backdrop-blur-sm bg-card/30 animate-fade-in hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
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
