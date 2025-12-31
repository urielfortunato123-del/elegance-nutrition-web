import { Leaf, Heart, Scale, Utensils, Sparkles, Clock } from "lucide-react";

const benefits = [
  {
    icon: Scale,
    title: "Emagrecimento Saudável",
    description: "Perca peso de forma sustentável, sem dietas restritivas ou efeito sanfona.",
  },
  {
    icon: Heart,
    title: "Saúde do Coração",
    description: "Melhore seus indicadores de saúde cardiovascular com alimentação adequada.",
  },
  {
    icon: Utensils,
    title: "Reeducação Alimentar",
    description: "Aprenda a fazer escolhas inteligentes para uma vida mais saudável.",
  },
  {
    icon: Leaf,
    title: "Alimentação Natural",
    description: "Priorize alimentos reais e nutritivos no seu dia a dia.",
  },
  {
    icon: Sparkles,
    title: "Mais Energia",
    description: "Sinta-se mais disposto e produtivo com a nutrição certa.",
  },
  {
    icon: Clock,
    title: "Resultados Duradouros",
    description: "Conquiste mudanças que permanecem para a vida toda.",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-24 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Por que escolher
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            Benefícios do{" "}
            <span className="text-gradient italic">Acompanhamento</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Uma nutrição adequada transforma não apenas seu corpo, mas toda sua qualidade de vida.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-8 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 inline-flex p-4 rounded-xl bg-sage-light group-hover:bg-primary/10 transition-colors duration-300">
                <benefit.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
