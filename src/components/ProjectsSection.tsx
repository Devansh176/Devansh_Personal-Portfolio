
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github } from "lucide-react";

// Sample projects data
const projects = [
  {
    id: 1,
    title: "E-commerce Mobile App",
    description: "A full-featured e-commerce application with cart, user profiles, and payment integration.",
    category: "android",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=E-commerce+App",
    tags: ["Kotlin", "MVVM", "Room", "Retrofit"],
    githubLink: "https://github.com/username/project1",
    liveLink: "https://project1.com"
  },
  {
    id: 2,
    title: "Fitness Tracker",
    description: "Track workouts, set goals, and monitor progress with this fitness companion app.",
    category: "android",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Fitness+Tracker",
    tags: ["Kotlin", "Jetpack Compose", "Health APIs", "Firebase"],
    githubLink: "https://github.com/username/project2",
    liveLink: "https://project2.com"
  },
  {
    id: 3,
    title: "Social Media Platform",
    description: "A responsive social media platform with real-time messaging and content sharing.",
    category: "android",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Social+Media+App",
    tags: ["Java", "Firebase", "ExoPlayer", "WorkManager"],
    githubLink: "https://github.com/username/project3",
    liveLink: "https://project3.com"
  },
  {
    id: 4,
    title: "REST API Service",
    description: "A high-performance REST API service with authentication and data processing capabilities.",
    category: "backend",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=REST+API",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    githubLink: "https://github.com/username/project4",
    liveLink: "https://project4.com"
  },
  {
    id: 5,
    title: "Microservice Architecture",
    description: "A distributed system using microservice architecture for scalable applications.",
    category: "backend",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Microservices",
    tags: ["Spring Boot", "Docker", "Kubernetes", "Kafka"],
    githubLink: "https://github.com/username/project5",
    liveLink: "https://project5.com"
  }
];

const ProjectsSection = () => {
  const categories = ["all", ...new Set(projects.map(project => project.category))];
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="bg-secondary/30 py-20">
      <div className="section-container">
        <h2 className="section-title text-center">Projects</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Explore my projects across different technology domains. Each project showcases different skills and approaches to solving problems.
        </p>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <div className="flex justify-center">
            <TabsList className="mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="capitalize">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <Card key={project.id} className="card-hover overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>{project.title}</CardTitle>
                        <Badge variant="outline" className="capitalize">
                          {project.category}
                        </Badge>
                      </div>
                      <CardDescription className="line-clamp-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" /> Code
                        </a>
                      </Button>
                      <Button size="sm" className="flex items-center gap-2" asChild>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          Live Demo <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
