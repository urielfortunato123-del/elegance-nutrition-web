import { Award, GraduationCap, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-sage-light via-cream to-gold-light overflow-hidden shadow-elevated">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                    <Heart className="h-16 w-16 text-primary" />
                  </div>
                  <p className="font-display text-2xl text-muted-foreground italic">
                    Sua foto aqui
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    (Substitua pela foto da nutricionista)
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-card border border-border/50">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-sage-light">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="font-display text-2xl font-semibold text-primary">+500</p>
                  <p className="text-sm text-muted-foreground">Vidas Transformadas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                Conheça a Profissional
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Nutrição com{" "}
                <span className="text-gradient italic">Ciência</span> e{" "}
                <span className="text-gradient-gold italic">Amor</span>
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
              <div className="flex items-start gap-3 p-4 rounded-xl bg-sage-light/50">
                <GraduationCap className="h-6 w-6 text-primary mt-1" />
                <div>
                  <p className="font-medium">Formação Especializada</p>
                  <p className="text-sm text-muted-foreground">Nutrição Clínica e Esportiva</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gold-light/50">
                <Heart className="h-6 w-6 text-accent mt-1" />
                <div>
                  <p className="font-medium">Atendimento Humanizado</p>
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
