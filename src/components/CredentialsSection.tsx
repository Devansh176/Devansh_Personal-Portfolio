import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Calendar, Shield } from "lucide-react";

const CredentialsSection = () => {
  return (
    <section id="credentials" className="py-20 bg-gradient-to-r from-primary/5 to-secondary/10">
      <div className="section-container">
        <h2 className="section-title text-center mb-4">AWS Certification</h2>
        <p className="text-center text-foreground/80 mb-12 max-w-3xl mx-auto">
          Certified cloud professional with proven expertise in AWS cloud technologies and infrastructure.
        </p>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5 shadow-xl hover:shadow-2xl transition-all duration-300 will-change-transform" style={{ transform: 'translateZ(0)' }}>
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <img 
                    src="/my-aws-certificate.png" 
                    alt="AWS Certified Cloud Practitioner Certificate - Devansh Dhopte" 
                    className="max-w-md w-full h-auto rounded-lg shadow-lg"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute -top-2 -right-2 bg-primary text-white rounded-full p-2">
                    <Award className="h-6 w-6" />
                  </div>
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-primary mb-2">
                AWS Certified Cloud Practitioner
              </CardTitle>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  <Shield className="h-3 w-3 mr-1" />
                  Cloud Professional
                </Badge>
                <Badge variant="outline" className="border-primary/30">
                  <Calendar className="h-3 w-3 mr-1" />
                  Valid until 2028
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="text-center space-y-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-primary">Core Competencies</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="outline">Cloud Concepts</Badge>
                  <Badge variant="outline">AWS Core Services</Badge>
                  <Badge variant="outline">Security & Compliance</Badge>
                  <Badge variant="outline">Billing & Pricing</Badge>
                  <Badge variant="outline">Support Plans</Badge>
                </div>
              </div>

              <Button 
                variant="outline" 
                className="flex items-center gap-2 mx-auto hover:bg-primary hover:text-white transition-colors"
                asChild
              >
                <a 
                  href="https://aws.amazon.com/verification" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Verify Certificate <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;