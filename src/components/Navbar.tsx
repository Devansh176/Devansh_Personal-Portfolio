
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, Code, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Resume", href: "#resume" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "CP Stats", href: "#cp-stats" },
  {name : "Internships", href: "#internships"},
  { name: "Certificates", href: "#certificates" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/90 dark:bg-background/80 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center gap-3">
            <img 
              src="cartoon.jpg"
              className="w-20 h-20 rounded-full object-cover border border-primary"
            />
          </a>

          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors hover:scale-105 transform duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://github.com/Devansh176"
              target="_blank"
              rel="noopener noreferrer" 
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors hover:scale-110 transition-transform duration-300"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4 text-primary" />
            </a>
            <a 
              href="https://linkedin.com/in/devansh-dhopte"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors hover:scale-110 transition-transform duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4 text-primary" />
            </a>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=devanshdhopte@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors hover:scale-110 transition-transform duration-300"
              aria-label="Email">
              <Mail className="h-4 w-4 text-primary" />
            </a>
            <a 
              href="https://codolio.com/profile/Devansh176"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors hover:scale-110 transition-transform duration-300"
              aria-label="Codolio"
            >
              <span className="text-sm font-medium text-primary">Codolio</span>
              <ExternalLink className="h-3 w-3 text-primary" />
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground/80"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="block py-2 text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-border">
              <a 
                href="https://github.com/devansh176"
                target="_blank"
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Github className="h-4 w-4 text-primary" />
              </a>
              <a 
                href="https://linkedin.com/in/devansh-dhopte"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="h-4 w-4 text-primary" />
              </a>
              <a 
                href="mailto:devanshdhopte@gmail.com"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Mail className="h-4 w-4 text-primary" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
