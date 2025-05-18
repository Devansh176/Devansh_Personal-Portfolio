
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-primary text-primary-foreground py-20">
      <div className="section-container">
        <h2 className="section-title text-center text-primary-foreground">Contact Me</h2>
        <p className="text-center text-primary-foreground/80 mb-12 max-w-3xl mx-auto">
          Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <Card className="lg:col-span-3 bg-white text-foreground">
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>
                I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" placeholder="Subject" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" placeholder="Your message" rows={5} />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Send Message</Button>
            </CardFooter>
          </Card>
          
          <div className="lg:col-span-2 space-y-4">
            <Card className="bg-white/10 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription className="text-white/70">
                  Here's how you can reach me
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5" />
                  <span>contact@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="h-5 w-5" />
                  <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    github.com/username
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="h-5 w-5" />
                  <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    linkedin.com/in/username
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Let's Connect</CardTitle>
                <CardDescription className="text-white/70">
                  Open to new opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Whether you have a project in mind or just want to chat, I'm always open to discussing new opportunities and ideas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
