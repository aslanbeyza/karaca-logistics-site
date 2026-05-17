"use client";

import * as React from "react";
import { ClipboardList, PhoneCall, Truck, Wrench } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/ui/motion-fade";

const steps = [
  {
    icon: PhoneCall,
    step: "01",
    title: "İletişim",
    desc: "Telefon veya WhatsApp ile bize ulaşın, ihtiyacınızı kısaca anlatın.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Ücretsiz Ekspertiz",
    desc: "Aynı gün ekibimiz adresinize gelir, eşyaları inceler ve şeffaf bir teklif sunar.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Paketleme",
    desc: "Eşyalarınız özel ambalaj malzemeleriyle hasarsız taşıma için hazırlanır.",
  },
  {
    icon: Truck,
    step: "04",
    title: "Taşıma & Yerleşim",
    desc: "Sigortalı araçlarımızla taşır, yeni adresinizde özenle yerleştiririz.",
  },
];

export function Process() {
  return (
    <Section id="process" className="bg-secondary/40">
      <div className="container">
        <FadeUp>
          <SectionHeading
            eyebrow="Süreç"
            title={
              <>
                4 adımda{" "}
                <span className="text-brand-700">tam dert etmeden</span>{" "}
                taşının
              </>
            }
            description="İlk telefon görüşmesinden son eşyanın yerleştirilmesine kadar tüm süreci sizin için yönetiyoruz."
          />
        </FadeUp>

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <StaggerItem key={s.step}>
                <div className="relative flex h-full flex-col gap-4 rounded-3xl border border-border bg-background p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="grid size-12 place-items-center rounded-2xl bg-brand-700 text-white">
                      <Icon className="size-5" />
                    </div>
                    <span className="font-display text-3xl font-bold text-brand-700/15">
                      {s.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                  </div>
                  {i < steps.length - 1 ? (
                    <div
                      aria-hidden
                      className="absolute right-[-12px] top-1/2 hidden -translate-y-1/2 lg:block"
                    >
                      <svg
                        width="24"
                        height="12"
                        viewBox="0 0 24 12"
                        fill="none"
                        className="text-border"
                      >
                        <path
                          d="M0 6h22M18 2l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  ) : null}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </Section>
  );
}
