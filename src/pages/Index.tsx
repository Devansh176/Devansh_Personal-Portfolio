
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ResumeSection from "@/components/ResumeSection";
import Footer from "@/components/Footer";
import CertificatesSection from "@/components/CertificatesSection";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollToTop from "@/components/ScrollToTop";
import CompetitiveProgrammingSection from "@/components/CompetitiveProgrammingSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ResumeSection />
      <ProjectsSection />
      <SkillsSection />
      <CompetitiveProgrammingSection />
      <CertificatesSection />
      <Footer />
      <ThemeToggle />
      <ScrollToTop />
    </div>
  );
};

export default Index;
