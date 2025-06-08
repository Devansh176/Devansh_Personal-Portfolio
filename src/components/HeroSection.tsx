
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative bg-gradient-to-b from-background to-secondary/20 dark:from-background dark:to-primary/5">
      <div className="section-container flex flex-col items-center text-center lg:text-left lg:flex-row lg:justify-between">
        <div className="lg:max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-primary animate-fade-in" style={{ animationDelay: "0.2s" }}>
            I am Devansh !!
          </h1>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Fourth-year IT student at Ramdeobaba College of Engineering and Management, building robust software solutions and actively seeking opportunities to contribute to real-world development projects, expand my technical skill set, and drive innovation in software engineering.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in mb-6" style={{ animationDelay: "0.6s" }}>
            {/* Contact Me button removed as requested */}
          </div>
        </div>

        <div className="mt-8 lg:mt-0 flex flex-col items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <Avatar className="h-60 w-60 border-4 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
          <AvatarImage
            src="ProfilePhoto.jpeg"
            alt="Devansh P. Dhopte"
            className="object-cover object-[50%_30%] w-full h-full"
          />
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
