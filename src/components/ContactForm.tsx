import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const objectives = [
  { id: "emagrecer", label: "Emagrecer", emoji: "🎯" },
  { id: "massa", label: "Ganhar Massa", emoji: "💪" },
  { id: "saude", label: "Melhorar Saúde", emoji: "❤️" },
  { id: "energia", label: "Mais Energia", emoji: "⚡" },
  { id: "reeducacao", label: "Reeducação Alimentar", emoji: "🥗" },
  { id: "outro", label: "Outro", emoji: "✨" },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    objetivo: "",
    mensagem: "",
  });
  const [selectedObjective, setSelectedObjective] = useState<string | null>(null);

  const handleObjectiveSelect = (id: string, label: string) => {
    setSelectedObjective(id);
    setFormData({ ...formData, objetivo: label });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.telefone || !formData.objetivo) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha seu nome, telefone e selecione um objetivo.",
        variant: "destructive",
      });
      return;
    }

    // Format message for WhatsApp
    const message = `Oii Erika! Tudo bem? 😊

Meu nome é *${formData.nome}* e encontrei seu site!

🎯 *Meu objetivo principal:* ${formData.objetivo}
${formData.mensagem ? `\n💬 *Um pouco sobre mim:* ${formData.mensagem}` : ""}

Gostaria de saber mais sobre como funciona o seu acompanhamento nutricional e como podemos começar minha transformação! 🌟

Aguardo seu retorno! 💚`;

    // WhatsApp da Erika Passos
    const whatsappNumber = "5588920007220";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    toast({
      title: "Redirecionando para o WhatsApp! 📱",
      description: "Você será direcionado para iniciar uma conversa.",
    });

    // Redirect to WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1000);
  };

  return (
    <section id="cadastro" className="py-16 md:py-24 bg-rose-light/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-20 left-10 w-32 md:w-64 h-32 md:h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-24 md:w-48 h-24 md:h-48 bg-sage-light/50 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12 space-y-3 md:space-y-4">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-accent uppercase tracking-wider">
              <MessageCircle className="h-4 w-4" />
              Comece sua Transformação
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold">
              Vamos{" "}
              <span className="text-gradient">Conversar?</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
              Preencha o formulário abaixo e você será redirecionado para o WhatsApp 
              para dar o primeiro passo rumo à sua melhor versão.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-card rounded-2xl md:rounded-3xl shadow-elevated p-6 sm:p-8 md:p-12 border border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-sm sm:text-base font-medium text-foreground">
                    Seu Nome *
                  </Label>
                  <Input
                    id="nome"
                    placeholder="Como posso te chamar?"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="h-11 sm:h-12 rounded-lg sm:rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone" className="text-sm sm:text-base font-medium text-foreground">
                    WhatsApp *
                  </Label>
                  <Input
                    id="telefone"
                    placeholder="(00) 00000-0000"
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    className="h-11 sm:h-12 rounded-lg sm:rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>
              </div>

              {/* Objectives Selection */}
              <div className="space-y-3 md:space-y-4">
                <Label className="text-sm sm:text-base font-medium text-foreground">
                  Qual seu principal objetivo? *
                </Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                  {objectives.map((obj) => (
                    <button
                      key={obj.id}
                      type="button"
                      onClick={() => handleObjectiveSelect(obj.id, obj.label)}
                      className={`relative p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 text-left transition-all duration-300 ${
                        selectedObjective === obj.id
                          ? "border-primary bg-rose-light shadow-soft"
                          : "border-border bg-background hover:border-primary/50"
                      }`}
                    >
                      {selectedObjective === obj.id && (
                        <CheckCircle2 className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      )}
                      <span className="text-xl sm:text-2xl block mb-1">{obj.emoji}</span>
                      <span className="text-xs sm:text-sm font-medium text-foreground">{obj.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="mensagem" className="text-sm sm:text-base font-medium text-foreground">
                  Quer contar mais? (opcional)
                </Label>
                <Textarea
                  id="mensagem"
                  placeholder="Conte um pouco sobre você, seus desafios ou dúvidas..."
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  className="min-h-[100px] sm:min-h-[120px] rounded-lg sm:rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="hero" size="xl" className="w-full group text-sm sm:text-base">
                <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Agende sua Consulta
                <Send className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <p className="text-center text-xs sm:text-sm text-muted-foreground">
                🔒 Seus dados estão seguros e não serão compartilhados.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
