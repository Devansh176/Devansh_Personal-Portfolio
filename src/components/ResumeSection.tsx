
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Download } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 bg-background dark:bg-background/60">
      <div className="section-container">
        <h2 className="section-title text-center">Resume</h2>
        <p className="text-center text-foreground/80 mb-12 max-w-3xl mx-auto">
          Take a look at my complete professional profile and experience.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 mb-12 bg-card/70 backdrop-blur-sm border border-border/50">
            <CardHeader>
              <CardTitle>My Professional Resume</CardTitle>
              <CardDescription>
                Download my resume or view it online to learn more about my education and skills.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row justify-center gap-4">
              <Button 
                className="flex items-center gap-2 hover:scale-105 transition-transform duration-300 rounded-full shadow-md hover:shadow-lg" 
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  View Online <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center gap-2 hover:scale-105 transition-transform duration-300 rounded-full" 
                asChild
              >
                <a href="#" download>
                  Download PDF <Download className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
          
          <div className="mt-12">
            <Card className="card-hover shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/70 backdrop-blur-sm border border-border/50">
              <CardHeader className="border-b border-border/30 bg-primary/5">
                <CardTitle className="text-center">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="text-center">
                  <h4 className="text-xl font-medium">Bachelor of Engineering in Information Technology</h4>
                  <p className="text-primary mt-1">Ramdeobaba College of Engineering and Management</p>
                  <p className="text-sm text-muted-foreground mt-1">2021 - 2025</p>
                  <p className="mt-3">Currently in 3rd year with focus on software development and system design.</p>
                </div>
                
                <div className="text-center">
                  <h4 className="text-xl font-medium">Higher Secondary Education</h4>
                  <p className="text-primary mt-1">Shivaji Science College</p>
                  <p className="text-sm text-muted-foreground mt-1">2019 - 2021</p>
                </div>
                
                <div className="text-center">
                  <h4 className="text-xl font-medium">Secondary Education</h4>
                  <p className="text-primary mt-1">Mount Carmel High School</p>
                  <p className="text-sm text-muted-foreground mt-1">Completed 2019</p>
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
