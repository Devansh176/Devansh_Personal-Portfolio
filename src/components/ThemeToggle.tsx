import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const activeDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    if (activeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    setIsDark(activeDark);
  }, []);

  const toggleTheme = () => {
    const currentlyDark = document.documentElement.classList.contains("dark");
    const newTheme = currentlyDark ? "light" : "dark";

    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
    setIsDark(!currentlyDark);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="fixed bottom-6 left-6 z-50 rounded-full shadow-lg bg-background/80 backdrop-blur-sm border-border hover:shadow-xl transition-all duration-300"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-500 animate-fade-in" />
      ) : (
        <Moon className="h-5 w-5 text-primary animate-fade-in" />
      )}
    </Button>
  );
};

export default ThemeToggle;
