export const WHATSAPP_NUMBER = "554892058347";
export const WHATSAPP_DISPLAY = "(48) 9205-8347";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const ASSETS = {
  logo: "/logo-wave-stay.png",
  portrait: "/joao-minosso.png",
  rouparia: "/images/rouparia-lavanderia.jpg",
  upsideMar: "/images/upside-frente-mar.jpg",
  limpezaAirbnb: "/images/limpeza-airbnb.jpg",
  limpezaPosObra: "/images/limpeza-pos-obra.jpg",
  limpezaResidencial: "/images/limpeza-residencial.jpg",
} as const;

export type NavItem = {
  href: string;
  label: string;
  icon: string;
  subtitle: string;
};

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Início", icon: "villa", subtitle: "Início" },
  { href: "/gestao", label: "Gestão", icon: "trending_up", subtitle: "Gestão Upside" },
  {
    href: "/lavanderia",
    label: "Lavanderia",
    icon: "local_laundry_service",
    subtitle: "Lavanderia",
  },
  {
    href: "/limpeza",
    label: "Limpeza",
    icon: "cleaning_services",
    subtitle: "Limpeza",
  },
];

export type ServiceCard = {
  href: string;
  icon: string;
  badge: string;
  badgeTone: "sand" | "muted";
  title: string;
  description: string;
  cta: string;
  meta: string;
};

export const SERVICE_CARDS: ServiceCard[] = [
  {
    href: "/gestao",
    icon: "trending_up",
    badge: "Upside Home Club",
    badgeTone: "sand",
    title: "Como rentabilizar meu apartamento",
    description:
      "Gestão completa de temporada, taxa competitiva de 18%, anfitrião dedicado 24h e painel exclusivo para acompanhamento em tempo real.",
    cta: "Ver gestão de temporada",
    meta: "Rentabilidade Máxima",
  },
  {
    href: "/lavanderia",
    icon: "local_laundry_service",
    badge: "Estrutura Hoteleira",
    badgeTone: "muted",
    title: "Como funciona nossa lavanderia",
    description:
      "Estrutura industrial própria e suporte operacional exclusivo para higienização e padronização impecável de enxovais Airbnb.",
    cta: "Conhecer estrutura da lavanderia",
    meta: "Padrão 5 Estrelas",
  },
  {
    href: "/limpeza",
    icon: "cleaning_services",
    badge: "Barra Velha a Penha",
    badgeTone: "muted",
    title: "Serviços de limpeza profissional",
    description:
      "Equipe capacitada com protocolos minuciosos para limpeza Residencial, Pós-Obra e Turnaround rápido entre hóspedes.",
    cta: "Ver serviços e orçamentos",
    meta: "Checklists Rigorosos",
  },
];

export function whatsappLink(text?: string) {
  if (!text) return WHATSAPP_URL;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
}
