import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/icon";
import { WhatsappButton } from "@/components/whatsapp-button";
import { ASSETS, WHATSAPP_DISPLAY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Lavanderia",
  description:
    "Lavanderia operacional própria da Wave Stay para enxovais de temporada em Balneário Piçarras.",
};

const PILLARS = [
  {
    icon: "electric_bolt",
    title: "Agilidade máxima no turnover",
    body: "Troca entre check-out e check-in sem gargalos ou atrasos. Não dependemos de prazos de lavanderias comerciais externas.",
  },
  {
    icon: "trending_down",
    title: "Custo operacional menor",
    body: "Ao eliminar margens de terceirização, repassamos um custo de lavagem muito mais baixo para a operação do proprietário.",
  },
  {
    icon: "hotel",
    title: "Padrão 400 fios e assepsia profunda",
    body: "Higienização profissional com separação rigorosa de cargas e controle antimicrobiano, garantindo maciez e aroma impecáveis.",
  },
  {
    icon: "format_image_left",
    title: "Rastreabilidade e zero perda",
    body: "Controle de inventário etiquetado por apartamento. Suas peças voltam completas, catalogadas e devidamente protegidas.",
  },
] as const;

const STEPS = [
  {
    title: "Check-out e Recolhimento",
    body: "Enxoval usado é recolhido em maletas lacradas pela camareira Wave Stay.",
  },
  {
    title: "Higienização e Calandragem",
    body: "Lavagem industrial térmica, desinfecção e passadoria a vapor uniforme.",
  },
  {
    title: "Montagem e Selo de Higiene",
    body: "Kits prontos e ensacados são entregues antes do próximo hóspede chegar.",
  },
] as const;

