
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Mobile Development",
    description: "Technologies I use for building mobile applications",
    skills: [
      { name: "Kotlin", level: "Expert" },
      { name: "Java", level: "Expert" },
      { name: "Swift", level: "Intermediate" },
      { name: "React Native", level: "Advanced" },
      { name: "Jetpack Compose", level: "Advanced" },
      { name: "Android SDK", level: "Expert" },
      { name: "Flutter", level: "Intermediate" }
    ]
  },
  {
    title: "Backend Development",
    description: "Technologies I use for server-side development",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express", level: "Advanced" },
      { name: "Spring Boot", level: "Intermediate" },
      { name: "Django", level: "Intermediate" },
      { name: "GraphQL", level: "Intermediate" },
      { name: "REST APIs", level: "Expert" },
      { name: "Microservices", level: "Advanced" }
    ]
  },
  {
    title: "Frontend Development",
    description: "Technologies I use for client-side development",
    skills: [
      { name: "React", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript", level: "Expert" },
      { name: "HTML/CSS", level: "Advanced" },
      { name: "Tailwind CSS", level: "Intermediate" },
      { name: "Redux", level: "Advanced" },
      { name: "Next.js", level: "Intermediate" }
    ]
  },
  {
    title: "DevOps & Tools",
    description: "Technologies I use for development operations",
    skills: [
      { name: "Git", level: "Expert" },
      { name: "Docker", level: "Advanced" },
      { name: "Kubernetes", level: "Intermediate" },
      { name: "CI/CD", level: "Advanced" },
      { name: "AWS", level: "Intermediate" },
      { name: "Firebase", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "PostgreSQL", level: "Intermediate" }
    ]
  }
];

const getBadgeVariant = (level: string) => {
  switch(level) {
    case "Expert": return "default";
    case "Advanced": return "secondary";
    case "Intermediate": return "outline";
    default: return "outline";
  }
};

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-secondary/30 py-20">
      <div className="section-container">
        <h2 className="section-title text-center">Skills & Technologies</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          I'm experienced with a variety of technologies across mobile, backend, and frontend development.
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
