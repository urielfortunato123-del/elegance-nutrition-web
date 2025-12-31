import { Award, GraduationCap, Heart } from "lucide-react";
import erikaPhoto from "@/assets/erika-profissional.png";

const About = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-48 md:w-96 h-48 md:h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-32 md:w-64 h-32 md:h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative mx-auto lg:mx-0 max-w-md lg:max-w-none">
            <div className="aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-elevated border border-primary/20">
              <img 
                src={erikaPhoto} 
                alt="Erika Passos - Nutricionista" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Floating Card - adjusted for mobile */}
            <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 bg-card/95 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-glow border border-primary/30">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-primary/20">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <div>
                  <p className="font-display text-xl sm:text-2xl font-semibold text-primary">+500</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Vidas Transformadas</p>
                </div>
              </div>
            </div>

            {/* Decorative circles - hidden on mobile */}
            <div className="hidden md:block absolute -top-4 -left-4 w-24 h-24 border border-primary/20 rounded-full" />
            <div className="hidden md:block absolute -top-8 -left-8 w-32 h-32 border border-primary/10 rounded-full" />
          </div>

          {/* Content Side */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-3 md:space-y-4">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Conheça a Profissional
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                Nutrição com{" "}
                <span className="text-gradient">Ciência</span> e{" "}
                <span className="text-gradient">Amor</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Sou Erika Passos, nutricionista apaixonada por ajudar pessoas a conquistarem uma 
              relação saudável e prazerosa com a alimentação. Acredito que cada 
              pessoa é única e merece um atendimento personalizado.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Minha missão é guiar você em uma jornada de transformação, onde 
              comer bem se torna algo natural e sustentável, não uma obrigação 
              ou fonte de estresse.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2 md:pt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors text-left">
                <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-sm sm:text-base">Formação Especializada</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Nutrição Clínica e Esportiva</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors text-left">
                <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-sm sm:text-base">Atendimento Humanizado</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Foco no seu bem-estar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
