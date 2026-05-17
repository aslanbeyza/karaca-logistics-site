"use client";

import * as React from "react";
import {
  Building2,
  Home,
  PackageCheck,
  Route,
  Sofa,
  Warehouse,
  ArrowUpRight,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/ui/motion-fade";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Home,
    title: "Evden Eve Nakliyat",
    description:
      "Eşyalarınız profesyonel ekiple paketlenir, sigortalı araçla taşınır ve yeni evinizde özenle yerleştirilir.",
    href: "#quote",
  },
  {
    icon: Building2,
    title: "Ofis & Kurumsal Taşıma",
    description:
      "İş akışınızı bozmadan; mesai sonrası, hafta sonu veya gece taşıma seçenekleriyle ofisinizi yeni adresine taşırız.",
    href: "#quote",
  },
  {
    icon: Route,
    title: "Şehirler Arası Nakliyat",
    description:
      "Mersin'den Türkiye'nin her noktasına; takip edilebilir, sigortalı ve zamanında teslimat.",
    href: "#quote",
  },
  {
    icon: Sofa,
    title: "Parça Eşya Taşıma",
    description:
      "Tek parça mobilyadan piyano, kasa ve hassas eşyalara kadar; özel ambalajla güvenli taşıma.",
    href: "#quote",
  },
  {
    icon: PackageCheck,
    title: "Paketleme Hizmeti",
    description:
      "Streç film, baloncuklu naylon, mobilya bezi ve özel kasalarla profesyonel ambalajlama hizmeti.",
    href: "#quote",
  },
  {
    icon: Warehouse,
    title: "Depolama & Saklama",
    description:
      "Kameralı, klimalı ve güvenli depolarımızda kısa ve uzun süreli eşya saklama imkânı.",
    href: "#quote",
  },
];

export function Services() {
  return (
    <Section id="services" className="bg-background">
      <div className="container">
        <FadeUp>
          <SectionHeading
            eyebrow="Hizmetler"
            title={
              <>
                İhtiyacınıza uygun{" "}
                <span className="text-brand-700">eksiksiz çözüm</span>
              </>
            }
            description="Küçük bir bekâr eşyası taşımacılığından kurumsal ofis taşımaya kadar; her ölçekte profesyonel hizmet."
          />
        </FadeUp>

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <StaggerItem key={s.title}>
                <a
                  href={s.href}
                  className={cn(
                    "group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-300",
                    "hover:-translate-y-1 hover:border-brand-700/30 hover:shadow-[0_30px_60px_-30px_rgba(23,34,138,0.35)]",
                  )}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-700/0 blur-3xl transition-all duration-500 group-hover:bg-brand-700/15"
                  />
                  <div className="flex items-center justify-between">
                    <div className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-700/15 transition-colors group-hover:bg-brand-700 group-hover:text-white dark:bg-brand-700/15 dark:text-brand-200 dark:ring-brand-700/30 dark:group-hover:bg-brand-700 dark:group-hover:text-white">
                      <Icon className="size-6" />
                    </div>
                    <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-700" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-semibold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                  </div>
                </a>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </Section>
  );
}
