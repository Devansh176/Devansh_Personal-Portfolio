
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative bg-gradient-to-b from-white to-blue-50">
      <div className="section-container flex flex-col items-center text-center lg:text-left lg:items-start">
        <div className="lg:max-w-3xl">
          <p className="text-accent font-medium mb-4 animate-fade-in">Hello, I'm a</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-primary animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Software Engineer
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
            I build exceptional digital products with a focus on user experience and performance.
            Specializing in Android development and backend systems.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button onClick={scrollToProjects} className="rounded-full px-6">
              View Projects
            </Button>
            <Button variant="outline" className="rounded-full px-6">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-pulse-slow">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={scrollToProjects}
          className="rounded-full"
        >
          <ArrowDown className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Background elements */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
