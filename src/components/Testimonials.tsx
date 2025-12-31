import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Camila Santos",
    role: "Perdeu 15kg",
    content: "A Erika mudou minha vida! Em 4 meses consegui emagrecer de forma saudável, sem passar fome. O acompanhamento dela é incrível e super personalizado.",
    rating: 5,
  },
  {
    name: "Fernanda Lima",
    role: "Reeducação Alimentar",
    content: "Finalmente entendi que dieta não precisa ser sofrimento. A Erika me ensinou a comer bem e hoje tenho muito mais energia e disposição no dia a dia.",
    rating: 5,
  },
  {
    name: "Juliana Oliveira",
    role: "Ganho de Massa",
    content: "Buscava ganhar massa muscular e a Erika montou um plano perfeito para mim. Resultados visíveis em poucas semanas! Recomendo demais.",
    rating: 5,
  },
  {
    name: "Mariana Costa",
    role: "Perdeu 8kg",
    content: "Atendimento humanizado de verdade! A Erika se preocupa com cada detalhe e adapta tudo à nossa rotina. Me sinto acolhida em cada consulta.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-gradient-soft relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 md:w-64 h-32 md:h-64 bg-rose-light/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-24 md:w-48 h-24 md:h-48 bg-sage-light/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold">
            O que minhas{" "}
            <span className="text-gradient">pacientes</span> dizem
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Histórias reais de transformação e conquistas de quem confiou no meu trabalho.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-all duration-500 border border-border/50 hover:border-primary/30"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6">
                <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary/20 group-hover:text-primary/30 transition-colors" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display text-lg md:text-xl font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm md:text-base">{testimonial.name}</p>
                  <p className="text-xs md:text-sm text-accent">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
