import { Button } from "@/components/ui/button";
import { Check, MessageCircle } from "lucide-react";
import erikaPhoto from "@/assets/erika-hero.png";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("cadastro")?.scrollIntoView({ behavior: "smooth" });
  };

  const benefits = [
    "Já tentaram emagrecer e não conseguiram",
    "Possuem uma rotina corrida",
    "Querem uma alimentação saudável e prática",
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-[40%] w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-[20%] w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen">
          {/* Content Side */}
          <div className="relative z-10 space-y-8 lg:pr-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="animate-fade-up font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
                <span className="text-gradient">Emagreça</span> e Ganhe Saúde
                <br />
                <span className="text-foreground/90">Sem Dietas Malucas.</span>
              </h1>
              <h2 className="animate-fade-up-delay-1 font-display text-2xl md:text-3xl lg:text-4xl font-medium text-foreground/80">
                Resultados Reais Para{" "}
                <span className="text-primary">Mulheres</span> com Rotinas Reais.
              </h2>
            </div>

            {/* Description */}
            <p className="animate-fade-up-delay-2 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Trabalhando os <span className="text-primary font-semibold">pilares essenciais</span> da 
              nutrição: alimentação equilibrada, praticidade e bem-estar. 
              Vou ajudar você a conquistar o corpo dos sonhos em um{" "}
              <span className="text-foreground font-medium">dia a dia muito corrido</span>.
            </p>

            {/* Benefits List */}
            <div className="animate-fade-up-delay-3 space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                Para mulheres que:
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground/90">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="animate-fade-up-delay-4 pt-4">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={scrollToForm}
                className="group w-full sm:w-auto"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                QUERO COMEÇAR MINHA TRANSFORMAÇÃO
              </Button>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-1/2 flex items-center justify-center lg:justify-end">
            {/* Decorative circle behind */}
            <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] rounded-full border border-primary/20 animate-pulse-soft" />
            <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] rounded-full border border-primary/10" />
            
            {/* Main Image */}
            <div className="relative z-10">
              <img 
                src={erikaPhoto} 
                alt="Erika Passos - Nutricionista" 
                className="w-[300px] h-[400px] md:w-[400px] md:h-[550px] lg:w-[450px] lg:h-[600px] object-cover object-top rounded-t-full shadow-elevated"
              />
              
              {/* Floating badge */}
              <div className="absolute -left-4 bottom-32 bg-card/90 backdrop-blur-sm border border-primary/30 rounded-2xl p-4 shadow-glow animate-float">
                <p className="font-display text-3xl font-bold text-primary">+500</p>
                <p className="text-sm text-foreground/80">Vidas Transformadas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
