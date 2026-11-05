import type { Metadata } from "next";
import Image from "next/image";
import { GestaoSimulatorForm } from "@/components/gestao-simulator-form";
import { Icon } from "@/components/icon";
import { WhatsappButton } from "@/components/whatsapp-button";
import { ASSETS, WHATSAPP_DISPLAY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gestão Upside",
  description:
    "Gestão de temporada no Upside Home Club com taxa de 18%, anfitrião local e repasse ágil.",
};

const ADVANTAGES = [
  {
    icon: "percent",
    iconTone: "bg-primary text-on-primary",
    badge: "Mais lucro no bolso",
    badgeTone: "bg-secondary-fixed text-on-secondary-fixed",
    title: "Apenas 18% de comissão",
    body: "Menor taxa do mercado regional cobrada apenas sobre o lucro líquido gerado. Você fica com a maior fatia da receita.",
  },
  {
    icon: "local_laundry_service",
    iconTone: "bg-secondary text-on-secondary",
    badge: "Infraestrutura Interna",
    badgeTone: "bg-surface-container-high text-on-surface",
    title: "Taxa de limpeza mais baixa da região",
    body: "Operamos lavanderia e equipe higienizadora própria dentro da base do condomínio, eliminando fretes caros e custos repassados ao hóspede.",
  },
  {
    icon: "price_check",
    iconTone: "bg-primary-container text-on-primary",
    badge: "Tempo Limitado",
    badgeTone: "bg-secondary-container text-on-secondary-container",
    title: "Sem taxa de adesão",
    body: "Entrada imediata sem cobranças prévias para cadastro de fotos profissionais, anúncio ou vistoria inicial.",
  },
  {
    icon: "bolt",
    iconTone: "bg-primary text-on-primary",
    badge: "Liquidez Imediata",
    badgeTone: "bg-tertiary-fixed text-on-tertiary-fixed",
    title: "Repasses no dia da estadia",
    body: "Você não espera 30 dias para receber. O fluxo financeiro do seu apartamento entra na sua conta de forma ágil e previsível.",
  },
  {
    icon: "phone_iphone",
    iconTone: "bg-secondary text-on-secondary",
    badge: "Transparência Total",
    badgeTone: "bg-surface-container-high text-on-surface",
    title: "Aplicativo exclusivo do proprietário",
    body: "Acompanhamento ao vivo de reservas, calendário com bloqueio para uso próprio, perfil dos hóspedes e extratos em tempo real.",
  },
  {
    icon: "handyman",
    iconTone: "bg-primary-container text-on-primary",
    badge: "Incluso na Gestão",
    badgeTone: "bg-secondary-fixed text-on-secondary-fixed",
    title: "Recebimento de móveis & curadoria",
    body: "Apoio presencial para receber entregas e acompanhamento de montadores, marceneiros e eletricistas sem custos extras.",
  },
] as const;

