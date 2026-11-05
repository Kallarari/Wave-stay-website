import Image from "next/image";
import { Icon } from "@/components/icon";
import { ServiceCard } from "@/components/service-card";
import { WhatsappButton } from "@/components/whatsapp-button";
import { ASSETS, SERVICE_CARDS, WHATSAPP_DISPLAY } from "@/lib/constants";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <section className="flex flex-col gap-space-md px-margin pt-space-md pb-space-lg md:px-8 md:pt-10">
        <div className="flex items-center gap-space-md rounded-xl bg-surface-container-lowest p-space-md shadow-sm md:max-w-2xl">
          <div className="relative shrink-0">
            <Image
              src={ASSETS.portrait}
              alt="João Minosso"
              width={64}
              height={64}
              className="h-16 w-16 rounded-full object-cover object-top shadow-inner"
              priority
            />
            <span className="absolute right-0 bottom-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-on-primary shadow-sm">
              <Icon name="verified" className="text-[12px]" filled />
            </span>
          </div>
          <div className="flex min-w-0 flex-col">
            <div className="mb-0.5 flex items-center gap-1.5">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                Anfitrião & Gestão Local
              </span>
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-secondary" />
              <span className="font-label-sm text-label-sm text-outline">
                Piçarras
              </span>
            </div>
            <p className="font-headline-sm text-headline-sm leading-tight text-on-surface">
              Olá! Sou João Minosso
            </p>
            <p className="mt-0.5 line-clamp-2 font-body-sm text-body-sm text-on-surface-variant">
              Responsável pela Wave Stay em Balneário Piçarras. Como podemos
              cuidar do seu imóvel hoje?
            </p>
          </div>
        </div>

        <div className="mt-1 flex max-w-3xl flex-col gap-space-xs">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
            Hospitalidade & Rendimento
          </span>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile tracking-tight text-primary md:text-headline-lg md:leading-[48px]">
            Seu imóvel bem cuidado.
            <br />
            <span className="text-secondary">Seu tempo valorizado.</span>
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant md:text-body-lg md:leading-7">
            Soluções integradas de alto padrão para proprietários no Upside Home
            Club e região costeira.
          </p>
        </div>

        <div className="flex flex-col gap-space-sm rounded-xl bg-primary-container p-space-md text-on-primary shadow-md md:max-w-2xl">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed">
              Vantagens Exclusivas Wave
            </span>
            <Icon name="verified_user" className="text-[18px] text-secondary-fixed" />
          </div>
          <div className="grid grid-cols-3 gap-space-xs pt-1">
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm leading-none text-secondary-fixed">
                18%
              </span>
              <span className="mt-1 font-label-sm text-label-sm text-on-primary-container">
                Taxa enxuta de gestão
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm leading-none text-secondary-fixed">
                Local
              </span>
              <span className="mt-1 font-label-sm text-label-sm text-on-primary-container">
                Base & equipe no condomínio
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm leading-none text-secondary-fixed">
                D+0
              </span>
              <span className="mt-1 font-label-sm text-label-sm text-on-primary-container">
                Repasse veloz por reserva
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-space-md px-margin pb-space-xl md:px-8">
        <div className="flex items-center justify-between">
          <h2 className="font-headline-sm text-headline-sm text-on-surface">
            Serviços & Soluções
          </h2>
          <span className="font-label-sm text-label-sm text-outline md:hidden">
            Toque para acessar
          </span>
        </div>
        <div className="grid gap-space-md md:grid-cols-3">
          {SERVICE_CARDS.map((card) => (
            <ServiceCard key={card.href} card={card} />
          ))}
        </div>

        <div className="flex flex-col gap-space-sm rounded-xl bg-secondary-container p-space-md text-on-secondary-container shadow-sm md:mx-auto md:max-w-2xl md:w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-on-primary">
                <Icon name="chat" className="text-[18px]" />
              </span>
              <span className="font-headline-sm text-headline-sm text-on-secondary-container">
                Atendimento Imediato
              </span>
            </div>
            <span className="rounded-full bg-on-secondary-container/10 px-2 py-0.5 font-label-sm text-label-sm font-semibold text-on-secondary-container">
              Online
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-secondary-container">
            Dúvidas sobre locação, contratação de limpeza ou suporte técnico?
            Fale diretamente com o João e equipe via WhatsApp.
          </p>
          <WhatsappButton
            label={`Falar no WhatsApp: ${WHATSAPP_DISPLAY}`}
            className="mt-1 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-label-lg text-label-lg text-on-primary shadow-sm transition-all hover:bg-primary-container active:scale-[0.98]"
          />
        </div>
      </section>

      <section className="flex flex-col items-center px-margin pb-space-lg text-center md:px-8">
        <div className="mb-space-md h-0.5 w-12 rounded-full bg-outline-variant/40" />
        <p className="font-label-sm text-label-sm font-semibold uppercase tracking-widest text-secondary">
          Wave Stay • Balneário Piçarras
        </p>
        <p className="mt-1 max-w-xs font-body-sm text-body-sm text-on-surface-variant">
          Gestão inteligente de aluguéis por temporada & conservação patrimonial
          de excelência.
        </p>
      </section>
    </div>
  );
}
