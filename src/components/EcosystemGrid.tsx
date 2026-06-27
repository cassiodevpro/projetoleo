import ServiceCard from "./ServiceCard";

const services = [
  {
    badge: "Conveniência",
    title: "24H & Express",
    description:
      "Lojas híbridas e contêineres 100% autônomos. Operação presencial em horário comercial e atendimento automatizado via inteligência artificial durante a madrugada.",
    imageUrl:
      "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Loja Autônoma",
    buttonLabel: "Agendar Visitação",
    buttonIcon: "fa-regular fa-calendar-days",
  },
  {
    badge: "Totens",
    title: "Smart Box",
    description:
      "Totens compactos abertos para autoatendimento em pontos comerciais. Modelo de compra ou comodato focado em gerar receita passiva imediata.",
    imageUrl:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Totem Autoatendimento",
    buttonLabel: "Solicitar Totem",
    buttonIcon: "fa-regular fa-calendar-days",
  },
  {
    badge: "Tecnologia",
    title: "Smart Sistemas",
    description:
      "PDV integrado com tecnologia Saurus, ERP completo, Self-Checkout, SmartTEF e fornecimento completo de insumos como bobinas e etiquetas.",
    imageUrl:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Software de Gestão",
    buttonLabel: "Agendar Demonstração",
    buttonIcon: "fa-regular fa-calendar-days",
  },
  {
    badge: "Suporte",
    title: "Smart Service",
    description:
      "Laboratório especializado em assistência técnica e manutenção de frotas de smartphones e tablets para o mercado corporativo (B2B) e cliente final (B2C).",
    imageUrl:
      "https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Assistência Técnica",
    buttonLabel: "Solicitar Orçamento",
    buttonIcon: "fa-regular fa-calendar-days",
  },
  {
    badge: "Marketing",
    title: "Smart Play",
    description:
      "Plataforma de rádio indoor inteligente. Playlists dinâmicas e inserções comerciais personalizadas no momento exato para potencializar as vendas do seu PDV.",
    imageUrl:
      "https://images.unsplash.com/photo-1610433572201-110753c6cff9?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Rádio Indoor",
    buttonLabel: "Testar 7 Dias Grátis",
    buttonIcon: "fa-regular fa-calendar-days",
  },
  {
    badge: "Comunicação",
    title: "Smart Design",
    description:
      "Gráfica rápida corporativa para a sua empresa. Impressão de cartões de visita com acabamento premium, panfletos, lonas e sinalização completa de fachadas.",
    imageUrl:
      "https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Gráfica Rápida",
    buttonLabel: "Falar com Atendente",
    buttonIcon: "fa-brands fa-whatsapp",
  },
];

export default function EcosystemGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-[5%] pb-24 max-w-[1400px] mx-auto">
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </section>
  );
}
