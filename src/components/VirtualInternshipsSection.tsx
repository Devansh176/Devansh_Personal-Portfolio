import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const internships = [
  {
    name: "Cybersecurity Virtual Internship",
    issuer: "Palo Alto Networks",
    date: "March 2024",
    url: "https://drive.google.com/file/d/19Bny8fzvdR7idwk92yzzCH_JlQrWIpKl/view?usp=sharing",
    skills: ["Network Security", "Threat Detection", "Risk Management"],
    description:
      "Gained practical experience in identifying and mitigating cyber threats. Explored real-world security operations and threat analysis tools."
  },
  {
    name: "Android Developer Virtual Internship",
    issuer: "Google for Developers",
    date: "Jan 2024",
    url: "https://drive.google.com/file/d/1S9tyo7eG-JtskWQy7LTP-yC9QsA9TU_F/view?usp=drive_link",
    skills: ["Android", "Kotlin", "UI Design"],
    description:
      "Built hands-on Android app prototypes using Kotlin and Android Studio. Learned app lifecycle, UI/UX design, and publishing essentials."
  }
];

const VirtualInternshipsSection = () => {
  return (
    <section id="internships" className="py-20 bg-secondary/20">
      <div className="section-container">
        <h2 className="section-title text-center">Virtual Internships</h2>
        <p className="text-center text-white-600 mb-12 max-w-3xl mx-auto">
          Industry-recognized virtual internships that enhanced my hands-on experience in key tech domains.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {internships.map((internship, index) => (
            <Card key={index} className="card-hover animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{internship.name}</CardTitle>
                    <p className="text-primary font-medium">{internship.issuer}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {internship.date}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {internship.skills.map(skill => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                  <a 
                    href={internship.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                <p className="text-muted-foreground text-sm mt-2">
                  {internship.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VirtualInternshipsSection;
