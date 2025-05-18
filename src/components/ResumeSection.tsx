
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Download } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20">
      <div className="section-container">
        <h2 className="section-title text-center">Resume</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Take a look at my complete professional profile and experience.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <CardTitle>My Professional Resume</CardTitle>
              <CardDescription>
                Download my resume or view it online to learn more about my experience, education, and skills.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row justify-center gap-4">
              <Button className="flex items-center gap-2" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  View Online <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <a href="#" download>
                  Download PDF <Download className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium">Master of Science in Computer Science</h4>
                  <p className="text-primary">Stanford University</p>
                  <p className="text-sm text-muted-foreground">2016 - 2018</p>
                </div>
                <div>
                  <h4 className="font-medium">Bachelor of Engineering in Software Engineering</h4>
                  <p className="text-primary">MIT</p>
                  <p className="text-sm text-muted-foreground">2012 - 2016</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium">Google Associate Android Developer</h4>
                  <p className="text-sm text-muted-foreground">2020</p>
                </div>
                <div>
                  <h4 className="font-medium">AWS Certified Solutions Architect</h4>
                  <p className="text-sm text-muted-foreground">2021</p>
                </div>
                <div>
                  <h4 className="font-medium">Kubernetes Certified Application Developer</h4>
                  <p className="text-sm text-muted-foreground">2022</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
