import { Heart, Instagram, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 md:py-16 bg-card border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div className="space-y-3 md:space-y-4 text-center sm:text-left">
            <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
              Erika Passos<span className="text-primary">.</span>
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Nutricionista transformando vidas através da nutrição consciente e personalizada.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 md:space-y-4 text-center sm:text-left">
            <h4 className="font-medium text-base md:text-lg text-foreground">Navegação</h4>
            <nav className="flex flex-col gap-2">
              <a href="#beneficios" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">
                Metodologia
              </a>
              <a href="#sobre" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">
                Sobre
              </a>
              <a href="#depoimentos" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">
                Depoimentos
              </a>
              <a href="#cadastro" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">
                Agendar Consulta
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-3 md:space-y-4 text-center sm:text-left sm:col-span-2 md:col-span-1">
            <h4 className="font-medium text-base md:text-lg text-foreground">Contato</h4>
            <div className="flex flex-col gap-2 md:gap-3 items-center sm:items-start">
              <a 
                href="https://wa.me/5588920007220" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                (88) 92000-7220
              </a>
              <a 
                href="https://instagram.com/erikapassosnutri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
                @erikapassosnutri
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Erika Passos Nutricionista. Todos os direitos reservados.
          </p>
          <p className="text-xs md:text-sm text-muted-foreground flex items-center gap-1">
            Feito com <Heart className="h-3 w-3 md:h-4 md:w-4 text-primary fill-primary" /> para você
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
