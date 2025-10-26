
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    const toggleVisibility = () => {
      if (timeoutId) return;

      timeoutId = setTimeout(() => {
        setIsVisible(window.scrollY > 300);
        timeoutId = null;
      }, 100);
    };

    // Use passive listener for better scroll performance
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 rounded-full shadow-lg bg-background/80 backdrop-blur-sm border-border hover:shadow-xl transition-all duration-300 will-change-transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Scroll to top"
      style={{ transform: 'translateZ(0)' }}
    >
      <ArrowUp className="h-5 w-5 text-primary" />
    </Button>
  );
};

export default ScrollToTop;
