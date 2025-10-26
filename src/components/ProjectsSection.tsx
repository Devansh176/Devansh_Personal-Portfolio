import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Hospital Management System",
    description: "Comprehensive hospital management system built with Spring Boot, featuring patient management, appointment scheduling, and medical records.",
    category: ["spring-boot"],  
    image: "HMS.png",
    tags: ["Spring Boot", "Java", "MySQL", "REST API", "Healthcare"],
    githubLink: "https://github.com/Devansh176/Hospital_Management_System",
  },
  {
    id: 2,
    title: "Payment Service",
    description: "Enterprise payment service with Spring Boot managing clients, payments, addresses, and products with scalable architecture.",
    category: ["spring-boot"],
    image: "mongo.png",
    tags: ["Spring Boot", "Java", "Payment Gateway", "CRUD", "Microservices"],
    githubLink: "https://github.com/Devansh176/Payment_Service",
  },
  {
    id: 3,
    title: "Cyber-Physical Health Monitoring System (CPS)",
    description: "Real-time health data monitoring using Spring Boot, PostgreSQL, and ESP32 via MQTT.",
    category: ["iot/cps"],  
    image: "cps_pic.png",
    tags: ["Spring Boot", "Java", "ESP32", "PostgreSQL", "MQTT", "Kotlin"],
    githubLink: "https://github.com/Devansh176/CPS_in_Healthcare.git",
  },
  {
    id: 4,
    title: "Face Detection & Recognition",
    description: "Dockerized ML model for face recognition with AWS Greengrass, MQTT, and SQS.",
    category: ["ml", "cloud"],
    image: "img3.jfif",
    tags: ["Python", "Docker", "AWS", "MQTT", "Flask"],
    githubLink: "https://github.com/Devansh176/AWS-Face-Recognition.git",
  },
  {
    id: 5,
    title: "Data Insights Pipeline",
    description: "Automated metadata detection and insights with Python, AWS RDS, and LLMs.",
    category: ["cloud"],
    image: "img4.jfif",
    tags: ["Python", "AWS", "LLM", "S3", "RDS"],
    githubLink: "https://github.com/Devansh176/Data-Insights-Pipeline.git",
  },
  {
    id: 6,
    title: "Movie App (Cineflex)",
    description: "Displays movies, trailers, and handles bookings with bilingual support.",
    category: ["flutter"],
    image: "CfxLogo.jpeg",
    tags: ["Flutter", "TMDb API", "Razorpay", "YouTube API"],
    githubLink: "https://github.com/Devansh176/Movies-and-Series-.git",
    liveLink: "https://appetize.io/app/b_jvn5k744ajmjpw7evezrnewj64"
  },
  {
    id: 7,
    title: "Wallpaper App (Wallviz)",
    description: "High-quality image search and wallpaper downloads using Pexels & Unsplash APIs.",
    category: ["flutter"],
    image: "i6.webp",
    tags: ["Flutter", "Dart", "Pexels API", "Unsplash API"],
    githubLink: "https://github.com/Devansh176/Wallpaper-App.git",
    liveLink: "https://appetize.io/app/b_jidfd4hp7dmycywun77ak7hpf4"
  },
  {
    id: 8,
    title: "Facial Expression Detection",
    description: "Real-time emotion recognition using Flutter and TensorFlow Lite.",
    category: ["ml", "flutter"],
    image: "i7.jfif",
    tags: ["Flutter", "TensorFlow Lite", "Teachable Machine"],
    githubLink: "https://github.com/Devansh176/Face_Expression_Detection.git",
  },
];

const ProjectsSection = () => {
  // Flatten all categories from projects and remove duplicates
  const allCategories = projects.flatMap(project => project.category);
  const uniqueCategories = [...new Set(allCategories)];
  const categories = ["all", ...uniqueCategories];
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category.includes(activeTab));

  return (
    <section id="projects" className="bg-secondary/30 py-20">
      <div className="section-container">
        <h2 className="section-title text-center">Projects</h2>
        <p className="text-center text-foreground/80 mb-12 max-w-3xl mx-auto">
          Showcase of enterprise-grade applications across healthcare, fintech, cloud computing, mobile development, and IoT solutions.
        </p>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <div className="flex justify-center">
            <TabsList className="mb-8 bg-background/50 backdrop-blur-sm p-1 rounded-xl flex justify-center">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className={`capitalize rounded-lg px-4 py-2 transition-colors duration-500 ease-in-out
                  ${
                    activeTab === category
                      ? "bg-primary/90 text-white shadow-md"
                      : "bg-transparent text-foreground hover:bg-primary/20 hover:text-primary"
                  }
                `}
              >
                {category}
              </TabsTrigger>
            ))}
            </TabsList>
          </div>
          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden border border-border/50 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>{project.title}</CardTitle>
                        <div className="flex flex-wrap gap-1">
                          {project.category.map((cat) => (
                            <Badge key={cat} variant="outline" className="capitalize rounded-full text-xs">
                              {cat}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <CardDescription className="line-clamp-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs rounded-full">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" className="flex items-center gap-2 rounded-full" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" /> Code
                      </a>
                    </Button>
                    {project.liveLink && (
                      <Button size="sm" className="flex items-center gap-2 bg-primary/90 hover:bg-primary rounded-full shadow-sm hover:shadow-md transition-all duration-300" asChild>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          Live Demo <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
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