export default function LavanderiaPage() {
  return (
    <div className="flex w-full flex-col">
      <section className="flex flex-col gap-space-sm px-margin pt-space-md pb-space-lg md:px-8 md:pt-10">
        <div className="inline-flex items-center gap-2 self-start rounded-full bg-secondary-container px-3 py-1 font-label-sm text-label-sm uppercase tracking-widest text-on-secondary-container">
          <Icon name="verified" className="text-[15px]" filled />
          Infraestrutura Própria • Balneário Piçarras
        </div>
        <h1 className="max-w-3xl font-headline-lg-mobile text-headline-lg-mobile tracking-tight text-primary md:text-headline-lg md:leading-[48px]">
          Estrutura própria de lavanderia dedicada e eficiente.
        </h1>
        <p className="max-w-2xl font-body-md text-body-md text-on-surface-variant md:text-body-lg md:leading-7">
          Conheça o pilar operacional que garante enxovais impecáveis e agilidade
          nas trocas de hóspedes sem depender de terceiros.
        </p>
      </section>

      <section className="mb-space-lg px-margin md:px-8">
        <div className="relative overflow-hidden rounded-xl bg-primary p-space-lg text-on-primary shadow-xl md:max-w-3xl">
          <div className="pointer-events-none absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-surface-container-highest/10" />
          <div className="mb-space-md flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary-fixed px-3 py-1 font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-secondary-fixed">
              <Icon name="lock" className="text-[14px]" />
              Uso Estritamente Fechado
            </span>
            <Icon
              name="local_laundry_service"
              className="text-[26px] text-secondary-fixed"
            />
          </div>
          <h2 className="mb-space-sm font-headline-sm text-headline-sm text-primary-fixed">
            Exclusividade Operacional Wave Stay
          </h2>
          <p className="font-body-md text-body-md leading-relaxed text-surface-container-low">
            A lavanderia da Wave Stay é de{" "}
            <strong className="font-semibold text-white">
              uso estritamente operacional e fechado
            </strong>
            . Ela atende exclusivamente a nossa equipe de limpeza de Airbnb e os
            proprietários e hóspedes associados à nossa gestão de apartamentos e
            serviços de limpeza de temporada.
          </p>
          <div className="mt-space-md flex items-center gap-space-sm border-t border-surface-container-highest/20 pt-space-md">
            <Icon name="block" className="text-[20px] text-secondary-fixed" />
            <span className="font-body-sm text-body-sm text-surface-container-highest">
              Não aberta ao público em geral ou clientes passantes externos.
            </span>
          </div>
        </div>
      </section>

      <section className="mb-space-lg px-margin md:px-8">
        <div className="relative overflow-hidden rounded-xl shadow-md md:max-w-3xl">
          <Image
            src={ASSETS.rouparia}
            alt="Rouparia Padrão Hoteleiro Wave Stay"
            width={800}
            height={448}
            className="h-56 w-full object-cover md:h-72"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
          <div className="absolute right-3 bottom-3 left-3 flex items-center justify-between text-on-primary">
            <div className="flex items-center gap-2">
              <Icon name="inventory_2" className="text-[20px] text-secondary-fixed" />
              <span className="font-label-lg text-label-lg font-semibold text-surface">
                Rouparia Central Wave Stay
              </span>
            </div>
            <span className="rounded-full bg-surface/90 px-2.5 py-0.5 font-label-sm text-label-sm font-semibold tracking-wide text-on-surface">
              100% Interno & Operacional
            </span>
          </div>
        </div>
      </section>

      <section className="mb-space-lg flex flex-col gap-space-md px-margin md:px-8">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
            Pilares de Excelência
          </span>
          <h3 className="font-headline-sm text-headline-sm text-primary">
            Vantagens diretas para o seu imóvel
          </h3>
        </div>
        <div className="grid gap-space-sm md:grid-cols-2">
          {PILLARS.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-space-md rounded-xl bg-surface-container-lowest p-space-md shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-surface-container text-primary">
                <Icon name={item.icon} className="text-[24px]" />
              </div>
              <div className="flex min-w-0 flex-col">
                <span className="font-label-lg text-label-lg font-semibold text-primary">
                  {item.title}
                </span>
                <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-space-lg px-margin md:px-8">
        <div className="rounded-xl bg-surface-container-low p-space-lg md:max-w-3xl">
          <div className="mb-space-md flex items-center justify-between">
            <h3 className="font-headline-sm text-headline-sm text-primary">
              Fluxo Operacional Integrado
            </h3>
            <Icon name="sync_alt" className="text-secondary" />
          </div>
          <div className="flex flex-col gap-space-md">
            {STEPS.map((step, index) => (
              <div key={step.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary font-label-sm text-label-sm text-on-primary">
                  {index + 1}
                </span>
                <div>
                  <p className="font-label-lg text-label-lg text-primary">
                    {step.title}
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-space-xl px-margin md:px-8">
        <div className="flex flex-col gap-space-md rounded-xl bg-secondary-container p-space-lg text-on-secondary-container shadow-md md:max-w-3xl">
          <div className="flex items-center gap-space-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-on-secondary">
              <Icon name="contact_support" className="text-[22px]" />
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm uppercase tracking-wider opacity-80">
                Atendimento Dedicado
              </span>
              <span className="font-headline-sm text-headline-sm text-on-secondary-container">
                Dúvidas sobre o funcionamento?
              </span>
            </div>
          </div>
          <p className="font-body-md text-body-md text-on-secondary-container">
            Fale diretamente com nossa coordenação operacional de Balneário
            Piçarras para entender como integrar seu imóvel à nossa rotina de
            lavanderia e governança.
          </p>
          <WhatsappButton
            label="Falar com a equipe no WhatsApp"
            message="Olá! Gostaria de tirar dúvidas sobre a estrutura de lavanderia da Wave Stay."
            className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary font-label-lg text-label-lg text-on-primary shadow-md transition-all hover:bg-primary-container active:scale-[0.99]"
          />
          <div className="flex items-center justify-center gap-2 pt-1 text-on-secondary-container/80">
            <Icon name="phone" className="text-[16px]" />
            <span className="font-body-sm text-body-sm font-semibold">
              {WHATSAPP_DISPLAY}
            </span>
            <span className="text-xs">•</span>
            <span className="font-body-sm text-body-sm">João Minosso</span>
          </div>
        </div>
      </section>
    </div>
  );
}
