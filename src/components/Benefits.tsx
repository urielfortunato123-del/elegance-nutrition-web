import { Apple, Heart, Sparkles } from "lucide-react";

const Benefits = () => {
  const pillars = [
    {
      icon: Apple,
      title: "Alimentação",
      description: "Planos alimentares práticos e saborosos, adaptados à sua rotina e preferências pessoais.",
    },
    {
      icon: Heart,
      title: "Bem-estar",
      description: "Foco na sua saúde integral, equilibrando corpo e mente para resultados duradouros.",
    },
    {
      icon: Sparkles,
      title: "Transformação",
      description: "Acompanhamento contínuo para você conquistar e manter seus objetivos de forma sustentável.",
    },
  ];

  return (
    <section id="beneficios" className="py-16 md:py-24 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Minha Metodologia
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold px-2">
            Seu acompanhamento será baseado em{" "}
            <span className="text-gradient">3 pilares</span> principais
          </h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative bg-background border border-border/50 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-card"
            >
              {/* Icon */}
              <div className="mb-4 md:mb-6 inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-rose-light border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <pillar.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-foreground group-hover:text-primary transition-colors">
                {pillar.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>

              {/* Decorative number */}
              <div className="absolute top-4 md:top-6 right-4 md:right-6 font-display text-5xl md:text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