export default function GestaoPage() {
  return (
    <div className="flex w-full flex-col">
      <section className="px-margin pt-4 pb-2 md:px-8 md:pt-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-secondary-container px-3 py-1 text-on-secondary-container">
          <Icon name="verified" className="text-[16px]" />
          <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider">
            Exclusividade Operacional
          </span>
        </div>
        <h1 className="mt-3 max-w-3xl font-headline-lg-mobile text-headline-lg-mobile tracking-tight text-primary md:text-headline-lg md:leading-[48px]">
          A empresa com mais apartamentos sob gestão no{" "}
          <span className="text-secondary">Upside Home Club</span>
        </h1>
        <p className="mt-2 max-w-2xl font-body-md text-body-md text-on-surface-variant md:text-body-lg md:leading-7">
          Gestão de short stay de alto padrão focada 100% no condomínio
          frente-mar mais cobiçado de Balneário Piçarras.
        </p>
      </section>

      <section className="my-3 px-margin md:px-8">
        <div className="relative overflow-hidden rounded-xl bg-primary-container p-space-md text-on-primary shadow-md md:max-w-3xl">
          <div className="flex flex-row items-center gap-space-md">
            <div className="relative h-32 w-24 shrink-0 overflow-hidden rounded-lg bg-surface-container-high">
              <Image
                src={ASSETS.portrait}
                alt="João Minosso - Responsável Wave Stay no Upside Home Club"
                fill
                className="object-cover object-top"
                sizes="96px"
              />
              <div className="absolute right-1 bottom-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-primary">
                <Icon
                  name="shield_person"
                  className="text-[12px] font-bold text-surface"
                />
              </div>
            </div>
            <div className="flex min-w-0 flex-col">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed">
                Anfitrião Local Wave Stay
              </span>
              <h3 className="mt-0.5 font-headline-sm text-headline-sm leading-tight text-on-primary">
                João Minosso
              </h3>
              <p className="mt-1 line-clamp-2 font-body-sm text-body-sm text-primary-fixed-dim">
                Presença física diária 24h no Upside Home Club para cuidar de
                cada detalhe da sua unidade.
              </p>
              <div className="mt-2.5 inline-flex items-center gap-1.5 self-start rounded-full bg-surface/10 px-2 py-0.5 text-[11px] font-label-sm text-surface">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Plantão 24h no condomínio
              </div>
            </div>
          </div>
          <div className="-mx-space-md -mb-space-md mt-3 flex items-center justify-between bg-primary/40 px-space-md py-2">
            <span className="font-label-sm text-label-sm text-secondary-fixed-dim">
              Próximos passos da expansão:
            </span>
            <span className="font-label-sm text-label-sm font-medium text-surface">
              Novos residenciais em breve
            </span>
          </div>
        </div>
      </section>

      <section className="my-4 px-margin md:px-8 md:max-w-3xl">
        <GestaoSimulatorForm />
      </section>

      <section className="my-3 px-margin md:px-8">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-headline-sm text-headline-sm text-primary">
            Por que os proprietários escolhem a Wave Stay
          </h3>
        </div>
        <div className="grid gap-2.5 md:grid-cols-2">
          {ADVANTAGES.map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-surface-container-low p-space-md shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.iconTone}`}
                >
                  <Icon name={item.icon} className="text-[22px]" />
                </div>
                <div>
                  <div
                    className={`mb-1 inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold ${item.badgeTone}`}
                  >
                    {item.badge}
                  </div>
                  <h4 className="font-headline-sm text-headline-sm leading-snug text-primary">
                    {item.title}
                  </h4>
                  <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
                    {item.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="my-3 px-margin md:px-8">
        <div className="relative overflow-hidden rounded-xl shadow-sm md:max-w-3xl">
          <div className="relative flex h-44 w-full flex-col justify-end p-space-md text-surface md:h-64">
            <Image
              src={ASSETS.upsideMar}
              alt="Upside Home Club Frente Mar"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
            <div className="relative z-10">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed">
                Localização Privilegiada
              </span>
              <h4 className="mt-0.5 font-headline-sm text-headline-sm leading-tight text-surface">
                Upside Home Club Frente Mar
              </h4>
              <p className="mt-0.5 font-body-sm text-body-sm text-surface-container-high">
                Garantia de ocupação máxima nas temporadas de verão e feriados.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-margin pt-3 pb-6 md:px-8">
        <div className="flex flex-col items-center rounded-xl bg-surface-container p-space-md text-center text-on-surface shadow-sm md:mx-auto md:max-w-3xl">
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
            <Icon name="verified_user" className="text-[28px]" />
          </div>
          <h3 className="font-headline-sm text-headline-sm text-primary">
            Tranquilidade absoluta para o proprietário
          </h3>
          <p className="mt-1 max-w-sm font-body-sm text-body-sm text-on-surface-variant">
            Você não precisa atender hóspede de madrugada, lavar enxoval nem
            resolver chave. O João Minosso e a equipe Wave Stay cuidam de tudo
            no condomínio.
          </p>
          <WhatsappButton
            label="Falar com João no WhatsApp"
            message="Olá João! Sou proprietário no Upside Home Club e quero conversar sobre a gestão do meu apartamento."
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3.5 font-headline-sm text-headline-sm text-on-primary shadow transition-transform hover:bg-primary-container active:scale-[0.98]"
          />
          <span className="mt-2 font-label-sm text-label-sm text-on-surface-variant">
            Atendimento direto: {WHATSAPP_DISPLAY}
          </span>
        </div>
      </section>
    </div>
  );
}
