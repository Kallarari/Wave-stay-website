"use client";

import { useState } from "react";
import { Icon } from "@/components/icon";
import { whatsappLink } from "@/lib/constants";

export function GestaoSimulatorForm() {
  const [isUpsideChoice, setIsUpsideChoice] = useState<"sim" | "nao">("sim");
  const [torre, setTorre] = useState("");
  const [unidade, setUnidade] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isUpside =
      isUpsideChoice === "sim"
        ? "Sim (Upside Home Club)"
        : "Não (Outro condomínio)";
    const torreVal = torre.trim() || "Não informada";
    const unidadeVal = unidade.trim() || "Não informada";
    const message =
      `Olá João! Gostaria de uma estimativa de rentabilidade para o meu apartamento:\n\n` +
      `• Condomínio Upside? ${isUpside}\n` +
      `• Torre: ${torreVal}\n` +
      `• Unidade/Andar: ${unidadeVal}\n\n` +
      `Pode me enviar as projeções de faturamento da Wave Stay?`;
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="rounded-xl bg-secondary-container p-space-md text-on-secondary-container shadow-sm">
      <div className="mb-1 flex items-center gap-2">
        <Icon name="calculate" className="text-[22px] text-secondary" />
        <span className="font-label-sm text-label-sm font-semibold uppercase tracking-widest text-on-secondary-container">
          Simulador de Alta Temporada
        </span>
      </div>
      <h3 className="font-headline-sm text-headline-sm leading-snug text-primary">
        Quanto rende seu apartamento?
      </h3>
      <p className="mt-1 font-body-sm text-body-sm text-on-secondary-container">
        Receba uma projeção de faturamento real baseada nas diárias praticadas
        hoje no Upside Home Club.
      </p>
      <form className="mt-4 flex flex-col gap-3" onSubmit={handleSubmit}>
        <div>
          <label className="mb-1.5 block font-label-sm text-label-sm font-semibold text-on-secondary-container">
            Seu apartamento fica no Upside Home Club?
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setIsUpsideChoice("sim")}
              className={`rounded-lg px-3 py-2.5 text-center font-label-lg text-label-lg transition-colors ${
                isUpsideChoice === "sim"
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container-lowest text-primary"
              }`}
            >
              Sim, no Upside
            </button>
            <button
              type="button"
              onClick={() => setIsUpsideChoice("nao")}
              className={`rounded-lg px-3 py-2.5 text-center font-label-lg text-label-lg transition-colors ${
                isUpsideChoice === "nao"
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container-lowest text-primary"
              }`}
            >
              Outro residencial
            </button>
          </div>
        </div>

        {isUpsideChoice === "nao" && (
          <div className="rounded-lg bg-surface p-2 font-body-sm text-body-sm text-on-surface">
            Estamos expandindo para outros condomínios de alto padrão em
            Piçarras! Registre sua unidade para lista prioritária.
          </div>
        )}

        <div>
          <label
            className="mb-1 block font-label-sm text-label-sm text-on-secondary-container"
            htmlFor="input-torre"
          >
            Qual é a sua torre?
          </label>
          <input
            className="w-full rounded-lg bg-surface-container-lowest px-3 py-2 font-body-md text-body-md text-on-surface shadow-sm focus:outline-none"
            id="input-torre"
            placeholder="Ex: Torre Maresias / Torre Brava"
            type="text"
            value={torre}
            onChange={(e) => setTorre(e.target.value)}
          />
        </div>

        <div>
          <label
            className="mb-1 block font-label-sm text-label-sm text-on-secondary-container"
            htmlFor="input-unidade"
          >
            Qual é a sua unidade / andar?
          </label>
          <input
            className="w-full rounded-lg bg-surface-container-lowest px-3 py-2 font-body-md text-body-md text-on-surface shadow-sm focus:outline-none"
            id="input-unidade"
            placeholder="Ex: Apto 1204 - 12º Andar Vista Mar"
            type="text"
            value={unidade}
            onChange={(e) => setUnidade(e.target.value)}
          />
        </div>

        <button
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3.5 font-headline-sm text-headline-sm text-on-primary shadow-md transition-transform hover:bg-primary-container active:scale-[0.98]"
          type="submit"
        >
          <Icon name="chat" className="text-[20px] text-secondary-fixed" />
          <span>Consultar estimativa de rentabilidade</span>
        </button>
      </form>
    </div>
  );
}
