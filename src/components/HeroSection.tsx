
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative hero-gradient">
      <div className="section-container flex flex-col items-center text-center lg:text-left lg:flex-row lg:justify-between">
        <div className="lg:max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: "0.2s" }}>
            I am Devansh!
          </h1>
          <div className="flex items-center justify-center lg:justify-start mb-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="brand-card rounded-full px-4 py-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary font-semibold text-sm">AWS Certified Cloud Practitioner</span>
            </div>
          </div>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
            AWS Certified Cloud Practitioner and final-year IT student specializing in backend development, system design, and scalable cloud-based application engineering.          </p>
        </div>

        <div className="mt-8 lg:mt-0 flex flex-col items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Avatar className="h-60 w-60 border-4 border-primary/20 brand-shadow hover:glow-effect transition-all duration-300 will-change-transform hover:scale-105 overflow-hidden">
            <AvatarImage
              src="ProfilePhoto.jpeg"
              alt="Devansh P. Dhopte"
              className="object-cover object-[50%_30%] w-full h-full"
              loading="eager"
            />
            <AvatarFallback>DP</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold mt-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Devansh P. Dhopte</h2>
        </div>
      </div>
      
      {/* Background elements with enhanced animation */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary-glow)/0.1),transparent_70%)] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--primary)/0.08),transparent_70%)] pointer-events-none animate-float"></div>
    </section>
  );
};

export default HeroSection;
