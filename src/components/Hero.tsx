import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-nutrition.jpg";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("cadastro")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Alimentos saudáveis e nutritivos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-sage-light border border-sage-medium/30 text-sm font-medium text-primary">
              ✨ Nutrição com Amor e Ciência
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="animate-fade-up-delay-1 font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight">
            Transforme sua{" "}
            <span className="text-gradient italic">Saúde</span>
            <br />
            com Alimentação Consciente
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Descubra como uma alimentação equilibrada pode mudar sua vida. 
            Atendimento personalizado para você alcançar seus objetivos de forma saudável e sustentável.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={scrollToForm}
              className="group"
            >
              Quero Começar Agora
              <ArrowDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
            </Button>
            <Button 
              variant="elegant" 
              size="lg"
              onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
            >
              Saiba Mais
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-up-delay-4 flex flex-wrap justify-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Atendimento Humanizado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Resultados Comprovados</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Plano Personalizado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
