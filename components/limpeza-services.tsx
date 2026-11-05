"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@/components/icon";
import { LimpezaQuoteForm } from "@/components/limpeza-quote-form";
import { ASSETS } from "@/lib/constants";

const SERVICES = [
  {
    id: "Airbnb & Temporada",
    featured: true,
    image: ASSETS.limpezaAirbnb,
    imageAlt: "Limpeza Airbnb",
    chipIcon: "star",
    chip: "Foco Nota 5.0",
    title: "Limpeza de Airbnb & Temporada",
    body: "Turnover ágil e meticuloso entre estadias. Higienização de bancadas, aspiração de areia, reposição de amenities e inspeção minuciosa para garantir reviews 5 estrelas.",
    cta: "Orçar Limpeza de Airbnb",
    tags: null,
    highlight: true,
  },
  {
    id: "Pós-Obra & Entrega de Chaves",
    featured: false,
    image: ASSETS.limpezaPosObra,
    imageAlt: "Limpeza Pós-Obra",
    chipIcon: "handyman",
    chip: "Acabamento Técnico",
    title: "Limpeza Pós-Obra & Entrega de Chaves",
    body: "Remoção técnica e segura de poeira ultrafina, resíduos de rejunte, respingos de tinta e massas. Cuidado absoluto com vidros, metais nobres e pedras naturais.",
    cta: "Orçar Limpeza Pós-Obra",
    tags: ["Prédios Novos", "Reformas", "Vidros e Esquadrias"],
    highlight: false,
  },
  {
    id: "Residencial Periódica",
    featured: false,
    image: ASSETS.limpezaResidencial,
    imageAlt: "Limpeza Residencial Periódica",
    chipIcon: "calendar_today",
    chip: "Rotina Personalizada",
    title: "Limpeza Residencial Periódica",
    body: "Cuidado carinhoso e minucioso para casas e apartamentos de moradores e veranistas. Flexibilidade total com planos avulsos, semanais ou quinzenais.",
    cta: "Orçar Limpeza Residencial",
    tags: ["Avulsa", "Semanal", "Quinzenal"],
    highlight: false,
  },
] as const;

const WHY = [
  {
    icon: "timer",
    title: "Agilidade e Pontualidade",
    body: "Equipe escalada estrategicamente para cumprir cronogramas rígidos entre check-ins.",
  },
  {
    icon: "sanitizer",
    title: "Insumos de Alta Performance",
    body: "Produtos de linha profissional, biodegradáveis, antialérgicos e sem odores residuais incômodos.",
  },
  {
    icon: "shield",
    title: "Equipe Checada e Segura",
    body: "Profissionais uniformizados, com antecedentes verificados e supervisão ativa da Wave Stay.",
  },
  {
    icon: "schedule",
    title: "Flexibilidade Total de Horários",
    body: "Disponibilidade aos finais de semana e feriados para acompanhar a demanda da orla.",
  },
] as const;

export function LimpezaServices() {
  const [selectedService, setSelectedService] = useState("Airbnb & Temporada");

  const prefillAndScroll = (serviceName: string) => {
    setSelectedService(serviceName);
    document
      .getElementById("orcamento-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="space-y-space-md px-margin md:px-8">
        <div className="flex items-center justify-between">
          <h2 className="font-headline-sm text-headline-sm text-primary">
            Nossos Serviços
          </h2>
          <span className="font-label-sm text-label-sm font-medium text-secondary">
            3 Soluções Exclusivas
          </span>
        </div>

        <div className="grid gap-space-md md:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="relative flex flex-col overflow-hidden rounded-2xl bg-surface-container-lowest p-space-md shadow-md"
            >
              {service.featured && (
                <div className="absolute top-0 right-0 rounded-bl-xl bg-primary px-3 py-1 font-label-sm text-[10px] font-semibold uppercase tracking-wider text-on-primary">
                  Mais Solicitado
                </div>
              )}
              <div className="relative mb-space-sm h-44 w-full overflow-hidden rounded-xl">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-surface/90 px-2.5 py-1 backdrop-blur-md">
                  <Icon
                    name={service.chipIcon}
                    className="text-[16px] text-secondary"
                  />
                  <span className="font-label-sm text-label-sm font-semibold text-primary">
                    {service.chip}
                  </span>
                </div>
              </div>
              <h3 className="mt-1 font-headline-sm text-headline-sm text-primary">
                {service.title}
              </h3>
              <p className="mt-1.5 font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
                {service.body}
              </p>
              {service.highlight && (
                <div className="mt-3.5 flex items-start gap-2.5 rounded-xl bg-secondary-fixed/50 p-3 text-on-secondary-fixed">
                  <Icon
                    name="local_laundry_service"
                    className="mt-0.5 shrink-0 text-[22px] text-secondary"
                  />
                  <div>
                    <span className="block font-label-sm text-[11px] font-bold tracking-wider uppercase text-secondary">
                      Diferencial Exclusivo
                    </span>
                    <p className="mt-0.5 font-body-sm text-body-sm leading-snug text-on-surface">
                      Lavagem e higienização completa das roupas de cama e banho
                      integradas na nossa{" "}
                      <strong className="font-semibold text-primary">
                        lavanderia própria
                      </strong>{" "}
                      Wave Stay!
                    </p>
                  </div>
                </div>
              )}
              {service.tags && (
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface-container px-2.5 py-1 font-label-sm text-[11px] text-on-surface-variant"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <button
                type="button"
                className={`mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-lg font-label-lg text-label-lg transition-transform active:scale-[0.99] ${
                  service.featured
                    ? "bg-primary text-on-primary shadow-sm hover:opacity-95"
                    : "bg-surface-container-high text-primary hover:bg-surface-variant"
                }`}
                onClick={() => prefillAndScroll(service.id)}
              >
                <span>{service.cta}</span>
                <Icon name="arrow_forward" className="text-[18px]" />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="px-margin pt-space-xl md:px-8">
        <div className="rounded-2xl bg-surface-container-low p-space-md shadow-sm md:max-w-3xl">
          <div className="mb-1 flex items-center gap-2">
            <Icon name="verified_user" className="text-[22px] text-secondary" />
            <h2 className="font-headline-sm text-headline-sm text-primary">
              Por Que a Wave Stay?
            </h2>
          </div>
          <p className="mb-4 font-body-sm text-body-sm text-on-surface-variant">
            Entenda as vantagens de confiar seu patrimônio a uma gestão
            profissional.
          </p>
          <div className="space-y-3 md:grid md:grid-cols-2 md:gap-3 md:space-y-0">
            {WHY.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 rounded-xl bg-surface-container-lowest p-3"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
                  <Icon name={item.icon} className="text-[18px]" />
                </div>
                <div>
                  <h3 className="font-label-lg text-label-lg font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 font-body-sm text-body-sm text-on-surface-variant">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="px-margin pt-space-xl pb-space-lg md:px-8 md:max-w-3xl"
        id="orcamento-section"
      >
        <LimpezaQuoteForm initialService={selectedService} />
      </section>
    </>
  );
}
