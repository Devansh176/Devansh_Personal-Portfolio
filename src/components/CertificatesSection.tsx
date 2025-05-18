
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const certificates = [
  {
    name: "Introduction to Web Development",
    issuer: "Coursera",
    date: "March 2023",
    url: "#",
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    name: "Advanced Android Development",
    issuer: "Google Developer Academy",
    date: "June 2023",
    url: "#",
    skills: ["Kotlin", "Android SDK", "Firebase"]
  },
  {
    name: "Data Structures and Algorithms",
    issuer: "HackerRank",
    date: "January 2023",
    url: "#",
    skills: ["Algorithms", "Problem Solving", "Java"]
  },
  {
    name: "Full-Stack Development Bootcamp",
    issuer: "Udemy",
    date: "September 2023",
    url: "#",
    skills: ["React", "Node.js", "MongoDB"]
  }
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title text-center">Certificates</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Professional certifications that validate my skills and knowledge in various areas of IT.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((certificate, index) => (
            <Card key={index} className="card-hover animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{certificate.name}</CardTitle>
                    <p className="text-primary font-medium">{certificate.issuer}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {certificate.date}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {certificate.skills.map(skill => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                  <a 
                    href={certificate.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
