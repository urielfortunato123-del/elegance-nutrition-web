import { Heart, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-semibold">Nutricionista</h3>
            <p className="text-primary-foreground/70 leading-relaxed">
              Transformando vidas através da nutrição consciente e personalizada.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Navegação</h4>
            <nav className="flex flex-col gap-2">
              <a href="#beneficios" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Benefícios
              </a>
              <a href="#sobre" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Sobre
              </a>
              <a href="#cadastro" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Agendar Consulta
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Contato</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                (11) 99999-9999
              </a>
              <a 
                href="mailto:contato@nutricionista.com"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                contato@nutricionista.com
              </a>
              <a 
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
                @nutricionista
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Nutricionista. Todos os direitos reservados.
          </p>
          <p className="text-sm text-primary-foreground/60 flex items-center gap-1">
            Feito com <Heart className="h-4 w-4 text-accent fill-accent" /> para você
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
