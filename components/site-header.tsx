"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/icon";
import { ASSETS, NAV_ITEMS, WHATSAPP_URL } from "@/lib/constants";

export function SiteHeader() {
  const pathname = usePathname();
  const current =
    NAV_ITEMS.find((item) =>
      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href),
    ) ?? NAV_ITEMS[0];

  return (
    <header className="fixed top-0 z-50 w-full pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-margin md:px-8">
        <Link href="/" className="flex items-center gap-space-sm min-w-0">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-primary p-1">
            <Image
              src={ASSETS.logo}
              alt="Wave Stay"
              width={32}
              height={32}
              className="h-full w-auto object-contain"
              priority
            />
          </div>
          <div className="flex min-w-0 flex-col">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
              Wave Stay
            </span>
            <span className="font-headline-sm text-headline-sm leading-none tracking-tight text-primary md:hidden">
              {current.subtitle}
            </span>
            <span className="hidden font-headline-sm text-headline-sm leading-none tracking-tight text-primary md:inline">
              Gestão & Hospitalidade
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {NAV_ITEMS.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 font-label-lg text-label-lg transition-colors ${
                  active
                    ? "bg-primary text-on-primary"
                    : "text-on-surface-variant hover:bg-surface-container hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-space-sm">
          <a
            aria-label="Suporte WhatsApp"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-secondary-container text-on-secondary-container transition-colors hover:bg-secondary-fixed"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="chat" className="text-[20px]" />
          </a>
          <div className="flex min-h-[44px] min-w-[44px] items-center justify-center md:hidden">
            <Image
              src={ASSETS.portrait}
              alt="João Minosso"
              width={32}
              height={32}
              className="h-8 w-8 rounded-full object-cover object-top"
            />
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-label-lg text-label-lg text-on-primary transition-opacity hover:opacity-95 md:inline-flex"
          >
            <Icon name="chat" className="text-[18px] text-secondary-fixed" />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
