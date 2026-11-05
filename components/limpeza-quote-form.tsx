"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/icon";
import { whatsappLink } from "@/lib/constants";

type LimpezaQuoteFormProps = {
  initialService?: string;
};

export function LimpezaQuoteForm({
  initialService = "Airbnb & Temporada",
}: LimpezaQuoteFormProps) {
  const [serviceType, setServiceType] = useState(initialService);
  const [city, setCity] = useState("Balneário Piçarras");
  const [propertySize, setPropertySize] = useState("");

  useEffect(() => {
    if (initialService) setServiceType(initialService);
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const details = propertySize.trim() || "A combinar";
    const message = `Olá, Wave Stay! Gostaria de orçar o serviço de *${serviceType}* em *${city}*.\nDetalhes do imóvel: ${details}.\nComo podemos prosseguir?`;
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative flex flex-col overflow-hidden rounded-2xl bg-primary p-space-md text-on-primary shadow-xl">
      <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-secondary/30 blur-2xl" />
      <div className="mb-1 flex items-center gap-space-xs">
        <Icon name="chat" className="text-[24px] text-secondary-fixed" />
        <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-secondary-fixed">
          Cotação Rápida WhatsApp
        </span>
      </div>
      <h2 className="font-headline-sm text-headline-sm font-semibold text-surface">
        Fale direto com a equipe operacional
      </h2>
      <p className="mt-1 font-body-sm text-body-sm text-primary-fixed-dim">
        Envie os detalhes do seu imóvel e receba uma proposta competitiva em
        minutos no número <strong>(48) 9205-8347</strong>.
      </p>
      <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
        <div>
          <label
            className="mb-1.5 block font-label-sm text-label-sm font-medium text-primary-fixed"
            htmlFor="tipo-limpeza"
          >
            Tipo de Serviço Desejado:
          </label>
          <div className="relative">
            <select
              className="h-12 w-full appearance-none rounded-lg bg-surface px-3 pr-9 font-body-md text-body-md text-on-surface focus:ring-2 focus:ring-secondary-fixed focus:outline-none"
              id="tipo-limpeza"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
            >
              <option value="Airbnb & Temporada">
                Limpeza de Airbnb & Temporada (com opção de lavanderia)
              </option>
              <option value="Pós-Obra & Entrega de Chaves">
                Limpeza Pós-Obra & Entrega de Chaves
              </option>
              <option value="Residencial Periódica">
                Limpeza Residencial Periódica
              </option>
            </select>
            <Icon
              name="expand_more"
              className="pointer-events-none absolute top-3 right-3 text-[20px] text-on-surface-variant"
            />
          </div>
        </div>
        <div>
          <label
            className="mb-1.5 block font-label-sm text-label-sm font-medium text-primary-fixed"
            htmlFor="cidade-imovel"
          >
            Cidade do Imóvel:
          </label>
          <div className="relative">
            <select
              className="h-12 w-full appearance-none rounded-lg bg-surface px-3 pr-9 font-body-md text-body-md text-on-surface focus:ring-2 focus:ring-secondary-fixed focus:outline-none"
              id="cidade-imovel"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="Balneário Piçarras">Balneário Piçarras</option>
              <option value="Penha">Penha</option>
              <option value="Barra Velha">Barra Velha</option>
              <option value="Outra região próxima">Outra região próxima</option>
            </select>
            <Icon
              name="expand_more"
              className="pointer-events-none absolute top-3 right-3 text-[20px] text-on-surface-variant"
            />
          </div>
        </div>
        <div>
          <label
            className="mb-1.5 block font-label-sm text-label-sm font-medium text-primary-fixed"
            htmlFor="tamanho-imovel"
          >
            Tamanho aproximado ou número de quartos:
          </label>
          <input
            className="h-12 w-full rounded-lg bg-surface px-3 font-body-md text-body-md text-on-surface focus:ring-2 focus:ring-secondary-fixed focus:outline-none"
            id="tamanho-imovel"
            placeholder="Ex: Apartamento 2 quartos, 75m²"
            type="text"
            value={propertySize}
            onChange={(e) => setPropertySize(e.target.value)}
          />
        </div>
        <button
          className="mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-secondary text-[16px] font-headline-sm font-semibold text-surface shadow-lg transition-transform hover:opacity-95 active:scale-[0.99]"
          type="submit"
        >
          <Icon name="send" className="text-[22px]" />
          <span>Solicitar Orçamento no WhatsApp</span>
        </button>
      </form>
      <div className="mt-3 flex items-center justify-center gap-1.5 text-center font-label-sm text-label-sm text-primary-fixed-dim">
        <Icon name="lock" className="text-[15px] text-secondary-fixed" />
        <span>Atendimento rápido e sem compromisso</span>
      </div>
    </div>
  );
}
