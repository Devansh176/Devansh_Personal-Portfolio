
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative bg-gradient-to-b from-background to-secondary/20 dark:from-background dark:to-primary/5">
      <div className="section-container flex flex-col items-center text-center lg:text-left lg:flex-row lg:justify-between">
        <div className="lg:max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-primary animate-fade-in" style={{ animationDelay: "0.2s" }}>
            I am Devansh
          </h1>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Pursuing IT at Ramdeobaba College of Engineering and Management.
            Currently in my 3rd year and actively looking for opportunities as a fresher in software development.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in mb-6" style={{ animationDelay: "0.6s" }}>
            {/* Contact Me button removed as requested */}
          </div>
        </div>

        <div className="mt-8 lg:mt-0 flex flex-col items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Avatar className="h-48 w-48 border-4 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <AvatarImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" alt="Devansh P. Dhopte" />
            <AvatarFallback>DP</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold mt-4 text-primary">Devansh P. Dhopte</h2>
        </div>
      </div>
      
      {/* Background elements with enhanced animation */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(126,159,75,0.1),transparent_70%)] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,rgba(126,159,75,0.08),transparent_70%)] pointer-events-none animate-float"></div>
    </section>
  );
};

export default HeroSection;
