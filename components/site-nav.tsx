"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/icon";
import { NAV_ITEMS } from "@/lib/constants";

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 z-50 w-full bg-surface/90 pb-safe shadow-[0_-4px_20px_rgba(27,34,32,0.05)] backdrop-blur-xl md:hidden"
      aria-label="Navegação inferior"
    >
      <div className="flex h-16 items-center justify-around px-space-xs">
        {NAV_ITEMS.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex min-h-[44px] min-w-[56px] flex-col items-center justify-center transition-colors ${
                active
                  ? "font-semibold text-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              <Icon name={item.icon} className="text-[22px]" />
              <span className="mt-0.5 font-label-sm text-label-sm">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
