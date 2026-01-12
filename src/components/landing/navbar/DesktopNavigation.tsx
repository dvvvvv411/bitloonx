
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import NavLink from "./NavLink";

interface DesktopNavigationProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

const DesktopNavigation = ({ activeSection, scrollToSection }: DesktopNavigationProps) => {
  return (
    <nav className="hidden md:flex items-center gap-1">
      <NavLink 
        active={activeSection === "hero"} 
        onClick={() => scrollToSection("hero")}
      >
        Home
      </NavLink>
      <NavLink 
        active={activeSection === "benefits"}
        onClick={() => scrollToSection("benefits")}
      >
        Vorteile
      </NavLink>
      <NavLink 
        active={activeSection === "cta"}
        onClick={() => scrollToSection("cta")}
      >
        Trading Bot
      </NavLink>
      <NavLink 
        active={activeSection === "testimonials"}
        onClick={() => scrollToSection("testimonials")}
      >
        Erfahrungen
      </NavLink>
      <NavLink 
        active={activeSection === "partners"}
        onClick={() => scrollToSection("partners")}
      >
        Partner
      </NavLink>
      
      {/* Decorative login button - no functionality */}
      <Button 
        className="ml-4 bg-gradient-to-r from-gold to-gold-light text-black font-medium hover:shadow-md hover:shadow-gold/20 transition-all cursor-default"
      >
        <LogIn className="mr-2 h-4 w-4" />
        Anmelden
      </Button>
    </nav>
  );
};

export default DesktopNavigation;
