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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero pt-20 lg:pt-0">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[40%] w-48 md:w-96 h-48 md:h-96 bg-rose-light/50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-[20%] w-32 md:w-64 h-32 md:h-64 bg-sage-light/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-0">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-8 items-center min-h-[calc(100vh-80px)] lg:min-h-screen">
          
          {/* Image Side - Mobile First (appears on top on mobile) */}
          <div className="relative order-1 lg:order-2 lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-1/2 flex items-center justify-center">
            {/* Decorative circles - smaller on mobile */}
            <div className="hidden md:block absolute right-[10%] top-1/2 -translate-y-1/2 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] rounded-full border border-primary/20 animate-pulse-soft" />
            <div className="hidden md:block absolute right-[10%] top-1/2 -translate-y-1/2 w-[250px] lg:w-[450px] h-[250px] lg:h-[450px] rounded-full border border-accent/20" />
            
            {/* Main Image */}
            <div className="relative z-10">
              <img 
                src={erikaPhoto} 
                alt="Erika Passos - Nutricionista" 
                className="w-[220px] h-[300px] sm:w-[280px] sm:h-[380px] md:w-[350px] md:h-[480px] lg:w-[400px] lg:h-[550px] xl:w-[450px] xl:h-[600px] object-cover object-top rounded-t-full shadow-elevated"
              />
              
              {/* Floating badge - adjusted for mobile */}
              <div className="absolute -left-2 sm:-left-4 bottom-16 sm:bottom-24 lg:bottom-32 bg-card/95 backdrop-blur-sm border border-primary/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-card animate-float">
                <p className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-primary">+500</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Vidas Transformadas</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="relative z-10 space-y-6 lg:space-y-8 order-2 lg:order-1 lg:pr-8 text-center lg:text-left">
            {/* CRN Badge */}
            <div className="animate-fade-up">
              <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider">
                CRN: XXXXX
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3 lg:space-y-4">
              <p className="animate-fade-up font-display text-2xl sm:text-3xl text-muted-foreground">
                Nutricionista
              </p>
              <h1 className="animate-fade-up-delay-1 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight text-foreground">
                Erika Passos
              </h1>
              <h2 className="animate-fade-up-delay-2 font-display text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground">
                Emagrecimento, Performance,{" "}
                <span className="text-primary">Bem-estar</span> e Qualidade de Vida
              </h2>
            </div>

            {/* Benefits List */}
            <div className="animate-fade-up-delay-3 space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3 lg:mb-4">
                Para mulheres que:
              </p>
              <ul className="space-y-2 sm:space-y-3 inline-block text-left">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground/80 text-sm sm:text-base">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="animate-fade-up-delay-4 pt-2 lg:pt-4">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={scrollToForm}
                className="group w-full sm:w-auto text-sm sm:text-base"
              >
                Agende sua Consulta
                <MessageCircle className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
