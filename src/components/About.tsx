import { Award, GraduationCap, Heart } from "lucide-react";
import erikaPhoto from "@/assets/erika-profissional.png";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated border border-primary/20">
              <img 
                src={erikaPhoto} 
                alt="Erika Passos - Nutricionista" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card/95 backdrop-blur-sm p-6 rounded-2xl shadow-glow border border-primary/30">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/20">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="font-display text-2xl font-semibold text-primary">+500</p>
                  <p className="text-sm text-muted-foreground">Vidas Transformadas</p>
                </div>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-primary/20 rounded-full" />
            <div className="absolute -top-8 -left-8 w-32 h-32 border border-primary/10 rounded-full" />
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Conheça a Profissional
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Nutrição com{" "}
                <span className="text-gradient">Ciência</span> e{" "}
                <span className="text-gradient">Amor</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou Erika Passos, nutricionista apaixonada por ajudar pessoas a conquistarem uma 
              relação saudável e prazerosa com a alimentação. Acredito que cada 
              pessoa é única e merece um atendimento personalizado.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Minha missão é guiar você em uma jornada de transformação, onde 
              comer bem se torna algo natural e sustentável, não uma obrigação 
              ou fonte de estresse.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                <GraduationCap className="h-6 w-6 text-primary mt-1" />
                <div>
                  <p className="font-medium text-foreground">Formação Especializada</p>
                  <p className="text-sm text-muted-foreground">Nutrição Clínica e Esportiva</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                <Heart className="h-6 w-6 text-primary mt-1" />
                <div>
                  <p className="font-medium text-foreground">Atendimento Humanizado</p>
                  <p className="text-sm text-muted-foreground">Foco no seu bem-estar</p>
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
