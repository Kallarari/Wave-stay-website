import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Wave Stay — Gestão e Hospitalidade",
    template: "%s | Wave Stay",
  },
  description:
    "Gestão de temporada, lavanderia própria e limpeza profissional em Balneário Piçarras, Penha e Barra Velha.",
  openGraph: {
    title: "Wave Stay — Gestão e Hospitalidade",
    description:
      "Soluções integradas de alto padrão para proprietários no Upside Home Club e região costeira.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${plusJakarta.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-body-md text-body-md">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
