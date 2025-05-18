
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-gray-400 text-sm">
            © {currentYear} Devansh P. Dhopte. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
