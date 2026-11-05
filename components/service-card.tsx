import Link from "next/link";
import { Icon } from "@/components/icon";
import type { ServiceCard as ServiceCardType } from "@/lib/constants";

export function ServiceCard({ card }: { card: ServiceCardType }) {
  const badgeClass =
    card.badgeTone === "sand"
      ? "bg-secondary-fixed text-on-secondary-fixed font-semibold"
      : "bg-surface-container-high text-on-surface-variant font-medium";

  const iconWrap =
    card.badgeTone === "sand"
      ? "bg-secondary-container text-on-secondary-container"
      : "bg-surface-container text-on-surface";

  return (
    <Link
      href={card.href}
      className="group flex flex-col gap-space-sm rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-transform active:scale-[0.99]"
    >
      <div className="flex items-start justify-between">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconWrap}`}
        >
          <Icon name={card.icon} className="text-[24px]" />
        </div>
        <span
          className={`rounded-full px-2.5 py-1 font-label-sm text-label-sm ${badgeClass}`}
        >
          {card.badge}
        </span>
      </div>
      <div className="flex flex-col">
        <h3 className="font-headline-sm text-headline-sm text-primary">
          {card.title}
        </h3>
        <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
          {card.description}
        </p>
      </div>
      <div className="mt-auto flex items-center justify-between pt-space-xs">
        <span className="inline-flex items-center gap-1 font-label-lg text-label-lg font-semibold text-primary group-hover:text-secondary">
          {card.cta}
          <Icon name="arrow_forward" className="text-[18px]" />
        </span>
        <span
          className={`font-label-sm text-label-sm ${
            card.badgeTone === "sand" ? "text-secondary" : "text-outline"
          }`}
        >
          {card.meta}
        </span>
      </div>
    </Link>
  );
}
