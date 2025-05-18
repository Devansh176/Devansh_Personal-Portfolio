
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

const getBadgeVariant = (level: string) => {
  switch(level) {
    case "Advanced": return "default";
    case "Intermediate": return "secondary";
    case "Beginner": return "outline";
    default: return "outline";
  }
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <h2 className="section-title text-center">Skills & Technologies</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          I'm constantly learning and improving my skills across various technologies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="relative group">
                      <Badge 
                        variant={getBadgeVariant(skill.level)} 
                        className="py-1.5"
                      >
                        {skill.name}
                      </Badge>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
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
