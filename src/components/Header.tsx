import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-display text-2xl font-semibold text-foreground">
            Nutri<span className="text-primary">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre
            </button>
            <Button
              variant="hero"
              size="default"
              onClick={() => scrollToSection("cadastro")}
            >
              Agendar Consulta
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4 animate-fade-up">
            <button
              onClick={() => scrollToSection("beneficios")}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Sobre
            </button>
            <Button
              variant="hero"
              size="lg"
              className="w-full"
              onClick={() => scrollToSection("cadastro")}
            >
              Agendar Consulta
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
