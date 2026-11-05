import { SiteHeader } from "@/components/site-header";
import { SiteNav } from "@/components/site-nav";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-surface text-on-surface">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col pt-16 pb-24 md:pb-10">
        {children}
      </main>
      <SiteNav />
    </div>
  );
}
