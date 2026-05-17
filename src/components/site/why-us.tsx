"use client";

import * as React from "react";
import {
  BadgeCheck,
  Clock4,
  Gauge,
  HandCoins,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/ui/motion-fade";
import { site } from "@/lib/site";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Sigortalı taşıma",
    desc: "Tüm taşımalarınız sigorta kapsamındadır. Hasar durumunda anında çözüm.",
  },
  {
    icon: HandCoins,
    title: "Şeffaf fiyat",
    desc: "Ekspertiz sonrası verilen fiyat değişmez; gizli ücret, sürpriz fatura yok.",
  },
  {
    icon: Clock4,
    title: "Zamanında teslim",
    desc: "Söz verdiğimiz saatte yola çıkar, planlanan günde teslim ederiz.",
  },
  {
    icon: BadgeCheck,
    title: "Profesyonel ekip",
    desc: "Eğitimli, üniformalı ve deneyimli kadromuzla profesyonel hizmet.",
  },
  {
    icon: Gauge,
    title: "Modern araç filosu",
    desc: "Klimalı, asansörlü ve modern araçlarla konforlu taşıma deneyimi.",
  },
  {
    icon: HeartHandshake,
    title: "7/24 destek",
    desc: "Taşıma öncesi, sırasında ve sonrasında WhatsApp ve telefon desteği.",
  },
];

const stats = [
  { value: site.stats.moves, label: "Başarılı taşıma" },
  { value: site.stats.years + " yıl", label: "Sektörel tecrübe" },
  { value: site.stats.rating, label: "Müşteri puanı" },
  { value: site.stats.coverage, label: "İl & ilçe hizmet" },
];

export function WhyUs() {
  return (
    <Section className="relative overflow-hidden bg-brand-950 text-white">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid-pattern bg-grid-pattern opacity-[0.06]"
      />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -z-10 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-brand-700/40 blur-3xl"
      />

      <div className="container">
        <FadeUp>
          <SectionHeading
            eyebrow="Neden biz?"
            title={
              <span className="text-white">
                Mersinli aileler bizi{" "}
                <span className="text-brand-200">tavsiye ediyor</span>
              </span>
            }
            description={
              <span className="text-white/70">
                Eşyanız, evinizdir. Onu da öyle taşırız. 14 yıllık tecrübemiz,
                eğitimli ekibimiz ve sigortalı garantimiz ile fark yaratıyoruz.
              </span>
            }
          />
        </FadeUp>

        <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <StaggerItem key={r.title}>
                <div className="group flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all hover:border-brand-200/30 hover:bg-white/[0.07]">
                  <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-700/40 text-brand-100 ring-1 ring-inset ring-brand-200/20 transition-colors group-hover:bg-brand-200 group-hover:text-brand-900">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">
                      {r.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <FadeUp delay={0.1}>
          <div className="mt-12 grid divide-y divide-white/10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col gap-1 p-7 transition-colors hover:bg-white/[0.06]"
              >
                <div className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {s.value}
                </div>
                <div className="text-sm text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}
