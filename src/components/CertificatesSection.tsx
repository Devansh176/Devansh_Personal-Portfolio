
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const certificates = [
  {
    name: "Introduction to Git and GitHub",
    issuer: "Coursera",
    date: "March 2024",
    url: "https://drive.google.com/file/d/1num9-1KIlO3PGIz7lYoQofKSVqJhh-eM/view?usp=drive_link",
    skills: ["Git", "GitHub", "Version Control"]
  },
  {
    name: "English Communication for Tech Professionals",
    issuer: "Coursera",
    date: "Oct 2024",
    url: "https://drive.google.com/file/d/1xSrE6Vm4Ct_KL9d8dRdDtNaGXEQLYEI8/view?usp=drive_link",
    skills: ["Vocabulary", "Soft Skills", "Grammar"]
  },
  {
    name: "Data Structures & Backend with Java",
    issuer: "Coursera",
    date: "March 2025",
    url: "https://drive.google.com/file/d/1dqDPtXFKE0jDGFC6FDNq7dFsqhPwJoLK/view?usp=drive_link",
    skills: ["Algorithms", "Problem Solving", "Java", "Spring Boot", "MVC", "APIs"]
  },
  {
    name: "Flutter and Dart: Developing iOS, Android, and Mobile Apps",
    issuer: "Coursera",
    date: "March 2025",
    url: "https://drive.google.com/file/d/1p2VpOC3EEX4p2BJ427obIUNQhRjM6Gkh/view?usp=drive_link",
    skills: ["Flutter", "Dart", "Android SDK", "APIs"]
  },
  {
    name: "Networking Basics",
    issuer: "Cisco - Networking Academy",
    date: "Dec 2024",
    url: "https://drive.google.com/file/d/12foMFGoUt6_hhY2SywNboU0IMhBcOkwo/view?usp=drive_link",
    skills: ["Routing", "Switching", "IP Addressing", "Troubleshooting", "Security"]
  },
  {
    name: "English for IT1",
    issuer: "Cisco - Networking Academy",
    date: "Dec 2024",
    url: "https://drive.google.com/file/d/1xqsLR0n2_s3KYSrZKpmJ-DgIJhjQQFHs/view?usp=drive_link",
    skills: ["Vocabulary", "Writing", "Speaking"]
  }
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title text-center">Certificates</h2>
        <p className="text-center text-white-600 mb-12 max-w-3xl mx-auto">
          Professional certifications that validate my skills and knowledge in various areas of IT.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((certificate, index) => (
            <Card key={index} className="card-hover animate-fade-in will-change-transform" style={{ animationDelay: `${index * 0.15}s`, transform: 'translateZ(0)' }}>
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
