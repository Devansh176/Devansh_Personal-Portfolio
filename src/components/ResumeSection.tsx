import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Download } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 bg-background dark:bg-background/60">
      <div className="section-container">
        <h2 className="section-title text-center">Resume</h2>
        <p className="text-center text-foreground/80 mb-12 max-w-3xl mx-auto">
          Take a look at my complete professional profile.
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
                <a href="DevanshDhopte_FullResume.pdf">
                  View Online <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
          
          <div className="mt-12">
            <Card className="card-hover shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/70 backdrop-blur-sm border border-border/50">
              <CardHeader className="border-b border-border/30 bg-primary/5">
                <CardTitle className="text-center">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-10 pt-10 pb-8"> {/* Increased spacing */}
                <div className="text-center space-y-2">
                  <h4 className="text-xl font-medium">Bachelor of Engineering in Information Technology</h4>
                  <p className="text-primary">Shri Ramdeobaba College of Engineering and Management</p>
                  <p className="text-sm text-muted-foreground">2022 - 2026</p>
                </div>
                
                <div className="text-center space-y-2">
                  <h4 className="text-xl font-medium">Higher Secondary Education</h4>
                  <p className="text-primary">Dharampeth Science College</p>
                  <p className="text-sm text-muted-foreground">2020 - 2022</p>
                </div>
                
                <div className="text-center space-y-2">
                  <h4 className="text-xl font-medium">Secondary Education</h4>
                  <p className="text-primary">St. Xavier's High School</p>
                  <p className="text-sm text-muted-foreground">Completed 2020</p>
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
