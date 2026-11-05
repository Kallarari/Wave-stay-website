import type { Metadata } from "next";
import { Icon } from "@/components/icon";
import { LimpezaServices } from "@/components/limpeza-services";

export const metadata: Metadata = {
  title: "Limpeza",
  description:
    "Limpeza profissional para Airbnb, pós-obra e residencial em Barra Velha, Balneário Piçarras e Penha.",
};

export default function LimpezaPage() {
  return (
    <div className="flex w-full flex-col">
      <section className="px-margin pt-space-md md:px-8 md:pt-10">
        <div className="inline-flex items-center gap-space-xs rounded-full bg-secondary-container px-3.5 py-1.5 text-on-secondary-container shadow-sm">
          <Icon name="explore" className="text-[16px] text-secondary" />
          <span className="font-label-sm text-label-sm font-semibold tracking-wide">
            Atendimento Regional: Barra Velha a Penha
          </span>
        </div>
      </section>

      <section className="px-margin pt-space-sm pb-space-md md:px-8">
        <h1 className="max-w-3xl font-headline-lg-mobile text-headline-lg-mobile tracking-tight text-primary md:text-headline-lg md:leading-[48px]">
          Limpeza profissional especializada com padrão hoteleiro.
        </h1>
        <p className="mt-2 max-w-2xl font-body-md text-body-md leading-relaxed text-on-surface-variant md:text-body-lg md:leading-7">
          Valores altamente competitivos, equipe criteriosamente treinada e
          produtos profissionais biodegradáveis para máxima segurança do seu
          imóvel no litoral.
        </p>
        <div className="mt-4 grid max-w-2xl grid-cols-3 gap-2">
          <div className="flex flex-col items-center rounded-xl bg-surface-container-low p-3 text-center shadow-sm">
            <Icon name="hotel_class" className="text-[22px] text-secondary" />
            <span className="mt-1 font-label-sm text-label-sm font-semibold text-primary">
              Padrão 5★
            </span>
            <span className="font-body-sm text-[11px] leading-tight text-on-surface-variant">
              Auditoria rígida
            </span>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-surface-container-low p-3 text-center shadow-sm">
            <Icon name="eco" className="text-[22px] text-secondary" />
            <span className="mt-1 font-label-sm text-label-sm font-semibold text-primary">
              Biodegradável
            </span>
            <span className="font-body-sm text-[11px] leading-tight text-on-surface-variant">
              Zero resíduos
            </span>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-surface-container-low p-3 text-center shadow-sm">
            <Icon name="bolt" className="text-[22px] text-secondary" />
            <span className="mt-1 font-label-sm text-label-sm font-semibold text-primary">
              Turnover Ágil
            </span>
            <span className="font-body-sm text-[11px] leading-tight text-on-surface-variant">
              Entre estadias
            </span>
          </div>
        </div>
      </section>

      <section className="mb-space-md px-margin md:px-8">
        <div className="relative flex max-w-3xl items-center gap-space-sm overflow-hidden rounded-2xl bg-surface-container p-4 shadow-sm">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-surface">
            <Icon name="location_on" className="text-[20px]" />
          </div>
          <div className="min-w-0 flex-1">
            <span className="block font-label-sm text-label-sm font-semibold uppercase tracking-wider text-secondary">
              Área de Atuação Ativa
            </span>
            <p className="truncate font-body-sm text-body-sm font-semibold text-primary">
              Barra Velha • Balneário Piçarras • Penha
            </p>
          </div>
          <Icon name="verified" className="text-[18px] text-on-surface-variant" />
        </div>
      </section>

      <LimpezaServices />
    </div>
  );
}
